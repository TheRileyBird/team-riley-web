import type { ImageMetadata } from 'astro';

/**
 * Everything that differs between the health, law and finance sites.
 *
 * Wording that reads the same in every market (website features, "Unlimited
 * Updates", the process explainer) stays inline in the page. Only what actually
 * changes per market lives here, so a page stays readable and a market file stays
 * a list of decisions rather than a copy of the site.
 *
 * TypeScript is the guard: add a field here and all three market files fail to
 * compile until each one answers it. The dist leak test then catches wording that
 * belongs to another market.
 */

/** A heading with one gradient-filled span, e.g. "Better brands. [More clients.]". */
export interface Highlighted {
  lead: string;
  highlight: string;
  /** Rare: text after the highlight. */
  trail?: string;
}

export interface LabelledLink {
  label: string;
  href: string;
}

export interface TitledText {
  title: string;
  body: string;
}

/** A site screenshot in the homepage scrolling gallery. */
export interface ShowcaseImage {
  src: ImageMetadata;
  alt: string;
}

/**
 * One shot in the homepage hero reel. `src` is an imported .mp4 (a URL string after
 * Astro processes it), so only the market being built ships its own footage.
 */
export interface HeroClip {
  src: string;
  /** CSS object-position when the subject is off-centre, e.g. "50% 30%". */
  objectPosition?: string;
}

/** A client logo in the homepage marquee. Empty list hides the whole strip. */
export interface ClientLogo {
  name: string;
  /** Path under public/, e.g. "/images/logos/lovemore.webp". */
  src: string;
  /** The client's live site. */
  href: string;
}

/** One "this is for you if" card: the kinds of business this market serves. */
export interface AudienceSegment {
  label: string;
  detail: string;
  /** Lucide icon name; resolved to a component in services.astro. */
  icon: string;
}

/** One option in the contact form's "business type" select. */
export interface BusinessTypeOption {
  value: string;
  label: string;
}

/** A row in the human-readable /sitemap page. */
export interface SitemapEntry {
  title: string;
  url: string;
  description: string;
}

/**
 * One piece of work. `href` present = a live client site. `concept: true` = a design
 * we made to show what we would build, with no client behind it: the card labels it
 * and drops the live link, so it can never read as a client reference (FTC rules on
 * endorsements, and the bar/SEC advertising rules in law and finance).
 */
export interface PortfolioProject {
  name: string;
  badge: string;
  image: ImageMetadata;
  imageAlt: string;
  /** CSS object-position, e.g. "50% 35%". */
  imagePosition?: string;
  description: string;
  tags: string[];
  href?: string;
  concept?: true;
}

export interface PortfolioSection {
  /** Anchor id; the footer and sitemap link to it. */
  id: string;
  color: 'primary' | 'secondary' | 'accent';
  /** Lucide icon name, resolved in portfolio.astro. */
  icon: string;
  pill: string;
  heading: string;
  intro: string;
  /** true = auto-advancing carousel (needs 4+ cards); false = plain grid. */
  carousel: boolean;
  projects: PortfolioProject[];
}

/** The full-width highlight panel under the sections. Omit to hide it. */
export interface PortfolioFeature {
  sectionId: string;
  sectionHeading: string;
  sectionIntro: string;
  eyebrow: string;
  name: string;
  subtitle: string;
  paragraphs: string[];
  tags: string[];
  image: ImageMetadata;
  imageAlt: string;
  href?: string;
}

/** A short client quote shown floating beside a portfolio section. */
export interface ClientReview {
  client: string;
  text: string;
}

/**
 * Small pieces of chrome whose colour is a brand call rather than a layout one:
 * which scale the feature icon tiles and the "Included Forever" badge draw from.
 * Tailwind gradient class pairs, so they must be written out in full for the
 * scanner to keep them.
 */
export interface Furniture {
  iconTile: string;
  badge: string;
}

