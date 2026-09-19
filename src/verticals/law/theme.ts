import type { ThemeOverrides } from '../content/theme';

/** Navy & Silver: navy primary, steel accent. Steel rather than a true silver, which sits near 2:1 on white and cannot carry text or a button. Worst white-text contrast on a 600/700 shade: 6.09:1. */
export const theme: ThemeOverrides = {
  '--c-primary-50': '237 239 243',
  '--c-primary-100': '219 223 230',
  '--c-primary-200': '201 208 218',
  '--c-primary-300': '139 153 174',
  '--c-primary-400': '85 105 136',
  '--c-primary-500': '31 58 99',
  '--c-primary-600': '26 49 83',
  '--c-primary-700': '21 39 67',
  '--c-primary-800': '17 31 53',
  '--c-primary-900': '13 24 42',
  '--c-primary-950': '9 16 28',
  '--c-primary-1000': '6 10 18',
  '--c-accent-50': '243 244 245',
  '--c-accent-100': '231 233 235',
  '--c-accent-200': '219 222 225',
  '--c-accent-300': '178 184 191',
  '--c-accent-400': '143 151 162',
  '--c-accent-500': '107 118 132',
  '--c-accent-600': '90 99 111',
  '--c-accent-700': '73 80 90',
  '--c-secondary-300': '161 172 186',
  '--c-secondary-400': '117 133 154',
  '--c-secondary-500': '74 95 122',
  '--c-secondary-600': '62 80 102',
  '--c-secondary-700': '50 65 83',
  '--c-ink-800': '28 48 84',
  '--c-ink-900': '14 24 42',
  '--c-ink-950': '6 10 18',
  '--c-infinity-1': '143 151 162',
  '--c-infinity-2': '107 118 132',
  '--c-infinity-3': '73 80 90',
  '--c-hero-line': '53 78 115',
  '--c-hero-edge-left': '139 153 174',
  '--c-hero-edge-right': '178 184 191',
  // Headline gradient: primary-400, accent-500, secondary-400 instead of the default primary-800 start,
  // which in this palette is near-black (16.5:1 on white for law, 13.4:1 for finance)
  // and made the animated text read as flat black.
  // All three stops are saturated blues (chroma 150+). Earlier versions mixed navy
  // with steel: a static frame then landed on a near-grey and the animation read as
  // muted, because at 300% background-size only a third of the gradient is visible
  // at a time. Silver stays the site's accent; the headline carries the blue.
  // Contrast on white: 6.1 / 3.4 / 4.9.
  '--c-headline-1': '31 95 191',
  '--c-headline-2': '74 140 224',
  '--c-headline-3': '58 111 196',
  // Button fill: brushed steel, the site's silver. The sapphire that fixed the
  // contrast problem read as a generic tech blue against a navy-and-silver brand.
  // White text holds at 4.6:1 on the light stop and 7.4:1 on the dark one; the fill
  // sits at 4.3:1 against the hero video and 4.6:1 against a white section.
  '--c-cta-1': '107 118 132',
  '--c-cta-2': '73 80 90'
};
