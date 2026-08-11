import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How NRI Families Can Preserve Indian Heritage Abroad | Parampara",
  description: "Practical guide for Indian families living abroad — teach children Indian traditions, celebrate festivals away from India, and keep cultural roots alive across generations.",
  keywords: "NRI Indian heritage, preserve Indian culture abroad, Indian traditions diaspora, teach children Indian culture, NRI festivals USA UK Canada",
  openGraph: {
    title: "How NRI Families Can Preserve Indian Heritage Abroad | Parampara",
    description: "Practical guide for Indian families living abroad — teach children Indian traditions, celebrate festivals away from India, and keep cultural roots alive across generations.",
    url: "https://www.ourparampara.com/blog/how-to-preserve-family-heritage-nri",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=how-to-preserve-family-heritage-nri", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=how-to-preserve-family-heritage-nri"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/how-to-preserve-family-heritage-nri" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:10 };
  return (
    <>
      <BlogStructuredData
        slug="how-to-preserve-family-heritage-nri"
        title="How NRI Families Can Preserve Indian Heritage Abroad | Parampara"
        description="Practical guide for Indian families living abroad — teach children Indian traditions, celebrate festivals away from India, and keep cultural roots alive across generations."
        date="2026-06-01"
        category="Festival Guide"
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:"linear-gradient(135deg,#0F1B35,#1A2D5A)" }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Heritage Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🌍</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>How NRI Families Can Preserve Indian Heritage Abroad</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 12, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>
        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The second generation doesn&apos;t lose Indian culture because they don&apos;t want it. They lose it because no one gave them a way to access it. This guide is for Indian families raising children in the USA, UK, Canada, Australia, or anywhere outside India.</p>

          <h2 style={h2}>The Real Challenge</h2>
          <p style={s}>Growing up in India, culture is absorbed passively — through festivals visible in every street, grandparents who know every mantra, neighbours who share rituals. Abroad, none of this passive absorption happens. Culture must be consciously taught.</p>
          <p style={s}>The good news: children who are intentionally taught their heritage tend to hold it more deeply than those who absorbed it passively. They understand the why, not just the what.</p>

          <h2 style={h2}>10 Practical Ways to Preserve Heritage</h2>
          {[
            ["Create a family festival calendar","Celebrate every major festival, even simplified versions. Diwali without firecrackers is still Diwali — the diyas, the puja, the family togetherness, the mithai. Calendar it. Make it non-negotiable."],
            ["Cook traditional food with your children","Food is the most powerful cultural anchor. Make dal baati, puri sabzi, kheer — and involve children in cooking. They learn through doing. The smell of ghee in a pan is its own kind of memory."],
            ["Video call with Indian grandparents regularly","Schedule weekly calls, not just on festivals. Have grandparents tell stories — not just about their childhood, but about rituals, about their parents, about the family&apos;s history."],
            ["Teach one language seriously","Pick one Indian language and commit to it. Hindi, Punjabi, Tamil, Bengali — even basic conversational ability keeps a door open. Apps like Duolingo have Indian languages. But nothing beats speaking it at home."],
            ["Document your family&apos;s specific customs","Not generic Hindu/Sikh/Muslim customs — YOUR family&apos;s. The specific way your mother does Diwali puja. Your grandmother&apos;s Dahi Handi. These are irreplaceable and will be lost without documentation."],
            ["Build a cultural library","Books about Indian mythology in English (Devdutt Pattanaik is excellent), children&apos;s books about festivals, illustrated stories from the epics. Children read what&apos;s available."],
            ["Connect with Indian community locally","Find Indian families nearby. Celebrate festivals together. Children form cultural identity partly through peers. A friend who also celebrates Holi makes the culture feel normal, not exotic."],
            ["Visit India regularly","Even once every 2-3 years. Festivals experienced in India create memories that last a lifetime. A single Diwali in India is worth 10 Diwalis abroad."],
            ["Talk about why, not just what","Don&apos;t just say &apos;we do this puja.&apos; Explain why. The story of Satyanarayan Katha. The meaning of Sindoor. The significance of touching elders&apos; feet. When children understand the meaning, they want to continue it."],
            ["Use technology to connect with heritage","Apps like Parampara let you document your family&apos;s rituals, samagri lists, elder voice recordings, and share them with the whole family across devices. Your child in London can see the exact Satyanarayan puja your Dadi does in Chandigarh."],
          ].map(([title,desc],i)=>(
            <div key={i} style={{ display:"flex", gap:16, marginBottom:20, padding:"16px", background:i%2===0?"#fff":C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
              <span style={{ width:28, height:28, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <div>
                <p style={{ fontSize:14, fontWeight:700, color:C.charcoal, margin:"0 0 4px" }}>{title}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{desc}</p>
              </div>
            </div>
          ))}

          <h2 style={h2}>What Your Children Will Thank You For</h2>
          <p style={s}>Many NRIs in their 30s and 40s describe the same regret: &apos;I wish my parents had taught me more.&apos; They want to perform rituals at their children&apos;s births and weddings but don&apos;t know how. They want to cook the food their grandmothers cooked but don&apos;t have the recipes.</p>
          <p style={s}>The gap between generations grows with each move, each country, each year. But it can be bridged — deliberately, with love, and with documentation.</p>

          <div style={{ background:"#F5F3FF", border:"1px solid rgba(124,58,237,0.2)", borderRadius:12, padding:"16px 20px" }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#7C3AED", margin:"0 0 6px" }}>💡 Start this weekend</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.6 }}>Call a parent or grandparent. Ask them: &apos;What is the one ritual you want me to never let go of?&apos; Record their answer. That one recording, done this weekend, could be the most valuable cultural gift you ever give your children.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="how-to-preserve-family-heritage-nri" category="Festival Guide"/>
        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌍</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Built for NRI families</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20 }}>Parampara works across all devices — family in India documents the rituals, family abroad reads and follows them.</p>
            <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", padding:"12px 28px", borderRadius:12, fontSize:14, fontWeight:600, textDecoration:"none" }}>Start for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
