/**
 * The "All plans include" items and the explanation behind each one.
 *
 * Every chip in the row is a button that opens its own panel, so a visitor can dig
 * into whichever promise they're skeptical about instead of reading a wall of copy.
 *
 * Kept deliberately short. Each panel is a headline and a paragraph or two; only
 * Unlimited updates and SEO foundations carry cards, because those two genuinely
 * have distinct sub-parts. Bullet lists were removed — they padded the panels
 * without adding much a paragraph couldn't carry.
 *
 * Content rules that matter here:
 * - No vendor names. Describe the capability, not the supplier.
 * - No unverified performance numbers. Architectural facts are fair; invented load
 *   times are not.
 * - Nothing that promises what only the Fractional CTO engagement delivers. See
 *   the footnote on `strategy`.
 */

/** Icon keys map to components in PlanIncludes.astro, keeping this file pure TS. */
export type PointIcon = 'content' | 'design' | 'features' | 'performance';

export interface IncludePoint {
  title: string;
  body: string;
  icon?: PointIcon;
}

export interface PlanInclude {
  /** Drives the chip's panel id. Must be unique. */
  id: string;
  /** Chip text. Kept short — it has to fit six across. */
  label: string;
  headline: string;
  intro: string[];
  /** Rendered full width when there's a single card, two-up otherwise. */
  points?: IncludePoint[];
  /** Small print under the panel. */
  footnote?: string;
}

export const planIncludes: PlanInclude[] = [
  {
    id: 'hosting',
    label: 'Hosting',
    headline: 'Enterprise hosting, included',
    intro: [
      "Your site is served from a global edge network, so pages load from the location closest to each visitor. SSL, backups, and security patching are handled, every version can be rolled back instantly, and there's no separate hosting bill or control panel for you to maintain."
    ]
  },
  {
    id: 'support',
    label: 'Ongoing support',
    headline: 'A managed website, not a one-time project',
    intro: [
      'Most websites are sold as a one-time project: you pay for the build, get handed the keys, and it starts aging that day. Every change becomes a new invoice, and in a few years you pay again for a redesign. We stay on it instead — the same team that built your site keeps it current, makes the changes you ask for, and is there when something breaks, all for one predictable monthly fee.'
    ]
  },
  {
    id: 'updates',
    label: 'Unlimited updates',
    headline: 'Never pay per change',
    intro: [
      'Make changes anytime, as many times as you want. No hourly rates, no surprise bills, no limits.'
    ],
    points: [
      {
        icon: 'content',
        title: 'Content updates',
        body: 'Change text, images, and pages anytime'
      },
      {
        icon: 'design',
        title: 'Design improvements',
        body: 'Refresh layouts and styling so the site stays current'
      },
      {
        icon: 'features',
        title: 'New features',
        body: 'Add functionality as your business changes'
      },
      {
        icon: 'performance',
        title: 'Performance and security',
        body: 'Kept fast and patched as part of the plan'
      }
    ]
  },
  {
    id: 'seo',
    label: 'SEO foundations',
    headline: 'SEO foundations, included with every website',
    intro: [
      "Every Team Riley website is built so search engines and AI-powered search tools can crawl it, understand it, and index it properly. We don't promise particular rankings. We make sure the website itself isn't what's holding you back."
    ],
    points: [
      {
        title: "What's the difference between this and an SEO campaign?",
        body: "Building an SEO-ready website gives Google a strong foundation to understand and index your site. Ongoing SEO is a separate marketing effort designed to improve visibility for specific searches over time, through keyword strategy, content development, local search and competitive analysis. It's available as a separate service, quoted by proposal."
      }
    ]
  },
  {
    id: 'mobile',
    label: 'Mobile optimization',
    headline: 'Built for the phone first',
    intro: [
      'Most people will meet your business on a phone. Every page is designed and tested at phone, tablet, and desktop sizes rather than shrunk down after the fact, with images sized for the device and tap targets built for thumbs instead of cursors.'
    ]
  },
  {
    id: 'strategy',
    label: 'Strategy guidance',
    headline: 'Someone thinking about your website besides you',
    intro: [
      'You get input on what to change and what to prioritize — which pages to add or retire as your services shift, what the site should say first, and a read on a new offer before you commit to it — not just someone waiting for a request to come in.'
    ],
    footnote:
      'Dedicated monthly strategy sessions and hands-on technical leadership are the Fractional CTO engagement, which is a separate service.'
  }
];
