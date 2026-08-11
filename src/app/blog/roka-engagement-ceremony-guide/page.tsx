import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Roka Ceremony — Complete Guide to India's Pre-Engagement Ritual | OurParampara",
  description: "Complete Roka ceremony guide — meaning and significance, what happens during Roka, gift exchange traditions, samagri list, and how it differs from a formal engagement.",
  keywords: "Roka ceremony meaning, Roka ceremony rituals, pre-engagement ceremony India, Roka vs engagement, Roka ceremony gifts, Roka samagri list",
  openGraph: {
    title: "Roka Ceremony — Complete Guide to India's Pre-Engagement Ritual | OurParampara",
    description: "Complete Roka ceremony guide — meaning and significance, what happens during Roka, gift exchange traditions, samagri list, and how it differs from a formal engagement.",
    url: "https://www.ourparampara.com/blog/roka-engagement-ceremony-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=roka-engagement-ceremony-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=roka-engagement-ceremony-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/roka-engagement-ceremony-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="roka-engagement-ceremony-guide"
        title="Roka Ceremony — Complete Guide to India\'s Pre-Engagement Ritual | OurParampara"
        description="Complete Roka ceremony guide — meaning and significance, what happens during Roka, gift exchange traditions, samagri list, and how it differs from a formal engagement."
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
            <div style={{ fontSize:40, marginBottom:14 }}>💍</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Roka Ceremony — Complete Guide to India&apos;s Pre-Engagement Ritual</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 25, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The Roka ceremony is the very first formal step in many North Indian wedding traditions — the moment when both families officially agree that their children will marry. The word "roka" literally means "to stop" — signifying that the search for a match is now stopped, and both families are bound by this mutual commitment. It's a more intimate, family-only affair compared to the larger Sagai that often follows.</p>

          <h2 style={h2}>Roka vs Sagai — Key Differences</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            {[["Roka","Informal, family-only gathering. No rings exchanged. The families agree to the match and 'stop looking' for other proposals."],["Sagai (Engagement)","More formal, often includes extended family and friends. Rings are exchanged. Considered the official public announcement."],["Timing","Roka typically happens weeks or months before the Sagai, once the families have met and agreed privately."],["Key action","At Roka, the groom's family visits the bride's home with sweets, dry fruits, and shagun (cash gifts) — no formal ring exchange."]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:12, padding:"8px 0", borderBottom:`1px solid rgba(200,84,26,0.1)` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:80, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:C.charcoal, margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>What Happens During Roka</h2>
          {[
            "The groom's family visits the bride's home — this is typically a smaller gathering of close family members (parents, siblings, grandparents if present)",
            "The groom's mother applies tilak to the bride's forehead as a formal blessing and acceptance",
            "The groom's family presents shagun — typically cash in an odd number (₹11, ₹51, ₹101, ₹501), sweets, dry fruits, and sometimes a piece of jewellery or a saree",
            "The bride's family reciprocates with shagun for the groom — sweets, clothes, and cash",
            "Both families exchange sweets as a mark of the sweet relationship being established",
            "Elders from both sides offer blessings to the couple",
            "Photographs are taken — the Roka moment is increasingly documented even if it's a private family event",
            "Both families agree (informally or formally) on a timeline for the next steps — Sagai and then the wedding",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Roka Samagri &amp; What the Groom's Family Brings</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Assorted sweets (mithai)","Mixed dry fruits — kaju, badam, pista, anjeer","Shagun envelope (cash in auspicious amount)","Saree or suit for the bride","Roli and chandan for tilak","Coconut","Flowers","A token piece of jewellery (optional but common)"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Does Roka Need a Muhurat?</h2>
          <p style={s}>Generally, Roka is considered less astrologically sensitive than the formal Sagai or wedding — many families fix the date based on mutual convenience rather than a strict astrological muhurat. However, some families do prefer to choose an auspicious day (typically avoiding Rahu Kaal and certain inauspicious dates in the Hindu calendar), and consulting a family priest before finalizing the date is always an option.</p>

          <h2 style={h2}>Is Roka Common Across All Communities?</h2>
          <p style={s}>Roka is primarily a North Indian tradition — most common in Punjabi, Hindi-speaking UP/Delhi, and Haryanvi families. South Indian communities typically move directly to the Nischayathartham/Nischitartham (formal betrothal ceremony), which combines elements of both Roka and Sagai. Gujarati and Marwari families often have their own equivalent ceremonies (such as Gol Dhana or Chandla) that serve a similar purpose of formalizing the match before the engagement.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Roka is often a smaller, more emotional moment than the Sagai — it's when families truly come together for the first time. Record who was present, what was exchanged, and any words spoken. Couples often look back on this quieter first step with particular fondness.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Looking for the Tilak or full wedding sequence? See our <Link href="/blog/indian-wedding-rituals-step-by-step" style={{ color:C.saffron, fontWeight:600 }}>complete Indian wedding rituals guide</Link>.</p>
          </div>
        
<h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Tilak Ceremony — The Groom's Anointing</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Tilak ceremony is the formal acceptance of the groom by the bride's family. The bride's brother applies a tilak (mark of auspiciousness) to the groom's forehead — this specific act of the brother applying tilak is the ceremonial centrepiece. The groom is honoured with gifts from the bride's family — typically clothes, silver, dry fruits, and cash. The Tilak is performed at the groom's home or a neutral venue, with the bride's family visiting the groom's family rather than the other way around.</p>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="roka-engagement-ceremony-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>💍</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document the start of your family&apos;s wedding story</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save Roka photos, shagun details, and family blessings on OurParampara — the first chapter of a beautiful story.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
