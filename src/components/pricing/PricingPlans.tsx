"use client";
import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { usePricing, formatPrice } from "@/lib/usePricing";
import { FREE_SUMMARY, PRO_SUMMARY } from "@/lib/planFeatures";
import HeritageBookCover from "./HeritageBookCover";

export const P = {
  sindoor: "#D6246E", sindoorDeep: "#B0175A", ink: "#1C1733", haldi: "#FFB224",
  tulsi: "#0F7A73", tulsiLight: "#E3F4F2", paper: "#F8F6FC", line: "#E6E1F0",
  text: "#1C1733", muted: "#625C7A", white: "#fff",
};
export const PF = { serif: "'Bricolage Grotesque',system-ui,sans-serif", sans: "'Inter',system-ui,sans-serif" };

type Props = {
  /** Where the Pro button goes. Marketing pages send people to /upgrade. */
  proHref?: (billing: "monthly" | "yearly") => string;
  freeHref?: string;
  freeLabel?: string;
  familyName?: string;
};

export function useBillingMath(billing: "monthly" | "yearly") {
  const { pricing, loading } = usePricing();
  const saving = Math.max(0, Math.round(pricing.monthly * 12 - pricing.yearly));
  const monthsFree = pricing.monthly > 0 ? Math.floor(saving / pricing.monthly) : 0;
  const perDay = pricing.yearly / 365;
  // "₹1.3 a day" lands; "$0.05 a day" doesn't — use a monthly figure for small currencies.
  const perDayText = perDay >= 1
    ? `${pricing.symbol}${perDay.toFixed(1).replace(/\.0$/, "")} a day`
    : `${pricing.symbol}${(pricing.yearly / 12).toFixed(2).replace(/\.00$/, "")} a month`;
  const headline = billing === "yearly" ? pricing.yearly : pricing.monthly;
  return { pricing, loading, saving, monthsFree, perDayText, headline };
}

