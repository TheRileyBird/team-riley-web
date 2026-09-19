import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import {
  resolveVerticalId,
  sitemapExcludedPaths,
  sites,
  VerticalConfigError,
} from './src/verticals/index.ts';

/**
 * One codebase, three sites. SITE_VERTICAL (health | law | finance) picks which one
 * this build is. Missing or misspelled, the config throws: see src/verticals/index.ts
 * for why there is deliberately no default.
 */
const verticalId = resolveVerticalId(process.env.SITE_VERTICAL);
const site = sites[verticalId];

/**
 * Draft pages: kept in the repo and viewable under `astro dev`, but never built for
 * production. They live in src/drafts/ (not src/pages/), so Astro's file routing
 * never sees them; this integration injects their routes only when the command is
 * `dev`. A production build contains no trace of them — no HTML, no sitemap entry.
 *
 * To publish a draft, move it back to src/pages/ and delete its entry here.
 */
const draftPages = [
  { pattern: '/med-spas', entrypoint: './src/drafts/med-spas.astro' },
  { pattern: '/med-spas-v2', entrypoint: './src/drafts/med-spas-v2.astro' },
  { pattern: '/landing-page', entrypoint: './src/drafts/landing-page.astro' },
];

/**
 * Per-market wiring:
 *  - injects the pages only this market publishes (e.g. health's Digital Health Audit),
 *    so the law build never contains them at all;
 *  - refuses to BUILD a market that isn't launchReady (dev still works, for writing it);
 *  - exposes the market id to pages as import.meta.env.SITE_VERTICAL;
 *  - writes .build-info.json into the output so the dist tests can prove they are
 *    checking this build, not a stale one left over from an earlier run.
 */
function verticalSite() {
  let outDir;
  return {
    name: 'team-riley-vertical-site',
    hooks: {
      'astro:config:setup': ({ command, injectRoute, updateConfig, logger }) => {
        if (command === 'build' && !site.launchReady) {
          throw new VerticalConfigError(
            `"${verticalId}" is not launchReady in src/verticals/sites.json. ` +
              'Finish its content, then set launchReady: true. Use `npm run dev:' +
              `${verticalId}\` to work on it locally.`
          );
        }
        for (const page of site.pages) {
          injectRoute({ pattern: page.pattern, entrypoint: page.entrypoint });
        }
        if (command === 'dev') {
          for (const route of draftPages) injectRoute(route);
        }
        updateConfig({
          vite: { define: { 'import.meta.env.SITE_VERTICAL': JSON.stringify(verticalId) } },
        });
        logger.info(`Building the ${verticalId} site for ${site.domain}`);
      },
      'astro:config:done': ({ config }) => {
        outDir = config.outDir;
      },
      'astro:build:done': () => {
        const stamp = { vertical: verticalId, domain: site.domain, builtAt: Date.now() };
        writeFileSync(
          fileURLToPath(new URL('.build-info.json', outDir)),
          `${JSON.stringify(stamp, null, 2)}\n`
        );
      },
    },
  };
}

const excludedFromSitemap = new Set(sitemapExcludedPaths(site));

export default defineConfig({
  site: site.domain,
  // scripts/build.mjs --all builds each market into its own dist-<id>/.
  outDir: process.env.ASTRO_OUT_DIR ?? './dist',
  integrations: [
    tailwind(),
    alpinejs(),
    verticalSite(),
    sitemap({
      filter: (page) => !excludedFromSitemap.has(new URL(page).pathname),
    }),
  ],
});
