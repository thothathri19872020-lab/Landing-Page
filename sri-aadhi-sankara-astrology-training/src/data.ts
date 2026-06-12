/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Testimonial, FAQ, CurriculumStep, CaseStudy } from './types.ts';

export const PAIN_POINTS = [
  {
    id: 'pain-1',
    text: 'You have learned astrology before but still cannot predict confidently.',
    description: 'Most resources focus purely on rote learning of planets and houses without teaching synthesis rules.'
  },
  {
    id: 'pain-2',
    text: 'Most astrology courses teach theory but not practical application.',
    description: 'You get rules like "Saturn in 10th house is X" but never learn how to look at a whole charts with multi-planet alignments.'
  },
  {
    id: 'pain-3',
    text: 'You want to earn through astrology but don\'t know where to start.',
    description: 'You lack the consulting skills, ethical framework, and business roadmap needed to establish a trusted practice.'
  },
  {
    id: 'pain-4',
    text: 'You feel overwhelmed by complex astrology concepts and lack proper guidance.',
    description: 'Between Shadbala, Ashtakavarga, Divisional charts, and Dashas, it is easy to get lost without a mentor.'
  },
  {
    id: 'pain-5',
    text: 'You are searching for a trusted mentor who can guide you step by step.',
    description: 'An experience-based guide who checks your chart readings and points out gaps in your analysis is highly essential.'
  }
];

