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
import type { VerticalContent } from './content/types';

const contentById: Record<string, VerticalContent> = {
  health: healthContent,
  law: lawContent,
  finance: financeContent
};

export const verticalId = resolveVerticalId(import.meta.env.SITE_VERTICAL);
export const site = sites[verticalId];
export const content = contentById[verticalId]!;
