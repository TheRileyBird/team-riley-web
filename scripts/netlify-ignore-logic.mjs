/**
 * Decides whether a Netlify site can skip a build. Each production deploy costs
 * credits per site, and three sites build from this one repo, so a push that only
 * touches another market's files should not redeploy this one.
 *
 * Skippable, per market:
 *   - another market's own files: src/verticals/<other>/** and src/verticals/<other>.ts
 *   - drafts (never in a production build): src/drafts/**
 *   - documentation: *.md files
 * Anything else is shared (components, pages, data, config, sites.json, tests,
 * package files), so every market builds. When in doubt, build.
 */
const VERTICALS = ['health', 'law', 'finance'];

function isIrrelevantTo(file, vertical) {
  if (file.endsWith('.md')) return true;
  if (file.startsWith('src/drafts/')) return true;
  for (const other of VERTICALS) {
    if (other === vertical) continue;
    if (file.startsWith(`src/verticals/${other}/`)) return true;
    if (file === `src/verticals/${other}.ts`) return true;
  }
  return false;
}

/** true = safe to skip. An empty or unknown change set always builds. */
export function canSkipBuild(changedFiles, vertical) {
  if (!VERTICALS.includes(vertical)) return false;
  const files = changedFiles.map((file) => file.trim()).filter(Boolean);
  if (files.length === 0) return false;
  return files.every((file) => isIrrelevantTo(file, vertical));
}
