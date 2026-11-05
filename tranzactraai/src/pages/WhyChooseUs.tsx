import { Zap, ShieldCheck, ArrowLeftRight, Globe, Users, Code2, TrendingUp, Clock, Headphones, Award } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import Counter from '../components/animations/Counter';
import Button from '../components/ui/Button';

const advantages = [
  { icon: ArrowLeftRight, title: 'Single API, 7+ Gateways', desc: 'Connect once and access Stripe, Razorpay, Cashfree, Adyen, PayU, BennuPay, and Chargebee. No need to maintain separate integrations.' },
  { icon: Zap, title: 'Smart Routing Engine', desc: 'Our orchestrator analyzes success rates, cost, and latency in real-time to route each payment to the optimal gateway automatically.' },
  { icon: ShieldCheck, title: 'Built-in Risk Management', desc: 'Real-time fraud detection with 50+ signals, customizable risk rules, and chargeback monitoring — all included, no extra cost.' },
  { icon: Globe, title: 'Global by Design', desc: 'Accept payments in 180+ countries with multi-currency support, FX rate management, and international card processing.' },
  { icon: Code2, title: 'Developer-First', desc: 'SDKs in 5 languages, comprehensive docs, free sandbox, HMAC-signed webhooks, and a clean RESTful API that is a joy to use.' },
  { icon: Users, title: 'Merchant Self-Service', desc: 'Full merchant portal with dashboards, reports, wallet management, settlement tracking, and user/role management.' },
  { icon: Clock, title: 'Fast Onboarding', desc: 'Get live in under 48 hours with our automated KYC and document verification process.' },
  { icon: TrendingUp, title: 'Real-Time Analytics', desc: 'Transaction volumes, success rates, gateway performance, and settlement status — all in real-time dashboards.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Dedicated support via chat, email, and phone. Priority support on Growth and Enterprise plans.' },
  { icon: Award, title: 'Enterprise-Grade', desc: '99.98% uptime SLA, PCI DSS compliant, SOC 2 Type II, ISO 27001 certified. Bank-grade infrastructure.' },
];

const comparison = [
  { feature: 'Single API for all gateways', tranzactra: true, others: false },
  { feature: 'Smart routing engine', tranzactra: true, others: false },
  { feature: 'Built-in risk management', tranzactra: true, others: false },
  { feature: 'Free sandbox environment', tranzactra: true, others: true },
  { feature: 'No setup fees', tranzactra: true, others: false },
  { feature: '48-hour onboarding', tranzactra: true, others: false },
  { feature: 'Real-time settlement', tranzactra: true, others: false },
  { feature: 'HMAC-signed webhooks', tranzactra: true, others: true },
  { feature: '5 SDKs', tranzactra: true, others: false },
  { feature: '24/7 support', tranzactra: true, others: false },
];

export default function WhyChooseUs() {
  return (
    <>
      <PageHero
        badge="Why Choose Us"
        title={<>Why businesses choose <span className="gradient-text">Tranzactra</span></>}
        subtitle="We're not just another payment gateway. We're the orchestration layer that makes payments work for you."
      />

      {/* Advantages */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <Reveal>
            <SectionHeading
              badge="Our Advantages"
              title="10 reasons to switch today"
              subtitle="From smart routing to built-in risk management, we give you everything in one platform."
            />
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <Reveal key={adv.title} delay={(i % 3) * 0.08}>
                <div className="group h-full bg-ink-50 rounded-2xl p-8 border border-ink-100 hover:border-accent-300 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 w-fit mb-5 group-hover:scale-110 transition-transform">
                    <adv.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">{adv.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{adv.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent-500/10 blur-[130px] rounded-full" />
        <div className="relative container-8xl grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: 2.5, prefix: '$', suffix: 'B+', label: 'Processed Annually', decimals: 1 },
            { value: 50000, suffix: '+', label: 'Active Merchants' },
            { value: 99.98, suffix: '%', label: 'Uptime SLA', decimals: 2 },
            { value: 48, suffix: 'h', label: 'Average Onboarding' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text-light">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="mt-2 text-sm text-ink-300 font-medium">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-pad bg-ink-50">
        <div className="container-8xl max-w-4xl">
          <Reveal>
            <SectionHeading
              badge="Comparison"
              title="Tranzactra vs. the rest"
              subtitle="See how we stack up against traditional payment gateway providers."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 bg-white rounded-2xl border border-ink-100 overflow-hidden">
              <div className="grid grid-cols-3 px-6 py-4 bg-ink-50 border-b border-ink-100">
                <div className="text-sm font-semibold text-ink-700">Feature</div>
                <div className="text-center text-sm font-bold text-primary-700">Tranzactra</div>
                <div className="text-center text-sm font-semibold text-ink-500">Others</div>
              </div>
              {comparison.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 px-6 py-4 items-center ${i % 2 === 0 ? 'bg-white' : 'bg-ink-50/50'}`}>
                  <div className="text-sm text-ink-700">{row.feature}</div>
                  <div className="text-center">
                    {row.tranzactra ? (
                      <span className="inline-flex h-6 w-6 rounded-full bg-accent-100 items-center justify-center">
                        <span className="h-3 w-3 rounded-full bg-accent-500" />
                      </span>
                    ) : <span className="text-ink-300">—</span>}
                  </div>
                  <div className="text-center">
                    {row.others ? (
                      <span className="inline-flex h-6 w-6 rounded-full bg-ink-100 items-center justify-center">
                        <span className="h-3 w-3 rounded-full bg-ink-400" />
                      </span>
                    ) : <span className="text-ink-300">—</span>}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[120px] rounded-full" />
        <div className="relative container-8xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
              Experience the difference
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              Join 50,000+ businesses that chose Tranzactra.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button to="/signup" variant="primary" size="lg">Get Started Free</Button>
              <Button to="/contact" variant="dark" size="lg">Talk to Sales</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
