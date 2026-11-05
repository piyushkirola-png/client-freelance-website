/* ============================================================================
 * siteData.ts — CENTRAL CONFIGURATION FILE
 * Every editable content value lives here. Edit once, updates everywhere.
 * ========================================================================== */

export const SITE = {
  name: "Diwali Bumper 2026",
  legalName: "Gaandhi Brother's Shop",
  logo: "🪔",
  tagline: "सत श्री अकाल जी",
  taglineEn: "Your auspicious Diwali lucky draw",
  shortDescription:
    "India's biggest festive lucky draw — ₹12 Crore top prize, live draw this Diwali season.",
} as const;

/* ----------------------------------------------------------------------------
 * CONTACT — updated with real Udyam registration details
 * -------------------------------------------------------------------------- */
export const CONTACT = {
  whatsapp: "917988308428",
  whatsappDisplay: "+91 7988308428",
  email: "spriyabharti9693@gmail.com",
  emailAlt: "spriyabharti9693@gmail.com",
  phone: "+91 62026 83038",
  address:
    "Flat/Door/Block No. 484, Supriya Bharti, New Gobind Puri, Peer Wali Gali, Block Kanker Khera, Meerut, Uttar Pradesh 250001, India",
  addressShort: "Meerut, Uttar Pradesh, India",
  supportHours: "Monday – Saturday, 10:00 AM – 8:00 PM IST",
  responseTime: "We usually respond within 2 working hours.",
} as const;

/* ----------------------------------------------------------------------------
 * UDYAM REGISTRATION — new section for legal pages & footer
 * -------------------------------------------------------------------------- */
export const UDYAM = {
  registrationNumber: "UDYAM-UP-56-0187974",
  enterpriseName: "GAANDHI BROTHER'S SHOP",
  enterpriseType: "Micro",
  classificationYear: "2026-27",
  classificationDate: "15/10/2026",
  majorActivity: "Services",
  socialCategory: "General",
  unitName: "Gaandhi Brother's Shop",
  incorporationDate: "10/10/2021",
  commencementDate: "10/10/2021",
  registrationDate: "15/10/2026",
  nicCodes: [
    { code: "96", description: "Other personal service activities" },
    { code: "9609", description: "Other personal service activities n.e.c." },
    {
      code: "96098",
      description:
        "General household maintenance activities like grooming of the floor, dusting, cleaning of utensils etc.",
    },
  ],
  state: "UTTAR PRADESH",
  district: "MEERUT",
  pin: "250001",
  districtIndustriesCentre: "MEERUT (UTTAR PRADESH)",
  msmeDfo: "AGRA (UTTAR PRADESH)",
  verificationUrl: "https://udyamregistration.gov.in",
} as const;

/* ----------------------------------------------------------------------------
 * DRAW configuration
 * -------------------------------------------------------------------------- */
export const DRAW = {
  dateISO: "2026-11-16T18:30:00+05:30",
  dateLabel: "16 NOVEMBER 2026",
  dateLong: "16 November 2026, 6:30 PM IST",
  timeLabel: "6:30 PM IST",
  venue:
    "Live draw conducted from our registered office, Meerut, Uttar Pradesh",
  ticketCutoff: "5:00 PM IST on 16 November 2026",
} as const;

/* ----------------------------------------------------------------------------
 * PRIZES
 * -------------------------------------------------------------------------- */
export interface Prize {
  emoji: string;
  title: string;
  amount: string;
  description: string;
  gradient: string;
}

export const PRIZES: Prize[] = [
  {
    emoji: "🥇",
    title: "First Prize",
    amount: "₹12 Crore",
    description:
      "The grand Diwali Bumper jackpot. One lucky winner takes home ₹12,00,00,000 — the biggest prize of the festive season.",
    gradient: "from-[#FFD700] via-[#FFB300] to-[#FF6B00]",
  },
  {
    emoji: "🥈",
    title: "Second Prize",
    amount: "₹1 Crore",
    description:
      "A crore in cash for the runner-up, plus a lifetime supply of Diwali sweets and an exclusive Hamper of celebration.",
    gradient: "from-[#FFF3C4] via-[#E8E8E8] to-[#C9A227]",
  },
  {
    emoji: "🥉",
    title: "Third Prize",
    amount: "₹50 Lakh",
    description:
      "₹50,00,000 — the third-most rewarding hand of the draw, with a special Vaibhav Jewellers gold coin set.",
    gradient: "from-[#F0B27A] via-[#D08C60] to-[#A0522D]",
  },
];

/* ----------------------------------------------------------------------------
 * TOKEN PACKS
 * -------------------------------------------------------------------------- */
export interface TokenPack {
  id: string;
  tokens: number;
  price: number;
  save?: number;
  popular?: boolean;
  note: string;
}

export const TOKEN_PACKS: TokenPack[] = [
  {
    id: "pack-1",
    tokens: 1,
    price: 500,
    note: "Single chance to win the jackpot",
  },
  {
    id: "pack-2",
    tokens: 2,
    price: 900,
    save: 100,
    note: "Double the luck, same festival spirit",
  },
  {
    id: "pack-3",
    tokens: 3,
    price: 1200,
    save: 300,
    popular: true,
    note: "Most booked by families across India",
  },
  {
    id: "pack-5",
    tokens: 5,
    price: 2000,
    save: 500,
    note: "Maximum winning chances for the family",
  },
];

