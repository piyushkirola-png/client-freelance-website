import { 
  ArrowRight, 
  CheckCircle, 
  GitBranch, 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  BarChart3,
  Network,
  Sparkles,
  Target,
  Gauge,
  GitMerge,
  Copy,
  Check,
  BookOpen
} from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const routingFeatures = [
  {
    icon: GitBranch,
    title: 'Rule-Based Routing',
    desc: 'Define business rules for transaction routing based on amount, payment method, region, and more.',
    features: [
      'Amount-based routing thresholds',
      'Payment method specific routing',
      'Region and country-based rules',
      'Currency-specific gateway selection',
      'Custom priority rules per merchant',
      'Failover and fallback configurations'
    ]
  },
  {
    icon: Brain,
    title: 'AI-Powered Smart Routing',
    desc: 'Machine learning models that optimize routing in real-time for maximum success rates.',
    features: [
      'Real-time success rate prediction',
      'Cost optimization algorithms',
      'Dynamic gateway switching',
      'Pattern recognition and anomaly detection',
      'Self-learning from historical data',
      'Adaptive routing based on performance'
    ]
  }
];

const routingStrategies = [
  { icon: Target, title: 'Success Rate Optimization', desc: 'Route to gateways with the highest success probability for each transaction.' },
  { icon: TrendingUp, title: 'Cost Optimization', desc: 'Minimize transaction costs while maintaining acceptable success rates.' },
  { icon: Gauge, title: 'Latency Optimization', desc: 'Route to gateways with the fastest response times.' },
  { icon: GitMerge, title: 'Hybrid Routing', desc: 'Combine multiple strategies for balanced performance and reliability.' }
];

const gatewayPartners = [
  { name: 'Stripe', logo: '/assets/images/stripe.png' },
  { name: 'Razorpay', logo: '/assets/images/razorpay.png' },
  { name: 'Cashfree', logo: '/assets/images/cashfree.png' },
  { name: 'Adyen', logo: '/assets/images/adyen.png' },
  { name: 'PayU', logo: '/assets/images/payu.png' },
];

const faqs = [
  { q: 'What is smart routing?', a: 'Smart routing intelligently directs each transaction to the optimal payment gateway based on factors like success rates, cost, latency, and transaction characteristics to maximize approval rates.' },
  { q: 'How does AI routing work?', a: 'Our AI models analyze historical transaction patterns, gateway performance, and real-time conditions to predict which gateway has the highest success probability for each transaction.' },
  { q: 'Can I customize routing rules?', a: 'Yes. You can define custom routing rules based on amount, payment method, region, currency, and other business-specific criteria.' },
  { q: 'How many gateways can I integrate?', a: 'We support 7+ gateways including Razorpay, Stripe, Cashfree, Adyen, PayU, and more. You can add or remove gateways dynamically.' },
  { q: 'Is failover routing supported?', a: 'Absolutely. If a primary gateway fails, transactions are automatically routed to the next available gateway in your priority list.' },
];

