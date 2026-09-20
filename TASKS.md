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
- [x] Use placeholder images across law and finance for now (e.g. the homepage "Stand Out" second section needs images) - plain placeholder rectangles are fine, but keep the existing design/layout intact
  Done 2026-09-19: The "Stand Out" gallery (and the matching one on /services) hides itself below six images, which is why
  law and finance had no images there. Added 4 wireframe placeholders per market, rendered in that market's palette
  (src/assets/placeholders/), and filled each showcase: law = Nazareth + 3 concepts + 4 placeholders, finance = 3 concepts
  + 4 placeholders. Layout is unchanged; the placeholders are deliberately generic (no firm name, no readable copy) so they
  cannot read as client work, and their alt text says placeholder. Drop them as real sites ship.
- [x] Home hero: use video like the Secure Logic home hero - multiple relevant clips per market that reflect that vertical and feel like a nice commercial
  Done 2026-09-19: New HeroVideo.astro, modelled on Secure Logic's hero: stacked <video> layers that crossfade, each clip
  holding for its own duration so none loops on screen, next clip warmed one ahead, paused on a hidden tab, and still on
  prefers-reduced-motion. 4 clips per market sourced from Mixkit (free commercial license), trimmed to 8s / 720p / no audio,
  ~350KB each: law = contract signing, documents, handshake, boardroom; finance = greeting clients, advisor desk,
  explaining numbers, client meeting; health = yoga deck, doctor visit, group yoga, meditation. Hero switches to a dark
  overlay with white type when footage exists, and falls back to the shader when a market has no clips. Also fixed: all
  three markets' videos were landing in every build (35MB of _astro), so @active/* aliases now bundle only the market
  being built; a dist test enforces it.
- [x] Move the shader hero background to the pricing page (keep the shader, just relocate it)
  Done 2026-09-19: ShaderBackground moved off the homepage hero (which now carries footage) to the /pricing page header,
  desktop only. PageHeader gained a `transparent` prop so the shader shows through instead of being covered by the
  header's own gradient.
- [x] Review the new law and finance designs again; the footers on law and finance do not seem to match the rest of those sites
  Done 2026-09-19: Root cause was three things, not one. (1) The TR logo was the health blue PNG on all three sites; law and
  finance now have palette-recolored marks, plus a lighter variant for the near-black footer where the dark end of the
  gradient disappeared, and per-market favicons. (2) Footer and every dark band used Tailwind slate (a blue-tinted gray), so
  finance had a blue-black footer under an evergreen site; added --c-ink-900/950 tokens per market and pointed the footer
  and 28 dark surfaces at them. (3) 27+ utilities used Tailwind built-in blue/cyan/violet/purple/teal, which ignore the
  palette entirely - mapped them onto palette classes by exact hex first, so health is pixel-identical except one icon tile.
  Also fixed gradient headings losing contrast on dark bands (SectionHeader and ServiceColumnSection now use the bright
  variant when dark). Known remaining: the GoHighLevel chat bubble is blue on all three; that is styled in GHL, not here.
- [x] On all sites: too little space above and below (per the orange circle annotations in the screenshot) - increase the top and bottom spacing
  Done 2026-09-19: Clarified in conversation: more space at the top of the page, less between the "Zero Friction" header and
  the pricing cards. The nav is fixed and 4rem tall, so PageHeader's pt-24 left only ~2rem of visible air; it is now
  pt-28 md:pt-36. Its bottom pad dropped to pb-6 md:pb-8 and PricingSection's top to pt-8 md:pt-10, cutting the header-to-cards
  gap from ~144px to ~72px. Both are shared, so all three sites change. Portfolio's first section gained pt-12 md:pt-16,
  which the old large header padding had been standing in for.
  Note: the annotated screenshot arrived as a generic PNG file icon again (third time). When an annotation matters, paste the
  image into the chat rather than attaching it, or point at the element by name.
- [x] Health homepage Stand Out / Build Trust gallery: remove Nazareth Law, replace with Genesis360
  Done 2026-09-19: Captured a fresh genesis360.com screenshot into src/assets/sites/. Nazareth stays on the portfolio page
  (feature panel) and on the law site; it is only out of the health homepage gallery.
- [x] Health homepage Stand Out / Build Trust gallery: remove Life2Health, replace with an ACCBP home screenshot (take one)
  Done 2026-09-19: Took the accbp.com screenshot as asked (src/assets/sites/accbp.png). src/assets/sites/life2health.png is
  still used by the services page; the logo marquee uses a separate file in public/images/logos/.
- [x] Health homepage Stand Out / Build Trust gallery: replace Your Daily Wisdom with Joy Within Birth
  Done 2026-09-19: Captured joywithinbirth.com. src/assets/sites/dailywisdom.png now has no references and can be deleted.
- [x] Add Your Daily Wisdom to the portfolio Mind, Body & Spirit section
  Done 2026-09-19: Added as the first card in the holistic section, with a fresh screenshot of the live site.
  Note: the live site is https://dailywisdomapp.netlify.app - yourdailywisdom.com is an unrelated site (DataLens), so do not
  link that one.
