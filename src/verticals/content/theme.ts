/**
 * A market's brand palette, as overrides for the CSS variables declared in
 * src/styles/global.css. Health ships the defaults and overrides nothing; law and
 * finance replace the scales they need.
 *
 * Values are RGB channel triplets ("31 58 99"), matching the variables, so
 * Tailwind's alpha modifiers keep working: bg-primary-300/45 stays translucent.
 */
export type ThemeOverrides = Record<string, string>;

/**
 * `:root:root { ... }` text for the overrides, or '' when a market uses the defaults.
 *
 * The doubled selector is deliberate. Astro injects the global stylesheet link after
 * this inline <style>, so a plain `:root` here loses the tie on source order and the
 * market palette silently does nothing. `:root:root` outranks it by specificity, so
 * the order stops mattering.
 */
export function themeCss(overrides: ThemeOverrides): string {
  const entries = Object.entries(overrides);
  if (entries.length === 0) return '';
  return `:root:root{${entries.map(([name, value]) => `${name}:${value}`).join(';')}}`;
}