export const SYSTEM_PILLARS = [
  {
    title: 'Understand Astrology from the Basics',
    description: 'Master the core mechanics: the 12 signs (Rasis), 12 houses (Bhavas), and 9 planets (Grahas) from a logical, astronomical, and spiritual perspective.',
    icon: 'Compass'
  },
  {
    title: 'Learn Prediction Techniques through Real Horoscope Analysis',
    description: 'Translate planetary placements into events. Learn practical formulas for marriage, career timing, financial rise, and health cycles.',
    icon: 'Eye'
  },
  {
    title: 'Gain Confidence with Practical Exercises',
    description: 'Test your understanding on real blank-date blind charts. Learn how to reconstruct lives and identify events with stellar mathematical precision.',
    icon: 'Award'
  },
  {
    title: 'Receive Personal Mentor Support',
    description: 'Never get stuck. Gain access to direct doubt-clearing sessions, live chart discussions, and personalized feedback on your chart exercises.',
    icon: 'UserCheck'
  },
  {
    title: 'Build Consultation Skills',
    description: 'Learn counseling psychology, timing delivery, remedial remedies selection, and how to deliver predictions ethically and helpfully.',
    icon: 'Sparkles'
  },
  {
    title: 'Create a Professional Astrology Career',
    description: 'A step-by-step blueprint on how to structure a professional consulting business, get global clients, and earn respectably as a registered practitioner.',
    icon: 'Briefcase'
  },
  {
    title: 'Develop Spiritual and Karmic Understanding',
    description: 'Look past mere fortune-telling, understand Prarabdha Karma (destined karma) vs. Kriyamana Karma (free will), and use astrology for soul guidance.',
    icon: 'Flame'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Practical Prediction Training',
    description: 'Learn how to interpret complex charts sequentially and make accurate, step-by-step predictions instead of wild guesses.',
    icon: 'TrendingUp'
  },
  {
    title: 'Real Horoscope Analysis',
    description: 'Work on actual high-profile, historical, and student charts to see planetary transits and Dashas manifesting in real life.',
    icon: 'PieChart'
  },
  {
    title: 'Personal Guidance',
    description: 'Direct mentor access during and after classes. Get clear answers to your specific queries directly from our 15+ years expert.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Structured Learning Path',
    description: 'A seamless journey progressing from Foundation (Basics) to Higher (Prediction methods) to Advanced (Remedies & Professional analysis).',
    icon: 'Milestone'
  },
  {
    title: 'Business Growth Guidance',
    description: 'Get our premium guide on how to launch your brand online, set consulting fees, market ethically, and build trust-based client relationships.',
    icon: 'LineChart'
  },
  {
    title: 'Continuous Support',
    description: 'Access customized spreadsheets, study manuals, offline query resolution, and lifetime student community membership.',
    icon: 'Clock'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Mrs. Jayasri Ramanathan',
    role: 'Full-Time Astrologer (Ex-Banking Professional)',
    rating: 5,
    text: 'Before joining, I knew astrology theory but couldn\'t predict. I sat for hours with planets spread across houses but felt nervous to speak. This training taught me structured synthesis. Now I confidently handle professional consultations daily.',
    avatarSeed: 'jayasri'
  },
  {
    id: 't2',
    name: 'Mr. Vignesh Venkatesan',
    role: 'IT Consultant & Alternate Practitioner',
    rating: 5,
    text: 'The teaching method is practical and easy to understand. The real horoscope discussions changed everything for me. It removed the superstitious fear of Sade Sati or planetary transits, and taught me practical, scientific astrology.',
    avatarSeed: 'vignesh'
  },
  {
    id: 't3',
    name: 'Dr. Sandhya Krishnan',
    role: 'Sanskrit Scholar & Astro Consultant',
    rating: 5,
    text: 'I started earning through astrology consultations after completing the training. The mentorship support at Sri Aadhi Sankara is outstanding. Even when you make calculation errors, they gently correct you and teach you planetary priorities.',
    avatarSeed: 'sandhya'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Can I learn astrology if I have no background?',
    answer: 'Absolutely yes. Our curriculum starts from level ground. We define signs, elements, lordships, and planetary behaviors from scratch. You don\'t need any prior knowledge, Sanskrit language background, or mathematical genius.'
  },
  {
    id: 'faq-2',
    question: 'Will I be able to predict confidently?',
    answer: 'Yes. Our specialized practical prediction-focused training is specifically designed for this outcome. Instead of memorizing isolated definitions, you will learn systematic rules—analyzing Ascendant Lord, Dasha Ruler, Transit planets—to pinpoint timings of events.'
  },
  {
    id: 'faq-3',
    question: 'Is mentor support available?',
    answer: 'Yes. Students receive continuous guidance and doubt clarification during our live, interactive classes. Since this is an interactive live-only training program, you are guided on real charts directly.'
  },
  {
    id: 'faq-4',
    question: 'Can astrology become a career?',
    answer: 'Many students use astrology for consultations, secondary income, and professional practices. High-quality, empathetic, and accurate astrologers are in massive demand globally. We provide the registration and ethical setup guidance you need to practice legally and successfully.'
  },
  {
    id: 'faq-5',
    question: 'Why should I choose your institute?',
    answer: 'Sri Aadhi Sankara Astro Research and Education LLP is a registered, government-recognized training institution. With over 15+ years of teaching experience, real-life horoscope exercises, personalized mentor check-ins, and high success rates, we teach genuine Shastric astrology with modern application.'
  },
  {
    id: 'faq-6',
    question: 'Will recordings of the live sessions be provided?',
    answer: 'No. This training program is strictly "Live Classes Only." No recordings of the sessions will be provided or distributed. Students are expected to attend all live interactive sessions dynamically to ask queries and learn in real time.'
  },
  {
    id: 'faq-7',
    question: 'What is the refund policy?',
    answer: 'We have a strict "No Refund" policy. Once registered and enrolled, the registration/course fees cannot be refunded or adjusted under any circumstances as seats are rigidly limited.'
  }
];

export const CURRICULUM: CurriculumStep[] = [
  {
    level: 'Foundation',
    title: 'Astronomical Basics & Key Elements',
    duration: 'Weeks 1 to 4',
    description: 'Establish the core fundamentals of Vedic Astrology with astronomical alignment and house structures.',
    topics: [
      'The Zodiac Belt & Rasis (Zodiac signs)',
      '12 Bhavas (Houses) and their cosmic significance',
      'The 9 Grahas (Planets) & Planetary characteristics',
      'Exaltation, Debilitation, and Shadbala basics',
      'South Indian and North Indian Chart Structures'
    ]
  },
  {
    level: 'Higher',
    title: 'The Blueprint of Practical Prediction',
    duration: 'Weeks 5 to 10',
    description: 'Learn how to combine variables to identify real life trends, relationship compatibility, and financial rise.',
    topics: [
      'Planet-House interactions & Planetary aspect mechanics (Drishti)',
      'Understanding Friendship and Enmity matrices (Tatkalika & Naisargika Sambandha)',
      'The power of Vimshottari Dasha analysis as a divine clock',
      'Timing Marriage, Career promotions, and Child birth cycles',
      'How transit planets activate stagnant house aspects'
    ]
  },
  {
    level: 'Advanced',
    title: 'Divisional Charts, Remedies & Consultations',
    duration: 'Weeks 11 to 16',
    description: 'Master specialized divisional charts and learn the deep psychological and ethical art of professional consulting.',
    topics: [
      'Analyzing D-9 (Navamsha) for marriage & inner core potential',
      'Analyzing D-10 (Dashamsha) for career heights and professional status',
      'Vedic remedies: Mantras, Gemstones, Daan, temple visits and Karmic remedies',
      'How to lead an ethical 60-minute consultation with clients',
      'Structuring your astro consulting brand, fees, and legal registration'
    ]
  }
];