- [x] Portfolio card tag pills are hard to read against the card background - fine-tune their contrast
  Done 2026-09-19: Measured it first: the pill fill was 1.09-1.17:1 against the card, which is tinted with the same section
  color, so the pill shape was effectively invisible (the label text was already fine at 5.5-6.5:1). Pills are now a white
  fill with a mid-tone outline and medium-weight label: boundary 3.5-4:1 (above the 3:1 guidance for UI boundaries) and
  label ~7:1. Applies to all three markets, including the concept cards on law and finance.
- [x] Infinity animation on law and finance doesn't look good in the dark palette color - keep it in golden tones
  Done 2026-09-19: The gradient cycled primary-700 -> accent-500 -> secondary-500, so on law and finance two of its three
  stops were near-black navy/green on a white card. Added --c-infinity-1/2/3 tokens (health keeps its blue -> cyan -> violet
  exactly); law and finance override them to light -> mid -> deep gold from their own accent scale. Scoped to the
  infinityGradient definition only: a first pass replaced the same colors in four other gradients on the page by accident
  and was reverted.
- [x] Pricing page shader background should cover only the first section (Zero Friction header) and the #pricing section, not the whole page
  Done 2026-09-19: The shader is now absolutely positioned inside a wrapper around the header and PricingSection instead of
  fixed to the viewport, so it ends where the plan cards end. Removed the page-wide style block that had been dropping every
  light section to 55% white; sections below the plans are back to their own solid backgrounds.
- [x] Law hero headline: change "More signed clients." to "More clients." so the last line doesn't wrap to two lines
  Done 2026-09-19: Law and finance both read "Better brands. Better websites. More clients." now, so the highlight fits one line.
