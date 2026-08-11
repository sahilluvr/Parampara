import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Indian Temple Etiquette — Complete Guide to Darshan, Dress Code & Traditions | OurParampara",
  description: "Remove shoes before the temple compound gate (not just the door). Dress modestly — no shorts or sleeveless tops. Some major South Indian temples require men bare-chested or in dhoti. Cover head in som",
  keywords: "Indian temple etiquette guide, temple darshan guide, Hindu temple dress code, temple visit first time guide, pradakshina significance, temple prasad guide, bell ringing temple significance",
  openGraph: { title: "Indian Temple Etiquette — Complete Guide to Darshan, Dress Code & Traditions", description: "Remove shoes before the temple compound gate (not just the door). Dress modestly — no shorts or sleeveless tops. Some major South Indian temples require men bare-chested or in dhoti. Cover head in som", url: "https://www.ourparampara.com/blog/indian-temple-etiquette-darshan-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-temple-etiquette-darshan-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=indian-temple-etiquette-darshan-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-temple-etiquette-darshan-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="indian-temple-etiquette-darshan-guide" title="Indian Temple Etiquette — Complete Guide to Darshan, Dress Code & Traditions" description="Remove shoes before the temple compound gate (not just the door). Dress modestly — no shorts or sleeveless tops. Some major South Indian temples require men bare-chested or in dhoti. Cover head in som" date="2026-06-16" category="Ritual Guide"
        faqs={[
          { q: "What should I know before visiting a Hindu temple in India?", a: "Remove shoes before the temple compound gate (not just the door). Dress modestly — no shorts or sleeveless tops. Some major South Indian temples require men bare-chested or in dhoti. Cover head in some temples. Mobile phones on silent; photography prohibited inside inner sanctum in most temples. Enter with clean hands, ideally after a bath." },
          { q: "What is Darshan and how do I perform it?", a: "Darshan (divine viewing) is the central act of temple worship. Walk respectfully toward the inner sanctum, ring the bell on entering, stand before the deity with hands joined in namaste, accept the arati (flame), receive prasad with both cupped hands, and accept Charanamrita (sacred water) if offered. Darshan is understood as reciprocal — the devotee sees the deity and the deity sees the devotee." },
          { q: "What is Pradakshina?", a: "Pradakshina (circumambulation) is walking clockwise around the deity or temple — the divine always on your right. Most temples have a designated pradakshina path. Number of circumambulations varies by deity: 3 for Ganesha, 7 for the Sun. In some Shaiva traditions, the pradakshina should not cross the Nandi — approach and return on the same path." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🛕</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Indian Temple Etiquette — Complete Guide to Darshan, Dress Code & Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Hindu temples are sacred spaces with protocols developed over thousands of years. Understanding temple etiquette ensures your visit is respectful and meaningful — whether you are a lifelong Hindu visitor or a first-time visitor of any background.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Temple essentials: remove shoes at compound gate. Dress modestly. Wash hands. Ring the bell entering. Stand before deity in namaste. Receive prasad with both cupped hands. Perform pradakshina (clockwise circumambulation). No photography inside sanctum. Maintain silence. Do not point feet toward the deity.</p>
          </div>

          <h2 style={h2}>The Significance of Temple Architecture</h2>
          <p style={s}>Hindu temple architecture encodes sacred knowledge in stone: garbhagriha (womb chamber — inner sanctum) where the deity resides; shikhara (tower) representing the sacred mountain; mandapa (pillared hall) for devotees; gopuram (gateway tower) of South Indian temples. Walking from gopuram to garbhagriha is understood as a journey from the outer world to the divine centre.</p>
          <h2 style={h2}>Prasad — Sacred Food</h2>
          <p style={s}>Always accept prasad with both cupped hands (right below left). Never refuse prasad. Common prasad: flowers, coconuts, fruits, sweets. Some temples offer renowned prasad: Tirupati's ladoo, Shirdi Sai Baba's udi, Vrindavan's milk sweets. Charanamrita (liquid prasad from the idol's bathing) is considered especially purifying.</p>
          <h2 style={h2}>South Indian Temple Traditions</h2>
          <p style={s}>South Indian temples have additional protocols: men may remove shirts for the inner sanctum; non-Hindus not permitted inside the sanctum of significant temples (Padmanabhaswamy, Guruvayur). The elaborate abhishekam rituals and alankaram (decoration) change throughout the day — visiting during specific puja times offers a richer experience.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific temple — the kula devata (family deity) temple attended across generations, the specific prasad always brought home, the specific pujas sponsored. The relationship between an Indian family and its kula devata temple is among the most long-standing and meaningful heritage bonds.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-temple-etiquette-darshan-guide" category="Ritual Guide"/>

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
