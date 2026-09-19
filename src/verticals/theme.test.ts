import { describe, expect, it } from 'vitest';
import { DEFAULT_PALETTE, glslColor, paletteCss, paletteFor } from './content/palette';
import { theme as financeTheme } from './finance/theme';
import { theme as healthTheme } from './health/theme';
import { theme as lawTheme } from './law/theme';

const markets = { health: healthTheme, law: lawTheme, finance: financeTheme } as const;
const CHANNELS = /^\d{1,3} \d{1,3} \d{1,3}$/;

describe('market palettes', () => {
  it('health ships the defaults and overrides nothing', () => {
    expect(healthTheme).toEqual({});
    expect(paletteFor(healthTheme)).toEqual(DEFAULT_PALETTE);
  });

  it.each(['law', 'finance'] as const)('%s overrides only known tokens, as rgb channels', (market) => {
    const theme = markets[market];
    expect(Object.keys(theme).length).toBeGreaterThan(20);
    for (const [token, value] of Object.entries(theme)) {
      expect(DEFAULT_PALETTE[token], `${market}: ${token} is not a palette token`).toBeDefined();
      expect(value, `${market}: ${token}`).toMatch(CHANNELS);
    }
  });

  it.each(['health', 'law', 'finance'] as const)('%s gives the hero shader all three colors', (market) => {
    const palette = paletteFor(markets[market]);
    for (const token of ['--c-hero-line', '--c-hero-edge-left', '--c-hero-edge-right']) {
      expect(palette[token], `${market}: ${token}`).toMatch(CHANNELS);
      // GLSL floats: three 0..1 values the fragment shader can drop into a vec4
      const glsl = glslColor(palette, token);
      expect(glsl).toMatch(/^\d\.\d{3}, \d\.\d{3}, \d\.\d{3}$/);
      for (const channel of glsl.split(', ').map(Number)) {
        expect(channel).toBeGreaterThanOrEqual(0);
        expect(channel).toBeLessThanOrEqual(1);
      }
    }
  });

  it('gives each market its own hero colors, not health blue', () => {
    const heroOf = (market: keyof typeof markets) =>
      glslColor(paletteFor(markets[market]), '--c-hero-line');
    expect(heroOf('law')).not.toBe(heroOf('health'));
    expect(heroOf('finance')).not.toBe(heroOf('health'));
    expect(heroOf('law')).not.toBe(heroOf('finance'));
  });

  it('declares every token and outranks the stylesheet on specificity', () => {
    const css = paletteCss(paletteFor(lawTheme));
    expect(css.startsWith(':root:root{')).toBe(true);
    for (const token of Object.keys(DEFAULT_PALETTE)) expect(css).toContain(`${token}:`);
  });

  it('refuses an unknown token instead of emitting a broken shader color', () => {
    expect(() => glslColor(DEFAULT_PALETTE, '--c-nope-500')).toThrow(/Unknown palette token/);
  });
});
