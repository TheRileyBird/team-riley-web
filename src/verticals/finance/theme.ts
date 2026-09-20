import type { ThemeOverrides } from '../content/theme';

/** Money Green & Gold: a classic money green rather than the dark teal it started as, so the lighter steps read green instead of grey-teal, with the brass accent kept. Worst white-text contrast on a 600/700 shade: 4.5:1. */
export const theme: ThemeOverrides = {
  '--c-primary-50': '236 244 241',
  '--c-primary-100': '218 234 226',
  '--c-primary-200': '199 223 212',
  '--c-primary-300': '134 185 161',
  '--c-primary-400': '79 153 117',
  '--c-primary-500': '23 121 74',
  '--c-primary-600': '19 102 62',
  '--c-primary-700': '16 82 50',
  '--c-primary-800': '12 65 40',
  '--c-primary-900': '10 51 31',
  '--c-primary-950': '6 34 21',
  '--c-primary-1000': '4 22 13',
  '--c-accent-50': '248 245 239',
  '--c-accent-100': '241 234 223',
  '--c-accent-200': '234 224 206',
  '--c-accent-300': '209 187 149',
  '--c-accent-400': '187 155 101',
  '--c-accent-500': '166 124 52',
  '--c-accent-600': '139 104 44',
  '--c-accent-700': '113 84 35',
  '--c-secondary-300': '150 206 178',
  '--c-secondary-400': '101 183 142',
  '--c-secondary-500': '53 160 106',
  '--c-secondary-600': '45 134 89',
  '--c-secondary-700': '36 109 72',
  '--c-ink-800': '24 76 72',
  '--c-ink-900': '12 38 36',
  '--c-ink-950': '5 16 15',
  '--c-infinity-1': '187 155 101',
  '--c-infinity-2': '166 124 52',
  '--c-infinity-3': '113 84 35',
  '--c-hero-line': '46 134 92',
  '--c-hero-edge-left': '134 185 161',
  '--c-hero-edge-right': '209 187 149',
  // Headline gradient: a darker brass progression. The lightest stop before this one
  // (185 138 47) read yellow and promotional against a fiduciary palette. Still all
  // brass, so the treatment is recognisably the same: contrast on white 6.9 / 5.1 / 3.8.
  '--c-headline-1': '113 84 35',
  '--c-headline-2': '139 104 44',
  '--c-headline-3': '166 124 52',
  // Button fill: gold, not green. The green button read as a flat cartoon block next
  // to the gold the rest of the site runs on. Gold is light enough that white text
  // fails AA on it (2.8:1), so the label switches to the site's ink: 6.9:1 on the
  // light stop, 5.1:1 on the dark one. Against the hero video the fill sits at 7.2:1.
  '--c-cta-1': '191 148 74',
  '--c-cta-2': '139 104 44',
  '--c-cta-text': '5 16 15'
};
