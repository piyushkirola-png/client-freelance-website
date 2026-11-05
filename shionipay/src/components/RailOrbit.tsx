import { Zap } from "lucide-react";
import { paymentRailItems } from "../data/railArt";
import { BrandLogo, type BrandKey } from "./BrandLogo";

const innerLogos: BrandKey[] = ["visa", "mastercard", "googlepay", "phonepe", "paytm"];

/** Position on a circle, expressed in % of the square container. */
const pos = (i: number, n: number, r: number, offset = -90) => {
  const a = ((360 / n) * i + offset) * (Math.PI / 180);
  return { left: `${50 + Math.cos(a) * r}%`, top: `${50 + Math.sin(a) * r}%` };
};

/**
 * Two counter-rotating rings around a lime hub.
 * Outer ring: payment-rail cards. Inner ring: wallet / card-network logos.
 * Items counter-spin so they always stay upright. Hover pauses everything.
 */
export default function RailOrbit() {
  return (
    <div className="orbit-wrap relative mx-auto aspect-square w-full max-w-[34rem]" aria-label="ShioniPay connects every payment rail">
      {/* tracks */}
      <div className="absolute inset-[8%] rounded-full border border-white/15" />
      <div className="absolute inset-[8%] rounded-full border-t-2 border-brand/70 orbit-cw [animation-duration:9s]" />
      <div className="absolute inset-[29%] rounded-full border border-dashed border-white/20" />
      <div className="absolute inset-[40%] rounded-full bg-[radial-gradient(closest-side,rgba(200,240,74,.35),transparent)] blur-2xl" />

      {/* outer ring: rail cards */}
      <div className="absolute inset-0 orbit-cw [animation-duration:60s]">
        {paymentRailItems.map((it, i) => (
          <div key={it.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={pos(i, paymentRailItems.length, 40)}>
            <div className="orbit-ccw [animation-duration:60s]">
              <img
                src={it.src} alt={it.alt} draggable={false}
                className="w-[78px] sm:w-[112px] select-none rounded-xl border-[1.5px] border-ink shadow-[3px_3px_0_#C8F04A] transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      {/* inner ring: brand chips */}
      <div className="absolute inset-0 orbit-ccw [animation-duration:38s]">
        {innerLogos.map((k, i) => (
          <div key={k} className="absolute -translate-x-1/2 -translate-y-1/2" style={pos(i, innerLogos.length, 21, -54)}>
            <div className="orbit-cw [animation-duration:38s]">
              <span className="grid place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-[1.5px] border-ink shadow-[2px_2px_0_#0E1B14]">
                <BrandLogo name={k} className="w-5 h-5 sm:w-6 sm:h-6" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="ripple absolute inset-0 rounded-2xl border-2 border-brand" />
        <span className="ripple absolute inset-0 rounded-2xl border-2 border-brand [animation-delay:1.2s]" />
        <span className="relative grid place-items-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand border-[1.5px] border-ink rotate-6">
          <Zap className="w-8 h-8 sm:w-9 sm:h-9 fill-ink text-ink -rotate-6" />
        </span>
      </div>
    </div>
  );
}
