import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Indian Couple Name Combinations — How to Create a Beautiful Blended Name & Hashtag | OurParampara",
  description: "The most popular method blends both partners' first names — taking the first syllables of each name and merging them (e.g., Amit + Ritu becomes 'Amitu' or 'Ritmit'), or simply combining full names wit",
  keywords: "Indian couple name combination generator, wedding hashtag ideas India, couple name blend ideas, Hindi wedding hashtag, Indian wedding Instagram hashtag",
  openGraph: { title: "Indian Couple Name Combinations — How to Create a Beautiful Blended Name & Hashtag", description: "The most popular method blends both partners' first names — taking the first syllables of each name and merging them (e.g., Amit + Ritu becomes 'Amitu' or 'Ritmit'), or simply combining full names wit", url: "https://www.ourparampara.com/blog/indian-couple-name-combination-generator-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-couple-name-combination-generator-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=indian-couple-name-combination-generator-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-couple-name-combination-generator-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="indian-couple-name-combination-generator-guide" title="Indian Couple Name Combinations — How to Create a Beautiful Blended Name & Hashtag" description="The most popular method blends both partners' first names — taking the first syllables of each name and merging them (e.g., Amit + Ritu becomes 'Amitu' or 'Ritmit'), or simply combining full names wit" date="2026-06-20" category="Wedding Guide"
        faqs={[
          { q: "How do I create a wedding hashtag combining both our names?", a: "The most popular method blends both partners' first names — taking the first syllables of each name and merging them (e.g., Amit + Ritu becomes 'Amitu' or 'Ritmit'), or simply combining full names with 'Weds' or 'Ki Shaadi' (e.g., #AmitWedsRitu, #RituKiShaadi). For a more personal touch, many couples use a phrase from their story — how they met, an inside joke, or a meaningful Hindi/Sanskrit word — combined with their names or wedding year." },
          { q: "What makes a good Indian wedding hashtag?", a: "A good wedding hashtag is short (ideally under 20 characters), easy to spell so all guests can use it consistently, includes both partners' names or a clear blend of them, and avoids unnecessary numbers unless they're meaningful (like the wedding year). The goal is to create one consistent tag so that every guest's photos — from Mehendi to Reception — can be found in a single Instagram search, rather than scattered across dozens of individual profiles." },
          { q: "Should we use different hashtags for each wedding event?", a: "Most wedding planners recommend one primary hashtag used consistently across all events (Mehendi, Sangeet, Wedding, Reception) so all photos stay searchable in one place. Some couples create 2-3 event-specific variants (e.g., #RituMehendi, #AmitRituShaadi, #ARForever) for extra flavour, but using too many splits your photo gallery across multiple tags and makes it harder for family to find everything later." },
        ]}
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Wedding Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>💑</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Indian Couple Name Combinations — How to Create a Beautiful Blended Name & Hashtag</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 20, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>An Indian wedding generates thousands of photos across Mehendi, Sangeet, the wedding ceremony, and the reception — scattered across dozens of guests' phones and social media accounts. A well-chosen couple hashtag solves this by gathering every photo in one searchable place, while also becoming a small, joyful piece of your wedding story. This guide walks through how to create a beautiful, meaningful Indian wedding hashtag from your names.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Best Indian wedding hashtags blend both names (#AmitWedsRitu, #RituKiShaadi, #AmitAurRitu), stay under 20 characters, and avoid unnecessary numbers. Use one consistent primary hashtag across all events — Mehendi, Sangeet, Wedding, Reception — so every guest photo stays searchable in one place. Hindi/Sanskrit phrases add cultural authenticity (e.g., combining names with 'Pyaar', 'Milan', or a meaningful shared word).</p>
          </div>

          <h2 style={h2}>Simple Name-Blend Hashtags</h2>
          <p style={s}>Combine first syllables of both names: Amit + Ritu → #Amitu or #Ritmit. Combine full names with a connector: #AmitWedsRitu, #RituKiShaadi, #AmitAurRitu. Karan + Neha → #KaranNehaForever, #NeharanKiShaadi. These straightforward blends are the most popular because they're instantly recognisable and easy for every guest, regardless of age, to spell correctly.</p>
          <h2 style={h2}>Story-Based & Hindi Hashtags</h2>
          <p style={s}>Hashtags built around how you met, a shared joke, or a meaningful Hindi/Sanskrit word feel more personal — #MilanOfTwoSouls, #PyaarKaBandhan, #DilSeDilTak. These work especially well for couples wanting their hashtag to reflect their specific love story rather than a generic name blend, and tend to be more memorable for guests.</p>
          <h2 style={h2}>Bollywood-Inspired Hashtags</h2>
          <p style={s}>Many Indian couples draw on Bollywood song titles or iconic dialogue for a playful, culturally rich hashtag — referencing a favourite film or song that has special meaning for the couple. These add personality and instant relatability for guests who grew up on the same films.</p>
          <h2 style={h2}>Practical Tips Before You Finalise</h2>
          <p style={s}>Search Instagram first to make sure your chosen hashtag isn't already heavily used by unrelated content. Keep it under 20 characters for easy typing. Share it clearly on invitations, welcome signage at the venue, and a reminder card at each event so every guest — including older relatives less familiar with hashtags — knows exactly what to use.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Once your wedding is over, your hashtag becomes a time capsule — but Instagram posts can get deleted or buried over the years. Save your favourite photos permanently on OurParampara's Memory Vault, where they'll be preserved as part of your family's heritage for the next generation to see, hashtag and all.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-couple-name-combination-generator-guide" category="Wedding Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>💑</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, names and heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
