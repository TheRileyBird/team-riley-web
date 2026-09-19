/**
 * A market's brand palette, as overrides for the CSS variables declared in
 * src/styles/global.css. Health ships the defaults and overrides nothing; law and
 * finance replace the scales they need.
 *
 * Values are RGB channel triplets ("31 58 99"), matching the variables, so
 * Tailwind's alpha modifiers keep working: bg-primary-300/45 stays translucent.
 */
export type ThemeOverrides = Record<string, string>;

/** Overrides are merged into the default palette; see ./palette.ts. */