export function BillingToggle({ billing, setBilling, monthsFree }: { billing: "monthly" | "yearly"; setBilling: (b: "monthly" | "yearly") => void; monthsFree: number }) {
  return (
    <div role="radiogroup" aria-label="Billing period" style={{ display: "inline-flex", background: P.white, border: `1px solid ${P.line}`, borderRadius: 999, padding: 4, gap: 2 }}>
      {(["yearly", "monthly"] as const).map(b => {
        const on = billing === b;
        return (
          <button key={b} role="radio" aria-checked={on} onClick={() => setBilling(b)}
            style={{ border: "none", cursor: "pointer", borderRadius: 999, padding: "9px 18px", fontFamily: PF.sans, fontSize: 14, fontWeight: 600, background: on ? P.ink : "transparent", color: on ? "#fff" : P.muted, display: "inline-flex", alignItems: "center", gap: 8 }}>
            {b === "yearly" ? "Yearly" : "Monthly"}
            {b === "yearly" && monthsFree > 0 && (
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999, background: on ? P.haldi : P.tulsiLight, color: on ? P.ink : P.tulsi }}>
                {monthsFree} months free
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default function PricingPlans({ proHref = b => `/upgrade?billing=${b}`, freeHref = "/auth/signup", freeLabel = "Start free", familyName }: Props) {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const { pricing, loading, saving, monthsFree, perDayText, headline } = useBillingMath(billing);
  const viaRazorpay = !!pricing.charge;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
        <BillingToggle billing={billing} setBilling={setBilling} monthsFree={monthsFree} />
      </div>

      <div className="pp-grid">
        {/* Free */}
        <div style={{ background: P.white, border: `1px solid ${P.line}`, borderRadius: 18, padding: "28px 26px", display: "flex", flexDirection: "column" }}>
          <h3 style={{ fontFamily: PF.sans, fontSize: 16, fontWeight: 700, color: P.text, margin: 0 }}>Free</h3>
          <p style={{ fontSize: 14, color: P.muted, margin: "6px 0 18px", lineHeight: 1.55 }}>Start saving your family&apos;s traditions today.</p>
          <p style={{ margin: "0 0 22px", display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontFamily: PF.serif, fontSize: 44, fontWeight: 700, color: P.text, lineHeight: 1 }}>{pricing.symbol}0</span>
            <span style={{ fontSize: 14, color: P.muted }}>forever</span>
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "grid", gap: 10, flex: 1, alignContent: "start" }}>
            {FREE_SUMMARY.map(f => (
              <li key={f} style={{ display: "flex", gap: 10, fontSize: 14, color: P.text, lineHeight: 1.45 }}>
                <Check size={16} color={P.tulsi} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />{f}
              </li>
            ))}
          </ul>
          <Link href={freeHref} className="pp-btn-secondary">{freeLabel}</Link>
        </div>

        {/* Pro */}
        <div style={{ background: P.ink, borderRadius: 18, padding: "28px 26px", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", boxShadow: "0 24px 60px -24px rgba(42,24,16,0.55)" }}>
          <div className="pp-pro-book"><HeritageBookCover familyName={familyName} width={118} /></div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <h3 style={{ fontFamily: PF.sans, fontSize: 16, fontWeight: 700, color: "#fff", margin: 0 }}>Pro</h3>
            <span style={{ fontSize: 12, fontWeight: 700, color: P.ink, background: P.haldi, padding: "3px 10px", borderRadius: 999 }}>Recommended</span>
          </div>
          <p className="pp-pro-copy" style={{ fontSize: 14, color: "rgba(255,255,255,0.72)", margin: "6px 0 18px", lineHeight: 1.55 }}>
            Turn what you&apos;ve saved into a Heritage Book, and get help with every ritual.
          </p>
          <div className="pp-pro-copy" style={{ minHeight: 78, marginBottom: 18 }}>
            {loading ? <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Loading price…</p> : (
              <>
                <p style={{ margin: 0, display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: PF.serif, fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1 }}>{formatPrice(headline, pricing)}</span>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}>{billing === "yearly" ? "/ year" : "/ month"}</span>
                </p>
                <p style={{ fontSize: 14, color: P.haldi, margin: "8px 0 0", fontWeight: 600 }}>
                  {billing === "yearly"
                    ? `About ${perDayText} · you save ${formatPrice(saving, pricing)}`
                    : `Or ${formatPrice(pricing.yearly, pricing)} a year and get ${monthsFree} months free`}
                </p>
              </>
            )}
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "grid", gap: 10, flex: 1, alignContent: "start" }}>
            {PRO_SUMMARY.map(f => (
              <li key={f} style={{ display: "flex", gap: 10, fontSize: 14, color: "#fff", lineHeight: 1.45 }}>
                <Check size={16} color={P.haldi} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />{f}
              </li>
            ))}
          </ul>
          <Link href={proHref(billing)} className="pp-btn-primary">Get Pro {billing === "yearly" ? "for a year" : "for a month"}</Link>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", textAlign: "center", margin: "12px 0 0", lineHeight: 1.5 }}>
            {viaRazorpay ? "Renews automatically · cancel anytime · UPI Autopay or card" : "Renews automatically · cancel anytime"}
          </p>
        </div>
      </div>

      <style>{`
        .pp-grid { display:grid; grid-template-columns:1fr 1.15fr; gap:18px; max-width:860px; margin:0 auto; align-items:stretch; }
        .pp-pro-book { position:absolute; right:22px; top:22px; }
        .pp-pro-copy { padding-right:136px; }
        @media (max-width: 760px) {
          .pp-grid { grid-template-columns:1fr; }
          .pp-grid > div:last-child { order:-1; }
          .pp-pro-book { right:14px; top:16px; transform:scale(.62); transform-origin:top right; }
          .pp-pro-copy { padding-right:76px; }
        }
      `}</style>
    </div>
  );
}
