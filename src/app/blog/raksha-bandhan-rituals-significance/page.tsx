import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Raksha Bandhan — Complete Ritual Guide with Muhurat & Thali Decoration | OurParampara",
  description: "Complete Raksha Bandhan guide — significance, muhurat timing, rakhi thali setup, step-by-step rituals, and ideas for sisters and brothers living apart.",
  keywords: "Raksha Bandhan rituals, Raksha Bandhan significance, rakhi thali decoration, Raksha Bandhan muhurat, rakhi puja vidhi, Raksha Bandhan date 2026",
  openGraph: {
    title: "Raksha Bandhan — Complete Ritual Guide with Muhurat & Thali Decoration | OurParampara",
    description: "Complete Raksha Bandhan guide — significance, muhurat timing, rakhi thali setup, step-by-step rituals, and ideas for sisters and brothers living apart.",
    url: "https://www.ourparampara.com/blog/raksha-bandhan-rituals-significance",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=raksha-bandhan-rituals-significance", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=raksha-bandhan-rituals-significance"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/raksha-bandhan-rituals-significance" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="raksha-bandhan-rituals-significance"
        title="Raksha Bandhan — Complete Ritual Guide with Muhurat & Thali Decoration | OurParampara"
        description="Complete Raksha Bandhan guide — significance, muhurat timing, rakhi thali setup, step-by-step rituals, and ideas for sisters and brothers living apart."
        date="2026-06-01"
        category="Festival Guide"
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪢</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Raksha Bandhan — Complete Ritual Guide with Muhurat &amp; Thali Decoration</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 11, 2026</span><span>·</span><span>5 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Raksha Bandhan — celebrated on the full moon (Purnima) of the Hindu month of Shravana — is one of India&apos;s most beloved festivals, celebrating the bond between brothers and sisters. The word "Raksha Bandhan" literally means "the bond of protection" — a sister ties a sacred thread (rakhi) on her brother's wrist, and he promises to protect and support her throughout life.</p>

          <h2 style={h2}>The Significance</h2>
          <p style={s}>Beyond the literal sibling bond, Raksha Bandhan represents duty, trust, and mutual respect — values at the heart of Indian family culture. The thread itself is considered sacred (raksha sutra), believed to ward off negativity and bring blessings to the wearer. While traditionally between brothers and sisters, many families extend the ritual to cousins, close friends, and even symbolic ties — some communities tie rakhis to trees, rivers, or as a pledge of communal protection.</p>

          <h2 style={h2}>Rakhi Thali Decoration</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Rakhi (one or more)","Roli (red vermillion) and chawal (rice)","Diya with ghee or oil","Sweets — ladoo, barfi, kaju katli","Mouli/kalawa (sacred thread)","Coconut (optional)","Decorative thali — brass or silver preferred","Flowers — marigold petals for decoration","Gift or envelope of money","Aarti plate with incense"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>
          <p style={s}>To decorate the thali beautifully: arrange the rakhi(s) in the center, place small bowls of roli and rice on either side, surround with marigold petals, and place the diya and sweets at the edges. Many families pass down a specific thali or decorate it the same way each year — a small tradition worth photographing and preserving.</p>

          <h2 style={h2}>Step-by-Step Ritual</h2>
          {[
            "Both siblings dress in festive clothes — many families wear new or matching outfits",
            "The sister prepares the thali with rakhi, roli, rice, diya, and sweets",
            "The brother sits down, often on a decorated seat, facing the sister",
            "The sister applies tilak (roli + rice) on the brother's forehead",
            "She performs a small aarti, circling the diya in front of him",
            "She ties the rakhi on his right wrist while reciting blessings or a small prayer",
            "She feeds him a sweet — typically the first bite of the celebration",
            "The brother offers a gift — money, jewellery, clothes, or a promise of support — and may also tie a rakhi back as a gesture of mutual protection in some families",
            "The family enjoys a festive meal together",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Choosing the Right Time (Muhurat)</h2>
          <p style={s}>Raksha Bandhan should ideally be performed during "Aparahna" (afternoon) time, avoiding "Bhadra Kaal" — an inauspicious period in Hindu astrology believed to bring misfortune if rituals are performed during it. The exact muhurat changes every year based on the lunar calendar — check a Panchang or astrology app for the precise auspicious window in your city for the current year.</p>

          <h2 style={h2}>For Siblings Living Apart</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Courier the rakhi in advance so it arrives before the festival — many postal and courier services run special Raksha Bandhan deliveries",
              "Schedule a video call to perform the ritual together — sister can mail the thali items, or the brother can arrange a similar setup on his end",
              "Some families do a 'virtual tilak' over video call followed by an in-person celebration when they next meet",
              "Digital gifts — UPI transfers, e-gift cards — have become common alongside or instead of physical gifts for siblings abroad",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Every family has its own rakhi thali style and special sweets. Photograph the thali each year and note who tied rakhis to whom — over decades, this becomes a beautiful record of your family's growing tree.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="raksha-bandhan-rituals-significance" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪢</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document your family&apos;s Raksha Bandhan traditions</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save thali photos, sibling stories, and rakhi memories on OurParampara — year after year.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>
              Start preserving for free →
            </Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
