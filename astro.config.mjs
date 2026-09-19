import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

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

function draftPagesInDev() {
  return {
    name: 'team-riley-draft-pages',
    hooks: {
      'astro:config:setup': ({ command, injectRoute }) => {
        if (command !== 'dev') return;
        for (const route of draftPages) injectRoute(route);
      },
    },
  };
}

export default defineConfig({
  site: 'https://teamrileyweb.com',
  integrations: [
    tailwind(),
    alpinejs(),
    draftPagesInDev(),
    sitemap({
      filter: (page) => page !== 'https://teamrileyweb.com/digital-health-audit/',
    }),
  ],
});
