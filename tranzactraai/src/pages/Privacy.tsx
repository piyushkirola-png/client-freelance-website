import { Shield, Lock, Eye, Trash2, Mail } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';

const sections = [
  {
    icon: Eye,
    title: 'Information We Collect',
    content: [
      'We collect information that you provide directly to us when you create an account, including your name, email address, company name, and business details.',
      'We also collect information automatically when you use our services, including transaction data, device information, IP addresses, and usage analytics.',
      'For KYC purposes, we collect business registration documents, tax identification numbers, and bank account details as required by regulatory compliance.',
    ],
  },
  {
    icon: Lock,
    title: 'How We Use Your Information',
    content: [
      'To provide and maintain our payment orchestration services, including processing transactions and managing settlements.',
      'To verify your identity and comply with KYC/AML regulations as required by financial authorities.',
      'To communicate with you about your account, transactions, security alerts, and service updates.',
      'To detect, prevent, and address fraud, security issues, and technical problems.',
      'To analyze and improve our services, develop new features, and optimize performance.',
    ],
  },
  {
    icon: Shield,
    title: 'Data Security',
    content: [
      'We use AES-256 encryption for data at rest and TLS 1.3 for data in transit.',
      'All card details are tokenized — we never store raw card numbers on our servers.',
      'We are PCI DSS Level 1, SOC 2 Type II, and ISO 27001 certified.',
      'Access to personal data is restricted through role-based access control (RBAC) and is logged in an audit trail.',
      'We conduct regular security audits and penetration testing by independent third parties.',
    ],
  },
  {
    icon: Eye,
    title: 'Information Sharing',
    content: [
      'We share your information with payment gateways (Stripe, Razorpay, Cashfree, Adyen, PayU, BennuPay, Chargebee) solely for the purpose of processing your transactions.',
      'We may share information with regulatory authorities when required by law or court order.',
      'We do not sell, rent, or trade your personal information to third parties for marketing purposes.',
      'We may share data with service providers (cloud hosting, analytics) who are bound by confidentiality obligations.',
    ],
  },
  {
    icon: Trash2,
    title: 'Data Retention & Deletion',
    content: [
      'We retain your personal data for as long as your account is active or as needed to provide our services.',
      'Transaction data is retained for 7 years as required by financial regulations.',
      'You can request deletion of your account and personal data at any time, subject to regulatory retention requirements.',
      'Upon account deletion, we will remove your personal data within 30 days, except where retention is legally required.',
    ],
  },
  {
    icon: Mail,
    title: 'Your Rights',
    content: [
      'You have the right to access, correct, or delete your personal data.',
      'You have the right to object to certain processing of your data.',
      'You have the right to data portability — to receive your data in a structured, machine-readable format.',
      'You have the right to withdraw consent for data processing at any time.',
      'To exercise any of these rights, contact us at amityadav@gmail.com.',
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <PageHero
        badge="Privacy Policy"
        title={<>Your privacy is <span className="gradient-text">our priority</span></>}
        subtitle="We are committed to protecting your personal data and being transparent about how we use it."
      />

      <section className="section-pad bg-white">
        <div className="container-8xl max-w-4xl">
          <Reveal>
            <div className="p-6 rounded-2xl bg-ink-50 border border-ink-100 mb-12">
              <p className="text-sm text-ink-500">
                <strong className="text-ink-700">Last updated:</strong> July 20, 2024<br />
                <strong className="text-ink-700">Effective date:</strong> July 20, 2024
              </p>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-lg text-ink-600 leading-relaxed mb-12">
              This Privacy Policy explains how Tranzactra Technologies ("we", "us", or "our") collects,
              uses, discloses, and safeguards your information when you use our payment orchestration
              platform and services. Please read this policy carefully to understand our policies and
              practices regarding your information.
            </p>
          </Reveal>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 0.05}>
                <div className="border-l-4 border-accent-500 pl-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500">
                      <section.icon className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-ink-900">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, j) => (
                      <li key={j} className="text-ink-600 leading-relaxed flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-500 shrink-0 mt-2.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100">
              <h2 className="text-xl font-bold text-ink-900 mb-3">Contact Us</h2>
              <p className="text-ink-600 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-1 text-sm text-ink-700">
                <p><strong>Email:</strong> amityadav@gmail.com</p>
                <p><strong>Address:</strong> Tranzactra Technologies, Noida, UP, India</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-ink-50">
        <div className="container-8xl text-center">
          <Reveal>
            <Button to="/contact" variant="primary" size="lg">Contact Privacy Team</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
