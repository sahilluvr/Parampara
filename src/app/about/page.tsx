"use client";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import Motif, { type MotifName, type MotifTone } from "@/components/art/Motif";

const VALUES: { motif: MotifName; tone: MotifTone; title: string; desc: string }[] = [
  { motif: "diya",   tone: "night",    title: "Cultural reverence", desc: "We approach every ritual with deep respect for its spiritual and cultural significance." },
  { motif: "house",  tone: "peacock",  title: "Family privacy",     desc: "Your traditions are sacred. Everything is private and visible only to your family." },
  { motif: "toran",  tone: "rani",     title: "Diaspora-first",     desc: "Built for Indian families everywhere — whether in Chandigarh or Chicago." },
  { motif: "family", tone: "marigold", title: "Intergenerational",  desc: "Connecting the eldest elders with the youngest grandchildren through shared tradition." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar/>
      <main className="sx">
        <section className="sx-hero">
          <div className="sx-wrap sx-hero-grid">
            <div>
              <p className="sx-kicker">The story behind Parampara</p>
              <h1 className="sx-h1">A grandmother in Chandigarh, and the knowledge she took with her.</h1>
              <p className="sx-lead">A platform born from personal loss, built so every Indian family keeps what matters most.</p>
              <Link href="/auth/signup" className="sx-btn sx-btn-gold">Start preserving yours</Link>
            </div>
            <Motif name="diya" tone="night" className="sx-art" style={{ boxShadow: "0 30px 80px -30px rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.08)" }} label="A lit diya"/>
          </div>
        </section>

        <section className="sx-sec sx-white">
          <div className="sx-wrap ab-story">
            <div className="ab-art">
              <Motif name="family" tone="rani" className="sx-art" label="Four generations of a family"/>
              <div className="ab-badge"><b>2016</b><span>Chandigarh, India</span></div>
            </div>
            <div>
              <h2 className="sx-h2">The knowledge that walked out with her</h2>
              <p className="sx-p">In 2016, our founder&apos;s Dadi passed away in Chandigarh. She had spent a lifetime performing every puja, every ritual, every ceremony with absolute precision. Guests would travel hours to have her bless their newborns. She knew the exact flowers, the specific mantras, the right muhurat.</p>
              <p className="sx-p">When she passed, that knowledge went with her. At the first family ceremony after, no one could agree on a single step. The priest had one version. The aunts had another. Something irreplaceable had been lost.</p>
              <p className="sx-p">That grief led to a realisation: this wasn&apos;t unique. Across India and the diaspora, families lose their cultural knowledge every year — not because they don&apos;t care, but because no one thought to write it down.</p>
              <blockquote className="ab-quote">&ldquo;Parampara was built in Chandigarh, for her, and for every Dadi whose wisdom deserves to outlive them.&rdquo;</blockquote>
            </div>
          </div>
        </section>

        <section className="sx-sec">
          <div className="sx-wrap">
            <h2 className="sx-h2 sx-center" style={{ textAlign: "center", maxWidth: 700 }}>What we stand for</h2>
            <div className="ab-values">
              {VALUES.map(v => (
                <div key={v.title} className="ab-value">
                  <Motif name={v.motif} tone={v.tone} rounded={18} style={{ aspectRatio: "4/3" }}/>
                  <h3 className="sx-h3" style={{ marginTop: 18 }}>{v.title}</h3>
                  <p className="sx-p" style={{ fontSize: 16, margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sx-final">
          <div className="sx-wrap">
            <h2 className="sx-h2">Your family has a story too</h2>
            <p>Don&apos;t wait for the moment to pass. Start saving your family&apos;s rituals, traditions and heritage today.</p>
            <Link href="/auth/signup" className="sx-btn sx-btn-ink">Begin your family&apos;s story</Link>
          </div>
        </section>
      </main>
      <Footer/>
      <style>{`
        .ab-story { display:grid; grid-template-columns:1fr 1.1fr; gap:64px; align-items:center; }
        .ab-art { position:relative; }
        .ab-badge { position:absolute; right:-14px; bottom:-18px; background:#FFB224; color:#120C2E; border-radius:18px; padding:14px 20px; box-shadow:0 18px 40px -18px rgba(30,21,70,0.5); display:flex; flex-direction:column; transform:rotate(3deg); }
        .ab-badge b { font-family:'Bricolage Grotesque',system-ui,sans-serif; font-size:30px; line-height:1; }
        .ab-badge span { font-size:13px; font-weight:600; margin-top:2px; }
        .ab-quote { margin:28px 0 0; padding:20px 24px; border-left:4px solid #D6246E; background:#FCE8F0; border-radius:0 16px 16px 0; font-family:'Bricolage Grotesque',system-ui,sans-serif; font-size:20px; line-height:1.45; font-weight:600; color:#1C1733; }
        .ab-values { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; margin-top:40px; }
        .ab-value { background:#fff; border:1px solid #E6E1F0; border-radius:24px; padding:14px 14px 22px; transition:transform .3s ease, box-shadow .3s ease; }
        .ab-value:hover { transform:translateY(-6px) rotate(-0.5deg); box-shadow:0 26px 50px -28px rgba(30,21,70,0.45); }
        .ab-value h3, .ab-value p { padding:0 8px; }
        @media (max-width: 960px) { .ab-values { grid-template-columns:1fr 1fr; } .ab-story { grid-template-columns:1fr; gap:48px; } }
        @media (max-width: 560px) { .ab-values { grid-template-columns:1fr; } .ab-badge { right:8px; } }
      `}</style>
    </>
  );
}
