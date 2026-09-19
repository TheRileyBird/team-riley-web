import { describe, expect, it } from 'vitest';
import { canSkipBuild } from './netlify-ignore-logic.mjs';

describe('canSkipBuild', () => {
  it('lets law and finance skip a health-only change', () => {
    const files = ['src/verticals/health.ts', 'src/verticals/health/pages/digital-health-audit.astro'];
    expect(canSkipBuild(files, 'law')).toBe(true);
    expect(canSkipBuild(files, 'finance')).toBe(true);
    expect(canSkipBuild(files, 'health')).toBe(false);
  });

  it('builds every market when a shared file changes, even alongside market files', () => {
    const files = ['src/verticals/health.ts', 'src/components/TierCard.astro'];
    for (const vertical of ['health', 'law', 'finance']) expect(canSkipBuild(files, vertical)).toBe(false);
  });

  it('treats the market registry and data as shared', () => {
    for (const file of ['src/verticals/sites.json', 'src/verticals/index.ts', 'src/data/services.ts']) {
      expect(canSkipBuild([file], 'law'), file).toBe(false);
    }
  });

  it('skips docs-only and drafts-only pushes for everyone', () => {
    for (const vertical of ['health', 'law', 'finance']) {
      expect(canSkipBuild(['TODOS.md', 'TASKS.md'], vertical)).toBe(true);
      expect(canSkipBuild(['src/drafts/med-spas.astro'], vertical)).toBe(true);
    }
  });

  it('does not mistake a similarly named file for another market', () => {
    expect(canSkipBuild(['src/verticals/health-shared.ts'], 'law')).toBe(false);
    expect(canSkipBuild(['src/verticals/healthcheck/x.ts'], 'law')).toBe(false);
  });

  it('builds when there is nothing to compare or the market is unknown', () => {
    expect(canSkipBuild([], 'law')).toBe(false);
    expect(canSkipBuild(['', '  '], 'law')).toBe(false);
    expect(canSkipBuild(['TODOS.md'], undefined)).toBe(false);
    expect(canSkipBuild(['TODOS.md'], 'laww')).toBe(false);
  });
});
