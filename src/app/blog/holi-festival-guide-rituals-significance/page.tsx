import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Holi — Complete Guide to Rituals, Holika Dahan & the Festival of Colours | OurParampara",
  description: "Complete Holi guide — significance of Holika Dahan, the Prahlad and Holika legend, Radha-Krishna celebrations, rituals before playing colours, regional variations, and how families celebrate together.",
  keywords: "Holi rituals, Holika Dahan significance, Holi festival guide, Holi date 2027, Holi puja vidhi, Holi regional celebrations, Holi colours significance",
  openGraph: {
    title: "Holi — Complete Guide to Rituals, Holika Dahan & the Festival of Colours | OurParampara",
    description: "Complete Holi guide — significance of Holika Dahan, the Prahlad and Holika legend, Radha-Krishna celebrations, rituals before playing colours, regional variations, and how families celebrate together.",
    url: "https://www.ourparampara.com/blog/holi-festival-guide-rituals-significance",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=holi-festival-guide-rituals-significance", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=holi-festival-guide-rituals-significance"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/holi-festival-guide-rituals-significance" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="holi-festival-guide-rituals-significance"
        title="Holi — Complete Guide to Rituals, Holika Dahan & the Festival of Colours | OurParampara"
        description="Complete Holi guide — significance of Holika Dahan, the Prahlad and Holika legend, Radha-Krishna celebrations, rituals before playing colours, regional variations, and how families celebrate together."
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
            <div style={{ fontSize:40, marginBottom:14 }}>🎨</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Holi — Complete Guide to Rituals, Holika Dahan &amp; the Festival of Colours</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 6, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Holi is one of the most joyous and widely recognized Hindu festivals — a two-day celebration marking the arrival of spring, the triumph of good over evil, and the playful divine love of Radha and Krishna. While the colour-throwing of Rangwali Holi is its most visible aspect, the festival begins the night before with Holika Dahan — a ritual bonfire rich in symbolism.</p>

          <h2 style={h2}>The Legend of Holika &amp; Prahlad</h2>
          <p style={s}>Holi's origin traces to the story of Prahlad, a young devotee of Lord Vishnu, and his aunt Holika, sister of the demon king Hiranyakashipu. When Prahlad refused to worship his father instead of Vishnu, Hiranyakashipu ordered Holika — who possessed a boon making her immune to fire — to sit with Prahlad on a pyre. Through his unwavering devotion, Prahlad emerged unharmed while Holika perished. The bonfire of Holika Dahan reenacts this victory of devotion and good over arrogance and evil.</p>

          <h2 style={h2}>The Two Days of Holi</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            {[["Holika Dahan (Choti Holi)","The eve of Holi — communities gather around bonfires, symbolizing the burning away of negativity. Many perform a small puja before lighting the fire, circling it and offering grains, coconut, or other items."],["Rangwali Holi (Dhulandi)","The main day — people play with colours (gulal), water, and water guns, visit friends and family, and share festive sweets like gujiya and drinks like thandai."]].map(([k,v])=>(
              <div key={k} style={{ marginBottom:12 }}>
                <p style={{ fontSize:14, fontWeight:700, color:C.saffron, margin:"0 0 6px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Holika Dahan Puja Vidhi</h2>
          {[
            "In the days before Holi, families and communities gather wood, dried leaves, and combustible materials to build the bonfire pyre",
            "On the evening of Holika Dahan, perform a small puja near the pyre — offering roli, akshat, flowers, and water",
            "Circle the unlit pyre (parikrama), often while holding a sacred thread (kalawa) wrapped around it, performed in odd numbers of rounds (e.g., 3, 5, or 7)",
            "Offer items like raw cotton thread, turmeric, chickpeas (chana), coconut, and batashe (sugar candies) into the fire once lit",
            "Many families apply a paste of the burnt ash (vibhuti) from Holika Dahan on their foreheads the next morning as a protective blessing",
            "Children often roast grains or chickpeas in the dying embers — a popular tradition called 'holi ka bhuna hua chana'",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Regional Variations</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Dhuleti","Gujarat — the main colour-playing day, following Holika Dahan the night before"],["Rang Panchami","Maharashtra — colours are played a few days after Holi, on the fifth day"],["Dol Jatra","Bengal — idols of Radha-Krishna are placed on decorated palanquins and swung, alongside colour play"],["Lathmar Holi","Barsana, UP — women playfully beat men with sticks (lathis), reenacting Radha-Krishna folklore"],["Hola Mohalla","Punjab — Sikh martial arts displays coincide with the Holi period"],["Phagwah","Trinidad, Guyana, Suriname — Holi celebrated by Indo-Caribbean communities with similar colour traditions"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Playing Holi Safely</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Use natural/herbal colours (made from turmeric, beetroot, flower petals) where possible — gentler on skin and the environment",
              "Apply oil or moisturizer to skin and hair before playing — makes colour removal easier and protects skin",
              "Keep eyes protected — many synthetic colours can cause irritation",
              "Stay hydrated — thandai (a traditional spiced milk drink) is festive, but plain water matters too, especially with outdoor activity",
              "Be mindful with water balloons and water guns around elderly family members and young children",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Holi often brings extended family and neighbours together in ways few other festivals do. Record who you played Holi with each year, your family's gujiya recipe, and any traditional songs (Holi geet/Phaag) sung in your household — these small details fade quickly from memory.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Looking ahead to the next festival after Holi? See our <Link href="/blog/bhai-dooj-rituals-significance-guide" style={{ color:C.saffron, fontWeight:600 }}>Bhai Dooj guide</Link> (also celebrated as Holi Bhai Dooj in some regions).</p>
          </div>
        
<h2 style={h2}>Lathmar Holi at Barsana</h2>
          <p style={s}>The Lathmar Holi at Barsana (Radha's village) and Nandgaon (Krishna's village) is the most famous regional Holi tradition. Women of Barsana playfully beat men of Nandgaon with sticks (lathis) as the men try to shield themselves with shields — re-enacting the playful battle between Radha's companions and Krishna's friends. The event is several days before the main Holi. The atmosphere — coloured powder, traditional songs, thousands of devotees — is extraordinary and increasingly attracting visitors from across India and the world.</p>
<h2 style={h2}>Holi for Families Abroad</h2>
          <p style={s}>Holi is one of the most internationally recognized Indian festivals — celebrated by Indian diaspora communities in the USA (Holi festival events in cities with large Indian populations), UK, Canada, and Australia. The throwing of colour has also been adopted by non-Indian communities as a general festival of joy. For NRI families, Holi is a particularly effective way to involve non-Indian friends in Indian cultural celebrations — the colour play is universally appealing and the barrier to participation is low.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific Holi traditions — who makes the Gujiya, the specific Holika Dahan location your family gathers at, whether your family has any specific regional Holi traditions. Many Indian families have Holi memories as among their most vivid childhood memories — worth capturing in both story and recipe.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="holi-festival-guide-rituals-significance" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🎨</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Capture the colours of your celebration</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save Holi photos, gujiya recipes, and family memories on OurParampara — year after year.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>
              Start preserving for free →
            </Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
