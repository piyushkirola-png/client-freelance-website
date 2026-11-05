import { FileText, CreditCard, Shield, Scale, AlertTriangle, Mail } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';

const sections = [
  {
    icon: FileText,
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using Tranzactra\'s payment orchestration platform ("Service"), you agree to be bound by these Terms of Service ("Terms").',
      'If you do not agree to these Terms, you must not access or use the Service.',
      'These Terms apply to all visitors, users, and others who access or use the Service.',
      'We may revise these Terms at any time. Continued use of the Service after changes constitutes acceptance of the updated Terms.',
    ],
  },
  {
    icon: CreditCard,
    title: '2. Service Description',
    content: [
      'Tranzactra provides a payment orchestration platform that connects merchants to multiple payment gateways through a single API.',
      'Our services include payment processing, payout management, settlement processing, risk management, and developer APIs.',
      'We act as a technology provider and orchestrator. We are not a bank, payment gateway, or financial institution.',
      'Payment processing is handled by our partner gateways (Stripe, Razorpay, Cashfree, Adyen, PayU, BennuPay, Chargebee).',
    ],
  },
  {
    icon: FileText,
    title: '3. Account Registration & KYC',
    content: [
      'You must provide accurate, complete, and current information during the registration process.',
      'You must complete our KYC verification process before activating your account for live transactions.',
      'You are responsible for maintaining the security of your account credentials and API keys.',
      'You must be at least 18 years old and have the legal authority to bind your business to these Terms.',
      'We reserve the right to refuse or terminate accounts that fail KYC verification or violate our policies.',
    ],
  },
  {
    icon: CreditCard,
    title: '4. Fees & Payment',
    content: [
      'Transaction fees are charged as a percentage of each successful transaction, as described in your pricing plan.',
      'There are no setup fees or monthly fees on Starter and Growth plans.',
      'Fees are automatically deducted from your settlement amount.',
      'Enterprise customers have custom pricing as negotiated in their service agreement.',
      'You are responsible for all taxes associated with your use of the Service, except for taxes on our net income.',
    ],
  },
  {
    icon: Shield,
    title: '5. Acceptable Use',
    content: [
      'You must not use the Service for illegal activities, including but not limited to money laundering, fraud, or terrorism financing.',
      'You must not process payments for prohibited businesses, including weapons, drugs, gambling (where illegal), or adult content.',
      'You must not attempt to reverse engineer, decompile, or disassemble any part of the Service.',
      'You must not use the Service to send spam, phishing, or unsolicited communications.',
      'You must comply with all applicable laws, including PCI DSS, KYC, AML, and data protection regulations.',
    ],
  },
  {
    icon: Scale,
    title: '6. Intellectual Property',
    content: [
      'The Service, including its design, code, content, and branding, is owned by Tranzactra and protected by intellectual property laws.',
      'You may not copy, modify, distribute, or create derivative works of the Service without our written permission.',
      'SDKs and documentation are provided under a limited license for use with the Service.',
      'All trademarks, service marks, and logos are the property of their respective owners.',
    ],
  },
  {
    icon: AlertTriangle,
    title: '7. Limitation of Liability',
    content: [
      'The Service is provided "as is" and "as available" without warranties of any kind.',
      'We are not liable for indirect, incidental, special, consequential, or punitive damages.',
      'Our total liability shall not exceed the total transaction fees paid by you in the 3 months preceding the claim.',
      'We are not liable for gateway failures, bank delays, or issues outside our control.',
      'We are not liable for any loss of data, revenue, or business opportunity resulting from the use of the Service.',
    ],
  },
  {
    icon: FileText,
    title: '8. Termination',
    content: [
      'You may terminate your account at any time by contacting us.',
      'We may suspend or terminate your account if you violate these Terms or our policies.',
      'We may terminate your account immediately if we suspect fraud, illegal activity, or security risks.',
      'Upon termination, you remain responsible for all fees incurred prior to termination.',
      'Provisions relating to liability, intellectual property, and dispute resolution survive termination.',
    ],
  },
  {
    icon: Scale,
    title: '9. Dispute Resolution',
    content: [
      'Any disputes arising from these Terms shall first be resolved through good-faith negotiation.',
      'If negotiation fails, disputes shall be resolved through binding arbitration in Noida, UP, India.',
      'These Terms are governed by the laws of India, without regard to conflict of law principles.',
      'You waive the right to participate in class action lawsuits or class-wide arbitration.',
    ],
  },
  {
    icon: Mail,
    title: '10. Contact Information',
    content: [
      'For legal notices, send to: Tranzactra Technologies, Noida, UP, India.',
      'For support inquiries, contact amityadav@gmail.com.',
      'For privacy questions, contact amityadav@gmail.com.',
    ],
  },
];

export default function Terms() {
  return (
    <>
      <PageHero
        badge="Terms of Service"
        title={<>The rules of <span className="gradient-text">our relationship</span></>}
        subtitle="These Terms govern your use of Tranzactra's payment orchestration platform. Please read them carefully."
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
              Welcome to Tranzactra. These Terms of Service ("Terms") govern your access to and use of
              Tranzactra's payment orchestration platform, website, and services. By using our services,
              you agree to these Terms. If you do not agree, you may not use our services.
            </p>
          </Reveal>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 0.03}>
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
              <h2 className="text-xl font-bold text-ink-900 mb-3">Questions about these Terms?</h2>
              <p className="text-ink-600 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact our legal team:
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
            <Button to="/contact" variant="primary" size="lg">Contact Legal Team</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
