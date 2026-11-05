import { ShieldCheck, AlertTriangle, ScanLine, CheckCircle, ArrowRight, Zap, Eye, Lock } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';

const riskFeatures = [
  { icon: AlertTriangle, title: 'Risk Block Rules', desc: 'Create custom rules to block suspicious transactions based on amount, velocity, geography, and more.' },
  { icon: ScanLine, title: 'Fraud Detection', desc: 'ML-powered fraud scoring analyzes every transaction in real-time across 50+ signals.' },
  { icon: Eye, title: 'Velocity Checks', desc: 'Monitor transaction velocity per card, IP, device, and user to detect card testing and fraud.' },
  { icon: ShieldCheck, title: 'Chargeback Monitor', desc: 'Real-time chargeback monitoring with automated alerts and dispute management workflow.' },
  { icon: Zap, title: 'Real-Time Blocking', desc: 'Block high-risk transactions before they reach the gateway, saving gateway fees and chargebacks.' },
  { icon: Lock, title: 'Blacklist Management', desc: 'Maintain blacklists for cards, IPs, emails, and devices with automatic matching.' },
];

const riskSignals = [
  'Card BIN analysis', 'IP geolocation', 'Device fingerprinting',
  'Email age verification', 'Velocity per user', 'Velocity per card',
  'Transaction amount patterns', 'Time-of-day analysis', 'Geographic mismatch',
  'BIN-country mismatch', 'Email-phone mismatch', 'Historical chargeback rate',
];

export default function RiskEngine() {
  return (
    <>
      <PageHero
        badge="Risk Engine"
        title={<>Stop fraud <span className="gradient-text">before it happens</span></>}
        subtitle="Real-time fraud detection, customizable risk rules, and chargeback monitoring — all built into the platform."
      />

      <section className="section-pad bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/5 blur-[120px] rounded-full" />
        <div className="relative container-8xl">
          <Reveal>
            <SectionHeading
              badge="Risk Management"
              title="A multi-layered defense system"
              subtitle="Every transaction passes through multiple layers of risk checks before, during, and after processing."
            />
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {riskFeatures.map((f, i) => (
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
                badge="Fraud Signals"
                align="left"
                title="50+ signals analyzed in real-time"
                subtitle="Our ML engine analyzes dozens of signals in milliseconds to score every transaction's risk level."
              />
              <div className="mt-8 grid grid-cols-2 gap-3">
                {riskSignals.map((s) => (
                  <div key={s} className="flex items-center gap-2.5 text-sm text-ink-700">
                    <CheckCircle className="h-4 w-4 text-accent-500 shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button to="/contact" variant="primary" size="lg">
                  Talk to a Risk Expert <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-danger-400/20 to-accent-400/20 rounded-3xl blur-xl" />
              <div className="relative bg-ink-950 rounded-3xl p-8 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-mono text-ink-400">Risk Score Analysis</span>
                  <span className="px-3 py-1 rounded-full bg-success-500/20 text-success-400 text-xs font-semibold">LOW RISK</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Card BIN Match', value: 95, color: 'bg-success-500' },
                    { label: 'IP-Card Country Match', value: 92, color: 'bg-success-500' },
                    { label: 'Velocity Score', value: 78, color: 'bg-accent-500' },
                    { label: 'Device Trust', value: 88, color: 'bg-success-500' },
                    { label: 'Email Age', value: 65, color: 'bg-warning-500' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-ink-300">{item.label}</span>
                        <span className="text-ink-400">{item.value}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-3 rounded-xl bg-success-500/10 border border-success-500/20">
                  <div className="flex items-center gap-2 text-success-400">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-xs font-semibold">Approved · Risk score: 12/100</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-600/5 via-accent-500/5 to-primary-600/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[120px] rounded-full" />
        <div className="relative container-8xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              Protect your business from fraud
            </h2>
            <p className="mt-4 text-lg text-ink-600 max-w-2xl mx-auto">
              Start detecting and blocking fraudulent transactions today.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button to="/signup" variant="primary" size="lg">Get Started</Button>
              <Button to="/security" variant="outline" size="lg">View Security</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}