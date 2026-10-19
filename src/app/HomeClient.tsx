"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import FestivalTools from "@/components/marketing/FestivalTools";
import BabyNameFinder from "@/components/marketing/BabyNameFinder";
import PricingPlans from "@/components/pricing/PricingPlans";
import HeritageBookCover from "@/components/pricing/HeritageBookCover";
import Motif from "@/components/art/Motif";
import { PRESET_FESTIVALS } from "@/lib/store";

// ── Design tokens (v156 "Utsav" palette) ───────────────────────
// Indigo night + marigold + rani pink + peacock: festival colours, used as
// solid fields rather than gradient washes.
const T = {
  night: "#120C2E", indigo: "#1E1546", indigo2: "#2C2163", marigold: "#FFB224", marigoldSoft: "#FFF4DC",
  rani: "#D6246E", raniSoft: "#FCE8F0", peacock: "#0F7A73", peacockSoft: "#E3F4F2",
  paper: "#F8F6FC", ink: "#1C1733", muted: "#625C7A", line: "#E6E1F0",
};
const DISPLAY = "'Bricolage Grotesque',system-ui,sans-serif";
const SANS = "'Inter',system-ui,sans-serif";

const TESTIMONIALS = [
  { text:"We used Parampara to document our family's Satyanarayan Katha step by step. My son in Canada performed it correctly for the first time without calling us at 2 AM. That was the moment I knew this was worth it.", name:"Sunita Arora", role:"Mother of 2 · Ludhiana", initials:"SA", avatar:"" },
  { text:"The AI samagri generator saved us before our Griha Pravesh. I had a complete list with quantities in under a minute — showed it to the pandit and he added just two items. Nothing was forgotten.", name:"Vikram Malhotra", role:"IT Professional · Bengaluru", initials:"VM", avatar:"" },
  { text:"My dadi is 84. She has more ritual knowledge in her head than I could write in a year. We're finally capturing it — her voice, her words, her way of explaining things. I can't put a price on that.", name:"Priya Nair", role:"NRI · Toronto, Canada", initials:"PN", avatar:"" },
  { text:"Three branches of our family — Punjab, Maharashtra, Tamil Nadu — now share one space. The Navratri guide resolved a debate we've had for years. Now we all know which colour goes on which day.", name:"Ananya Krishnan", role:"Teacher · Chennai", initials:"AK", avatar:"" },
];

const FAQS = [
  { q:"What is Parampara?", a:"Parampara is a private family space for Indian and South Asian families to save their rituals, recipes, family tree, photos and elders' voices — and share them with relatives anywhere in the world." },
  { q:"Is it free?", a:"Yes. The free plan includes unlimited family members, rituals and memories, the family tree, the festival calendar and invites for the whole family, with up to 2 family spaces. Pro adds the print-ready Heritage Book, the AI ritual assistant, the Mannats tracker and unlimited family spaces." },
  { q:"Is my family's data private?", a:"Yes. Each family space is visible only to the people you invite. We don't sell or share your data." },
  { q:"Does it work for every religion?", a:"Yes — Hindu, Sikh, Muslim, Christian, Jain, Buddhist, Parsi and family-specific customs are all supported equally." },
  { q:"How do relatives join?", a:"Copy your invite link and send it in the family WhatsApp group. They create an account and land straight in your family space — free." },
  { q:"Can family abroad use it?", a:"Yes. Parampara works on any phone or computer, in any country, so cousins in Canada and grandparents in Punjab see the same family space." },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const GENERATIONS = [
  { year: "1958", name: "Kamla Devi", rel: "Dadi", initials: "KD", color: T.rani, text: "Karva Chauth vrat — the way her mother taught her", chip: "🎙 Voice note · 4 min" },
  { year: "1984", name: "Rajesh", rel: "Papa", initials: "R", color: T.peacock, text: "Satyanarayan Katha, every step and every mantra", chip: "📜 27 steps · samagri list" },
  { year: "2012", name: "Ananya", rel: "You", initials: "A", color: "#7A3FD9", text: "Saved Dadi's lori and the family Diwali puja", chip: "📸 38 photos" },
];

const FAITHS = ["Hindu", "Sikh", "Muslim", "Christian", "Jain", "Buddhist", "Parsi", "Your family's own customs"];

// Marigold petals drifting down the hero — the site's one ambient animation.
// Light (~22 particles), pauses when the tab/hero isn't visible, off for
// reduced-motion visitors.
function HeroPetals() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const colors = ["#FFB224", "#FF8A1F", "#FFD166", "#D6246E"];
    let w = 0, h = 0, raf = 0, running = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const N = w < 640 ? 12 : 22;
    const petals = Array.from({ length: N }, () => ({
      x: Math.random() * w, y: Math.random() * h, s: 5 + Math.random() * 7, vy: 0.25 + Math.random() * 0.55,
      sway: Math.random() * Math.PI * 2, rot: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.02,
      c: colors[Math.floor(Math.random() * colors.length)], o: 0.35 + Math.random() * 0.45,
    }));
    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of petals) {
        p.y += p.vy; p.sway += 0.012; p.rot += p.vr;
        const x = p.x + Math.sin(p.sway) * 22;
        if (p.y > h + 20) { p.y = -20; p.x = Math.random() * w; }
        ctx.save(); ctx.translate(x, p.y); ctx.rotate(p.rot); ctx.globalAlpha = p.o; ctx.fillStyle = p.c;
        ctx.beginPath(); ctx.ellipse(0, 0, p.s, p.s * 0.55, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      }
      raf = requestAnimationFrame(draw);
    };
    const io = new IntersectionObserver(([en]) => {
      running = en.isIntersecting;
      cancelAnimationFrame(raf);
      if (running) raf = requestAnimationFrame(draw);
    });
    io.observe(canvas);
    window.addEventListener("resize", resize);
    return () => { running = false; cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden="true" className="hp-petals"/>;
}