export default function Routing() {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const code = `{
  "routing": {
    "strategy": "hybrid",
    "rules": [
      { "condition": "amount < 2000", "gateway": "razorpay", "priority": 1 },
      { "condition": "payment_method = 'upi'", "gateway": "cashfree", "priority": 2 }
    ],
    "ai_optimization": true,
    "failover_enabled": true
  }
}`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <PageHero
        badge="Smart Routing"
        title={<>Intelligent <span className="gradient-text">payment routing</span> for maximum success</>}
        subtitle="Combine rule-based logic with AI-powered optimization to route every transaction to the right gateway — ensuring the highest approval rates and lowest costs."
      />

      {/* Routing Features */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <Reveal>
            <div className="text-center mb-12">
              <Badge>Routing Engine</Badge>
              <h2 className="text-3xl font-bold text-ink-900 mt-4 sm:text-4xl">
                Rule-Based + AI = <span className="gradient-text">Maximum Success</span>
              </h2>
              <p className="mt-4 text-lg text-ink-500 max-w-2xl mx-auto">
                Combine the power of business rules with AI intelligence for optimal payment routing.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {routingFeatures.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.1}>
                <div className="h-full bg-ink-50 rounded-3xl p-8 border border-ink-100 hover:border-accent-300 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 w-fit mb-6">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink-900 mb-3">{feature.title}</h3>
                  <p className="text-ink-500 mb-6">{feature.desc}</p>
                  <ul className="space-y-2.5">
                    {feature.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink-700">
                        <CheckCircle className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
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

      {/* Routing Strategies */}
      <section className="section-pad bg-ink-50">
        <div className="container-8xl">
          <Reveal>
            <SectionHeading
              badge="Strategies"
              title="Multiple routing strategies for every need"
              subtitle="Choose the approach that best fits your business requirements."
            />
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {routingStrategies.map((strategy, i) => (
              <Reveal key={strategy.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-ink-100 hover:shadow-lg hover:border-accent-200 transition-all text-center">
                  <div className="inline-flex p-3 rounded-xl bg-accent-50 mb-4">
                    <strategy.icon className="h-6 w-6 text-accent-600" />
                  </div>
                  <h3 className="font-bold text-ink-900 mb-2">{strategy.title}</h3>
                  <p className="text-sm text-ink-500">{strategy.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Routing Section */}
      <section className="section-pad bg-gradient-to-br from-primary-900 to-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[120px] rounded-full" />
        <div className="relative container-8xl">
          <Reveal>
            <div className="text-center mb-12">
              <Badge variant="dark">AI-Powered</Badge>
              <h2 className="text-3xl font-bold text-white mt-4 sm:text-4xl">
                Smart AI <span className="gradient-text-light">routing</span>
              </h2>
              <p className="mt-4 text-lg text-ink-300 max-w-2xl mx-auto">
                Machine learning that continuously optimizes your payment routing.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Real-Time Decisions', desc: 'AI makes routing decisions in milliseconds' },
              { icon: TrendingUp, title: '12%+ Success Rate Boost', desc: 'Our clients see significant improvement in approval rates' },
              { icon: Shield, title: 'Fraud Detection', desc: 'AI identifies and blocks fraudulent transactions' },
              { icon: BarChart3, title: 'Continuous Learning', desc: 'Models improve automatically with every transaction' }
            ].map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent-400/30 transition-all text-center">
                  <div className="inline-flex p-3 rounded-xl bg-accent-500/20 mb-4">
                    <benefit.icon className="h-6 w-6 text-accent-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-ink-300">{benefit.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/contact" variant="primary" size="lg">
              <Sparkles className="h-4 w-4" />
              Enable AI Routing
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Gateway Partners */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <Reveal>
            <SectionHeading
              badge="Gateways"
              title="Integrated with 7+ leading gateways"
              subtitle="All gateways support smart routing with automatic failover and optimization."
            />
          </Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {gatewayPartners.map((partner) => (
              <div key={partner.name} className="flex items-center gap-3 px-6 py-3 bg-ink-50 rounded-xl border border-ink-100">
                <img src={partner.logo} alt={partner.name} className="h-8 w-8 rounded-full object-contain" />
                <span className="text-sm font-medium text-ink-700">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Code Example */}
      <section className="section-pad bg-ink-50">
        <div className="container-8xl max-w-3xl">
          <Reveal>
            <div className="text-center mb-8">
              <Badge>Developer API</Badge>
              <h2 className="text-3xl font-bold text-ink-900 mt-4">Simple routing configuration</h2>
              <p className="mt-2 text-ink-500">Configure routing rules with a single API call</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative bg-ink-950 rounded-2xl p-6 border border-ink-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-danger-500"></div>
                    <div className="h-3 w-3 rounded-full bg-warning-500"></div>
                    <div className="h-3 w-3 rounded-full bg-success-500"></div>
                  </div>
                  <span className="text-xs text-ink-400 font-mono ml-2">routing-config.json</span>
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1.5 text-xs text-ink-400 hover:text-ink-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-success-400" />
                      <span className="text-success-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="font-mono text-xs sm:text-sm text-ink-300 overflow-x-auto">
                <pre className="whitespace-pre-wrap">
{`{
  "routing": {
    "strategy": "hybrid",
    "rules": [
      {
        "condition": "amount < 2000",
        "gateway": "razorpay",
        "priority": 1,
        "payment_methods": ["upi", "wallet"]
      },
      {
        "condition": "amount >= 2000 && amount < 50000",
        "gateway": "stripe",
        "priority": 1,
        "payment_methods": ["card", "netbanking"]
      }
    ],
    "ai_optimization": {
      "enabled": true,
      "model": "success_rate_predictor_v2",
      "min_confidence": 0.85
    },
    "failover": {
      "enabled": true,
      "max_retries": 3,
      "retry_delay": 1000
    }
  }
}`}
                </pre>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-8xl max-w-3xl">
          <Reveal>
            <SectionHeading
              badge="FAQ"
              title="Common questions about routing"
              subtitle="Everything you need to know about our smart routing engine."
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

      {/* CTA */}
      <section className="py-20 bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[120px] rounded-full" />
        <div className="relative container-8xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
              Ready to optimize your payment routing?
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              Start routing transactions intelligently and boost your success rates by up to 12%.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button to="/contact" variant="primary" size="lg">
                <Network className="h-4 w-4" />
                Enable Smart Routing
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/api-docs" variant="dark" size="lg">
                <BookOpen className="h-4 w-4" />
                View API Docs
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}