import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import {
  CheckCircle2,
  MapPin,
  Phone,
  Send,
  User,
  Wallet,
  Hash,
  Ticket as TicketIcon,
  AlertCircle,
} from "lucide-react";
import { TOKEN_PACKS, CONTACT, SITE, waLink } from "@/data/siteData";

/* ----------------------------------------------------------------------------
 * Form state + validation
 * -------------------------------------------------------------------------- */
interface FormState {
  name: string;
  address: string;
  mobile: string;
  pin: string;
  tokens: string;
  payment: string;
  note: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = {
  name: "",
  address: "",
  mobile: "",
  pin: "",
  tokens: "pack-1",
  payment: "upi",
  note: "",
};

const PAYMENT_OPTIONS = [
  { value: "upi", label: "UPI / Google Pay / PhonePe" },
  { value: "bank", label: "Bank Transfer (NEFT / IMPS / RTGS)" },
  { value: "wallet", label: "Paytm / Other Wallet" },
  { value: "cash", label: "Cash at partner counter" },
];

function validate(form: FormState): Errors {
  const errors: Errors = {};

  if (form.name.trim().length < 3) errors.name = "Please enter your full name.";
  if (form.address.trim().length < 10)
    errors.address = "Please enter your complete address (min 10 characters).";
  if (!/^[6-9]\d{9}$/.test(form.mobile.trim()))
    errors.mobile = "Enter a valid 10-digit Indian mobile number.";
  if (!/^\d{6}$/.test(form.pin.trim())) errors.pin = "Enter a valid 6-digit PIN code.";
  if (!form.tokens) errors.tokens = "Please choose a token quantity.";

  return errors;
}

/** Builds the prefilled WhatsApp message with every booking detail. */
function buildMessage(form: FormState, reference: string): string {
  const pack = TOKEN_PACKS.find((p) => p.id === form.tokens);
  const paymentLabel =
    PAYMENT_OPTIONS.find((p) => p.value === form.payment)?.label ?? form.payment;

  return [
    `*${SITE.name} — Ticket Booking Request*`,
    ``,
    `Booking Ref: ${reference}`,
    `Full Name: ${form.name.trim()}`,
    `Full Address: ${form.address.trim()}`,
    `Mobile Number: +91 ${form.mobile.trim()}`,
    `PIN Code: ${form.pin.trim()}`,
    `Tokens: ${pack?.tokens ?? 1} (₹${pack?.price.toLocaleString("en-IN") ?? 0})`,
    `Preferred Payment: ${paymentLabel}`,
    form.note.trim() ? `Note: ${form.note.trim()}` : "",
    ``,
    `कृपया मेरी टिकट की पुष्टि करें। — Please confirm my ticket.`,
  ]
    .filter(Boolean)
    .join("\n");
}

/* ----------------------------------------------------------------------------
 * BookingForm
 * -------------------------------------------------------------------------- */
export function BookingForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");

