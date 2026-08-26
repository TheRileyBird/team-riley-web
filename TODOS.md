# TODOs

Known work that has been **deliberately parked**, with enough context to pick it up
cold. This is a ledger, not a queue.

- `TASKS.md` is the queue. Agents pull from it and work the oldest unchecked item.
- `TODOS.md` is this file. Agents **read** it for context and never pull work from it.

Move an item from here to `TASKS.md` when you actually want it done.

---

## Make `services.astro` read `src/data/services.ts`

**What:** Second pass of the pricing data-layer refactor. `pricing.astro` now maps
`src/data/services.ts`; `services.astro` still hand-maintains its own service cards.

**Why:** Until both pages read one array, the service taxonomy is duplicated and can
drift. It already had: `services.astro` carried a byte-identical copy of the pricing
page's SEO headline, and separate PPC / Social Ads cards after pricing had merged them
into one Paid Advertising service.

**Current state:** The copy has been de-contradicted by hand (2026-08-22), so the two
pages agree today. They are not structurally linked.

**Where to start:** `services.astro` has two grids that do not map 1:1 to the pricing
sections — an "SEO Foundations" card around line 557 in the website-features grid, and
a separate marketing grid around line 769 (Social Media, Paid Advertising, Ongoing SEO,
Branding). Decide which grid becomes data-driven. The marketing grid is the closer fit.

**Effort:** M (human) / S (with CC) · **Priority:** P2 · **Blocked by:** nothing

---

## Decide what to do with five unreachable pages

**What:** Five pages build and deploy with no inbound link anywhere in `src`:

| Page | Lines | Notes |
|---|---|---|
| `src/pages/med-spas.astro` | 734 | v1; `med-spas-v2` was never linked either |
| `src/pages/med-spas-v2.astro` | 458 | contains "top of Google" claim at line 69 |
| `src/pages/landing-page.astro` | 416 | |
| `src/pages/digital-health-audit.astro` | — | **intentionally unlisted** — excluded from the sitemap in `astro.config.mjs` |
| `src/pages/start.astro` | — | onboarding questionnaire; submit fixed in `712c073a`, so it is maintained code with no front door. **In the sitemap**, so search can find it. |

**Why:** ~1,600 lines of maintained, indexable surface nobody navigates to. Each one is
either a deliberate direct-link page (like `digital-health-audit`) or dead weight, and
right now there's no way to tell which from the code.

**Decide per page:** link it, keep it unlisted deliberately (and exclude from the
sitemap the way `digital-health-audit` is), or delete it.

**Also:** `med-spas-v2.astro:69` says "You need to show up at the top of Google when
someone searches for med spas in your city." That contradicts the SEO Foundations
positioning adopted 2026-08-22. Fix it or delete the page.

**Effort:** M (human) / S (with CC) · **Priority:** P2 · **Blocked by:** nothing

---

## `/platform` is reachable on mobile only

**What:** `src/components/Navigation.astro:41` has the desktop `/platform` link
commented out. Line 77 keeps the mobile link live. `src/pages/services.astro:724`
points a primary CTA at `/platform`.

**Why:** A desktop visitor who lands on `/services` can click through to `/platform`,
but cannot find it from the nav. Either the page is ready and the desktop link should
be restored, or it isn't and the mobile link plus the CTA should go.

**Effort:** XS · **Priority:** P3 · **Blocked by:** a decision about whether
`/platform` is ready

---

## "Which plan am I?" selector for store-first vs website+store

**What:** An interactive helper on `/pricing` that asks a visitor whether their site is
primarily a store or a marketing site with a store attached, then shows the matching
number, including the stacked total.

**Why:** This is the single most-confused thing about the pricing, described in the
owner's own words from two directions: Shopify-only clients billed on the eCommerce
plan alone, versus a large marketing site (SecureLogic) on Platinum with eCommerce added
six months later at $599 + $399 = $998.

**Current state:** Handled as prose. The eCommerce section's "How eCommerce pricing
works" notes now state both paths explicitly. That may be enough.

