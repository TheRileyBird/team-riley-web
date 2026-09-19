/**
 * Shared setup for the dist project: which build we're checking, and its files.
 *
 * Every value comes from the environment scripts/build.mjs sets. Missing values fail
 * loudly — a dist test that quietly checks nothing is worse than no test.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { resolveVerticalId, sites, type VerticalId, type VerticalSite } from '../../src/verticals/index';

export interface DistUnderTest {
  vertical: VerticalId;
  site: VerticalSite;
  dir: string;
  startedAt: number;
}

export function distUnderTest(): DistUnderTest {
  const dir = process.env.DIST_DIR;
  const startedAt = Number(process.env.BUILD_STARTED_AT);
  if (!dir) throw new Error('DIST_DIR is not set. Run dist tests through `npm run build`.');
  if (!Number.isFinite(startedAt) || startedAt <= 0) {
    throw new Error('BUILD_STARTED_AT is not set. Run dist tests through `npm run build`.');
  }
  if (!existsSync(dir)) throw new Error(`DIST_DIR "${dir}" does not exist. Did the build run?`);
  const vertical = resolveVerticalId(process.env.SITE_VERTICAL);
  return { vertical, site: sites[vertical], dir, startedAt };
}

/** Every built HTML file, as { path: '/pricing/', html }. */
export function htmlPages(dir: string): { path: string; html: string }[] {
  const pages: { path: string; html: string }[] = [];
  const walk = (folder: string) => {
    for (const entry of readdirSync(folder)) {
      const full = join(folder, entry);
      if (statSync(full).isDirectory()) walk(full);
      else if (entry.endsWith('.html')) {
        const rel = relative(dir, full).split(sep).join('/');
        const path = rel === 'index.html' ? '/' : `/${rel.replace(/index\.html$/, '')}`;
        pages.push({ path, html: readFileSync(full, 'utf8') });
      }
    }
  };
  walk(dir);
  return pages;
}

export function attributeValues(html: string, pattern: RegExp): string[] {
  return [...html.matchAll(pattern)].map((match) => match[1]);
}
