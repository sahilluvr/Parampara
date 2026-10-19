"use client";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { Check, Minus } from "lucide-react";
import PricingPlans, { P, PF } from "@/components/pricing/PricingPlans";
import HeritageBookCover from "@/components/pricing/HeritageBookCover";
import { COMPARISON, PRO_OUTCOMES } from "@/lib/planFeatures";
import { usePricing } from "@/lib/usePricing";

function Cell({ v, pro }: { v: boolean | string; pro?: boolean }) {
  if (v === true) return <Check size={18} color={pro ? P.sindoor : P.tulsi} strokeWidth={2.5} aria-label="Included" />;
  if (v === false) return <Minus size={18} color="#C4BDD9" aria-label="Not included" />;
  return <span style={{ fontSize: 14, fontWeight: 600, color: P.text }}>{v}</span>;
}

export default function PricingPage() {
  const { pricing } = usePricing();
  const viaRazorpay = !!pricing.charge;

  const faqs: [string, string][] = [
    ["Does Pro renew automatically?", "Yes. Monthly renews every month and yearly every year, using UPI Autopay or your card, so your family never loses access. You'll get a notification from Razorpay before each charge."],
    ["Can I cancel anytime?", "Yes, in two taps from Account & Plan. You keep Pro until the end of the period you've already paid for, and you won't be charged again."],
    ["What happens to my family's data if I stop paying?", "Nothing is deleted. Your rituals, members, memories and family tree stay exactly where they are on the free plan. Only the Pro tools (Heritage Book, AI assistant, Mannats, extra spaces) pause."],
    ["Does everyone in my family need Pro?", "No. Your relatives can join your family space and contribute on the free plan. Pro is for the person who wants the Heritage Book, the AI assistant and the Mannats tracker."],
    ["Which payment methods can I use?", viaRazorpay ? "UPI Autopay and debit or credit cards through Razorpay. Payments are processed in Indian rupees." : "All major cards through our secure checkout."],
    ["Is my family's information private?", "Yes. Each family space is visible only to the people you invite. We don't sell or share your data."],
  ];

  return (
    <>
      <Navbar />
      <main style={{ background: P.paper, fontFamily: PF.sans, color: P.text }}>
        {/* Hero */}
        <section style={{ padding: "120px 20px 40px", textAlign: "center" }}>
          <h1 style={{ fontFamily: PF.serif, fontSize: "clamp(32px,5.2vw,56px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.5px", margin: "0 auto 16px", maxWidth: 760 }}>
            The rituals your elders know shouldn&apos;t end with them
          </h1>
          <p style={{ fontSize: "clamp(16px,1.8vw,19px)", color: P.muted, maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
            Save every puja, recipe and family story for free. Upgrade to Pro when you&apos;re ready to turn it into a book your children will keep.
          </p>
        </section>

        <section style={{ padding: "12px 20px 64px" }}>
          <PricingPlans />
          <ul style={{ listStyle: "none", padding: 0, margin: "28px auto 0", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 28px", fontSize: 14, color: P.muted, maxWidth: 820 }}>
            <li>✓ Cancel anytime, in two taps</li>
            <li>✓ Your data stays yours if you stop</li>
            <li>✓ Relatives join free</li>
            <li>✓ Every faith and tradition</li>
          </ul>
        </section>

        {/* What Pro unlocks */}
        <section style={{ background: P.white, borderTop: `1px solid ${P.line}`, borderBottom: `1px solid ${P.line}`, padding: "72px 20px" }}>
          <div className="pr-unlock">
            <div className="pr-unlock-book">
              <HeritageBookCover familyName="Sharma Parivar" width={210} subtitle="Rituals · Stories · Family tree" />
            </div>
            <div>
              <h2 style={{ fontFamily: PF.serif, fontSize: "clamp(26px,3.4vw,38px)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 28px" }}>What Pro adds to your family space</h2>
              <div style={{ display: "grid", gap: 26 }}>
                {PRO_OUTCOMES.map(o => (
                  <div key={o.title}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 6px", color: P.text }}>{o.title}</h3>
                    <p style={{ fontSize: 16, lineHeight: 1.65, color: P.muted, margin: 0, maxWidth: 560 }}>{o.body}</p>
                  </div>
                ))}
              </div>
              <Link href="/upgrade?billing=yearly" className="pp-btn-primary" style={{ display: "inline-block", marginTop: 32, padding: "14px 28px" }}>Get Pro</Link>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section style={{ padding: "72px 20px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontFamily: PF.serif, fontSize: "clamp(26px,3.4vw,36px)", fontWeight: 700, textAlign: "center", margin: "0 0 28px" }}>Compare plans</h2>
            <div style={{ background: P.white, border: `1px solid ${P.line}`, borderRadius: 16, overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#F1EDF8" }}>
                    <th scope="col" style={{ textAlign: "left", padding: "14px 18px", fontSize: 14, fontWeight: 600, color: P.muted }}>What you get</th>
                    <th scope="col" style={{ width: 110, padding: "14px 8px", fontSize: 14, fontWeight: 700 }}>Free</th>
                    <th scope="col" style={{ width: 110, padding: "14px 8px", fontSize: 14, fontWeight: 700, color: P.sindoor }}>Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map(r => (
                    <tr key={r.label} style={{ borderTop: `1px solid ${P.line}` }}>
                      <th scope="row" style={{ textAlign: "left", padding: "14px 18px", fontWeight: 500, fontSize: 15 }}>
                        {r.label}
                        {r.hint && <span style={{ display: "block", fontSize: 13, color: P.muted, fontWeight: 400, marginTop: 3, lineHeight: 1.45 }}>{r.hint}</span>}
                      </th>
                      <td style={{ textAlign: "center", padding: "14px 8px" }}><Cell v={r.free} /></td>
                      <td style={{ textAlign: "center", padding: "14px 8px", background: "rgba(214,36,110,0.04)" }}><Cell v={r.pro} pro /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "0 20px 72px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{ fontFamily: PF.serif, fontSize: "clamp(26px,3.4vw,36px)", fontWeight: 700, textAlign: "center", margin: "0 0 20px" }}>Questions families ask</h2>
            {faqs.map(([q, a]) => (
              <details key={q} className="pr-faq">
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section style={{ background: P.ink, padding: "72px 20px", textAlign: "center" }}>
          <h2 style={{ fontFamily: PF.serif, fontSize: "clamp(26px,3.6vw,40px)", fontWeight: 700, color: "#fff", margin: "0 auto 14px", maxWidth: 640, lineHeight: 1.15 }}>
            Ask Dadi this Sunday. Save it tonight.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.72)", margin: "0 auto 28px", maxWidth: 520, lineHeight: 1.6 }}>
            It takes five minutes to record your first ritual. It&apos;s free to start.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/auth/signup" className="pp-btn-primary" style={{ display: "inline-block", padding: "14px 28px" }}>Create your family space</Link>
            <Link href="/upgrade?billing=yearly" style={{ display: "inline-block", padding: "14px 24px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Get Pro</Link>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .pr-unlock { max-width:980px; margin:0 auto; display:grid; grid-template-columns:280px 1fr; gap:56px; align-items:center; }
        .pr-unlock-book { display:flex; justify-content:center; }
        .pr-faq { border-bottom:1px solid ${P.line}; padding:4px 0; }
        .pr-faq summary { cursor:pointer; list-style:none; padding:16px 28px 16px 0; font-size:16px; font-weight:600; color:${P.text}; position:relative; }
        .pr-faq summary::-webkit-details-marker { display:none; }
        .pr-faq summary::after { content:"+"; position:absolute; right:4px; top:12px; font-size:22px; color:${P.sindoor}; font-weight:400; }
        .pr-faq[open] summary::after { content:"–"; }
        .pr-faq summary:focus-visible { outline:3px solid ${P.haldi}; outline-offset:2px; border-radius:4px; }
        .pr-faq p { margin:0 0 18px; font-size:15px; line-height:1.7; color:${P.muted}; max-width:640px; }
        @media (max-width: 760px) { .pr-unlock { grid-template-columns:1fr; gap:36px; } }
      `}</style>
    </>
  );
}
