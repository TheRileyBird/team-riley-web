/**
 * The market this build is for, ready for pages to use:
 *
 *   ---
 *   import { content, site } from '../verticals/active';
 *   ---
 *   <h1>{content.home.hero.heading.lead}</h1>
 *
 * The three `@active/*` imports are aliases, pointed at this market's files by
 * astro.config.mjs. That matters beyond tidiness: importing all three markets here
 * pulled every market's hero footage into every build (35MB of _astro), because a
 * bundler cannot drop an import that a lookup table references. Now a site ships
 * only its own clips.
 *
 * Importing this from a plain unit test will throw, by design — tests should
 * exercise the content files or the resolver directly, not the "active" one.
 */
import { content as activeContent } from '@active/content';
import { theme as activeTheme } from '@active/theme';
import { priceOverrides as activePrices } from '@active/pricing';
import { resolveVerticalId, sites } from './index';
import { paletteCss, paletteFor } from './content/palette';
import { applyPriceOverrides, visibleServices } from '../data/services';

export const verticalId = resolveVerticalId(import.meta.env.SITE_VERTICAL);
export const site = sites[verticalId];
export const content = activeContent;

/** This market's resolved palette, for CSS (themeStyle) and for the hero shader. */
export const palette = paletteFor(activeTheme);

/** Inline <style> text declaring the palette for this market. */
export const themeStyle = paletteCss(palette);

/** The price sheet this market publishes: shared data plus its own overrides. */
export const services = applyPriceOverrides(visibleServices, activePrices);
