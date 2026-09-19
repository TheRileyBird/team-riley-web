#!/usr/bin/env node
/**
 * The only supported way to build. Netlify runs `npm run build`, which runs this.
 *
 *   node scripts/build.mjs          build the market named by SITE_VERTICAL into dist/
 *   node scripts/build.mjs --all    build every launchReady market into dist-<id>/
 *
 * For each market:  unit tests (once) ──▶ astro build ──▶ dist tests against that output
 *
 * The dist tests read HTML, so they must run after the build. BUILD_STARTED_AT lets
 * them reject an output folder left over from an earlier run.
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, rmSync } from 'node:fs';

const sites = JSON.parse(readFileSync(new URL('../src/verticals/sites.json', import.meta.url), 'utf8'));
const all = process.argv.includes('--all');

const run = (command, args, env = {}) =>
  execFileSync(command, args, { stdio: 'inherit', env: { ...process.env, ...env } });

let targets;
if (all) {
  targets = Object.keys(sites).filter((id) => sites[id].launchReady);
  const skipped = Object.keys(sites).filter((id) => !sites[id].launchReady);
  if (skipped.length) console.log(`[build] skipping markets not launchReady: ${skipped.join(', ')}`);
} else {
  // astro.config.mjs validates the value and fails loudly; this just passes it on.
  targets = [process.env.SITE_VERTICAL];
}

run('npx', ['vitest', 'run', '--project', 'unit']);

for (const id of targets) {
  const outDir = all ? `dist-${id}` : 'dist';
  const startedAt = Date.now();
  console.log(`\n[build] ${id ?? '(SITE_VERTICAL unset)'} -> ${outDir}/`);
  rmSync('.astro', { recursive: true, force: true });
  rmSync(outDir, { recursive: true, force: true });
  run('npx', ['astro', 'build'], { SITE_VERTICAL: id ?? '', ASTRO_OUT_DIR: `./${outDir}` });
  run('npx', ['vitest', 'run', '--project', 'dist'], {
    SITE_VERTICAL: id,
    DIST_DIR: outDir,
    BUILD_STARTED_AT: String(startedAt),
  });
}