  const selectedPack = useMemo(
    () => TOKEN_PACKS.find((p) => p.id === form.tokens) ?? TOKEN_PACKS[0],
    [form.tokens],
  );

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    // Clear the field error as soon as the user starts typing
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(form);

    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }

    // Mock ticket reference (a real build would return this from the backend)
    const ref = `DB26-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    setReference(ref);
    setSubmitted(true);
  };

  const reset = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
    setReference("");
  };

  /* ------------------------- Success state ------------------------- */
  if (submitted) {
    return (
      <div className="glass-card gold-border rounded-3xl p-7 text-center sm:p-10">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-500/15 text-4xl">
          <CheckCircle2 className="h-11 w-11 text-emerald-400" />
        </div>

        <h3 className="mt-6 font-display text-2xl font-extrabold text-gold-gradient sm:text-3xl">
          Booking request sent!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-cream/70">
          We&apos;ll contact you on WhatsApp shortly with your ticket confirmation and payment
          details. धन्यवाद — thank you for choosing {SITE.name}! 🎉
        </p>

        <div className="mx-auto mt-6 max-w-sm rounded-2xl border border-gold/25 bg-gold/[0.07] p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-cream/50">Booking Reference</p>
          <p className="mt-1 font-display text-2xl font-bold tracking-widest text-gold">
            {reference}
          </p>
          <p className="mt-3 text-sm text-cream/65">
            {selectedPack.tokens} Token{selectedPack.tokens > 1 ? "s" : ""} •{" "}
            {form.name.trim()}
          </p>
        </div>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={waLink(buildMessage(form, reference))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3 font-display font-bold sm:w-auto"
          >
            <Send className="h-4 w-4" />
            Send Booking on WhatsApp
          </a>
          <button
            type="button"
            onClick={reset}
            className="btn-ghost w-full rounded-full px-7 py-3 font-display font-semibold sm:w-auto"
          >
            Book Another Ticket
          </button>
        </div>

        <p className="mt-6 text-xs text-cream/45">
          For urgent help call us on{" "}
          <a href={`tel:${CONTACT.phone}`} className="text-gold hover:underline">
            {CONTACT.phone}
          </a>
        </p>
      </div>
    );
  }

  /* --------------------------- Form state -------------------------- */
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="glass-card gold-border rounded-3xl p-6 sm:p-9"
    >
      <div className="mb-7 text-center">
        <span className="text-3xl">🎫</span>
        <h3 className="mt-2 font-display text-2xl font-extrabold text-gold-gradient sm:text-3xl">
          Book Your Ticket
        </h3>
        <p className="mt-2 text-sm text-cream/60">
          Fill in your details — it takes less than 60 seconds.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Full Name */}
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-cream/85">
            Full Name <span className="text-ember">*</span>
          </label>
          <div className="relative">
            <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/60" />
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="e.g. Rajesh Kumar Sharma"
              className={`w-full rounded-xl border bg-night/60 py-3 pl-11 pr-4 text-sm text-cream placeholder:text-cream/35 transition-colors focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-400/70 focus:border-red-400 focus:ring-red-400/30"
                  : "border-gold/25 focus:border-gold focus:ring-gold/30"
              }`}
            />
          </div>
          {errors.name && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300">
              <AlertCircle className="h-3.5 w-3.5" /> {errors.name}
            </p>
          )}
        </div>

        {/* Full Address */}
        <div className="sm:col-span-2">
          <label htmlFor="address" className="mb-1.5 block text-sm font-semibold text-cream/85">
            Full Address <span className="text-ember">*</span>
          </label>
          <div className="relative">
            <MapPin className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-gold/60" />
            <textarea
              id="address"
              rows={3}
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              placeholder="House / Flat No., Street, Landmark, City, State"
              className={`w-full resize-none rounded-xl border bg-night/60 py-3 pl-11 pr-4 text-sm text-cream placeholder:text-cream/35 transition-colors focus:outline-none focus:ring-2 ${
                errors.address
                  ? "border-red-400/70 focus:border-red-400 focus:ring-red-400/30"
                  : "border-gold/25 focus:border-gold focus:ring-gold/30"
              }`}
            />
          </div>
          {errors.address && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300">
              <AlertCircle className="h-3.5 w-3.5" /> {errors.address}
            </p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <label htmlFor="mobile" className="mb-1.5 block text-sm font-semibold text-cream/85">
            Mobile Number <span className="text-ember">*</span>
          </label>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/60" />
            <span className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-sm text-cream/45">
              +91
            </span>
            <input
              id="mobile"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={form.mobile}
              onChange={(e) => update("mobile", e.target.value.replace(/\D/g, ""))}
              placeholder="98765 43210"
              className={`w-full rounded-xl border bg-night/60 py-3 pl-[4.25rem] pr-4 text-sm text-cream placeholder:text-cream/35 transition-colors focus:outline-none focus:ring-2 ${
                errors.mobile
                  ? "border-red-400/70 focus:border-red-400 focus:ring-red-400/30"
                  : "border-gold/25 focus:border-gold focus:ring-gold/30"
              }`}
            />
          </div>
          {errors.mobile && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300">
              <AlertCircle className="h-3.5 w-3.5" /> {errors.mobile}
            </p>
          )}
        </div>

        {/* PIN Code */}
        <div>
          <label htmlFor="pin" className="mb-1.5 block text-sm font-semibold text-cream/85">
            PIN Code <span className="text-ember">*</span>
          </label>
          <div className="relative">
            <Hash className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/60" />
            <input
              id="pin"
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={form.pin}
              onChange={(e) => update("pin", e.target.value.replace(/\D/g, ""))}
              placeholder="452001"
              className={`w-full rounded-xl border bg-night/60 py-3 pl-11 pr-4 text-sm text-cream placeholder:text-cream/35 transition-colors focus:outline-none focus:ring-2 ${
                errors.pin
                  ? "border-red-400/70 focus:border-red-400 focus:ring-red-400/30"
                  : "border-gold/25 focus:border-gold focus:ring-gold/30"
              }`}
            />
          </div>
          {errors.pin && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300">
              <AlertCircle className="h-3.5 w-3.5" /> {errors.pin}
            </p>
          )}
        </div>

        {/* Token Quantity */}
        <div>
          <label htmlFor="tokens" className="mb-1.5 block text-sm font-semibold text-cream/85">
            Token Quantity <span className="text-ember">*</span>
          </label>
          <div className="relative">
            <TicketIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/60" />
            <select
              id="tokens"
              value={form.tokens}
              onChange={(e) => update("tokens", e.target.value)}
              className="w-full appearance-none rounded-xl border border-gold/25 bg-night/60 py-3 pl-11 pr-10 text-sm text-cream transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            >
              {TOKEN_PACKS.map((pack) => (
                <option key={pack.id} value={pack.id} className="bg-night">
                  {pack.tokens} Token{pack.tokens > 1 ? "s" : ""} — ₹
                  {pack.price.toLocaleString("en-IN")}
                  {pack.save ? ` (Save ₹${pack.save})` : ""}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gold/60">
              ▾
            </span>
          </div>
        </div>

        {/* Preferred Payment */}
        <div>
          <label htmlFor="payment" className="mb-1.5 block text-sm font-semibold text-cream/85">
            Preferred Payment
          </label>
          <div className="relative">
            <Wallet className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/60" />
            <select
              id="payment"
              value={form.payment}
              onChange={(e) => update("payment", e.target.value)}
              className="w-full appearance-none rounded-xl border border-gold/25 bg-night/60 py-3 pl-11 pr-10 text-sm text-cream transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            >
              {PAYMENT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value} className="bg-night">
                  {option.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gold/60">
              ▾
            </span>
          </div>
        </div>

        {/* Note */}
        <div className="sm:col-span-2">
          <label htmlFor="note" className="mb-1.5 block text-sm font-semibold text-cream/85">
            Note for Us <span className="text-cream/40">(optional)</span>
          </label>
          <textarea
            id="note"
            rows={2}
            value={form.note}
            onChange={(e) => update("note", e.target.value)}
            placeholder="Any special instruction, e.g. preferred draw city or festival occasion"
            className="w-full resize-none rounded-xl border border-gold/25 bg-night/60 px-4 py-3 text-sm text-cream placeholder:text-cream/35 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>
      </div>

      {/* Summary + submit */}
      <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-gold/20 bg-gold/[0.06] p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cream/50">Amount Payable</p>
          <p className="font-display text-2xl font-extrabold text-gold">
            ₹{selectedPack.price.toLocaleString("en-IN")}
          </p>
          <p className="text-xs text-cream/50">
            {selectedPack.tokens} Token{selectedPack.tokens > 1 ? "s" : ""} •{" "}
            {selectedPack.note}
          </p>
        </div>
        <p className="text-xs leading-relaxed text-cream/55 sm:max-w-xs sm:text-right">
          This is a promotional lucky draw. Please read the{" "}
          <span className="text-gold">Terms &amp; Conditions</span> before booking.
        </p>
      </div>

      <button
        type="submit"
        className="btn-gold mt-6 flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-display text-base font-bold"
      >
        <Send className="h-5 w-5" />
        Send Booking on WhatsApp
      </button>

      <p className="mt-3 text-center text-xs text-cream/45">
        No online payment is captured on this page — you will receive a secure payment link on
        WhatsApp.
      </p>
    </form>
  );
}
