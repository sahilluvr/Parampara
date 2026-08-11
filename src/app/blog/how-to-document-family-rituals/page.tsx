import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Document Your Family's Rituals Before They Are Lost | Parampara",
  description: "A practical guide for Indian families to document rituals, record elder knowledge, and preserve cultural traditions for future generations.",
  keywords: "document family rituals India, preserve Indian traditions, record elder knowledge, family heritage documentation, cultural preservation India",
  openGraph: { title: "How to Document Your Family's Rituals Before They Are Lost", description: "Practical guide to preserve your family's ritual knowledge.", url: "https://www.ourparampara.com/blog/how-to-document-family-rituals", siteName: "Parampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=how-to-document-family-rituals", width: 1200, height: 630, alt: "how-to-document-family-rituals" }] },
  alternates: { canonical: "https://www.ourparampara.com/blog/how-to-document-family-rituals" },
};

export default function Page() {
  const s = { fontSize:16, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:26, fontWeight:600, color:C.charcoal, marginBottom:16, marginTop:40 };
  const li = { fontSize:15, color:"#374151", lineHeight:1.8, marginBottom:8 };

  return (
    <>
      <BlogStructuredData
        slug="how-to-document-family-rituals"
        title="How to Document Your Family\'s Rituals Before They Are Lost | Parampara"
        description="A practical guide for Indian families to document rituals, record elder knowledge, and preserve cultural traditions for future generations."
        date="2026-06-01"
        category="Festival Guide"
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:"linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Heritage Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:16 }}>📜</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(28px,4vw,48px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:16 }}>How to Document Your Family&apos;s Rituals Before They&apos;re Lost Forever</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 4, 2026</span><span>·</span><span>5 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"48px 24px 80px" }}>
          <p style={s}>Every year, thousands of years of accumulated ritual knowledge disappear with our elders. The specific flowers your Dadi used, the exact way your Nana recited a particular mantra, the regional variation of a puja that your family has followed for generations — this knowledge exists nowhere except in the memory of aging relatives.</p>
          <p style={s}>This guide is about how to capture it before it&apos;s gone.</p>

          <h2 style={h2}>Why Documentation Matters Now</h2>
          <p style={s}>Consider: a 70-year-old elder carries 50+ years of ritual knowledge. That knowledge took decades to accumulate — watching their own parents and grandparents. Once they&apos;re gone, that knowledge is simply gone. No book, no YouTube video captures the specific way YOUR family does things.</p>
          <div style={{ background:"#FEF2F2", border:"1px solid rgba(220,38,38,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:24 }}>
            <p style={{ fontSize:14, color:"#991B1B", margin:0 }}>⚠️ <strong>Urgent:</strong> If you have elders aged 65+, documentation should happen this year — not &quot;someday.&quot;</p>
          </div>

          <h2 style={h2}>What to Document — A Checklist</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            {["The exact samagri list your family uses (not the generic one — YOUR family's list)","Step-by-step process with the order your family follows","Specific mantras or shlokas your family recites","Regional variations — how your family's version differs from standard","The significance your elders explain — the WHY behind each step","Food and prasad recipes specific to each ritual","Who in the family performs which role","Muhurat preferences your family follows","Things you must NEVER do in your family's version","Stories connected to the ritual"].map(i=><li key={i} style={li}>☐ {i}</li>)}
          </ul>

          <h2 style={h2}>How to Have the Conversation with Elders</h2>
          <p style={s}>Many elders don&apos;t think of their knowledge as special — they see it as just &quot;the way things are done.&quot; Here&apos;s how to approach them:</p>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            {['Start with curiosity, not urgency — "Dadi, I want to learn how you do the Navratri puja"','Ask open-ended questions — "What do you do first?" not "Do you do X first?"',"Ask about the WHY — elders love explaining significance","Record casually on your phone during an actual ritual","Don't correct them — document their version, not the textbook version","Ask about what their parents did differently"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Simple Documentation Methods</h2>
          {[
            ["Voice memo during the ritual","The most natural. Just record audio while your elder narrates what they're doing. 10 minutes of authentic narration is priceless."],
            ["Video walkthrough","Ask the elder to do a slow walkthrough of the puja space and explain each item. Even a 5-minute phone video is enough."],
            ["Written step-by-step","After the ritual, sit with the elder and write out each step. Read it back to them and correct it together."],
            ["Photo documentation","Photograph the puja arrangement before it's cleared. Add captions explaining each item."],
            ["Parampara app","Add rituals directly in the app with steps, samagri, voice memos, and photos — all in one place, accessible to the whole family."],
          ].map(([title,desc],i)=>(
            <div key={i} style={{ display:"flex", gap:14, marginBottom:16, padding:"16px", background:i===4?C.saffronLight:C.ivory, borderRadius:12, border:`1px solid ${i===4?"rgba(200,84,26,0.15)":C.border}` }}>
              <span style={{ fontSize:20, flexShrink:0 }}>{["🎙","📹","✍️","📸","🪔"][i]}</span>
              <div>
                <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 4px" }}>{title}</p>
                <p style={{ fontSize:13, color:C.gray, margin:0 }}>{desc}</p>
              </div>
            </div>
          ))}

          <h2 style={h2}>The One Question to Ask Every Elder</h2>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.3)`, borderRadius:14, padding:"24px", textAlign:"center", marginBottom:24 }}>
            <p style={{ fontFamily:F.serif, fontSize:22, fontStyle:"italic", color:C.charcoal, margin:0 }}>
              &ldquo;What is the one thing about this ritual that you want me to never forget?&rdquo;
            </p>
          </div>
          <p style={s}>This single question consistently produces the most meaningful answers — the heart of why a ritual exists in your family.</p>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="how-to-document-family-rituals" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"48px 24px" }}>
          <div style={{ maxWidth:600, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:32, marginBottom:12 }}>📜</p>
            <h2 style={{ fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:10 }}>Start documenting today</h2>
            <p style={{ fontSize:15, color:C.gray, marginBottom:24 }}>Parampara makes it easy to document rituals, add voice memos from elders, and share with your whole family.</p>
            <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", padding:"13px 28px", borderRadius:12, fontSize:14, fontWeight:600, textDecoration:"none" }}>
              Start for free →
            </Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
