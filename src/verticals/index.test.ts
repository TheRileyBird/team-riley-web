import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  VERTICAL_IDS,
  VerticalConfigError,
  resolveVerticalId,
  sitemapExcludedPaths,
  sites
} from './index';

describe('resolveVerticalId', () => {
  it.each(VERTICAL_IDS)('accepts %s', (id) => {
    expect(resolveVerticalId(id)).toBe(id);
  });

  it('trims surrounding whitespace from the env value', () => {
    expect(resolveVerticalId(' law ')).toBe('law');
  });

  it.each([undefined, '', '   '])('refuses a missing value (%j) instead of defaulting to health', (raw) => {
    expect(() => resolveVerticalId(raw)).toThrow(VerticalConfigError);
    expect(() => resolveVerticalId(raw)).toThrow(/not set/);
  });

  it.each(['laww', 'Law', 'medical'])('refuses an unknown value (%s) and names the valid ones', (raw) => {
    expect(() => resolveVerticalId(raw)).toThrow(/Unknown SITE_VERTICAL.*health, law, finance/);
  });
});

describe('sites.json', () => {
  it('has exactly one entry per vertical', () => {
    expect(Object.keys(sites).sort()).toEqual([...VERTICAL_IDS].sort());
  });

  it('gives every market a distinct https origin with no path', () => {
    const domains = VERTICAL_IDS.map((id) => sites[id].domain);
    for (const domain of domains) {
      const url = new URL(domain);
      expect(url.protocol, domain).toBe('https:');
      expect(url.origin, domain).toBe(domain);
    }
    expect(new Set(domains).size).toBe(domains.length);
  });

  it('keeps health on the existing domain', () => {
    expect(sites.health.domain).toBe('https://teamrileyweb.com');
  });

  it('points every market-only page at a file that exists', () => {
    for (const id of VERTICAL_IDS) {
      for (const page of sites[id].pages) {
        expect(existsSync(page.entrypoint), `${id}: ${page.entrypoint}`).toBe(true);
        expect(page.pattern, `${id}: ${page.pattern}`).toMatch(/^\/[a-z0-9-/]*$/);
      }
    }
  });

  it('never registers the same path twice within a market', () => {
    for (const id of VERTICAL_IDS) {
      const patterns = sites[id].pages.map((page) => page.pattern);
      expect(new Set(patterns).size, id).toBe(patterns.length);
    }
  });
});

describe('sitemapExcludedPaths', () => {
  it('lists only pages marked inSitemap: false, with the trailing slash the sitemap uses', () => {
    expect(sitemapExcludedPaths(sites.health)).toEqual(['/digital-health-audit/']);
    expect(
      sitemapExcludedPaths({
        brandName: 'x',
        domain: 'https://example.com',
        launchReady: true,
        pages: [
          { pattern: '/a', entrypoint: 'a.astro', inSitemap: true },
          { pattern: '/b/', entrypoint: 'b.astro', inSitemap: false }
        ]
      })
    ).toEqual(['/b/']);
  });
});
