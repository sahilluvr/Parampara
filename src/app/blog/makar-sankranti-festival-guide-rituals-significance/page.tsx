import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Makar Sankranti — Complete Guide to Rituals, Til-Gud Traditions & Regional Celebrations | OurParampara",
  description: "Complete Makar Sankranti guide — significance of Uttarayan, til-gud rituals, Surya puja, kite flying traditions, regional names across India, and how families celebrate this harvest festival.",
  keywords: "Makar Sankranti rituals, Makar Sankranti significance, til gud traditions, Makar Sankranti date 2027, Uttarayan celebration, Surya puja Sankranti, kite flying festival India",
  openGraph: {
    title: "Makar Sankranti — Complete Guide to Rituals, Til-Gud Traditions & Regional Celebrations | OurParampa",
    description: "Complete Makar Sankranti guide — significance of Uttarayan, til-gud rituals, Surya puja, kite flying traditions, regional names across India, and how families celebrate this harvest festival.",
    url: "https://www.ourparampara.com/blog/makar-sankranti-festival-guide-rituals-significance",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=makar-sankranti-festival-guide-rituals-significance", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=makar-sankranti-festival-guide-rituals-significance"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/makar-sankranti-festival-guide-rituals-significance" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="makar-sankranti-festival-guide-rituals-significance"
        title="Makar Sankranti — Complete Guide to Rituals, Til-Gud Traditions & Regional Celebrations | OurParampara"
        description="Complete Makar Sankranti guide — significance of Uttarayan, til-gud rituals, Surya puja, kite flying traditions, regional names across India, and how families celebrate this harvest festival."
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪁</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Makar Sankranti — Complete Guide to Rituals, Til-Gud Traditions &amp; Regional Celebrations</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 26, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Makar Sankranti marks the sun's entry into Capricorn (Makara) and the beginning of Uttarayan — the sun's northward journey. Unlike most Hindu festivals that follow the lunar calendar, Sankranti follows the solar calendar and falls on a fixed date, January 14, every year (occasionally January 15). It's celebrated across India under different names, with kite-filled skies, til-gud sweets, and rituals honoring the Sun God.</p>

          <h2 style={h2}>Significance of Uttarayan</h2>
          <p style={s}>As the sun begins its northward movement, days grow longer and the harshness of winter starts to fade. In Vedic tradition, this shift is considered deeply auspicious — a time of rising spiritual energy, when consciousness naturally turns toward purification and devotion. Many families consider this the most favorable period of the year to begin new ventures, perform charitable acts, and undertake spiritual practices.</p>

          <h2 style={h2}>Regional Names &amp; Celebrations</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Uttarayan","Gujarat — famous for the International Kite Festival"],["Pongal","Tamil Nadu — four-day harvest festival with sakkarai pongal"],["Lohri (related)","Punjab — bonfire celebration the night before"],["Maghi","Punjab/Haryana — holy bath and charity day"],["Bhogali Bihu","Assam — community feasts and bonfires"],["Khichdi","Uttar Pradesh/Bihar — khichdi offerings and holy dips"],["Til Sankranti","Bihar/Jharkhand — sesame-based sweets and rituals"],["Makara Vilakku","Kerala — temple festivals, especially Sabarimala"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Core Rituals — Step by Step</h2>
          {[
            "Wake before sunrise and take a purifying bath — many families add black sesame seeds or a drop of Ganga Jal to the bathwater",
            "Clean and decorate the home with rangoli — popular motifs include the sun, kites, sugarcane, and harvest symbols",
            "Perform Surya Puja — offer water (arghya) to the rising sun while facing east, with prayers of gratitude",
            "Prepare til-gud (sesame-jaggery) sweets — laddoos, chikki, or gajak — and exchange them with family and neighbours saying 'Til-gud ghya, god god bola' (eat something sweet, speak sweetly)",
            "Cook khichdi or a sattvic meal — avoiding onion, garlic, and non-vegetarian food on this day in many traditions",
            "Perform Tarpan — offer water mixed with black sesame seeds to ancestors, seeking their blessings",
            "Practice Daan (charity) — donate til, jaggery, blankets, clothes, or food to those in need; this is considered the most powerful action of the day",
            "In the afternoon and evening, fly kites — especially popular in Gujarat, Rajasthan, and Punjab, where rooftops fill with families and friendly competitions",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Til-Gud Laddoo — Simple Recipe</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:13, fontWeight:600, color:C.charcoal, margin:"0 0 8px" }}>Ingredients:</p>
            <p style={{ fontSize:13, color:"#374151", margin:"0 0 12px" }}>White sesame seeds, jaggery (gud), a pinch of cardamom powder, ghee for greasing hands</p>
            <p style={{ fontSize:13, fontWeight:600, color:C.charcoal, margin:"0 0 8px" }}>Method:</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Dry-roast sesame seeds until lightly golden and fragrant. Melt jaggery on low heat until it forms a soft ball when dropped in water. Mix the roasted sesame into the melted jaggery, add cardamom, and quickly shape into small balls with greased hands before the mixture cools and hardens.</p>
          </div>

          <h2 style={h2}>Sacred River Baths</h2>
          <p style={s}>Makar Sankranti is one of the most significant days for holy dips — the Ganga Sagar Mela in West Bengal, where the Ganges meets the Bay of Bengal, draws millions of pilgrims. Other major gathering points include Prayagraj, Kurukshetra's sacred sarovars, and various points along the Ganga, Yamuna, and Godavari rivers. The belief is that bathing in these waters on Sankranti cleanses accumulated sins and brings spiritual merit.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Every region and family has its own til-gud recipe and kite-flying memories. Record which sweets your family makes, who taught the recipe, and any funny kite-flying stories — these small details capture a festival's true character better than any general description.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Celebrating Lohri too? See our <Link href="/blog/lohri-festival-celebration-guide" style={{ color:C.saffron, fontWeight:600 }}>Lohri festival guide</Link> for bonfire traditions the night before.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="makar-sankranti-festival-guide-rituals-significance" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪁</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document your family&apos;s Sankranti traditions</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save your til-gud recipes, rangoli designs, and kite-flying memories on OurParampara — year after year.</p>
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
