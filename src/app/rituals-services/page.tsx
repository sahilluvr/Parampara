"use client";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import Motif, { type MotifName, type MotifTone } from "@/components/art/Motif";

const RITUALS: { name: string; sub: string; motif: MotifName; tone: MotifTone; desc: string }[] = [
  { name: "Namkaran", sub: "Naming ceremony", motif: "moon", tone: "night",
    desc: "Sacred ritual of formally naming your newborn, performed 10–12 days after birth with priest, nakshatra guidance and family blessings." },
  { name: "Annaprashan", sub: "First rice feeding", motif: "bowl", tone: "marigold",
    desc: "Your child's first solid food ceremony — a joyful milestone celebrating new growth, with rice, family and blessings." },
  { name: "Mundan", sub: "First haircut ceremony", motif: "lotus", tone: "peacock",
    desc: "The sacred tonsure ceremony, believed to cleanse the child of past-life influences and bless them with health and new beginnings." },
  { name: "Yagnopavitam", sub: "Sacred thread ceremony", motif: "thread", tone: "violet",
    desc: "Upanayana — the sacred thread ceremony marking initiation into Vedic learning and spiritual life. One of the most important samskaras." },
  { name: "Vivah", sub: "Wedding ceremony", motif: "rings", tone: "rani",
    desc: "Complete wedding rituals — from Ganesh puja and Saptapadi to sindoor daan. Every step saved for your family's tradition." },
  { name: "Griha Pravesh", sub: "Housewarming ceremony", motif: "house", tone: "peacock",
    desc: "Vastu puja and housewarming for entering a new home — with kalash, diya, muhurat guidance and a complete samagri list." },
  { name: "Satyanarayan Katha", sub: "Monthly vrat and puja", motif: "kalash", tone: "rani",
    desc: "The beloved monthly katha and puja — complete steps, mantras, prasad recipe and a guide for the whole family." },
  { name: "Shraddha", sub: "Ancestor remembrance", motif: "diya", tone: "night",
    desc: "Pitru paksha and ancestor remembrance rituals — saved with deep respect, cultural depth and regional variations." },
];

export default function RitualsServicesPage() {
  return (
    <>
      <Navbar/>
      <main className="sx">
        <section className="sx-hero">
          <div className="sx-wrap sx-hero-grid">
            <div>
              <p className="sx-kicker">16 samskaras and every festival</p>
              <h1 className="sx-h1">Rituals and ceremonies, from birth to beyond.</h1>
              <p className="sx-lead">Every samskara saved with cultural depth, AI guidance and your family&apos;s own way of doing it.</p>
              <Link href="/auth/signup" className="sx-btn sx-btn-gold">Save your family&apos;s rituals</Link>
            </div>
            <Motif name="rangoli" tone="night" className="sx-art" style={{ boxShadow: "0 30px 80px -30px rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.08)" }} label="A rangoli"/>
          </div>
        </section>

        <section className="sx-sec">
          <div className="sx-wrap">
            <div className="rs-grid">
              {RITUALS.map(r => (
                <article key={r.name} className="rs-card">
                  <Motif name={r.motif} tone={r.tone} rounded={18} style={{ aspectRatio: "16/10" }}/>
                  <div style={{ padding: "18px 8px 6px" }}>
                    <span className="rs-sub">{r.sub}</span>
                    <h2 className="sx-h3" style={{ marginTop: 10 }}>{r.name}</h2>
                    <p className="sx-p" style={{ fontSize: 15, marginBottom: 14 }}>{r.desc}</p>
                    <Link href="/auth/signup" className="rs-link">Save this ritual →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sx-final">
          <div className="sx-wrap">
            <h2 className="sx-h2">Don&apos;t see your ritual?</h2>
            <p>Create any custom ritual — regional variations, family-specific traditions or lesser-known ceremonies.</p>
            <Link href="/auth/signup" className="sx-btn sx-btn-ink">Start saving for free</Link>
          </div>
        </section>
      </main>
      <Footer/>
      <style>{`
        .rs-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
        .rs-card { background:#fff; border:1px solid #E6E1F0; border-radius:24px; padding:12px 12px 16px; transition:transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s ease; }
        .rs-card:hover { transform:translateY(-8px) rotate(-0.6deg); box-shadow:0 30px 60px -30px rgba(30,21,70,0.5); }
        .rs-card:nth-child(even):hover { transform:translateY(-8px) rotate(0.6deg); }
        .rs-sub { font-size:12px; font-weight:700; color:#D6246E; background:#FCE8F0; padding:4px 10px; border-radius:999px; }
        .rs-link { color:#D6246E; font-weight:700; text-decoration:none; font-size:15px; }
        .rs-link:hover { text-decoration:underline; }
        @media (max-width: 1060px) { .rs-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width: 560px) { .rs-grid { grid-template-columns:1fr; } }
        @media (prefers-reduced-motion: reduce) { .rs-card { transition:none; } .rs-card:hover { transform:none; } }
      `}</style>
    </>
  );
}
