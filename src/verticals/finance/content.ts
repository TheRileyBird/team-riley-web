import northMeridianConcept from '../../assets/concepts/north-meridian-advisors.jpg';
import cedarPostConcept from '../../assets/concepts/cedar-post-retirement.jpg';
import aldermanConcept from '../../assets/concepts/alderman-tax-partners.jpg';
import life2healthSite from '../../assets/sites/life2health.png';
import financePlaceholder1 from '../../assets/placeholders/finance-1.jpg';
import financePlaceholder2 from '../../assets/placeholders/finance-2.jpg';
import financePlaceholder3 from '../../assets/placeholders/finance-3.jpg';
import financePlaceholder4 from '../../assets/placeholders/finance-4.jpg';
import financeAdvisorClient from '../../assets/videos/finance-advisor-client.mp4';
import financeStrategyMeeting from '../../assets/videos/finance-strategy-meeting.mp4';
import financeDesk from '../../assets/videos/finance-advisor-desk.mp4';
import financeNumbers from '../../assets/videos/finance-running-numbers.mp4';
import financeHandshake from '../../assets/videos/finance-handshake.mp4';
import financePoster from '../../assets/videos/finance-poster.jpg';
import teamRileyLogo from '../../assets/images/team-riley-logo-finance-gold.png';
import teamRileyLogoOnDark from '../../assets/images/team-riley-logo-finance-gold-on-dark.png';
import favicon from '../../assets/images/favicon-finance-gold.png';
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
  furniture: { iconTile: 'from-accent-500 to-accent-600', badge: 'from-accent-600 to-accent-700' },
  audience: 'financial advisors',
  logo: teamRileyLogo,
  favicon,
  logoOnDark: teamRileyLogoOnDark,
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
      clips: [
        { src: financeAdvisorClient },
        { src: financeStrategyMeeting },
        { src: financeDesk },
        { src: financeNumbers },
        { src: financeHandshake }
      ],
      poster: financePoster,
      eyebrow: 'Marketing That Compounds',
      heading: { lead: 'Better brands. Better websites. ', highlight: 'More clients.' },
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
    // Concepts plus neutral placeholders until a real advisory site ships. The
    // placeholders are deliberately generic wireframes: no firm name, nothing that
    // could read as client work.
    showcase: [
      { src: life2healthSite, alt: 'Life 2 Health insurance agency website' },
      { src: northMeridianConcept, alt: 'North Meridian Advisors concept homepage' },
      { src: financePlaceholder1, alt: 'Placeholder layout for advisory work in progress' },
      { src: cedarPostConcept, alt: 'Cedar Post Retirement concept homepage' },
      { src: financePlaceholder2, alt: 'Placeholder layout for advisory work in progress' },
      { src: aldermanConcept, alt: 'Alderman Tax Partners concept homepage' },
      { src: financePlaceholder3, alt: 'Placeholder layout for advisory work in progress' }
    ],
    clientLogosLabel: 'Client work we build and manage',
    clientLogos: [
      { name: 'Life 2 Health', src: '/images/logos/life2health.png', href: 'https://life2health.net' }
    ],
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
  },
  about: {
    title: 'About Us - Team Riley Finance',
    description: 'The team behind Team Riley Finance, and how we work with advisory firms',
    header: {
      heading: { lead: 'Your Firm, ', highlight: 'Clearly Explained' },
      subtitle:
        'We are a two-person studio. You work directly with the people who build and run your site, not an account manager.'
    },
    teamSubtitle: 'A small team that answers its own phone',
    joshuaBio:
      'With a decade of experience, including Aveda, Mashable, CNET, LifeHacker, and PCMag, Joshua brings big-brand digital expertise to firms that need to look established online. He has spent that career on sites where trust and clarity decide whether a reader stays.',
    rachaelBio:
      'A licensed Occupational Therapist by training, Rachael has spent her career explaining complicated work to the people who need it. She writes and runs campaigns the same way: plain language, no jargon, and a clear next step for the reader.',
    differentSubtitle:
      'We are not a volume shop. We take a small number of firms, learn who you serve and how you charge, and build around that.',
    expertise: {
      title: 'Built With the Marketing Rule in Mind',
      body: 'We write your site with SEC Marketing Rule advertising requirements in mind, including how testimonials and performance claims are handled.'
    },
    missionHeading: { lead: '', highlight: 'Better Websites', trail: ' For Advisory Firms' },
    missionSubtitle:
      'We believe every advisory firm deserves a website that explains its work as clearly as it deserves'
  },
  services: {
    title: 'Services - Team Riley Finance',
    description: 'Websites, branding and marketing services built for financial advisors',
    hero: {
      eyebrow: 'Digital Marketing For Advisory Firms',
      heading: { lead: 'Your advice is ', highlight: 'worth trusting', trail: '.' },
      subheading: 'Your website should show it.',
      problem: 'Most advisory firms have a digital presence that does not match the care they put into their work.',
      comparison:
        'Every day, people deciding who should manage their money look up three or four firms, and quietly book with the one whose website explains itself clearly, even when your service is better.'
    },
    consultCta: 'Book Your Firm Website Review',
    consultCtaLong: 'Schedule Your Firm Website Review',
    wrongProblem: {
      heading: 'Most advisory firms think they need more leads.',
      rebuttal: 'Usually, that is not the whole story.',
      reality:
        'What they actually need is the digital infrastructure that makes prospects trust them faster and book with less friction.'
    },
    failedEfforts: [
      ['Posting inconsistently on social media', 'without a real strategy behind it'],
      ['Hiring a generic marketing agency', 'that does not understand how people choose an advisor'],
      ['Running ads to a weak website', 'which silently kills conversions'],
      ['DIY website builders', 'that make your firm look smaller than it is'],
      ['Asking an associate to \u201chelp with marketing\u201d', 'while they already have full-time jobs'],
      ['Depending entirely on referrals', 'which creates unpredictable growth'],
      ['Paying for SEO with no measurable growth', 'because nobody fixed the foundation first'],
      ['Buying leads from a lead service', 'that sells the same prospect to three other firms']
    ],
    partner: {
      heading: 'Team Riley Finance becomes your marketing department.',
      body: 'We work with a small number of firms at a time, so you can focus on clients instead of trying to become a marketer.'
    },
    forYou: {
      heading: { lead: 'We know ', highlight: 'Advisory Firms' },
      body: 'This is built for firms that know their digital presence no longer reflects the standard of care they hold themselves to.'
    },
    segments: [
      { label: 'Registered Investment Advisor', detail: 'Clear positioning for fee-only firms explaining how they work and who they serve.', icon: 'line-chart' },
      { label: 'Wealth Management', detail: 'A presence that matches the households you want, without performance claims.', icon: 'gem' },
      { label: 'Retirement Planning', detail: 'Plain-language pages for people weighing the biggest decision of their working life.', icon: 'piggy-bank' },
      { label: 'Tax & Accounting', detail: 'Seasonal-ready sites with clear services, pricing and scheduling.', icon: 'calculator' },
      { label: 'Insurance & Benefits', detail: 'Straightforward explanations for products people find hard to compare.', icon: 'shield' },
      { label: 'Estate & Legacy Planning', detail: 'Reassuring design for families planning across generations.', icon: 'scroll' },
      { label: 'Business Owner Advisory', detail: 'Positioning for exit planning, succession and owner-specific advice.', icon: 'briefcase' },
      { label: 'Solo & Breakaway Advisor', detail: 'A presence that looks established from day one after going independent.', icon: 'user-round' }
    ],
    platform: {
      heading: { lead: 'Grow Your Firm ', highlight: 'On Autopilot' },
      body: 'More than just a website\u2014get Client Growth AI, a complete client platform with AI that answers calls, books introductory meetings, and follows up with prospects 24/7.',
      phoneAgent: 'Never miss a call\u2014AI answers, qualifies prospects, and books introductory meetings automatically'
    }
  },
  contact: {
    businessTypes: [
      { value: 'ria', label: 'Registered Investment Advisor' },
      { value: 'wealth', label: 'Wealth Management' },
      { value: 'retirement', label: 'Retirement Planning' },
      { value: 'tax', label: 'Tax & Accounting' },
      { value: 'insurance', label: 'Insurance & Benefits' },
      { value: 'solo', label: 'Solo or Breakaway Advisor' },
      { value: 'other', label: 'Other' }
    ]
  },
  sitemap: {
    homeDescription: 'Professional web design for financial advisors',
    portfolioDescription: 'View our advisory firm concept work',
    portfolioCategories: [
      { title: 'Advisory & Wealth', url: '/portfolio#advisory', description: 'RIA and wealth management concepts' },
      { title: 'Planning & Tax', url: '/portfolio#planning', description: 'Retirement, tax and planning concepts' },
      { title: 'Insurance & Benefits', url: '/portfolio#insurance', description: 'Insurance and benefits concepts' }
    ]
  },
  platform: {
    description: 'Complete CRM and marketing automation platform built for advisory firms',
    heroSubtitle:
      'Everything you need to attract, qualify, and retain clients\u2014powered by Client Growth AI that works 24/7 for your firm.',
    focusLine:
      'While you focus on client work, Client Growth AI handles calls, qualifies prospects, books introductory meetings, and follows up\u2014automatically.',
    featuresSubtitle: 'Everything you need to run and grow your advisory firm\u2014all in one place',
    crmBody: 'Track every prospect and client conversation in one organized system built for advisory firms.',
    builtFor: { lead: 'Built For ', highlight: 'Advisory Firms' },
    builtForSubtitle:
      'Stop cobbling together different tools. Get everything you need in one platform designed for firms like yours.'
  },
  portfolio: {
    title: 'Portfolio - Team Riley Finance',
    description: 'Client work and design concepts for advisory firms: clear, compliant websites that explain the work',
    header: {
      heading: { lead: '', highlight: 'Websites That Explain', trail: ' The Work' },
      subtitle:
        'Client work and design concepts for advisory firms. The concepts are our own designs rather than client sites, and every one of those cards says so.'
    },
    sections: [
      {
        id: 'advisory',
        color: 'primary',
        icon: 'line-chart',
        pill: 'Advisory & Wealth',
        heading: 'RIAs & Wealth Management',
        intro:
          'Concepts for fee-only firms: what you charge, what a client gets for it, and who you serve, stated plainly and without performance claims.',
        carousel: false,
        projects: [
          {
            name: 'North Meridian Advisors',
            badge: 'Registered Investment Advisor',
            image: northMeridianConcept,
            imageAlt: 'North Meridian Advisors concept homepage for a fee-only RIA',
            description:
              'A concept for a fee-only RIA: the fiduciary standard in writing, fees on the homepage, and an introductory call as the only ask. No returns, no testimonials.',
            tags: ['Concept Design', 'Fee Transparency', 'Meeting Booking'],
            concept: true
          }
        ]
      },
      {
        id: 'planning',
        color: 'secondary',
        icon: 'piggy-bank',
        pill: 'Planning & Tax',
        heading: 'Retirement, Tax & Planning',
        intro:
          'Concepts built around the question a prospect actually arrives with, answered before they are asked to book anything.',
        carousel: false,
        projects: [
          {
            name: 'Cedar Post Retirement',
            badge: 'Retirement Planning',
            image: cedarPostConcept,
            imageAlt: 'Cedar Post Retirement concept homepage for retirement planning',
            description:
              'A concept built on one question: can I retire? Social Security timing, taxes and healthcare framed as the decisions they are, with a checkup as the entry point.',
            tags: ['Concept Design', 'Question-Led Homepage', 'Checkup Offer'],
            concept: true
          },
          {
            name: 'Alderman Tax Partners',
            badge: 'Tax & Accounting',
            image: aldermanConcept,
            imageAlt: 'Alderman Tax Partners concept homepage for business tax planning',
            description:
              'A concept for an owner-focused tax practice: quarterly planning over April surprises, flat monthly pricing, and a scheduling call instead of a contact form.',
            tags: ['Concept Design', 'Flat Monthly Pricing', 'Planning Calls'],
            concept: true
          }
        ]
      },
      {
        id: 'insurance',
        color: 'accent',
        icon: 'shield',
        pill: 'Insurance & Benefits',
        heading: 'Insurance & Benefits',
        intro:
          'Agencies whose work is making a shelf of complicated products legible, so the person reading knows which conversation to ask for.',
        carousel: false,
        projects: [
          {
            name: 'Life 2 Health',
            badge: 'Insurance Agency',
            image: life2healthSite,
            imageAlt: 'Life 2 Health insurance agency homepage',
            imagePosition: '50% 0%',
            description:
              'An independently owned agency representing several A-rated carriers. The site sorts life, health and specialty cover into plain choices and puts a licensed agent, not a quote form, at the end of every path.',
            tags: ['Insurance Agency', 'Plan Comparison', 'Agent Contact'],
            href: 'https://life2health.net'
          }
        ]
      }
    ],
    reviews: []
  }
};
