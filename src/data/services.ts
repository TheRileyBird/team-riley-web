/**
 * Single source of truth for every priced service.
 *
 * pricing.astro maps this array. services.astro will consume it in a second pass
 * (see TODOS.md). Adding, reordering, repricing, or retiring a service is an edit
 * here — never a change to page markup.
 *
 * ORDER  Array position is render order. What you read here is what a visitor sees.
 * STATUS `status` controls BOTH whether a service renders and how prominent it is.
 *        'archived' does not render at all. Removing a service means archiving it,
 *        never emptying its tiers — an empty tier list is always a mistake and the
 *        renderer throws on it.
 * THEME  Alternating dark/light and the reversed column order are derived from a
 *        service's index in the FILTERED visible list (see visibleServices), never
 *        from its position in this array. Archiving a service must not flip the
 *        colors of everything after it.
 */

export type ServiceStatus = 'core' | 'secondary' | 'emerging' | 'archived';

export interface Tier {
  name: string;
  price: string;
  priceUnit: string;
  description: string;
  features: string[];
  setupFee?: string;
  featured?: boolean;
  additionalNote?: string;
}

/**
 * A named family of tiers. Most services have exactly one (unnamed) family and use
 * `tiers` instead. Paid Advertising has two — Search and Social are separate ladders
 * that happen to share tier names, so each needs its own featured tier and its own
 * heading.
 */
export interface TierGroup {
  label: string;
  subtitle?: string;
  tiers: Tier[];
}

export interface Service {
  /** Drives the section's HTML id and its anchor URL. Must be unique. */
  slug: string;
  /**
   * Retired ids kept as empty anchor targets so links already sent to clients keep
   * working. Anchors are URL fragments and never reach the server, so a Netlify
   * redirect cannot cover this — the element has to exist on the page.
   */
  aliases?: string[];
  status: ServiceStatus;
  /** Heading, rendered as `{name} {highlight}` with highlight gradient-filled. */
  name: string;
  highlight: string;
  description: string;
  subDescription: string;
  /**
   * Decorative background blurs. Semantic to the service, not to its position.
   * Either corner can be omitted. The section is `overflow-hidden`, so a blur at
   * an edge that borders a same-toned section gets cut off in a hard line rather
   * than fading — omit `bottom` on a section designed to blend downward.
   */
  accent?: { top?: string; bottom?: string };
  /**
   * Overrides the flat background derived from `theme`. Use when a section has to
   * blend into the one after it. `theme` still governs text colours, so only pass
   * a light background on a light-themed position and vice versa.
   */
  background?: string;
  /**
   * What the "What's Included" panel lists. Explicit on purpose: this used to be
   * derived from tiers[0].features with a string filter that dropped any line
   * containing "min. monthly ad spend", which silently broke whenever ad copy was
   * reworded and could only ever describe the first tier of the first family.
   */
  includedFeatures: string[];
  /** Show this many tiers, collapse the rest behind a labelled toggle. */
  collapsibleAfter?: number;
  collapseLabel?: string;
  collapseSubtitle?: string;
  /** Heading for the pricingNotes disclosure. Required when pricingNotes is set. */
  notesLabel?: string;
  pricingNotes?: string[];
  /** Footnote under the pricing grid and the What's Included card. */
  additionalNote?: string;
  tiers?: Tier[];
  tierGroups?: TierGroup[];
}

