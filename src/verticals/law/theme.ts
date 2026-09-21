import type { ThemeOverrides } from '../content/theme';

/**
 * Navy & Silver.
 *
 * The site read as black and white, and the cause was in this file rather than in
 * any component: the mid-tones of the primary ramp were almost grey (primary-400
 * was 85 105 136, primary-300 was 139 153 174, both within a few points of
 * neutral). Every mid-tone element inherited that, so recolouring pieces one at a
 * time kept losing to the palette underneath.
 *
 * The ramp now carries real chroma at 300-500, so "deep blue" is actually available
 * to the headline, the shader, the buttons and the icon tiles. Silver stays the
 * accent, brightened a little so it reads as steel with white in it rather than as
 * grey. Worst white-text contrast on a 600/700 shade: 7.4:1.
 */
export const theme: ThemeOverrides = {
  '--c-primary-50': '240 245 252',
  '--c-primary-100': '219 231 247',
  '--c-primary-200': '189 212 240',
  '--c-primary-300': '138 178 226',
  '--c-primary-400': '82 134 205',
  '--c-primary-500': '37 94 173',
  '--c-primary-600': '28 75 145',
  '--c-primary-700': '22 59 117',
  '--c-primary-800': '18 47 94',
  '--c-primary-900': '14 36 73',
  '--c-primary-950': '10 25 51',
  '--c-primary-1000': '6 16 33',
  // Silver, with white worked into the light steps so it reads as steel.
  '--c-accent-50': '245 247 250',
  '--c-accent-100': '236 239 243',
  '--c-accent-200': '224 229 235',
  '--c-accent-300': '196 203 212',
  '--c-accent-400': '165 175 188',
  '--c-accent-500': '128 141 158',
  '--c-accent-600': '101 113 129',
  '--c-accent-700': '78 88 102',
  // Supporting slate blue: still blue, one step quieter than primary.
  '--c-secondary-300': '150 178 214',
  '--c-secondary-400': '100 140 190',
  '--c-secondary-500': '58 104 163',
  '--c-secondary-600': '46 85 136',
  '--c-secondary-700': '37 68 110',
  '--c-ink-800': '22 44 82',
  '--c-ink-900': '12 26 52',
  '--c-ink-950': '6 14 30',
  // The infinity mark: silver floating over a blue hint, rather than grey on grey.
  '--c-infinity-1': '224 229 235',
  '--c-infinity-2': '165 175 188',
  '--c-infinity-3': '82 134 205',
  // The pricing shader. The lines carry the blue; the edges fade to silver.
  '--c-hero-line': '66 133 219',
  '--c-hero-edge-left': '138 178 226',
  '--c-hero-edge-right': '196 203 212',
  // Headline gradient: blue throughout, no grey stop. Contrast on white 8.5 / 3.7 / 5.7,
  // so every frame clears AA for the large type it is used on.
  '--c-headline-1': '28 75 145',
  '--c-headline-2': '82 134 205',
  '--c-headline-3': '58 104 163',
  // Button fill: a deeper blue gradient, and no border — the steel hairline that used
  // to draw the edge is gone by request. White label holds at 6.4:1 on the light stop
  // and 11:1 on the dark one. Against the hero video the fill measures 2.2:1, up from
  // 1.2:1 but still below the 3:1 you would want for a boundary; the drop shadow
  // carries the rest.
  '--c-cta-1': '37 94 173',
  '--c-cta-2': '22 59 117',
  // A deep red that sits with navy rather than shouting over it.
  '--c-negative': '178 40 44'
};
