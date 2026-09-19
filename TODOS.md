# TODOs

Known work that has been **deliberately parked**, with enough context to pick it up
cold. This is a ledger, not a queue.

- `TASKS.md` is the queue. Agents pull from it and work the oldest unchecked item.
- `TODOS.md` is this file. Agents **read** it for context and never pull work from it.

Move an item from here to `TASKS.md` when you actually want it done.

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

---

## Note: TikTok is excluded from Social Media plans

Not a task. Decided 2026-09-18: TikTok was removed from every Social Media tier and note
("One platform: Meta or LinkedIn"). The plans are graphics-led and TikTok is almost
entirely short-form video, so a Basic client at $199 could reasonably expect 4 TikToks a
month that the plan can't deliver. A test in `src/data/services.test.ts` fails if TikTok
reappears in any tier, feature or note.

**To offer it later:** decide whether TikTok posts count against the Reels allowance and
which tier is the minimum (Basic has zero Reels), then price it as a video-first add-on
rather than a platform swap. Delete the TikTok test when you do.

---

## Note: draft pages are dev-only

Not a task. Decided 2026-09-18: `med-spas`, `med-spas-v2` and `landing-page` moved to
`src/drafts/`. `astro.config.mjs` injects their routes only under `astro dev`, so a
production build contains no HTML and no sitemap entry for them. `digital-health-audit`
(unlisted, sitemap-excluded) and `start` stay live. `/platform` stays live but is out of
the nav; `/services` still links to it. To publish a draft, move it back to `src/pages/`
and delete its entry in `draftPages`.

