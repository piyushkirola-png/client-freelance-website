import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Shield,
  Lock,
  Zap,
  Code2,
  Terminal,
  Copy,
  Plug,
  Send,
  CheckCircle,
  TrendingUp,
  Globe,
  Building2,
  Users,
  CreditCard,
  ArrowLeftRight,
  ShieldCheck,
  Star,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import Counter from '../components/animations/Counter';
import {
  services,
  gatewayPartners,
  stats,
  features,
  industries,
  testimonials,
  faqs,
} from '../lib/navigation';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientLogosSection />
      <IntroSection />
      <ServicesSection />
      <PaymentFlowSection />
      <ApiIntegrationSection />
      <StatsSection />
      <WhyChooseUsSection />
      <ProductsSection />
      <SecuritySection />
      <HowItWorksSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}

/* ───────────────────────── 1. HERO ───────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink-50 pt-20">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-400/20 rounded-full blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-400/20 rounded-full blur-[120px]"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative container-8xl grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge>
              <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              Unified Payment Orchestration
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-ink-900 text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            One API for{' '}
            <span className="gradient-text">every payment</span>, everywhere.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-ink-500 leading-relaxed max-w-xl"
          >
            Tranzactra AI connects your business to 7+ payment gateways with a single integration.
            Accept payments, manage payouts, automate settlements, and prevent fraud — all from
            one platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button to="/contact" variant="primary" size="lg">
              Start Accepting Payments
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/api-docs" variant="outline" size="lg">
              <Code2 className="h-4 w-4" />
              View API Docs
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500"
          >
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent-500" /> No setup fees
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent-500" /> 48-hour onboarding
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent-500" /> Free sandbox
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <motion.div
        className="absolute -inset-4 bg-gradient-to-br from-accent-400/30 to-primary-400/30 rounded-3xl blur-2xl"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <div className="relative glass-card rounded-3xl p-6 lg:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-danger-500" />
            <div className="h-3 w-3 rounded-full bg-warning-500" />
            <div className="h-3 w-3 rounded-full bg-success-500" />
          </div>
          <span className="text-xs font-mono text-ink-400">payment_flow.js</span>
        </div>

        <div className="space-y-3 font-mono text-sm">
          <div className="flex items-center gap-2 text-ink-400">
            <span className="text-primary-500">const</span>
            <span>payment</span>
            <span className="text-ink-600">=</span>
            <span className="text-accent-600">await</span>
            <span>tranzactra.payments</span>
          </div>
          <div className="pl-6 text-ink-500">.create(&#123;</div>
          <div className="pl-10 text-ink-600">
            amount: <span className="text-accent-600">1000</span>,
          </div>
          <div className="pl-10 text-ink-600">
            currency: <span className="text-success-600">'INR'</span>,
          </div>
          <div className="pl-10 text-ink-600">
            method: <span className="text-success-600">'upi'</span>,
          </div>
          <div className="pl-10 text-ink-600">
            gateway: <span className="text-success-600">'auto'</span>,
          </div>
          <div className="pl-6 text-ink-500">&#125;);</div>

          <motion.div
            className="mt-4 p-3 rounded-xl bg-accent-50 border border-accent-200"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-accent-700">
              <CheckCircle className="h-4 w-4" />
              <span className="text-xs font-semibold">Routed to Razorpay</span>
            </div>
            <div className="text-xs text-ink-500 mt-1">
              Success rate: 98.7% &middot; Latency: 240ms
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 shadow-xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-success-100">
            <TrendingUp className="h-5 w-5 text-success-600" />
          </div>
          <div>
            <div className="text-xs text-ink-500">Success Rate</div>
            <div className="text-lg font-bold text-ink-900">99.98%</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-xl"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary-100">
            <Zap className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <div className="text-xs text-ink-500">Avg. Latency</div>
            <div className="text-lg font-bold text-ink-900">240ms</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
/* ───────────────────────── 2. CLIENT LOGOS ───────────────────────── */
function ClientLogosSection() {
  return (
    <section className="py-12 bg-white border-y border-ink-100">
      <div className="container-8xl">
        <p className="text-center text-sm font-medium text-ink-400 mb-8">
          Trusted by fast-growing businesses across 180+ countries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {gatewayPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 text-xl font-bold text-ink-700 hover:scale-105 transition-transform duration-200"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-8 w-auto object-contain"
              />
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ───────────────────────── 3. COMPANY INTRO ───────────────────────── */
function IntroSection() {
  return (
    <section className="section-pad bg-ink-50">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="What is Tranzactra AI"
            title={
              <>
                The payment infrastructure layer for{' '}
                <span className="gradient-text">modern businesses</span>
              </>
            }
            subtitle="We abstract away the complexity of multiple payment gateways, giving you a single, powerful API to accept, route, and manage payments globally."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: ArrowLeftRight,
              title: 'Orchestration Layer',
              desc: 'One integration to 7+ gateways. Switch, route, and scale without touching code.',
            },
            {
              icon: ShieldCheck,
              title: 'Risk & Compliance',
              desc: 'Real-time fraud detection, chargeback monitoring, and bank-grade security built in.',
            },
            {
              icon: TrendingUp,
              title: 'Analytics & Insights',
              desc: 'Real-time dashboards, transaction reports, and settlement reconciliation.',
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="group h-full glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent-500/10 to-primary-500/10 w-fit mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="text-xl font-bold text-ink-900 mb-3">{item.title}</h3>
                <p className="text-ink-500 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 4. SERVICES ───────────────────────── */
function ServicesSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="Core Services"
            title="Everything you need to run payments"
            subtitle="From checkout to settlement, we handle the entire payment lifecycle with enterprise-grade reliability."
          />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.1}>
              <div className="group relative h-full bg-ink-50 rounded-2xl p-8 border border-ink-100 hover:border-accent-300 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 w-fit mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-2">{service.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 5. PAYMENT FLOW ANIMATION ───────────────────────── */
function PaymentFlowSection() {
  const steps = [
    { icon: Plug, label: 'Customer pays', desc: 'Checkout initiated', color: 'bg-primary-500' },
    { icon: ArrowLeftRight, label: 'Tranzactra routes', desc: 'Smart gateway selection', color: 'bg-accent-500' },
    { icon: CreditCard, label: 'Gateway processes', desc: 'Payment authorized', color: 'bg-primary-600' },
    { icon: CheckCircle, label: 'Settlement', desc: 'Funds in your account', color: 'bg-accent-600' },
  ];

  return (
    <section className="section-pad bg-ink-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full" />

      <div className="relative container-8xl">
        <Reveal>
          <SectionHeading
            badge="How It Works"
            dark
            title={
              <>
                <span className="gradient-text-light">See the flow</span> in action
              </>
            }
            subtitle="Watch how a payment moves through the Tranzactra orchestration layer — from checkout to settlement."
          />
        </Reveal>

        <div className="mt-20 relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-accent-600" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
            {steps.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className={`relative z-10 p-5 rounded-2xl ${step.color} shadow-2xl`}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <step.icon className="h-7 w-7 text-white" />
                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white text-ink-900 text-xs font-bold flex items-center justify-center shadow-lg">
                      {i + 1}
                    </div>
                  </motion.div>
                  <h3 className="mt-6 text-lg font-bold text-white">{step.label}</h3>
                  <p className="mt-1 text-sm text-ink-400">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 6. API INTEGRATION STEPS ───────────────────────── */
function ApiIntegrationSection() {
  const [copied, setCopied] = useState(false);
  const code = `import Tranzactra from 'tranzactra';

const tranzactra = new Tranzactra('sk_live_...');

const payment = await tranzactra.payments.create({
  amount: 1000,
  currency: 'INR',
  method: 'upi',
  gateway: 'auto',
  customer: { id: 'cust_123' },
});

console.log(payment.redirect_url);`;

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    { num: '01', title: 'Create an account', desc: 'Sign up and get your API keys in under 5 minutes.' },
    { num: '02', title: 'Install the SDK', desc: 'npm install tranzactra — available in 5 languages.' },
    { num: '03', title: 'Go live', desc: 'Accept your first payment. That\'s it.' },
  ];

  return (
    <section className="section-pad bg-ink-50">
      <div className="container-8xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <SectionHeading
              badge="Developer Experience"
              align="left"
              title={
                <>
                  Integrate in <span className="gradient-text">3 simple steps</span>
                </>
              }
              subtitle="We obsess over developer experience so you can ship payments fast."
            />
          </Reveal>

          <div className="mt-10 space-y-6">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="flex gap-5">
                  <div className="shrink-0 text-3xl font-bold gradient-text">{step.num}</div>
                  <div>
                    <h3 className="text-lg font-bold text-ink-900">{step.title}</h3>
                    <p className="text-ink-500 mt-1">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-8">
              <Button to="/api-docs" variant="primary" size="lg">
                Read the docs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-3xl blur-xl" />
            <div className="relative bg-ink-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="flex items-center justify-between px-5 py-3.5 bg-white/5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-accent-400" />
                  <span className="text-sm font-mono text-ink-400">terminal</span>
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1.5 text-xs text-ink-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto">
                <code className="text-ink-300">{code}</code>
              </pre>
              <div className="px-5 py-3 bg-accent-500/10 border-t border-white/10 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent-400" />
                <span className="text-xs text-accent-300 font-mono">Payment created successfully</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── 7. STATISTICS ───────────────────────── */
function StatsSection() {
  return (
    <section className="py-20 lg:py-24 bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-500/10 blur-[150px] rounded-full" />

      <div className="relative container-8xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text-light">
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 2 : 0}
                  />
                </div>
                <div className="mt-2 text-sm text-ink-300 font-medium">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 8. WHY CHOOSE US ───────────────────────── */
function WhyChooseUsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="Why Tranzactra"
            title="Built for scale, designed for developers"
            subtitle="Everything enterprises need, with the developer experience startups love."
          />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.1}>
              <div className="group h-full rounded-2xl p-8 bg-gradient-to-br from-ink-50 to-white border border-ink-100 hover:border-accent-200 hover:shadow-lg transition-all duration-300">
                <div className="p-3 rounded-xl bg-accent-50 w-fit mb-5 group-hover:bg-accent-100 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent-600" />
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 9. PRODUCTS OVERVIEW ───────────────────────── */
function ProductsSection() {
  const products = [
    {
      icon: CreditCard,
      title: 'Payment Gateway',
      desc: 'UPI, cards, net banking, wallets — one integration, every method.',
      features: ['UPI Intent & Collect', '50+ banks', 'International cards', 'Tokenization'],
    },
    {
      icon: Send,
      title: 'Payouts',
      desc: 'Instant vendor payouts, refunds, and mass disbursements.',
      features: ['Same-day settlement', 'Bulk payouts', 'Vendor management', 'Payout wallet'],
    },
    {
      icon: ShieldCheck,
      title: 'Risk Engine',
      desc: 'Real-time fraud detection with customizable risk rules.',
      features: ['Risk block rules', 'Chargeback monitor', 'Velocity checks', 'ML scoring'],
    },
  ];

  return (
    <section className="section-pad bg-ink-50">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="Our Products"
            title="A complete payments toolkit"
            subtitle="Three powerful products that work together seamlessly. Use one or use them all."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <Reveal key={product.title} delay={i * 0.1}>
              <div className="group h-full bg-white rounded-2xl p-8 border border-ink-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 w-fit mb-6 group-hover:scale-110 transition-transform">
                  <product.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-ink-900 mb-3">{product.title}</h3>
                <p className="text-ink-500 mb-6">{product.desc}</p>
                <ul className="space-y-2.5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-ink-600">
                      <CheckCircle className="h-4 w-4 text-accent-500 shrink-0" />
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
  );
}

/* ───────────────────────── 10. SECURITY ───────────────────────── */
function SecuritySection() {
  const securityFeatures = [
    { icon: Shield, title: 'PCI DSS Compliant', desc: 'Level 1 certified infrastructure' },
    { icon: Lock, title: 'End-to-End Encryption', desc: 'AES-256 at rest, TLS 1.3 in transit' },
    { icon: ShieldCheck, title: 'HMAC Webhooks', desc: 'Signed and verified every event' },
    { icon: Users, title: 'RBAC', desc: 'Role-based access control' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ink-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 blur-[120px] rounded-full" />

      <div className="relative container-8xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <Badge variant="dark">
                <Lock className="h-3 w-3" />
                Security & Compliance
              </Badge>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
                Bank-grade security, <span className="gradient-text-light">by default</span>
              </h2>
              <p className="mt-4 text-lg text-ink-400 leading-relaxed">
                Every transaction is protected by multi-layer security infrastructure trusted
                by enterprises and fintechs worldwide.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                {['PCI DSS', 'SOC 2 Type II', 'ISO 27001', 'GDPR'].map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-ink-200"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {securityFeatures.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="glass-card-dark rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="p-2.5 rounded-lg bg-accent-500/20 w-fit mb-4">
                    <item.icon className="h-5 w-5 text-accent-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-ink-400">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 11. HOW IT WORKS (DETAILED) ───────────────────────── */
function HowItWorksSection() {
  const steps = [
    {
      icon: Plug,
      title: 'Connect once',
      desc: 'Integrate with Tranzactra using a single API. No need to integrate each gateway separately.',
    },
    {
      icon: ArrowLeftRight,
      title: 'Route intelligently',
      desc: 'Our orchestrator routes each payment to the optimal gateway based on success rate, cost, and latency.',
    },
    {
      icon: TrendingUp,
      title: 'Monitor & optimize',
      desc: 'Real-time dashboards show transaction volumes, success rates, and settlement status.',
    },
    {
      icon: CheckCircle,
      title: 'Settle & reconcile',
      desc: 'Automated settlement processing with manual override. Full reconciliation reports.',
    },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="The Process"
            title="From integration to settlement"
            subtitle="A streamlined flow that handles the entire payment lifecycle automatically."
          />
        </Reveal>

        <div className="mt-16 space-y-6">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-2xl bg-ink-50 hover:bg-white border border-ink-100 hover:border-accent-200 hover:shadow-lg transition-all duration-300">
                <div className="shrink-0 text-5xl font-bold gradient-text w-16">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 shrink-0">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-ink-900">{step.title}</h3>
                  <p className="text-ink-500 mt-1">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 12. INDUSTRIES ───────────────────────── */
function IndustriesSection() {
  return (
    <section className="section-pad bg-ink-50">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="Industries We Serve"
            title="Built for every business model"
            subtitle="From e-commerce to SaaS to marketplaces — Tranzactra adapts to your industry."
          />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <Reveal key={industry.title} delay={(i % 3) * 0.1}>
              <div className="group h-full bg-white rounded-2xl p-8 border border-ink-100 hover:border-accent-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 rounded-xl bg-accent-50 w-fit mb-5 group-hover:bg-accent-100 transition-colors">
                  <industry.icon className="h-6 w-6 text-accent-600" />
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-2">{industry.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{industry.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 13. TESTIMONIALS ───────────────────────── */
function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="Customer Stories"
            title="Trusted by businesses worldwide"
            subtitle="See what our customers have to say about their experience with Tranzactra."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.1}>
              <div className="h-full bg-ink-50 rounded-2xl p-8 border border-ink-100 flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent-500 text-accent-500" />
                  ))}
                </div>
                <p className="text-ink-700 leading-relaxed flex-1 italic">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-ink-200">
                  <div className="font-bold text-ink-900">{t.author}</div>
                  <div className="text-sm text-ink-500">
                    {t.role} &middot; {t.company}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 14. FAQ ───────────────────────── */
function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad bg-ink-50">
      <div className="container-8xl max-w-3xl">
        <Reveal>
          <SectionHeading
            badge="FAQ"
            title="Frequently asked questions"
            subtitle="Everything you need to know about Tranzactra. Can't find an answer? Reach out to us."
          />
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="bg-white rounded-2xl border border-ink-100 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-ink-900">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-ink-400 shrink-0 transition-transform duration-300 ${
                      open === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-ink-500 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 15. CONTACT CTA ───────────────────────── */
function ContactCtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-ink-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-accent-500/15 to-primary-500/15 blur-[130px] rounded-full" />

      <div className="relative container-8xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <Badge variant="dark">
                <Send className="h-3 w-3" />
                Get Started
              </Badge>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
                Ready to transform your <span className="gradient-text-light">payments?</span>
              </h2>
              <p className="mt-4 text-lg text-ink-400 leading-relaxed">
                Talk to our team and see how Tranzactra can help you accept payments smarter,
                faster, and at lower cost.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/contact" variant="primary" size="lg">
                  Contact Sales
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/api-docs" variant="dark" size="lg">
                  <Code2 className="h-4 w-4" />
                  Explore API
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form className="glass-card-dark rounded-3xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-ink-300 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-ink-500 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-ink-500 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-300 mb-2">Work Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-ink-500 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400 transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-300 mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-ink-500 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400 transition-colors"
                  placeholder="Company Inc."
                />
              </div>
              <Button variant="primary" size="lg" className="w-full" type="submit">
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-xs text-ink-500 text-center">
                By submitting, you agree to our Privacy Policy and Terms.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
