import { useSeo } from "@/hooks/useSeo";
import { LegalPage } from "@/components/LegalPage";
import type { LegalSection } from "@/components/LegalPage";
import { CONTACT, LEGAL, SITE, UDYAM } from "@/data/siteData";

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex gap-2.5">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function Privacy() {
  useSeo(
    `Privacy Policy — ${SITE.name}`,
    `How ${SITE.name} collects, uses, protects and shares your personal information, and the rights you have over your data.`,
  );

  const sections: LegalSection[] = [
    {
      id: "scope",
      title: "Scope of this Policy",
      content: (
        <>
          <p>
            This Privacy Policy explains how {UDYAM.enterpriseName} (Udyam Reg. No.{" "}
            {UDYAM.registrationNumber}), a Micro Enterprise registered under the Udyam Registration
            Scheme of the Government of India ("we", "us" or "the Company"), collects, uses, stores,
            processes and discloses personal information when you visit{" "}
            <span className="font-semibold text-gold">diwalibumper.in</span>, book a ticket in
            the {SITE.name} Draw, contact our support team, or otherwise interact with us
            through WhatsApp, email, phone or any partner platform.
          </p>
          <p>
            By submitting your information to us, you consent to the practices described in this
            Policy. We process personal data in accordance with applicable law, including the
            Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000, as
            amended.
          </p>
        </>
      ),
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      content: (
        <>
          <p>We collect only the information we genuinely need to run a fair, verifiable draw:</p>
          <List
            items={[
              "Identity & contact details: your full name, mobile number, email address (where provided) and WhatsApp number.",
              "Address details: your complete residential or business address, city, state and 6-digit PIN code.",
              "Booking & payment information: the number of tokens purchased, the pack selected, the booking reference, the preferred payment method and the transaction identifier of the payment received. We do not store complete card numbers, CVVs or banking PINs.",
              "Technical information: your IP address, device type, browser type, approximate location derived from the IP address, and pages visited on our website.",
              "Communications: messages you send us on WhatsApp, email or phone, including any documents you choose to upload for KYC verification.",
              "Winner verification documents: where you are a winner, the identity, address and bank account documents you voluntarily provide for KYC and prize release.",
            ]}
          />
        </>
      ),
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      content: (
        <>
          <p>Your information is used strictly for the following purposes:</p>
          <List
            items={[
              "To create, verify and administer your ticket booking and issue a unique ticket number.",
              "To transmit your ticket confirmation, payment link, draw reminders and result notifications on WhatsApp, SMS and email.",
              "To contact you in relation to the Draw, including winner verification, prize delivery and grievance handling.",
              "To maintain accounting, tax and regulatory records as required by law.",
              "To detect and prevent fraud, duplicate bookings, spam and misuse of the Campaign.",
              "To improve the website, the booking experience and customer support quality.",
              "To comply with applicable legal, tax and regulatory obligations and to enforce our agreements.",
            ]}
          />
          <p>
            We do not use your information for any purpose that is incompatible with the above. We
            never ask you for your OTP, PIN, CVV or full card details over WhatsApp, email or phone.
          </p>
        </>
      ),
    },
    {
      id: "whatsapp-consent",
      title: "WhatsApp & Communication Consent",
      content: (
        <>
          <p>
            By providing your mobile number and requesting a booking, you explicitly consent to us
            contacting you on WhatsApp, SMS and email for all Draw-related communications,
            including transactional messages such as:
          </p>
          <List
            items={[
              "Booking confirmations and ticket numbers.",
              "Payment requests and receipts.",
              "Draw-date reminders and live draw links.",
              "Winner notifications, KYC requests and prize status updates.",
              "Grievance acknowledgements and resolutions.",
            ]}
          />
          <p>
            The Company also acts as a Business Initiated Messaging (BIM) sender as defined by the
            Telecom Commercial Communications Preference Regulations, 2018 ("TCCPR"). Messaging
            initiated by you on WhatsApp is treated as an existing relationship and consent is
            implied for transactional communication under the TCCPR.
          </p>
          <p>
            You may revoke marketing consent at any time by replying <strong className="text-gold">STOP</strong>{" "}
            to our messages, contacting us on{" "}
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold underline underline-offset-2"
            >
              WhatsApp
            </a>{" "}
            or emailing{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-semibold text-gold underline underline-offset-2 break-all"
            >
              {CONTACT.email}
            </a>
            . Please note that revoking consent may delay draw-related communications, including
            ticket confirmations, and the Company will no longer be responsible for the consequences
            of missed notifications.
          </p>
        </>
      ),
    },
    {
      id: "sharing",
      title: "Data Protection & Third-Party Sharing",
      content: (
        <>
          <p>
            We treat your personal information as confidential and do not sell it. We share data
            only in the following limited circumstances:
          </p>
          <List
            items={[
              "Payment processors, payment gateway providers and banks, to the extent required to process your payment securely.",
              "Our auditors, notaries and professional advisers, for the purpose of verifying the draw and prize claims.",
              "Government, regulatory or law-enforcement authorities, where required by applicable law, a valid court order or to protect our legal rights.",
              "A successor or transferee in the event of a merger, acquisition or restructuring, provided the recipient agrees to be bound by this Policy.",
              "Service providers who host our website, host our WhatsApp Business API, send emails or provide customer support tooling.",
            ]}
          />
          <p>
            We do not sell, rent or trade personal information to third parties for their own
            marketing purposes. Any third party that processes data on our behalf is bound by
            contractual confidentiality and data-protection obligations.
          </p>
        </>
      ),
    },
    {
      id: "security",
      title: "Data Security & Retention",
      content: (
        <>
          <p>
            We apply administrative, technical and physical safeguards to protect your data,
            including encryption of data in transit, access controls on our systems, role-based
            permissions for our staff, and secure storage of winner KYC documents.
          </p>
          <List
            items={[
              "Booking records are retained for the duration of the Draw and for 3 years thereafter, to meet accounting, tax and dispute-resolution requirements.",
              "KYC documents of winners are retained for 8 years from the date of the Draw, as required under applicable tax and anti-money-laundering rules, and then securely destroyed.",
              "Marketing preferences and support correspondence are retained for 2 years from the last interaction.",
              "Website analytics data is retained in anonymised or aggregated form for 14 months.",
            ]}
          />
          <p>
            No system is 100% secure, but we continuously review and upgrade our safeguards. In the
            unlikely event of a data breach that is likely to result in risk to you, we will notify
            you and the relevant Data Protection Authority without undue delay.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      title: "Cookies & Local Storage",
      content: (
        <>
          <p>
            This website uses cookies and similar technologies (such as local storage and session
            storage) to:
          </p>
          <List
            items={[
              "Remember your preferences and keep you signed in during a booking session.",
              "Understand how visitors use the site so that we can improve the experience.",
              "Measure the effectiveness of our pages and promotional campaigns.",
              "Prevent fraudulent, automated or duplicate bookings.",
            ]}
          />
          <p>
            These are not used to read information from your device, and they do not track you
            across third-party websites for advertising purposes. You can clear or block cookies in
            your browser settings; however, some parts of the booking flow may not function
            correctly if cookies are disabled.
          </p>
        </>
      ),
    },
    {
      id: "your-rights",
      title: "Your Rights & Controls",
      content: (
        <>
          <p>Subject to applicable law, you have the right to:</p>
          <List
            items={[
              "Access and obtain a copy of the personal information we hold about you.",
              "Correct any inaccurate, incomplete or outdated information.",
              "Request erasure of your information, subject to our legal record-keeping obligations.",
              "Withdraw consent for marketing communications at any time.",
              "Nominate another person to exercise your rights in the event of your death or incapacity.",
              "Lodge a complaint with the relevant Data Protection Authority if you believe your rights have been breached.",
              "Request a summary of the processing activities carried out on your data.",
            ]}
          />
          <p>
            To exercise any of these rights, email us at {CONTACT.email} with the subject line
            "Data Rights Request" or send a message on WhatsApp. We will verify your identity before
            acting on the request and will respond within 30 days, or the period prescribed by
            applicable law.
          </p>
        </>
      ),
    },
    {
      id: "child-safety",
      title: "Children's Privacy",
      content: (
        <p>
          The Draw is open only to persons aged 18 or above. We do not knowingly collect personal
          information from children below the age of 18. If you believe a minor has submitted
          information to us, please write to us at {CONTACT.email} and we will delete the relevant
          record after verification.
        </p>
      ),
    },
    {
      id: "changes-policy",
      title: "Changes to this Policy",
      content: (
        <p>
          We may update this Privacy Policy to reflect changes in our practices, technology or the
          law. Material changes will be notified on this page and, where appropriate, by WhatsApp
          message to registered Participants. The "Last updated" date at the top of this page always
          reflects the current version.
        </p>
      ),
    },
    {
      id: "contact-privacy",
      title: "Contact for Privacy Queries",
      content: (
        <>
          <p>Our designated privacy contact person can be reached at:</p>
          <List
            items={[
              `Email: ${CONTACT.email}`,
              `WhatsApp: ${CONTACT.whatsappDisplay}`,
              `Udyam Registration: ${UDYAM.registrationNumber}`,
              `Post: ${LEGAL.registeredOffice}`,
            ]}
          />
          <p className="pt-1">
            We respond to all privacy queries within 7 working days. If you are not satisfied with
            our response, you may escalate the matter to the relevant Data Protection Authority.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro={`Your trust matters to us. This policy explains exactly what information we collect, why we need it, how we protect it, and the choices you have. ${UDYAM.enterpriseName} (Udyam Reg. No. ${UDYAM.registrationNumber}) — आपकी निजता सुरक्षित है, we never sell your data.`}
      lastUpdated={LEGAL.privacyUpdated}
      sections={sections}
      footerNote={
        <p>
          <span className="font-display font-bold text-gold">Quick summary</span> : We collect only
          what the Draw needs (name, address, mobile, PIN and payment reference), we use it only to
          run your booking, we never sell it, and you can ask us to delete it at any time.
        </p>
      }
    />
  );
}