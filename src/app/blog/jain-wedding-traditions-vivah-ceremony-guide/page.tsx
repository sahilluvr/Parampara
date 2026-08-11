import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Jain Wedding Traditions — Complete Guide to Vivah Ceremony & Rituals | OurParampara",
  description: "Jain weddings share many outward similarities with Hindu weddings (the Mandap, pheras, family celebrations) but differ in key ways: Jain wedding mantras invoke the Tirthankaras rather than Hindu deiti",
  keywords: "Jain wedding traditions, Jain Vivah ceremony guide, Jain marriage rituals, Vara Ghodo ceremony, Jain pheras mantras, Jain wedding customs, ahimsa wedding traditions",
  openGraph: { title: "Jain Wedding Traditions — Complete Guide to Vivah Ceremony & Rituals", description: "Jain weddings share many outward similarities with Hindu weddings (the Mandap, pheras, family celebrations) but differ in key ways: Jain wedding mantras invoke the Tirthankaras rather than Hindu deiti", url: "https://www.ourparampara.com/blog/jain-wedding-traditions-vivah-ceremony-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=jain-wedding-traditions-vivah-ceremony-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=jain-wedding-traditions-vivah-ceremony-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/jain-wedding-traditions-vivah-ceremony-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="jain-wedding-traditions-vivah-ceremony-guide" title="Jain Wedding Traditions — Complete Guide to Vivah Ceremony & Rituals" description="Jain weddings share many outward similarities with Hindu weddings (the Mandap, pheras, family celebrations) but differ in key ways: Jain wedding mantras invoke the Tirthankaras rather than Hindu deiti" date="2026-06-06" category="Wedding Guide"
        faqs={[
          { q: "What makes a Jain wedding different from a Hindu wedding?", a: "Jain weddings share many outward similarities with Hindu weddings (the Mandap, pheras, family celebrations) but differ in key ways: Jain wedding mantras invoke the Tirthankaras rather than Hindu deities; no blood sacrifices or animal products are used; flowers are used minimally as they involve uprooting; and the ceremony reflects Jain principles of ahimsa throughout. The priest is a Jain Brahmin (Sthanakvasi or Digambara, depending on the sect)." },
          { q: "What is the Vara Ghodo ceremony in Jain weddings?", a: "Vara Ghodo (the groom's horse procession) is a pre-wedding ceremony in many Jain communities where the groom arrives at the wedding venue on a decorated white horse (or today, a decorated vehicle). The procession is accompanied by a band, dancing relatives, and celebration. The bride's family formally receives the groom at the entrance with the aarti and welcome ceremony." },
          { q: "Are flowers used in Jain weddings?", a: "Jain weddings traditionally minimise flower use because plucking flowers is considered a form of himsa (harm to living beings). Some Jain families avoid fresh flowers entirely and use decorative alternatives. Others use flowers that have fallen naturally. The level of adherence varies by family and sect — Shvetambara Jains are generally more accommodating of flowers than Digambara Jains." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌸</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Jain Wedding Traditions — Complete Guide to Vivah Ceremony & Rituals</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 6, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>A Jain wedding is a beautiful expression of the faith&apos;s core principles — ahimsa (non-violence), satya (truth), and asteya (non-stealing) — woven into the fabric of a family celebration. While many elements are shared with Hindu weddings (the Mandap, the seven pheras, the fire ritual), the specifically Jain elements reflect a worldview that is distinct and worth understanding and preserving.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Jain weddings include: Vara Ghodo (groom procession), Mandap ceremony, Jain Vivah Puja (invoking the Tirthankaras), Pheras around the sacred fire with Jain mantras, exchange of garlands, and Saptapadi. No animal products used; minimal flower use; wedding feast is strictly vegetarian or Jain (no root vegetables in some families).</p>
          </div>
          <h2 style={h2}>Jain Wedding Ceremony — Step by Step</h2>
          {["Vara Ghodo — the groom&apos;s procession arrives, received by the bride&apos;s family with aarti and welcome ceremony","Ganesh Puja — invoking Ganesh (or in some Jain families, beginning directly with Navkar Mantra) to remove obstacles","Mandap ceremony — the couple is seated in the decorated wedding canopy. The priest recites Jain prayers and mantras from the Agamas.","Jain Vivah Puja — the priest performs specific Jain rituals invoking the Tirthankaras and the principles of dharma","Pheras (Pradakshina) — the couple takes seven rounds around the sacred fire. The Jain mantras recited differ from Hindu pheras — they invoke the 24 Tirthankaras and the Jain principles.","Saptapadi — the seven sacred steps, each representing a vow","Garland exchange and Sindoor — in some Jain communities, sindoor is applied; in others, it is not part of the tradition","Wedding feast — strictly vegetarian, often Jain-vegetarian (no root vegetables like onion, garlic, potato for stricter families)"].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document the specific Jain mantras recited at your family&apos;s weddings, the name of the priest, and any specific Jain wedding customs unique to your community or region. Jain wedding traditions vary by sect (Shvetambara vs Digambara) and region — your family&apos;s specific tradition is distinct heritage.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="jain-wedding-traditions-vivah-ceremony-guide" category="Wedding Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌸</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, recipes and heritage on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
