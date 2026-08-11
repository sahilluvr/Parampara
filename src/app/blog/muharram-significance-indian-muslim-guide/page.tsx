import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Muharram — Significance, Ashura Traditions & How Indian Muslim Families Observe | OurParampara",
  description: "Muharram is the first month of the Islamic calendar — one of four sacred months. Ashura (10th Muharram) is especially significant: for Sunni Muslims, it commemorates Moses being saved from Pharaoh; fo",
  keywords: "Muharram significance guide, Ashura India traditions, Muharram Indian Muslims, Battle of Karbala significance, Muharram Shia Sunni difference, Tazia procession guide",
  openGraph: { title: "Muharram — Significance, Ashura Traditions & How Indian Muslim Families Observe", description: "Muharram is the first month of the Islamic calendar — one of four sacred months. Ashura (10th Muharram) is especially significant: for Sunni Muslims, it commemorates Moses being saved from Pharaoh; fo", url: "https://www.ourparampara.com/blog/muharram-significance-indian-muslim-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=muharram-significance-indian-muslim-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=muharram-significance-indian-muslim-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/muharram-significance-indian-muslim-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="muharram-significance-indian-muslim-guide" title="Muharram — Significance, Ashura Traditions & How Indian Muslim Families Observe" description="Muharram is the first month of the Islamic calendar — one of four sacred months. Ashura (10th Muharram) is especially significant: for Sunni Muslims, it commemorates Moses being saved from Pharaoh; fo" date="2026-06-12" category="Heritage Guide"
        faqs={[
          { q: "What is Muharram and why is it significant?", a: "Muharram is the first month of the Islamic calendar — one of four sacred months. Ashura (10th Muharram) is especially significant: for Sunni Muslims, it commemorates Moses being saved from Pharaoh; for Shia Muslims, it is the day of mourning for Imam Hussain's martyrdom at Karbala in 680 CE." },
          { q: "What is Ashura fasting?", a: "Fasting on Ashura is a Sunnah for Sunni Muslims — voluntary, not obligatory. Prophet Muhammad recommended fasting on the 9th and 10th, or 10th and 11th of Muharram. The merit is expiation of the previous year's sins." },
          { q: "How do Shia Muslims observe Muharram in India?", a: "Indian Shia Muslims observe Muharram with Majalis (mourning gatherings), Matam (lamentation), Tazia processions, and on Ashura, large public processions. Lucknow, Hyderabad, and Delhi have the most elaborate Muharram observances in India." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌙</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Muharram — Significance, Ashura Traditions & How Indian Muslim Families Observe</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 12, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Muharram carries different significance for different Muslim communities — voluntary fasting for Sunni Muslims, intense mourning for Shia Muslims commemorating Imam Hussain's martyrdom at Karbala. Understanding both perspectives is essential to understanding Indian Muslim heritage.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Muharram is the first Islamic month. Ashura (10th day) is key. Sunni: voluntary 2-day fast. Shia: 10-day mourning, Majalis, Tazia processions culminating Ashura. Both traditions honour the sacred month sincerely.</p>
          </div>

          <h2 style={h2}>The Battle of Karbala</h2>
          <p style={s}>In 680 CE, Imam Hussain — grandson of the Prophet — refused allegiance to the unjust Umayyad Caliph Yazid. He and 72 companions and family were surrounded at Karbala, denied water for three days, and killed on Ashura. The themes of justice, sacrifice, and standing against oppression resonate across centuries.</p>
          <h2 style={h2}>Indian Muharram Traditions</h2>
          <p style={s}>India has distinctive Muharram traditions: Lucknow's elaborate Tazia processions, Hyderabad's Bibi ka Alam procession. Even Hindus in many areas participate in Muharram processions — a uniquely Indian example of cross-religious solidarity.</p>
          <h2 style={h2}>For Muslim Families</h2>
          <p style={s}>Muslim families observe Muharram according to their tradition. Both approaches teach children about justice, sacrifice, and the importance of standing for what is right regardless of cost.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Muharram traditions — whether fasting, Majalis attendance, or procession participation. The specific Majalis your family attends, the Nohay recited, the foods prepared — are heritage worth preserving.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="muharram-significance-indian-muslim-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌙</p>
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
