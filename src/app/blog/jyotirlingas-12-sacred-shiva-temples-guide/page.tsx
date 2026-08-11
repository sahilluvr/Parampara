import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "12 Jyotirlingas — Complete Guide to the Most Sacred Shiva Temples in India | OurParampara",
  description: "The 12 Jyotirlingas are the most sacred Shiva shrines in India — each representing Lord Shiva as a column of light (Jyotir = light, Linga = symbol). According to legend, Shiva appeared as an infinite ",
  keywords: "12 Jyotirlingas guide, Jyotirlinga pilgrimage, most sacred Shiva temples India, Somnath Jyotirlinga guide, Kashi Vishwanath Jyotirlinga, complete Jyotirlinga tour guide",
  openGraph: { title: "12 Jyotirlingas — Complete Guide to the Most Sacred Shiva Temples in India", description: "The 12 Jyotirlingas are the most sacred Shiva shrines in India — each representing Lord Shiva as a column of light (Jyotir = light, Linga = symbol). According to legend, Shiva appeared as an infinite ", url: "https://www.ourparampara.com/blog/jyotirlingas-12-sacred-shiva-temples-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=jyotirlingas-12-sacred-shiva-temples-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=jyotirlingas-12-sacred-shiva-temples-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/jyotirlingas-12-sacred-shiva-temples-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="jyotirlingas-12-sacred-shiva-temples-guide" title="12 Jyotirlingas — Complete Guide to the Most Sacred Shiva Temples in India" description="The 12 Jyotirlingas are the most sacred Shiva shrines in India — each representing Lord Shiva as a column of light (Jyotir = light, Linga = symbol). According to legend, Shiva appeared as an infinite " date="2026-06-16" category="Heritage Guide"
        faqs={[
          { q: "What are the 12 Jyotirlingas?", a: "The 12 Jyotirlingas are the most sacred Shiva shrines in India — each representing Lord Shiva as a column of light (Jyotir = light, Linga = symbol). According to legend, Shiva appeared as an infinite pillar of light and the 12 locations where this divine light manifested are the Jyotirlingas. Visiting all 12 is believed to grant liberation (moksha)." },
          { q: "Where are the 12 Jyotirlingas located?", a: "Somnath (Gujarat), Mallikarjuna (Andhra Pradesh), Mahakaleshwar (Ujjain MP), Omkareshwar (MP), Kedarnath (Uttarakhand), Bhimashankar (Maharashtra), Kashi Vishwanath (Varanasi UP), Trimbakeshwar (Maharashtra), Vaidyanath (Jharkhand), Nageshwar (Gujarat), Rameshwaram (Tamil Nadu), Grishneshwar (Maharashtra)." },
          { q: "How long does it take to visit all 12 Jyotirlingas?", a: "A complete 12 Jyotirlinga Yatra takes approximately 15-21 days by road and train. Most families complete it in stages over multiple years. IRCTC offers organized Jyotirlinga Yatra packages. Many Shiva devotees commit to visiting all 12 over a lifetime — some complete the circuit multiple times." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🔱</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>12 Jyotirlingas — Complete Guide to the Most Sacred Shiva Temples in India</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The 12 Jyotirlingas are the holiest Shiva shrines — distributed across India from the Himalayas (Kedarnath) to the southern tip (Rameshwaram), from the eastern plains (Varanasi) to the western coast (Somnath). For Shaivite Hindus, visiting all 12 in a lifetime is a spiritual aspiration passed across generations.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>12 Jyotirlingas: Somnath (Gujarat), Mallikarjuna (Andhra Pradesh), Mahakaleshwar (Ujjain), Omkareshwar (MP), Kedarnath (Uttarakhand), Bhimashankar (Maharashtra), Kashi Vishwanath (Varanasi), Trimbakeshwar (Maharashtra), Vaidyanath (Jharkhand), Nageshwar (Gujarat), Rameshwaram (Tamil Nadu), Grishneshwar (Maharashtra). Complete circuit: 15-21 days.</p>
          </div>

          <h2 style={h2}>The Most Significant Jyotirlingas</h2>
          <p style={s}>Somnath: believed to be the first Jyotirlinga, destroyed and rebuilt 17 times — the current temple rebuilt by Sardar Patel in 1951. Kashi Vishwanath: the most visited Jyotirlinga; dying in Kashi grants moksha. Kedarnath: highest and most dramatically located, in the Himalayas at 3,583m. Mahakaleshwar Ujjain: the only Jyotirlinga facing south, associated with time and death.</p>
          <h2 style={h2}>Rameshwaram — Southernmost Jyotirlinga</h2>
          <p style={s}>Rameshwaram is both a Jyotirlinga and one of the four Char Dhams of all India. The Ramanathaswamy Temple has the longest temple corridor in the world (1,212 metres). Lord Rama is said to have installed the Shivalinga here before crossing to Lanka. Bathing in the 22 sacred wells within the temple is believed to grant the merit of all sacred rivers.</p>
          <h2 style={h2}>Planning a Jyotirlinga Yatra</h2>
          <p style={s}>Families approach the yatra systematically — grouping nearby temples: Mahakaleshwar + Omkareshwar + Bhimashankar + Trimbakeshwar + Grishneshwar (Maharashtra-MP circuit); Kedarnath + Kashi Vishwanath (North India); Somnath + Nageshwar (Gujarat); Rameshwaram + Mallikarjuna (South India). IRCTC Jyotirlinga Yatra packages are popular.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Jyotirlinga visits — which have been visited, in which years, on what occasions. Many families keep a systematic record and display it as a family achievement. If completing all 12 is a family aspiration, documenting the journey toward it is as meaningful as the completion.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="jyotirlingas-12-sacred-shiva-temples-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🔱</p>
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
