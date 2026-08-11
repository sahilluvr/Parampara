import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hindu Wedding Muhurat Dates 2026-2027 — Auspicious Dates for Your Marriage | OurParampara",
  description: "Complete guide to Hindu wedding muhurat dates for 2026 and 2027 — how muhurat is calculated, auspicious months and nakshatras for marriage, dates to avoid, and how to work with a priest to finalize your vivah muhurat.",
  keywords: "Hindu wedding muhurat 2026, vivah muhurat dates 2027, auspicious wedding dates India, Hindu marriage muhurat calculator, wedding muhurat 2026 2027, shubh vivah dates, best months for Hindu wedding",
  openGraph: {
    title: "Hindu Wedding Muhurat Dates 2026-2027 — Auspicious Dates for Your Marriage | OurParampara",
    description: "Complete guide to Hindu wedding muhurat dates for 2026 and 2027 — how muhurat is calculated, auspicious months and nakshatras for marriage, dates to avoid, and how to work with a priest to finalize yo",
    url: "https://www.ourparampara.com/blog/hindu-wedding-muhurat-dates-2026-2027",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=hindu-wedding-muhurat-dates-2026-2027", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=hindu-wedding-muhurat-dates-2026-2027"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/hindu-wedding-muhurat-dates-2026-2027" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="hindu-wedding-muhurat-dates-2026-2027"
        title="Hindu Wedding Muhurat Dates 2026-2027 — Auspicious Dates for Your Marriage | OurParampara"
        description="Complete guide to Hindu wedding muhurat dates for 2026 and 2027 — how muhurat is calculated, auspicious months and nakshatras for marriage, dates to avoid, and how to work with a priest to finalize yo"
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
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Heritage Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>💒</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Hindu Wedding Muhurat Dates 2026-2027 — Auspicious Dates for Your Marriage</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 14, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>In Hindu tradition, selecting the right muhurat (auspicious time) for a wedding is considered as important as the ceremony itself — a good muhurat is believed to set the foundation for a harmonious, prosperous married life. The process involves examining multiple astrological factors including the bride and groom's birth charts, the positions of the Moon and planets, and the lunar calendar. Here's a comprehensive guide to understanding how wedding muhurats work and the generally auspicious periods for 2026-2027.</p>

          <h2 style={h2}>How Wedding Muhurat Is Calculated</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Nakshatra (Birth Star)","The Moon's position on the wedding day must be compatible with both the bride and groom's birth Nakshatras"],["Tithi (Lunar Day)","Specific tithis are considered auspicious — Dwitiya, Tritiya, Panchami, Saptami, Dashami, Ekadashi, Trayodashi are generally preferred"],["Day of the week","Monday, Wednesday, Thursday, and Friday are traditionally considered most auspicious for weddings"],["Lagna (Ascendant)","The rising sign at the exact time of the pheras — each Lagna has its own qualities that affect the married life"],["Panchang alignment","The combination of Tithi, Vara (day), Nakshatra, Yoga, and Karana must all be checked in the Hindu almanac"],["Kundli matching","The birth charts of both bride and groom are compared — a family priest or astrologer matches these before confirming any muhurat"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:14, padding:"10px 14px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:160, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Generally Auspicious Wedding Months in 2026</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:13, color:C.gray, marginBottom:12 }}>These are general guidance months based on the Hindu calendar's traditionally favourable periods. Specific dates within these months must be confirmed with a family priest using both birth charts.</p>
            {[["January–February 2026","Magha month — traditionally considered auspicious for weddings; many families prefer before Holi season"],["April 2026","Post-Holi, post-Chaitra Navratri — Vaishakha begins, Akshaya Tritiya (April 2026) is especially prized"],["October–November 2026","Post-Navratri, post-Dussehra — a very popular wedding season; Dev Uthani Ekadashi (when Vishnu 'wakes up') marks the start of the peak season"],["November–December 2026","Kartik and Margashirsha months — Vivah Panchami (December 2026) is a specific auspicious date for weddings"]].map(([k,v])=>(
              <div key={k} style={{ marginBottom:10 }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 4px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.6 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Periods to Avoid in 2026</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Adhika Maas (leap month) — if one occurs in 2026, no weddings are typically scheduled during this period","Pitru Paksha (September 2026) — the fortnight of ancestors; all auspicious ceremonies including weddings are avoided","Chaturmas (July–November) — the four-month period of Vishnu's cosmic sleep; traditionally avoided for weddings in Vaishnava traditions, though many communities do hold weddings during this period","Holika/Holi period — a few days before and after Holi are generally avoided","Solar/Lunar eclipse dates — the day of an eclipse and surrounding period"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Auspicious Wedding Nakshatras</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Rohini","Considered the most auspicious — ruled by the Moon, associated with prosperity and beauty"],["Mrigashira","Gentle and creative — widely favoured for wedding ceremonies"],["Magha","Associated with ancestors and nobility — auspicious for establishing new families"],["Uttara Phalguni","The 'fruit of the fig tree' — specifically associated with marriage in Vedic texts"],["Hasta","The hand — associated with skill and dexterity; widely accepted for weddings"],["Swati","Independent and balanced — considered auspicious in many regional traditions"],["Anuradha","Devoted and loyal — considered good for marriage across most traditions"],["Uttara Ashadha","Victory and achievement — broadly auspicious for new beginnings"],["Uttara Bhadrapada","Auspicious and stable — recommended in many regional panchangs"],["Revati","Nurturing and compassionate — the final and gentle Nakshatra, widely accepted"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>How to Work With Your Priest to Finalize a Muhurat</h2>
          {[
            "Gather both birth details: date of birth, time of birth, and place of birth for both bride and groom",
            "Share these with a trusted family priest or astrologer for Kundli matching (Guna Milan)",
            "Once compatibility is confirmed, ask for a list of 3-5 potential muhurat windows in your preferred season",
            "Cross-check the dates with both families' availability and the venue",
            "Confirm the exact Lagna time with the priest — this determines the precise start time for the pheras on your chosen date",
            "Many families now use reputable online panchang tools for a first shortlist, then confirm with a priest",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.15)`, borderRadius:10, padding:"12px 16px", marginTop:20 }}>
            <p style={{ fontSize:12, color:C.charcoal, margin:0, lineHeight:1.6 }}>⚠️ Important: The dates and periods above are general guidance only. Every couple's muhurat must be calculated individually based on their specific birth details and the current year's panchang. Always consult a qualified family priest or Vedic astrologer before finalising your wedding date.</p>
          </div>

          <div style={{ marginTop:24, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Planning the pre-wedding ceremonies? See our guide on <Link href="/blog/roka-engagement-ceremony-guide" style={{ color:C.saffron, fontWeight:600 }}>Roka &amp; Sagai</Link>, and the <Link href="/blog/indian-wedding-rituals-step-by-step" style={{ color:C.saffron, fontWeight:600 }}>complete Indian wedding rituals guide</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="hindu-wedding-muhurat-dates-2026-2027" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>💒</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your wedding story forever</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save your muhurat details, ceremony photos, and wedding traditions on OurParampara — for your family to look back on.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
