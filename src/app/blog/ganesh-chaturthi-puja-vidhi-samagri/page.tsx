import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ganesh Chaturthi Puja Vidhi — Samagri List, Sthapana & Visarjan Guide | OurParampara",
  description: "Complete Ganesh Chaturthi guide — murti sthapana vidhi, daily aarti, modak prasad, samagri checklist, and eco-friendly visarjan tips for families.",
  keywords: "Ganesh Chaturthi puja vidhi, Ganpati sthapana vidhi, Ganesh Chaturthi samagri list, Ganpati visarjan rules, modak prasad recipe, Ganesh Chaturthi at home",
  openGraph: {
    title: "Ganesh Chaturthi Puja Vidhi — Samagri List, Sthapana & Visarjan Guide | OurParampara",
    description: "Complete Ganesh Chaturthi guide — murti sthapana vidhi, daily aarti, modak prasad, samagri checklist, and eco-friendly visarjan tips for families.",
    url: "https://www.ourparampara.com/blog/ganesh-chaturthi-puja-vidhi-samagri",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=ganesh-chaturthi-puja-vidhi-samagri", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=ganesh-chaturthi-puja-vidhi-samagri"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/ganesh-chaturthi-puja-vidhi-samagri" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="ganesh-chaturthi-puja-vidhi-samagri"
        title="Ganesh Chaturthi Puja Vidhi — Samagri List, Sthapana & Visarjan Guide | OurParampara"
        description="Complete Ganesh Chaturthi guide — murti sthapana vidhi, daily aarti, modak prasad, samagri checklist, and eco-friendly visarjan tips for families."
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
            <div style={{ fontSize:40, marginBottom:14 }}>🐘</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Ganesh Chaturthi Puja Vidhi — Samagri List, Sthapana & Visarjan Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 13, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Ganesh Chaturthi celebrates the birth of Lord Ganesha — the remover of obstacles and god of wisdom and new beginnings. Families bring home a Ganpati murti, perform daily puja for 1.5, 5, 7, or 11 days, and conclude with visarjan (immersion). Here's a complete guide to celebrating Ganesh Chaturthi at home.</p>

          <h2 style={h2}>Choosing the Murti</h2>
          <p style={s}>Murtis are available in clay (mitti), Plaster of Paris (POP), and eco-friendly materials. For families concerned about environmental impact, clay murtis with natural colors are strongly recommended — they dissolve safely in water without polluting rivers and lakes.</p>

          <h2 style={h2}>Ganesh Chaturthi Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Ganpati murti (clay preferred)","Decorated platform/mandap","Red cloth","Durva grass (21 blades)","Red flowers — hibiscus preferred","Modak (21 pieces traditional)","Coconut","Banana and other fruits","Roli, chandan, akshat","Incense sticks and dhoop","Diya and ghee/oil","Camphor for aarti","Panchamrit (milk, curd, ghee, honey, sugar)","Betel leaves and supari","Kalash with water","Sacred thread (janeu)"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Sthapana (Installation) Vidhi</h2>
          {[
            "Choose an auspicious time on Chaturthi day (consult Panchang for exact muhurat)",
            "Clean the area where the murti will be placed and decorate the mandap with flowers, lights, and rangoli",
            "Place the murti facing east or north on the decorated platform",
            "Perform 'Pranapratishtha' — a ritual to invoke the deity's presence into the murti, usually done by a priest",
            "Offer Durva grass, red flowers, and chandan to the murti",
            "Light the diya and incense, and perform the first aarti",
            "Offer modak and other prasad",
            "Recite the Ganesh mantra: 'Om Gan Ganapataye Namah'",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Daily Puja Routine</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Morning aarti — light diya, offer flowers and durva grass, sing Ganesh aarti",
              "Offer fresh modak or sweets each day as bhog",
              "Evening aarti with the whole family — singing 'Sukhkarta Dukhharta' and 'Jai Ganesh Deva'",
              "Some families recite Ganesh Atharvashirsha or Sankashti Chaturthi stotra daily",
              "Keep the murti area clean and replace flowers daily",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Modak Prasad Recipe (Simple Version)</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:13, fontWeight:600, color:C.charcoal, margin:"0 0 8px" }}>Ingredients:</p>
            <p style={{ fontSize:13, color:"#374151", margin:"0 0 12px" }}>Rice flour, jaggery, fresh grated coconut, cardamom powder, ghee</p>
            <p style={{ fontSize:13, fontWeight:600, color:C.charcoal, margin:"0 0 8px" }}>Method:</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Cook grated coconut with jaggery and cardamom until thick (this is the filling). Make a soft dough with rice flour and hot water. Shape into small cups, fill with the coconut-jaggery mixture, fold into the traditional modak shape with pleats, and steam for 10-12 minutes.</p>
          </div>

          <h2 style={h2}>Visarjan (Immersion) — Eco-Friendly Tips</h2>
          {[
            "Visarjan can be done after 1.5, 3, 5, 7, or 11 days — Anant Chaturdashi (day 11) is the most common conclusion date",
            "Perform a final aarti and seek forgiveness for any errors during the puja — recite 'Ganpati Bappa Morya, Pudhchya Varshi Lavkar Ya' (come again next year)",
            "For eco-friendly immersion: use a large bucket or tub of water at home for clay murtis — they dissolve completely and the water can be used for plants",
            "If immersing in a water body, choose designated immersion zones set up by local authorities",
            "Avoid POP murtis and chemical paints — they don't dissolve and harm aquatic ecosystems",
            "Many communities now offer artificial immersion ponds (kritrim talab) — use these where available",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.forestLight, border:`2px solid ${C.forest}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.forest, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Every family has its own Ganpati decoration style, modak recipe, and aarti songs passed down for generations. Photograph your mandap setup each year and note any special family rituals — your children will treasure these memories.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="ganesh-chaturthi-puja-vidhi-samagri" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🐘</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document your family&apos;s Ganpati traditions</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save your decoration photos, modak recipes, and daily puja rituals on OurParampara — year after year.</p>
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
