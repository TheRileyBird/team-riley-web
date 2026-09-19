import type { ThemeOverrides } from '../content/theme';

/** Evergreen & Gold: evergreen primary, brass accent. The warm half of the metal split that keeps finance and law apart. Worst white-text contrast on a 600/700 shade: 5.1:1. */
export const theme: ThemeOverrides = {
  '--c-primary-50': '236 243 242',
  '--c-primary-100': '217 230 229',
  '--c-primary-200': '199 218 216',
  '--c-primary-300': '133 174 170',
  '--c-primary-400': '76 136 131',
  '--c-primary-500': '20 99 92',
  '--c-primary-600': '17 83 77',
  '--c-primary-700': '14 67 63',
  '--c-primary-800': '11 53 50',
  '--c-primary-900': '8 42 39',
  '--c-primary-950': '6 28 26',
  '--c-primary-1000': '4 18 17',
  '--c-accent-50': '248 245 239',
  '--c-accent-100': '241 234 223',
  '--c-accent-200': '234 224 206',
  '--c-accent-300': '209 187 149',
  '--c-accent-400': '187 155 101',
  '--c-accent-500': '166 124 52',
  '--c-accent-600': '139 104 44',
  '--c-accent-700': '113 84 35',
  '--c-secondary-300': '154 186 180',
  '--c-secondary-400': '107 154 146',
  '--c-secondary-500': '60 122 111',
  '--c-secondary-600': '50 102 93',
  '--c-secondary-700': '41 83 75',
  '--c-ink-900': '11 33 40',
  '--c-ink-950': '5 14 17',
  '--c-infinity-1': '187 155 101',
  '--c-infinity-2': '166 124 52',
  '--c-infinity-3': '113 84 35',
  '--c-hero-line': '44 115 108',
  '--c-hero-edge-left': '133 174 170',
  '--c-hero-edge-right': '209 187 149',
  // Headline gradient: primary-500, accent-500, secondary-500 instead of the default primary-800 start,
  // which in this palette is near-black (16.5:1 on white for law, 13.4:1 for finance)
  // and made the animated text read as flat black.
  '--c-headline-1': '20 99 92',
  '--c-headline-2': '166 124 52',
  '--c-headline-3': '60 122 111'
};
