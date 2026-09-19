import { readFileSync } from 'node:fs';

import { describe, expect, it } from 'vitest';
import { themeCss } from './content/theme';
import { theme as financeTheme } from './finance/theme';
import { theme as healthTheme } from './health/theme';
import { theme as lawTheme } from './law/theme';

const markets = { health: healthTheme, law: lawTheme, finance: financeTheme };

/** The variables global.css declares; a market may override these and no others. */
const declared = new Set(
  [...readFileSync('src/styles/global.css', 'utf8').matchAll(/(--c-[a-z]+-\d+):/g)].map((m) => m[1])
);

describe('market palettes', () => {
  it('declares a full default palette in global.css', () => {
    expect(declared.size).toBeGreaterThan(20);
  });

  it('health uses the defaults', () => {
    expect(healthTheme).toEqual({});
    expect(themeCss(healthTheme)).toBe('');
  });

  it.each(['law', 'finance'] as const)('%s overrides only declared variables, as rgb channels', (market) => {
    const theme = markets[market];
    expect(Object.keys(theme).length).toBeGreaterThan(20);
    for (const [name, value] of Object.entries(theme)) {
      expect(declared.has(name), `${market}: ${name} is not declared in global.css`).toBe(true);
      expect(value, `${market}: ${name}`).toMatch(/^\d{1,3} \d{1,3} \d{1,3}$/);
    }
  });

  it('wins over the stylesheet regardless of injection order', () => {
    expect(themeCss({ '--c-primary-500': '1 2 3' })).toBe(':root:root{--c-primary-500:1 2 3}');
  });
});
