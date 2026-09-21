/**
 * The brand palette, in TypeScript, so both CSS and code can use it.
 *
 * CSS gets it as variables (BaseLayout emits `:root{...}` from `paletteCss`), and
 * code that cannot read CSS variables — the WebGL hero shader, which needs GLSL
 * floats — reads the same values through `glslColor`. One source of truth, so a
 * market's palette reaches the animated background too, not just the buttons.
 *
 * Health's values are the defaults; a market's theme.ts overrides what it changes.
 */
import type { ThemeOverrides } from './theme';

export type Palette = Record<string, string>;

/** Health: the original Team Riley palette. RGB channels, matching the CSS variables. */
export const DEFAULT_PALETTE: Palette = {
  '--c-primary-50': '239 246 255',
  '--c-primary-100': '219 234 254',
  '--c-primary-200': '191 219 254',
  '--c-primary-300': '147 197 253',
  '--c-primary-400': '96 165 250',
  '--c-primary-500': '59 130 246',
  '--c-primary-600': '37 99 235',
  '--c-primary-700': '29 78 216',
  '--c-primary-800': '30 64 175',
  '--c-primary-900': '30 58 138',
  '--c-primary-950': '23 37 84',
  '--c-primary-1000': '13 21 42',
  '--c-accent-50': '236 254 255',
  '--c-accent-100': '207 250 254',
  '--c-accent-200': '103 232 249',
  '--c-accent-300': '34 211 238',
  '--c-accent-400': '6 182 212',
  '--c-accent-500': '8 145 178',
  '--c-accent-600': '14 116 144',
  '--c-accent-700': '21 94 117',
  '--c-secondary-300': '193 171 251',
  '--c-secondary-400': '167 139 250',
  '--c-secondary-500': '139 92 246',
  '--c-secondary-600': '124 58 237',
  '--c-secondary-700': '109 40 217',
  // The three stops of the animated headline gradient, in order. Kept as their own
  // tokens because the scale steps that suit health (primary-800) are near-black in
  // the law and finance palettes: 16.5:1 and 13.4:1 against white, which reads as
  // plain black type. Every stop here stays roughly between 3:1 and 8:1 — dark
  // enough to read, light enough to still show its hue.
  '--c-headline-1': '30 64 175',
  '--c-headline-2': '8 145 178',
  '--c-headline-3': '139 92 246',
  // Primary button fill, light to dark. Its own tokens because primary-800/900 are
  // vivid blue on health but near-black on law and finance: measured 1.2:1 and 1.6:1
  // against their own hero backgrounds, so the button vanished into the page, where
  // health's sits at 2.08:1 with far more chroma.
  '--c-cta-1': '30 64 175',
  '--c-cta-2': '30 58 138',
  // Button label. A market whose CTA fill is light enough that white text fails AA on
  // it (finance's gold sits at 2.8:1 under white) overrides this with its ink.
  '--c-cta-text': '255 255 255',
  // The colour of a loss. The "what you lose" lists marked their items with the
  // secondary scale, which is violet on health and green on finance — a green cross
  // beside a failure reads as approval. Each market sets a red that belongs to it.
  '--c-negative': '190 46 46',
  // Dark surfaces: the footer and the alternating dark service bands. Separate from
  // the primary scale because they are near-black with only a hint of the brand hue
  // — health's are Tailwind's slate 900/950, which is why every market's footer was
  // the same blue-black before these existed.
  '--c-ink-800': '30 41 59',
  '--c-ink-900': '15 23 42',
  '--c-ink-950': '2 6 23',
  // The three stops of the "Unlimited Updates" infinity animation, which cycles
  // through them. Health rotates blue -> cyan -> violet; law and finance override
  // these to stay in their gold, because the primary/secondary mix put near-black
  // navy and green in a gradient that sits on a white card.
  '--c-infinity-1': '29 78 216',
  '--c-infinity-2': '8 145 178',
  '--c-infinity-3': '139 92 246',
  // The homepage hero shader's three colors: the plasma lines, and the left and
  // right ends of the gradient they fade into. Separate tokens because the shader
  // wants brighter, more saturated values than any button shade.
  '--c-hero-line': '20 82 255',
  '--c-hero-edge-left': '128 209 255',
  '--c-hero-edge-right': '184 133 255'
};

export function paletteFor(overrides: ThemeOverrides): Palette {
  return { ...DEFAULT_PALETTE, ...overrides };
}

/**
 * `:root:root { ... }` for the whole palette. The doubled selector is deliberate:
 * Astro injects the global stylesheet after this inline style, so a plain `:root`
 * would lose the tie on source order and the palette would silently do nothing.
 */
export function paletteCss(palette: Palette): string {
  return `:root:root{${Object.entries(palette)
    .map(([name, value]) => `${name}:${value}`)
    .join(';')}}`;
}

/** A token as GLSL floats, e.g. "0.078, 0.322, 1.000" for use in a vec4. */
export function glslColor(palette: Palette, token: string): string {
  const value = palette[token];
  if (!value) throw new Error(`Unknown palette token "${token}".`);
  return value
    .split(' ')
    .map((channel) => (Number(channel) / 255).toFixed(3))
    .join(', ');
}
