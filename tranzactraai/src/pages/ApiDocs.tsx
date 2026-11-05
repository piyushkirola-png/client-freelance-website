import { useState, useRef, useEffect } from 'react';
import { 
  Code2, Terminal, Copy, Check, Webhook, Key, Book, Zap, ArrowRight, 
  Shield, Lock, Server, Link, User, 
  Clock, Loader2, AlertTriangle, CheckCircle, XCircle, X
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';

const endpoints = [
  { method: 'POST', path: '/api/payin-requests', desc: 'Create a new PayIn request' },
  { method: 'GET', path: '/api/payin-requests/{merchantReference}', desc: 'Check payment status by reference' },
];

const codeExamples: Record<string, string> = {
  'Node.js': `import Tranzactra  AI from 'Tranzactra  AI';

const Tranzactra  AI = new Tranzactra  AI('sk_live_...');

const payment = await Tranzactra  AI.payments.create({
  merchantReference: 'ORD-123456789',
  amount: 1500,
  currency: 'INR',
  customerName: 'John Doe',
  customerEmail: 'john@example.com',
  customerPhone: '9876543210',
  paymentMode: 'CARD',
  cardNumber: '4242424242424242',
  cardExpiryMonth: '12',
  cardExpiryYear: '2026',
  cardCvv: '123',
  cardHolderName: 'John Doe',
  webhookUrl: 'https://yourdomain.com/webhook',
  returnUrl: 'https://yourdomain.com/success'
});

console.log(payment.id, payment.status);`,
  Python: `import Tranzactra  AI

Tranzactra  AI.api_key = 'sk_live_...'

payment = Tranzactra  AI.Payment.create(
  merchantReference='ORD-123456789',
  amount=1500,
  currency='INR',
  customerName='John Doe',
  customerEmail='john@example.com',
  customerPhone='9876543210',
  paymentMode='CARD',
  cardNumber='4242424242424242',
  cardExpiryMonth='12',
  cardExpiryYear='2026',
  cardCvv='123',
  cardHolderName='John Doe',
  webhookUrl='https://yourdomain.com/webhook',
  returnUrl='https://yourdomain.com/success'
)

print(payment.id, payment.status)`,
  PHP: `<?php
require 'vendor/autoload.php';

$Tranzactra  AI = new Tranzactra  AI\\Tranzactra  AI('sk_live_...');

$payment = $Tranzactra  AI->payments->create([
  'merchantReference' => 'ORD-123456789',
  'amount' => 1500,
  'currency' => 'INR',
  'customerName' => 'John Doe',
  'customerEmail' => 'john@example.com',
  'customerPhone' => '9876543210',
  'paymentMode' => 'CARD',
  'cardNumber' => '4242424242424242',
  'cardExpiryMonth' => '12',
  'cardExpiryYear' => '2026',
  'cardCvv' => '123',
  'cardHolderName' => 'John Doe',
  'webhookUrl' => 'https://yourdomain.com/webhook',
  'returnUrl' => 'https://yourdomain.com/success'
]);

echo $payment->id . ' ' . $payment->status;`,
  cURL: `curl -X POST http://localhost:4000/api/payin-requests \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -H "x-signature: YOUR_HMAC_SIGNATURE" \\
  -d '{
    "merchantReference": "ORD-123456789",
    "amount": 1500.00,
    "currency": "INR",
    "customerName": "John Doe",
    "customerEmail": "john@example.com",
    "customerPhone": "9876543210",
    "paymentMode": "CARD",
    "cardNumber": "4242424242424242",
    "cardExpiryMonth": "12",
    "cardExpiryYear": "2026",
    "cardCvv": "123",
    "cardHolderName": "John Doe",
    "description": "Payment for order #123456789",
    "webhookUrl": "https://yourdomain.com/webhook",
    "returnUrl": "https://yourdomain.com/success"
  }'`,
};

const statusCodes = [
  { status: 'COMPLETED', label: 'Completed', desc: 'Payment completed successfully. Funds have been credited.', icon: CheckCircle, color: 'green' },
  { status: 'PENDING', label: 'Pending', desc: 'Payment is pending processing. Customer hasn\'t completed payment yet.', icon: Clock, color: 'yellow' },
  { status: 'PROCESSING', label: 'Processing', desc: 'Payment is being processed by the gateway.', icon: Loader2, color: 'blue' },
  { status: 'FAILED', label: 'Failed', desc: 'Payment failed. Check the error message for details.', icon: XCircle, color: 'red' },
  { status: 'EXPIRED', label: 'Expired', desc: 'Payment request expired. Create a new request.', icon: XCircle, color: 'slate' },
];

const webhookEvents = [
  { event: 'PAYMENT_SUCCESS', desc: 'Payment completed successfully', color: 'green' },
  { event: 'PAYMENT_FAILED', desc: 'Payment failed', color: 'red' },
  { event: 'PAYMENT_PENDING', desc: 'Payment is pending processing', color: 'yellow' },
  { event: 'CHARGEBACK_CREATED', desc: 'Chargeback initiated by customer', color: 'orange' },
];

const gateways = ['Razorpay', 'Cashfree', 'Adyen', 'Chargebee', 'Bennupay', 'PayU', 'Stripe'];

const parameterTable = [
  { param: 'merchantReference', required: 'Required', type: 'String', desc: 'Unique order reference from merchant side (max 50 chars)' },
  { param: 'amount', required: 'Required', type: 'Decimal', desc: 'Amount to be paid (min 1.00)' },
  { param: 'currency', required: 'Required', type: 'String', desc: '3 Digit currency code, eg USD, INR' },
  { param: 'customerName', required: 'Required', type: 'String', desc: 'Customer\'s full name' },
  { param: 'customerEmail', required: 'Required', type: 'String', desc: 'Customer\'s email address' },
  { param: 'customerPhone', required: 'Required', type: 'String', desc: 'Customer\'s phone number (10 digits)' },
  { param: 'paymentMode', required: 'Required', type: 'String', desc: 'UPI, CARD, NETBANKING, WALLET' },
  { param: 'cardNumber', required: 'When CARD', type: 'String', desc: 'Card number (16 digits). Required if paymentMode is CARD' },
  { param: 'cardExpiryMonth', required: 'When CARD', type: 'String', desc: 'Card expiry month (MM). Required if paymentMode is CARD' },
  { param: 'cardExpiryYear', required: 'When CARD', type: 'String', desc: 'Card expiry year (YYYY). Required if paymentMode is CARD' },
  { param: 'cardCvv', required: 'When CARD', type: 'String', desc: 'Card CVV (3-4 digits). Required if paymentMode is CARD' },
  { param: 'cardHolderName', required: 'When CARD', type: 'String', desc: 'Name on card. Required if paymentMode is CARD' },
  { param: 'description', required: 'Optional', type: 'String', desc: 'Payment description (max 255 chars)' },
  { param: 'webhookUrl', required: 'Optional', type: 'String', desc: 'URL to receive payment status webhook' },
  { param: 'returnUrl', required: 'Optional', type: 'String', desc: 'URL to redirect after payment' },
];

const sections = [
  { id: 'authentication', label: 'Authentication', icon: Shield },
  { id: 'parameters', label: 'API Parameters', icon: Code2 },
  { id: 'status-codes', label: 'Status Codes', icon: Server },
  { id: 'webhooks', label: 'Webhooks', icon: Webhook },
];

export default function ApiDocs() {
  const [activeLang, setActiveLang] = useState('Node.js');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('status');
  const [activeSection, setActiveSection] = useState('authentication');
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [showHeadersModal, setShowHeadersModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const sectionRefs = {
    authentication: useRef<HTMLDivElement>(null),
    parameters: useRef<HTMLDivElement>(null),
    'status-codes': useRef<HTMLDivElement>(null),
    webhooks: useRef<HTMLDivElement>(null),
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (sectionId: string) => {
    const ref = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (ref?.current) {
      const offset = 80;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let current = 'authentication';
      
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref?.current) {
          const { top, bottom } = ref.current.getBoundingClientRect();
          const offsetTop = top + window.pageYOffset;
          const offsetBottom = bottom + window.pageYOffset;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            current = key;
          }
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Modal Component
  const Modal = ({ isOpen, onClose, title, children }: any) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4 border-b border-ink-100">
            <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
            <button onClick={onClose} className="p-1 rounded-lg hover:bg-ink-100 transition">
              <X className="h-5 w-5 text-ink-500" />
            </button>
          </div>
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <PageHero
        badge="Hosted Payment API"
        title={<>Hosted Payment <span className="gradient-text">API</span></>}
        subtitle="Complete integration guide for payment processing. Create PayIn requests, process payments through multiple gateways, and receive real-time webhook notifications."
      />

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-ink-100 shadow-sm">
        <div className="container-8xl">
          <div className="flex items-center gap-2 py-3 overflow-x-auto">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-ink-600 hover:bg-ink-100'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-ink-400'}`} />
                  {section.label}
                  <ArrowRight className={`h-3 w-3 ${isActive ? 'text-white/70' : 'text-ink-300'}`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Cards - Compact */}
      <section className="section-pad bg-white pt-6">
        <div className="container-8xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-ink-50 rounded-xl px-4 py-3 border border-ink-100">
              <p className="text-xs text-ink-500">API Endpoints</p>
              <p className="text-xl font-bold text-ink-900">2</p>
              <p className="text-xs text-ink-400">Create &amp; Status</p>
            </div>
            <div className="bg-ink-50 rounded-xl px-4 py-3 border border-ink-100">
              <p className="text-xs text-ink-500">Payment Gateways</p>
              <p className="text-xl font-bold text-ink-900">7</p>
              <p className="text-xs text-ink-400">Razorpay, Cashfree &amp; more</p>
            </div>
            <div className="bg-ink-50 rounded-xl px-4 py-3 border border-ink-100">
              <p className="text-xs text-ink-500">Webhook Events</p>
              <p className="text-xl font-bold text-ink-900">4</p>
              <p className="text-xs text-ink-400">Success, Failed &amp; Chargeback</p>
            </div>
            <div className="bg-ink-50 rounded-xl px-4 py-3 border border-ink-100">
              <p className="text-xs text-ink-500">Status Codes</p>
              <p className="text-xl font-bold text-ink-900">5</p>
              <p className="text-xs text-ink-400">COMPLETED to EXPIRED</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section ref={sectionRefs.authentication} id="authentication" className="section-pad bg-ink-50 pt-6">
        <div className="container-8xl max-w-6xl mx-auto">
          <Reveal>
            <div className="bg-white rounded-2xl shadow-md border border-ink-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-ink-100 bg-gradient-to-r from-ink-50 to-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-600/10 rounded-xl">
                    <Shield className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-ink-900">Authentication</h2>
                    <p className="text-xs text-ink-500">Login, generate signature &amp; configure headers</p>
                  </div>
                </div>
                <span className="text-xs text-ink-400">Step 1</span>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200/50">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-semibold text-ink-900">Authentication Flow</h3>
                        <p className="text-sm text-ink-600 mt-1">Our API uses a secure two-step authentication process. First, login to get your credentials, then use them to sign all subsequent API requests.</p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Buttons with Modals */}
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={() => setShowLoginModal(true)}
                      className="px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 bg-primary-600 text-white shadow-md hover:bg-primary-700"
                    >
                      <User className="h-4 w-4" />Login
                    </button>
                    <button 
                      onClick={() => setShowSignatureModal(true)}
                      className="px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 bg-ink-100 text-ink-600 hover:bg-ink-200"
                    >
                      <Shield className="h-4 w-4" />Generate Signature
                    </button>
                    <button 
                      onClick={() => setShowHeadersModal(true)}
                      className="px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 bg-ink-100 text-ink-600 hover:bg-ink-200"
                    >
                      <Lock className="h-4 w-4" />Request Headers
                    </button>
                  </div>

                  {/* Login Modal */}
                  <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} title="Login">
                    <div className="space-y-4">
                      <p className="text-sm text-ink-600">Send a POST request to the login endpoint with your email and password.</p>
                      <div className="bg-ink-950 rounded-xl overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 bg-ink-800">
                          <span className="text-xs font-mono text-ink-400">POST /api/auth/user/login</span>
                          <button className="p-1.5 rounded-lg hover:bg-ink-700 transition">
                            <Copy className="h-3.5 w-3.5 text-ink-400 hover:text-white" />
                          </button>
                        </div>
                        <div className="p-4">
                          <pre className="text-sm font-mono text-ink-300 whitespace-pre-wrap">{`{
  "email": "user@example.com",
  "password": "your_password"
}`}</pre>
                        </div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                        <p className="text-xs text-green-700">✅ Response includes accessToken, refreshToken, and clientSecret</p>
                      </div>
                    </div>
                  </Modal>

                  {/* Generate Signature Modal */}
                  <Modal isOpen={showSignatureModal} onClose={() => setShowSignatureModal(false)} title="Generate Signature">
                    <div className="space-y-4">
                      <p className="text-sm text-ink-600">Generate an HMAC signature for your API requests.</p>
                      <div className="bg-ink-950 rounded-xl overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 bg-ink-800">
                          <span className="text-xs font-mono text-ink-400">Signature Generation</span>
                          <button className="p-1.5 rounded-lg hover:bg-ink-700 transition">
                            <Copy className="h-3.5 w-3.5 text-ink-400 hover:text-white" />
                          </button>
                        </div>
                        <div className="p-4">
                          <pre className="text-sm font-mono text-ink-300 whitespace-pre-wrap">{`const crypto = require('crypto');

const clientSecret = '7260743197b59b53995d31d6351cdb784ee24c574cf7a0fxxxxxxxxxx';
const payload = JSON.stringify({
  merchantReference: 'ORD-123456789',
  amount: 1500
});

const signature = crypto
  .createHmac('sha256', clientSecret)
  .update(payload)
  .digest('hex');

// Signature: 4f8b9c2d1e3a5f7h8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z`}</pre>
                        </div>
                      </div>
                    </div>
                  </Modal>

                  {/* Request Headers Modal */}
                  <Modal isOpen={showHeadersModal} onClose={() => setShowHeadersModal(false)} title="Request Headers">
                    <div className="space-y-4">
                      <p className="text-sm text-ink-600">Required headers for all API requests.</p>
                      <div className="bg-ink-950 rounded-xl overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 bg-ink-800">
                          <span className="text-xs font-mono text-ink-400">Headers</span>
                          <button className="p-1.5 rounded-lg hover:bg-ink-700 transition">
                            <Copy className="h-3.5 w-3.5 text-ink-400 hover:text-white" />
                          </button>
                        </div>
                        <div className="p-4">
                          <pre className="text-sm font-mono text-ink-300 whitespace-pre-wrap">{`Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
x-signature: YOUR_HMAC_SIGNATURE`}</pre>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                          <p className="text-xs font-semibold text-blue-700">Authorization</p>
                          <p className="text-xs text-ink-600 mt-1">Bearer token from login</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                          <p className="text-xs font-semibold text-green-700">Content-Type</p>
                          <p className="text-xs text-ink-600 mt-1">Always application/json</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                          <p className="text-xs font-semibold text-purple-700">x-signature</p>
                          <p className="text-xs text-ink-600 mt-1">HMAC SHA256 signature</p>
                        </div>
                      </div>
                    </div>
                  </Modal>

                  {/* Login Example - Compact */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-ink-950 rounded-xl overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-ink-800">
                        <span className="text-xs font-mono text-ink-400">POST /api/auth/user/login</span>
                        <button className="p-1.5 rounded-lg hover:bg-ink-700 transition">
                          <Copy className="h-3.5 w-3.5 text-ink-400 hover:text-white" />
                        </button>
                      </div>
                      <div className="p-4">
                        <pre className="text-sm font-mono text-ink-300 whitespace-pre-wrap">{`{
  "email": "user@example.com",
  "password": "your_password"
}`}</pre>
                      </div>
                    </div>
                    <div className="bg-ink-950 rounded-xl overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-ink-800">
                        <span className="text-xs font-mono text-ink-400">Response</span>
                        <button className="p-1.5 rounded-lg hover:bg-ink-700 transition">
                          <Copy className="h-3.5 w-3.5 text-ink-400 hover:text-white" />
                        </button>
                      </div>
                      <div className="p-4 max-h-[200px] overflow-y-auto">
                        <pre className="text-xs font-mono text-ink-300 whitespace-pre-wrap">{`{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "id": 2,
      "email": "user@example.com",
      "clientSecret": "7260743197b59b..."
    }
  }
}`}</pre>
                      </div>
                    </div>
                  </div>

                  {/* cURL Example - Compact */}
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm font-semibold text-primary-600 hover:text-primary-700">
                      View cURL Example
                    </summary>
                    <div className="mt-2 bg-ink-950 rounded-xl overflow-hidden">
                      <div className="p-3 overflow-x-auto max-h-[200px] overflow-y-auto">
                        <pre className="text-xs font-mono text-ink-300 whitespace-pre-wrap">{`# Step 1: Login
curl -X POST http://localhost:4000/api/auth/user/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"user@example.com","password":"your_password"}'

# Step 2: Make API Request
curl -X POST http://localhost:4000/api/payin-requests \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "x-signature: YOUR_HMAC_SIGNATURE" \\
  -d '{"merchantReference":"ORD-123","amount":1500,"currency":"USD"}'`}</pre>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* API Request Parameters */}
      <section ref={sectionRefs.parameters} id="parameters" className="section-pad bg-white pt-6">
        <div className="container-8xl max-w-6xl mx-auto">
          <Reveal>
            <div className="bg-white rounded-2xl shadow-md border border-ink-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-ink-100 bg-gradient-to-r from-ink-50 to-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-600/10 rounded-xl">
                    <Code2 className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-ink-900">API Request Parameters</h2>
                    <p className="text-xs text-ink-500">Create PayIn, check status &amp; understand the flow</p>
                  </div>
                </div>
                <span className="text-xs text-ink-400">Step 2</span>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {/* Endpoints - Fixed */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-ink-50 rounded-xl p-4 border border-ink-100 hover:border-accent-300 transition-all">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-ink-500 font-medium">Create PayIn</span>
                          <p className="text-sm font-mono text-blue-600 mt-1">/api/payin-requests</p>
                        </div>
                        <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-green-100 text-green-700">
                          POST
                        </span>
                      </div>
                    </div>
                    <div className="bg-ink-50 rounded-xl p-4 border border-ink-100 hover:border-accent-300 transition-all">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-ink-500 font-medium">Check Status</span>
                          <p className="text-sm font-mono text-blue-600 mt-1">/api/payin-requests/{'{merchantReference}'}</p>
                        </div>
                        <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-blue-100 text-blue-700">
                          GET
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Parameter Table - Scrollable with fixed height */}
                  <div className="border-t border-ink-200 pt-4">
                    <p className="text-sm text-ink-600 mb-3">Send a POST request to create a new PayIn request.</p>
                    
                    <div className="bg-yellow-50/50 border border-yellow-200/50 rounded-xl p-3 mb-3">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-ink-600"><strong>Note:</strong> Card details are required only when paymentMode = "CARD"</p>
                      </div>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-ink-200 max-h-[300px] overflow-y-auto">
                      <table className="w-full min-w-[700px]">
                        <thead className="bg-ink-50 sticky top-0">
                          <tr>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-ink-700">Parameter</th>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-ink-700">Required</th>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-ink-700">Type</th>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-ink-700">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-ink-100">
                          {parameterTable.map((p) => (
                            <tr key={p.param} className="hover:bg-ink-50 transition">
                              <td className="px-3 py-2 text-sm font-mono text-ink-700">{p.param}</td>
                              <td className="px-3 py-2 text-sm">
                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-medium ${
                                  p.required === 'Required' ? 'bg-red-100 text-red-700' :
                                  p.required === 'When CARD' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-ink-100 text-ink-500'
                                }`}>
                                  {p.required === 'Required' && <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>}
                                  {p.required === 'When CARD' && <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>}
                                  {p.required}
                                </span>
                              </td>
                              <td className="px-3 py-2 text-sm font-mono text-ink-600">{p.type}</td>
                              <td className="px-3 py-2 text-sm text-ink-600">{p.desc}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <details className="mt-3">
                      <summary className="cursor-pointer text-sm font-semibold text-primary-600 hover:text-primary-700">
                        View Full Example
                      </summary>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
                        <div className="bg-ink-950 rounded-xl overflow-hidden">
                          <div className="flex items-center justify-between px-4 py-2 bg-ink-800">
                            <span className="text-xs font-mono text-ink-400">Request Example</span>
                            <button className="p-1.5 rounded-lg hover:bg-ink-700 transition">
                              <Copy className="h-3.5 w-3.5 text-ink-400 hover:text-white" />
                            </button>
                          </div>
                          <div className="p-3 max-h-[200px] overflow-y-auto">
                            <pre className="text-xs font-mono text-ink-300 whitespace-pre-wrap">{`{
  "merchantReference": "ORD-123456789",
  "amount": 1500,
  "currency": "INR",
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "customerPhone": "9876543210",
  "paymentMode": "CARD",
  "cardNumber": "4242424242424242",
  "cardExpiryMonth": "12",
  "cardExpiryYear": "2026",
  "cardCvv": "123",
  "cardHolderName": "John Doe"
}`}</pre>
                          </div>
                        </div>
                        <div className="bg-ink-950 rounded-xl overflow-hidden">
                          <div className="flex items-center justify-between px-4 py-2 bg-ink-800">
                            <span className="text-xs font-mono text-ink-400">Success Response</span>
                            <button className="p-1.5 rounded-lg hover:bg-ink-700 transition">
                              <Copy className="h-3.5 w-3.5 text-ink-400 hover:text-white" />
                            </button>
                          </div>
                          <div className="p-3 max-h-[200px] overflow-y-auto">
                            <pre className="text-xs font-mono text-ink-300 whitespace-pre-wrap">{`{
  "success": true,
  "data": {
    "id": 12345,
    "merchantReference": "ORD-123456789",
    "status": "PENDING",
    "paymentLink": "https://payment.example.com/pay/12345"
  }
}`}</pre>
                          </div>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Status Codes */}
      <section ref={sectionRefs['status-codes']} id="status-codes" className="section-pad bg-ink-50 pt-6">
        <div className="container-8xl max-w-6xl mx-auto">
          <Reveal>
            <div className="bg-white rounded-2xl shadow-md border border-ink-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-ink-100 bg-gradient-to-r from-ink-50 to-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-600/10 rounded-xl">
                    <Server className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-ink-900">Response &amp; Status Codes</h2>
                    <p className="text-xs text-ink-500">Status codes, webhook events &amp; chargeback handling</p>
                  </div>
                </div>
                <span className="text-xs text-ink-400">Step 3</span>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 border-b border-ink-200 pb-2">
                  <button 
                    onClick={() => setActiveTab('status')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
                      activeTab === 'status' 
                        ? 'bg-primary-600 text-white shadow-md' 
                        : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                    }`}
                  >
                    <Server className="h-4 w-4" />Status Codes
                  </button>
                  <button 
                    onClick={() => setActiveTab('webhook')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
                      activeTab === 'webhook' 
                        ? 'bg-primary-600 text-white shadow-md' 
                        : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                    }`}
                  >
                    <Webhook className="h-4 w-4" />Webhook Events
                  </button>
                  <button 
                    onClick={() => setActiveTab('chargeback')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
                      activeTab === 'chargeback' 
                        ? 'bg-primary-600 text-white shadow-md' 
                        : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                    }`}
                  >
                    <AlertTriangle className="h-4 w-4" />Chargeback
                  </button>
                </div>

                <div className="mt-4">
                  {activeTab === 'status' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {statusCodes.map((s) => {
                        const Icon = s.icon;
                        const colorClasses = {
                          green: 'bg-green-50 border-green-200',
                          yellow: 'bg-yellow-50 border-yellow-200',
                          blue: 'bg-blue-50 border-blue-200',
                          red: 'bg-red-50 border-red-200',
                          slate: 'bg-slate-50 border-slate-200',
                        };
                        const bgColor = {
                          green: 'bg-green-100 text-green-700',
                          yellow: 'bg-yellow-100 text-yellow-700',
                          blue: 'bg-blue-100 text-blue-700',
                          red: 'bg-red-100 text-red-700',
                          slate: 'bg-slate-100 text-slate-700',
                        };
                        const textColor = {
                          green: 'text-green-500',
                          yellow: 'text-yellow-500',
                          blue: 'text-blue-500',
                          red: 'text-red-500',
                          slate: 'text-slate-500',
                        };
                        return (
                          <div key={s.status} className={`rounded-xl p-3 border ${colorClasses[s.color as keyof typeof colorClasses]} flex items-start gap-3 hover:shadow-md transition`}>
                            <Icon className={`h-4 w-4 mt-0.5 ${textColor[s.color as keyof typeof textColor]}`} />
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`px-2 py-0.5 rounded-lg text-xs font-mono font-semibold ${bgColor[s.color as keyof typeof bgColor]}`}>
                                  {s.status}
                                </span>
                                <span className="text-sm font-semibold text-ink-900">{s.label}</span>
                              </div>
                              <p className="text-sm text-ink-500 mt-1">{s.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {activeTab === 'webhook' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {webhookEvents.map((e) => {
                        const bgColor = {
                          green: 'bg-green-50 border-green-200 text-green-600',
                          red: 'bg-red-50 border-red-200 text-red-600',
                          yellow: 'bg-yellow-50 border-yellow-200 text-yellow-600',
                          orange: 'bg-orange-50 border-orange-200 text-orange-600',
                        };
                        const iconMap = {
                          green: CheckCircle,
                          red: XCircle,
                          yellow: Clock,
                          orange: AlertTriangle,
                        };
                        const Icon = iconMap[e.color as keyof typeof iconMap];
                        return (
                          <div key={e.event} className={`rounded-lg p-3 border ${bgColor[e.color as keyof typeof bgColor]}`}>
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4" />
                              <span className="text-sm font-semibold text-ink-900">{e.event}</span>
                            </div>
                            <p className="text-sm text-ink-600 mt-1">{e.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {activeTab === 'chargeback' && (
                    <div className="bg-orange-50/50 border border-orange-200/50 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                        <div>
                          <h3 className="text-sm font-semibold text-ink-700">Chargeback Handling</h3>
                          <p className="text-sm text-ink-600 mt-1">When a chargeback is initiated, you'll receive a webhook event. Handle it promptly to manage disputes.</p>
                          <ul className="text-sm text-ink-600 mt-2 list-disc list-inside space-y-1">
                            <li>Verify the chargeback reason</li>
                            <li>Respond with evidence if disputing</li>
                            <li>Adjust merchant balance accordingly</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Webhooks Integration */}
      <section ref={sectionRefs.webhooks} id="webhooks" className="section-pad bg-white pt-6">
        <div className="container-8xl max-w-6xl mx-auto">
          <Reveal>
            <div className="bg-white rounded-2xl shadow-md border border-ink-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-ink-100 bg-gradient-to-r from-ink-50 to-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-600/10 rounded-xl">
                    <Webhook className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-ink-900">Webhooks Integration</h2>
                    <p className="text-xs text-ink-500">Setup, best practices &amp; sample implementation</p>
                  </div>
                </div>
                <span className="text-xs text-ink-400">Step 4</span>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200/50">
                    <div className="flex items-start gap-3">
                      <Webhook className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-semibold text-ink-900">Webhook Integration Guide</h3>
                        <p className="text-sm text-ink-600 mt-1">Webhooks are real-time notifications sent to your server when payment events occur.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-ink-50 rounded-xl p-3 border border-ink-200">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                        <div>
                          <h5 className="text-sm font-semibold text-ink-700">Configure URL</h5>
                          <p className="text-xs text-ink-600 mt-1">Add <code className="bg-ink-200 px-1.5 py-0.5 rounded text-xs font-mono">webhookUrl</code></p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-ink-50 rounded-xl p-3 border border-ink-200">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                        <div>
                          <h5 className="text-sm font-semibold text-ink-700">Verify Signature</h5>
                          <p className="text-xs text-ink-600 mt-1">Verify <code className="bg-ink-200 px-1.5 py-0.5 rounded text-xs font-mono">x-signature</code></p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-ink-50 rounded-xl p-3 border border-ink-200">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                        <div>
                          <h5 className="text-sm font-semibold text-ink-700">Process Payload</h5>
                          <p className="text-xs text-ink-600 mt-1">Return 200 OK</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-ink-700 mb-2">Supported Payment Gateways</h4>
                    <div className="flex flex-wrap gap-2">
                      {gateways.map((g) => (
                        <span key={g} className="px-3 py-1.5 bg-ink-50 rounded-lg text-xs font-medium text-ink-700 border border-ink-200">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50/50 border border-blue-200/50 rounded-xl p-3">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-ink-700">Best Practices</h4>
                        <ul className="text-xs text-ink-600 mt-1 space-y-1 list-disc list-inside">
                          <li><strong>Validate Signatures:</strong> Always verify <code className="bg-white px-1.5 py-0.5 rounded text-xs font-mono text-blue-600">x-signature</code></li>
                          <li><strong>Respond Quickly:</strong> Return 200 OK within 5 seconds</li>
                          <li><strong>Idempotency:</strong> Handle duplicate webhooks using order_id</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <details>
                    <summary className="cursor-pointer text-sm font-semibold text-primary-600 hover:text-primary-700">
                      View Sample Webhook Handler
                    </summary>
                    <div className="mt-2 bg-ink-950 rounded-xl overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-ink-800">
                        <span className="text-xs font-mono text-ink-400">Node.js (Express) Example</span>
                        <button className="p-1.5 rounded-lg hover:bg-ink-700 transition">
                          <Copy className="h-3.5 w-3.5 text-ink-400 hover:text-white" />
                        </button>
                      </div>
                      <div className="p-3 max-h-[250px] overflow-y-auto">
                        <pre className="text-xs font-mono text-ink-300 whitespace-pre-wrap">{`app.post('/api/webhooks/payment', (req, res) => {
  const signature = req.headers['x-signature'];
  const clientSecret = process.env.CLIENT_SECRET;
  
  if (signature !== clientSecret) {
    return res.status(401).json({ error: 'Invalid signature' });
  }
  
  const { type, data } = req.body;
  
  switch(type) {
    case 'PAYMENT_SUCCESS':
      await updateOrderStatus(data.order.order_id, 'COMPLETED');
      break;
    case 'PAYMENT_FAILED':
      await updateOrderStatus(data.order.order_id, 'FAILED');
      break;
    case 'CHARGEBACK_CREATED':
      await createChargeback(data);
      break;
  }
  
  res.status(200).json({ received: true });
});`}</pre>
                      </div>
                    </div>
                  </details>

                  <div className="bg-yellow-50/50 border border-yellow-200/50 rounded-xl p-3">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-ink-700">Retry Mechanism</h4>
                        <div className="flex gap-2 mt-1">
                          <div className="bg-white rounded-lg px-3 py-1 text-center">
                            <p className="text-xs text-ink-500">Attempt 1</p>
                            <p className="text-sm font-mono text-ink-700">Immediate</p>
                          </div>
                          <div className="bg-white rounded-lg px-3 py-1 text-center">
                            <p className="text-xs text-ink-500">Attempt 2</p>
                            <p className="text-sm font-mono text-ink-700">~5 min</p>
                          </div>
                          <div className="bg-white rounded-lg px-3 py-1 text-center">
                            <p className="text-xs text-ink-500">Attempt 3</p>
                            <p className="text-sm font-mono text-ink-700">~15 min</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick Start Code Section - Compact */}
      <section className="section-pad bg-ink-50 pt-6">
        <div className="container-8xl">
          <Reveal>
            <SectionHeading
              badge="Quick Start"
              title="Make your first API call"
              subtitle="Choose your language and copy the code. It's that simple."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-3">
                {Object.keys(codeExamples).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      activeLang === lang
                        ? 'bg-primary-900 text-white'
                        : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <div className="relative bg-ink-950 rounded-2xl overflow-hidden border border-white/10">
                <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-accent-400" />
                    <span className="text-sm font-mono text-ink-400">{activeLang}</span>
                  </div>
                  <button
                    onClick={copyCode}
                    className="flex items-center gap-1.5 text-xs text-ink-400 hover:text-white transition-colors"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre className="p-4 text-sm font-mono leading-relaxed overflow-x-auto max-h-[300px] overflow-y-auto">
                  <code className="text-ink-300">{codeExamples[activeLang]}</code>
                </pre>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-primary-600/5 via-accent-500/5 to-primary-600/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[120px] rounded-full" />
        <div className="relative container-8xl text-center">
          <Reveal>
            <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl text-balance">
              Ready to start building?
            </h2>
            <p className="mt-2 text-base text-ink-600 max-w-2xl mx-auto">
              Get free sandbox access and start testing today.
            </p>
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <Button to="/signup" variant="primary" size="lg">Get API Keys <ArrowRight className="h-4 w-4" /></Button>
              <Button to="/developers" variant="outline" size="lg">Developer Portal</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}