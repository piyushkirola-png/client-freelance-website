import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, GitBranch, Activity, Workflow, PieChart, ChevronRight, CircleCheck } from "lucide-react";
import { Reveal } from "./ui";

type Feature = {
  icon: typeof LayoutDashboard;
  title: string;
  short: string;
  desc: string;
  points: string[];
  cta: { label: string; to: string };
  chart: { title: string; badge: string; a: number[]; b: number[]; aLabel: string; bLabel: string };
  split: { label: string; value: number; color: string }[];
};

const features: Feature[] = [
  {
    icon: LayoutDashboard, title: "Unified Dashboard", short: "All your payment data, in one place.",
    desc: "Manage every transaction, provider integration and settlement metric from a single, intuitive operations dashboard.",
    points: ["View all transactions and live status updates in real time", "Monitor success rates, refunds and chargeback benchmarks", "Centralise settlements across every bank account", "Custom filters, saved views and bulk Excel/CSV exports"],
    cta: { label: "Explore the Platform", to: "/platform" },
    chart: { title: "Weekly Transaction Volume", badge: "+14% Growth", a: [42, 55, 51, 62, 58, 70, 66], b: [22, 25, 24, 23, 28, 27, 25], aLabel: "Successful", bLabel: "Retried" },
    split: [{ label: "Success", value: 92, color: "#1F6646" }, { label: "Pending", value: 4, color: "#E9B949" }, { label: "Failed", value: 4, color: "#A64B27" }],
  },
  {
    icon: GitBranch, title: "Multiple Provider Access", short: "Connect with top acquirers instantly.",
    desc: "Plug into multiple acquirers, banks and payment methods through one integration and switch between them without code changes.",
    points: ["Single API for UPI, IMPS, NEFT, RTGS, BBPS and cards", "Add or remove providers from the dashboard", "Automatic failover when a provider degrades", "Unified reporting across every connection"],
    cta: { label: "View Payment Gateway", to: "/products/payment-orchestration" },
    chart: { title: "Provider Success Rate", badge: "+8% Uplift", a: [88, 90, 89, 92, 93, 94, 95], b: [84, 83, 85, 84, 86, 85, 86], aLabel: "With routing", bLabel: "Single provider" },
    split: [{ label: "UPI", value: 58, color: "#1F6646" }, { label: "Cards", value: 24, color: "#8DB31A" }, { label: "Net banking", value: 18, color: "#E9B949" }],
  },
  {
    icon: Activity, title: "Real-time Monitoring", short: "Track every payment in real time.",
    desc: "Follow each payment from authorisation to settlement with live status, latency metrics and instant alerts on anomalies.",
    points: ["Live transaction stream with sub-second updates", "Latency and uptime metrics for every rail", "Alerts via email, Slack and webhooks", "Drill down from any metric to the transaction"],
    cta: { label: "Open Developer Hub", to: "/developers" },
    chart: { title: "Average Response Time (ms)", badge: "<50ms", a: [48, 44, 46, 41, 43, 39, 40], b: [72, 70, 74, 69, 71, 68, 70], aLabel: "ShioniPay", bLabel: "Industry avg." },
    split: [{ label: "Settled", value: 81, color: "#1F6646" }, { label: "In transit", value: 15, color: "#E9B949" }, { label: "On hold", value: 4, color: "#A64B27" }],
  },
  {
    icon: Workflow, title: "Automated Workflows", short: "Save time with smart automation.",
    desc: "Automate reconciliation, payouts, refunds and escrow releases with rule-based workflows and maker-checker approvals.",
    points: ["Auto-reconcile settlements against transactions", "Schedule bulk payouts with approval rules", "Trigger refunds and escrow releases via API", "Complete audit trail for every action"],
    cta: { label: "View ShioniNXT", to: "/products/shioninxt" },
    chart: { title: "Manual Tasks per Week", badge: "-80% Effort", a: [60, 48, 37, 28, 20, 15, 12], b: [62, 61, 63, 60, 62, 61, 63], aLabel: "Automated", bLabel: "Before" },
    split: [{ label: "Auto-matched", value: 95, color: "#1F6646" }, { label: "Review", value: 4, color: "#E9B949" }, { label: "Exception", value: 1, color: "#A64B27" }],
  },
  {
    icon: PieChart, title: "Smart Analytics & Reporting", short: "Make data-driven payment decisions.",
    desc: "Understand revenue, payment mix and customer behaviour with ready-made reports and fully exportable data.",
    points: ["Revenue and payment-mix trends by channel", "Cohort, geography and device breakdowns", "Scheduled reports delivered to your inbox", "Export to CSV, Excel or your data warehouse"],
    cta: { label: "Talk to our team", to: "/contact" },
    chart: { title: "Monthly Revenue (₹ Cr)", badge: "+22% YoY", a: [30, 34, 33, 38, 41, 45, 49], b: [26, 27, 29, 30, 31, 33, 34], aLabel: "This year", bLabel: "Last year" },
    split: [{ label: "Online", value: 54, color: "#1F6646" }, { label: "In-store", value: 31, color: "#8DB31A" }, { label: "Links", value: 15, color: "#E9B949" }],
  },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function LineChart({ a, b }: { a: number[]; b: number[] }) {
  const all = [...a, ...b];
  const min = Math.min(...all) - 6, max = Math.max(...all) + 6;
  const W = 300, H = 110;
  const pts = (arr: number[]) => arr.map((v, i) => `${(i / (arr.length - 1)) * W},${H - ((v - min) / (max - min)) * H}`).join(" ");
  const area = `0,${H} ${pts(a)} ${W},${H}`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-28 overflow-visible" preserveAspectRatio="none">
      {[0.25, 0.5, 0.75].map((g) => <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="#000" strokeOpacity=".06" />)}
      <polygon points={area} fill="#1F6646" fillOpacity=".08" />
      <polyline points={pts(b)} fill="none" stroke="#E9B949" strokeWidth="2" strokeLinejoin="round" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
      <polyline points={pts(a)} fill="none" stroke="#1F6646" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" className="[stroke-dasharray:1000] [stroke-dashoffset:1000] animate-[draw_1.2s_ease_forwards]" />
    </svg>
  );
}

