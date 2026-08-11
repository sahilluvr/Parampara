import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sikh Gurdwara Etiquette — Complete Guide for Visitors, Langar & Seva | OurParampara",
  description: "Cover your head — mandatory for all visitors regardless of religion or gender. Scarves provided free at entrance. Modest clothing expected — no shorts or sleeveless tops. Remove shoes at the entrance.",
  keywords: "Gurdwara etiquette guide, visiting Gurdwara first time, Gurdwara dress code, langar etiquette Gurdwara, Gurdwara seva guide, Matha Tekna how to, Gurdwara visit non-Sikhs",
  openGraph: { title: "Sikh Gurdwara Etiquette — Complete Guide for Visitors, Langar & Seva", description: "Cover your head — mandatory for all visitors regardless of religion or gender. Scarves provided free at entrance. Modest clothing expected — no shorts or sleeveless tops. Remove shoes at the entrance.", url: "https://www.ourparampara.com/blog/sikh-gurdwara-etiquette-langar-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=sikh-gurdwara-etiquette-langar-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=sikh-gurdwara-etiquette-langar-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/sikh-gurdwara-etiquette-langar-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="sikh-gurdwara-etiquette-langar-guide" title="Sikh Gurdwara Etiquette — Complete Guide for Visitors, Langar & Seva" description="Cover your head — mandatory for all visitors regardless of religion or gender. Scarves provided free at entrance. Modest clothing expected — no shorts or sleeveless tops. Remove shoes at the entrance." date="2026-06-16" category="Heritage Guide"
        faqs={[
          { q: "What should I wear when visiting a Gurdwara?", a: "Cover your head — mandatory for all visitors regardless of religion or gender. Scarves provided free at entrance. Modest clothing expected — no shorts or sleeveless tops. Remove shoes at the entrance. Wash your hands and feet before entering. No leather shoes inside the complex." },
          { q: "What is Matha Tekna?", a: "Matha Tekna is bowing before the Guru Granth Sahib Ji — placing the forehead to the ground in reverence. Approach respectfully, kneel, place your forehead on the floor before the scripture, then sit in the sangat. No specific prayer required — the sincere bow is sufficient." },
          { q: "Can non-Sikhs eat langar?", a: "Yes — langar is explicitly open to everyone regardless of religion, caste, or nationality. Join the line, receive your tray, sit on the floor in pangat (rows) with other diners. Strictly vegetarian. Return your tray after eating — participating in this small seva is encouraged." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪯</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Sikh Gurdwara Etiquette — Complete Guide for Visitors, Langar & Seva</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The Sikh Gurdwara is one of the most welcoming religious spaces in the world — open to all faiths, offering free food to all, organized entirely through voluntary community service. Understanding Gurdwara etiquette ensures your visit is respectful and meaningful.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Essentials: cover head (scarves provided), remove shoes, wash hands/feet. Enter, perform Matha Tekna (bow before Guru Granth Sahib Ji), sit in sangat. Langar (free vegetarian meal) open to all — sit in pangat. Seva (washing dishes, preparing food) can be offered. Photography permitted in parikrama, not during kirtan.</p>
          </div>

          <h2 style={h2}>The Darbar Sahib</h2>
          <p style={s}>The main prayer hall where the Guru Granth Sahib Ji is installed and kirtan performed continuously. Enter quietly, perform Matha Tekna, sit on the floor facing the scripture. Mobile phones on silent. The atmosphere of continuous kirtan is deeply peaceful. Karah Prasad (sweet semolina) is distributed — receive with both hands cupped.</p>
          <h2 style={h2}>Understanding Kirtan</h2>
          <p style={s}>Kirtan — singing shabads from the Guru Granth Sahib Ji — is the central spiritual practice. Ragis sing in ragas prescribed for different times of day. Even without understanding Punjabi, the music is deeply moving. Simply sit, listen, and be present.</p>
          <h2 style={h2}>Doing Seva</h2>
          <p style={s}>Gurdwaras run entirely through seva. Common forms open to all: washing dishes, peeling vegetables, serving langar food, cleaning. Simply approach the langar area and ask how you can help. The experience of working alongside others in selfless service is itself a spiritual practice.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Gurdwara visits and seva performed. For Sikh families: the specific Gurdwara attended for generations, the sevadars known by name, the kirtan styles loved — these are the specific textures of your family's Sikh heritage.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="sikh-gurdwara-etiquette-langar-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪯</p>
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
