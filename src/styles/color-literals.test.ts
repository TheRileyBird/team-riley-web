import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * Brand colors must come from the palette variables, or a market's theme cannot
 * change them: that is how the law site would keep health's blue glows. Neutrals
 * (white, black, grays, and the shadow/overlay rgba values built from them) are not
 * brand and stay literal.
 *
 * If this fails, replace the literal with rgb(var(--c-<scale>-<step>)), adding the
 * shade to global.css and both market themes if it does not exist yet.
 */
const NEUTRAL = /^(#(fff(fff)?|000(000)?|[0-9a-f]{0,2})$)/i;

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (entry === 'drafts') return [];
    if (statSync(full).isDirectory()) return sourceFiles(full);
    return /\.(astro|css)$/.test(entry) ? [full] : [];
  });
}

/**
 * Neutral = gray, or the cool slate family the site uses for text and borders
 * (Tailwind slate runs a slight blue bias, e.g. 203 213 225). Brand colors are
 * saturated and are caught.
 */
function isNeutral(r: number, g: number, b: number): boolean {
  const spread = Math.max(r, g, b) - Math.min(r, g, b);
  if (spread <= 12) return true;
  const slate = b >= g && g >= r && spread <= 40;
  return slate;
}

describe('brand colors come from the palette', () => {
  const files = sourceFiles('src');

  it('scans the real source tree', () => {
    expect(files.length).toBeGreaterThan(15);
  });

  it('has no hardcoded brand hex or rgb values outside the palette declaration', () => {
    const offenders: string[] = [];
    for (const file of files) {
      const text = readFileSync(file, 'utf8');
      const lines = text.split('\n');
      lines.forEach((line, index) => {
        // global.css line declaring the palette itself is the one allowed place
        if (/--c-[a-z]+-\d+:/.test(line)) return;
        // One-off platform colors opt out explicitly, with the reason inline.
        if (line.includes('palette-exempt')) return;
        for (const match of line.matchAll(/#([0-9a-fA-F]{6})\b/g)) {
          const hex = match[1];
          const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
          if (!isNeutral(r, g, b) && !NEUTRAL.test(`#${hex}`)) {
            offenders.push(`${file}:${index + 1} #${hex}`);
          }
        }
        for (const match of line.matchAll(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/g)) {
          const [r, g, b] = [match[1], match[2], match[3]].map(Number);
          if (!isNeutral(r, g, b)) offenders.push(`${file}:${index + 1} rgb(${r} ${g} ${b})`);
        }
      });
    }
    expect(offenders).toEqual([]);
  });
});
