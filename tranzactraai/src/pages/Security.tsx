import { Shield, Lock, ShieldCheck, Key, FileText, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';

const compliance = [
  { icon: Shield, title: 'PCI DSS Level 1', desc: 'The highest level of Payment Card Industry Data Security Standard compliance.' },
  { icon: FileText, title: 'SOC 2 Type II', desc: 'Audited controls for security, availability, processing integrity, and confidentiality.' },
  { icon: ShieldCheck, title: 'ISO 27001', desc: 'Certified Information Security Management System with continuous improvement.' },
  { icon: Lock, title: 'GDPR Compliant', desc: 'Full compliance with EU General Data Protection Regulation for data privacy.' },
];

const securityFeatures = [
  { icon: Lock, title: 'End-to-End Encryption', desc: 'AES-256 encryption at rest, TLS 1.3 in transit. All sensitive data is encrypted from the moment it reaches us.' },
  { icon: Key, title: 'HMAC-Signed Webhooks', desc: 'Every webhook event is HMAC-signed and verified. No spoofing, no tampering, no replay attacks.' },
  { icon: Shield, title: 'JWT Authentication', desc: 'Stateless, signed JWT tokens for API authentication with configurable expiry and refresh.' },
  { icon: Eye, title: 'Real-Time Monitoring', desc: '24/7 security monitoring with automated threat detection and response.' },
  { icon: AlertTriangle, title: 'Fraud Detection', desc: 'ML-powered fraud scoring with 50+ signals analyzed in real-time for every transaction.' },
  { icon: ShieldCheck, title: 'Role-Based Access', desc: 'Granular RBAC with custom roles and permissions for every team member.' },
  { icon: FileText, title: 'Audit Trail', desc: 'Complete audit logs for every action — who did what, when, and from where.' },
  { icon: Lock, title: 'Data Tokenization', desc: 'Card details are tokenized — we never store raw card numbers on our servers.' },
];

export default function Security() {
  return (
    <>
      <PageHero
        badge="Security & Compliance"
        title={<>Security is not a feature. <span className="gradient-text">It's everything.</span></>}
        subtitle="Bank-grade security infrastructure trusted by enterprises and fintechs worldwide. Every transaction is protected by multiple layers of defense."
      />

      {/* Compliance Badges */}
      <section className="section-pad bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/5 blur-[120px] rounded-full" />
        <div className="relative container-8xl">
          <Reveal>
            <SectionHeading
              badge="Certifications"
              title="Certified and audited"
              subtitle="We hold the highest security certifications in the industry."
            />
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="group bg-ink-50 rounded-2xl p-8 text-center border border-ink-100 hover:border-accent-300 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 mb-5 group-hover:scale-110 transition-transform">
                    <c.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">{c.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section-pad bg-ink-50">
        <div className="container-8xl">
          <Reveal>
            <SectionHeading
              badge="Security Features"
              title="Multi-layered defense"
              subtitle="From encryption to fraud detection, every layer of our infrastructure is designed with security first."
            />
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.08}>
                <div className="group h-full bg-white rounded-2xl p-7 border border-ink-100 hover:border-accent-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 w-fit mb-5 group-hover:scale-110 transition-transform">
                    <f.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-ink-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow */}
      <section className="section-pad bg-white">
        <div className="container-8xl max-w-3xl">
          <Reveal>
            <SectionHeading
              badge="Data Protection"
              title="How we protect your data"
              subtitle="Every step of the payment flow is secured with industry-standard encryption and verification."
            />
          </Reveal>
          <div className="mt-16 space-y-4">
            {[
              { step: 'Data in Transit', desc: 'All API calls use TLS 1.3 encryption. No data travels over unencrypted channels.' },
              { step: 'Data at Rest', desc: 'All stored data is encrypted with AES-256. Sensitive fields like card numbers are tokenized.' },
              { step: 'Access Control', desc: 'Role-based access control ensures only authorized personnel can access sensitive data.' },
              { step: 'Audit & Monitoring', desc: 'Every action is logged. 24/7 monitoring detects and responds to threats in real-time.' },
              { step: 'Incident Response', desc: 'Documented incident response procedures with automated alerts and escalation.' },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08}>
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-ink-50 border border-ink-100 hover:border-accent-300 hover:shadow-lg hover:bg-white transition-all">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white shrink-0">
                    <CheckCircle className="h-6 w-6" />
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

      <section className="py-20 bg-gradient-to-br from-primary-600/5 via-accent-500/5 to-primary-600/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[120px] rounded-full" />
        <div className="relative container-8xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              Your payments are safe with us
            </h2>
            <p className="mt-4 text-lg text-ink-600 max-w-2xl mx-auto">
              Learn more about our security practices or request a security audit.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button to="/contact" variant="primary" size="lg">Contact Security Team <ArrowRight className="h-4 w-4" /></Button>
              <Button to="/risk-engine" variant="outline" size="lg">Risk Engine</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}