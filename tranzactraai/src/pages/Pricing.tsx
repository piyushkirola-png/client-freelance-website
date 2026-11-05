import { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Zap, 
  Building2, 
  Star, 
  IndianRupee, 
  Wallet, 
  CreditCard, 
  Landmark, 
  Percent, 
  Receipt, 
  TrendingUp, 
  Info,
  Clock,
  Globe,
  Shield,
  Users,
  MessageSquare,
  Headphones,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  Code2,
  Server,
  Database,
  Layers,
  Settings,
  BarChart3,
  Activity,
  Award,
  Briefcase,
  CheckCircle,
  ChevronRight,
  HelpCircle,
  BookOpen,
  ExternalLink,
  Sparkles,
  Rocket,
  Cpu,
  GitBranch,
  Play,
  Terminal,
  Copy,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: 'Custom',
    priceDetail: 'based on your volume',
    desc: 'Perfect for small businesses getting started with online payments.',
    features: [
      'No setup or monthly fees',
      'UPI, cards, net banking, wallets',
      '1 gateway integration',
      'Standard dashboard access',
      'Email support',
      'Webhook notifications',
      'Basic analytics',
    ],
    cta: 'Get Custom Quote',
    to: '/contact',
    highlighted: false,
  },
  {
    name: 'Growth',
    icon: Building2,
    price: 'Custom',
    priceDetail: 'based on your volume',
    desc: 'For growing businesses that need smart routing and multiple gateways.',
    features: [
      'Everything in Starter',
      'Smart routing across 7+ gateways',
      'Payout API included',
      'Virtual accounts',
      'Risk block rules',
      'Priority support (chat + email)',
      'Advanced analytics & CSV export',
      'Settlement reconciliation',
    ],
    cta: 'Get Custom Quote',
    to: '/contact',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    icon: Star,
    price: 'Custom',
    priceDetail: 'volume-based pricing',
    desc: 'For high-volume businesses with custom requirements and SLAs.',
    features: [
      'Everything in Growth',
      'Custom negotiated rates',
      'Dedicated account manager',
      '99.99% uptime SLA',
      'White-label onboarding',
      'Custom integrations',
      '24/7 phone support',
      'Dedicated infrastructure',
    ],
    cta: 'Contact Sales',
    to: '/contact',
    highlighted: false,
  },
];

const pricingFeatures = [
  {
    icon: TrendingUp,
    title: 'Volume-based Pricing',
    desc: 'Your rates are customized based on your transaction volume. The more you process, the better your rates.'
  },
  {
    icon: Shield,
    title: 'Transparent Fees',
    desc: 'No hidden charges. No setup fees. No monthly fees. You only pay when you get paid.'
  },
  {
    icon: Users,
    title: 'Merchant-specific Rates',
    desc: 'Every merchant gets a custom pricing plan tailored to their business model and payment mix.'
  },
  {
    icon: Award,
    title: 'Volume Discounts',
    desc: 'High-volume merchants get preferential rates. Contact us to discuss your volume-based pricing.'
  },
];

const faqs = [
  { q: 'How is pricing determined?', a: 'Pricing is customized based on your transaction volume, payment mix (UPI vs cards vs other methods), and business model. Contact us for a personalized quote.' },
  { q: 'Are there any setup or monthly fees?', a: 'No. There are no setup fees, monthly fees, or hidden charges. You only pay per successful transaction.' },
  { q: 'Do you offer volume discounts?', a: 'Yes! High-volume merchants get preferential rates. The more you process, the better your rates become.' },
  { q: 'What payment methods are supported?', a: 'We support UPI, credit/debit cards (Visa, Mastercard, RuPay, Amex), net banking (50+ banks), wallets, and international cards.' },
  { q: 'How does GST work?', a: 'GST of 18% is applicable on all processing fees as per Indian tax regulations. This will be added to your invoice.' },
  { q: 'Can I get a custom quote?', a: 'Absolutely! Every merchant gets a custom pricing plan. Contact our sales team for a personalized quote based on your requirements.' },
];

