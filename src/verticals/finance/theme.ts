import type { ThemeOverrides } from '../content/theme';

/**
 * Evergreen & Sand — Money without the cliché: evergreen with a warm sand accent. Calm, fee-only feel.
 *
 * Base colors: primary #14635c, accent #9a7440, secondary #3c7a6f.
 * Scales are generated tints and shades of those three; every shade the site puts
 * white text on clears WCAG AA against white (worst case 5.68:1).
 */
export const theme: ThemeOverrides = {
  '--c-primary-50': '236 243 242',
  '--c-primary-100': '217 230 229',
  '--c-primary-200': '180 205 203',
  '--c-primary-300': '133 174 170',
  '--c-primary-400': '76 136 131',
  '--c-primary-500': '20 99 92',
  '--c-primary-600': '17 83 77',
  '--c-primary-700': '14 67 63',
  '--c-primary-800': '11 53 50',
  '--c-primary-900': '8 42 39',
  '--c-primary-950': '6 28 26',
  '--c-primary-1000': '4 18 17',
  '--c-accent-50': '247 244 240',
  '--c-accent-100': '239 233 224',
  '--c-accent-200': '220 208 190',
  '--c-accent-300': '202 183 156',
  '--c-accent-400': '178 149 110',
  '--c-accent-500': '154 116 64',
  '--c-accent-600': '129 97 54',
  '--c-accent-700': '105 79 44',
  '--c-secondary-300': '154 186 180',
  '--c-secondary-400': '107 154 146',
  '--c-secondary-500': '60 122 111',
  '--c-secondary-600': '50 102 93',
  '--c-secondary-700': '41 83 75'
};