**Where to start:** `src/data/services.ts`, the `ecommerce-management` entry's
`pricingNotes`. The data layer makes an interactive version tractable — every service
already carries a slug and structured tiers.

**Effort:** M (human) / S (with CC) · **Priority:** P3 · **Blocked by:** nothing.
Consider only if the prose version doesn't reduce the questions.

---

## Pricing page polish bundle

**What:** Small additions, each independently useful:

- Per-service anchor links surfaced in the UI, so a quote email can point at
  `/pricing#ecommerce-management`. The slugs and aliases already exist in
  `src/data/services.ts`; nothing exposes them to a reader.
- Print stylesheet for `/pricing` so it attaches to a proposal as a clean PDF.
- An honest "New service" badge driven by `status: 'emerging'`. Client Growth AI is
  already tagged `emerging` and currently looks identical to established services.
- Copy-to-clipboard on a tier, for pasting a quote into an email.

**Why:** Each removes a small piece of manual work in the sales flow.

**Effort:** S each · **Priority:** P3 · **Blocked by:** nothing

---

## Revisit Paid Advertising pricing after the first client

**What:** Paid Advertising currently publishes two fee structures under one heading:
Search at 25/20/15% ($350/$480/$600 minimums, $500 setup) and Social at 30/25/20%
($420/$600/$800 minimums, $1,000 setup).

**Why:** Neither has ever sold, so there is no data on what the market bears.
Collapsing to a single simpler number ("$500/month or 20% of ad spend, whichever is
greater") was considered on 2026-08-22 and **deliberately declined** — it would raise
the entry floor from $350 to $500 and cut the social top rate from 30% to 20%, which is
a revenue decision and shouldn't ride along inside a layout change.

**Where to start:** `src/data/services.ts`, the `paid-advertising` entry's `tierGroups`.
Simplifying is now a data edit.

**Effort:** S · **Priority:** P3 · **Blocked by:** landing a first paid-ads client

---

## Decide what TikTok actually delivers on Social Media plans

**What:** Social Media tiers now offer "One platform: Meta, LinkedIn, or TikTok."
TikTok is a new commitment and the plan copy doesn't fit it.

**Why:** Tier features describe "custom branded graphics and captions," and the Reels
policy says filming is not included and a Reel may be AI media, a photo slideshow, or
supplied clips. TikTok is almost entirely short-form video, so a graphics-led plan maps
onto it poorly. A client could buy Basic at $199 expecting 4 TikToks a month.

**Decide:** are TikTok posts counted against the Reels allowance (they are video, so
probably yes), and does the Basic tier — which currently includes zero Reels — support
TikTok at all?

**Where to start:** `src/data/services.ts`, the `social-media-management` entry's
`tiers` and `pricingNotes`.

**Effort:** XS to write, the decision is the work · **Priority:** P2 · **Blocked by:**
nothing, but decide before selling a TikTok plan

---

## Note: the pricing modal presentation was removed

Not a task. Service pricing used to have two presentations behind an `inlinePricing`
flag: inline expand-in-place, and a fixed overlay modal. As of 2026-08-22 every service
expands inline, so the modal branch and the flag were deleted rather than kept as an
abstraction with no user. Recover from git history if a service ever needs one — and if
you do, note that `src/scripts/scroll-lock.ts` exists precisely because
`document.scrollingElement` here is `<html>`, not `<body>`.

---

## Note: SEO Campaigns is live again

Not a task. The ongoing-SEO tiers ($1,000 / $1,800 / $3,200 per month) were archived on
2026-08-22 and **un-archived the same day** on request. The service now renders as "SEO
Campaigns", positioned after Paid Advertising, with `status: 'secondary'`.

Two things to know:
- The slug stayed `search-engine-optimization`, so links already sent to clients still
  land on the section.
- Feature lists are ordered specialty pages, blog posts, keywords, then locations. For a
  single-city client (the New Orleans lawyer package) specialty pages are the purchase and
  location count is the least relevant number, so the list reads in priority order rather
  than starting with locations.