export const services: Service[] = [
  {
    slug: 'social-media-management',
    status: 'core',
    name: 'Social Media',
    highlight: 'Management',
    description:
      'Consistent, engaging social media content that builds your brand and connects with your audience',
    subDescription:
      'Content creation · Strategic planning · Community engagement · Performance tracking · Brand storytelling',
    includedFeatures: [
      '$99 one-time setup fee',
      '4 Posts Per Month',
      'Custom branded graphics and captions',
      'Profile Optimization (Bio, Links, Branding)',
      'One platform: Meta, LinkedIn, or TikTok'
    ],
    collapsibleAfter: 3,
    collapseLabel: 'Strategist & Influencer plans',
    collapseSubtitle: 'Expand for higher-volume content and hands-on strategy',
    notesLabel: 'About Reels and platforms',
    pricingNotes: [
      'Meta counts as a single platform and covers both Instagram and Facebook, because the two publish together through Meta Business Suite. LinkedIn and TikTok are each separate platforms.',
      'Reels are included within the monthly post total. They are not additional posts.',
      'A Reel is short-form video content. It may use AI-generated media, a slideshow of photos, supplied video clips, animated graphics and text, or a combination of these formats.',
      'Filming is not included. If you want yourself, your team, or your location featured in a Reel, you must provide the footage.'
    ],
    tiers: [
      {
        name: 'Basic',
        price: '$199',
        priceUnit: '/month',
        description: 'Perfect for consistent content',
        features: [
          '$99 one-time setup fee',
          '4 Posts Per Month',
          'Custom branded graphics and captions',
          'Profile Optimization (Bio, Links, Branding)',
          'One platform: Meta, LinkedIn, or TikTok'
        ],
        additionalNote: '+$150 per additional platform'
      },
      {
        name: 'Essential',
        price: '$299',
        priceUnit: '/month',
        description: 'Ideal for busy professionals',
        features: [
          '$149 one-time setup fee',
          '6 total posts per month',
          'At least 1 of the 6 posts will be a Reel',
          'Custom branded graphics and captions',
          'Profile Optimization (Bio, Links, Branding)'
        ],
        featured: true,
        additionalNote: '+$150 per additional platform'
      },
      {
        name: 'Essential Plus',
        price: '$499',
        priceUnit: '/month',
        description: 'Consistent and engaging presence',
        features: [
          '$149 one-time setup fee',
          '10 total posts per month',
          '3 of the 10 posts will be Reels',
          'Custom branded graphics and captions',
          'Profile Optimization (Bio, Links, Branding)'
        ],
        additionalNote: '+$150 per additional platform'
      },
      {
        name: 'Strategist',
        price: '$740',
        priceUnit: '/month',
        description: 'For growing businesses',
        features: [
          '$375 one-time setup fee',
          '12 total posts per month',
          '5 of the 12 posts will be Reels',
          'Custom branded graphics and captions',
          'Profile Optimization (Bio, Links, Branding)',
          'Direct Slack Channel for Instant Communication'
        ],
        additionalNote: '+$150 per additional platform'
      },
      {
        name: 'Influencer',
        price: '$2,500',
        priceUnit: '/month',
        description: 'High-performing content strategy',
        features: [
          '$750 one-time setup fee',
          '20 total posts per month',
          'Up to 8 of the 20 posts may be Reels',
          'Custom branded graphics and captions',
          'Profile Optimization (Bio, Links, Branding)',
          'Monthly Content Strategy Plan',
          'Direct Slack Channel for Instant Communication'
        ],
        additionalNote: '+$150 per additional platform'
      },
      {
        name: 'Influencer Plus',
        price: '$3,500',
        priceUnit: '/month',
        description: 'Premium content production',
        features: [
          '$750 one-time setup fee',
          '20 total posts per month',
          'Up to 10 of the 20 posts may be Reels',
          'Custom branded graphics and captions',
          'Profile Optimization (Bio, Links, Branding)',
          'Monthly Content Strategy Plan',
          'Direct Slack Channel for Instant Communication',
          'Monthly 2 hour Photo/Video Shoot'
        ],
        additionalNote: '+$150 per additional platform'
      }
    ]
  },
  {
    slug: 'ecommerce-management',
    status: 'core',
    name: 'eCommerce',
    highlight: 'Management',
    description: 'Ongoing technical management and support for businesses that sell online',
    subDescription:
      'Store maintenance · Product management · Conversion optimization · Performance tracking · Strategic support',
    includedFeatures: [
      '1-25 products',
      'Basic store maintenance (themes, plugins, updates)',
      'Basic reporting',
      'Email support'
    ],
    notesLabel: 'How eCommerce pricing works',
    pricingNotes: [
      'Store-first businesses: if your website is primarily an online store with a small number of supporting pages, eCommerce Management can serve as your only plan. You do not also need a website plan.',
      'Website + store businesses: if you have a larger marketing website on one of our website plans, eCommerce Management is added on top of it. A Platinum website at $599/month plus eCommerce Silver at $399/month is $998/month once the store launches.',
      'Product and collection pages do not count toward your website plan page limits.',
      'Website pricing covers the size and complexity of the marketing site. eCommerce pricing covers the store itself: product catalog, collections, checkout, store maintenance and commerce support.',
      'Subscriptions, wholesale portals, large migrations, ERP or POS connections, custom Shopify functionality and unusual integrations are quoted separately.'
    ],
    tiers: [
      {
        name: 'Silver',
        price: '$399',
        priceUnit: '/month',
        description: 'Best for new or low-volume stores',
        features: [
          '1-25 products',
          'Basic store maintenance (themes, plugins, updates)',
          'Basic reporting',
          'Email support'
        ],
        setupFee: '$500 one-time setup fee'
      },
      {
        name: 'Gold',
        price: '$699',
        priceUnit: '/month',
        description: 'Best for stores doing consistent sales',
        features: [
          '25-75 products',
          'Everything in Silver',
          'Conversion improvements (product pages, checkout)',
          'Monthly performance reporting'
        ],
        setupFee: '$500 one-time setup fee',
        featured: true
      },
      {
        name: 'Platinum',
        price: '$1,200',
        priceUnit: '/month',
        description: 'Best for serious e-comm businesses',
        features: [
          '75-150 products',
          'Everything in Gold',
          'Advanced conversion optimization (landing pages, A/B testing)',
          'Funnel optimization',
          'Product + collection strategy',
          'Weekly reporting / insights',
          'Priority support'
        ],
        setupFee: '$1,000 one-time setup fee'
      },
      {
        name: 'Enterprise',
        price: '$2,500–$5,000',
        priceUnit: '/month',
        description: 'Best for $50k–$250k+/mo stores',
        features: [
          '150+ products',
          'Full store management',
          'Conversion and revenue optimization',
          'Offer strategy',
          'Lifecycle marketing oversight'
        ],
        setupFee: '$1,500+ one-time setup fee',
        additionalNote: 'Optional add-on: 1–3% of revenue once threshold is reached'
      }
    ]
  },
  {
    slug: 'paid-advertising',
    // Merged from two former sections. Both ids are preserved as anchor targets.
    aliases: ['ppc-management', 'social-advertising'],
    status: 'secondary',
    name: 'Paid',
    highlight: 'Advertising',
    description:
      'Search and social advertising campaigns that put your business in front of the right people at the right time',
    subDescription:
      'Campaign setup · Keyword research · Audience targeting · Ad copywriting · Creative design · Bid optimization · Monthly reporting',
    accent: { top: 'bg-primary-600', bottom: 'bg-cyan-500' },
    includedFeatures: [
      'Google, Bing and YouTube search campaigns',
      'Facebook and Instagram social campaigns',
      'Keyword research and audience targeting',
      'Ad copywriting and creative design',
      'Bid optimization and A/B testing',
      'Monthly performance reporting'
    ],
    notesLabel: 'How advertising fees work',
    pricingNotes: [
      'Ad spend is paid directly to the advertising platform and is separate from our management fee.',
      'Management is billed as a percentage of ad spend, subject to the minimum monthly fee for your tier.',
      'Search and social advertising are priced separately because creative production for social requires more work. You can run either one on its own, or both.'
    ],
    tierGroups: [
      {
        label: 'Search Advertising',
        subtitle: 'Google, Bing and YouTube — reach people already searching for what you do',
        tiers: [
          {
            name: 'Silver',
            price: '25%',
            priceUnit: 'mgmt fee',
            description: 'Start driving qualified traffic',
            features: [
              '$1,400 min. monthly ad spend',
              '$350 minimum management fee',
              'Google & Bing campaigns',
              'Monthly performance reports'
            ],
            setupFee: '$500 one-time setup fee'
          },
          {
            name: 'Gold',
            price: '20%',
            priceUnit: 'mgmt fee',
            description: 'Optimized campaign management',
            features: [
              '$2,400 min. monthly ad spend',
              '$480 minimum management fee',
              'Advanced audience targeting',
              'A/B testing & optimization'
            ],
            setupFee: '$500 one-time setup fee',
            featured: true
          },
          {
            name: 'Platinum',
            price: '15%',
            priceUnit: 'mgmt fee',
            description: 'Enterprise search strategy',
            features: [
              '$4,000 min. monthly ad spend',
              '$600 minimum management fee',
              'Multi-platform campaigns',
              'Dedicated account manager'
            ],
            setupFee: '$500 one-time setup fee'
          }
        ]
      },
      {
        label: 'Social Advertising',
        subtitle: 'Facebook and Instagram — reach your ideal clients where they spend their time',
        tiers: [
          {
            name: 'Silver',
            price: '30%',
            priceUnit: 'mgmt fee',
            description: 'Build your social presence',
            features: [
              '$1,400 min. monthly ad spend',
              '$420 minimum management fee',
              'Facebook & Instagram ads',
              'Audience research & targeting'
            ],
            setupFee: '$1,000 one-time setup fee'
          },
          {
            name: 'Gold',
            price: '25%',
            priceUnit: 'mgmt fee',
            description: 'Strategic social campaigns',
            features: [
              '$2,400 min. monthly ad spend',
              '$600 minimum management fee',
              'Advanced lookalike audiences',
              'Creative testing & optimization'
            ],
            setupFee: '$1,000 one-time setup fee',
            featured: true
          },
          {
            name: 'Platinum',
            price: '20%',
            priceUnit: 'mgmt fee',
            description: 'Full-scale social strategy',
            features: [
              '$4,000 min. monthly ad spend',
              '$800 minimum management fee',
              'Multi-platform campaigns',
              'Conversion rate optimization'
            ],
            setupFee: '$1,000 one-time setup fee'
          }
        ]
      }
    ]
  },
  {
    // Un-archived 2026-08-22 and renamed from "Search Engine Optimization" to
    // "SEO Campaigns", so the section name matches the distinction the pricing
    // page now draws: foundations ship with every website, a campaign is separate
    // ongoing work. Slug kept so existing #search-engine-optimization links land.
    slug: 'search-engine-optimization',
    status: 'secondary',
    name: 'SEO',
    highlight: 'Campaigns',
    description:
      'Ongoing search work aimed at improving your visibility for the searches your clients actually make',
    subDescription:
      'Keyword research · Local SEO · Content creation · Technical optimization · Monthly performance reports',
    accent: { top: 'bg-primary-600', bottom: 'bg-cyan-500' },
    includedFeatures: [
      '4 specialty pages/year',
      '6 SEO blog posts/year',
      'Up to 100 keywords tracked',
      'Up to 3 locations'
    ],
    additionalNote: 'Additional locations: $300/month each',
    notesLabel: 'How this differs from SEO foundations',
    pricingNotes: [
      'Every Team Riley website already ships with SEO foundations: clean structure, titles and meta descriptions, headings, image optimization, sitemaps and indexing setup. That work is included in your website plan and is not billed here.',
      'A campaign is the separate, ongoing effort to move your visibility for specific searches over time. It is what the pricing below covers.',
      "We don't promise particular rankings. We do the work that earns them and report on it monthly."
    ],
    tiers: [
      {
        name: 'Silver',
        price: '$1,000',
        priceUnit: '/month',
        description: 'Perfect for single-location practices',
        features: [
          '4 specialty pages/year',
          '6 SEO blog posts/year',
          'Up to 100 keywords tracked',
          'Up to 3 locations'
        ],
        setupFee: '$500 one-time setup fee'
      },
      {
        name: 'Gold',
        price: '$1,800',
        priceUnit: '/month',
        description: 'Most popular for growing practices',
        features: [
          '10 specialty pages/year',
          '14 SEO blog posts/year',
          'Up to 250 keywords tracked',
          'Up to 6 locations'
        ],
        setupFee: '$500 one-time setup fee',
        featured: true
      },
      {
        name: 'Platinum',
        price: '$3,200',
        priceUnit: '/month',
        description: 'Enterprise-level SEO strategy',
        features: [
          '20 specialty pages/year',
          '24 SEO blog posts/year',
          'Up to 500 keywords tracked',
          'Up to 9 locations'
        ],
        setupFee: '$500 one-time setup fee'
      }
    ]
  },
  {
    slug: 'branding-design',
    // Former id derived from "Branding &" + "Design", which put a raw & in an HTML id.
    aliases: ['branding-&-design'],
    status: 'core',
    name: 'Branding &',
    highlight: 'Design',
    description: 'Professional logo design and brand identity that makes your practice stand out',
    subDescription:
      'Logo design · Brand guidelines · Color palettes · Typography · Marketing materials',
    accent: { top: 'bg-teal-600', bottom: 'bg-secondary-500' },
    includedFeatures: [
      '10 hour minimum project',
      'Custom logo design',
      'Brand style guide',
      'Multiple revisions included'
    ],
    tiers: [
      {
        name: 'Logo & Branding',
        price: '$150',
        priceUnit: '/hour',
        description: 'Complete brand identity package',
        features: [
          '10 hour minimum project',
          'Custom logo design',
          'Brand style guide',
          'Multiple revisions included'
        ]
      },
      {
        name: 'Graphic Design',
        price: '$150',
        priceUnit: '/hour',
        description: 'Custom graphics and visuals',
        features: [
          '4 hour minimum project',
          'Social media graphics',
          'Print materials',
          'Marketing collateral'
        ]
      }
    ]
  },
  {
    slug: 'patient-flow-ai',
    status: 'emerging',
    name: 'Patient Flow',
    highlight: 'AI',
    description:
      'Client Growth AI automation that helps health clinics capture more leads, book more appointments, and grow faster',
    subDescription:
      'Complete business automation · Lead management · Patient engagement · Marketing campaigns',
    accent: { top: 'bg-cyan-600' },
    background: 'bg-gradient-to-b from-white to-gray-50',
    includedFeatures: [
      'CRM for leads',
      'Calendar booking',
      'Missed-call text back',
      'Basic lead capture',
      'Central inbox'
    ],
    tiers: [
      {
        name: 'Basic Automation System',
        price: '$97',
        priceUnit: '/month',
        description: 'Best for small practices',
        features: [
          'CRM for leads',
          'Calendar booking',
          'Missed-call text back',
          'Basic lead capture',
          'Central inbox'
        ]
      },
      {
        name: 'Growth Automation',
        price: '$197',
        priceUnit: '/month',
        description: 'Our proven growth system',
        features: [
          'Everything above',
          'Automated follow-ups',
          'Appointment reminders',
          'Review generation',
          'Lead pipelines',
          'Monthly optimization'
        ],
        featured: true
      },
      {
        name: 'AI Growth System',
        price: '$297',
        priceUnit: '/month',
        description: 'For clinics ready to scale',
        features: [
          'AI lead responder',
          'Advanced automation',
          'Marketing campaigns',
          'Landing pages',
          'Reporting dashboards'
        ]
      }
    ]
  }
];