export default function Pricing() {
  return (
    <>
      <PageHero
        badge="Pricing"
        title={<>Custom pricing for <span className="gradient-text">every business</span></>}
        subtitle="No fixed rates. Every merchant gets a custom pricing plan tailored to their volume, payment mix, and business needs."
      />

      {/* Pricing Cards */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.1}>
                <div className={`relative h-full rounded-3xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 ${
                  plan.highlighted
                    ? 'border-accent-500 bg-gradient-to-br from-accent-50 to-primary-50 shadow-2xl shadow-accent-500/10 lg:scale-105'
                    : 'border-ink-100 bg-white hover:shadow-xl hover:border-ink-200'
                }`}>
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-accent-500 text-white text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl ${plan.highlighted ? 'bg-gradient-to-br from-primary-600 to-accent-500' : 'bg-ink-100'}`}>
                      <plan.icon className={`h-6 w-6 ${plan.highlighted ? 'text-white' : 'text-ink-700'}`} />
                    </div>
                    <h3 className="text-xl font-bold text-ink-900">{plan.name}</h3>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-ink-900">{plan.price}</span>
                      <span className="text-sm text-ink-500">{plan.priceDetail}</span>
                    </div>
                    <p className="mt-2 text-sm text-ink-500">{plan.desc}</p>
                  </div>
                  <Button to={plan.to} variant={plan.highlighted ? 'primary' : 'outline'} size="lg" className="w-full mb-6">
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink-700">
                        <Check className={`h-5 w-5 shrink-0 mt-0.5 ${plan.highlighted ? 'text-accent-500' : 'text-ink-400'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="section-pad bg-ink-50">
        <div className="container-8xl">
          <Reveal>
            <div className="text-center mb-12">
              <Badge>How It Works</Badge>
              <h2 className="text-3xl font-bold text-ink-900 mt-4 sm:text-4xl">
                <span className="gradient-text">Custom pricing</span> for every merchant
              </h2>
              <p className="mt-4 text-lg text-ink-500 max-w-2xl mx-auto">
                We don't believe in one-size-fits-all pricing. Every business gets a custom plan.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingFeatures.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-ink-100 hover:shadow-lg hover:border-accent-200 transition-all hover:-translate-y-1 text-center">
                  <div className="inline-flex p-3 rounded-xl bg-accent-50 mb-4">
                    <item.icon className="h-6 w-6 text-accent-600" />
                  </div>
                  <h3 className="font-bold text-ink-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-500">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Get Custom Quote CTA */}
      <section className="section-pad bg-gradient-to-br from-primary-900 to-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[120px] rounded-full" />
        
        <div className="relative container-8xl text-center">
          <Reveal>
            <Badge variant="dark">Get Started</Badge>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready for a <span className="gradient-text-light">custom quote?</span>
            </h2>
            <p className="mt-4 text-lg text-ink-300 max-w-2xl mx-auto">
              Tell us about your business, and we'll create a pricing plan that works for you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg">
                <MessageSquare className="h-4 w-4" />
                Get Custom Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/contact" variant="dark" size="lg">
                <Phone className="h-4 w-4" />
                Talk to Sales
              </Button>
            </div>
            <p className="mt-6 text-sm text-ink-400">
              💡 No commitment. No hidden charges. Just a custom plan for your business.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-8xl max-w-3xl">
          <Reveal>
            <SectionHeading
              badge="Pricing FAQ"
              title="Questions about pricing?"
              subtitle="Everything you need to know about our custom pricing model."
            />
          </Reveal>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-ink-50 rounded-2xl border border-ink-100 p-6 hover:bg-white hover:shadow-md transition-all">
                  <h3 className="font-bold text-ink-900 mb-2">{faq.q}</h3>
                  <p className="text-ink-500 leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}