function Donut({ split }: { split: Feature["split"] }) {
  const r = 38, c = 2 * Math.PI * r;
  let off = 0;
  return (
    <svg viewBox="0 0 100 100" className="w-28 h-28 -rotate-90 shrink-0">
      {split.map((s) => {
        const len = (s.value / 100) * c;
        const el = <circle key={s.label} cx="50" cy="50" r={r} fill="none" stroke={s.color} strokeWidth="16" strokeDasharray={`${len} ${c - len}`} strokeDashoffset={-off} />;
        off += len;
        return el;
      })}
    </svg>
  );
}

export default function FintechFeatures() {
  const [idx, setIdx] = useState(0);
  const f = features[idx];

  return (
    <section className="wash-blush border-y border-line py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="rounded-3xl border-[1.5px] border-ink bg-white p-5 sm:p-8 md:p-10 shadow-[8px_8px_0_#0E1B14]">
          <div className="text-center max-w-2xl mx-auto">
            <p className="inline-flex rounded-full bg-ink px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">Platform Capabilities</p>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-[42px] leading-tight tracking-tight text-fg">
              Powerful features. Built for <span className="text-gradient">modern fintech.</span>
            </h2>
            <p className="mt-4 text-sub leading-relaxed">Everything you need to accept payments faster, scale across every rail, and deliver an exceptional payment experience to your customers.</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.15fr_1.15fr]">
            {/* Tabs */}
            <div className="rounded-2xl border border-line overflow-hidden flex lg:flex-col overflow-x-auto lg:overflow-visible" role="tablist">
              {features.map((ft, i) => {
                const on = i === idx;
                const c = [
                  { on: "bg-gradient-to-r from-pink-50 to-orange-50/40", box: "bg-gradient-to-br from-pink-500 to-orange-400 text-white shadow-md shadow-pink-500/30", off: "bg-pink-50 text-pink-600", chev: "text-pink-600", edge: "bg-gradient-to-b from-pink-500 to-orange-400" },
                  { on: "bg-gradient-to-r from-teal-50 to-emerald-50/40", box: "bg-gradient-to-br from-teal-400 to-emerald-600 text-white shadow-md shadow-teal-500/30", off: "bg-teal-50 text-teal-700", chev: "text-teal-700", edge: "bg-gradient-to-b from-teal-400 to-emerald-600" },
                  { on: "bg-gradient-to-r from-amber-50 to-orange-50/40", box: "bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md shadow-amber-500/30", off: "bg-amber-50 text-amber-700", chev: "text-amber-700", edge: "bg-gradient-to-b from-amber-400 to-orange-500" },
                  { on: "bg-gradient-to-r from-neutral-100 to-neutral-50/40", box: "bg-gradient-to-br from-neutral-600 to-neutral-900 text-white shadow-md shadow-black/25", off: "bg-neutral-100 text-neutral-800", chev: "text-neutral-800", edge: "bg-gradient-to-b from-neutral-600 to-neutral-900" },
                  { on: "bg-gradient-to-r from-lime-50 to-emerald-50/40", box: "bg-gradient-to-br from-lime-400 to-emerald-600 text-white shadow-md shadow-lime-500/30", off: "bg-lime-50 text-lime-700", chev: "text-lime-700", edge: "bg-gradient-to-b from-lime-400 to-emerald-600" },
                ][i];
                return (
                  <button key={ft.title} role="tab" aria-selected={on} onClick={() => setIdx(i)}
                    className={`group relative shrink-0 w-64 lg:w-auto flex items-start gap-3 p-4 text-left transition-colors border-line ${i > 0 ? "border-l lg:border-l-0 lg:border-t" : ""} ${on ? c.on : "hover:bg-soft"}`}>
                    {on && <span className={`absolute left-0 top-0 bottom-0 w-1 ${c.edge}`} />}
                    <span className={`grid place-items-center w-9 h-9 shrink-0 rounded-lg transition-colors ${on ? c.box : c.off}`}><ft.icon className="w-4 h-4" /></span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-semibold text-fg">{ft.title}</span>
                      <span className="block mt-0.5 text-xs text-sub leading-snug">{ft.short}</span>
                    </span>
                    <ChevronRight className={`hidden lg:block w-4 h-4 mt-1 shrink-0 transition-all ${on ? `${c.chev} translate-x-0.5` : "text-sub/50"}`} />
                  </button>
                );
              })}
            </div>

            {/* Detail */}
            <div key={`d${idx}`} className="drop-in rounded-2xl border border-line p-6 flex flex-col">
              <div className="flex items-center gap-3">
                <span className={`grid place-items-center w-9 h-9 rounded-lg text-white text-sm font-bold ${["bg-gradient-to-br from-pink-500 to-orange-400", "bg-gradient-to-br from-teal-400 to-emerald-600", "bg-gradient-to-br from-amber-400 to-orange-500", "bg-gradient-to-br from-neutral-600 to-neutral-900", "bg-gradient-to-br from-lime-400 to-emerald-600"][idx]}`}>0{idx + 1}</span>
                <h3 className="font-display font-semibold text-lg text-fg">{f.title}</h3>
              </div>
              <p className="mt-5 text-sm text-sub leading-relaxed">{f.desc}</p>
              <ul className="mt-5 space-y-3.5 flex-1">
                {f.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-fg/80 leading-snug"><CircleCheck className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600" />{p}</li>
                ))}
              </ul>
              <Link to={f.cta.to} className="group mt-7 self-start inline-flex items-center gap-1.5 rounded-lg btn-grad px-5 py-2.5 text-sm font-semibold">
                {f.cta.label} <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Charts */}
            <div key={`c${idx}`} className="drop-in rounded-2xl border border-line p-4 flex flex-col gap-4">
              <div className="rounded-xl border border-line p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-fg">{f.chart.title}</p>
                  <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 whitespace-nowrap">{f.chart.badge}</span>
                </div>
                <div className="mt-4"><LineChart a={f.chart.a} b={f.chart.b} /></div>
                <div className="mt-2 flex justify-between text-[10px] text-sub">{days.map((d) => <span key={d}>{d}</span>)}</div>
                <div className="mt-3 flex gap-4 text-[11px] text-sub">
                  <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-emerald-600" />{f.chart.aLabel}</span>
                  <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 border-t-2 border-dashed border-amber-500" />{f.chart.bLabel}</span>
                </div>
              </div>
              <div className="rounded-xl border border-line p-4 flex items-center gap-5">
                <Donut split={f.split} />
                <ul className="flex-1 space-y-2">
                  {f.split.map((s) => (
                    <li key={s.label} className="flex items-center gap-2 text-xs text-sub">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                      <span className="flex-1">{s.label}</span>
                      <span className="font-semibold text-fg">{s.value}%</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/developers" className="group mt-auto self-end inline-flex items-center gap-1 px-1 py-1 text-sm font-semibold text-fg hover:text-teal-600 transition-colors">
                Open Merchant Dashboard <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
