import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tulsi Vivah — Complete Ritual Guide for the Sacred Marriage of Tulsi & Vishnu | OurParampara",
  description: "Complete Tulsi Vivah guide — significance, samagri list, step-by-step ceremony for marrying Tulsi plant to Lord Vishnu, and why this marks the start of Hindu wedding season.",
  keywords: "Tulsi Vivah ritual, Tulsi Vivah vidhi, Tulsi Vivah samagri list, Tulsi marriage Vishnu, Tulsi Vivah significance, Tulsi Vivah date 2026",
  openGraph: {
    title: "Tulsi Vivah — Complete Ritual Guide for the Sacred Marriage of Tulsi & Vishnu | OurParampara",
    description: "Complete Tulsi Vivah guide — significance, samagri list, step-by-step ceremony for marrying Tulsi plant to Lord Vishnu, and why this marks the start of Hindu wedding season.",
    url: "https://www.ourparampara.com/blog/tulsi-vivah-ritual-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=tulsi-vivah-ritual-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=tulsi-vivah-ritual-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/tulsi-vivah-ritual-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="tulsi-vivah-ritual-guide"
        title="Tulsi Vivah — Complete Ritual Guide for the Sacred Marriage of Tulsi & Vishnu | OurParampara"
        description="Complete Tulsi Vivah guide — significance, samagri list, step-by-step ceremony for marrying Tulsi plant to Lord Vishnu, and why this marks the start of Hindu wedding season."
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
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Ritual Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🌿</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Tulsi Vivah — Complete Ritual Guide for the Sacred Marriage of Tulsi &amp; Vishnu</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 20, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Tulsi Vivah is the ceremonial marriage of the Tulsi plant (Holy Basil, considered an embodiment of Goddess Lakshmi or Vrinda) to Lord Vishnu (often represented as Shaligram, a sacred stone, or Krishna). Performed in the Hindu month of Kartik, this beautiful and intimate family ritual marks the official start of the wedding season in many parts of India.</p>

          <h2 style={h2}>When is Tulsi Vivah</h2>
          <p style={s}>Tulsi Vivah is celebrated on Kartik Shukla Ekadashi (Prabodhini Ekadashi) or Dwadashi — typically falling in November, about 11-12 days after Diwali. This timing also coincides with Lord Vishnu "waking up" from his four-month cosmic sleep (Chaturmas), making this an especially auspicious period for new beginnings, including weddings.</p>

          <h2 style={h2}>Significance</h2>
          <p style={s}>The story behind Tulsi Vivah varies by region, but most versions describe Vrinda (later transformed into the Tulsi plant) as a devoted wife whose unwavering faith protected her demon husband Jalandhar — until Lord Vishnu, in disguise, broke her vow to defeat him. As penance, Vishnu promised to marry her in plant form for eternity. The ritual symbolizes devotion, the sacred union of the divine feminine and masculine, and is considered so auspicious that performing it is believed to bring the same merit as conducting a daughter's wedding.</p>

          <h2 style={h2}>Tulsi Vivah Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Tulsi plant (in a decorated pot)","Shaligram or Krishna/Vishnu idol","Red bridal cloth/chunri (for Tulsi)","Sugarcane stalks (for the mandap)","Marigold flowers and garlands","Turmeric and vermillion","Rice (akshat)","Coconut","Sweets — especially til-gul, sugarcane pieces","Fruits — amla (gooseberry) is traditional","Diya and ghee","Incense sticks","Small mandap/canopy structure","Bangles and bindi (for decorating Tulsi as bride)"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Step-by-Step Tulsi Vivah Vidhi</h2>
          {[
            "In the evening, clean the area around the Tulsi plant (often kept in a courtyard or balcony) and decorate it like a bridal mandap",
            "Build a small canopy (mandap) over the Tulsi pot using sugarcane stalks tied together — sugarcane represents the 'home' being built for the couple",
            "Decorate the Tulsi plant as a bride — drape a red chunri/cloth around the pot, add bangles, bindi, and a garland",
            "Place the Shaligram or Krishna idol next to the Tulsi plant, representing the groom",
            "Light diyas around the mandap — many families light multiple small diyas as part of the festive decoration",
            "Perform kanyadaan-style rituals — the head of the family 'gives away' Tulsi in marriage, just as a father would for a daughter",
            "Apply turmeric and vermillion to both Tulsi and the Vishnu idol",
            "Tie the mangalsutra-equivalent — a thread connecting the Tulsi pot and the idol, symbolizing their union",
            "Sing wedding songs (vivah geet) — many families involve all generations in this part",
            "Offer prasad — sugarcane, amla, sweets — and distribute to everyone present",
            "Conclude with aarti for the divine couple",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Why This Marks Wedding Season</h2>
          <p style={s}>After Tulsi Vivah, the period of Chaturmas (when weddings are traditionally avoided) ends, and the Hindu wedding season formally begins — running through winter months until the next inauspicious period. Many families consider Tulsi Vivah a spiritually significant "first wedding" of the season, and it's common to see the same decorations and enthusiasm as an actual family wedding, just on a smaller scale.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Many families have a Tulsi plant that has been in the family for years, sometimes grown from a cutting of an ancestor's plant. Note the history of your family's Tulsi — when it was planted, by whom — as part of your family's living heritage.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Planning a family wedding? See our <Link href="/blog/indian-wedding-rituals-step-by-step" style={{ color:C.saffron, fontWeight:600 }}>complete Indian wedding rituals guide</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="tulsi-vivah-ritual-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌿</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document your family&apos;s Tulsi Vivah</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save photos, decorations, and the story of your family&apos;s Tulsi plant on OurParampara.</p>
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