// Rotating word in the hero headline's kicker — what families save
const SAVED_THINGS = ["Dadi's recipes", "Papa's puja", "Nani's stories", "the wedding songs", "every festival"];
function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI(v => (v + 1) % SAVED_THINGS.length), 2200);
    return () => clearInterval(t);
  }, []);
  return <span key={i} className="hp-rot">{SAVED_THINGS[i]}</span>;
}

function useUpcomingFestivals(n: number) {
  const [list, setList] = useState<{ name: string; date: Date; days: number }[]>([]);
  useEffect(() => {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    setList(PRESET_FESTIVALS
      .map(f => { const d = new Date(f.date); d.setHours(0, 0, 0, 0); return { name: f.name, date: d, days: Math.round((d.getTime() - today.getTime()) / 86400000) }; })
      .filter(f => f.days >= 0).sort((a, b) => a.days - b.days).slice(0, n));
  }, [n]);
  return list;
}

export type GuideCard = { slug: string; title: string; emoji: string; category: string };

// Rendered by app/page.tsx (a server component) so the 200+ post blog index
// stays on the server instead of shipping in the homepage JavaScript.
export default function HomeClient({ guides, guideCount }: { guides: GuideCard[]; guideCount: number }) {
  const festivals = useUpcomingFestivals(3);

  return (
    <>
      <Navbar/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}/>
      <main className="hp" style={{ fontFamily: SANS, color: T.ink, background: T.paper }}>

        {/* ══ HERO ══ */}
        <section className="hp-hero">
          <HeroPetals/>
          <div className="hp-wrap hp-hero-grid">
            <div className="hp-hero-copy">
              <p className="hp-kicker">Save <RotatingWord/> — forever.</p>
              <h1 className="hp-h1">Your family&apos;s traditions, kept for every generation.</h1>
              <p className="hp-lead">
                Save the rituals, recipes, voices and stories your elders carry — and share them with the whole family, from Ludhiana to London.
              </p>
              <div className="hp-cta-row">
                <Link href="/auth/signup" className="hp-btn hp-btn-gold">Create your family space</Link>
                <a href="#how" className="hp-btn hp-btn-ghost">See how it works</a>
              </div>
              <p className="hp-fine">Free plan · No card needed · Every faith and tradition</p>
            </div>

            {/* Signature: traditions passing down a thread of generations */}
            <div className="hp-gen" aria-label="Example: a tradition passed through four generations">
              <div className="hp-thread" aria-hidden="true"/>
              {GENERATIONS.map((g, i) => (
                <div key={g.year} className="hp-gen-row" style={{ animationDelay: `${0.35 + i * 0.28}s` }}>
                  <span className="hp-gen-year">{g.year}</span>
                  <span className="hp-gen-dot" style={{ background: g.color }}/>
                  <div className="hp-gen-card">
                    <span className="hp-avatar" style={{ background: g.color }}>{g.initials}</span>
                    <div style={{ minWidth: 0 }}>
                      <p className="hp-gen-name">{g.name} <span>· {g.rel}</span></p>
                      <p className="hp-gen-text">{g.text}</p>
                      <span className="hp-chip">{g.chip}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="hp-gen-row" style={{ animationDelay: "1.25s" }}>
                <span className="hp-gen-year">2041</span>
                <span className="hp-gen-dot hp-gen-dot-future"/>
                <div className="hp-gen-card hp-gen-future">
                  <span className="hp-avatar" style={{ background: "transparent", border: `1.5px dashed ${T.marigold}`, color: T.marigold }}>✦</span>
                  <div>
                    <p className="hp-gen-name" style={{ color: T.marigold }}>Your grandchild</p>
                    <p className="hp-gen-text" style={{ color: "rgba(255,255,255,0.75)" }}>Will know exactly how it&apos;s done.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ BENTO: what's inside ══ */}
        <section className="hp-sec">
          <div className="hp-wrap">
            <h2 className="hp-h2">One home for everything your family knows</h2>
            <p className="hp-sub">Private to your family. Built for how Indian families actually pass things down.</p>

            <div className="hp-bento">
              {/* Ritual vault */}
              <div className="hp-tile hp-t-ritual">
                <div>
                  <h3 className="hp-h3">Ritual Vault</h3>
                  <p className="hp-tile-p">Every puja, vrat and ceremony, step by step — with samagri, mantras and the notes only Dadi knows.</p>
                </div>
                <div className="hp-mock">
                  <p className="hp-mock-title">Satyanarayan Katha <span>· 27 steps</span></p>
                  {["Clean the puja sthan, draw the rangoli", "Place the kalash with mango leaves", "Offer panchamrit — Dadi adds tulsi first", "Read the five adhyayas"].map((s, i) => (
                    <div key={s} className="hp-mock-step"><span className={i < 2 ? "done" : ""}>{i < 2 ? "✓" : i + 1}</span>{s}</div>
                  ))}
                  <div className="hp-mock-chips">{["Kalash", "Banana leaves", "Panchamrit", "Tulsi", "Prasad"].map(c => <span key={c}>{c}</span>)}</div>
                </div>
              </div>

              {/* Family tree */}
              <div className="hp-tile hp-t-tree">
                <h3 className="hp-h3">Family Tree</h3>
                <p className="hp-tile-p">Your family tree, generations deep — with birthdays, photos and who&apos;s who.</p>
                <svg viewBox="0 0 220 110" className="hp-tree" aria-hidden="true">
                  <path d="M110 22 V48 M60 48 H160 M60 48 V70 M160 48 V70 M60 70 V80 M30 80 H90 M30 80 V92 M90 80 V92" stroke="rgba(255,255,255,0.55)" strokeWidth="2" fill="none"/>
                  <circle cx="110" cy="16" r="11" fill="#FFB224"/>
                  <circle cx="60" cy="70" r="10" fill="#fff"/><circle cx="160" cy="70" r="10" fill="#fff"/>
                  <circle cx="30" cy="98" r="8" fill="rgba(255,255,255,0.8)"/><circle cx="90" cy="98" r="8" fill="rgba(255,255,255,0.8)"/>
                </svg>
              </div>

              {/* Festivals */}
              <div className="hp-tile hp-t-fest">
                <h3 className="hp-h3">Festival calendar</h3>
                <ul className="hp-fest">
                  {(festivals.length ? festivals : [{ name: "Navratri", date: new Date("2026-10-11"), days: 0 }]).map(f => (
                    <li key={f.name}>
                      <span className="hp-fest-date"><b>{f.date.getDate()}</b>{f.date.toLocaleString("en-IN", { month: "short" })}</span>
                      <span className="hp-fest-name">{f.name}</span>
                      <span className="hp-fest-days">{f.days === 0 ? "Today" : `${f.days}d`}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Memories */}
              <div className="hp-tile hp-t-mem">
                <Motif name="frames" tone="peacock" rounded={16} style={{ aspectRatio: "16/9", marginBottom: 16 }}/>
                <h3 className="hp-h3" style={{ color: "#fff" }}>Memories &amp; voices</h3>
                <p className="hp-tile-p" style={{ color: "rgba(255,255,255,0.85)" }}>Photos from every ceremony and recordings of elders telling it in their own words.</p>
              </div>

              {/* AI */}
              <div className="hp-tile hp-t-ai">
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <h3 className="hp-h3" style={{ color: "#fff" }}>AI ritual assistant</h3><span className="hp-pro">Pro</span>
                </div>
                <div className="hp-chat">
                  <p className="q">What samagri do we need for Griha Pravesh, 12 people?</p>
                  <p className="a">Kalash, mango leaves, 1 coconut, 1.25 kg rice, haldi-kumkum, 21 diyas… I&apos;ve added the full list with quantities to your ritual.</p>
                </div>
              </div>

              {/* Heritage book */}
              <div className="hp-tile hp-t-book">
                <HeritageBookCover familyName="Sharma Parivar" width={128} subtitle="Rituals · Stories · Family tree"/>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <h3 className="hp-h3">The Heritage Book</h3><span className="hp-pro">Pro</span>
                  </div>
                  <p className="hp-tile-p" style={{ maxWidth: 520 }}>Everything you&apos;ve saved, laid out as a print-ready book with your family&apos;s name on the cover. The gift every parent wants.</p>
                  <Link href="/pricing" className="hp-link">See what&apos;s in Pro</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ HOW IT WORKS ══ */}
        <section id="how" className="hp-sec hp-sec-white">
          <div className="hp-wrap">
            <h2 className="hp-h2">Set up before the next festival</h2>
            <ol className="hp-steps">
              {[
                ["Create your family space", "Two minutes, free. Add your family name, faith and region."],
                ["Invite the family on WhatsApp", "One link for parents, cousins and relatives abroad. Everyone adds what they know."],
                ["Save as life happens", "After every puja, festival or visit to Nani — a ritual, a photo, a voice note."],
              ].map(([t, d], i) => (
                <li key={t}>
                  <span className="hp-step-n">{i + 1}</span>
                  <h3 className="hp-h3">{t}</h3>
                  <p className="hp-tile-p">{d}</p>
                </li>
              ))}
            </ol>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/auth/signup" className="hp-btn hp-btn-rani">Create your family space</Link>
            </div>
          </div>
        </section>

        {/* ══ FAITHS ══ */}
        <section className="hp-faith">
          <div className="hp-wrap">
            <p className="hp-faith-title">Built for every tradition</p>
            <div className="hp-marquee" aria-label={FAITHS.join(", ")}>
              <div className="hp-marquee-track" aria-hidden="true">
                {[...FAITHS, ...FAITHS].map((f, i) => <span key={i}>{["🪔","☬","☪️","✝️","🙏","☸️","🔥","✨"][i % FAITHS.length]} {f}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* ══ FREE TOOLS ══ */}
        <section className="hp-sec">
          <div className="hp-wrap">
            <h2 className="hp-h2">Free tools for festival season</h2>
            <p className="hp-sub">No account needed.</p>
            <FestivalTools/>
            <div style={{ marginTop: 48 }}><BabyNameFinder/></div>
          </div>
        </section>

        {/* ══ PRICING ══ */}
        <section id="pricing" className="hp-sec hp-sec-white">
          <div className="hp-wrap">
            <h2 className="hp-h2">Free to start. A book to keep.</h2>
            <p className="hp-sub">Save everything for free. Pro turns it into a Heritage Book and adds an AI ritual assistant.</p>
            <PricingPlans/>
            <p style={{ textAlign: "center", fontSize: 14, color: T.muted, marginTop: 28 }}>
              Temple, community or a family of 50+? <a href="mailto:ourparamparaofficial@gmail.com" className="hp-link">Email us</a>
            </p>
          </div>
        </section>

        {/* ══ STORIES ══ */}
        <section id="testimonials" className="hp-sec">
          <div className="hp-wrap">
            <h2 className="hp-h2">Families keeping it alive</h2>
            <div className="hp-quotes">
              {TESTIMONIALS.map(t => (
                <figure key={t.name} className="hp-quote">
                  <blockquote>{t.text}</blockquote>
                  <figcaption><span className="hp-avatar" style={{ background: T.indigo2, width: 36, height: 36, fontSize: 12 }}>{t.initials}</span><span><b>{t.name}</b><br/>{t.role}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ══ GUIDES ══ */}
        <section className="hp-sec hp-sec-white">
          <div className="hp-wrap">
            <div className="hp-guides-head">
              <h2 className="hp-h2" style={{ margin: 0, textAlign: "left" }}>Learn the traditions</h2>
              <Link href="/blog" className="hp-link">All {guideCount} guides</Link>
            </div>
            <div className="hp-guides">
              {guides.map(post => {
                const slug = post.slug;
                return (
                  <Link key={slug} href={`/blog/${slug}`} className="hp-guide">
                    <span style={{ fontSize: 26 }}>{post.emoji}</span>
                    <span className="hp-guide-cat">{post.category}</span>
                    <span className="hp-guide-title">{post.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section id="faq" className="hp-sec">
          <div className="hp-wrap" style={{ maxWidth: 760 }}>
            <h2 className="hp-h2">Questions families ask</h2>
            {FAQS.map(f => (
              <details key={f.q} className="hp-faq"><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </section>

        {/* ══ FINAL CTA ══ */}
        <section className="hp-final">
          <div className="hp-wrap">
            <h2 className="hp-final-h">Ask Dadi this Sunday.<br/>Save it tonight.</h2>
            <p className="hp-final-p">Your first ritual takes five minutes. Your grandchildren will have it forever.</p>
            <Link href="/auth/signup" className="hp-btn hp-btn-ink">Create your family space — free</Link>
          </div>
        </section>
      </main>
      <Footer/>

      <style>{`
        .hp-wrap { max-width:1160px; margin:0 auto; padding:0 24px; }
        .hp-btn { display:inline-flex; align-items:center; justify-content:center; padding:15px 26px; border-radius:14px; font-family:${SANS}; font-size:16px; font-weight:700; text-decoration:none; transition:background .15s ease, transform .15s ease; }
        .hp-btn:focus-visible, .hp-link:focus-visible, .hp-guide:focus-visible { outline:3px solid ${T.marigold}; outline-offset:3px; }
        .hp-btn-gold { background:${T.marigold}; color:${T.night}; }
        .hp-btn-gold:hover { background:#FFC24D; }
        .hp-btn-ghost { color:#fff; border:1.5px solid rgba(255,255,255,0.28); }
        .hp-btn-ghost:hover { background:rgba(255,255,255,0.08); }
        .hp-btn-rani { background:${T.rani}; color:#fff; }
        .hp-btn-rani:hover { background:#B0175A; }
        .hp-btn-ink { background:${T.night}; color:#fff; }
        .hp-btn-ink:hover { background:${T.indigo2}; }
        .hp-link { color:${T.rani}; font-weight:700; text-decoration:none; }
        .hp-link:hover { text-decoration:underline; }

        /* hero */
        .hp-hero { background-color:${T.night}; background-image:radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1.6px); background-size:22px 22px; padding:132px 0 96px; overflow:hidden; position:relative; }
        .hp-hero::after { content:""; position:absolute; right:-10%; top:10%; width:620px; height:620px; border-radius:50%; background:radial-gradient(circle, rgba(214,36,110,0.28), transparent 65%); pointer-events:none; }
        .hp-hero-grid { display:grid; grid-template-columns:1.05fr 1fr; gap:56px; align-items:center; position:relative; z-index:1; }
        .hp-kicker { font-size:15px; color:${T.marigold}; font-weight:600; margin:0 0 18px; }
        .hp-h1 { font-family:${DISPLAY}; font-weight:800; font-size:clamp(38px,5.2vw,64px); line-height:1.03; letter-spacing:-0.035em; color:#fff; margin:0 0 22px; }
        .hp-lead { font-size:clamp(17px,1.6vw,19px); line-height:1.6; color:rgba(255,255,255,0.78); max-width:520px; margin:0 0 32px; }
        .hp-cta-row { display:flex; gap:12px; flex-wrap:wrap; }
        .hp-fine { font-size:14px; color:rgba(255,255,255,0.55); margin:18px 0 0; }

        .hp-gen { position:relative; display:grid; gap:14px; padding-left:4px; }
        .hp-thread { position:absolute; left:66px; top:22px; bottom:30px; width:2px; background:linear-gradient(${T.marigold}, ${T.rani}); transform-origin:top; animation:hpThread 1.3s cubic-bezier(.6,0,.2,1) .15s both; }
        .hp-gen-row { display:grid; grid-template-columns:44px 14px 1fr; gap:12px; align-items:center; animation:hpRise .6s ease both; }
        .hp-gen-year { font-family:${DISPLAY}; font-weight:700; color:rgba(255,255,255,0.6); font-size:14px; text-align:right; }
        .hp-gen-dot { width:14px; height:14px; border-radius:50%; box-shadow:0 0 0 4px ${T.night}; position:relative; z-index:1; }
        .hp-gen-dot-future { background:${T.night}; border:2px dashed ${T.marigold}; }
        .hp-gen-card { display:flex; gap:12px; align-items:flex-start; background:#fff; border-radius:16px; padding:14px 16px; box-shadow:0 18px 40px -20px rgba(0,0,0,0.6); }
        .hp-gen-future { background:rgba(255,255,255,0.06); border:1.5px dashed rgba(255,178,36,0.6); box-shadow:none; }
        .hp-avatar { width:40px; height:40px; border-radius:50%; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-weight:700; font-size:14px; flex-shrink:0; }
        .hp-gen-name { margin:0; font-weight:700; font-size:15px; color:${T.ink}; }
        .hp-gen-name span { font-weight:500; color:${T.muted}; }
        .hp-gen-text { margin:3px 0 8px; font-size:14px; color:${T.muted}; line-height:1.45; }
        .hp-chip { display:inline-block; font-size:12px; font-weight:600; background:${T.paper}; color:${T.ink}; border:1px solid ${T.line}; border-radius:999px; padding:3px 10px; }
        @keyframes hpThread { from { transform:scaleY(0); } to { transform:scaleY(1); } }
        @keyframes hpRise { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }

        /* sections */
        .hp-sec { padding:96px 0; }
        .hp-sec-white { background:#fff; }
        .hp-h2 { font-family:${DISPLAY}; font-weight:800; font-size:clamp(30px,4.2vw,50px); line-height:1.05; letter-spacing:-0.03em; text-align:center; margin:0 auto 14px; max-width:820px; }
        .hp-sub { text-align:center; color:${T.muted}; font-size:18px; line-height:1.55; max-width:560px; margin:0 auto 44px; }
        .hp-h3 { font-family:${DISPLAY}; font-weight:700; font-size:22px; letter-spacing:-0.015em; margin:0 0 6px; }
        .hp-tile-p { font-size:15px; line-height:1.55; color:${T.muted}; margin:0; }
        .hp-pro { font-size:11px; font-weight:800; background:${T.marigold}; color:${T.night}; padding:2px 8px; border-radius:999px; margin-bottom:6px; }

        /* bento */
        .hp-bento { display:grid; grid-template-columns:repeat(6,1fr); gap:16px; }
        .hp-tile { border-radius:24px; padding:26px; position:relative; overflow:hidden; }
        .hp-t-ritual { grid-column:span 4; grid-row:span 2; background:#fff; border:1px solid ${T.line}; display:grid; grid-template-columns:1fr 1.15fr; gap:24px; align-items:center; }
        .hp-t-tree { grid-column:span 2; background:${T.rani}; color:#fff; }
        .hp-t-tree .hp-tile-p { color:rgba(255,255,255,0.88); }
        .hp-tree { width:100%; max-width:220px; margin-top:12px; display:block; }
        .hp-t-fest { grid-column:span 2; background:${T.marigoldSoft}; }
        .hp-t-mem { grid-column:span 3; background:#0A5A55; display:flex; flex-direction:column; justify-content:flex-end; }
        .hp-t-ai { grid-column:span 3; background:${T.indigo}; color:#fff; }
        .hp-t-book { grid-column:span 6; background:${T.peacockSoft}; display:flex; gap:36px; align-items:center; padding:30px 36px; }
        .hp-mock { background:${T.paper}; border:1px solid ${T.line}; border-radius:18px; padding:16px; }
        .hp-mock-title { font-weight:700; margin:0 0 10px; font-size:15px; }
        .hp-mock-title span { color:${T.muted}; font-weight:500; }
        .hp-mock-step { display:flex; gap:10px; align-items:center; font-size:14px; padding:8px 0; border-top:1px solid ${T.line}; }
        .hp-mock-step span { width:22px; height:22px; border-radius:50%; border:1.5px solid ${T.line}; display:inline-flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; color:${T.muted}; flex-shrink:0; background:#fff; }
        .hp-mock-step span.done { background:${T.peacock}; border-color:${T.peacock}; color:#fff; }
        .hp-mock-chips { display:flex; flex-wrap:wrap; gap:6px; margin-top:10px; }
        .hp-mock-chips span { font-size:12px; background:${T.raniSoft}; color:${T.rani}; border-radius:999px; padding:3px 10px; font-weight:600; }
        .hp-fest { list-style:none; padding:0; margin:14px 0 0; display:grid; gap:10px; }
        .hp-fest li { display:flex; align-items:center; gap:12px; background:#fff; border-radius:14px; padding:8px 12px 8px 8px; }
        .hp-fest-date { width:40px; height:40px; border-radius:10px; background:${T.night}; color:${T.marigold}; display:flex; flex-direction:column; align-items:center; justify-content:center; font-size:10px; line-height:1.1; flex-shrink:0; }
        .hp-fest-date b { font-family:${DISPLAY}; font-size:16px; color:#fff; }
        .hp-fest-name { flex:1; font-weight:600; font-size:14px; }
        .hp-fest-days { font-size:13px; color:${T.muted}; font-weight:600; }
        .hp-wave { display:flex; align-items:center; gap:3px; height:40px; margin-bottom:14px; }
        .hp-wave span { width:4px; border-radius:2px; background:${T.marigold}; opacity:.9; }
        .hp-chat { margin-top:16px; display:grid; gap:10px; }
        .hp-chat p { margin:0; padding:12px 14px; border-radius:16px; font-size:14px; line-height:1.5; max-width:92%; }
        .hp-chat .q { background:${T.rani}; color:#fff; justify-self:end; border-bottom-right-radius:4px; }
        .hp-chat .a { background:rgba(255,255,255,0.1); color:rgba(255,255,255,0.92); border-bottom-left-radius:4px; }

        /* steps */
        .hp-steps { list-style:none; padding:0; margin:40px 0 0; display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .hp-steps li { background:${T.paper}; border-radius:22px; padding:28px; }
        .hp-step-n { font-family:${DISPLAY}; font-weight:800; font-size:56px; line-height:1; color:${T.rani}; display:block; margin-bottom:14px; letter-spacing:-0.04em; }

        /* faiths */
        .hp-faith { background:${T.indigo}; padding:40px 0; }
        .hp-faith-title { color:${T.marigold}; font-weight:700; text-align:center; margin:0 0 16px; font-size:15px; }
        .hp-faith-row { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; }
        .hp-faith-row span { color:#fff; border:1px solid rgba(255,255,255,0.22); border-radius:999px; padding:9px 18px; font-size:15px; font-weight:500; }

        /* quotes */
        .hp-quotes { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; margin-top:36px; }
        .hp-quote { margin:0; background:#fff; border:1px solid ${T.line}; border-radius:22px; padding:26px; display:flex; flex-direction:column; justify-content:space-between; gap:18px; }
        .hp-quote blockquote { margin:0; font-size:17px; line-height:1.6; color:${T.ink}; }
        .hp-quote figcaption { display:flex; gap:12px; align-items:center; font-size:14px; color:${T.muted}; line-height:1.35; }
        .hp-quote figcaption b { color:${T.ink}; }

        /* guides */
        .hp-guides-head { display:flex; justify-content:space-between; align-items:flex-end; gap:16px; flex-wrap:wrap; margin-bottom:28px; }
        .hp-guides { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
        .hp-guide { display:flex; flex-direction:column; gap:8px; padding:22px; border-radius:20px; background:${T.paper}; text-decoration:none; color:${T.ink}; border:1px solid transparent; }
        .hp-guide:hover { border-color:${T.line}; background:#fff; }
        .hp-guide-cat { font-size:13px; font-weight:700; color:${T.rani}; }
        .hp-guide-title { font-size:16px; font-weight:600; line-height:1.4; }

        /* faq */
        .hp-faq { border-bottom:1px solid ${T.line}; }
        .hp-faq summary { cursor:pointer; list-style:none; padding:20px 32px 20px 0; font-size:17px; font-weight:600; position:relative; }
        .hp-faq summary::-webkit-details-marker { display:none; }
        .hp-faq summary::after { content:"+"; position:absolute; right:4px; top:14px; font-size:26px; color:${T.rani}; font-weight:400; }
        .hp-faq[open] summary::after { content:"–"; }
        .hp-faq summary:focus-visible { outline:3px solid ${T.marigold}; outline-offset:2px; border-radius:6px; }
        .hp-faq p { margin:0 0 20px; font-size:16px; line-height:1.7; color:${T.muted}; }

        /* final */
        .hp-final { background:${T.marigold}; padding:96px 0; text-align:center; }
        .hp-final-h { font-family:${DISPLAY}; font-weight:800; font-size:clamp(34px,5.4vw,64px); line-height:1.02; letter-spacing:-0.035em; color:${T.night}; margin:0 0 16px; }
        .hp-final-p { font-size:18px; color:${T.indigo2}; margin:0 auto 30px; max-width:520px; line-height:1.55; }


        /* joy */
        .hp-petals { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; z-index:0; }
        .hp-rot { display:inline-block; color:#fff; background:${T.rani}; padding:2px 10px; border-radius:8px; animation:hpWord .5s cubic-bezier(.2,.8,.2,1); }
        @keyframes hpWord { from { opacity:0; transform:translateY(10px) rotate(-3deg); } to { opacity:1; transform:none; } }
        .hp-gen-card { transition:transform .25s ease, box-shadow .25s ease; }
        .hp-gen-row:hover .hp-gen-card { transform:translateX(6px) rotate(-0.6deg); box-shadow:0 24px 50px -20px rgba(214,36,110,0.55); }
        .hp-tile { transition:transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s ease; }
        .hp-tile:hover { transform:translateY(-6px) rotate(-0.4deg); box-shadow:0 26px 50px -28px rgba(30,21,70,0.45); }
        .hp-t-tree:hover circle { animation:hpBob 1.2s ease-in-out infinite; transform-box:fill-box; transform-origin:center; }
        @keyframes hpBob { 50% { transform:translateY(-4px); } }
        .hp-t-mem:hover .hp-wave span { animation:hpWave .9s ease-in-out infinite alternate; }
        .hp-wave span:nth-child(3n) { animation-delay:.15s !important; } .hp-wave span:nth-child(3n+1) { animation-delay:.3s !important; }
        @keyframes hpWave { to { transform:scaleY(.4); } }
        .hp-steps li { transition:transform .3s ease, background .3s ease; }
        .hp-steps li:hover { transform:translateY(-6px); background:${T.raniSoft}; }
        .hp-steps li:hover .hp-step-n { animation:hpPop .5s ease; }
        @keyframes hpPop { 40% { transform:scale(1.25) rotate(-8deg); } }
        .hp-marquee { overflow:hidden; mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent); }
        .hp-marquee-track { display:flex; gap:12px; width:max-content; animation:hpMarquee 32s linear infinite; }
        .hp-marquee:hover .hp-marquee-track { animation-play-state:paused; }
        .hp-marquee-track span { color:#fff; border:1px solid rgba(255,255,255,0.22); border-radius:999px; padding:10px 20px; font-size:16px; font-weight:500; white-space:nowrap; }
        @keyframes hpMarquee { to { transform:translateX(-50%); } }
        .hp-btn-gold { box-shadow:0 10px 30px -10px rgba(255,178,36,0.8); }
        .hp-btn-gold:hover, .hp-btn-rani:hover, .hp-btn-ink:hover { transform:translateY(-2px); }
        .hp-btn:active { transform:translateY(0) scale(.98); }
        .hp-quote { transition:transform .3s ease; }
        .hp-quote:nth-child(odd):hover { transform:rotate(-1deg) translateY(-4px); }
        .hp-quote:nth-child(even):hover { transform:rotate(1deg) translateY(-4px); }
        .hp-final { position:relative; overflow:hidden; }
        .hp-final::before, .hp-final::after { content:"🌼"; position:absolute; font-size:120px; opacity:.18; animation:hpSpin 24s linear infinite; }
        .hp-final::before { left:-30px; top:-30px; } .hp-final::after { right:-30px; bottom:-40px; animation-direction:reverse; }
        @keyframes hpSpin { to { transform:rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .hp-rot, .hp-marquee-track, .hp-final::before, .hp-final::after { animation:none !important; }
          .hp-tile:hover, .hp-steps li:hover, .hp-quote:hover, .hp-gen-row:hover .hp-gen-card { transform:none; }
        }
        @media (max-width: 960px) {
          .hp-hero-grid { grid-template-columns:1fr; gap:48px; }
          .hp-bento { grid-template-columns:repeat(2,1fr); }
          .hp-t-ritual { grid-column:span 2; grid-row:auto; grid-template-columns:1fr; }
          .hp-t-tree, .hp-t-fest { grid-column:span 1; }
          .hp-t-mem, .hp-t-ai, .hp-t-book { grid-column:span 2; }
          .hp-steps, .hp-guides { grid-template-columns:1fr 1fr; }
        }
        @media (max-width: 640px) {
          .hp-hero { padding:108px 0 72px; }
          .hp-sec { padding:72px 0; }
          .hp-bento, .hp-steps, .hp-guides, .hp-quotes { grid-template-columns:1fr; }
          .hp-t-tree, .hp-t-fest, .hp-t-mem, .hp-t-ai, .hp-t-book, .hp-t-ritual { grid-column:span 1; }
          .hp-t-book { flex-direction:column; align-items:flex-start; padding:26px; }
          .hp-cta-row .hp-btn { width:100%; }
          .hp-wrap { padding:0 6px; }
          .hp-gen-row { grid-template-columns:34px 12px 1fr; gap:8px; }
          .hp-gen-year { font-size:12px; }
          .hp-gen-dot { width:12px; height:12px; }
          .hp-thread { left:51px; }
          .hp-gen-card .hp-avatar { display:none; }
          .hp-gen-card { padding:12px 14px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-thread, .hp-gen-row { animation:none; }
          .hp-btn { transition:none; }
        }
      `}</style>
    </>
  );
}
