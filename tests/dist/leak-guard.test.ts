import { describe, expect, it } from 'vitest';
import { ALLOWED_PHRASES, FORBIDDEN_TERMS } from '../../src/verticals/vocabulary';
import { distUnderTest, htmlPages } from './helpers';

const { vertical, dir } = distUnderTest();
const pages = htmlPages(dir);

/** Visible text only: scripts, styles, tags, attributes and entities stripped. */
function visibleText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ');
}

describe(`${vertical} build says nothing that belongs to another market`, () => {
  it('has pages to check', () => {
    expect(pages.length).toBeGreaterThan(5);
  });

  it.each(FORBIDDEN_TERMS[vertical].map((term) => [term.source, term] as const))(
    'never says %s',
    (_label, term) => {
      const hits: string[] = [];
      for (const page of pages) {
        let text = visibleText(page.html);
        for (const allowed of ALLOWED_PHRASES[vertical]) text = text.replace(allowed, ' ');
        const match = text.match(term);
        if (match) {
          const at = text.indexOf(match[0]);
          hits.push(`${page.path}: ...${text.slice(Math.max(0, at - 60), at + 60).trim()}...`);
        }
      }
      expect(hits).toEqual([]);
    }
  );

  it('leaves no placeholder copy behind', () => {
    const hits = pages
      .filter((page) => /\b(lorem ipsum|TKTK|TODO:)\b/i.test(visibleText(page.html)))
      .map((page) => page.path);
    expect(hits).toEqual([]);
  });
});
