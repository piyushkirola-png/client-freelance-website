import { Zap, Wallet, Store, RefreshCw, CheckCircle, ArrowRight, Send, Building, Users } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';

const payoutFeatures = [
  { icon: Zap, title: 'Instant Payouts', desc: 'Disburse funds instantly to any bank account, UPI ID, or wallet.' },
  { icon: Store, title: 'Vendor Payments', desc: 'Manage vendor payouts with approval workflows and reconciliation.' },
  { icon: RefreshCw, title: 'Bulk Payouts', desc: 'Process thousands of payouts in a single API call with our bulk API.' },
  { icon: Wallet, title: 'Payout Wallet', desc: 'Maintain a dedicated payout wallet with auto-reload and balance alerts.' },
  { icon: Building, title: 'Virtual Accounts', desc: 'Create unique virtual accounts for each payee with auto-reconciliation.' },
  { icon: Users, title: 'Beneficiary Management', desc: 'Store and manage beneficiary details with verification and validation.' },
];

const steps = [
  'Add beneficiary via API or dashboard',
  'Initiate payout with amount and purpose',
  'Beneficiary receives funds instantly',
  'Webhook confirms payout status',
  'Auto-reconciliation with settlement',
];

export default function Payouts() {
  return (
    <>
      <PageHero
        badge="Payouts"
        title={<>Disburse funds <span className="gradient-text">instantly</span>, at scale</>}
        subtitle="From single vendor payouts to mass disbursements — our payout API handles it all with bank-grade reliability."
      />

      <section className="section-pad bg-white">
        <div className="container-8xl">
          <Reveal>
            <SectionHeading
              badge="Payout Capabilities"
              title="Everything you need for payouts"
              subtitle="A complete payout infrastructure that scales from one to a million transactions."
            />
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {payoutFeatures.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.1}>
                <div className="group h-full bg-ink-50 rounded-2xl p-8 border border-ink-100 hover:border-accent-300 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 w-fit mb-5 group-hover:scale-110 transition-transform">
                    <f.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink-50">
        <div className="container-8xl grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <SectionHeading
                badge="How It Works"
                align="left"
                title="Payouts in 5 simple steps"
                subtitle="From beneficiary addition to reconciliation — the entire flow is automated."
              />
              <div className="mt-8 space-y-4">
                {steps.map((step, i) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-ink-700">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button to="/api-docs" variant="primary" size="lg">
                  View Payout API <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-3xl blur-xl" />
              <div className="relative glass-card rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-accent-50">
                    <Send className="h-5 w-5 text-accent-600" />
                  </div>
                  <span className="text-sm font-mono text-ink-400">POST /v1/payouts</span>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between"><span className="text-ink-500">amount</span><span className="text-accent-600">15000</span></div>
                  <div className="flex justify-between"><span className="text-ink-500">currency</span><span className="text-success-600">INR</span></div>
                  <div className="flex justify-between"><span className="text-ink-500">beneficiary</span><span className="text-accent-600">bene_456</span></div>
                  <div className="flex justify-between"><span className="text-ink-500">purpose</span><span className="text-success-600">vendor_payment</span></div>
                  <div className="flex justify-between"><span className="text-ink-500">mode</span><span className="text-success-600">IMPS</span></div>
                </div>
                <div className="mt-6 p-3 rounded-xl bg-success-50 border border-success-200">
                  <div className="flex items-center gap-2 text-success-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-xs font-semibold">Payout initiated · ETA: 2 mins</span>
                  </div>
                </div>
              </div>
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
              Start sending payouts today
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              Join 50,000+ businesses using Tranzactra for payouts.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button to="/signup" variant="primary" size="lg">Get Started</Button>
              <Button to="/pricing" variant="dark" size="lg">View Pricing</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
