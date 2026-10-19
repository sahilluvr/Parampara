"use client";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import Motif, { type MotifName, type MotifTone } from "@/components/art/Motif";

const OFFERINGS: { motif: MotifName; tone: MotifTone; title: string; blurb: string; features: string[]; pro?: boolean }[] = [
  { motif: "book", tone: "night", title: "Ritual documentation", blurb: "Write down every puja and ceremony the way your family does it — before the details fade.",
    features: ["Step-by-step ritual builder", "Elder notes on every step", "Multiple family contributors", "Voice memo recording", "Version history"] },
  { motif: "kalash", tone: "marigold", title: "Samagri lists", blurb: "Never be the one who forgot the coconut. Lists sized to the number of guests.",
    features: ["AI-generated samagri lists", "Quantities by guest count", "Shareable checklist", "Save and reuse", "Regional variations"] },
  { motif: "calendar", tone: "rani", title: "Festival calendar", blurb: "Every festival your family keeps, with countdowns and reminders for everyone.",
    features: ["Auto-filled by religion", "Countdown timers", "Birthday and anniversary alerts", "Custom festivals", "Family-wide reminders"] },
  { motif: "chat", tone: "violet", title: "AI ritual assistant", blurb: "Ask anything — meaning, steps, samagri — and get an answer that respects your tradition.", pro: true,
    features: ["Ritual explainer", "Samagri generator", "Missing-steps finder", "Cultural context", "Regional variations"] },
  { motif: "frames", tone: "peacock", title: "Memory vault", blurb: "Photos from every ceremony and elders telling it in their own voice.",
    features: ["Photo and video uploads", "Voice memo recording", "Albums", "Download and share", "Family reactions"] },
  { motif: "tree", tone: "night", title: "Family space", blurb: "One private home for the whole family, with a tree that goes generations deep.",
    features: ["Roles for every member", "Invite by link or email", "Birthday reminders", "Family tree with download", "Shared rituals"] },
];

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar/>
      <main className="sx">
        <section className="sx-hero">
          <div className="sx-wrap sx-hero-grid">
            <div>
              <p className="sx-kicker">Our platform</p>
              <h1 className="sx-h1">Everything your family knows, in one joyful place.</h1>
              <p className="sx-lead">Six tools that work together to save, share and celebrate your family&apos;s traditions.</p>
              <Link href="/auth/signup" className="sx-btn sx-btn-gold">Try it free</Link>
            </div>
            <div className="ww-collage" aria-hidden="true">
              <div className="ww-card ww-c1"><Motif name="rangoli" tone="rani" rounded={20} style={{ width: "100%", height: "100%" }}/></div>
              <div className="ww-card ww-c2"><Motif name="toran" tone="marigold" rounded={20} style={{ width: "100%", height: "100%" }}/></div>
              <div className="ww-card ww-c3"><Motif name="diya" tone="peacock" rounded={20} style={{ width: "100%", height: "100%" }}/></div>
            </div>
          </div>
        </section>

        {OFFERINGS.map((o, i) => (
          <section key={o.title} className={`sx-sec ${i % 2 ? "" : "sx-white"}`}>
            <div className={`sx-wrap ww-row ${i % 2 ? "ww-flip" : ""}`}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span className="ww-num">{String(i + 1).padStart(2, "0")}</span>
                  {o.pro && <span className="ww-pro">Pro</span>}
                </div>
                <h2 className="sx-h2">{o.title}</h2>
                <p className="sx-p">{o.blurb}</p>
                <ul className="ww-list">
                  {o.features.map(f => <li key={f}><span>✓</span>{f}</li>)}
                </ul>
                <Link href="/auth/signup" className="sx-btn sx-btn-rani" style={{ marginTop: 10 }}>Get started</Link>
              </div>
              <Motif name={o.motif} tone={o.tone} className="sx-art" label={o.title}/>
            </div>
          </section>
        ))}

        <section className="sx-final">
          <div className="sx-wrap">
            <h2 className="sx-h2">Ready to save your family&apos;s heritage?</h2>
            <p>Free to start. No card needed.</p>
            <Link href="/auth/signup" className="sx-btn sx-btn-ink">Create your family space</Link>
          </div>
        </section>
      </main>
      <Footer/>
      <style>{`
        .ww-collage { position:relative; height:380px; }
        .ww-card { position:absolute; border-radius:20px; box-shadow:0 30px 70px -30px rgba(0,0,0,0.7); transition:transform .4s cubic-bezier(.2,.7,.2,1); }
        .ww-c1 { width:58%; aspect-ratio:4/3; left:0; top:10px; transform:rotate(-5deg); }
        .ww-c2 { width:52%; aspect-ratio:4/3; right:0; top:0; transform:rotate(4deg); }
        .ww-c3 { width:56%; aspect-ratio:4/3; left:22%; bottom:0; transform:rotate(-1deg); z-index:2; }
        .ww-collage:hover .ww-c1 { transform:rotate(-9deg) translate(-10px,-6px); }
        .ww-collage:hover .ww-c2 { transform:rotate(8deg) translate(10px,-8px); }
        .ww-collage:hover .ww-c3 { transform:rotate(2deg) translateY(8px); }
        .ww-row { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        .ww-flip > :first-child { order:2; }
        .ww-num { font-family:'Bricolage Grotesque',system-ui,sans-serif; font-weight:800; font-size:20px; color:#D6246E; }
        .ww-pro { font-size:12px; font-weight:800; background:#FFB224; color:#120C2E; padding:2px 9px; border-radius:999px; }
        .ww-list { list-style:none; padding:0; margin:0 0 22px; display:grid; gap:10px; }
        .ww-list li { display:flex; gap:10px; align-items:center; font-size:16px; }
        .ww-list span { width:24px; height:24px; border-radius:50%; background:#E3F4F2; color:#0F7A73; display:inline-flex; align-items:center; justify-content:center; font-size:13px; font-weight:800; flex-shrink:0; }
        @media (max-width: 900px) { .ww-row { grid-template-columns:1fr; gap:36px; } .ww-flip > :first-child { order:0; } .ww-collage { height:300px; } }
        @media (prefers-reduced-motion: reduce) { .ww-card { transition:none; } }
      `}</style>
    </>
  );
}
