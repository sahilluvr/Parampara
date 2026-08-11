import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gurpurab — Complete Guide to Guru Nanak Jayanti Celebrations & Traditions | OurParampara",
  description: "Complete Gurpurab guide — significance of Guru Nanak Dev Ji's birthday, Nagar Kirtan processions, Akhand Path, langar traditions, and how Sikh families celebrate worldwide.",
  keywords: "Gurpurab celebration guide, Guru Nanak Jayanti significance, Nagar Kirtan procession, Akhand Path guide, Gurpurab date 2026, Sikh festival traditions, langar significance Gurpurab",
  openGraph: { title: "Gurpurab — Complete Guide to Guru Nanak Jayanti", description: "Nagar Kirtan, Akhand Path, langar traditions and how Sikh families celebrate Guru Nanak Dev Ji's birthday worldwide.", url: "https://www.ourparampara.com/blog/gurpurab-guru-nanak-jayanti-celebration-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=gurpurab-guru-nanak-jayanti-celebration-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=gurpurab-guru-nanak-jayanti-celebration-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/gurpurab-guru-nanak-jayanti-celebration-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="gurpurab-guru-nanak-jayanti-celebration-guide" title="Gurpurab — Complete Guide to Guru Nanak Jayanti Celebrations & Traditions" description="Complete Gurpurab guide — significance of Guru Nanak Dev Ji's birthday, Nagar Kirtan, Akhand Path, langar traditions." date="2026-05-02" category="Festival Guide"
        faqs={[
          { q: "When is Guru Nanak Jayanti 2026?", a: "Guru Nanak Jayanti 2026 (Gurpurab) falls on November 5, 2026. It is observed on the Kartik Pooranmashi — the full moon day of the Kartik month — which changes every year according to the lunar calendar." },
          { q: "What is Akhand Path?", a: "Akhand Path is the continuous, uninterrupted recitation of the entire Sri Guru Granth Sahib Ji — all 1430 pages — completed over approximately 48 hours. It is performed by a relay of readers (Pathis) and begins two days before Gurpurab, concluding on the morning of the celebration." },
          { q: "What is the significance of langar on Gurpurab?", a: "Langar (community kitchen) is central to Sikh celebrations and embodies the principle of seva (selfless service) and equality — all people eat together regardless of caste, class, or religion. On Gurpurab, langar is served throughout the day at Gurdwaras and often in the streets after Nagar Kirtan." },
        ]}
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Festival Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🪯</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Gurpurab — Complete Guide to Guru Nanak Jayanti Celebrations &amp; Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>May 2, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Gurpurab — the celebration of Guru Nanak Dev Ji&apos;s birthday — is one of the most sacred and joyous occasions in the Sikh calendar. Observed on the full moon day of Kartik (typically October or November), it commemorates the birth of the founder of Sikhism, whose teachings of equality, seva (selfless service), and devotion to the One God form the foundation of Sikh faith. For Sikh families worldwide, Gurpurab is a time of prayer, community, and deep reflection.</p>

          {/* Quick answer box — for AI engine citation */}
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Gurpurab is celebrated over three days: Akhand Path (continuous reading of Guru Granth Sahib Ji) begins 48 hours before, followed by Nagar Kirtan procession the evening before, Prabhat Pheri (early morning hymn processions) on the day, and Gurdwara celebrations with kirtan, katha, and langar (free community meal). Homes and Gurdwaras are decorated with lights.</p>
          </div>


          <h2 style={h2}>The Life and Teachings of Guru Nanak Dev Ji</h2>
          <p style={s}>Born in 1469 in Nankana Sahib (in present-day Pakistan), Guru Nanak Dev Ji was the first of the ten Sikh Gurus. From a young age, he showed extraordinary spiritual wisdom and rejected the religious orthodoxies of his time. His central teachings — Ik Onkar (there is one God), Naam Japna (remembrance of God&apos;s name), Kirat Karni (honest earning), and Vand Chakna (sharing with others) — remain the core of Sikh life today. He travelled extensively across South Asia, the Middle East, and Central Asia, spreading his message of equality and devotion.</p>

          <h2 style={h2}>How Gurpurab Is Celebrated</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Two days before — Akhand Path begins","The continuous recitation of Sri Guru Granth Sahib Ji (the 1430-page Sikh scripture) begins, performed by a relay of readers, completing exactly at the time of celebration on Gurpurab morning."],["Evening before — Nagar Kirtan","A grand procession through the streets led by the Panj Pyaras, with the Guru Granth Sahib Ji carried on a decorated float. Devotees follow singing shabads (hymns), with kirtan performances along the route."],["Gurpurab morning — Prabhat Pheri","Early morning processions (3-6 AM) singing shabads through residential neighbourhoods — one of the most spiritually moving aspects of the celebration."],["Morning — Gurdwara celebrations","Akhand Path concludes. Special kirtan, katha (spiritual discourse), and ardas are performed. The Gurdwara is decorated with lights and flowers."],["Throughout the day — Langar","Free community meals are served continuously at the Gurdwara and often in the streets — anyone and everyone is welcome, regardless of faith."],["Evening — Illumination","Gurdwaras and Sikh homes are lit with lamps and lights, similar to Diwali illumination, celebrating the spiritual light Guru Nanak brought to the world."]].map(([k,v])=>(
              <div key={k} style={{ padding:"12px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 5px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Akhand Path — The Continuous Recitation</h2>
          <p style={s}>The Akhand Path is one of the most significant Sikh religious practices — a continuous, uninterrupted reading of the entire Sri Guru Granth Sahib Ji completed over approximately 48 hours. The reading never stops; readers take turns in shifts, maintaining the flow from the opening lines to the final verse. For families, an Akhand Path at home for Gurpurab (or any auspicious occasion) is a profound spiritual undertaking that requires careful planning — finding qualified Pathis (readers), setting up a clean and dedicated space, and ensuring the reading is never interrupted.</p>

          <h2 style={h2}>Langar — The Community Kitchen</h2>
          <p style={s}>Langar embodies the Sikh principle of equality more concretely than perhaps any other practice. Instituted by Guru Nanak Dev Ji himself, langar is a free community meal served to all people — regardless of caste, religion, gender, or social status — who sit together on the floor as equals. On Gurpurab, Gurdwaras prepare langar for thousands. Many Sikh families also serve langar in their local communities — setting up stalls outside their homes or in community spaces to feed neighbours and passersby.</p>

          <h2 style={h2}>Gurpurab for Sikh Families Abroad</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Major Sikh communities in the UK, Canada, USA, and Australia organise large Nagar Kirtans — London&apos;s Nagar Kirtan in Southall draws hundreds of thousands annually","Many Gurdwaras abroad maintain the full Akhand Path and three-day Gurpurab programme","Families abroad often combine a Gurdwara visit with home celebrations — kirtan, langar preparation, and teaching children about Guru Nanak&apos;s life stories","The &apos;Sikh Channel&apos; and &apos;Sangat TV&apos; broadcast Gurpurab celebrations live from the Golden Temple in Amritsar for diaspora families","Community WhatsApp groups coordinate langar preparation and distribution in cities with smaller Sikh populations"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family&apos;s specific Gurpurab traditions — which Gurdwara your family has attended for generations, any specific sewa your family performs, the shabads most meaningful to your elders. These family-specific details are what make Gurpurab your family&apos;s celebration, not just a calendar event.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="gurpurab-guru-nanak-jayanti-celebration-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪯</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s Gurpurab traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Save your family&apos;s Gurpurab memories, favourite shabads, and langar traditions on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
