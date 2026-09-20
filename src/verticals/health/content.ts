import accbpSite from '../../assets/sites/accbp.png';
import careptSite from '../../assets/sites/carept.png';
import cfcSite from '../../assets/sites/cfc.png';
import dailyWisdomSite from '../../assets/sites/dailywisdom-site.jpg';
import domlukeSite from '../../assets/sites/domluke.png';
import genesis360Site from '../../assets/sites/genesis360.png';
import joyWithinBirthSite from '../../assets/sites/joywithinbirth.png';
import dsmmdSite from '../../assets/sites/dsmmd.png';
import garrettSite from '../../assets/sites/garrett.png';
import graceSite from '../../assets/sites/grace.png';
import life2healthSite from '../../assets/sites/life2health.png';
import lovemoreSite from '../../assets/sites/lovemore.png';
import nazarethSite from '../../assets/sites/nazareth.png';
import dsmMdOffice from '../../assets/images/dsm-md-office.jpg';
import sleepLab from '../../assets/images/sleep-lab.jpg';
import virtualExercise from '../../assets/images/virtual-exercise.jpg';
import supportivTreatment from '../../assets/images/supportiv-treatment.jpg';
import lovemoreYoga from '../../assets/images/lovemore-yoga.jpg';
import graceMidwiferyBirth from '../../assets/images/grace-midwifery-birth.jpg';
import manHiking from '../../assets/images/man-hiking.jpg';
import domLukeCoaching from '../../assets/images/dom-luke-coaching.jpg';
import lovittReviewPoster from '../../assets/images/lovitt-review-poster.png';
import joyWithinBirthMaternity from '../../assets/images/joy-within-birth-maternity.jpg';
import genesis360Hvac from '../../assets/images/genesis360-aeroguard-hvac.jpg';
import accbpAssessment from '../../assets/images/accbp-assessment.jpg';
import cfcCardSite from '../../assets/sites/cfc.jpg';
import healthDoctor from '../../assets/videos/health-doctor-office.mp4';
import healthInjector from '../../assets/videos/health-injector.mp4';
import healthScanReview from '../../assets/videos/health-scan-review.mp4';
import healthPharmacist from '../../assets/videos/health-pharmacist.mp4';
import healthPoster from '../../assets/videos/health-poster.jpg';
import teamRileyLogo from '../../assets/images/team-riley-logo-gradient.png';
import favicon from '../../assets/images/favicon-health.png';
import type { VerticalContent } from '../content/types';

/**
 * Health — the original Team Riley site. Every string here was lifted verbatim from
 * the page it came from, so the built health site is unchanged by the extraction.
 */
