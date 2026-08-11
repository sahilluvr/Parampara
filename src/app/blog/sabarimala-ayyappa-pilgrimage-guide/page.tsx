import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sabarimala — Complete Guide to the Ayyappa Pilgrimage, Vrittam & Traditions | OurParampara",
  description: "The Vrittam is a 41-day observance before the Sabarimala pilgrimage. The devotee wears black or blue, abstains from non-vegetarian food and alcohol, performs daily puja, and grows a beard. At the end,",
  keywords: "Sabarimala pilgrimage guide, Ayyappa pilgrimage guide, Sabarimala Vrittam 41 days, Sabarimala trek guide, Lord Ayyappa significance, Makaravilakku Sabarimala",
  openGraph: { title: "Sabarimala — Complete Guide to the Ayyappa Pilgrimage, Vrittam & Traditions", description: "The Vrittam is a 41-day observance before the Sabarimala pilgrimage. The devotee wears black or blue, abstains from non-vegetarian food and alcohol, performs daily puja, and grows a beard. At the end,", url: "https://www.ourparampara.com/blog/sabarimala-ayyappa-pilgrimage-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=sabarimala-ayyappa-pilgrimage-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=sabarimala-ayyappa-pilgrimage-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/sabarimala-ayyappa-pilgrimage-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="sabarimala-ayyappa-pilgrimage-guide" title="Sabarimala — Complete Guide to the Ayyappa Pilgrimage, Vrittam & Traditions" description="The Vrittam is a 41-day observance before the Sabarimala pilgrimage. The devotee wears black or blue, abstains from non-vegetarian food and alcohol, performs daily puja, and grows a beard. At the end," date="2026-06-09" category="Heritage Guide"
        faqs={[
          { q: "What is the 41-day Vrittam for Sabarimala?", a: "The Vrittam is a 41-day observance before the Sabarimala pilgrimage. The devotee wears black or blue, abstains from non-vegetarian food and alcohol, performs daily puja, and grows a beard. At the end, the Kettu Nira ritual is performed before departing with an Irumudi (sacred bundle)." },
          { q: "Who can visit Sabarimala?", a: "Following a 2018 Supreme Court ruling and subsequent developments, entry policies have been subject to legal and religious debate. Check the official Travancore Devaswom Board website for current rules before planning your visit." },
          { q: "What is the Irumudi?", a: "The Irumudi is the sacred two-compartment cloth bundle carried on the head throughout the pilgrimage. The front contains sacred items (coconut filled with ghee, camphor, prasad); the rear contains travel necessities. It must not touch the ground, and only those carrying an Irumudi may climb the 18 sacred steps." },
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
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Sabarimala — Complete Guide to the Ayyappa Pilgrimage, Vrittam & Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 9, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Sabarimala — the shrine of Lord Ayyappa in the Western Ghats of Kerala — draws 30-50 million pilgrims annually during the November-January season. The pilgrimage is unique: the 41-day Vrittam of austerity that precedes it, the Irumudi carried on the head, the 18 sacred steps, and the brotherhood among all pilgrims who address each other as Swami.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Sabarimala season: November to January. 41-day Vrittam mandatory. Wear black or blue. Carry Irumudi on head. Trek 5km from Pamba to shrine. 18 sacred steps (Pathinettampadi) to sanctum. Register on sabarimalaonline.org. All pilgrims address each other as Swami.</p>
          </div>

          <h2 style={h2}>The 18 Sacred Steps</h2>
          <p style={s}>The Pathinettampadi (18 sacred steps) to the Sabarimala shrine represent the 18 puranas and 18 senses to be transcended. Only pilgrims with the Irumudi may climb these steps, made of Panchaloha (five-metal alloy).</p>
          <h2 style={h2}>Makaravilakku</h2>
          <p style={s}>The Makaravilakku festival (January 14) is the culmination of the Sabarimala season. A celestial star (Makara Jyothi) is believed to appear in the sky — considered a divine blessing. This day draws the largest single-day crowd of the season.</p>
          <h2 style={h2}>Lord Ayyappa</h2>
          <p style={s}>Lord Ayyappa is the son of Shiva and Mohini (Vishnu's female form) — representing the union of Shaiva and Vaishnava traditions. He is depicted in the naisthika brahmacharya (perpetual celibacy) posture at Sabarimala — seated in yoga posture with a belt around the knees.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Sabarimala pilgrimage history — who completed the Vrittam, the years of each visit, the specific austerities maintained, and what the experience meant. The Sabarimala pilgrimage is one of the most physically and spiritually demanding in India — its documentation is a testament to devotion.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="sabarimala-ayyappa-pilgrimage-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🛕</p>
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
