/**
 * Page scroll lock, shared by every overlay on the site.
 *
 * Why this exists: the overlays used to set `document.body.style.overflow` and
 * that silently did nothing. On this site `document.scrollingElement` is
 * `<html>`, not `<body>`, so the page kept scrolling behind open modals. Verified
 * in a browser: with only `body { overflow: hidden }` a scroll still moved the
 * page; with `<html>` locked it doesn't.
 *
 * Both elements are set — `<html>` is what actually holds, `<body>` covers
 * layouts where body is the scroll container.
 *
 * Only the booking dialog uses this. Service pricing expands inline on the page
 * and never locks scrolling. If a second overlay is ever added, decide explicitly
 * whether it stacks (needs a depth counter) or hands off (doesn't).
 */

export function lockPageScroll(): void {
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}

export function releasePageScroll(): void {
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
}
