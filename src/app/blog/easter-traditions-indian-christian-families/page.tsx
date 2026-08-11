import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Easter Traditions of Indian Christian Families — Customs Across Goa, Kerala & Northeast | OurParampara",
  description: "Good Friday is observed with strict fasting and abstinence from meat. Most families fast completely until 3 PM (the hour of the Crucifixion) then attend the Good Friday church service — the most solem",
  keywords: "Easter Indian Christian traditions, Good Friday India, Easter Kerala Christians, Goan Easter customs, Northeast India Easter, Indian Christian Easter food",
  openGraph: { title: "Easter Traditions of Indian Christian Families — Customs Across Goa, Kerala & Northeast", description: "Good Friday is observed with strict fasting and abstinence from meat. Most families fast completely until 3 PM (the hour of the Crucifixion) then attend the Good Friday church service — the most solem", url: "https://www.ourparampara.com/blog/easter-traditions-indian-christian-families", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=easter-traditions-indian-christian-families", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=easter-traditions-indian-christian-families"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/easter-traditions-indian-christian-families" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="easter-traditions-indian-christian-families" title="Easter Traditions of Indian Christian Families — Customs Across Goa, Kerala & Northeast" description="Good Friday is observed with strict fasting and abstinence from meat. Most families fast completely until 3 PM (the hour of the Crucifixion) then attend the Good Friday church service — the most solem" date="2026-06-03" category="Festival Guide"
        faqs={[
          { q: "How do Indian Christian families observe Good Friday?", a: "Good Friday is observed with strict fasting and abstinence from meat. Most families fast completely until 3 PM (the hour of the Crucifixion) then attend the Good Friday church service — the most solemn service of the Christian year — which includes the Stations of the Cross, reading of the Passion narrative, and veneration of the Cross. In Goa, elaborate processions carry a life-size statue of Christ through the streets." },
          { q: "What foods are eaten on Easter Sunday in Indian Christian families?", a: "Easter Sunday ends the Lenten fast with celebratory foods. In Goa: Sorpotel, Chicken Xacuti, Bebinca, and specific Easter sweets. In Kerala: the Easter Sadya — a Sadya-style feast on banana leaf. In North India among Anglo-Indian communities: hot cross buns, Easter cake, and lamb dishes. Each community has developed specific Easter food traditions over generations." },
          { q: "What is Lent for Indian Christians?", a: "Lent is the 40-day period before Easter during which many Indian Christians observe fasting (avoiding meat on Fridays, some abstaining from meat entirely), increased prayer and church attendance, and charitable giving. For many Indian Christian families, the Lenten practices are among the most distinguishing cultural markers of their faith — specific Friday foods, daily Mass attendance, and the family praying the Rosary together." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌅</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Easter Traditions of Indian Christian Families — Customs Across Goa, Kerala & Northeast</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 3, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Easter is the central festival of the Christian faith — the celebration of the Resurrection of Christ. For Indian Christian families across Goa, Kerala, the Northeast, and across the diaspora, Easter is observed with a depth of tradition that blends universal Christian practice with regional cultural specificity developed over centuries.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Easter traditions: Lent (40 days of fasting), Holy Week culminating in Good Friday (solemn fast, Stations of the Cross, church service), Holy Saturday (Easter Vigil at night), and Easter Sunday (early Mass, breaking the fast, family feast). In Goa — Sorpotel and Bebinca. In Kerala — Easter Sadya on banana leaf.</p>
          </div>
          <h2 style={h2}>Holy Week — Day by Day</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Palm Sunday","The Sunday before Easter — palm leaves or coconut fronds are blessed at church and brought home, placed near the family shrine"],["Holy Monday-Wednesday","Increased church attendance, Stations of the Cross, family prayers"],["Holy Thursday (Maundy Thursday)","Commemorates the Last Supper — washing of feet ceremony at church, the altar is stripped bare after the Mass"],["Good Friday","The most solemn day — fasting until 3 PM, the Good Friday service, processions in Goa, veneration of the Cross"],["Holy Saturday (Easter Vigil)","An overnight service from Saturday night to Sunday morning — the lighting of the Paschal candle, readings, baptisms, and the first Alleluia of Easter"],["Easter Sunday","The joyful culmination — early morning Mass, the breaking of the fast, the family feast, visiting relatives"]].map(([k,v])=>(
              <div key={k} style={{ padding:"10px 14px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}`, display:"flex", gap:12 }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:140, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family&apos;s specific Good Friday fasting foods, the church your family attends for each Holy Week service, and the specific Easter foods that signal the end of Lent. These annual rhythms are the heartbeat of Indian Christian family life.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="easter-traditions-indian-christian-families" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌅</p>
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