- [x] Finance hero headline: change "More qualified prospects." to "More clients." for the same reason (wrapping to two lines doesn't work as well)
  Done 2026-09-19: Same change as law; all three markets now share the same three-sentence headline.
- [x] Finance hero video: add a clip of one advisor talking to a couple
  Done 2026-09-19: Added finance-advisor-couple.mp4 (Mixkit 14977, an advisor across a desk from two people, shot over their
  shoulders) as the second clip. Finance now cycles five.
- [x] Law hero handshake clip: trim to the middle - the beginning and end are too long
  Done 2026-09-19: The clasp runs about 1.5-5.5s in the source; the clip is now 1.6s-5.6s, so it opens on hands already
  meeting and cuts before the release. 8s -> 4s.
- [x] Law hero video: add a courthouse/court clip
  Done 2026-09-19: Added law-courtroom.mp4 (Mixkit 46820, a judge's hands on a book beside a gavel - no faces, no verdict
  being read, so it reads as court without implying criminal work). Law now cycles five.
- [x] Health favicon should be updated to the new logo
  Done 2026-09-19: Health was still using the old blue "plus" tile from public/favicon.png while law and finance already used
  their TR+ marks. All three favicons are now generated from that market's logo, trimmed and re-centred so the mark fills the
  square (it was floating small inside its padding at tab size). public/favicon.png is now unreferenced and can be deleted.
- [x] Home hero eyebrow text: "Built For Law Firms" and the finance equivalent are flat - make them catchier, like the health version
  Done 2026-09-19: Law reads "Marketing That Passes The Bar", finance "Marketing That Compounds"; health keeps "Digital Health
  For Your Business". Worth watching: "passes the bar" sits near the compliance claim we deliberately avoid making elsewhere
  ("built with bar advertising rules in mind", never a guarantee). It reads as wordplay in a four-word eyebrow, but if a firm
  ever reads it as a promise, swap to "Digital Counsel For Your Firm".
- [x] Home hero min-height should be around 900px on desktop
  Done 2026-09-19: lg:min-h-[min(900px,90vh)] rather than a flat 900px. A 1440x900 Mac only has about 760px of viewport, so a
  hard 900px would run past the bottom edge with no cue that the page continues; the cap gives the full 900px on a 1080p
  display and 90% of the viewport on a laptop. Inner content block scales with it at lg:min-h-[min(700px,72vh)].
- [x] Animated gradient text on law and finance often looks black and stops standing out - health's gradient never goes near black, so the law and finance gradients need lighter stops
  Done 2026-09-19: Measured it: the gradient started at primary-800, which is 8.7:1 on white for health (dark but clearly blue)
  and 16.5:1 / 13.4:1 for law and finance - effectively black. Added --c-headline-1/2/3 tokens; health keeps its exact stops,
  law uses primary-400 / accent-500 / secondary-400 and finance primary-500 / accent-500 / secondary-500, so every stop sits
  roughly between 3:1 and 8:1 like health's. Law's is the most muted of the three because its palette is navy and steel by
  design; going lighter would drop below the 3:1 floor for large text.
- [x] Law animated headline text is too muted - bring some blue into the gradient
  Done 2026-09-19: The old stops averaged chroma 25-50, i.e. grey. Took two passes: adding one sapphire stop was not enough,
  because at background-size 300% only a third of the gradient is on screen at a time, so most frames still landed on a grey
  stop. All three stops are now saturated blues (chroma 138-160, contrast 6.1 / 3.4 / 4.9 on white). Silver remains the site's
  accent - logo, buttons, dark surfaces - so law still reads navy-and-silver overall while the headline carries blue.
- [x] Finance animated headline gradient should be golds and yellows, not green
  Done 2026-09-19: All three headline stops are golds now (5.3 / 3.8 / 3.1 on white).
- [x] Finance: the numbered step cards in the "We build the system, then keep it moving" section should be more green than blue
  Done 2026-09-19: Those cards were Tailwind slate (blue-tinted grey). Added an --c-ink-800 token so they follow the market:
  health keeps the exact old value (30 41 59 = gray-800), finance is dark green, law dark navy.
- [x] Finance: the icon tile backgrounds in the Remarkable Features section could be gold
  Done 2026-09-19: Added a content.furniture block (iconTile, badge) so this is a per-market brand call rather than a
  hardcoded primary; finance uses accent gold, health and law keep primary.
- [x] Finance: the "Included Forever" pill above the infinity symbol could be gold
  Done 2026-09-19: Same furniture block; the pill is gold on finance. The infinity itself was already gold.
- [x] Finance palette: hint at a more typical money green instead of only the very dark green, and include some lighter greens
  Done 2026-09-19: Primary moved from #14635c (dark teal-green) to #17794a, a money green, with a lighter green secondary
  (#35a06a). The lighter scale steps now read green rather than grey-teal - primary-300 is 134 185 161.
- [x] Primary buttons on law and finance blend into the background - they don't pop the way health's blue button does (home hero and other sections)
  Done 2026-09-19: Measured: the button fill (primary-800) sits at 2.08:1 against health's own hero with chroma 145, but only
  1.2:1 / chroma 36 on law and 1.6:1 / chroma 53 on finance - near-black shapes on a dark hero. Added --c-cta-1/2 tokens:
  health keeps its exact blue, law uses sapphire (4.1:1 vs hero) and finance money green (3.4:1), both still clearing 4.5:1
  for their white labels. Applies to every btn-primary, not just the hero.
- [x] Finance hero reel: the first clip doesn't feel right, the advisor-and-couple clip should be a man in a suit speaking to a couple (not a woman), and the dashboard-pointing clip and the people-at-the-table clip don't work — find clearer video choices
  Done 2026-09-19: swapped four of five. Handshake, advisor-and-couple, dashboard and table clips out; a man in a suit talking a client through a laptop, a suited three-person meeting by a window, an overhead calculator-and-charts shot, and a close-up handshake in. No free library I can reach (Mixkit, Coverr; Pexels and Pixabay both 403 headless) has a man in a suit addressing a couple, so the advisor clip is one client, not two.
- [x] Finance buttons: the green feels too cartoony — try gold buttons instead and see how that feels
  Done 2026-09-19: gold fill (191 148 74 → 139 104 44) with the site's ink as the label, since white text only reaches 2.8:1 on gold. New --c-cta-text token, default white, so health and law are untouched.
- [x] Finance home page: the border around the circles in the 'We Built The System' section is still blue, should be gold
  Done 2026-09-19: the ring was ring-gray-900, and this repo's gray scale is Tailwind slate, so #0f172a sat blue-black on a dark green section. Now ring-ink-950; the step line track and the card borders were the same slate leak and are now white/10.
- [x] Team Riley Law: the buttons are too blue now
  Done 2026-09-19: brushed steel (107 118 132 → 73 80 90), the site's silver, instead of sapphire. White text 4.6:1, fill 4.3:1 against the hero and 4.6:1 against a white section.
- [x] Add life2health.net to the finance website - they are a real client of mine
  Done 2026-09-19: they are an insurance agency, so they landed in an Insurance & Benefits portfolio section (the footer and sitemap already linked /portfolio#insurance at nothing), in the homepage logo strip, which finance had been hiding for want of a client, and at the head of the homepage gallery in place of a placeholder. Portfolio copy no longer says everything on the page is a concept. Also fixed health's logo link, which pointed at life2health.com — a dead domain.
- [ ] Fix the icons on the health /services page - the audience segment tiles (Med Spa, Therapy Practice, Chiropractic Clinic, etc.) render as empty gradient squares with no icon in them
- [ ] Can't see the check icons on the Fractional CTO pricing card - the checkmarks disappear against the dark card background

## Notes

- **Restart `npm run dev:all` after editing `tailwind.config.mjs` or `astro.config.mjs`.** A running dev server does not pick up
  a new Tailwind color family, so utilities using it silently do nothing: on 2026-09-19 the pricing page's dark service bands
  rendered white with white text after `ink-900/950` were added, while the production build was correct the whole time. It
  looks exactly like a browser cache problem and is not one.