/* ----------------------------------------------------------------------------
 * HOW IT WORKS
 * -------------------------------------------------------------------------- */
export interface Step {
  emoji: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS: Step[] = [
  {
    emoji: "🎫",
    title: "Choose Your Tokens",
    description:
      "Pick from 1 to 5 tokens — the more you play, the higher your chances. Best value bundle starts at just ₹500.",
  },
  {
    emoji: "📝",
    title: "Fill Your Details",
    description:
      "Share your name, full address, mobile number and PIN code. It takes less than 60 seconds, no paperwork.",
  },
  {
    emoji: "✅",
    title: "Get WhatsApp Confirmation",
    description:
      "We instantly confirm your booking on WhatsApp along with your unique ticket number and the draw date.",
  },
];

/* ----------------------------------------------------------------------------
 * TRUST BADGES
 * -------------------------------------------------------------------------- */
export interface TrustBadge {
  emoji: string;
  title: string;
  description: string;
}

export const TRUST_BADGES: TrustBadge[] = [
  {
    emoji: "🔒",
    title: "100% Secure",
    description:
      "Encrypted payments & private data handling. Your details are never sold or shared.",
  },
  {
    emoji: "🇮🇳",
    title: "All India Booking",
    description:
      "Book from any city, town or village — 28 states & 8 union territories covered.",
  },
  {
    emoji: "🎖️",
    title: "Udyam Registered",
    description: `Government-registered enterprise (${UDYAM.registrationNumber}). Verified & audited draw.`,
  },
];

/* ----------------------------------------------------------------------------
 * FAQ
 * -------------------------------------------------------------------------- */
export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: `How do I book a ${SITE.name} ticket?`,
    answer:
      "Tap 'Book Your Ticket Now', fill in your name, full address, mobile number, PIN code and the number of tokens you want, then press 'Send Booking on WhatsApp'. You will receive a unique ticket number on WhatsApp within minutes, along with the draw date and venue details.",
  },
  {
    question: "What is the last date to book a ticket?",
    answer: `Online booking stays open until ${DRAW.ticketCutoff}. After that, token counters at our partner desks also close one hour before the live draw at ${DRAW.timeLabel}.`,
  },
  {
    question: "How are winners selected and informed?",
    answer: `The draw is conducted live on ${DRAW.dateLong} in the presence of an independent auditor. Every token number is physically drawn and announced. Winners are contacted on WhatsApp and phone within 24 hours and must complete KYC verification to claim the prize.`,
  },
  {
    question: "Can I transfer my ticket to someone else?",
    answer:
      "Yes, but only before the draw. A ticket can be transferred at most once, and both the original and new holder must provide valid ID proof on request. Transfer after the draw date is not permitted.",
  },
  {
    question: "Is my money safe and will I get a refund?",
    answer:
      "Yes. Payments are made to a registered merchant account and every confirmed booking carries a verifiable ticket number. Eligible refund requests raised within 24 hours before the draw are processed within 7–10 business days. Please read our Refund Policy for full details.",
  },
  {
    question: `Is ${SITE.legalName} a registered business?`,
    answer: `Yes. ${SITE.legalName} is registered under the Government of India's Udyam Registration portal, Registration Number ${UDYAM.registrationNumber}, classified as a ${UDYAM.enterpriseType} Enterprise (${UDYAM.majorActivity}) for the year ${UDYAM.classificationYear}. You can verify our registration at udyamregistration.gov.in.`,
  },
];

/* ----------------------------------------------------------------------------
 * NAVIGATION
 * -------------------------------------------------------------------------- */
export interface NavLink {
  label: string;
  path: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Terms & Conditions", path: "/terms" },
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Refund Policy", path: "/refund" },
  { label: "Contact", path: "/contact" },
];

/* ----------------------------------------------------------------------------
 * SOCIALS
 * -------------------------------------------------------------------------- */
export const SOCIALS = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${CONTACT.whatsapp}`,
    icon: "whatsapp",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/diwalibumper",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/diwalibumper",
    icon: "instagram",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@diwalibumper",
    icon: "youtube",
  },
] as const;

/* ----------------------------------------------------------------------------
 * LEGAL — updated with real Udyam details
 * -------------------------------------------------------------------------- */
export const LEGAL = {
  companyName: UDYAM.enterpriseName,
  companyUdyam: UDYAM.registrationNumber,
  companyCIN: "N/A (Udyam Registered MSME)",
  registeredOffice: CONTACT.address,
  governingLaw:
    "The laws of India, and the jurisdiction of the courts at Meerut, Uttar Pradesh",
  termsUpdated: "1 November 2026",
  privacyUpdated: "1 November 2026",
  refundUpdated: "1 November 2026",
  minAge: 18,
  disclaimer:
    "This is a promotional lucky draw. Please read Terms & Conditions before booking.",
} as const;

/* ----------------------------------------------------------------------------
 * WhatsApp helpers
 * -------------------------------------------------------------------------- */
export const waLink = (message: string): string =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WA_MESSAGE =
  "Hi, I want to book Diwali Bumper 2026 ticket";
