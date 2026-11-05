import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';

const faqCategories = [
  {
    category: 'Getting Started',
    questions: [
      { q: 'How long does merchant onboarding take?', a: 'Our streamlined KYC and document verification process gets most merchants live in under 24 hours. Complex business models may take up to 48 hours.' },
      { q: 'What do I need to sign up?', a: 'You need a valid business registration document, PAN/GST number, bank account details, and a government-issued ID. Our onboarding wizard guides you through each step.' },
      { q: 'Is there a free trial or sandbox?', a: 'Yes! Every developer gets free access to our sandbox environment with test API keys, mock payment flows, and full webhook testing capabilities. No credit card required.' },
      { q: 'Do I need to sign a contract?', a: 'No long-term contracts. You can start and stop anytime. Enterprise customers can negotiate custom contracts with dedicated SLAs.' },
    ],
  },
  {
    category: 'Payments',
    questions: [
      { q: 'Which payment methods are supported?', a: 'UPI, credit/debit cards (Visa, Mastercard, RuPay, Amex), net banking (50+ banks), wallets, and international cards — all through a single integration.' },
      { q: 'Can I accept international payments?', a: 'Yes. We support payments from 180+ countries with multi-currency processing. International cards are supported on Growth and Enterprise plans.' },
      { q: 'What is the transaction success rate?', a: 'Our smart routing engine optimizes for success rates, achieving an average of 98.7% across all gateways. You can view success rates per gateway in your dashboard.' },
      { q: 'How fast are settlements?', a: 'Settlement schedules are configurable: T+0 (same day), T+1, or T+2. Most merchants choose T+1 for a balance of speed and reliability.' },
    ],
  },
  {
    category: 'Technical',
    questions: [
      { q: 'Can I switch gateways without changing my code?', a: 'Yes. Tranzactra AI abstracts the gateway layer. You can add, remove, or re-route gateways from the dashboard without any code changes on your end.' },
      { q: 'How does smart routing work?', a: 'Our orchestrator analyzes transaction success rates, cost, and latency in real-time, then routes each payment to the optimal gateway based on your configured rules.' },
      { q: 'Do you offer SDKs?', a: 'Yes, we have official SDKs in Node.js, Python, PHP, Java, and Go. All SDKs include type definitions and comprehensive examples.' },
      { q: 'How do webhooks work?', a: 'Every payment event triggers a HMAC-signed webhook to your registered endpoint. We include retry logic with exponential backoff and deduplication.' },
    ],
  },
  {
    category: 'Security & Compliance',
    questions: [
      { q: 'Is my data secure?', a: 'Absolutely. We are PCI DSS Level 1 compliant, use AES-256 encryption at rest, TLS 1.3 in transit, HMAC-signed webhooks, JWT authentication, and role-based access control (RBAC).' },
      { q: 'Are you PCI DSS compliant?', a: 'Yes, we are PCI DSS Level 1 certified — the highest level of payment security compliance. We also hold SOC 2 Type II and ISO 27001 certifications.' },
      { q: 'Do you store card details?', a: 'No. All card details are tokenized. We never store raw card numbers on our servers. Tokens can be used for recurring payments without storing sensitive data.' },
      { q: 'How do you handle fraud?', a: 'Our risk engine analyzes 50+ signals in real-time for every transaction, including card BIN, IP geolocation, device fingerprint, velocity, and historical chargeback rate.' },
    ],
  },
  {
    category: 'Pricing & Billing',
    questions: [
      { q: 'Are there any setup fees?', a: 'No. There are no setup fees, monthly fees, or hidden charges on any plan. You only pay per transaction.' },
      { q: 'How am I billed?', a: 'Transaction fees are automatically deducted from your settlement. You can view all fees in your dashboard and download invoices anytime.' },
      { q: 'Can I get custom pricing?', a: 'Yes. Enterprise customers processing high volumes can negotiate custom rates. Contact our sales team for a personalized quote.' },
      { q: 'What happens if a transaction fails?', a: 'Failed transactions are not charged. You only pay for successful transactions. Our smart routing automatically retries failed transactions on alternative gateways.' },
    ],
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('0-0');
  const [search, setSearch] = useState('');

  const filtered = faqCategories.map(cat => ({
    ...cat,
    questions: cat.questions.filter(
      q => q.q.toLowerCase().includes(search.toLowerCase()) || q.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(cat => cat.questions.length > 0);

  return (
    <>
      <PageHero
        badge="FAQ"
        title={<>Frequently asked <span className="gradient-text">questions</span></>}
        subtitle="Everything you need to know about Tranzactra AI. Can't find an answer? Reach out to our team."
      />

      {/* Search */}
      <section className="py-12 bg-white border-b border-ink-100">
        <div className="container-8xl max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-ink-50 border border-ink-200 text-ink-900 placeholder-ink-400 focus:outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 transition-all"
              placeholder="Search questions..."
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-pad bg-ink-50">
        <div className="container-8xl max-w-3xl space-y-12">
          {filtered.map((cat, catIdx) => (
            <div key={cat.category}>
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500">
                    <HelpCircle className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-ink-900">{cat.category}</h2>
                </div>
              </Reveal>
              <div className="space-y-3">
                {cat.questions.map((faq, qIdx) => {
                  const id = `${catIdx}-${qIdx}`;
                  return (
                    <Reveal key={id} delay={qIdx * 0.05}>
                      <div className="bg-white rounded-2xl border border-ink-100 overflow-hidden">
                        <button
                          onClick={() => setOpenId(openId === id ? null : id)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="font-semibold text-ink-900">{faq.q}</span>
                          <ChevronDown
                            className={`h-5 w-5 text-ink-400 shrink-0 transition-transform duration-300 ${openId === id ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: openId === id ? 'auto' : 0, opacity: openId === id ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-ink-500 leading-relaxed">{faq.a}</p>
                        </motion.div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-ink-500">No results found. Try a different search term.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[120px] rounded-full" />
        <div className="relative container-8xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
              Still have questions?
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              Our team is here to help. Reach out and we'll get you answers.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button to="/contact" variant="primary" size="lg">Contact Support</Button>
              <Button to="/api-docs" variant="dark" size="lg">API Docs</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
