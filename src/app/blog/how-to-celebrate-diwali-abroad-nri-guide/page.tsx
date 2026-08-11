import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Celebrate Diwali Abroad — Complete NRI Guide for USA, UK & Canada | OurParampara",
  description: "Complete guide for NRI families celebrating Diwali abroad — finding samagri, making rangoli without marigolds, virtual puja with family in India, and building new traditions.",
  keywords: "celebrate Diwali abroad, Diwali in USA guide, Diwali in UK NRI, Diwali puja abroad, NRI Diwali celebration, Diwali without family India, Indian festivals abroad NRI",
  openGraph: { title: "How to Celebrate Diwali Abroad — NRI Guide", description: "Finding samagri, virtual puja with family in India, and building your own Diwali traditions in USA, UK and Canada.", url: "https://www.ourparampara.com/blog/how-to-celebrate-diwali-abroad-nri-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=how-to-celebrate-diwali-abroad-nri-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=how-to-celebrate-diwali-abroad-nri-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/how-to-celebrate-diwali-abroad-nri-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="how-to-celebrate-diwali-abroad-nri-guide" title="How to Celebrate Diwali Abroad — Complete NRI Guide for USA, UK & Canada" description="Complete guide for NRI families celebrating Diwali abroad — finding samagri, virtual puja with family, and building new traditions." date="2026-04-12" category="Heritage Guide"
        faqs={[
          { q: "Where can I find Diwali puja samagri in the USA or UK?", a: "Indian grocery stores (Patel Brothers, India Bazaar, Spice World, Namaste India) carry most puja items. Amazon ships many samagri items including roli, moli, camphor, and diyas. In the UK, Southall and Wembley markets have extensive ranges. For fresh marigolds, Trader Joe's and Whole Foods sometimes carry them seasonally." },
          { q: "How do I do Diwali puja without a pandit abroad?", a: "Most Diwali Lakshmi puja rituals can be self-performed by families. Set up a clean altar with Lakshmi-Ganesha idols, light diyas, offer flowers and sweets, recite a simple Lakshmi Stuti or play an audio version, perform aarti, and distribute prasad. A detailed step-by-step guide is available in our Diwali puja guide." },
          { q: "How do NRI families celebrate Diwali without family in India?", a: "Most NRI families do a combination of things: video calling family in India during the puja moment, hosting Indian friends locally for a shared celebration, cooking traditional sweets and sharing with neighbors, and in many cities joining community Diwali melas organized by local Indian associations." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪔</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>How to Celebrate Diwali Abroad — A Complete NRI Guide for Families in USA, UK &amp; Canada</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>April 12, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Diwali abroad hits differently. The fireworks that light up every rooftop back home, the smell of mithai being made in the kitchen for days before, the neighbours dropping in — none of that arrives automatically. But what thousands of NRI families have discovered is that celebrating Diwali outside India, with some intention and planning, can create traditions that are just as meaningful — and sometimes more so, because every element is a deliberate choice rather than simply the air you breathe.</p>

          {/* Quick answer box — for AI engine citation */}
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>NRI families can celebrate Diwali abroad by: finding samagri at Indian grocery stores (Patel Brothers in USA, Southall markets in UK), performing a simplified self-puja at home, video calling family in India during the puja moment, making rangoli with flour or flower petals, and hosting an Indian friends potluck. Firecrackers are banned in most Western cities — light indoor sparklers instead.</p>
          </div>


          <h2 style={h2}>The Biggest Challenges NRIs Face</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Finding samagri","Roli, moli, camphor, earthen diyas — all available at Indian grocers, but need advance planning"],["No pandit available","Most families self-perform puja; online pandits now offer video-call services for major rituals"],["Time zones with India","Lakshmi puja muhurat in India may be 3 AM your time — many families find their own auspicious evening time"],["Fresh flowers","Marigolds and lotuses are harder to find; chrysanthemums, roses, and sunflowers work as alternatives"],["Firecrackers banned","Most Western cities don't allow firecrackers — light sparklers indoors, or attend community displays"],["Absence of extended family","The most felt gap — most families compensate with local Indian community gatherings"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:"#DC2626" }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Where to Get Diwali Samagri Abroad</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["USA","Patel Brothers, India Bazaar, Apna Bazar, Spice World (most major cities); Amazon India/US for advance orders; Walmart and Target now stock basic Diwali items seasonally"],["UK","Southall Broadway (London), Belgrave Road (Leicester), Curry Mile (Manchester); Tesco and Asda stock seasonal Indian items; Amazon UK"],["Canada","Brampton (Ontario) has the most comprehensive Indian stores; No Frills and FreshCo increasingly stock Indian groceries; Amazon.ca"],["Australia","Harris Farm, Spice Bazaar, Inala (Brisbane); online via Dhani Mart or Indian grocery delivery apps"],["Universal tip","Order 2-3 weeks in advance for items like brass diyas, kumkum, specific puja kits — they sell out close to Diwali"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:14, padding:"10px 14px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:90, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Doing Puja Without a Pandit</h2>
          <p style={s}>Most Diwali puja can be performed by the family themselves — and many NRI families find this version more intimate and meaningful. Here is a simplified self-performed Lakshmi puja that takes about 30-40 minutes:</p>
          {["Clean and decorate the puja altar — a small table with a clean cloth works perfectly in any home","Place Lakshmi and Ganesha idols or photos, with a small pile of coins and a few grains of rice (symbolizing prosperity)","Light a diya and incense — ghee diyas are traditional, but candle-diyas work well too","Offer flowers (whatever you have), sweets, and fruits","Recite or play audio of Lakshmi Stuti or Lakshmi Chalisa — many excellent recordings are available on YouTube and Spotify","Perform aarti, circling the diya in a clockwise motion","Close with a moment of gratitude and distribute prasad to everyone present"].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>The Video Call Puja — Bridging India and Abroad</h2>
          <p style={s}>One of the most emotionally powerful things NRI families have developed is the shared video call puja — parents in India and children abroad performing puja simultaneously, with the phone or laptop propped up so everyone can see each other&apos;s diyas, sweets, and puja thalis. Some families have a standing annual call where the grandmother in Jaipur and the daughter in New Jersey light their diyas at the same moment. This simple act — being present together across thousands of miles in the same ritual — is one of the most meaningful experiences many NRI families describe.</p>

          <h2 style={h2}>Building Your Own Diwali Traditions Abroad</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Host a Diwali potluck with local Indian friends — each family brings one traditional sweet or savory dish, creating a shared feast","Start a rangoli-making tradition with neighborhood children — this naturally introduces Indian culture to non-Indian neighbours","Give Diwali gifts to non-Indian friends (mithai boxes, decorative diyas) — this spreads the festival's warmth and builds community","Create a 'Diwali photo wall' of your decorations each year — a decade of photos becomes a meaningful family archive","Volunteer or donate on Diwali — the festival's theme of light and giving translates beautifully into any cultural context"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>The Diwali traditions you build abroad from scratch — the specific diya pattern you developed, the sweet you started making because you couldn&apos;t find it in a store, the neighbour you started sharing mithai with — these are not lesser versions of &quot;real&quot; Diwali. They are the beginning of your family&apos;s own chapter of the tradition. Document them on OurParampara so your children can look back and see how it started.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Want the full puja guide? See our <Link href="/blog/diwali-puja-steps-for-family" style={{ color:C.saffron, fontWeight:600 }}>complete Diwali puja vidhi guide</Link>.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="how-to-celebrate-diwali-abroad-nri-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪔</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Keep your Diwali traditions alive, wherever you are</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your abroad Diwali traditions on OurParampara — share with family in India and build a heritage your children will treasure.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
