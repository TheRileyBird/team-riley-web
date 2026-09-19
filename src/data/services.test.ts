import { describe, expect, it } from 'vitest';
import {
  services,
  visibleServices,
  anchorAliases,
  retiredAnchors,
  tierGroupsFor,
  themeForIndex,
  reverseForIndex,
  pricingUrlFor,
  tierQuoteText,
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

  it('offers no TikTok plan until TikTok deliverables are defined (see TODOS.md)', () => {
    const everyLine = visibleServices.flatMap((service) => [
      ...service.includedFeatures,
      ...(service.pricingNotes ?? []),
      ...tierGroupsFor(service).flatMap((group) =>
        group.tiers.flatMap((tier) => [tier.description, ...tier.features, tier.additionalNote ?? ''])
      )
    ]);
    expect(everyLine.filter((line) => /tiktok/i.test(line))).toEqual([]);
  });
});

describe('services page cards', () => {
  const carded = services.filter((service) => service.servicesCard);

  it('renders the four marketing services, in data order', () => {
    expect(carded.map((service) => service.slug)).toEqual([
      'social-media-management',
      'paid-advertising',
      'search-engine-optimization',
      'branding-design'
    ]);
  });

  it('only cards services that render on /pricing, since every card links there', () => {
    for (const service of carded) {
      expect(service.status, service.slug).not.toBe('archived');
    }
  });

  it('gives every card a title, summary and icon gradient', () => {
    for (const service of carded) {
      const card = service.servicesCard!;
      expect(card.title.trim(), service.slug).not.toBe('');
      expect(card.summary.trim(), service.slug).not.toBe('');
      expect(card.iconGradient, service.slug).toMatch(/^from-\S+ to-\S+$/);
    }
  });

  it('no longer describes SEO as quoted by proposal (it has published tiers)', () => {
    const seo = services.find((service) => service.slug === 'search-engine-optimization')!;
    expect(seo.servicesCard!.summary).not.toMatch(/proposal/i);
  });
});

describe('tier quotes', () => {
  const site = 'https://teamrileyweb.com';

  it('builds the pricing URL from the slug', () => {
    expect(pricingUrlFor('paid-advertising', site)).toBe(
      'https://teamrileyweb.com/pricing#paid-advertising'
    );
  });

  it('writes a monthly tier with every feature and the setup fee', () => {
    const ecommerce = services.find((service) => service.slug === 'ecommerce-management')!;
    const silver = ecommerce.tiers![0];
    const text = tierQuoteText({
      serviceName: 'eCommerce Management',
      tier: silver,
      pricingUrl: pricingUrlFor(ecommerce.slug, site)
    });
    expect(text.split('\n')).toEqual([
      'eCommerce Management - Silver: $399 per month',
      'Best for new or low-volume stores',
      '- 1-25 products',
      '- Basic store maintenance (themes, plugins, updates)',
      '- Basic reporting',
      '- Email support',
      '$500 one-time setup fee',
      'Details: https://teamrileyweb.com/pricing#ecommerce-management'
    ]);
  });

  it('names the tier group and keeps a non-monthly unit as written', () => {
    const ads = services.find((service) => service.slug === 'paid-advertising')!;
    const group = ads.tierGroups![0];
    const text = tierQuoteText({
      serviceName: 'Paid Advertising',
      groupLabel: group.label,
      tier: group.tiers[1],
      pricingUrl: pricingUrlFor(ads.slug, site)
    });
    expect(text.split('\n')[0]).toBe('Paid Advertising (Search Advertising) - Gold: 20% mgmt fee');
  });

  it('omits empty optional lines instead of printing blanks', () => {
    const text = tierQuoteText({
      serviceName: 'Branding & Design',
      tier: { name: 'Hourly', price: '$150', priceUnit: '/hour', description: 'Design work', features: ['4 hour minimum'] },
      pricingUrl: pricingUrlFor('branding-design', site)
    });
    expect(text.split('\n')).toEqual([
      'Branding & Design - Hourly: $150 per hour',
      'Design work',
      '- 4 hour minimum',
      'Details: https://teamrileyweb.com/pricing#branding-design'
    ]);
    expect(text).not.toMatch(/undefined|\n\n/);
  });
});
