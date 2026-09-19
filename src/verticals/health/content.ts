import careptSite from '../../assets/sites/carept.png';
import cfcSite from '../../assets/sites/cfc.png';
import dailywisdomSite from '../../assets/sites/dailywisdom.png';
import domlukeSite from '../../assets/sites/domluke.png';
import dsmmdSite from '../../assets/sites/dsmmd.png';
import garrettSite from '../../assets/sites/garrett.png';
import graceSite from '../../assets/sites/grace.png';
import life2healthSite from '../../assets/sites/life2health.png';
import lovemoreSite from '../../assets/sites/lovemore.png';
import nazarethSite from '../../assets/sites/nazareth.png';
import type { VerticalContent } from '../content/types';

/**
 * Health — the original Team Riley site. Every string here was lifted verbatim from
 * the page it came from, so the built health site is unchanged by the extraction.
 */
export const content: VerticalContent = {
  audience: 'health and wellness businesses',
  meta: {
    defaultDescription: 'Team Riley Web - Digital Health For Your Business',
    ogSiteName: 'Team Riley Web',
    socialShareImageAlt: 'Team Riley Web - Digital Health For Your Business'
  },
  footer: {
    tagline:
      'We help health and wellness brands grow their online presence with beautiful, high-converting websites that drive real results.',
    industriesHeading: 'Industries Served',
    industries: [
      { label: 'Medical Clinics', href: '/portfolio#medical' },
      { label: 'Pharmacies', href: '/portfolio#medical' },
      { label: 'Fitness Centers', href: '/portfolio#physical' },
      { label: 'Wellness Coaches', href: '/portfolio#physical' },
      { label: 'Holistic Practitioners', href: '/portfolio#holistic' }
    ],
    copyrightHolder: 'Team Riley Wellness'
  },
  home: {
    title: 'Team Riley Web - Digital Health For Your Business',
    description:
      'Team Riley Web - Digital Health For Your Business',
    hero: {
      eyebrow: 'Digital Health For Your Business',
      heading: { lead: 'Better brands. Better websites. ', highlight: 'More clients.' },
      subtitle:
        'Scale your revenue with a world-class online presence, client acquisition, automated marketing, and unlimited updates.'
    },
    visibility: {
      eyebrow: 'Managed For You',
      heading: { lead: 'Stand Out', highlight: ' Build Trust' },
      body: 'We craft a world-class digital presence for health and wellness businesses. Your brand should reflect the true quality of care your expertise so you can stop being the best-kept secret in your market and start being the most visible, most trusted, and most booked practice in your area.'
    },
    problem: {
      heading: { lead: 'If Your Digital Presence Doesn’t Match Your ', highlight: 'Level of Care...' },
      competitorsTitle: 'Clients choose competitors with:',
      competitorAdvantages: [
        'better websites',
        'better branding',
        'better Google presence',
        'better reviews and social proof'
      ],
      lossesTitle: "Your business loses when it's:",
      losses: [
        'represented by a dated website',
        'inconsistent across search, social, and booking',
        'hard to find online',
        'unclear about what makes you different'
      ],
      summary:
        'Most health businesses don’t have a service problem.<br>They have a visibility, trust, and positioning problem.',
      closer:
        'Team Riley fixes the disconnect between the quality of your work and the way your business appears online.'
    },
    process: {
      heading: 'We build the system, then keep it moving.',
      subtitle: 'A simple path from invisible online to easier to find, easier to trust, and easier to book.',
      steps: [
        {
          title: 'Complete the Form',
          body: 'Tell us about your practice, goals, and the clients you want to reach.'
        },
        {
          title: 'We Build Your Site',
          body: 'We create the website, messaging, and digital foundation your market should see.'
        },
        {
          title: 'Launch & Grow',
          body: 'Go live with a managed presence that keeps improving as your practice grows.'
        }
      ]
    },
    showcase: [
      { src: nazarethSite, alt: 'Nazareth website portfolio preview' },
      { src: life2healthSite, alt: 'Life2Health website portfolio preview' },
      { src: cfcSite, alt: 'CFC website portfolio preview' },
      { src: domlukeSite, alt: 'Dom Luke website portfolio preview' },
      { src: dailywisdomSite, alt: 'Daily Wisdom website portfolio preview' },
      { src: graceSite, alt: 'Grace Midwifery Collective website portfolio preview' },
      { src: lovemoreSite, alt: 'LoveMore website portfolio preview' },
      { src: dsmmdSite, alt: 'DSM MD website portfolio preview' },
      { src: careptSite, alt: 'CarePT website portfolio preview' },
      { src: garrettSite, alt: 'Garrett website portfolio preview' }
    ],
    clientLogosLabel: 'Trusted by Hundreds of Smart Business Owners',
    clientLogos: [
      { name: 'Life2Health', src: '/images/logos/life2health.png', href: 'https://life2health.com' },
      { name: 'DOM', src: '/images/logos/dom.gif', href: 'https://domluke.com/' },
      { name: 'DSM MD', src: '/images/logos/dsm-md.webp', href: 'https://dsmmd.com' },
      {
        name: 'Galleria Medical Pharmacy',
        src: '/images/logos/galleria-medical-pharmacy.png',
        href: 'https://galleriamedpharmacy.com/'
      },
      { name: 'LoveMore', src: '/images/logos/lovemore.webp', href: 'https://lovemoremcc.com/' },
      { name: 'SupportIV', src: '/images/logos/support-iv.webp', href: 'https://supportivwellness.com/' },
      {
        name: 'Grace Midwifery Collective',
        src: '/images/logos/gmc.png',
        href: 'https://gracemidwiferycollective.com/'
      }
    ],
    features: {
      heading: { lead: '', highlight: 'Remarkable', trail: ' Features' },
      subtitle: 'We create professional brands that build trust.',
      items: [
        {
          title: 'Conversion-Optimized Website',
          body: 'A stunning website that works 24/7 to turn visitors into booked appointments.'
        },
        {
          title: 'Social Media Management',
          body: "Consistent, on-brand content that builds trust without the owner's daily involvement."
        },
        {
          title: 'Local SEO Strategy',
          body: 'Search strategy built to help health businesses show up in local results.'
        },
        {
          title: 'Client Growth AI',
          body: 'Systems that keep calendars full more predictably and systematically.'
        },
        {
          title: 'Digital Presence That Stays Current',
          body: 'Unlimited updates keep your website and message from falling behind the market.'
        },
        {
          title: 'Fractional Marketing Partner',
          body: 'A true growth partner who understands health and wellness businesses exclusively.'
        }
      ]
    }
  }
};
