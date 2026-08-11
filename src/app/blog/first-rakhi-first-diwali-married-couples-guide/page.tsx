import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "First Festivals After Marriage — Your First Rakhi, Diwali & Karva Chauth as a New Couple | OurParampara",
  description: "A heartfelt guide to celebrating your first festivals as a married couple — first Rakhi away from your brother, first Diwali in a new home, first Karva Chauth, and how to build new family traditions together.",
  keywords: "first Diwali after marriage, first Rakhi after marriage, first Karva Chauth traditions, new couple festival traditions, building family traditions together, first festivals as a married couple",
  openGraph: {
    title: "First Festivals After Marriage — Your First Rakhi, Diwali & Karva Chauth as a New Couple | OurParamp",
    description: "A heartfelt guide to celebrating your first festivals as a married couple — first Rakhi away from your brother, first Diwali in a new home, first Karva Chauth, and how to build new family traditions t",
    url: "https://www.ourparampara.com/blog/first-rakhi-first-diwali-married-couples-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=first-rakhi-first-diwali-married-couples-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=first-rakhi-first-diwali-married-couples-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/first-rakhi-first-diwali-married-couples-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="first-rakhi-first-diwali-married-couples-guide"
        title="First Festivals After Marriage — Your First Rakhi, Diwali & Karva Chauth as a New Couple | OurParampara"
        description="A heartfelt guide to celebrating your first festivals as a married couple — first Rakhi away from your brother, first Diwali in a new home, first Karva Chauth, and how to build new family traditions t"
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
            <div style={{ fontSize:40, marginBottom:14 }}>💑</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>First Festivals After Marriage — Your First Rakhi, Diwali &amp; Karva Chauth as a New Couple</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 30, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The first year of marriage brings a quiet but significant shift — familiar festivals suddenly feel different. A sister celebrates Rakhi away from her brother for the first time. A couple decorates their first home for Diwali, unsure whose family's traditions to follow. These "firsts" can feel disorienting, but they're also the foundation on which a couple's own family traditions are built.</p>

          <h2 style={h2}>Your First Rakhi After Marriage</h2>
          <p style={s}>For many sisters, the first Raksha Bandhan after marriage — especially if it means being away from their brother for the first time — can bring unexpected emotions. Here's how families navigate this:</p>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Many brothers travel to their sister's new home for the first Rakhi — considered a meaningful gesture that reassures the sister she hasn't 'left' the family",
              "If travel isn't possible, couriering the rakhi in advance with a heartfelt note is common — many postal services run special Rakhi delivery windows",
              "Video calls during the actual tilak/tying moment help bridge the distance — some families do a 'virtual tying' followed by an in-person celebration later",
              "The new husband often participates too — some brothers also tie a rakhi to their new brother-in-law, welcoming him into the sibling bond",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Your First Diwali in a New Home</h2>
          <p style={s}>The first Diwali as a married couple often raises a practical question: whose family's rituals do we follow — his or hers? Most couples find that the answer evolves naturally:</p>
          {[
            "Many couples split the festival — visiting one family's home for Lakshmi Puja and the other's for Bhai Dooj or Govardhan Puja",
            "If living independently, couples often blend both families' rituals — using the mother-in-law's rangoli design alongside the bride's family's prasad recipe",
            "Decorating a first home together — even a rented apartment — with diyas and lights becomes a meaningful 'first' that couples often photograph and remember fondly",
            "Some couples start an entirely new tradition specific to them — a particular sweet they make together, or a specific time they light the first diya as a couple",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Your First Karva Chauth</h2>
          <p style={s}>For many newly married women, the first Karva Chauth carries special significance — it's often marked with extra rituals and gifts from the in-laws' side. The mother-in-law traditionally prepares an elaborate sargi, and the new daughter-in-law may receive jewellery, a saree, or other gifts to mark the occasion. If the husband's family doesn't observe Karva Chauth (common in South Indian or non-North-Indian families), couples often find a respectful middle ground — perhaps a smaller, personal observance, or adapting the day's spirit (a shared meal, an exchange of small gifts) without the full ritual.</p>

          <h2 style={h2}>Building Your Own Traditions</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 10px" }}>Ideas couples often start in their first year:</p>
            {["A 'his and hers' fusion menu — combining dishes from both families' festival recipes","A shared photo tradition — the same pose or location every Diwali to track how the family grows over the years","Alternating which family's home hosts major festivals each year","Starting a small ritual unique to just the two of you — a private toast, a specific song, a particular sweet"].map(i=>(
              <div key={i} style={{ display:"flex", gap:8, padding:"6px 0" }}>
                <span style={{ color:C.saffron, fontSize:13 }}>•</span><span style={{ fontSize:13, color:"#374151" }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Navigating Two Families' Expectations</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Communicate early — discuss with both families which festivals matter most to each side before the season arrives, to avoid last-minute pressure",
              "It's okay to say no — not every festival needs to be celebrated at full scale in the first year; couples are often still settling in",
              "Document differences respectfully — if one family's rituals differ from what you grew up with, treat it as learning a new family's heritage rather than 'right vs wrong'",
              "Give yourselves grace — the first year of navigating two families' festival calendars is genuinely complex; it gets easier as patterns and compromises emerge naturally",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Your "firsts" as a couple only happen once — write down how you celebrated your first Diwali together, what you cooked, who you called, what felt new. Years from now, when these traditions feel completely normal, these notes will remind you of how they began.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Planning your wedding rituals? See our <Link href="/blog/indian-wedding-rituals-step-by-step" style={{ color:C.saffron, fontWeight:600 }}>complete Indian wedding guide</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="first-rakhi-first-diwali-married-couples-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>💑</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Start your own family&apos;s story</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Document your first festivals together, blend both families&apos; traditions, and build your own heritage on OurParampara.</p>
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
