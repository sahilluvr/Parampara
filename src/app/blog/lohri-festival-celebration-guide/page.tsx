import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lohri Festival — Complete Guide to Rituals, Bonfire Traditions & Celebrations | OurParampara",
  description: "Complete Lohri guide — significance of the bonfire, traditional foods, folk songs and dances, gift-giving customs, and how Punjabi families celebrate this harvest festival.",
  keywords: "Lohri festival guide, Lohri bonfire significance, Lohri rituals Punjab, Lohri food traditions, Lohri celebration ideas, Lohri date 2027",
  openGraph: {
    title: "Lohri Festival — Complete Guide to Rituals, Bonfire Traditions & Celebrations | OurParampara",
    description: "Complete Lohri guide — significance of the bonfire, traditional foods, folk songs and dances, gift-giving customs, and how Punjabi families celebrate this harvest festival.",
    url: "https://www.ourparampara.com/blog/lohri-festival-celebration-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=lohri-festival-celebration-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=lohri-festival-celebration-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/lohri-festival-celebration-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="lohri-festival-celebration-guide"
        title="Lohri Festival — Complete Guide to Rituals, Bonfire Traditions & Celebrations | OurParampara"
        description="Complete Lohri guide — significance of the bonfire, traditional foods, folk songs and dances, gift-giving customs, and how Punjabi families celebrate this harvest festival."
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
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Festival Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🔥</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Lohri Festival — Complete Guide to Rituals, Bonfire Traditions &amp; Celebrations</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 23, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Lohri is a Punjabi harvest festival celebrated on January 13 every year — the night before Makar Sankranti. Marked by bonfires, folk songs, and the sharing of traditional foods, Lohri is especially significant for families celebrating their first Lohri after a wedding or the birth of a child, when it takes on the character of a major family milestone.</p>

          <h2 style={h2}>The Significance of Lohri</h2>
          <p style={s}>Lohri marks the end of the winter solstice period and is traditionally linked to the harvest of the Rabi (winter) crop — particularly sugarcane and sesame. The bonfire represents the peak of winter, with the belief that after Lohri, the cold begins to recede. The fire is also associated with Agni, the fire god, and offerings made into it are considered particularly auspicious. The festival also celebrates the legend of Dulla Bhatti — a Robin Hood-like folk hero of Punjab who rescued girls from abductors and is immortalized in Lohri songs sung to this day.</p>

          <h2 style={h2}>First Lohri After Wedding or Baby</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            {[["First Lohri after wedding","The bride and groom are given special prominence — they circle the bonfire together, receive gifts from family, and the occasion is treated as a major celebration of the new couple"],["First Lohri after a baby","Considered the most auspicious — the newborn's first Lohri is celebrated with particular joy, with gifts and prayers for the child's long life"],["Gift-giving","Both occasions involve the giving of sweets, dried fruits, and money (shagun) by family and friends — in cities, dedicated Lohri gifts like dry fruit boxes are common"]].map(([k,v])=>(
              <div key={k} style={{ marginBottom:10 }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 4px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.6 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Lohri Rituals — Step by Step</h2>
          {[
            "Children go door-to-door in the days before Lohri collecting 'Lohri' — offerings of til, gur, gajak, and sometimes money — singing folk songs as they go",
            "On the evening of January 13, families gather around a bonfire lit in the courtyard, neighbourhood, or open ground",
            "Offerings of sesame seeds (til), jaggery (gur), popcorn (revri), and peanuts are thrown into the fire while circling it",
            "Families circle the bonfire (parikrama) — often multiple rounds — while singing Lohri songs like 'Sundar Mundriye'",
            "The famous Lohri song references Dulla Bhatti — it's sung in call-and-response form, with verses dating back hundreds of years",
            "After the bonfire rituals, families sit together and share Lohri foods — especially revri (sesame-jaggery drops), gajak (sesame brittle), moongphali (peanuts), and makki di roti with sarson da saag",
            "Bhangra and Gidda (Punjabi folk dances) are a festive highlight in many communities",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Traditional Lohri Foods</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Makki di roti","Corn flatbread — the quintessential Lohri winter meal"],["Sarson da saag","Mustard greens cooked slow with spices"],["Gajak","Sesame and jaggery brittle — a winter staple"],["Revri","Small sesame-jaggery drops tossed into the bonfire and eaten"],["Moongphali","Peanuts roasted in shell — eaten around the fire"],["Til laddoo","Sesame seed balls — also shared as gifts"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Record the specific Lohri songs your family sings — the Dulla Bhatti verses can vary slightly by village and family, and these regional variations are being lost. Also note who attended each year's bonfire; these gatherings are a natural family reunion moment worth documenting.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>The morning after Lohri? See our <Link href="/blog/makar-sankranti-festival-guide-rituals-significance" style={{ color:C.saffron, fontWeight:600 }}>Makar Sankranti guide</Link> for the harvest festival that follows.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="lohri-festival-celebration-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🔥</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your Lohri memories</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save bonfire photos, folk songs, and first-Lohri milestones on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
