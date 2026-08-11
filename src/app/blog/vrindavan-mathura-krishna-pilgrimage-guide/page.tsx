import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vrindavan & Mathura — Complete Krishna Pilgrimage Guide | OurParampara",
  description: "Key Vrindavan temples: Banke Bihari Temple (most visited — the idol's eyes are regularly veiled as they are considered too powerful for continuous viewing), ISKCON Temple (spectacular architecture and",
  keywords: "Vrindavan pilgrimage guide, Mathura Krishna birthplace, Braj Bhoomi pilgrimage, Vrindavan temples guide, Govardhan Parikrama guide, Radha Kund significance",
  openGraph: { title: "Vrindavan & Mathura — Complete Krishna Pilgrimage Guide", description: "Key Vrindavan temples: Banke Bihari Temple (most visited — the idol's eyes are regularly veiled as they are considered too powerful for continuous viewing), ISKCON Temple (spectacular architecture and", url: "https://www.ourparampara.com/blog/vrindavan-mathura-krishna-pilgrimage-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=vrindavan-mathura-krishna-pilgrimage-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=vrindavan-mathura-krishna-pilgrimage-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/vrindavan-mathura-krishna-pilgrimage-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="vrindavan-mathura-krishna-pilgrimage-guide" title="Vrindavan & Mathura — Complete Krishna Pilgrimage Guide" description="Key Vrindavan temples: Banke Bihari Temple (most visited — the idol's eyes are regularly veiled as they are considered too powerful for continuous viewing), ISKCON Temple (spectacular architecture and" date="2026-06-18" category="Heritage Guide"
        faqs={[
          { q: "What are the must-visit temples in Vrindavan?", a: "Key Vrindavan temples: Banke Bihari Temple (most visited — the idol's eyes are regularly veiled as they are considered too powerful for continuous viewing), ISKCON Temple (spectacular architecture and cultural programs), Prem Mandir (elaborately illuminated at night), Radha Raman Temple (ancient, believed to have appeared from a Shaligram stone), and the Nidhivan (a sacred forest where Krishna is believed to dance the Raas Leela each night — no one sleeps inside). Vrindavan has approximately 5,500 temples." },
          { q: "What is the Govardhan Parikrama?", a: "Govardhan Parikrama is the circumambulation of the Govardhan hill (the hill Lord Krishna lifted to protect the residents of Vrindavan from Indra's wrath). The parikrama is 21km and takes approximately 5-8 hours on foot. Many devotees perform it by rolling (doing dandavat pranam along the entire route — a rare and extraordinary act of devotion). The parikrama passes through Radha Kund, Syama Kund, Mansi Ganga, and several sacred spots." },
          { q: "What is the significance of Radha Kund?", a: "Radha Kund and Syama Kund are two sacred ponds near Govardhan hill considered the most sacred spots in all of Vaishnavism. According to tradition, Radha Kund appeared by the touch of Radharani's bracelet and contains the waters of all sacred rivers. Bathing in Radha Kund on Bahulastami (the dark eighth of Kartik month) is considered the most meritorious bathing anywhere on earth. The kunds are surrounded by small temples and quiet ghats with an atmosphere of extraordinary peace." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪈</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Vrindavan & Mathura — Complete Krishna Pilgrimage Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Mathura-Vrindavan — the Braj Bhoomi — is the land of Lord Krishna's childhood, adolescence, and divine play (Lila). For Vaishnava devotees, this region carries the highest spiritual significance. Walking in the same forests where Krishna played the flute, seeing the hill he lifted, bathing in the kunds where Radha bathed — Braj Bhoomi is considered as sacred as any pilgimage destination in India.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Mathura: Krishna Janmabhoomi (birthplace temple), Dwarkadhish Temple, Vishram Ghat for bathing. Vrindavan (11km from Mathura): Banke Bihari, ISKCON, Prem Mandir, Radha Raman, Nidhivan (closed at night). Govardhan: Govardhan Parikrama (21km), Radha Kund and Syama Kund (most sacred Vaishnava sites). Best time: Janmashtami (August) and Holi (March — most spectacular in Braj).</p>
          </div>

          <h2 style={h2}>Lathmar Holi in Braj</h2>
          <p style={s}>The Holi celebrations in Braj (Mathura-Vrindavan region) are the most elaborate in India — beginning almost two weeks before the main Holi day. Lathmar Holi at Barsana and Nandgaon is particularly famous — women playfully beat men with sticks while men try to shield themselves, re-enacting Krishna's playful visits to Radha's village. The Phulon ki Holi at Vrindavan's Banke Bihari Temple (celebration with flowers) is extraordinarily beautiful.</p>
          <h2 style={h2}>Vrindavan for Widows</h2>
          <p style={s}>Vrindavan has traditionally been a refuge for Hindu widows — particularly from West Bengal and UP — who come to spend their final years in Krishna's service. The widow ashrams of Vrindavan are a complex social phenomenon, and the image of hundreds of white-clad elderly women singing bhajans in the streets of Vrindavan is one of the most distinctive sights of Indian religious life.</p>
          <h2 style={h2}>Planning a Braj Yatra</h2>
          <p style={s}>Mathura-Vrindavan can be visited as a day trip from Delhi (160km) or overnight. Best time: Janmashtami (August), Kartik month (October-November — most spiritually significant for Vaishnavas), and Holi (March). Accommodation available in both Mathura and Vrindavan. Dress modestly — Vrindavan especially has strict dress code expectations near major temples.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Vrindavan/Mathura visits — the specific temples visited, the specific moment of darshan at Banke Bihari (when the curtain opens), the experience of Govardhan Parikrama if undertaken. Braj Bhoomi visits leave a specific kind of impression — the atmosphere of devotion in the air is described by pilgrims as unlike anywhere else.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="vrindavan-mathura-krishna-pilgrimage-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪈</p>
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
