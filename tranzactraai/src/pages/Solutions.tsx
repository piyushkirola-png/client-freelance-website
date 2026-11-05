import { CheckCircle, ArrowRight, LayoutDashboard, Wallet, FileText, Bell, Users, BarChart3, RefreshCw, Shield } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';

const solutions = [
  { icon: LayoutDashboard, title: 'Merchant Dashboard', desc: 'A powerful, real-time dashboard for merchants to track transactions, success rates, and revenue.', features: ['Real-time transaction monitoring', 'Success rate analytics', 'Gateway performance comparison', 'Custom date range filters'] },
  { icon: Wallet, title: 'Wallet Management', desc: 'Separate payin and payout wallets with full statement and balance tracking.', features: ['Payin wallet with auto-credit', 'Payout wallet with auto-debit', 'Wallet statements and summaries', 'Multi-currency wallet support'] },
  { icon: FileText, title: 'Settlement Reconciliation', desc: 'Automated settlement processing with manual override capabilities.', features: ['Auto-settlement processing', 'Manual settlement reports', 'Reconciliation against bank records', 'Settlement status tracking'] },
  { icon: Bell, title: 'Webhook Management', desc: 'Inbound and outbound webhook monitoring with retry and deduplication.', features: ['Inbound webhook viewer', 'Outbound webhook delivery tracking', 'HMAC signature verification', 'Automatic retry on failure'] },
  { icon: Users, title: 'User & Role Management', desc: 'Full RBAC system with granular permissions for every team member.', features: ['Role-based access control', 'Custom role creation', 'Granular permissions per module', 'User activity audit trail'] },
  { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Comprehensive analytics with CSV export and scheduled reports.', features: ['Transaction volume charts', 'Hourly volume analysis', 'Payment method breakdown', 'CSV export for any date range'] },
  { icon: RefreshCw, title: 'Refund Management', desc: 'Full and partial refunds with automatic gateway routing and tracking.', features: ['Full and partial refunds', 'Automatic gateway routing', 'Refund status tracking', 'Bulk refund processing'] },
  { icon: Shield, title: 'Chargeback Management', desc: 'Monitor, dispute, and resolve chargebacks with a dedicated workflow.', features: ['Chargeback monitoring dashboard', 'Evidence upload and dispute filing', 'Chargeback analytics', 'Automated alerts'] },
];

export default function Solutions() {
  return (
    <>
      <PageHero
        badge="Solutions"
        title={<>Complete solutions for <span className="gradient-text">every team</span></>}
        subtitle="From dashboards to reconciliation, we provide the tools every team needs to manage payments efficiently."
      />

      <section className="section-pad bg-white">
        <div className="container-8xl">
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((sol, i) => (
              <Reveal key={sol.title} delay={(i % 2) * 0.1}>
                <div className="group h-full bg-ink-50 rounded-2xl p-8 border border-ink-100 hover:border-accent-300 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 shrink-0 group-hover:scale-110 transition-transform">
                      <sol.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-ink-900 mb-2">{sol.title}</h3>
                      <p className="text-ink-500 mb-4">{sol.desc}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {sol.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-ink-600">
                            <CheckCircle className="h-4 w-4 text-accent-500 shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
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
              Ready to explore the platform?
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              Get a personalized demo of the Tranzactra platform.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button to="/contact" variant="primary" size="lg">Request Demo <ArrowRight className="h-4 w-4" /></Button>
              <Button to="/signup" variant="dark" size="lg">Create Account</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
