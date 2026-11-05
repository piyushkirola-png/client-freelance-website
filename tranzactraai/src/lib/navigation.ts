import {
  CreditCard,
  Zap,
  ArrowLeftRight,
  ShieldCheck,
  Code2,
  Building2,
  Users,
  Globe,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navLinks: NavItem[] = [
  {
    label: 'Products',
    href: '/services',
    children: [
      { label: 'Payment Gateway', href: '/payment-gateway' },
      { label: 'Merchant Solutions', href: '/merchant-solutions' },
      { label: 'Routing', href: '/routing' }, // ← ADDED THIS LINE
      { label: 'Payouts', href: '/payouts' },
      { label: 'Settlement', href: '/settlement' },
      { label: 'Risk Engine', href: '/risk-engine' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Industries', href: '/industries' },
      { label: 'Why Choose Us', href: '/why-choose-us' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  {
    label: 'Developers',
    href: '/developers',
    children: [
      { label: 'API Documentation', href: '/api-docs' },
      { label: 'Developer Portal', href: '/developers' },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Partners', href: '/partners' },
      { label: 'Security & Compliance', href: '/security' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export const services: ServiceItem[] = [
  {
    icon: CreditCard,
    title: 'Payment Gateway',
    description: 'Accept payments through UPI, cards, net banking, and wallets with a single integration.',
    href: '/payment-gateway',
  },
  {
    icon: Building2,
    title: 'Merchant Onboarding',
    description: 'Streamlined KYC, document verification, and activation in under 24 hours.',
    href: '/merchant-solutions',
  },
  {
    icon: ArrowLeftRight,
    title: 'Smart Routing',
    description: 'Intelligent payment routing across 7+ gateways to maximize success rates.',
    href: '/routing', // ← UPDATED from '/services' to '/routing'
  },
  {
    icon: Zap,
    title: 'Payout API',
    description: 'Instant vendor payouts, refunds, and mass disbursements via a single API.',
    href: '/payouts',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Management',
    description: 'Real-time fraud detection, risk blocks, and chargeback monitoring.',
    href: '/risk-engine',
  },
  {
    icon: Code2,
    title: 'Developer APIs',
    description: 'RESTful APIs with webhooks, HMAC signatures, and SDKs in 5 languages.',
    href: '/api-docs',
  },
];

export interface GatewayPartner {
  name: string;
  color: string;
  logo: string;
}

export const gatewayPartners: GatewayPartner[] = [
  { name: 'Stripe', color: '#635bff', logo: '/assets/images/stripe.png' },
  { name: 'Razorpay', color: '#0c2451', logo: '/assets/images/razorpay.png' },
  { name: 'Cashfree', color: '#1a7fe0', logo: '/assets/images/cashfree.png' },
  { name: 'Adyen', color: '#0abf53', logo: '/assets/images/adyen.png' },
  { name: 'PayU', color: '#a6c814', logo: '/assets/images/payu.png' },
  { name: 'BennuPay', color: '#ff6b35', logo: '/assets/images/bennupay.png' },
  { name: 'Chargebee', color: '#1a1a1a', logo: '/assets/images/chargebee.png' },
];

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

export const stats: StatItem[] = [
  { value: 2.5, suffix: 'B+', prefix: '$', label: 'Annual Processing Volume' },
  { value: 99.98, suffix: '%', label: 'Uptime SLA' },
  { value: 180, suffix: '+', label: 'Countries Supported' },
  { value: 7, suffix: '', label: 'Integrated Gateways' },
];

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: FeatureItem[] = [
  {
    icon: Zap,
    title: 'Lightning Fast Integration',
    description: 'Go live in under 48 hours with our drop-in checkout and SDKs.',
  },
  {
    icon: ShieldCheck,
    title: 'Bank-Grade Security',
    description: 'PCI DSS compliant, HMAC-signed webhooks, JWT authentication, and end-to-end encryption.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Unified Orchestration',
    description: 'One API for all gateways. Switch, add, or route dynamically without code changes.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Accept payments in 180+ countries with multi-currency support and FX rate management.',
  },
  {
    icon: Users,
    title: 'Merchant Self-Service',
    description: 'Full merchant portal with dashboards, reports, wallet management, and settlement tracking.',
  },
  {
    icon: Code2,
    title: 'Developer-First',
    description: 'Comprehensive API docs, sandbox environment, webhooks, and 5 SDKs out of the box.',
  },
];

export interface IndustryItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const industries: IndustryItem[] = [
  { icon: Building2, title: 'E-Commerce', description: 'Checkout optimization and multi-gateway routing for online stores.' },
  { icon: Globe, title: 'SaaS Platforms', description: 'Subscription billing, recurring payments, and multi-currency support.' },
  { icon: Users, title: 'Marketplaces', description: 'Split payments, vendor payouts, and escrow for multi-party platforms.' },
  { icon: CreditCard, title: 'Fintech', description: 'Embedded payments, virtual accounts, and white-label solutions.' },
  { icon: ShieldCheck, title: 'Healthcare', description: 'HIPAA-compliant payment processing with patient-friendly checkout.' },
  { icon: Zap, title: 'On-Demand', description: 'Instant payouts for gig workers, delivery, and ride-hailing platforms.' },
];

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: TestimonialItem[] = [
  {
    quote: 'Tranzactra  AI cut our integration time from weeks to hours. The smart routing alone improved our success rate by 12%.',
    author: 'Rajesh Kumar',
    role: 'CTO',
    company: 'ShopKart',
  },
  {
    quote: 'The single API for 7 gateways is a game-changer. We added Adyen and Cashfree without touching our codebase.',
    author: 'Sarah Chen',
    role: 'VP Engineering',
    company: 'PayFlow',
  },
  {
    quote: 'Settlement reconciliation used to take 3 days. With Tranzactra  AI, it\'s automated and real-time.',
    author: 'Michael Okafor',
    role: 'Head of Finance',
    company: 'VendorHub',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'How long does merchant onboarding take?',
    answer: 'Our streamlined KYC and document verification process gets most merchants live in under 24 hours. Complex business models may take up to 48 hours.',
  },
  {
    question: 'Which payment methods are supported?',
    answer: 'UPI, credit/debit cards (Visa, Mastercard, RuPay, Amex), net banking (50+ banks), wallets, and international cards — all through a single integration.',
  },
  {
    question: 'Can I switch gateways without changing my code?',
    answer: 'Yes. Tranzactra  AI abstracts the gateway layer. You can add, remove, or re-route gateways from the dashboard without any code changes on your end.',
  },
  {
    question: 'How does smart routing work?',
    answer: 'Our orchestrator analyzes transaction success rates, cost, and latency in real-time, then routes each payment to the optimal gateway based on your configured rules.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We are PCI DSS compliant, use end-to-end encryption, HMAC-signed webhooks, JWT authentication, and role-based access control (RBAC) across all endpoints.',
  },
  {
    question: 'Do you offer a sandbox environment?',
    answer: 'Yes. Every developer gets free access to our sandbox with test API keys, mock payment flows, and full webhook testing capabilities.',
  },
];