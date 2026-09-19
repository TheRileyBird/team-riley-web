import harborRidgeConcept from '../../assets/concepts/harbor-ridge-law.jpg';
import lindqvistConcept from '../../assets/concepts/lindqvist-family-law.jpg';
import bexleyConcept from '../../assets/concepts/bexley-estate-law.jpg';
import nazarethSite from '../../assets/sites/nazareth.png';
import lawPlaceholder1 from '../../assets/placeholders/law-1.jpg';
import lawPlaceholder2 from '../../assets/placeholders/law-2.jpg';
import lawPlaceholder3 from '../../assets/placeholders/law-3.jpg';
import lawPlaceholder4 from '../../assets/placeholders/law-4.jpg';
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
    // Real client work first, then concepts, then neutral placeholders: the gallery
    // needs six images to avoid visibly repeating, and a wireframe placeholder is
    // honest filler in a way a repeated client screenshot is not. Drop placeholders
    // as real law sites ship.
    showcase: [
      { src: nazarethSite, alt: 'Nazareth Law Firm website' },
      { src: harborRidgeConcept, alt: 'Harbor Ridge Law concept homepage' },
      { src: lawPlaceholder1, alt: 'Placeholder layout for law firm work in progress' },
      { src: lindqvistConcept, alt: 'Lindqvist Family Law concept homepage' },
      { src: lawPlaceholder2, alt: 'Placeholder layout for law firm work in progress' },
      { src: bexleyConcept, alt: 'Bexley Estate Counsel concept homepage' },
      { src: lawPlaceholder3, alt: 'Placeholder layout for law firm work in progress' },
      { src: lawPlaceholder4, alt: 'Placeholder layout for law firm work in progress' }
    ],
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
  },
  about: {
    title: 'About Us - Team Riley Law',
    description: 'The team behind Team Riley Law, and how we work with firms',
    header: {
      heading: { lead: 'Your Firm, ', highlight: 'Clearly Presented' },
      subtitle:
        'We are a two-person studio. You work directly with the people who build and run your site, not an account manager.'
    },
    teamSubtitle: 'A small team that answers its own phone',
    joshuaBio:
      'With a decade of experience, including Aveda, Mashable, CNET, LifeHacker, and PCMag, Joshua brings big-brand digital expertise to firms that need to look established online. He has spent that career on sites where credibility and search visibility decide whether a reader stays.',
    rachaelBio:
      'A licensed Occupational Therapist by training, Rachael has spent her career explaining complicated work to the people who need it. She writes and runs campaigns the same way: plain language, no jargon, and a clear next step for the reader.',
    differentSubtitle:
      'We are not a volume shop. We take a small number of firms, learn the matters you actually want, and build around them.',
    expertise: {
      title: 'Built Around Bar Rules',
      body: 'We write your site with your state bar’s advertising rules in mind: no promises about outcomes, no claims we cannot support.'
    },
    missionHeading: { lead: '', highlight: 'Better Websites', trail: ' For Law Firms' },
    missionSubtitle:
      'We believe every firm deserves a website that represents its work as well as its attorneys do'
  },
  services: {
    title: 'Services - Team Riley Law',
    description: 'Websites, branding and marketing services built for law firms',
    hero: {
      eyebrow: 'Digital Marketing For Law Firms',
      heading: { lead: 'Your work in the case file is ', highlight: 'first-rate', trail: '.' },
      subheading: 'Your website should be, too.',
      problem: 'Most firms have a digital presence that does not match the quality of their work.',
      comparison:
        'Every day, people with a legal problem search online, compare three or four firms, and quietly call the one with the better website, clearer practice areas and more visible reviews, even when your record is stronger.'
    },
    consultCta: 'Book Your Firm Website Review',
    consultCtaLong: 'Schedule Your Firm Website Review',
    wrongProblem: {
      heading: 'Most firms think they need more referrals.',
      rebuttal: 'Usually, that is not the whole story.',
      reality:
        'What they actually need is the digital infrastructure that makes prospective clients trust them faster and reach out with less friction.'
    },
    failedEfforts: [
      ['Posting inconsistently on social media', 'without a real strategy behind it'],
      ['Hiring a generic marketing agency', 'that does not understand how people choose an attorney'],
      ['Running ads to a weak website', 'which silently kills conversions'],
      ['DIY website builders', 'that make your firm look smaller than it is'],
      ['Asking a paralegal to \u201chelp with marketing\u201d', 'while they already have full-time jobs'],
      ['Depending entirely on referrals', 'which creates unpredictable case flow'],
      ['Paying for SEO with no measurable growth', 'because nobody fixed the foundation first'],
      ['Buying leads from a directory', 'that sells the same lead to three other firms']
    ],
    partner: {
      heading: 'Team Riley Law becomes your marketing department.',
      body: 'We work with a small number of firms at a time, so you can focus on your caseload instead of trying to become a marketer.'
    },
    forYou: {
      heading: { lead: 'We know ', highlight: 'Law Firms' },
      body: 'This is built for firms that know their digital presence no longer reflects the quality of the work they do.'
    },
    segments: [
      { label: 'Personal Injury', detail: 'High-intent search, clear case types, and intake that answers before the next firm does.', icon: 'gavel' },
      { label: 'Family Law', detail: 'Calm, plain-language design for people making a hard decision under stress.', icon: 'users' },
      { label: 'Estate Planning', detail: 'Reassuring positioning for wills, trusts and the conversations families put off.', icon: 'scroll' },
      { label: 'Criminal Defense', detail: 'Fast, mobile-first pages for people who need an attorney today, not next week.', icon: 'shield' },
      { label: 'Business & Employment', detail: 'Credible positioning for owners comparing counsel on substance, not ads.', icon: 'briefcase' },
      { label: 'Immigration', detail: 'Clear service pages, plain language, and multilingual-ready structure.', icon: 'plane' },
      { label: 'Real Estate & Closings', detail: 'Local visibility and simple scheduling for high-volume, time-sensitive work.', icon: 'building' },
      { label: 'Solo & Small Firm', detail: 'A presence that looks established without the overhead of an in-house team.', icon: 'scale' }
    ],
    platform: {
      heading: { lead: 'Grow Your Firm ', highlight: 'On Autopilot' },
      body: 'More than just a website\u2014get Client Growth AI, a complete intake platform with AI that answers calls, books consultations, and follows up with leads 24/7.',
      phoneAgent: 'Never miss a call\u2014AI answers, screens for your case types, and books consultations automatically'
    }
  },
  contact: {
    businessTypes: [
      { value: 'personal-injury', label: 'Personal Injury' },
      { value: 'family', label: 'Family Law' },
      { value: 'estate', label: 'Estate Planning' },
      { value: 'criminal', label: 'Criminal Defense' },
      { value: 'business', label: 'Business & Employment' },
      { value: 'immigration', label: 'Immigration' },
      { value: 'other', label: 'Other' }
    ]
  },
  sitemap: {
    homeDescription: 'Professional web design for law firms',
    portfolioDescription: 'View our law firm website work',
    portfolioCategories: [
      { title: 'Litigation', url: '/portfolio#litigation', description: 'Personal injury and criminal defense websites' },
      { title: 'Family & Estate', url: '/portfolio#family', description: 'Family law and estate planning websites' },
      { title: 'Business & Transactional', url: '/portfolio#business', description: 'Business and employment law websites' }
    ]
  },
  platform: {
    description: 'Complete CRM and intake automation platform built for law firms',
    heroSubtitle:
      'Everything you need to attract, screen, and sign clients\u2014powered by Client Growth AI that works 24/7 for your firm.',
    focusLine:
      'While you focus on your caseload, Client Growth AI handles calls, screens leads, books consultations, and follows up\u2014automatically.',
    featuresSubtitle: 'Everything you need to run and grow your firm\u2014all in one place',
    crmBody: 'Track every inquiry and matter in one organized system built for firm intake.',
    builtFor: { lead: 'Built For ', highlight: 'Law Firms' },
    builtForSubtitle:
      'Stop cobbling together different tools. Get everything you need in one platform designed for firms like yours.'
  },
  portfolio: {
    title: 'Portfolio - Team Riley Law',
    description: 'Law firm websites and design concepts built to earn trust before the first call',
    header: {
      heading: { lead: '', highlight: 'Websites That Get', trail: ' The Call' },
      subtitle:
        'Client work and design concepts for firms that want their online presence to match their record.'
    },
    sections: [
      {
        id: 'litigation',
        color: 'primary',
        icon: 'gavel',
        pill: 'Litigation',
        heading: 'Injury & Defense Firms',
        intro:
          'Fast, mobile-first sites for people who need an attorney today, with intake that answers before the next firm does.',
        carousel: false,
        projects: [
          {
            name: 'Harbor Ridge Law',
            badge: 'Personal Injury',
            image: harborRidgeConcept,
            imageAlt: 'Harbor Ridge Law concept homepage with a free case review form',
            description:
              'A concept for a Gulf Coast injury firm: one clear action above the fold, the fee arrangement stated plainly, and a case review form that works on a phone.',
            tags: ['Concept Design', 'Intake Form', 'Case Types'],
            concept: true
          }
        ]
      },
      {
        id: 'family',
        color: 'secondary',
        icon: 'users',
        pill: 'Family & Estate',
        heading: 'Family Law & Estate Planning',
        intro:
          'Calm, plain-language design for people making hard decisions, where tone matters as much as information.',
        carousel: false,
        projects: [
          {
            name: 'Lindqvist Family Law',
            badge: 'Family Law',
            image: lindqvistConcept,
            imageAlt: 'Lindqvist Family Law concept homepage with a consultation form',
            description:
              'A concept for a divorce and custody practice: predictable fees stated upfront, mediation positioned honestly, and an evening-appointment note where anxious readers look.',
            tags: ['Concept Design', 'Flat-Fee Messaging', 'Consultation Booking'],
            concept: true
          },
          {
            name: 'Bexley Estate Counsel',
            badge: 'Estate Planning',
            image: bexleyConcept,
            imageAlt: 'Bexley Estate Counsel concept homepage for wills and trusts',
            description:
              'A concept for a wills and trusts practice: one flat fee, a two-week timeline, and language a family can read without a glossary.',
            tags: ['Concept Design', 'Flat-Fee Messaging', 'Service Pages'],
            concept: true
          }
        ]
      }
    ],
    feature: {
      sectionId: 'high-stakes',
      sectionHeading: 'Authority for High-Stakes Legal Work',
      sectionIntro:
        'A focused digital presence for firms whose work sits at the intersection of medicine, injury, and complex litigation.',
      eyebrow: 'Client Work',
      name: 'Nazareth Law Firm',
      subtitle: 'Neil F. Nazareth, Principal Attorney',
      paragraphs: [
        'With over two decades of experience, Neil F. Nazareth has dedicated his career to representing victims of mesothelioma and maritime accidents.',
        'Recognized annually as a Louisiana Super Lawyer since 2013, Neil has secured over $50 million in compensation for individual clients in complex asbestos and maritime litigation cases.'
      ],
      tags: ['Mesothelioma', 'Maritime Accidents', 'Asbestos Litigation', '$50M+ Recovered'],
      image: nazarethSite,
      imageAlt: 'Nazareth Law Firm website',
      href: 'https://nazarethlawfirm.com/'
    },
    reviews: []
  }
};
