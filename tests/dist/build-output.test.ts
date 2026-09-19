import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { readdirSync } from 'node:fs';
import { sites, VERTICAL_IDS } from '../../src/verticals/index';
import { content } from '../../src/verticals/content/loader';
import { attributeValues, distUnderTest, htmlPages } from './helpers';

const { vertical, site, dir, startedAt } = distUnderTest();
const pages = htmlPages(dir);
const DRAFT_PATHS = ['/med-spas/', '/med-spas-v2/', '/landing-page/'];

describe(`${vertical} build in ${dir}/`, () => {
  it('is the build this run just produced, for this market', () => {
    const stampPath = join(dir, '.build-info.json');
    expect(existsSync(stampPath), 'missing .build-info.json').toBe(true);
    const stamp = JSON.parse(readFileSync(stampPath, 'utf8'));
    expect(stamp.vertical).toBe(vertical);
    expect(stamp.domain).toBe(site.domain);
    expect(stamp.builtAt, 'output is older than this build run').toBeGreaterThanOrEqual(startedAt);
  });

  it('built real pages', () => {
    expect(pages.map((page) => page.path)).toEqual(expect.arrayContaining(['/', '/pricing/', '/contact/']));
  });

  it(`points every canonical and og:url at ${site.domain}`, () => {
    const wrong: string[] = [];
    for (const page of pages) {
      const urls = [
        ...attributeValues(page.html, /<link rel="canonical" href="([^"]+)"/g),
        ...attributeValues(page.html, /<meta property="og:url" content="([^"]+)"/g)
      ];
      if (page.path !== '/404.html' && urls.length === 0) wrong.push(`${page.path}: no canonical`);
      for (const url of urls) {
        if (new URL(url).origin !== site.domain) wrong.push(`${page.path}: ${url}`);
      }
    }
    expect(wrong).toEqual([]);
  });

  it('lists only this domain in the sitemap, minus pages marked inSitemap: false', () => {
    const xml = readFileSync(join(dir, 'sitemap-0.xml'), 'utf8');
    const locs = attributeValues(xml, /<loc>([^<]+)<\/loc>/g);
    expect(locs.length).toBeGreaterThan(0);
    for (const loc of locs) expect(new URL(loc).origin, loc).toBe(site.domain);
    const paths = locs.map((loc) => new URL(loc).pathname);
    for (const page of site.pages) {
      const path = `${page.pattern}/`;
      expect(paths.includes(path), path).toBe(page.inSitemap);
    }
  });

  it("publishes this market's own pages and no other market's", () => {
    const built = new Set(pages.map((page) => page.path));
    for (const page of site.pages) expect(built.has(`${page.pattern}/`), page.pattern).toBe(true);
    for (const other of VERTICAL_IDS.filter((id) => id !== vertical)) {
      for (const page of sites[other].pages) {
        expect(built.has(`${page.pattern}/`), `${other} page ${page.pattern}`).toBe(false);
      }
    }
  });

  it('contains no draft pages', () => {
    const built = new Set(pages.map((page) => page.path));
    for (const path of DRAFT_PATHS) expect(built.has(path), path).toBe(false);
  });

  it('never links to a page that was not built', () => {
    const built = new Set(pages.map((page) => page.path));
    const broken = new Set<string>();
    for (const page of pages) {
      for (const href of attributeValues(page.html, /href="(\/[^"#?]*)/g)) {
        if (/\.[a-z0-9]+$/i.test(href)) continue; // assets: pdf, png, xml
        const path = href.endsWith('/') ? href : `${href}/`;
        if (!built.has(path)) broken.add(`${page.path} -> ${href}`);
      }
    }
    expect([...broken]).toEqual([]);
  });

  it('tags every page and both forms with this market, for the shared inbox', () => {
    for (const page of pages) {
      expect(page.html, `${page.path}: missing data-vertical`).toContain(`data-vertical="${vertical}"`);
    }
    for (const path of ['/contact/', '/start/']) {
      const form = pages.find((page) => page.path === path);
      expect(form, `${path} not built`).toBeDefined();
      expect(form!.html, `${path}: form is missing the hidden vertical field`).toContain(
        `<input type="hidden" name="vertical" value="${vertical}"`
      );
    }
  });

  it('ships only this market hero clips', () => {
    const assets = readdirSync(join(dir, '_astro'));
    const videos = assets.filter((file) => file.endsWith('.mp4'));
    expect(videos.length, `videos in ${dir}/_astro`).toBe(content[vertical].home.hero.clips.length);
    for (const other of VERTICAL_IDS.filter((id) => id !== vertical)) {
      const strays = videos.filter((file) => file.startsWith(`${other}-`));
      expect(strays, `${other} footage in the ${vertical} build`).toEqual([]);
    }
  });
});
