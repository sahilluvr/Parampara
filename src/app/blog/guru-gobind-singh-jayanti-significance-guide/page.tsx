import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Guru Gobind Singh Jayanti — Complete Guide to Significance, Celebrations & Traditions | OurParampara",
  description: "Guru Gobind Singh Jayanti 2026 falls on January 6, 2026 (Nanakshahi calendar). It celebrates the birth of the 10th Sikh Guru, born at Patna Sahib in Bihar in 1666.",
  keywords: "Guru Gobind Singh Jayanti guide, 10th Sikh Guru significance, Nagar Kirtan Patna Sahib, Guru Gobind Singh teachings, Khalsa founder birthday",
  openGraph: { title: "Guru Gobind Singh Jayanti — Complete Guide to Significance, Celebrations & Traditions", description: "Guru Gobind Singh Jayanti 2026 falls on January 6, 2026 (Nanakshahi calendar). It celebrates the birth of the 10th Sikh Guru, born at Patna Sahib in Bihar in 1666.", url: "https://www.ourparampara.com/blog/guru-gobind-singh-jayanti-significance-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=guru-gobind-singh-jayanti-significance-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=guru-gobind-singh-jayanti-significance-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/guru-gobind-singh-jayanti-significance-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="guru-gobind-singh-jayanti-significance-guide" title="Guru Gobind Singh Jayanti — Complete Guide to Significance, Celebrations & Traditions" description="Guru Gobind Singh Jayanti 2026 falls on January 6, 2026 (Nanakshahi calendar). It celebrates the birth of the 10th Sikh Guru, born at Patna Sahib in Bihar in 1666." date="2026-06-11" category="Festival Guide"
        faqs={[
          { q: "When is Guru Gobind Singh Jayanti 2026?", a: "Guru Gobind Singh Jayanti 2026 falls on January 6, 2026 (Nanakshahi calendar). It celebrates the birth of the 10th Sikh Guru, born at Patna Sahib in Bihar in 1666." },
          { q: "What is the significance of Guru Gobind Singh Ji?", a: "Guru Gobind Singh Ji founded the Khalsa Panth in 1699, compiled the final Guru Granth Sahib Ji, and was a poet, scholar, and warrior. He sacrificed his entire family for religious freedom and human dignity." },
          { q: "What happens at Patna Sahib on Jayanti?", a: "Hundreds of thousands of Sikh pilgrims gather at Patna Sahib (birthplace and Takht) for Nagar Kirtan, Akhand Path, kirtan, and langar — one of the largest Sikh gatherings outside Amritsar." },
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
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Guru Gobind Singh Jayanti — Complete Guide to Significance, Celebrations & Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 11, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Guru Gobind Singh Ji — the tenth Sikh Guru — was warrior, poet, scholar, and founder of the Khalsa Panth. His Jayanti is one of the most significant celebrations in the Sikh calendar, marked with Nagar Kirtan, Akhand Path, and community gathering worldwide.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Guru Gobind Singh Jayanti 2026: January 6. Celebrations: Akhand Path ending on Jayanti day, Nagar Kirtan procession, kirtan and katha at Gurdwara, langar throughout. Most important celebration at Patna Sahib (birthplace and Takht).</p>
          </div>

          <h2 style={h2}>The Khalsa</h2>
          <p style={s}>In 1699 at Anandpur Sahib, Guru Gobind Singh Ji asked for five volunteers willing to give their lives — the Panj Pyaras, first Khalsa members, bound by the Panj Kakars (five articles of faith). The founding of the Khalsa is one of the most significant events in Sikh history.</p>
          <h2 style={h2}>Guru Gobind Singh as Poet</h2>
          <p style={s}>Guru Gobind Singh Ji wrote in Braj Bhasha, Sanskrit, Punjabi, and Persian. His compositions form the Dasam Granth — including Jaap Sahib, Benti Chaupai, and Chandi di Var. Three of his compositions are in the daily Nitnem prayers.</p>
          <h2 style={h2}>For Sikh Families</h2>
          <p style={s}>Sikh families observe Jayanti with Gurdwara attendance, kirtan, and reflection on the Guru's life. Children learn the stories of the Panj Pyaras, the founding of the Khalsa, and the sacrifice of the Sahibzade — among the most moving stories in any tradition.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Guru Gobind Singh Jayanti traditions — which Gurdwara attended, family traditions of Amrit Vela programme, and the specific stories your family tells children. The Guru's life is so rich each family finds different aspects most meaningful.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="guru-gobind-singh-jayanti-significance-guide" category="Festival Guide"/>

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
