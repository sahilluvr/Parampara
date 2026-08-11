import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Waheguru Simran & Naam Japna — Complete Guide to Sikh Meditation Practices | OurParampara",
  description: "Waheguru Simran (Simran = remembrance, meditation) is the continuous mental and verbal repetition of Waheguru — the Sikh name for God, meaning 'Wondrous Enlightener'. It is considered the most direct ",
  keywords: "Waheguru Simran guide, Naam Japna Sikhism, Sikh meditation practices, Nitnem daily prayers guide, Waheguru meaning significance, Sikh spiritual practice guide",
  openGraph: { title: "Waheguru Simran & Naam Japna — Complete Guide to Sikh Meditation Practices", description: "Waheguru Simran (Simran = remembrance, meditation) is the continuous mental and verbal repetition of Waheguru — the Sikh name for God, meaning 'Wondrous Enlightener'. It is considered the most direct ", url: "https://www.ourparampara.com/blog/waheguru-simran-naam-japna-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=waheguru-simran-naam-japna-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=waheguru-simran-naam-japna-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/waheguru-simran-naam-japna-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="waheguru-simran-naam-japna-guide" title="Waheguru Simran & Naam Japna — Complete Guide to Sikh Meditation Practices" description="Waheguru Simran (Simran = remembrance, meditation) is the continuous mental and verbal repetition of Waheguru — the Sikh name for God, meaning 'Wondrous Enlightener'. It is considered the most direct " date="2026-06-18" category="Ritual Guide"
        faqs={[
          { q: "What is Waheguru Simran?", a: "Waheguru Simran (Simran = remembrance, meditation) is the continuous mental and verbal repetition of Waheguru — the Sikh name for God, meaning 'Wondrous Enlightener'. It is considered the most direct and effective spiritual practice in Sikhism. The Guru Granth Sahib Ji repeatedly emphasizes that Nam Simran (remembering God's name) is the way to realize God. Simran can be practiced silently (mental repetition), verbally (spoken softly), or musically (through kirtan)." },
          { q: "What is the Sikh Nitnem (daily prayers)?", a: "Nitnem is the mandatory daily prayer routine for Sikhs: in the morning (Amrit Vela — predawn) — Japji Sahib (Guru Nanak's composition — the opening and foundation of the Guru Granth Sahib Ji), Jaap Sahib, and Tav Prasad Savaiye; in the evening at sunset — Rehras Sahib; before sleep — Kirtan Sohila. The complete Nitnem takes approximately 45-60 minutes. Amrit Vela (the predawn hours) is considered the most spiritually charged time for Nitnem and Simran." },
          { q: "What does Waheguru mean?", a: "Waheguru is a compound: Wahe (wondrous, an exclamation of wonder and awe) + Guru (enlightener, the one who removes darkness). Together it means 'Wondrous Enlightener' or the divine being who transforms darkness into light. The name first appears in the writings of Bhai Gurdas, a contemporary of the Sikh Gurus. In Sikhism, God is one (Ik Onkar) — formless, without gender, without birth or death — and Waheguru is the name used to remember and address this One God." },
        ]}
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Ritual Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🪯</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Waheguru Simran & Naam Japna — Complete Guide to Sikh Meditation Practices</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Waheguru Simran and Naam Japna — the practice of remembering and repeating God's name — is the core spiritual practice of Sikhism. The Guru Granth Sahib Ji teaches that Nam Simran is the way to overcome fear, find peace, and unite the soul with God. For Sikh families, building a practice of Simran together is the deepest transmission of the faith.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Waheguru Simran: continuous repetition of 'Waheguru' — mentally or verbally — at any time. Nitnem (daily prayers): morning (Amrit Vela predawn — Japji Sahib, Jaap Sahib, Tav Prasad Savaiye), evening (Rehras Sahib), and night (Kirtan Sohila). Amrit Vela (4-6 AM) is considered most spiritually powerful time for Simran.</p>
          </div>

          <h2 style={h2}>How to Begin Naam Simran</h2>
          <p style={s}>For beginners: start with 10-15 minutes of silent Waheguru repetition in the morning. Sit comfortably, close the eyes, and mentally repeat Waheguru with each breath or at a natural rhythm. The mind will wander — gently return it each time. Over weeks, the practice deepens and the name begins to repeat itself even when not consciously practiced. For families: beginning the morning with even 5 minutes of Waheguru repetition before children leave for school creates a spiritual anchor for the day.</p>
          <h2 style={h2}>Kirtan — Naam in Musical Form</h2>
          <p style={s}>Kirtan — the devotional singing of the Guru Granth Sahib Ji's compositions — is Naam Simran in musical form. The Gurus themselves expressed Simran through music; Guru Nanak sang his revelations with his companion Bhai Mardana. At the Golden Temple, kirtan continues 24 hours. For Sikh families, learning to sing even a few shabads (hymns) is one of the most accessible forms of Naam Simran. The Japji Sahib set to traditional ragas by the Hazuri Ragis is considered the most complete expression of Sikh musical spirituality.</p>
          <h2 style={h2}>Amrit Vela — The Sacred Predawn Hours</h2>
          <p style={s}>Amrit Vela (the hours between approximately 3-6 AM) is described in the Guru Granth Sahib Ji as the most auspicious time for Naam Simran and prayer. The Guru writes: 'In the Amrit Vela, meditate on the Naam.' At this time, the world is quiet, the mind is most receptive, and the spiritual atmosphere (according to tradition) is at its most conducive. Many devout Sikh families wake at Amrit Vela daily for Nitnem — this practice, maintained across generations, is among the most powerful family spiritual heritages.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Simran and Nitnem practices — at what time your family wakes for Amrit Vela, which shabads are sung at family gatherings, whether your family has a specific raag (musical mode) associated with specific prayers. The specific way Waheguru is remembered in your household — in what rhythms, at what times, with what music — is the most intimate expression of your family's Sikh faith.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="waheguru-simran-naam-japna-guide" category="Ritual Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪯</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, rituals and heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
