import { FileText, CheckCircle, ArrowRight, Clock, BarChart3, RefreshCw, Download, Wallet } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';

const settlementFeatures = [
  { icon: Clock, title: 'Automated Settlements', desc: 'Settlements processed automatically on configurable schedules — T+0, T+1, T+2.' },
  { icon: FileText, title: 'Manual Reports', desc: 'Generate manual settlement reports on demand for any date range.' },
  { icon: RefreshCw, title: 'Reconciliation', desc: 'Automatic reconciliation against bank statements and gateway reports.' },
  { icon: Download, title: 'CSV Export', desc: 'Export settlement reports in CSV format for accounting and audit.' },
  { icon: BarChart3, title: 'Settlement Analytics', desc: 'Track settlement volumes, timelines, and discrepancies in real-time.' },
  { icon: Wallet, title: 'Wallet Integration', desc: 'Seamless integration with payin and payout wallets for unified accounting.' },
];

export default function Settlement() {
  return (
    <>
      <PageHero
        badge="Settlement"
        title={<>Automated settlement, <span className="gradient-text">zero headaches</span></>}
        subtitle="From auto-settlement to manual reconciliation — we handle the entire settlement lifecycle so you can focus on your business."
      />

      <section className="section-pad bg-white">
        <div className="container-8xl">
          <Reveal>
            <SectionHeading
              badge="Settlement Features"
              title="Full settlement lifecycle management"
              subtitle="Everything you need to manage, track, and reconcile settlements across all gateways."
            />
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {settlementFeatures.map((f, i) => (
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
        <div className="container-8xl max-w-3xl">
          <Reveal>
            <SectionHeading
              badge="How It Works"
              title="The settlement flow"
              subtitle="A transparent, trackable process from transaction to bank credit."
            />
          </Reveal>
          <div className="mt-16 space-y-4">
            {[
              { step: 'Transaction captured', desc: 'Customer payment is successfully captured via the gateway.' },
              { step: 'Gateway settlement', desc: 'Gateway settles the funds to Tranzactra on T+1 or T+2.' },
              { step: 'Reconciliation', desc: 'We reconcile the gateway settlement against our transaction records.' },
              { step: 'Merchant settlement', desc: 'Funds are settled to your registered bank account per your schedule.' },
              { step: 'Report & export', desc: 'Download settlement reports or view them in the dashboard anytime.' },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08}>
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-ink-100 hover:border-accent-200 hover:shadow-lg transition-all">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink-900">{item.step}</h3>
                    <p className="text-ink-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[120px] rounded-full" />
        <div className="relative container-8xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
              Simplify your settlement process
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              Automate settlements and reconciliation with Tranzactra.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button to="/signup" variant="primary" size="lg">Get Started</Button>
              <Button to="/contact" variant="dark" size="lg">Contact Sales</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
