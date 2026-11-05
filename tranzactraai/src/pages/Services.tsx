import {
  CreditCard, Building2, ArrowLeftRight, Zap, ShieldCheck, Code2,
  Wallet, FileText, LayoutDashboard, AlertTriangle, ScanLine,
  Store, RefreshCw, Terminal, CheckCircle, ArrowRight,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';

const allServices = [
  { icon: Building2, title: 'Merchant Onboarding', desc: 'Streamlined KYC, document verification, and activation in under 24 hours.', href: '/merchant-solutions' },
  { icon: CreditCard, title: 'Payment Gateway', desc: 'Accept payments through UPI, cards, net banking, and wallets with a single integration.', href: '/payment-gateway' },
  { icon: Zap, title: 'UPI Payments', desc: 'UPI Intent, Collect, and QR — the full suite of UPI payment methods.', href: '/payment-gateway' },
  { icon: CreditCard, title: 'Cards', desc: 'Credit, debit, prepaid, international, and tokenized card payments.', href: '/payment-gateway' },
  { icon: Wallet, title: 'Net Banking', desc: '50+ banks supported with instant confirmation and real-time status.', href: '/payment-gateway' },
  { icon: Wallet, title: 'Wallets', desc: 'All major wallets — Paytm, PhonePe, Amazon Pay, and more.', href: '/payment-gateway' },
  { icon: Zap, title: 'Payout API', desc: 'Instant vendor payouts, refunds, and mass disbursements via a single API.', href: '/payouts' },
  { icon: FileText, title: 'Settlement', desc: 'Automated settlement processing with manual override and reconciliation.', href: '/settlement' },
  { icon: Wallet, title: 'Virtual Accounts', desc: 'Create unique virtual accounts for each customer with auto-reconciliation.', href: '/payouts' },
  { icon: ArrowLeftRight, title: 'Webhook System', desc: 'HMAC-signed webhooks for every payment event, with retry and deduplication.', href: '/api-docs' },
  { icon: FileText, title: 'Reports', desc: 'Transaction reports, settlement reports, and CSV exports on demand.', href: '/settlement' },
  { icon: LayoutDashboard, title: 'Dashboard', desc: 'Real-time dashboards with charts, filters, and actionable insights.', href: '/solutions' },
  { icon: AlertTriangle, title: 'Risk Management', desc: 'Customizable risk rules, velocity checks, and real-time blocking.', href: '/risk-engine' },
  { icon: ScanLine, title: 'Fraud Detection', desc: 'ML-powered fraud scoring with chargeback monitoring and alerts.', href: '/risk-engine' },
  { icon: ScanLine, title: 'KYC Verification', desc: 'Automated KYC with document upload, verification, and audit trail.', href: '/merchant-solutions' },
  { icon: Store, title: 'Vendor Payments', desc: 'Manage vendor payouts, approvals, and reconciliation in one place.', href: '/payouts' },
  { icon: RefreshCw, title: 'Refund APIs', desc: 'Full and partial refunds with automatic gateway routing and tracking.', href: '/api-docs' },
  { icon: Terminal, title: 'Developer APIs', desc: 'RESTful APIs with SDKs in 5 languages, sandbox, and comprehensive docs.', href: '/api-docs' },
];

export default function Services() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title={<>Everything you need to <span className="gradient-text">run payments</span></>}
        subtitle="18 powerful services covering the entire payment lifecycle — from onboarding to settlement. Pick what you need, or use them all."
      />

      <section className="section-pad bg-white">
        <div className="container-8xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <div className="group h-full bg-ink-50 rounded-2xl p-7 border border-ink-100 hover:border-accent-300 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 w-fit mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
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
              Need a custom solution?
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              Our team can tailor any service to your specific business requirements.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button to="/contact" variant="primary" size="lg">Talk to Sales</Button>
              <Button to="/pricing" variant="dark" size="lg">View Pricing</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
