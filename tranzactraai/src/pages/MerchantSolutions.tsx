import { Building2, ScanLine, FileText, CheckCircle, ArrowRight, Clock, ShieldCheck, UserCheck, FileCheck } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';

const onboardingSteps = [
  { icon: UserCheck, title: 'Sign Up', desc: 'Create your merchant account with basic business details.' },
  { icon: ScanLine, title: 'KYC Verification', desc: 'Upload business documents for automated KYC verification.' },
  { icon: FileCheck, title: 'Document Review', desc: 'Our team reviews and approves documents within 24 hours.' },
  { icon: ShieldCheck, title: 'Go Live', desc: 'Receive your API keys and start accepting payments immediately.' },
];

const features = [
  'Automated KYC with document upload and verification',
  'Business profile management with multiple entities',
  'Merchant rate card configuration',
  'Gateway-merchant mapping for custom routing',
  'Document vault with secure S3 storage',
  'Audit trail for all onboarding activities',
  'Multi-user support with role-based access',
  'White-label onboarding for platform partners',
];

export default function MerchantSolutions() {
  return (
    <>
      <PageHero
        badge="Merchant Solutions"
        title={<>Onboard merchants in <span className="gradient-text">record time</span></>}
        subtitle="Streamlined KYC, document verification, and activation — get merchants live in under 24 hours, not weeks."
      />

      {/* Onboarding Flow */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <Reveal>
            <SectionHeading
              badge="Onboarding Process"
              title="From sign-up to live in 4 steps"
              subtitle="Our automated onboarding flow gets merchants processing payments faster than any other platform."
            />
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {onboardingSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="relative h-full bg-ink-50 rounded-2xl p-8 border border-ink-100 hover:border-accent-300 hover:shadow-lg transition-all">
                  <div className="absolute top-4 right-4 text-4xl font-bold gradient-text opacity-30">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 w-fit mb-5">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad bg-ink-50">
        <div className="container-8xl grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <SectionHeading
                badge="Features"
                align="left"
                title="Everything for merchant management"
                subtitle="A complete suite of tools to onboard, manage, and support your merchants."
              />
              <div className="mt-8 space-y-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-ink-700">
                    <CheckCircle className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button to="/contact" variant="primary" size="lg">
                  Start Onboarding <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid gap-4">
              <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent-50">
                  <Clock className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-ink-900">&lt; 24h</div>
                  <div className="text-sm text-ink-500">Average onboarding time</div>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary-50">
                  <ShieldCheck className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-ink-900">100%</div>
                  <div className="text-sm text-ink-500">KYC compliance rate</div>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-success-50">
                  <FileText className="h-6 w-6 text-success-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-ink-900">50,000+</div>
                  <div className="text-sm text-ink-500">Merchants onboarded</div>
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
              Ready to onboard your merchants?
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              Start accepting merchants on your platform today.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button to="/signup" variant="primary" size="lg">Get Started</Button>
              <Button to="/contact" variant="dark" size="lg">Talk to Sales</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
