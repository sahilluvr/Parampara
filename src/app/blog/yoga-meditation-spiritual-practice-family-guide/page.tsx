import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Yoga & Meditation as Family Heritage — How Indian Families Pass Down Spiritual Practice | OurParampara",
  description: "Traditional Indian yoga is a comprehensive spiritual practice — physical postures (asanas) are one of eight limbs, along with ethical disciplines, breath control (pranayama), sensory withdrawal, conce",
  keywords: "yoga family heritage India, meditation Indian traditions, yoga spiritual practice vs fitness, pranayama children guide, family meditation traditions India, Indian yoga heritage",
  openGraph: { title: "Yoga & Meditation as Family Heritage — How Indian Families Pass Down Spiritual Practice", description: "Traditional Indian yoga is a comprehensive spiritual practice — physical postures (asanas) are one of eight limbs, along with ethical disciplines, breath control (pranayama), sensory withdrawal, conce", url: "https://www.ourparampara.com/blog/yoga-meditation-spiritual-practice-family-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=yoga-meditation-spiritual-practice-family-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=yoga-meditation-spiritual-practice-family-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/yoga-meditation-spiritual-practice-family-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="yoga-meditation-spiritual-practice-family-guide" title="Yoga & Meditation as Family Heritage — How Indian Families Pass Down Spiritual Practice" description="Traditional Indian yoga is a comprehensive spiritual practice — physical postures (asanas) are one of eight limbs, along with ethical disciplines, breath control (pranayama), sensory withdrawal, conce" date="2026-06-16" category="Heritage Guide"
        faqs={[
          { q: "What is the difference between traditional yoga and modern fitness yoga?", a: "Traditional Indian yoga is a comprehensive spiritual practice — physical postures (asanas) are one of eight limbs, along with ethical disciplines, breath control (pranayama), sensory withdrawal, concentration, meditation, and samadhi. Modern fitness yoga primarily focuses on asanas for physical health. Traditional yoga understands the body as a vehicle for consciousness, not an end in itself." },
          { q: "How can Indian families pass down meditation practice?", a: "Begin with simple, short practices — 5 minutes of pranayama daily at a specific time. Involve children from age 5 — children are naturally able to sit still in supported meditation. Connect the practice to family spiritual tradition — after puja, using a family mantra. Many Indian families have specific mantras passed through generations — if yours has such a lineage, document it." },
          { q: "What is pranayama and how is it taught to children?", a: "Pranayama (breath control) is yoga's fourth limb. For children: Anulom-Vilom (alternate nostril breathing), Bhramari (humming bee breath), and simple deep abdominal breathing are appropriate. Framed as breathing games, not formal practice. Even 5 minutes daily improves children's concentration and emotional regulation." },
        ]}
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Heritage Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🧘</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Yoga & Meditation as Family Heritage — How Indian Families Pass Down Spiritual Practice</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Yoga and meditation have been part of Indian family life for thousands of years — far predating the global yoga movement. For Indian families, preserving the distinction between yoga as spiritual practice and yoga as fitness is important. The family pranayama practice, the family mantra, the meditation lineage — are heritage as specific as any ritual.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Traditional yoga is 8-limbed (asanas are one limb). Start meditation with 5-minute pranayama daily. Children from age 5 can participate — Anulom-Vilom and Bhramari are gentle starting points. Many Indian families have Kula Devata (family deity) and family mantra — the centre of family spiritual practice.</p>
          </div>

          <h2 style={h2}>India's Major Yoga Traditions</h2>
          <p style={s}>Distinct yoga traditions: Hatha Yoga (physical postures), Raja Yoga (meditation, Patanjali tradition), Bhakti Yoga (devotion — kirtan, puja, mantra), Jnana Yoga (knowledge and inquiry), Karma Yoga (action without attachment), Kundalini Yoga (energy practices). Most Indian families practice an organic combination — daily puja is Bhakti Yoga, acting with integrity is Karma Yoga.</p>
          <h2 style={h2}>Family Mantra Traditions</h2>
          <p style={s}>Many Indian families have a Kula Mantra — a specific sound or phrase passed through the family lineage for daily meditation and puja. Some have a Guru lineage — a specific teacher whose teaching has been passed through generations. These specific mantra and lineage traditions are the most intimate family spiritual heritage — they exist nowhere outside the family and are lost when not transmitted.</p>
          <h2 style={h2}>Meditation & Children</h2>
          <p style={s}>Research shows benefits of meditation for children: improved attention, emotional regulation, stress management. Indian traditional approaches: learning to sit quietly, watching the breath, visualization of a deity, chanting simple mantras. The most effective teaching is modelling — children who see parents meditate daily are far more likely to develop their own practice.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific spiritual practice lineage — the specific mantra used, the teacher followed, the specific pranayama sequence practiced daily. If any elder has a sustained meditation practice, record them explaining it. This specific knowledge is not in any book — it lives in your family.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="yoga-meditation-spiritual-practice-family-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🧘</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your sacred journeys, ceremonies and heritage on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
