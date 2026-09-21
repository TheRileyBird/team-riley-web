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
  // Headline gradient: navy, slate, steel. The saturated sapphire this replaces read
  // as a technology company rather than a firm. Contrast on white 10.0 / 6.2 / 5.6,
  // so every frame of the animation clears AA. The trade is deliberate: at 300%
  // background-size only a third of the gradient shows at once, so quieter stops
  // mean quieter motion.
  '--c-headline-1': '31 58 99',
  '--c-headline-2': '74 95 122',
  '--c-headline-3': '90 99 111',
  // Button fill: navy into slate, with a steel hairline drawing the edge.
  //
  // Measured against the real hero: the backdrop beside the CTA row is rgb(44 43 49),
  // and navy alone sits at 1.23:1 against it, so the button sinks into the video —
  // the complaint that produced the steel one. Slate is 2.14:1, still under the 3:1
  // guidance for a UI boundary. So the fill is navy and a steel hairline carries the
  // separation at 3.04:1 — drawn by a law-scoped rule in global.css, because an edge
  // colour is not a palette token and only this market needs one.
  // White label: 11.4:1 on navy, 6.5:1 on slate.
  '--c-cta-1': '31 58 99',
  '--c-cta-2': '74 95 122',
  // A deep red that sits with navy rather than shouting over it.
  '--c-negative': '178 40 44'
};
