import type { ThemeOverrides } from '../content/theme';

/**
 * Navy & Brass — Traditional firm colors: deep navy with a brass accent. Reads established and conservative.
 *
 * Base colors: primary #1f3a63, accent #a67c34, secondary #4a5f7a.
 * Scales are generated tints and shades of those three; every shade the site puts
 * white text on clears WCAG AA against white (worst case 5.1:1).
 */
export const theme: ThemeOverrides = {
  '--c-primary-50': '237 239 243',
  '--c-primary-100': '219 223 230',
  '--c-primary-200': '183 192 205',
  '--c-primary-300': '139 153 174',
  '--c-primary-400': '85 105 136',
  '--c-primary-500': '31 58 99',
  '--c-primary-600': '26 49 83',
  '--c-primary-700': '21 39 67',
  '--c-primary-800': '17 31 53',
  '--c-primary-900': '13 24 42',
  '--c-primary-950': '9 16 28',
  '--c-primary-1000': '6 10 18',
  '--c-accent-50': '248 245 239',
  '--c-accent-100': '241 234 223',
  '--c-accent-200': '225 210 186',
  '--c-accent-300': '209 187 149',
  '--c-accent-400': '187 155 101',
  '--c-accent-500': '166 124 52',
  '--c-accent-600': '139 104 44',
  '--c-accent-700': '113 84 35',
  '--c-secondary-300': '161 172 186',
  '--c-secondary-400': '117 133 154',
  '--c-secondary-500': '74 95 122',
  '--c-secondary-600': '62 80 102',
  '--c-secondary-700': '50 65 83'
};
