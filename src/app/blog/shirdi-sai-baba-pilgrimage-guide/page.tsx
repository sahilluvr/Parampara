import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Shirdi Sai Baba — Complete Pilgrimage Guide, Darshan & Traditions | OurParampara",
  description: "Darshan at Shirdi Sai Baba temple can be booked online at shreesaibabasansthan.org for priority darshan (approximately ₹200-300 per person). Free darshan (Sadhu Seva) is available for all without book",
  keywords: "Shirdi Sai Baba pilgrimage guide, Shirdi darshan booking, Sai Baba Samadhi Mandir, Dwarkamai Shirdi guide, Sai Baba udi prasad, Shirdi NRI guide",
  openGraph: { title: "Shirdi Sai Baba — Complete Pilgrimage Guide, Darshan & Traditions", description: "Darshan at Shirdi Sai Baba temple can be booked online at shreesaibabasansthan.org for priority darshan (approximately ₹200-300 per person). Free darshan (Sadhu Seva) is available for all without book", url: "https://www.ourparampara.com/blog/shirdi-sai-baba-pilgrimage-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=shirdi-sai-baba-pilgrimage-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=shirdi-sai-baba-pilgrimage-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/shirdi-sai-baba-pilgrimage-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="shirdi-sai-baba-pilgrimage-guide" title="Shirdi Sai Baba — Complete Pilgrimage Guide, Darshan & Traditions" description="Darshan at Shirdi Sai Baba temple can be booked online at shreesaibabasansthan.org for priority darshan (approximately ₹200-300 per person). Free darshan (Sadhu Seva) is available for all without book" date="2026-06-18" category="Heritage Guide"
        faqs={[
          { q: "How do I book darshan at Shirdi Sai Baba?", a: "Darshan at Shirdi Sai Baba temple can be booked online at shreesaibabasansthan.org for priority darshan (approximately ₹200-300 per person). Free darshan (Sadhu Seva) is available for all without booking but involves waiting queues of 2-8 hours. The Samadhi Mandir (main shrine) is open from 4 AM to 11 PM. Five Aarti times daily are the most auspicious visiting times: Kakad Aarti (5 AM), Madhyan Aarti (12 PM), Dhoop Aarti (6 PM), Shej Aarti (10 PM). Shirdi is 240km from Mumbai (4-5 hours by road) or accessible by train to Shirdi station." },
          { q: "What is the Udi prasad from Shirdi?", a: "Udi (sacred ash) is the primary prasad distributed at Shirdi Sai Baba temple — the ash from the sacred fire (Dhuni) that Sai Baba maintained continuously at Dwarkamai during his lifetime. It is distributed free to all pilgrims. Udi is considered to have healing properties — Sai Baba himself used it for healing the sick. The Dhuni at Dwarkamai is still burning — considered the same fire Sai Baba maintained over 100 years ago." },
          { q: "Who was Sai Baba of Shirdi?", a: "Sai Baba of Shirdi (c. 1838-1918) was a spiritual master who lived in the village of Shirdi in Maharashtra. His religious identity is deliberately ambiguous — he practiced both Hindu and Muslim traditions, quoted from both the Quran and the Bhagavad Gita, and was loved by followers of both religions. He taught the unity of God (Allah Malik — God is the master) and emphasized love, compassion, self-surrender, and service. He is worshipped by millions across all religious communities in India." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🛕</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Shirdi Sai Baba — Complete Pilgrimage Guide, Darshan & Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Shirdi Sai Baba — the saint of Shirdi — is one of the most widely worshipped figures in modern India, revered across Hindu and Muslim communities for his message of religious unity, compassion, and the power of faith. The Shirdi Sai Baba temple in Maharashtra draws over 100,000 pilgrims daily, making it one of the most visited religious sites in India.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Shirdi darshan: book priority darshan online at shreesaibabasansthan.org (₹200-300). Five Aarti times daily — most auspicious visiting times. Free darshan also available (2-8 hour wait). Key sites: Samadhi Mandir (main shrine), Dwarkamai (where Sai Baba lived and maintained the Dhuni), Chavadi, and the Neem tree under which Sai Baba meditated. Udi (sacred ash) distributed free to all pilgrims.</p>
          </div>

          <h2 style={h2}>The Sites at Shirdi</h2>
          <p style={s}>Beyond the main Samadhi Mandir: Dwarkamai (the mosque/dwelling where Sai Baba lived — the Dhuni still burns here, one of the most powerful sites at Shirdi); Chavadi (where Sai Baba slept on alternate nights); the Gurusthan (a neem tree under which the young Sai Baba was first seen seated in meditation, believed to be over 200 years old); Lendi Baug (the garden Sai Baba tended, with a lamp he lit daily that is still maintained). A complete Shirdi darshan visits all four sites.</p>
          <h2 style={h2}>Sai Baba's Teachings</h2>
          <p style={s}>The core of Sai Baba's teaching is contained in two phrases: Shraddha (faith) and Saburi (patience). He taught that sincere faith combined with patient perseverance leads to the divine — not through elaborate ritual or sectarian practice but through love, service to others, and trust in God's will. His parables and the stories of his miracles are collected in the Shri Sai Satcharitra — the primary devotional text for Sai devotees, commonly read on Thursdays.</p>
          <h2 style={h2}>Shirdi for All Faiths</h2>
          <p style={s}>Perhaps the most distinctive aspect of Shirdi is its genuinely cross-religious character. Unlike most Hindu temples, the Shirdi Sai Baba Samadhi Mandir welcomes devotees of all faiths equally — Muslim devotees, Christian pilgrims, and Parsis join Hindus at the Aarti. This reflects Sai Baba's own life practice and is one of the most powerful living examples of India's pluralistic spiritual tradition.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Shirdi visits — the specific Aarti attended, the experience of receiving Udi, any vow made and fulfilled at Shirdi. Many Indian families have a tradition of visiting Shirdi on significant occasions — a recovery from illness, before a major life decision, in gratitude for a prayer answered. These visits are among the most personal pieces of family spiritual heritage.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="shirdi-sai-baba-pilgrimage-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🛕</p>
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
