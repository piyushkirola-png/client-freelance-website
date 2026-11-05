import { useSeo } from "@/hooks/useSeo";
import { LegalPage } from "@/components/LegalPage";
import type { LegalSection } from "@/components/LegalPage";
import { CONTACT, DRAW, LEGAL, SITE, UDYAM } from "@/data/siteData";
import { WhatsAppButton } from "@/components/WhatsAppFloat";

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

export default function Refund() {
  useSeo(
    `Refund Policy — ${SITE.name}`,
    `Refund eligibility, request window, processing timeline and the step-by-step process to raise a refund request for your ${SITE.name} ticket.`,
  );

  const sections: LegalSection[] = [
    {
      id: "overview",
      title: "Refund Overview",
      content: (
        <>
          <p>
            {UDYAM.enterpriseName} (Udyam Reg. No. {UDYAM.registrationNumber}), a Micro Enterprise
            registered under the Udyam Registration Scheme of the Government of India ("we", "us" or
            "the Company"), operates the {SITE.name} Draw with the clear intention of honouring
            every legitimate refund request. This Refund Policy explains when a confirmed ticket can
            be refunded, how to request it, and how quickly you will receive your money.
          </p>
          <p>
            Our guiding principle is simple —{" "}
            <span className="font-semibold text-gold">
              if we cannot deliver the draw as promised, you will get your money back.
            </span>
          </p>
        </>
      ),
    },
    {
      id: "eligibility",
      title: "Refund Eligibility",
      content: (
        <>
          <p>A confirmed ticket is eligible for a full refund in the following circumstances:</p>
          <List
            items={[
              "The Draw is cancelled, postponed or rescheduled, and the Participant does not wish to participate in the revised Draw.",
              "The ticket is duplicated by the Company, or a booking is made in error and the Participant has not used the ticket.",
              "The Company is unable to process the Participant's payment correctly, including a double debit, and the amount remains unadjusted for 7 working days.",
              "The Participant raises the request within the request window stated below and the ticket has not yet been drawn, transferred or used.",
              "The ticket is found to be defective, invalid or the Participant was not eligible to participate and the Company has cancelled the booking.",
            ]}
          />
        </>
      ),
    },
    {
      id: "request-window",
      title: "Refund Request Window",
      content: (
        <>
          <p>
            Refund requests must be raised on the official WhatsApp number{" "}
            <strong className="text-gold">{CONTACT.whatsappDisplay}</strong> within{" "}
            <strong className="text-gold">twenty-four (24) hours before the scheduled Draw</strong>,
            i.e. on or before{" "}
            <strong className="text-gold">{DRAW.timeLabel} on 15 November 2026</strong>. Requests
            received after the Draw has commenced, or after a ticket has been drawn, are not eligible
            for a refund because the ticket has already participated in the draw.
          </p>
          <p>
            A refund request is deemed received when the Company issues an acknowledgement on
            WhatsApp. The Company will not accept refund requests communicated only through
            comments, emails to unrelated addresses, or third-party social media messages.
          </p>
        </>
      ),
    },
    {
      id: "non-refundable",
      title: "Non-Refundable Conditions",
      content: (
        <>
          <p>
            The following conditions make a booking non-refundable, as they involve either the
            ticket having been used or the Participant having acted in a manner that compromises
            the fairness of the Draw:
          </p>
          <List
            items={[
              "The ticket has already been drawn, is in the process of being drawn, or the Draw has been completed.",
              "The ticket was transferred to another person, or the confirmation message was forwarded or shared.",
              "The booking was made with a false name, false address, or a mobile number that does not belong to the Participant, or the payment was made from a third-party account.",
              "The ticket was purchased through an unauthorised agent, reseller or fraudulent listing, or the payment was reversed or charged back.",
              "The booking was made in breach of the per-Participant limit, or shows signs of automated, duplicate or bulk booking.",
              "The refund is requested after the expiry of the 24-hour request window, or the Participant fails to provide the ticket number and registered mobile number when asked.",
              "The Participant has already claimed a prize, or has been found guilty of tampering with the ticketing process.",
            ]}
          />
        </>
      ),
    },
    {
      id: "process",
      title: "How To Raise A Refund Request",
      content: (
        <>
          <p>Requesting a refund takes less than five minutes. Please follow these steps:</p>
          <List
            items={[
              `Send a WhatsApp message to ${CONTACT.whatsappDisplay} stating that you wish to cancel your ${SITE.name} ticket and request a refund.`,
              "Include your full name, registered mobile number, ticket number / booking reference, the number of tokens purchased, the amount paid, and the date of payment.",
              "If the payment was made by UPI, share the UPI transaction reference (UTR). For bank transfers, share the NEFT/IMPS reference number.",
              "Wait for the acknowledgement from our team. We will verify the booking against our records and confirm the refund amount.",
              "Once confirmed, the refund is initiated to the same source from which the payment was received. Bank transfer refunds generally take 2–3 working days to reflect; card and UPI refunds take 5–7 working days.",
            ]}
          />
          <p>
            You may also email your request to{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-semibold text-gold underline underline-offset-2 break-all"
            >
              {CONTACT.email}
            </a>{" "}
            with the subject line "Refund Request — Diwali Bumper 2026". A WhatsApp request is
            preferred as it is processed fastest.
          </p>
        </>
      ),
    },
    {
      id: "timeline",
      title: "Refund Processing Timeline",
      content: (
        <>
          <List
            items={[
              "Acknowledgement of the request: within 12 working hours of receiving the request.",
              "Verification of the booking: within 3 working days of the acknowledgement.",
              "Approval and initiation of the refund: within 3 working days of verification.",
              "Total processing time: 7 to 10 business days from the date of approval.",
              "Credit reflected in the participant's bank account or UPI handle: typically 2 to 5 working days after the refund is initiated, depending on the issuing bank.",
            ]}
          />
          <p>
            No processing fee is deducted from any eligible refund. The refunded amount is the exact
            amount received by the Company for the cancelled ticket(s).
          </p>
        </>
      ),
    },
    {
      id: "cancellation",
      title: "Cancellation & Postponement Policy",
      content: (
        <>
          <List
            items={[
              "If the Draw is cancelled before the draw date, all Participants will be informed on WhatsApp and on the website, and full refunds will be initiated within 10 business days without requiring a separate request.",
              "If the Draw is postponed to a revised date, all existing tickets remain valid for the revised date. A Participant who does not wish to continue may request a full refund within 48 hours of the postponement announcement.",
              "If the Draw is rescheduled due to force majeure, the Company will use all reasonable endeavours to publish the revised date within 24 hours of the disruption.",
              "Company-level suspension of the website or payment gateway for maintenance does not, by itself, entitle a Participant to a refund, provided the booking window remains open within a reasonable period.",
            ]}
          />
        </>
      ),
    },
    {
      id: "dispute",
      title: "Dispute Resolution & Escalation",
      content: (
        <>
          <p>
            If you are not satisfied with the outcome of your refund request, please escalate in the
            following order:
          </p>
          <List
            items={[
              "WhatsApp our support team and reference your original request message.",
              "Email your refund reference number to " + CONTACT.email + " with a written explanation.",
              "Write to the Grievance Officer at the registered office: " + LEGAL.registeredOffice + ` (Udyam: ${UDYAM.registrationNumber}).`,
            ]}
          />
          <p>
            All refund disputes are subject to the governing law and jurisdiction specified in our{" "}
            <a href="/terms" className="font-semibold text-gold underline underline-offset-2">
              Terms &amp; Conditions
            </a>
            .
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <LegalPage
        eyebrow="Legal"
        title="Refund Policy"
        intro={`We keep our promises. This page explains exactly when you can get your money back, how to ask, and how long it takes. ${UDYAM.enterpriseName} (Udyam Reg. No. ${UDYAM.registrationNumber}) — स्पष्ट नियम, कोई छिपी बात नहीं, no hidden clauses.`}
        lastUpdated={LEGAL.refundUpdated}
        sections={sections}
        footerNote={
          <div className="flex flex-col items-center gap-4 text-center">
            <p>
              <span className="font-display font-bold text-gold">Need a refund right now?</span>{" "}
              Send us your ticket number on WhatsApp and we will take it from there.
            </p>
            <WhatsAppButton
              message={`Hi, I would like to raise a refund request for my ${SITE.name} ticket. My ticket number and details are below:`}
              label="Raise Refund Request"
            />
          </div>
        }
      />
    </>
  );
}