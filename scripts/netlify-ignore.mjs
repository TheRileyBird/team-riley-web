#!/usr/bin/env node
/**
 * Netlify "ignore" command (netlify.toml [build] ignore). Exit 0 = skip this build,
 * exit 1 = build. Netlify provides CACHED_COMMIT_REF (last deployed commit) and
 * COMMIT_REF (this one). Any doubt — first deploy, missing refs, git failure — builds.
 */
import { execFileSync } from 'node:child_process';
import { canSkipBuild } from './netlify-ignore-logic.mjs';

const { CACHED_COMMIT_REF: from, COMMIT_REF: to, SITE_VERTICAL: vertical } = process.env;
const build = (reason) => {
  console.log(`[netlify-ignore] building ${vertical ?? '?'}: ${reason}`);
  process.exit(1);
};

if (!from || !to || from === to) build('no previous deploy to compare against');

let changed;
try {
  changed = execFileSync('git', ['diff', '--name-only', from, to], { encoding: 'utf8' }).split('\n');
} catch (error) {
  build(`git diff failed (${error.message.split('\n')[0]})`);
}

if (canSkipBuild(changed, vertical)) {
  console.log(`[netlify-ignore] skipping ${vertical}: only other markets' files, drafts or docs changed`);
  process.exit(0);
}
build(`shared or ${vertical} files changed`);
