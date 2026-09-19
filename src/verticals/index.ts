/**
 * Which market a build is for. One codebase builds three sites; SITE_VERTICAL picks
 * the one being built, and every domain, page list and (later) piece of copy flows
 * from that choice.
 *
 *   SITE_VERTICAL ──▶ resolveVerticalId() ──▶ sites.json[id] ──▶ astro.config (site, pages)
 *        unset / "" ──▶ VerticalConfigError   (build fails; Netlify keeps last good deploy)
 *        "laww"     ──▶ VerticalConfigError   (same — never a silent fallback to health)
 *
 * A silent fallback would publish the health site on the law domain, which nobody
 * would notice until a prospect did. A failed deploy is visible and harmless.
 *
 * sites.json is plain JSON so astro.config.mjs and scripts/build.mjs (plain Node)
 * can read it without a TypeScript step.
 */
import sitesJson from './sites.json';

export const VERTICAL_IDS = ['health', 'law', 'finance'] as const;
export type VerticalId = (typeof VERTICAL_IDS)[number];

export interface VerticalPage {
  /** URL path, e.g. "/digital-health-audit". */
  pattern: string;
  /** Page file, relative to the project root. */
  entrypoint: string;
  /** false = reachable by direct link, excluded from the sitemap. */
  inSitemap: boolean;
}

export interface VerticalSite {
  brandName: string;
  /** Origin the site is served from. Drives canonical, og:url and the sitemap. */
  domain: string;
  /** false = the build refuses to run, so an unfinished market can never deploy. */
  launchReady: boolean;
  /** Pages only this market publishes. Shared pages live in src/pages/. */
  pages: VerticalPage[];
}

export const sites: Record<VerticalId, VerticalSite> = sitesJson;

export class VerticalConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'VerticalConfigError';
  }
}

export function isVerticalId(value: string): value is VerticalId {
  return (VERTICAL_IDS as readonly string[]).includes(value);
}

export function resolveVerticalId(raw: string | undefined): VerticalId {
  const value = raw?.trim() ?? '';
  if (value === '') {
    throw new VerticalConfigError(
      `SITE_VERTICAL is not set. Expected one of: ${VERTICAL_IDS.join(', ')}. ` +
        'Set it in the Netlify site environment, or use `npm run dev:law` etc. locally.'
    );
  }
  if (!isVerticalId(value)) {
    throw new VerticalConfigError(
      `Unknown SITE_VERTICAL "${value}". Expected one of: ${VERTICAL_IDS.join(', ')}.`
    );
  }
  return value;
}

/** Paths (with trailing slash, as the sitemap writes them) excluded from the sitemap. */
export function sitemapExcludedPaths(site: VerticalSite): string[] {
  return site.pages.filter((page) => !page.inSitemap).map((page) => `${page.pattern.replace(/\/$/, '')}/`);
}
