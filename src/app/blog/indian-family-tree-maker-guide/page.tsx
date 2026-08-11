import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Make an Indian Family Tree — Free Online Tool & Guide | OurParampara",
  description: "Step-by-step guide to building your Indian family tree — what to include, how to interview elders, organize generations, and preserve it digitally for free.",
  keywords: "Indian family tree maker, family tree online free, how to make family tree, vansh vriksha, family tree app India, Indian genealogy guide",
  openGraph: {
    title: "How to Make an Indian Family Tree — Free Online Tool & Guide | OurParampara",
    description: "Step-by-step guide to building your Indian family tree — what to include, how to interview elders, organize generations, and preserve it digitally for free.",
    url: "https://www.ourparampara.com/blog/indian-family-tree-maker-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-family-tree-maker-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=indian-family-tree-maker-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-family-tree-maker-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="indian-family-tree-maker-guide"
        title="How to Make an Indian Family Tree — Free Online Tool & Guide | OurParampara"
        description="Step-by-step guide to building your Indian family tree — what to include, how to interview elders, organize generations, and preserve it digitally for free."
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌳</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>How to Make an Indian Family Tree — Free Online Tool & Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 14, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>A family tree — or "vansh vriksha" — is more than a chart of names and dates. For Indian families, it's a record of where you come from, the villages your ancestors lived in, the professions they followed, and the stories that shaped your family identity. Here's how to build one that actually gets preserved.</p>

          <h2 style={h2}>Why Indian Family Trees Are Different</h2>
          <p style={s}>Unlike Western genealogy which often focuses on birth/death records and immigration documents, Indian family trees carry additional layers: gotra (lineage for marriage purposes), native village, caste/community history, family deity (kuldevta/kuldevi), and oral stories that were never written down. A good Indian family tree captures all of this — not just names and dates.</p>

          <h2 style={h2}>What to Include in Each Person's Profile</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Full name (and any name changes)","Date of birth/death","Native village/town","Gotra","Profession","Spouse's name and family","Children's names in order","Photo if available","Notable life events","Migration history (if any)"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Step-by-Step: Building Your Family Tree</h2>
          {[
            "Start with yourself and work backward — list your parents, then grandparents, then great-grandparents on both sides",
            "Interview the eldest living relatives first — memories fade and this information cannot be recovered once lost",
            "Record interviews on your phone (with permission) — voice notes capture details and emotion that text cannot",
            "Cross-reference dates and names across different family members — memories often differ slightly, note the discrepancies",
            "Look for old documents — ration cards, property papers, school certificates, wedding invitations often have full names and dates",
            "Organize by generation — group people into 'levels' (great-grandparents, grandparents, parents, your generation, children)",
            "Note relationships clearly — Indian families often have complex relations (cousin-brothers, multiple marriages, joint families) that need explicit notes",
            "Add photos wherever available — even a single old family photo can anchor an entire branch of the tree",
            "Digitize everything — paper notes get lost; a digital family tree can be accessed by all family members and updated over time",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Questions to Ask Your Elders</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "What was your childhood home like? Which village/town?",
              "What did your parents and grandparents do for a living?",
              "What is our family's gotra and kuldevta/kuldevi?",
              "Are there any family stories about migration, partition, or major life events?",
              "What traditions or rituals were unique to our family?",
              "Were there any notable ancestors — freedom fighters, scholars, business founders?",
              "What languages were spoken at home growing up?",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Digital vs Paper Family Trees</h2>
          <p style={s}>Paper family trees get lost, damaged, or end up with only one family member who may not share them widely. A digital family tree solves several problems: it can be accessed by every family member regardless of location, updated as new generations are born, includes photos and voice recordings, and can be exported as a printable document for those who want a physical copy. For families spread across cities or countries — increasingly common — a digital, shared family tree is the only practical way to keep everyone's information current.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Don't wait for a "good time" to start — interview your oldest relatives now, even informally over a phone call. The most valuable family history is often lost simply because no one asked the right questions in time.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-family-tree-maker-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌳</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Build your family tree on OurParampara — free</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Add family members, generations, photos, and stories — accessible to your whole family, anywhere in the world.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>
              Start your family tree →
            </Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
