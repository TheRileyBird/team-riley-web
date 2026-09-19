import type { VerticalContent } from '../content/types';

/**
 * Finance — written for financial advisors, RIAs and wealth management firms.
 *
 * Wording rules for this market:
 *  - "clients", never "patients"; "firm" or "practice", never "clinic".
 *  - No performance or return claims, and no testimonials on this site yet. The SEC
 *    Marketing Rule (206(4)-1) governs advertising by registered advisers: a
 *    testimonial needs disclosures, and an unsubstantiated claim is a violation. We
 *    describe the work, never the results a client would get.
 *  - The portfolio is labelled concept work until a real advisory client ships, so
 *    nothing here can read as a client reference.
 */
export const content: VerticalContent = {
  audience: 'financial advisors',
  meta: {
    defaultDescription: 'Team Riley Finance - Websites and marketing for financial advisors',
    ogSiteName: 'Team Riley Finance',
    socialShareImageAlt: 'Team Riley Finance - Websites and marketing for financial advisors'
  },
  footer: {
    tagline:
      'We help advisory firms present themselves online with the clarity and care their clients expect, and with the SEC Marketing Rule in mind.',
    industriesHeading: 'Firms We Work With',
    industries: [
      { label: 'Registered Investment Advisors', href: '/portfolio#advisory' },
      { label: 'Wealth Management', href: '/portfolio#advisory' },
      { label: 'Retirement Planning', href: '/portfolio#planning' },
      { label: 'Tax & Accounting', href: '/portfolio#planning' },
      { label: 'Insurance & Benefits', href: '/portfolio#insurance' }
    ],
    copyrightHolder: 'Team Riley Finance'
  },
  home: {
    title: 'Team Riley Finance - Websites and Marketing for Financial Advisors',
    description:
      'Websites, branding and marketing for advisory firms, built with the SEC Marketing Rule in mind.',
    hero: {
      eyebrow: 'Built For Financial Advisors',
      heading: { lead: 'Better brands. Better websites. ', highlight: 'More qualified prospects.' },
      subtitle:
        'A website and marketing system that explains what you do and who you do it for, built with the SEC Marketing Rule in mind.'
    },
    visibility: {
      eyebrow: 'Managed For You',
      heading: { lead: 'Stand Out', highlight: ' Build Trust' },
      body: 'We build the digital presence an advisory firm deserves. People hand over their life savings to someone they trust, and they start forming that judgment on your website long before the first meeting. Your online presence should carry the same care as your advice, so the right prospects reach out already half-convinced.'
    },
    problem: {
      heading: { lead: 'If Your Website Doesn’t Match Your ', highlight: 'Standard of Care...' },
      competitorsTitle: 'Prospects choose the firm with:',
      competitorAdvantages: [
        'a clearer website',
        'stronger branding',
        'a better Google presence',
        'a plain explanation of how they work'
      ],
      lossesTitle: 'Your firm loses when it’s:',
      losses: [
        'represented by a dated website',
        'inconsistent across search, social, and scheduling',
        'hard to find for the clients you want',
        'unclear about who you serve and how you charge'
      ],
      summary:
        'Most advisory firms don’t have an advice problem.<br>They have a visibility, trust, and positioning problem.',
      closer:
        'Team Riley Finance fixes the disconnect between the quality of your advice and the way your firm appears online.'
    },
    process: {
      heading: 'We build the system, then keep it moving.',
      subtitle:
        'A simple path from hard to find to easier to find, easier to trust, and easier to book.',
      steps: [
        {
          title: 'Complete the Form',
          body: 'Tell us about your firm, your ideal clients, and how you want to be found.'
        },
        {
          title: 'We Build Your Site',
          body: 'We create the website, messaging, and scheduling path your prospects should see.'
        },
        {
          title: 'Launch & Grow',
          body: 'Go live with a managed presence that keeps improving as your firm grows.'
        }
      ]
    },
    // No finance sites yet. Concept mockups land with E3; until then, no gallery.
    showcase: [],
    clientLogosLabel: '',
    clientLogos: [],
    features: {
      heading: { lead: '', highlight: 'Remarkable', trail: ' Features' },
      subtitle: 'We build advisory brands that explain themselves clearly.',
      items: [
        {
          title: 'Conversion-Optimized Website',
          body: 'A website that works 24/7 to turn a visitor into a booked introductory call.'
        },
        {
          title: 'Social Media Management',
          body: 'Consistent, on-brand content that builds familiarity between review meetings.'
        },
        {
          title: 'Local SEO Strategy',
          body: 'Search work aimed at the planning topics and the area you actually serve.'
        },
        {
          title: 'Client Growth AI',
          body: 'Follow-up that answers new inquiries quickly and keeps your calendar filling.'
        },
        {
          title: 'Digital Presence That Stays Current',
          body: 'Unlimited updates for new services, team members and disclosures as they change.'
        },
        {
          title: 'Marketing-Rule Aware Content',
          body: 'Built with SEC Marketing Rule advertising requirements in mind, including testimonials.'
        }
      ]
    }
  }
};
