import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ugadi & Gudi Padwa — Complete Guide to Telugu-Kannada-Marathi New Year | OurParampara",
  description: "Complete Ugadi and Gudi Padwa guide — the significance of the Hindu New Year, Ugadi Pachadi six tastes, Gudi hoisting ceremony, Panchanga Shravanam, traditional foods, and how Telugu, Kannada, and Marathi families celebrate.",
  keywords: "Ugadi festival guide, Gudi Padwa guide, Telugu New Year Ugadi, Ugadi Pachadi recipe, Gudi Padwa celebration Maharashtra, Hindu New Year guide, Panchanga Shravanam Ugadi, Ugadi 2026 date",
  openGraph: { title: "Ugadi & Gudi Padwa — Complete Guide to Telugu-Kannada-Marathi New Year | OurParampara", description: "Complete Ugadi and Gudi Padwa guide — the significance of the Hindu New Year, Ugadi Pachadi six tastes, Gudi hoisting ceremony, Panchanga Shravanam, traditional foods, and how Telugu, Kannada, and Marathi families celebrate.", url: "https://www.ourparampara.com/blog/ugadi-gudi-padwa-new-year-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=ugadi-gudi-padwa-new-year-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=ugadi-gudi-padwa-new-year-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/ugadi-gudi-padwa-new-year-guide" },
};

export default function Page() {
  return (
    <>
      <BlogStructuredData
        slug="ugadi-gudi-padwa-new-year-guide"
        title="Ugadi & Gudi Padwa — Complete Guide to Telugu-Kannada-Marathi New Year | OurParampara"
        description="Complete Ugadi and Gudi Padwa guide — the significance of the Hindu New Year, Ugadi Pachadi six tastes, Gudi hoisting ceremony, Panchanga Shravanam, traditional foods, and how Telugu, Kannada, and Marathi families celebrate."
        date="2026-07-10"
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌿</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Ugadi & Gudi Padwa</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 10, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>
        </section>
        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Ugadi (Telugu and Kannada) and Gudi Padwa (Marathi) are celebrations of the same astronomical event — the Hindu New Year on Chaitra Shukla Pratipada (the first day of the bright fortnight of Chaitra month, March-April). The name Ugadi comes from 'Yuga' (era) and 'Adi' (beginning) — the beginning of a new era. It is one of the most significant days in the Hindu calendar: Brahma is said to have begun creation on this day, and the sage Shalivahana established his era (Shalivahana Shaka) on this date. The festival is celebrated with specific rituals, specific foods, and the Panchanga Shravanam — the listening to the year's astrological predictions.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Ugadi Pachadi — The Six Tastes of Life</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Ugadi Pachadi is the most philosophically rich food in Indian tradition — a single dish that contains all six tastes (Shadruchulu): sweet (jaggery), sour (raw mango), bitter (neem flowers), spicy (green chilli), salty (salt), and astringent (tamarind). Eating this mixture at the beginning of the new year is a declaration: life contains all these flavours, and we accept all of them. The bitterness of neem represents sorrow; the sweetness of jaggery represents joy; the sourness of raw mango represents challenges; the spice represents anger. Ugadi Pachadi is one of India's most profound edible philosophies.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Gudi Padwa — The Victory Flag</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>In Maharashtra, Gudi Padwa is celebrated by hoisting a Gudi — a bamboo staff topped with a bright silk cloth (usually yellow or orange), garlands of flowers and mango leaves, a garland of sugar crystals (sakkhar gathi), and an upturned copper or silver pot. The Gudi is hoisted outside the main door or window of the home, facing east, before sunrise. It represents Brahmadhvaja (Brahma's flag) — a symbol of victory, prosperity, and auspiciousness. The tradition commemorates Chhatrapati Shivaji Maharaj's victorious return from battle, and more anciently, Rama's return to Ayodhya after 14 years.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Panchanga Shravanam — Listening to the Year's Forecast</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>On Ugadi morning, after the oil bath and prayers, families gather to hear the Panchanga (almanac) reading — the year's astrological predictions for rainfall, health, economy, and major world events, as calculated by Vedic astrologers for the specific year. In Telugu and Kannada communities, this Panchanga Shravanam is performed by priests at temples or in homes, with families listening seriously to the forecast for the year ahead. The predictions are not taken as fate but as guidance — the year's character and dominant themes.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Traditional Foods</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Ugadi Pachadi (Andhra/Karnataka):</strong> The six-taste mixture described above — eaten first thing in the morning</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Bobbatlu/Obbattu/Puran Poli:</strong> Sweet flatbread filled with chana dal and jaggery — the festive sweet across the Deccan</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Pulihora:</strong> Tamarind rice — the most common Ugadi offering at temples</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Shrikhand Puri (Maharashtra):</strong> Sweet strained yoghurt with saffron and cardamom served with puris — the Gudi Padwa feast centrepiece</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Raw mango preparations:</strong> Raw mango dal, raw mango chutney — celebrating the first mangoes of the season</li>
          </ul>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(184,146,42,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#B8922A", margin:"0 0 6px" }}>💡 Record your family's Ugadi/Gudi Padwa traditions</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>The specific Panchanga your family consults, the Pachadi recipe, the specific Gudi materials — these are your family's New Year heritage. Document them on OurParampara.</p>
          </div>
        
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Celebrating Multiple Indian New Years</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>For multi-regional Indian families — particularly in cities where people from different regional backgrounds live together — spring is a time when multiple New Year celebrations overlap. A family with both North and South Indian backgrounds may observe both Ugadi and Vishu. An awareness of all the Indian New Years creates a richer appreciation of Indian cultural diversity and helps families explain to children from different regional backgrounds why both their traditions are equally valid expressions of the same renewal.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific New Year traditions — the specific Ugadi Pachadi recipe your family makes, the specific Gudi decoration your family puts up, the specific Vishukkaineettam your elders give. Each Indian regional New Year has specific family-level variations — the specific items in the Vishukkani, the specific amount given as Vishukkaineettam — that make your family's tradition unique.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="ugadi-gudi-padwa-new-year-guide" category="Festival Guide"/>
        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌿</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, rituals, and cultural heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
