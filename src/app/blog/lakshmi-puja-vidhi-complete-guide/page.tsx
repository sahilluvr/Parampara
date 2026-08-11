import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lakshmi Puja Vidhi — Complete Guide for Diwali & Friday Puja at Home | OurParampara",
  description: "Diwali Lakshmi Puja is performed in the evening (after sunset), at the auspicious Pradosh kaal. The sequence: clean and decorate the puja space with rangoli and diyas; place Lakshmi and Ganesha idols ",
  keywords: "Lakshmi puja vidhi, Lakshmi puja Diwali guide, how to do Lakshmi puja at home, Lakshmi puja samagri, Friday Lakshmi puja, Lakshmi puja mantras",
  openGraph: { title: "Lakshmi Puja Vidhi — Complete Guide for Diwali & Friday Puja at Home", description: "Diwali Lakshmi Puja is performed in the evening (after sunset), at the auspicious Pradosh kaal. The sequence: clean and decorate the puja space with rangoli and diyas; place Lakshmi and Ganesha idols ", url: "https://www.ourparampara.com/blog/lakshmi-puja-vidhi-complete-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=lakshmi-puja-vidhi-complete-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=lakshmi-puja-vidhi-complete-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/lakshmi-puja-vidhi-complete-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="lakshmi-puja-vidhi-complete-guide" title="Lakshmi Puja Vidhi — Complete Guide for Diwali & Friday Puja at Home" description="Diwali Lakshmi Puja is performed in the evening (after sunset), at the auspicious Pradosh kaal. The sequence: clean and decorate the puja space with rangoli and diyas; place Lakshmi and Ganesha idols " date="2026-06-18" category="Ritual Guide"
        faqs={[
          { q: "How do I perform Lakshmi Puja on Diwali?", a: "Diwali Lakshmi Puja is performed in the evening (after sunset), at the auspicious Pradosh kaal. The sequence: clean and decorate the puja space with rangoli and diyas; place Lakshmi and Ganesha idols (Ganesha always to Lakshmi's right); perform Ganesh Puja first; then invoke Lakshmi; offer Panchamrit Abhishekam; dress the idol; offer red flowers (lotus if possible), incense, ghee lamp; offer sweets (kheel-batasha or ladoo); show the new account books (if you maintain them); perform aarti; circumambulate three times; offer coins into the puja." },
          { q: "What is Friday Lakshmi Puja?", a: "Friday (Shukravara) is sacred to Goddess Lakshmi. A brief Friday puja involves: early morning bath; clean the puja space; light a ghee lamp before the Lakshmi image or idol; offer yellow flowers (marigold), vermilion, and kheer or ladoo; recite the Lakshmi Sahasranama or Lakshmi Chalisa; make a sincere prayer for prosperity and wellbeing. Many families maintain this as a weekly family ritual — it takes 15-30 minutes and creates a weekly rhythm of gratitude." },
          { q: "What are the 16 forms of Lakshmi?", a: "The Shodasha Lakshmi (16 forms) represent different aspects of prosperity and abundance: Adi Lakshmi (primordial), Dhana Lakshmi (wealth), Dhanya Lakshmi (food), Gaja Lakshmi (elephants/power), Santana Lakshmi (progeny), Veera Lakshmi (courage), Vijaya Lakshmi (victory), Vidya Lakshmi (knowledge), Dhairya Lakshmi (courage), Aishwarya Lakshmi (prosperity), Saubhagya Lakshmi (good fortune), Raja Lakshmi (royalty), Vara Lakshmi (boon-giving), Bhagya Lakshmi (fortune), Yoga Lakshmi (yoga), Roga Lakshmi (health)." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪔</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Lakshmi Puja Vidhi — Complete Guide for Diwali & Friday Puja at Home</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Goddess Lakshmi — the deity of prosperity, abundance, and beauty — is worshipped in virtually every Hindu household. Her worship is both the most universal and the most family-specific of all Hindu practices: every family has its own Lakshmi puja rhythm, its own Friday traditions, its own specific form of Lakshmi that has been in the family for generations.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Diwali Lakshmi Puja: performed after sunset at Pradosh kaal. Place Ganesha to Lakshmi's right. Offer Panchamrit Abhishekam, red flowers (lotus preferred), ghee lamp, kheel-batasha. Show new account books. Perform aarti. Friday puja: weekly 15-minute ritual with lamp, yellow flowers, and sincere prayer. Lakshmi Chalisa or Sahasranama can be recited.</p>
          </div>

          <h2 style={h2}>The Significance of Lakshmi</h2>
          <p style={s}>Lakshmi is the consort of Vishnu — together representing consciousness (Vishnu) and its creative power (Lakshmi). She is not merely the goddess of money — she represents the full spectrum of abundance: material wealth, health, progeny, beauty, knowledge, and spiritual fortune. Her departure from a home is signalled by the absence of cleanliness, gratitude, and contentment — which is why her worship involves both ritual and practical virtues.</p>
          <h2 style={h2}>Keeping Lakshmi in the Home</h2>
          <p style={s}>Traditional guidelines for inviting Lakshmi's presence: keep the home clean (especially the puja room, kitchen, and entrance); keep a ghee lamp burning in the puja room in the morning and evening; maintain a tulsi plant in the home (considered Lakshmi's own plant); do not leave shoes near the entrance pointing outward (considered inauspicious); never sweep the floor after sunset; be generous with food and hospitality.</p>
          <h2 style={h2}>Regional Lakshmi Traditions</h2>
          <p style={s}>Varalakshmi Vratam (South India, August) — a full-day fasting and elaborate puja for married women. Kojagari Lakshmi Puja (Bengal, Sharad Purnima) — Lakshmi is worshipped with an all-night vigil. Margashirsha Puja (Maharashtra) — Thursday pujas through the Margashirsha month. Ashtalakshmi temples (Tamil Nadu) — dedicated to all eight forms of Lakshmi. Each regional tradition has evolved specific rituals, specific foods, and specific songs.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Lakshmi puja traditions — the specific idol or image your family has worshipped for generations, the specific aarti sung (Jai Lakshmi Mata, Jay Ambe Gauri, or a regional version), the specific foods offered. The Lakshmi puja is the most personally significant of all family pujas — its specific form is pure family heritage.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="lakshmi-puja-vidhi-complete-guide" category="Ritual Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪔</p>
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