export const INT_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'The Great Professional Rise',
    icon: 'Briefcase',
    chartData: {
      ascendant: 'Leo (Simha)',
      moonSign: 'Aries (Mesha)',
      sunSign: 'Taurus (Vrishabha)',
      keyYoga: 'Dharma Karma Adhipati Yoga',
      description: 'The 10th Lord is beautifully placed in the 9th house, aspected by Jupiter. This creates a powerful Yoga, signaling a rapid career rise during the major planetary period.'
    },
    question: 'Given a Leo Ascendant, which planetary alignment creates the prestigious "Dharma Karma Adhipati Yoga" (highest professional luck and executive authority)?',
    options: [
      'Alignment of Mars (9th Lord) and Venus (10th Lord) in a beneficial house',
      'Alignment of Saturn (7th Lord) and Moon (12th Lord) in the 8th house',
      'Sun placed in the 12th house aspected by Rahu',
      'Mercury in debilitation in the 8th house'
    ],
    correctOptionIndex: 0,
    explanation: 'In Vedic Astrology, Leo Ascendant has Mars as the 9th Lord (Dharma) and Venus as the 10th Lord (Karma). When the 9th and 10th Lords align or aspect each other, they form the prestigious Dharma Karma Adhipati Yoga, granting a powerful, prosperous, and ethical professional rise.'
  },
  {
    id: 'case-2',
    title: 'The Spiritual Awakening',
    icon: 'Compass',
    chartData: {
      ascendant: 'Scorpio (Vrischika)',
      moonSign: 'Pisces (Meena)',
      sunSign: 'Virgo (Kanya)',
      keyYoga: 'Pravrajya Yoga (Moksha Alignment)',
      description: 'The Jupiter represents the 5th Lord of inner intuition placed in the 12th house (Mokshasthana) conjoint with Ketu, creating a deep inclination towards mystical sciences and astrology.'
    },
    question: 'For a Scorpio Ascendant studying astrology, which planet acts as the ultimate initiator of higher intuition and Vedic wisdom (5th Lord)?',
    options: [
      'Mercury',
      'Venus',
      'Jupiter',
      'Saturn'
    ],
    correctOptionIndex: 2,
    explanation: 'For Scorpio Ascendant, Jupiter rules the 5th House (Pisces), which controls traditional intelligence, past life merits, and Vedic intuition. Jupiter conjunct with Moksha-Karaka Ketu in spiritual sectors turns an investigator into a confident, accurate spiritual guide.'
  },
  {
    id: 'case-3',
    title: 'Financial Abundance Cycles',
    icon: 'TrendingUp',
    chartData: {
      ascendant: 'Taurus (Vrishabha)',
      moonSign: 'Cancer (Karka)',
      sunSign: 'Leo (Simha)',
      keyYoga: 'Dhana Yoga (Wealth-Generating Alignment)',
      description: 'Mercury (2nd Lord of wealth) is placed in the 11th house (Gains) in its sign of exaltation, bringing immense success in advisory services.'
    },
    question: 'How does exalted Mercury in the 11th house for Taurus Ascendant benefit an Astrology Consultant\'s financial earning?',
    options: [
      'It creates sudden, unexplained losses in stock trading',
      'It creates an exalted Dhana Yoga, making them highly articulate, rich from consulting, and able to attract multiple high-quality client referrals',
      'It limits their speech and halts networking',
      'It forces them to relocate to another country immediately'
    ],
    correctOptionIndex: 1,
    explanation: 'For Taurus, Mercury is the ruler of both the 2nd House (Speech and Accumulating wealth) and the 5th House (Intelligent wisdom). When Mercury is exalted in the 11th house (Gains, Networking, Aspirations), it forms a magnificent Dhana Yoga, making the astrologer exceptionally articulate and financially prosperous.'
  }
];

