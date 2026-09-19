import { defineConfig } from 'vitest/config';

/**
 * Two projects, run at different points in scripts/build.mjs:
 *
 *   unit ──▶ astro build ──▶ dist
 *
 * `unit` checks source data (services, vertical config) and runs before the build.
 * `dist` reads the HTML the build just wrote, so it only makes sense after it; it
 * fails if DIST_DIR is missing or holds an older build than this run's.
 */
export default defineConfig({
  test: {
    projects: [
      { test: { name: 'unit', include: ['src/**/*.test.ts', 'scripts/**/*.test.mjs'] } },
      { test: { name: 'dist', include: ['tests/dist/**/*.test.ts'] } },
    ],
  },
});
