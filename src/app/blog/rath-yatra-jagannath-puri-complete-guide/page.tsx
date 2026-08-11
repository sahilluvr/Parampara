import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Rath Yatra — Complete Guide to the Jagannath Puri Festival & Chariot Procession | OurParampara",
  description: "Rath Yatra 2026 falls on June 27. Three massive chariots carry Lord Jagannath, Lord Balabhadra, and Devi Subhadra through Puri's Bada Danda from the Jagannath Temple to the Gundicha Temple.",
  keywords: "Rath Yatra guide, Jagannath Puri festival guide, Rath Yatra chariot significance, Lord Jagannath traditions, Rath Yatra 2026 date, Puri Rath Yatra pilgrimage",
  openGraph: { title: "Rath Yatra — Complete Guide to the Jagannath Puri Festival & Chariot Procession", description: "Rath Yatra 2026 falls on June 27. Three massive chariots carry Lord Jagannath, Lord Balabhadra, and Devi Subhadra through Puri's Bada Danda from the Jagannath Temple to the Gundicha Temple.", url: "https://www.ourparampara.com/blog/rath-yatra-jagannath-puri-complete-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=rath-yatra-jagannath-puri-complete-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=rath-yatra-jagannath-puri-complete-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/rath-yatra-jagannath-puri-complete-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="rath-yatra-jagannath-puri-complete-guide" title="Rath Yatra — Complete Guide to the Jagannath Puri Festival & Chariot Procession" description="Rath Yatra 2026 falls on June 27. Three massive chariots carry Lord Jagannath, Lord Balabhadra, and Devi Subhadra through Puri's Bada Danda from the Jagannath Temple to the Gundicha Temple." date="2026-06-14" category="Festival Guide"
        faqs={[
          { q: "When is Rath Yatra 2026?", a: "Rath Yatra 2026 falls on June 27. Three massive chariots carry Lord Jagannath, Lord Balabhadra, and Devi Subhadra through Puri's Bada Danda from the Jagannath Temple to the Gundicha Temple." },
          { q: "What are the three chariots?", a: "Nandighosa (Jagannath) — 45 feet, 16 wheels, yellow-red. Taladhwaja (Balabhadra) — 44 feet, 14 wheels, red-green. Darpadalana (Subhadra) — 43 feet, 12 wheels, red-black. Freshly built each year from specific trees by hereditary craftsmen." },
          { q: "Who is Lord Jagannath?", a: "Lord Jagannath (Lord of the Universe) is a form of Vishnu/Krishna worshipped primarily in Odisha. His distinctive form — large round eyes, no limbs, unfinished appearance — represents the all-seeing divine taking partial form, with the formless brahman taking a shape interrupted before completion." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🎡</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Rath Yatra — Complete Guide to the Jagannath Puri Festival & Chariot Procession</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 14, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Rath Yatra — the chariot festival of Lord Jagannath — is one of India's largest and most ancient festivals. Pulling the chariot rope is said to earn the merit of a hundred yagnas. The festival has spread worldwide through ISKCON, making it one of the most internationally recognized Hindu festivals.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Rath Yatra 2026: June 27. Three chariots pulled through Puri's Bada Danda. Deity stays 9 days at Gundicha Temple, returns (Bahuda Rath Yatra). Pulling the chariot rope is deeply auspicious. ISKCON organizes Rath Yatras in cities worldwide — London, New York, Sydney.</p>
          </div>

          <h2 style={h2}>Significance of Pulling the Chariot</h2>
          <p style={s}>Pulling the Rath Yatra rope is one of the most meritorious acts in Hindu tradition. Ancient texts state merely seeing the chariot grants liberation. Uniquely, Lord Jagannath comes out of the temple and is accessible to all on the streets — regardless of caste. This democratization of darshan was revolutionary and remains the festival's central spiritual message.</p>
          <h2 style={h2}>Puri — City of Jagannath</h2>
          <p style={s}>Puri is one of the four sacred Char Dhams. The Jagannath Temple's kitchen feeds over 10,000 daily — the world's largest. The Mahaprasad (cooked offering) is sacred and eaten by all without caste distinction.</p>
          <h2 style={h2}>Rath Yatra Worldwide</h2>
          <p style={s}>ISKCON has spread Rath Yatra globally. The London and San Francisco Rath Yatras draw hundreds of thousands of participants, bringing the festival to Indian diaspora and non-Indian communities worldwide.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Rath Yatra connection — whether you have been to Puri, participated in a local Rath Yatra, or have a family tradition of watching the festival. Lord Jagannath's tradition of welcoming all is worth passing on.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="rath-yatra-jagannath-puri-complete-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🎡</p>
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