export const content: VerticalContent = {
  furniture: { iconTile: 'from-primary-600 to-primary-700', badge: 'from-primary-700 to-primary-800' },
  audience: 'health and wellness businesses',
  logo: teamRileyLogo,
  favicon,
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
      clips: [
        { src: healthDoctor },
        { src: healthInjector },
        { src: healthScanReview },
        { src: healthPharmacist }
      ],
      poster: healthPoster,
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
      { src: genesis360Site, alt: 'Genesis360 website portfolio preview' },
      { src: accbpSite, alt: 'ACC Building Performance website portfolio preview' },
      { src: cfcSite, alt: 'CFC Skincare website portfolio preview' },
      { src: domlukeSite, alt: 'Dom Luke website portfolio preview' },
      { src: joyWithinBirthSite, alt: 'Joy Within Birth website portfolio preview' },
      { src: graceSite, alt: 'Grace Midwifery Collective website portfolio preview' },
      { src: lovemoreSite, alt: 'LoveMore website portfolio preview' },
      { src: dsmmdSite, alt: 'DSM MD website portfolio preview' },
      { src: careptSite, alt: 'CarePT website portfolio preview' },
      { src: garrettSite, alt: 'Garrett website portfolio preview' }
    ],
    clientLogosLabel: 'Trusted by Hundreds of Smart Business Owners',
    clientLogos: [
      { name: 'Life 2 Health', src: '/images/logos/life2health.png', href: 'https://life2health.net' },
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
  },
  about: {
    title: 'About Us - Team Riley',
    description: 'Learn about Team Riley and our mission to help health and wellness businesses thrive online',
    header: {
      heading: { lead: '', highlight: 'Health', trail: ' is Our Mission' },
      subtitle:
        'As health enthusiasts and wellness practitioners ourselves, we understand what drives your business—because we live it every day.'
    },
    teamSubtitle: 'A dedicated team of health nuts committed to your success',
    joshuaBio:
      "With a decade of experience, including Aveda, Mashable, CNET, LifeHacker, and PCMag, Joshua brings big-brand digital expertise to health and wellness businesses. Health isn't just business for Joshua—it's a lifestyle that guides everything he builds.",
    rachaelBio:
      'As a licensed Occupational Therapist, Rachael brings a unique perspective: she understands both the clinical side and the business side of health and wellness. With compassion, she meets clients where they are and creates effective campaigns that convert.',
    differentSubtitle:
      "We're not just building brands. As practitioners and wellness enthusiasts ourselves, we speak your language and understand what matters to your clients.",
    expertise: {
      title: 'Health & Wellness Expertise',
      body: "We specialize in health and wellness, understanding your industry's unique needs and challenges."
    },
    missionHeading: { lead: '', highlight: 'Better Health', trail: ' For Your Business' },
    missionSubtitle:
      'We believe every health and wellness business deserves a website that works as hard as they do'
  },
  services: {
    title: 'Services - Team Riley',
    description: 'Professional web design and development services for health and wellness businesses',
    hero: {
      eyebrow: 'Digital Health For Health & Wellness Brands',
      heading: { lead: 'Your clinical expertise is ', highlight: 'world-class', trail: '.' },
      subheading: 'Your digital presence should be, too.',
      problem: 'Most health businesses have a digital presence does not match their level of expertise.',
      comparison:
        'Every day, potential clients search online, compare options, and silently choose competitors with better websites, better branding, better Google presence, and better social proof, even when your actual care is far superior.'
    },
    consultCta: 'Book Your Digital Health Checkup',
    consultCtaLong: 'Schedule Your Digital Health Checkup',
    wrongProblem: {
      heading: 'Most health businesses think they need more training.',
      rebuttal: 'Usually, that is not true.',
      reality:
        'What they actually need is the digital infrastructure that makes clients trust them faster and take the next step with less friction.'
    },
    failedEfforts: [
      ['Posting inconsistently on social media', 'without a real strategy behind it'],
      ['Hiring a generic marketing agency', 'that does not understand healthcare psychology'],
      ['Running ads to a weak website', 'which silently kills conversions'],
      ['DIY website builders', 'that make your practice look smaller than it is'],
      ['Asking staff to \u201chelp with marketing\u201d', 'while they already have full-time jobs'],
      ['Depending entirely on referrals', 'which creates unpredictable revenue cycles'],
      ['Paying for SEO with no measurable growth', 'because nobody fixed the foundation first'],
      ['Trying to \u201clook professional\u201d online', 'instead of building actual authority and trust']
    ],
    partner: {
      heading: 'Team Riley becomes your digital health partner.',
      body: 'We work exclusively with health, wellness, and medical brands, so you can focus on client care instead of trying to become a marketer.'
    },
    forYou: {
      heading: { lead: 'We know ', highlight: 'Health & Wellness' },
      body: 'This is built for practices and wellness brands that know their digital presence no longer reflects the level of care they provide.'
    },
    segments: [
      { label: 'Med Spa', detail: 'Premium aesthetics, injectables, skin care, and membership-driven client journeys.', icon: 'syringe' },
      { label: 'Chiropractic Clinic', detail: 'Local search visibility and trust-building experiences for care plans and recurring visits.', icon: 'bone' },
      { label: 'Wellness Studio', detail: 'A polished brand presence for classes, packages, communities, and ongoing engagement.', icon: 'dumbbell' },
      { label: 'Functional Medicine Practice', detail: 'Clear positioning for complex care models, premium offers, and high-intent clients.', icon: 'heart-pulse' },
      { label: 'Therapy Practice', detail: 'Calm, credible design that helps people feel safe before they schedule.', icon: 'brain' },
      { label: 'Private-Pay Medical Business', detail: 'Conversion-focused messaging for clients making out-of-pocket decisions.', icon: 'wallet-cards' },
      { label: 'Yoga or Holistic Wellness Brand', detail: 'Warm, distinctive digital presence for values-led wellness businesses.', icon: 'flower' },
      { label: 'Dental or Specialty Clinic', detail: 'Authority-building websites for practices that need to look as advanced as their care.', icon: 'smile-plus' }
    ],
    platform: {
      heading: { lead: 'Grow Your Practice ', highlight: 'On Autopilot' },
      body: 'More than just a website\u2014get Client Growth AI, a complete business management platform with AI that answers calls, books appointments, and follows up with leads 24/7.',
      phoneAgent: 'Never miss a call\u2014AI answers, qualifies leads, and books appointments automatically'
    }
  },
  contact: {
    businessTypes: [
      { value: 'medical', label: 'Medical Clinic' },
      { value: 'wellness', label: 'Wellness Center' },
      { value: 'fitness', label: 'Fitness Studio' },
      { value: 'therapy', label: 'Therapy Practice' },
      { value: 'spa', label: 'Spa/Salon' },
      { value: 'pharmacy', label: 'Pharmacy' },
      { value: 'other', label: 'Other' }
    ]
  },
  sitemap: {
    homeDescription: 'Professional web design for health & wellness businesses',
    portfolioDescription: 'View our health & wellness client work',
    portfolioCategories: [
      { title: 'Medical & Clinical Health', url: '/portfolio#medical', description: 'Healthcare provider websites' },
      { title: 'Physical Wellness', url: '/portfolio#physical', description: 'Fitness and wellness websites' },
      { title: 'Holistic & Emotional Wellness', url: '/portfolio#holistic', description: 'Holistic health websites' }
    ]
  },
  platform: {
    description: 'Complete CRM and marketing automation platform built specifically for health and wellness businesses',
    heroSubtitle:
      'Everything you need to attract, convert, and retain clients\u2014powered by Client Growth AI that works 24/7 for your health and wellness business.',
    focusLine:
      'While you focus on helping clients get healthy, Client Growth AI handles calls, qualifies leads, books appointments, and follows up\u2014automatically.',
    featuresSubtitle: 'Everything you need to run and grow your health and wellness practice\u2014all in one place',
    crmBody: 'Track every lead and client interaction in one organized system built for health practitioners.',
    builtFor: { lead: 'Built For ', highlight: 'Health & Wellness' },
    builtForSubtitle:
      'Stop cobbling together different tools. Get everything you need in one platform designed for practitioners like you.'
  },
  portfolio: {
    title: 'Portfolio - Team Riley',
    description: 'View our portfolio of health and wellness websites designed to convert visitors into clients',
    header: {
      heading: { lead: '', highlight: 'Healthy Websites', trail: ' That Drive Results' },
      subtitle: 'Explore our portfolio of custom-designed websites built for health and wellness businesses like yours.'
    },
    sections: [
      {
        id: 'medical',
        color: 'primary',
        icon: 'stethoscope',
        pill: 'Medical & Clinical',
        heading: 'Healthcare Providers',
        intro: 'Websites designed for clinical practices, health-adjacent brands, and authority-driven firms that need trust, clarity, and conversion built in.',
        carousel: true,
        projects: [
          {
            image: genesis360Hvac,
            imageAlt: 'Genesis360 AeroGuard unit fogging an HVAC evaporator coil',
            imagePosition: '50% 35%',
            badge: 'Environmental Health',
            name: 'Genesis360',
            description: 'Automated dry fog disinfection systems paired with an EPA-registered botanical disinfectant, built for barns, gyms, and medical spaces.',
            tags: [
              'Product Showcase',
              'Industry Pages',
              'Lead Generation'
            ],
            href: 'https://genesis360.com/'
          },
          {
            image: cfcCardSite,
            imageAlt: 'CFC Skincare website',
            imagePosition: '50% 45%',
            badge: 'Clinical Skincare',
            name: 'CFC Skincare',
            description: 'A nurse practitioner-founded skincare system that bridges clinical efficacy and clean beauty with a fast, results-focused routine.',
            tags: [
              'Clean Beauty',
              'Clinical Positioning',
              'Product Sales'
            ],
            href: 'https://www.cfcskincare.shop/'
          },
          {
            image: dsmMdOffice,
            imageAlt: 'Dental sleep medicine practice',
            badge: 'Dental Sleep Medicine',
            name: 'DSM-MD',
            description: 'Specialized dental sleep medicine website focused on diagnosing and treating sleep-related breathing disorders with custom oral appliances.',
            tags: [
              'Patient Education',
              'Online Booking',
              'Sleep Assessments'
            ],
            href: 'https://dsm-md.com/'
          },
          {
            image: sleepLab,
            imageAlt: 'Sleep disorders clinic',
            badge: 'Sleep Clinic',
            name: 'Sleep Labs',
            description: 'Comprehensive sleep disorders clinic website featuring diagnostic services, treatment options, and evidence-based medical solutions.',
            tags: [
              'Sleep Studies',
              'Medical Solutions',
              'Patient Portal'
            ],
            href: 'https://sleeplabs.net/'
          },
          {
            image: accbpAssessment,
            imageAlt: 'Building scientist running a home wellness assessment with thermal imaging',
            imagePosition: '50% 30%',
            badge: 'Healthy Homes',
            name: 'ACC Building Performance',
            description: 'Building science consulting that diagnoses mold, moisture, air quality, and HVAC problems with in-home wellness assessments.',
            tags: [
              'Home Assessments',
              'Service Pages',
              'Online Booking'
            ],
            href: 'https://www.accbp.com/'
          }
        ]
      },
      {
        id: 'physical',
        color: 'secondary',
        icon: 'dumbbell',
        pill: 'Physical Wellness',
        heading: 'Fitness & Body Health',
        intro: 'Websites for fitness centers, IV therapy clinics, and physical wellness providers that energize and convert.',
        carousel: false,
        projects: [
          {
            image: virtualExercise,
            imageAlt: 'Virtual exercise program',
            badge: 'Virtual Fitness',
            name: 'Lovitt Life',
            description: 'A dynamic virtual exercise platform designed specifically for men, featuring personalized workout programs and online coaching.',
            tags: [
              'Video Training',
              'Membership',
              'Progress Tracking'
            ],
            href: 'https://lovittlife.com/'
          },
          {
            image: supportivTreatment,
            imageAlt: 'IV therapy and wellness services',
            imagePosition: '50% 15%',
            badge: 'IV Therapy',
            name: 'SupportIV',
            description: 'IV vitamin therapy and beauty services clinic featuring treatment catalogs, online booking, and wellness packages.',
            tags: [
              'IV Treatments',
              'Beauty Services',
              'Online Booking'
            ],
            href: 'https://supportivwellness.com/'
          },
          {
            image: lovemoreYoga,
            imageAlt: 'Yoga class and wellness center',
            imagePosition: '50% 55%',
            badge: 'Yoga & Wellness',
            name: 'Love More Yoga',
            description: 'A serene yoga and wellness center website featuring class schedules, instructor profiles, and mindful living resources.',
            tags: [
              'Class Schedules',
              'Memberships',
              'Wellness Blog'
            ],
            href: 'https://lovemoremcc.com/'
          }
        ]
      },
      {
        id: 'holistic',
        color: 'accent',
        icon: 'sparkles',
        pill: 'Holistic & Emotional',
        heading: 'Mind, Body & Spirit',
        intro: 'Calming, thoughtfully designed websites for wellness coaches, doulas, and holistic health practitioners.',
        carousel: true,
        projects: [
          {
            image: dailyWisdomSite,
            imageAlt: 'Your Daily Wisdom website and app screens',
            badge: 'Mindset & Habits',
            name: 'Your Daily Wisdom',
            description:
              'An iOS app and marketing site that reads your own hard-earned insights back to you each morning, in a warm human voice.',
            tags: ['iOS App', 'App Landing Page', 'Free Download'],
            href: 'https://dailywisdomapp.netlify.app'
          },
          {
            image: joyWithinBirthMaternity,
            imageAlt: 'Expectant mother cradling her belly in a summer field',
            imagePosition: '50% 40%',
            badge: 'Childbirth Education',
            name: 'Joy Within Birth',
            description: 'Faith-centered natural childbirth course led by a second-generation midwife, with a self-paced curriculum and a private community.',
            tags: [
              'Online Course',
              'Course Enrollment',
              'Free Resources'
            ],
            href: 'https://www.joywithinbirth.com/'
          },
          {
            image: graceMidwiferyBirth,
            imageAlt: 'Midwives with a new mother holding her newborn after a home birth',
            imagePosition: '50% 18%',
            badge: 'Doula Services',
            name: 'Grace Midwifery Collective',
            description: 'Compassionate doula and midwifery website providing birth support information, service packages, and client testimonials.',
            tags: [
              'Birth Support',
              'Service Packages',
              'Client Stories'
            ],
            href: 'https://gracemidwiferycollective.com/'
          },
          {
            image: domLukeCoaching,
            imageAlt: 'Holistic business coaching',
            imagePosition: '50% 45%',
            badge: 'Holistic Business Coach',
            name: 'Dom Luke',
            description: 'Holistic business coaching website integrating mindfulness and wellness principles with entrepreneurial success strategies.',
            tags: [
              'Business Strategy',
              'Mindful Leadership',
              '1-on-1 Coaching'
            ],
            href: 'https://domluke.com/'
          },
          {
            image: manHiking,
            imageAlt: 'Men\'s coaching and development',
            badge: 'Men\'s Coaching',
            name: 'Masculine Confidence Framework',
            description: 'Empowering men\'s coaching website focused on confidence building, personal development, and transformational programs.',
            tags: [
              'Coaching Programs',
              'Personal Growth',
              'Community'
            ],
            href: 'https://masculineconfidenceframework.com/'
          }
        ]
      }
    ],
    feature: {
      sectionId: 'medical-legal',
      sectionHeading: 'Authority for High-Stakes Legal Work',
      sectionIntro:
        'A focused digital presence for firms whose work sits at the intersection of medicine, injury, and complex litigation.',
      eyebrow: 'Legal Advocacy',
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
    reviews: [
      { client: 'CFC-Skincare', text: 'You are life changing 😂' },
      { client: 'Grace Midwifery', text: 'It really looks good, thank you for making this so easy for us.' },
      { client: 'DSM-MD', text: ' Everything looks amazing.' },
      { client: 'Love More Yoga', text: 'Dude, the website looks so awesome. Great work.' }
    ]
  }
};
