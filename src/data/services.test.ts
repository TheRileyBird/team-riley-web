import { describe, expect, it } from 'vitest';
import {
  services,
  visibleServices,
  anchorAliases,
  retiredAnchors,
  tierGroupsFor,
  themeForIndex,
  reverseForIndex,
  type Service,
  type ServiceStatus
} from './services';

const VALID_STATUSES: ServiceStatus[] = ['core', 'secondary', 'emerging', 'archived'];

/**
 * These guard the failure class the data layer introduced: mistakes that produce a
 * page which builds fine and renders wrong. A duplicate slug yields duplicate HTML
 * ids, so an anchor already sent to a client silently lands in the wrong place. A
 * typo'd status quietly un-archives pricing we decided not to offer.
 *
 * Wired into `npm run build`, so bad data fails the Netlify deploy rather than
 * shipping. A test suite nothing runs is decoration.
 */
describe('services data', () => {
  it('has at least one visible service', () => {
    expect(visibleServices.length).toBeGreaterThan(0);
  });

  it('uses only valid status values', () => {
    for (const service of services) {
      expect(VALID_STATUSES, `"${service.slug}" has status "${service.status}"`).toContain(
        service.status
      );
    }
  });

  it('has unique slugs', () => {
    const slugs = services.map((service) => service.slug);
    expect(slugs).toHaveLength(new Set(slugs).size);
  });

  it('uses url-safe canonical slugs', () => {
    // Aliases are exempt: they preserve retired ids verbatim, warts included
    // (branding-&-design shipped a raw ampersand in an HTML id).
    for (const service of services) {
      expect(service.slug, `"${service.slug}" is not url-safe`).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it('never collides an alias with a canonical slug or another alias', () => {
    const slugs = new Set(services.map((service) => service.slug));
    const seen = new Set<string>();

    for (const service of services) {
      for (const alias of service.aliases ?? []) {
        expect(slugs.has(alias), `alias "${alias}" collides with a canonical slug`).toBe(false);
        expect(seen.has(alias), `alias "${alias}" is declared twice`).toBe(false);
        seen.add(alias);
      }
    }
  });

  it('gives every visible service at least one tier', () => {
    for (const service of visibleServices) {
      expect(() => tierGroupsFor(service), `"${service.slug}" has no tiers`).not.toThrow();
      for (const group of tierGroupsFor(service)) {
        expect(group.tiers.length, `"${service.slug}" group "${group.label}"`).toBeGreaterThan(0);
      }
    }
  });

  it('features at most one tier per pricing group', () => {
    for (const service of visibleServices) {
      for (const group of tierGroupsFor(service)) {
        const featured = group.tiers.filter((tier) => tier.featured);
        expect(
          featured.length,
          `"${service.slug}" group "${group.label}" features ${featured.length} tiers`
        ).toBeLessThanOrEqual(1);
      }
    }
  });

  it('keeps collapsibleAfter a positive integer inside the tier list', () => {
    for (const service of visibleServices) {
      if (service.collapsibleAfter === undefined) continue;

      expect(Number.isInteger(service.collapsibleAfter), `"${service.slug}"`).toBe(true);
      expect(service.collapsibleAfter, `"${service.slug}"`).toBeGreaterThan(0);

      const [firstGroup] = tierGroupsFor(service);
      expect(
        service.collapsibleAfter,
        `"${service.slug}" collapses after ${service.collapsibleAfter} of ${firstGroup.tiers.length} tiers, which hides nothing`
      ).toBeLessThan(firstGroup.tiers.length);
    }
  });

  it('labels every collapsed tier group', () => {
    // The collapse heading used to be hardcoded to Social Media Management's copy,
    // so any other service reusing the slot shipped the wrong words.
    for (const service of visibleServices) {
      if (service.collapsibleAfter === undefined) continue;
      expect(service.collapseLabel, `"${service.slug}" collapses tiers without a label`).toBeTruthy();
    }
  });

  it('labels every pricing-notes disclosure', () => {
    for (const service of visibleServices) {
      if (!service.pricingNotes?.length) continue;
      expect(service.notesLabel, `"${service.slug}" has notes without a label`).toBeTruthy();
    }
  });

  it('collapses tiers only for single-family services', () => {
    // Collapsing assumes one ladder. A multi-family service is already chunked by
    // group, and the renderer ignores collapsibleAfter there — so setting it would
    // silently do nothing.
    for (const service of visibleServices) {
      if (service.collapsibleAfter === undefined) continue;
      expect(
        service.tierGroups,
        `"${service.slug}" sets collapsibleAfter but has named tier groups`
      ).toBeUndefined();
    }
  });

  it('declares tiers exactly one way per service', () => {
    for (const service of services) {
      const hasFlat = Boolean(service.tiers?.length);
      const hasGroups = Boolean(service.tierGroups?.length);
      expect(hasFlat && hasGroups, `"${service.slug}" declares both tiers and tierGroups`).toBe(
        false
      );
      expect(hasFlat || hasGroups, `"${service.slug}" declares neither tiers nor tierGroups`).toBe(
        true
      );
    }
  });

  it('gives every visible service non-empty includedFeatures', () => {
    for (const service of visibleServices) {
      expect(service.includedFeatures.length, `"${service.slug}"`).toBeGreaterThan(0);
    }
  });

  it('keeps ad-spend and management-fee lines out of includedFeatures', () => {
    // These belong on a tier card, not in "What's Included". The old renderer
    // stripped them with a string filter that broke whenever copy was reworded;
    // now the list is authored explicitly, so assert it stays clean.
    for (const service of visibleServices) {
      for (const feature of service.includedFeatures) {
        expect(feature, `"${service.slug}" includedFeatures`).not.toMatch(
          /min\. monthly ad spend|minimum management fee/
        );
      }
    }
  });

  it('excludes archived services from the visible list', () => {
    for (const service of visibleServices) {
      expect(service.status).not.toBe('archived');
    }
  });

  it('gives every archived service an anchor home', () => {
    const archived = services.filter((service) => service.status === 'archived');
    for (const service of archived) {
      expect(retiredAnchors, `archived "${service.slug}" has no anchor target`).toContain(
        service.slug
      );
    }
  });

  it('maps every visible alias to a rendered service', () => {
    const visibleSlugs = new Set(visibleServices.map((service) => service.slug));
    for (const { alias, slug } of anchorAliases) {
      expect(visibleSlugs.has(slug), `alias "${alias}" points at unrendered "${slug}"`).toBe(true);
    }
  });

  it('never emits the same anchor id twice across a page', () => {
    const ids = [
      ...visibleServices.map((service) => service.slug),
      ...anchorAliases.map((entry) => entry.alias),
      ...retiredAnchors
    ];
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    expect(duplicates, `duplicate anchor ids: ${duplicates.join(', ')}`).toHaveLength(0);
  });

  it('alternates theme and column order without two adjacent matches', () => {
    for (let index = 1; index < visibleServices.length; index += 1) {
      expect(themeForIndex(index)).not.toBe(themeForIndex(index - 1));
      expect(reverseForIndex(index)).not.toBe(reverseForIndex(index - 1));
    }
  });

  it('refuses to render an archived service through tierGroupsFor', () => {
    const empty = { slug: 'empty-service', status: 'core', tiers: [] } as unknown as Service;
    expect(() => tierGroupsFor(empty)).toThrow(/no tiers/);
  });
});
