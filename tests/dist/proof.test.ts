import { describe, expect, it } from 'vitest';
import { content } from '../../src/verticals/content/loader';
import { hasPage, sites } from '../../src/verticals/index';
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
const publishesPortfolio = hasPage(sites[vertical], '/portfolio');

describe(`${vertical} proof is honest`, () => {
  /*
   * Only health publishes a portfolio right now. Law and finance have too little
   * client work to fill one, so the page, its nav link and its footer entries are
   * all absent — and the concept-labelling rules below have nothing to check.
   */
  it('publishes a portfolio page only when this market has one', () => {
    expect(Boolean(portfolio)).toBe(publishesPortfolio);
  });

  it.skipIf(!publishesPortfolio)('labels every concept project and gives it no live-site link', () => {
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
