# Tasks

Queue of work for Claude. Add new tasks to the bottom. Do not remove or edit an
unchecked task unless you are starting it.

## Rules
- Work on only one task at a time.
- New tasks go at the bottom of the list.
- Do not abandon or interrupt the current task unless the user explicitly says "interrupt".
- Finish, test, and verify the current task before starting the next.
- Before starting another task, re-read this file and select the oldest pending (unchecked) task.
- After completing a task, check it off, briefly tell the user it's done, and state which task is starting next.
- Do not combine unrelated tasks into one implementation.

## Queue
- [x] I have other clients, [ACCBP](https://www.accbp.com/) and then Secure Logic USA https://securelogicusa.com/ and then joy within birth. ACCBP is a building scientist who does home estimates and then SecureLogicUSA makes a product that cleans the air And a custom mister that helps to clean large facilities. I'd like this to go on my portfolio page. Might need its own section. 
  Done 2026-09-18: Added Genesis360 (Secure Logic brand, links to genesis360.com per the user's later message) to Medical & Clinical and Joy Within Birth to Holistic in src/pages/portfolio.astro, with live-site screenshots in src/assets/sites/. ACCBP was not added here; it is tracked as its own task further down. No separate section, since both fit existing ones.
- [x] Another section, I currently have Grace Midwifery and then I have a new client who's going to launch soon called Joy Within Birth https://www.joywithinbirth.com/
  Done 2026-09-18: Joy Within Birth card added next to Grace Midwifery in the Holistic & Emotional section.
- [x] Portfolio Medical & Clinical section: order Genesis360/Secure Logic first, then CFC, then DSM-MD, then Sleep Labs. Keep 3 visible, with an infinite auto-moving carousel on desktop; on mobile show them stacked in that same order
  Done 2026-09-18: New src/components/PortfolioCarousel.astro. From 1024px up it shows 3 cards at a time in an infinite marquee (45s loop, pauses on hover/focus). The cards are rendered twice for a seamless loop, with the copy aria-hidden + inert. Below 1024px the cards stack (2 columns at md). With prefers-reduced-motion it falls back to the 2-column grid. Medical cards reordered: Genesis360, CFC, DSM-MD, Sleep Labs.
- [x] Genesis360 card badge: replace "Biosecurity" with "Automated Cleaning" or "Environmental Health"
  Done 2026-09-18: Badge now reads "Environmental Health" (picked over "Automated Cleaning" because it sits in the Healthcare Providers section). A one-word swap if you'd prefer the other.
- [x] Portfolio Mind, Body & Spirit section: same 3-visible desktop carousel / mobile stack, order Joy Within Birth, Grace Midwifery, Dom Luke, Masculine Confidence Framework
  Done 2026-09-18: Holistic section now uses PortfolioCarousel. Order is Joy Within Birth, Grace Midwifery Collective, Dom Luke, Masculine Confidence Framework.
- [x] Pick a different image for the Secure Logic/Genesis360 card (user is capturing screenshots; attached /private/tmp/claude-502/-Users-joshuariley-Sites-team-riley-web/27284853-6ecf-48c8-ba9b-eee92fcdaec1/images/1.png)
  Done 2026-09-18: The user supplied ~/Sites/securelogic/src/assets/images/genesis360-aeroguard-hvac.jpg (AeroGuard unit fogging an HVAC coil). It's copied to src/assets/images/ and used on the Genesis360 card, cropped at object-[50%_35%] so the fog/coil is the focal point. The unused src/assets/sites/genesis360.jpg screenshot was removed.
- [x] Secure Logic is two words; fix the spelling "SecureLogic" everywhere
  Done 2026-09-18: The card title now reads "Genesis360 by Secure Logic". That was the only occurrence in the site source (the other was an HTML comment, also fixed).
- [x] Add https://www.accbp.com/ (ACC Building Performance) to the portfolio; image options: ~/Sites/acc/src/assets/images/social-share.png or ~/Sites/acc/src/assets/images/assessment.png
  Done 2026-09-18: ACC Building Performance card added as the 5th card in the Medical & Clinical carousel (after Sleep Labs), with a "Healthy Homes" badge. Used assessment.png (converted to src/assets/images/accbp-assessment.jpg) rather than the logo social-share image, to match the other cards' content-photo style. At tablet width (2 columns) the 5th card sits alone on its row.
- [x] Decide whether portfolio cards should use sites' social share images (show the title) or content-relevant images like now
  Done 2026-09-18: Decided: content images over social share images. Social share images are mostly logo + title, which repeats the card's own title overlay. Content photos show at a glance what each business does. No code change needed; the cards already use content images.
- [x] Portfolio carousel should not scroll constantly: auto-advance one card at a time, stay put for a few seconds, then calmly scroll to the next
  Done 2026-09-18: PortfolioCarousel no longer runs a continuous marquee. It rests for 4s (the `interval` prop), then slides one card over 900ms with ease-in-out, pausing on hover/focus and when the tab is hidden. After the last card it snaps invisibly back to the start through the cloned set, so the loop always moves forward. Verified in headless Chrome: after 2 steps it rests aligned on DSM-MD / Sleep Labs / ACC, and it wraps back to Genesis360 / CFC / DSM-MD.
- [x] Portfolio carousel: add arrows that let the user scroll and signal there are more cards not currently shown
  Done 2026-09-18: PortfolioCarousel now has round prev/next arrows straddling the left/right edges, centered on the cards (desktop only, the same breakpoint as the carousel; mobile still stacks). Both directions loop endlessly, and a click restarts the 4s auto-advance timer. Keyboard focus pauses autoplay; a mouse click doesn't leave it stuck paused. Verified by driving real clicks in Chrome: next, prev, prev past the first card (wraps to ACC), and 7 rapid clicks all land on the correct card, and autoplay resumes afterward.
- [x] Portfolio: make the entire card link out to the live site
  Done 2026-09-18: Each card's "View Live Site" link is now a stretched link (an ::after overlay covering the card), so clicking anywhere on the card opens the live site in a new tab, while each card still has a single real link for keyboard/screen readers. Hovering the card darkens the link text; keyboard focus draws a ring around the whole card. Applied to all 12 portfolio cards; verified by hit-testing the image and description of each. The Nazareth feature panel is a different layout and was left alone.
- [x] Portfolio carousel arrows: make them dark and space them off the cards (put them further out)
  Done 2026-09-18: Arrows are now gray-900 with white chevrons (primary-700 on hover) and sit 4.5rem outside the carousel edge, giving a 24px gap from the cards. On narrower desktops the offset shrinks so they never come within 0.5rem of the viewport edge. Verified at 1440px (fully clear of the cards). At ~1024-1150px the page gutter is only 32px, so they still overlap the card edge slightly.
- [x] Genesis360 card title: just say Genesis360, remove "by Secure Logic"
  Done 2026-09-18: The card title now reads "Genesis360"; "by Secure Logic" was removed from the title and the source comment. No other Secure Logic mentions remain in src/pages/portfolio.astro.
- [x] Carousel arrow background is too black: make the arrows match each section's brand color
  Done 2026-09-18: PortfolioCarousel takes a `color` prop ('primary' | 'secondary' | 'accent', default primary). Arrows fill with that color's 500/600 shade and hover one shade darker; the keyboard focus ring matches. Healthcare Providers uses blue (primary). Mind, Body & Spirit is switched to teal in the next task.
- [x] Portfolio sections: first is blue, then purple; make the 3rd section (Mind, Body & Spirit) the brand teal
  Done 2026-09-18: The Holistic & Emotional (Mind, Body & Spirit) section now uses the brand teal (Tailwind `accent`) for the icon tile, category pill, background tint, card hover border, badges, tags, links, focus ring and carousel arrows (color="accent"). Added accent 50/100/700 to tailwind.config.mjs to fill out the scale. Badges use accent-600 rather than 500 so the white label text keeps enough contrast. Deliberately did not add accent-200: index.astro already uses an undefined bg-accent-200 class, and defining it would suddenly show a blob on the homepage.
- [x] Use ~/Sites/gracemidwifery/src/assets/images/midwifery.jpg for the Grace Midwifery card and ~/Sites/joywithinbirth/src/assets/images/about/imgi_26_eb03179c273c47ee9c70e670f332d2f08a2c780bfeb9431fad1c7d3a60a247e5-md.jpg for the Joy Within Birth card
  Done 2026-09-18: Copied to src/assets/images/grace-midwifery-family.jpg (Grace card, cropped at 50% 28% to keep the faces in frame) and src/assets/images/joy-within-birth-maternity.jpg (Joy card, 50% 40%), with descriptive alt text. Removed the now-unused src/assets/sites/joywithinbirth.jpg screenshot. src/assets/images/midwife-birth.jpg was later removed at the user's request (unused).
  Revised 2026-09-18: At the user's request, the Grace card now uses ~/Sites/gracemidwifery/src/assets/images/bed.jpg (midwives with a new mother and newborn), copied to src/assets/images/grace-midwifery-birth.jpg and cropped at 50% 18%. grace-midwifery-family.jpg was removed.
- [x] Give each portfolio card a very light background based on its section's primary color (first section blue, etc.)
  Done 2026-09-18: The tint is on the whole card, not just the body, so cards stretched to match their row's height have no white gap. Final tints after user tuning: blue bg-primary-50/50, purple bg-secondary-300/[0.08] (the purple equivalent, since there is no secondary-50), teal bg-accent-50/50. Tag pills: bg-primary-100, bg-secondary-300/30, bg-accent-100 (a darker variant was tried, then reverted at the user.s request).
- [x] Card hover sometimes doesn't work, e.g. Genesis360 and CFC once they slide in
  Done 2026-09-18: Root cause: the carousel's cloned card set (used for the seamless loop) had `inert`, which also blocks pointer events. When the loop wraps, Genesis360/CFC are on screen as clones, so hover and the card link did nothing. Removed `inert`; the clone keeps aria-hidden, and the script sets tabindex=-1 on its links so keyboard users still reach each card once. Verified in Chrome: at the wrap point, ACC/Genesis360/CFC all hit-test to their own cards.
- [x] Home page hero animated backgrounds need to use each market's palette colors (law and finance heroes still show health colors)
  Done 2026-09-19: The hero background is a WebGL shader, so its colors were GLSL constants that the CSS-variable
  work could not reach. The palette moved to src/verticals/content/palette.ts (one source of truth for CSS and code),
  gained three hero tokens (--c-hero-line, --c-hero-edge-left, --c-hero-edge-right), and ShaderBackground now takes
  them as data attributes and substitutes them into the fragment shader before compiling, falling back to the health
  blues if a value is missing or malformed. Law renders navy to brass, finance evergreen to sand, health unchanged.
  Verified in headless Chrome with WebGL on. The aurora overlays and blur glows already followed the palette.
