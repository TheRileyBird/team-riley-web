import type { VerticalContent } from '../content/types';

/**
 * Law — written for firm owners and solo attorneys.
 *
 * Wording rules for this market:
 *  - "clients", never "patients"; "firm" or "practice", never "clinic".
 *  - No outcome or ranking promises. State bar advertising rules (ABA Model Rule 7.1
 *    and its state versions) treat a claim a prospective client can't verify as
 *    misleading, and several states restrict "specialist" and testimonial use.
 *  - Say what the work is, not what it will win.
 */
export const content: VerticalContent = {
  audience: 'law firms',
  meta: {
    defaultDescription: 'Team Riley Law - Websites and marketing built for law firms',
    ogSiteName: 'Team Riley Law',
    socialShareImageAlt: 'Team Riley Law - Websites and marketing built for law firms'
  },
  footer: {
    tagline:
      'We help law firms look as credible online as they are in the room, with websites and marketing built around how clients actually choose an attorney.',
    industriesHeading: 'Firms We Work With',
    industries: [
      { label: 'Personal Injury', href: '/portfolio#litigation' },
      { label: 'Family Law', href: '/portfolio#family' },
      { label: 'Estate Planning', href: '/portfolio#estate' },
      { label: 'Criminal Defense', href: '/portfolio#litigation' },
      { label: 'Business & Employment', href: '/portfolio#business' }
    ],
    copyrightHolder: 'Team Riley Law'
  },
  home: {
    title: 'Team Riley Law - Websites and Marketing for Law Firms',
    description:
      'Websites, branding and marketing built for law firms, with bar advertising rules in mind.',
    hero: {
      eyebrow: 'Built For Law Firms',
      heading: { lead: 'Better brands. Better websites. ', highlight: 'More signed clients.' },
      subtitle:
        'A website and marketing system that earns trust before the first call, built with your state bar’s advertising rules in mind.'
    },
    visibility: {
      eyebrow: 'Managed For You',
      heading: { lead: 'Stand Out', highlight: ' Build Trust' },
      body: 'We build the digital presence a serious firm deserves. Most people compare three or four attorneys before they call one, and they decide from a website, a search result and a handful of reviews. Your online presence should carry the same weight as your record, so the clients you want stop scrolling past you.'
    },
    problem: {
      heading: { lead: 'If Your Website Doesn’t Match Your ', highlight: 'Record...' },
      competitorsTitle: 'Clients call the firm with:',
      competitorAdvantages: [
        'a clearer website',
        'stronger branding',
        'a better Google presence',
        'more reviews and visible case results'
      ],
      lossesTitle: 'Your firm loses when it’s:',
      losses: [
        'represented by a dated website',
        'inconsistent across search, social, and intake',
        'hard to find for the matters you want',
        'unclear about the cases you actually take'
      ],
      summary:
        'Most firms don’t have a lawyering problem.<br>They have a visibility, trust, and positioning problem.',
      closer:
        'Team Riley Law fixes the disconnect between the quality of your work and the way your firm appears online.'
    },
    process: {
      heading: 'We build the system, then keep it moving.',
      subtitle:
        'A simple path from hard to find to easier to find, easier to trust, and easier to contact.',
      steps: [
        {
          title: 'Complete the Form',
          body: 'Tell us about your firm, your practice areas, and the matters you want more of.'
        },
        {
          title: 'We Build Your Site',
          body: 'We create the website, messaging, and intake path your prospective clients should see.'
        },
        {
          title: 'Launch & Grow',
          body: 'Go live with a managed presence that keeps improving as your firm grows.'
        }
      ]
    },
    // Nazareth Law is the only live law site so far; the gallery needs at least six,
    // so it stays hidden until the concept mockups land (see E3 in the plan).
    showcase: [],
    clientLogosLabel: 'Trusted by firm owners and solo attorneys',
    clientLogos: [
      { name: 'Nazareth Law', src: '/images/logos/nazareth.png', href: 'https://nazarethlaw.com' }
    ],
    features: {
      heading: { lead: '', highlight: 'Remarkable', trail: ' Features' },
      subtitle: 'We build firm brands that earn trust before the first call.',
      items: [
        {
          title: 'Conversion-Optimized Website',
          body: 'A website that works 24/7 to turn a search into a consultation request.'
        },
        {
          title: 'Social Media Management',
          body: 'Consistent, on-brand content that builds authority without billable hours.'
        },
        {
          title: 'Local SEO Strategy',
          body: 'Search work aimed at the practice areas and the cities you actually serve.'
        },
        {
          title: 'Client Growth AI',
          body: 'Intake follow-up that answers fast, so a lead does not call the next firm.'
        },
        {
          title: 'Digital Presence That Stays Current',
          body: 'Unlimited updates for new attorneys, practice areas and results as they change.'
        },
        {
          title: 'Bar-Rule Aware Marketing',
          body: 'Built with your state bar’s advertising rules in mind: no promises we can’t back up.'
        }
      ]
    }
  }
};