/** Services that render, in order. Archived services are excluded entirely. */
export const visibleServices = services.filter((service) => service.status !== 'archived');

/**
 * Every retired anchor id that still needs a target on the page, paired with the
 * slug it should scroll to. Built from `aliases` so adding one is a data edit.
 */
export const anchorAliases: { alias: string; slug: string }[] = services
  .filter((service) => service.status !== 'archived')
  .flatMap((service) =>
    (service.aliases ?? []).map((alias) => ({ alias, slug: service.slug }))
  );

/**
 * Ids of archived services, plus any aliases they carried. These sections no longer
 * render, so their anchors need a home elsewhere on the page — the website plans,
 * where the SEO Foundations explainer now lives. Someone following an old
 * /pricing#search-engine-optimization link should land on what we actually offer.
 */
export const retiredAnchors: string[] = services
  .filter((service) => service.status === 'archived')
  .flatMap((service) => [service.slug, ...(service.aliases ?? [])]);

/**
 * Normalizes a service to tier groups. A service with a single unnamed family gets
 * one group with an empty label, which the renderer treats as "no group heading".
 */
export function tierGroupsFor(service: Service): TierGroup[] {
  if (service.tierGroups?.length) return service.tierGroups;
  if (service.tiers?.length) return [{ label: '', tiers: service.tiers }];
  throw new Error(
    `Service "${service.slug}" has no tiers. Use status: 'archived' to retire a service — never an empty tier list.`
  );
}

/** Alternating dark/light, derived from position among VISIBLE services. */
export function themeForIndex(index: number): 'light' | 'dark' {
  return index % 2 === 0 ? 'dark' : 'light';
}

/** Alternating column order, derived from position among VISIBLE services. */
export function reverseForIndex(index: number): boolean {
  return index % 2 === 1;
}
