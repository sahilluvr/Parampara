import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Raksha Bandhan Beyond Siblings — Rakhi for All Relationships & Communities | OurParampara",
  description: "Yes — in Indian tradition, Rakhi can be tied to any person as a symbol of a protective bond. Common Rakhi recipients beyond blood siblings: cousins (who are often treated as siblings in Indian joint f",
  keywords: "Raksha Bandhan beyond siblings, Rakhi different relationships guide, Rakhi for cousins friends guide, Raksha Bandhan meaning, Rakhi soldiers India tradition, Raksha Bandhan significance",
  openGraph: { title: "Raksha Bandhan Beyond Siblings — Rakhi for All Relationships & Communities", description: "Yes — in Indian tradition, Rakhi can be tied to any person as a symbol of a protective bond. Common Rakhi recipients beyond blood siblings: cousins (who are often treated as siblings in Indian joint f", url: "https://www.ourparampara.com/blog/rakshabandhan-beyond-siblings-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=rakshabandhan-beyond-siblings-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=rakshabandhan-beyond-siblings-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/rakshabandhan-beyond-siblings-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="rakshabandhan-beyond-siblings-guide" title="Raksha Bandhan Beyond Siblings — Rakhi for All Relationships & Communities" description="Yes — in Indian tradition, Rakhi can be tied to any person as a symbol of a protective bond. Common Rakhi recipients beyond blood siblings: cousins (who are often treated as siblings in Indian joint f" date="2026-06-18" category="Festival Guide"
        faqs={[
          { q: "Can Rakhi be tied to people who are not blood siblings?", a: "Yes — in Indian tradition, Rakhi can be tied to any person as a symbol of a protective bond. Common Rakhi recipients beyond blood siblings: cousins (who are often treated as siblings in Indian joint family culture), close male friends (the Rakhi establishes a brother-sister-like protective relationship), teachers, community leaders, and family friends. Women have also tied Rakhi to trees (as part of environmental protection movements) and to soldiers as a mark of respect and gratitude." },
          { q: "What is the historical significance of Rakhi as a symbol of protection?", a: "The most famous historical Rakhi story: Queen Karnavati of Mewar sent a Rakhi to Emperor Humayun requesting his protection when her kingdom was threatened. Humayun (a Muslim emperor) honoured the Rakhi as a sacred bond, stopped his military campaign in Bengal, and rushed to Mewar's defence (though he arrived too late). This story illustrates the cross-religious and cross-community nature of the Rakhi tradition — the thread transcends religious and political boundaries." },
          { q: "How do NRI families maintain Raksha Bandhan abroad?", a: "NRI families maintain Raksha Bandhan through: sisters sending Rakhi by courier weeks in advance (shipping to siblings in different countries); the tying ceremony via video call on the day itself; some families coordinating to be in the same city for Raksha Bandhan; and Indian community associations organizing Raksha Bandhan events. The emotional weight of the festival for NRI families is often heightened by distance — the Rakhi sent from abroad carries a particular significance as a physical thread connecting separated siblings." },
        ]}
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪢</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Raksha Bandhan Beyond Siblings — Rakhi for All Relationships & Communities</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Raksha Bandhan — the festival of the protective thread — has always been more than just a biological siblings' festival. The thread (raksha = protection, bandhan = bond) can be tied between any people who choose to establish this specific relationship of protection and care. In this broader sense, Raksha Bandhan is a celebration of chosen family and the bonds that protect us beyond blood.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Raksha Bandhan 2026: August 28. The Rakhi can be tied to any person as a symbol of protective bond — not only blood siblings. Historical precedent: Queen Karnavati tied Rakhi to Emperor Humayun (crossing religious boundaries). NRI families maintain the tradition through courier Rakhi, video call ceremony, and community events. The thread is the symbol — it represents a specific promise of protection.</p>
          </div>

          <h2 style={h2}>Rakhi Tied to Trees and Nature</h2>
          <p style={s}>An eco-tradition has developed in many parts of India: on Raksha Bandhan, women and children tie Rakhis to trees — particularly old trees in the community — as a symbol of protection of nature. This tradition draws on the Hindu principle of Vriksha Puja (tree worship) and adapts the Raksha Bandhan symbol to express protection of the natural world. Schools and environmental organizations have promoted this practice, and it has become a meaningful ritual for many families.</p>
          <h2 style={h2}>Rakhi for Soldiers</h2>
          <p style={s}>The tradition of civilian women sending Rakhis to Indian soldiers stationed on the borders is a powerful expression of the festival's meaning. Thousands of Rakhis are received by soldiers at posts across Kashmir, the Northeast, and the border regions — the thread creating a symbolic bond between the civilian population and those who protect them. Many soldiers describe receiving these Rakhis from strangers as one of the most moving experiences of their service.</p>
          <h2 style={h2}>What Makes Rakhi Special</h2>
          <p style={s}>The Rakhi thread is perhaps the most minimal religious symbol in Indian tradition — a simple thread, traditionally cotton or silk, often decorated with small ornaments. Yet it is taken seriously as a binding promise: the person who receives the Rakhi is understood to have accepted an obligation of protection. The simplicity of the gesture — a thread tied with love and prayer — and the depth of the commitment it represents makes Raksha Bandhan one of the most philosophically interesting of all Indian festivals.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document the specific Rakhis your family has exchanged — not just the names of siblings but any Rakhis tied beyond blood siblings, the specific occasions when this wider tradition was invoked, and the specific protection prayers said when the thread is tied. The Raksha Bandhan of a family, documented across decades, tells a story of the protective bonds that have held it together.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="rakshabandhan-beyond-siblings-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪢</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, rituals and heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