export const CAREER_GUIDE_CONTENT = {
  title: 'Astrology Career & Consulting BluePrint',
  subtitle: 'A Step-by-Step Strategic Roadmap for Vedic Astrology Practitioners',
  sectors: [
    {
      title: '1. Why Modern Society Needs Ethical Certified Astrologers',
      bullets: [
        'Crisis Navigation: In high-anxiety economic eras, people seek cosmic timing to make major decisions.',
        'Psychological Comfort: Astrologers act as spiritual advisors, helping clients find purpose in dry seasons.',
        'The Global Market: Client pools are no longer local; digital consultations connect you to seekers worldwide.'
      ]
    },
    {
      title: '2. Three Major Career Path Opportunities',
      sectorsList: [
        {
          name: 'Personal Astro-Consultant',
          desc: 'High-touch 1-on-1 consultations. Charge from $50 to $200 per hour as your predictive accuracy grows.'
        },
        {
          name: 'Astro Content & Media Creator',
          desc: 'Launch educational programs, write cosmic guides, host highly engaged podcasts or YouTube channels.'
        },
        {
          name: 'Corporate & Real-Estate Timing Specialist',
          desc: 'Advise business founders on auspicious registration dates, launch schedules, and executive hiring timelines.'
        }
      ]
    },
    {
      title: '3. The 3-Step Growth Protocol to Earning Respectfully',
      bullets: [
        'Master Structure: Never guess. Rely on standard rules of Ascendant, Dasha progression, and planetary transits.',
        'Ethical Foundations: Never terrify clients with dark prophecies. Reframe planetary blockages (Sade Sati, Rahu transit) as periods for strategic rest, wisdom collection, and targeted karmic corrections.',
        'Digital Visibility: Create a clean social profile, write case study write-ups of actual blind charts, and request testimonials.'
      ]
    }
  ]
};

export const LEARNING_ROADMAP_CONTENT = {
  title: 'Predictive Vedic Astrology Mastery Path',
  milestones: [
    {
      phase: 'Phase 1: The Cosmic Language (Base Foundations)',
      milestones: [
        'Learn to read South and North Indian chart layouts instantly.',
        'Memorize planet characters: Sun as soul, Moon as mind, Mars as energy.',
        'Understand house areas: 1st house is Self, 7th is spouse, 10th is career.'
      ],
      timeframe: 'Month 1'
    },
    {
      phase: 'Phase 2: Planetary Math & Yoga Diagnosis',
      milestones: [
        'Master identifying active Lordships (e.g., Yogakaraka, Maraka, Badhaka).',
        'Learn to detect major auspicious Yogas (Gaja Kesari Yoga, Pancha Mahapurusha Yoga).',
        'Diagnose the planetary strength using simple astronomical combustion rules.'
      ],
      timeframe: 'Month 2'
    },
    {
      phase: 'Phase 3: The Engine of Timing (Vimshottari & Transits)',
      milestones: [
        'Deconstruct Vimshottari Dasha cycles (Maha Dasha, Antar Dasha, Pratyantar Dasha).',
        'Map transiting planets like Jupiter and Saturn to see exactly when opportunities ripen.',
        'Synthesize Dashas & Transits to predict career promotions or relationship starts within a 30-day window.'
      ],
      timeframe: 'Month 3'
    },
    {
      phase: 'Phase 4: Client Counsel & Real Consultations',
      milestones: [
        'Synthesize D9 Navamsha charts (relationships) and D10 Dashamsha charts (fame/profession).',
        'Implement traditional astrological remedies: Gemstones, dietary alignments, mantras, and Daan (charity).',
        'Conduct simulated consultations on blind horoscopes with your fellow community peers.'
      ],
      timeframe: 'Month 4'
    }
  ]
};
