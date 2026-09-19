#!/usr/bin/env node
/**
 * All three sites at once, for comparing them side by side:
 *   health  http://localhost:4321
 *   law     http://localhost:4322
 *   finance http://localhost:4323
 * Restart these after changing astro.config.mjs or tailwind.config.mjs: Tailwind
 * does not pick up a new color family from a running dev server, and the page then
 * renders those utilities as no-ops — dark sections lose their background and white
 * text lands on white. The build is unaffected, which makes it look like a cache bug.
 *
 * Ctrl-C stops all three. Each gets its own Astro cache (see astro.config.mjs), and
 * they start a few seconds apart: Astro writes .astro/types.d.ts at startup, and
 * three processes doing that at the same instant makes two of them die with
 * UnknownFilesystemError.
 */
import { spawn } from 'node:child_process';

const markets = [
  ['health', 4321],
  ['law', 4322],
  ['finance', 4323],
];

const children = [];
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

for (const [index, [vertical, port]] of markets.entries()) {
  if (index > 0) await wait(4000);
  const child = spawn('npx', ['astro', 'dev', '--port', String(port)], {
    env: { ...process.env, SITE_VERTICAL: vertical },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const tag = `[${vertical}]`;
  child.stdout.on('data', (chunk) => process.stdout.write(`${tag} ${chunk}`));
  child.stderr.on('data', (chunk) => process.stderr.write(`${tag} ${chunk}`));
  children.push(child);
}

const stop = () => children.forEach((child) => child.kill('SIGTERM'));
process.on('SIGINT', stop);
process.on('SIGTERM', stop);

console.log('\nhealth  http://localhost:4321\nlaw     http://localhost:4322\nfinance http://localhost:4323\n');