export interface VerticalContent {
  /** Colour of the small chrome pieces; see Furniture. */
  furniture: Furniture;
  /** Plain-language name of the market's customer, e.g. "health and wellness businesses". */
  audience: string;
  /** The TR mark in this market's colors; health's is the original blue. */
  logo: ImageMetadata;
  /** Lighter mark for near-black backgrounds (the footer). Falls back to `logo`. */
  logoOnDark?: ImageMetadata;
  /** Browser tab icon in this market's colors. */
  favicon: ImageMetadata;
  meta: {
    /** <meta name="description"> when a page passes none. */
    defaultDescription: string;
    ogSiteName: string;
    socialShareImageAlt: string;
  };
  footer: {
    tagline: string;
    industriesHeading: string;
    industries: LabelledLink[];
    copyrightHolder: string;
  };
  home: {
    title: string;
    description: string;
    hero: {
      eyebrow: string;
      heading: Highlighted;
      subtitle: string;
      /**
       * Hero footage, in order. Two or more clips crossfade like a commercial; an
       * empty list falls back to the shader background.
       */
      clips: HeroClip[];
      /** First frame, shown before any video is ready. Required when clips exist. */
      poster?: ImageMetadata;
    };
    visibility: {
      eyebrow: string;
      heading: Highlighted;
      body: string;
    };
    problem: {
      heading: Highlighted;
      competitorsTitle: string;
      competitorAdvantages: string[];
      lossesTitle: string;
      losses: string[];
      summary: string;
      closer: string;
    };
    process: {
      heading: string;
      subtitle: string;
      /** Exactly three, matching the numbered steps. */
      steps: [TitledText, TitledText, TitledText];
    };
    /**
     * Screenshots for the scrolling gallery beside "Stand Out / Build Trust".
     * Fewer than six and the gallery is hidden rather than padded or repeated,
     * so a new market never shows the same three sites over and over.
     */
    showcase: ShowcaseImage[];
    /** Omitted or empty hides the logo marquee (a market with no clients yet). */
    clientLogos: ClientLogo[];
    clientLogosLabel: string;
    features: {
      heading: Highlighted;
      subtitle: string;
      /** Exactly six, rendered as a 3x2 table. */
      items: [TitledText, TitledText, TitledText, TitledText, TitledText, TitledText];
    };
  };
  about: {
    title: string;
    description: string;
    header: { heading: Highlighted; subtitle: string };
    teamSubtitle: string;
    /** Bios stay factual; only the framing changes per market. */
    joshuaBio: string;
    rachaelBio: string;
    differentSubtitle: string;
    /** First "what makes us different" card: the market-expertise one. */
    expertise: TitledText;
    missionHeading: Highlighted;
    missionSubtitle: string;
  };
  services: {
    title: string;
    description: string;
    hero: {
      eyebrow: string;
      heading: Highlighted;
      subheading: string;
      problem: string;
      comparison: string;
    };
    /** The CTA wording used on this page: health books a "Digital Health Checkup". */
    consultCta: string;
    consultCtaLong: string;
    wrongProblem: { heading: string; rebuttal: string; reality: string };
    /** Eight "what you have tried" rows: [what they did, why it did not work]. */
    failedEfforts: [string, string][];
    partner: { heading: string; body: string };
    forYou: { heading: Highlighted; body: string };
    /** The businesses this market serves, shown as an icon grid. */
    segments: AudienceSegment[];
    platform: { heading: Highlighted; body: string; phoneAgent: string };
  };
  contact: {
    /** Replaces the generic list; the value is what lands in the Netlify form. */
    businessTypes: BusinessTypeOption[];
  };
  sitemap: {
    homeDescription: string;
    portfolioDescription: string;
    portfolioCategories: SitemapEntry[];
  };
  platform: {
    description: string;
    heroSubtitle: string;
    focusLine: string;
    featuresSubtitle: string;
    crmBody: string;
    builtFor: Highlighted;
    builtForSubtitle: string;
  };
  portfolio: {
    title: string;
    description: string;
    header: { heading: Highlighted; subtitle: string };
    sections: PortfolioSection[];
    feature?: PortfolioFeature;
    /**
     * Real quotes from real clients of THIS market. Empty renders nothing: a market
     * without its own clients never borrows another market's praise.
     */
    reviews: ClientReview[];
  };
}
