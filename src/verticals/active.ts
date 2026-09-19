/**
 * The market this build is for, ready for pages to use:
 *
 *   ---
 *   import { content, site } from '../verticals/active';
 *   ---
 *   <h1>{content.home.hero.heading.lead}</h1>
 *
 * SITE_VERTICAL is baked in at build time by astro.config.mjs (vite define), so
 * every page gets the right market with no runtime lookup. Importing this from a
 * plain unit test will throw, by design: tests should exercise the content files
 * or the resolver directly, not the "active" one.
 */
import { resolveVerticalId, sites } from './index';
import { content as healthContent } from './health/content';
import { content as lawContent } from './law/content';
import { content as financeContent } from './finance/content';
import { theme as healthTheme } from './health/theme';
import { theme as lawTheme } from './law/theme';
import { theme as financeTheme } from './finance/theme';
import { paletteCss, paletteFor } from './content/palette';
import type { ThemeOverrides } from './content/theme';
import { priceOverrides as healthPrices } from './health/pricing';
import { priceOverrides as lawPrices } from './law/pricing';
import { priceOverrides as financePrices } from './finance/pricing';
import { applyPriceOverrides, visibleServices, type PriceOverride } from '../data/services';
import type { VerticalContent } from './content/types';

const contentById: Record<string, VerticalContent> = {
  health: healthContent,
  law: lawContent,
  finance: financeContent
};

export const verticalId = resolveVerticalId(import.meta.env.SITE_VERTICAL);
export const site = sites[verticalId];
export const content = contentById[verticalId]!;

const themeById: Record<string, ThemeOverrides> = {
  health: healthTheme,
  law: lawTheme,
  finance: financeTheme
};

/** This market's resolved palette, for CSS (themeStyle) and for the hero shader. */
export const palette = paletteFor(themeById[verticalId]!);

/** Inline <style> text declaring the palette for this market. */
export const themeStyle = paletteCss(palette);

const pricesById: Record<string, PriceOverride[]> = {
  health: healthPrices,
  law: lawPrices,
  finance: financePrices
};

/** The price sheet this market publishes: shared data plus its own overrides. */
export const services = applyPriceOverrides(visibleServices, pricesById[verticalId]!);
