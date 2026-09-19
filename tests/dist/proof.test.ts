import { describe, expect, it } from 'vitest';
import { content } from '../../src/verticals/content/loader';
import { distUnderTest, htmlPages } from './helpers';

const { vertical, dir } = distUnderTest();
const pages = htmlPages(dir);
const portfolio = pages.find((page) => page.path === '/portfolio/');
const marketContent = content[vertical];

/**
 * Proof rules. A market shows its own clients or clearly labelled concepts, never
 * borrowed praise and never a concept dressed as client work: fabricated client
 * references are what the FTC's rule on fake reviews prohibits, and what bar and
 * SEC advertising rules make expensive.
 */
describe(`${vertical} proof is honest`, () => {
  it('built a portfolio page', () => {
    expect(portfolio, 'no /portfolio/ page').toBeDefined();
  });

  it('labels every concept project and gives it no live-site link', () => {
    const concepts = marketContent.portfolio.sections.flatMap((section) =>
      section.projects.filter((project) => project.concept)
    );
    for (const project of concepts) {
      expect(project.href, `${project.name} is a concept but has a live link`).toBeUndefined();
      expect(portfolio!.html, `${project.name} card is missing its concept label`).toContain(project.name);
    }
    const labels = portfolio!.html.match(/data-concept-label/g) ?? [];
    expect(labels.length, 'concept labels rendered').toBe(concepts.length);
  });

  it('shows a review section only when this market has its own reviews', () => {
    const quotes = marketContent.portfolio.reviews;
    const rendered = pages.some((page) => /data-client-review/.test(page.html));
    expect(rendered).toBe(quotes.length > 0);
  });

  it('never shows a client logo strip without logos', () => {
    const home = pages.find((page) => page.path === '/')!;
    const hasStrip = home.html.includes('logo-marquee-track');
    expect(hasStrip).toBe(marketContent.home.clientLogos.length > 0);
  });
});
