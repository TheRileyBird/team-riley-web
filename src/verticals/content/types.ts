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

/** A client logo in the homepage marquee. Empty list hides the whole strip. */
export interface ClientLogo {
  name: string;
  /** Path under public/, e.g. "/images/logos/lovemore.webp". */
  src: string;
  /** The client's live site. */
  href: string;
}

export interface VerticalContent {
  /** Plain-language name of the market's customer, e.g. "health and wellness businesses". */
  audience: string;
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
}
