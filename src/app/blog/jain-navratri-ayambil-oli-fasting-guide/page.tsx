import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ayambil Oli — The Jain Navratri Fasting Tradition Complete Guide | OurParampara",
  description: "Ayambil is a rigorous Jain fasting practice where the faster eats only one meal per day, consisting of plain boiled grains (rice, dal, or wheat) with no oil, ghee, salt, sugar, spices, milk, curd, or ",
  keywords: "Ayambil Oli guide, Jain Navratri fasting, Ayambil food rules, Jain nine day fast, Ayambil Oli 2026 date, Jain fasting traditions",
  openGraph: { title: "Ayambil Oli — The Jain Navratri Fasting Tradition Complete Guide", description: "Ayambil is a rigorous Jain fasting practice where the faster eats only one meal per day, consisting of plain boiled grains (rice, dal, or wheat) with no oil, ghee, salt, sugar, spices, milk, curd, or ", url: "https://www.ourparampara.com/blog/jain-navratri-ayambil-oli-fasting-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=jain-navratri-ayambil-oli-fasting-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=jain-navratri-ayambil-oli-fasting-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/jain-navratri-ayambil-oli-fasting-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="jain-navratri-ayambil-oli-fasting-guide" title="Ayambil Oli — The Jain Navratri Fasting Tradition Complete Guide" description="Ayambil is a rigorous Jain fasting practice where the faster eats only one meal per day, consisting of plain boiled grains (rice, dal, or wheat) with no oil, ghee, salt, sugar, spices, milk, curd, or " date="2026-06-08" category="Ritual Guide"
        faqs={[
          { q: "What is Ayambil and what foods are allowed?", a: "Ayambil is a rigorous Jain fasting practice where the faster eats only one meal per day, consisting of plain boiled grains (rice, dal, or wheat) with no oil, ghee, salt, sugar, spices, milk, curd, or green vegetables. The food must be cooked without any flavouring — it is eaten as plain and tasteless as possible as a practice of sensory detachment and purification." },
          { q: "When is Ayambil Oli observed?", a: "Ayambil Oli is observed twice a year: in Chaitra month (March-April, nine days ending on Akshaya Tritiya) and in Ashvin month (September-October, coinciding with Navratri, nine days ending on Dussehra/Vijaya Dashami). Both periods are significant in the Jain calendar." },
          { q: "What is the spiritual significance of Ayambil?", a: "Ayambil is a practice of tapasya (austerity) intended to weaken the grip of the senses and the ego. By eating plain, tasteless food once daily, the practitioner trains the mind to be less dependent on sensory pleasure and more focused on the spiritual. In Jain philosophy, attachment to taste (rasna) is considered one of the causes of continued karmic bondage — Ayambil is a direct practice to weaken this attachment." },
        ]}
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌿</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Ayambil Oli — The Jain Navratri Fasting Tradition Complete Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 8, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Ayambil Oli is one of the most distinctive Jain fasting practices — a nine-day fast during which the practitioner eats only once a day, consuming nothing but plain boiled grain (rice or dal) with no oil, ghee, salt, sugar, spices, or flavouring of any kind. It is a practice of extraordinary simplicity and austerity, observed during two specific nine-day periods in the Jain calendar, and it represents the Jain philosophical principle that attachment to taste is a form of bondage.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Ayambil Oli is a 9-day Jain fast (observed in Chaitra and Ashvin months) where one meal per day of plain boiled rice or dal is eaten — no oil, ghee, salt, spices, sugar, milk, or green vegetables. It coincides with Navratri and ends on the 9th day. It is a practice of sensory detachment and karmic purification.</p>
          </div>
          <h2 style={h2}>Ayambil Food Rules</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Allowed","Plain boiled rice, plain boiled dal, plain boiled wheat — cooked in water only"],["Not allowed","Oil, ghee, butter, salt, sugar, any spice or seasoning, milk, curd, honey, green vegetables"],["When to eat","One meal only per day — eaten before sunset"],["Water","Only boiled water is permitted — and only at specific times"],["Root vegetables","Strictly avoided during Ayambil (as during all Jain fasting)"],["Dining","Many practitioners eat at the upashraya (Jain community centre) rather than at home during Oli"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If any member of your family observes Ayambil Oli — particularly elders who have maintained this practice for decades — document their experience and the specific way your family marks this period. Fasting traditions at this level of rigour are increasingly rare and deeply worth preserving.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="jain-navratri-ayambil-oli-fasting-guide" category="Ritual Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌿</p>
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
