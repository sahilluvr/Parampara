import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chhath Puja — Complete Guide to Vidhi, Rituals & the Four-Day Celebration | OurParampara",
  description: "Complete Chhath Puja guide — Nahay Khay, Kharna, Sandhya Arghya, Usha Arghya explained day by day, samagri list, significance of worshipping Surya Dev, and family traditions passed down through generations.",
  keywords: "Chhath Puja vidhi, Chhath Puja rituals, Chhath Puja samagri list, Chhath Puja four days explained, Chhath Puja date 2026, Surya arghya ritual, Chhath Puja significance",
  openGraph: {
    title: "Chhath Puja — Complete Guide to Vidhi, Rituals & the Four-Day Celebration | OurParampara",
    description: "Complete Chhath Puja guide — Nahay Khay, Kharna, Sandhya Arghya, Usha Arghya explained day by day, samagri list, significance of worshipping Surya Dev, and family traditions passed down through genera",
    url: "https://www.ourparampara.com/blog/chhath-puja-vidhi-rituals-complete-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=chhath-puja-vidhi-rituals-complete-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=chhath-puja-vidhi-rituals-complete-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/chhath-puja-vidhi-rituals-complete-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="chhath-puja-vidhi-rituals-complete-guide"
        title="Chhath Puja — Complete Guide to Vidhi, Rituals & the Four-Day Celebration | OurParampara"
        description="Complete Chhath Puja guide — Nahay Khay, Kharna, Sandhya Arghya, Usha Arghya explained day by day, samagri list, significance of worshipping Surya Dev, and family traditions passed down through genera"
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌅</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Chhath Puja — Complete Guide to Vidhi, Rituals &amp; the Four-Day Celebration</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 28, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Chhath Puja is one of the most rigorous and revered festivals in Hindu tradition — a four-day celebration dedicated to Surya Dev (the Sun God) and Chhathi Maiya. Predominantly observed in Bihar, Jharkhand, Uttar Pradesh, and increasingly by diaspora communities worldwide, Chhath is unique for honoring both the setting and rising sun, and for its demanding rituals performed while standing in water.</p>

          <h2 style={h2}>When is Chhath Puja</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 6px" }}>Six days after Diwali</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Chhath Puja falls on the sixth day of the Kartik month, in the Shukla Paksha (waxing moon phase) — typically in late October or November. The festival spans four consecutive days, each with its own distinct ritual.</p>
          </div>

          <h2 style={h2}>The Four Days of Chhath</h2>
          {[
            ["Day 1 — Nahay Khay","Devotees take a holy bath (often in a river) and prepare a simple, sattvic meal — typically rice, chana dal, and lauki (bottle gourd) sabzi. This marks the beginning of the fast and purification."],
            ["Day 2 — Kharna","A day-long fast (without water) that ends in the evening with kheer (rice pudding made with jaggery) and roti. After eating, devotees begin a rigorous 36-hour fast without food or water."],
            ["Day 3 — Sandhya Arghya","The most significant day. In the evening, the whole family gathers at a riverbank or pond. Offerings (arghya) of water and milk are made to the setting sun. Prasad — including the iconic thekua (a wheat-based sweet) — is prepared and offered in bamboo baskets (daura)."],
            ["Day 4 — Usha Arghya","Before sunrise, devotees return to the same water body to offer arghya to the rising sun, completing the cycle of worshipping the sun in both its setting and rising forms. After this, the 36-hour fast is broken, concluding the festival."],
          ].map(([title,desc])=>(
            <div key={title} style={{ marginBottom:18, paddingLeft:16, borderLeft:`3px solid ${C.saffron}` }}>
              <p style={{ fontSize:15, fontWeight:700, color:C.charcoal, margin:"0 0 6px" }}>{title}</p>
              <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.8 }}>{desc}</p>
            </div>
          ))}

          <h2 style={h2}>Chhath Puja Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Bamboo baskets (daura/soop)","Thekua (wheat-jaggery sweet)","Seasonal fruits — banana, coconut, sugarcane, oranges","Rice and wheat flour for prasad","Turmeric plant with root","Diya and oil","Vermillion (sindoor)","Betel leaves and supari","Sugarcane stalks","Milk and water for arghya","New clothes — often traditional dhoti/saree","Incense sticks"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Thekua Recipe — A Festival Essential</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:13, fontWeight:600, color:C.charcoal, margin:"0 0 8px" }}>Ingredients:</p>
            <p style={{ fontSize:13, color:"#374151", margin:"0 0 12px" }}>Wheat flour, jaggery (melted), ghee, grated coconut (optional), fennel seeds, oil for frying</p>
            <p style={{ fontSize:13, fontWeight:600, color:C.charcoal, margin:"0 0 8px" }}>Method:</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Mix wheat flour with melted jaggery, ghee, fennel seeds, and grated coconut into a firm dough. Shape into small flattened discs, often pressed with traditional wooden molds for a textured pattern. Deep fry on low heat until golden brown and crisp — thekua keeps well for days, making it ideal for festival prasad and gifting.</p>
          </div>

          <h2 style={h2}>The Spiritual Significance</h2>
          <p style={s}>Unlike most Hindu rituals which take place in temples, Chhath is performed entirely in open spaces — riverbanks, ponds, or even improvised water tanks in urban settings. The act of standing in water while offering arghya symbolizes humility and direct connection with nature. Worshipping the setting sun (a practice unique to Chhath) represents acceptance of all phases of life — light and darkness, beginning and ending — and gratitude for the sun's life-giving energy regardless of its position in the sky.</p>

          <h2 style={h2}>Celebrating Chhath Away From Home</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Many cities now have organized Chhath ghats with temporary water tanks for families without access to a river",
              "Diaspora communities in the US, UK, and Gulf countries organize community Chhath events at local parks or community centers",
              "Thekua and other prasad ingredients are increasingly available at South Asian grocery stores abroad",
              "Even a small balcony setup with a tub of water can allow families to observe the arghya rituals when larger gatherings aren't possible",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Chhath is often observed by the women of a family for the wellbeing of their children — but the entire family participates in preparation and support. Document who in your family observes the vrat, the songs sung during the rituals, and your family's specific thekua recipe — these traditions are deeply personal and vary even between neighbouring families.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Celebrating the festive season? See our <Link href="/blog/diwali-puja-steps-for-family" style={{ color:C.saffron, fontWeight:600 }}>Diwali puja guide</Link> and <Link href="/blog/govardhan-puja-annakut-vidhi-guide" style={{ color:C.saffron, fontWeight:600 }}>Govardhan Puja guide</Link>.</p>
          </div>
        
<h2 style={h2}>Chhath Puja's Ecological Significance</h2>
          <p style={s}>Chhath Puja has an extraordinary ecological dimension — it takes place at natural water bodies (rivers, ponds, lakes) and worships the elements of nature: the sun, water, earth (the offerings are placed on the bank), and air. The festival traditionally involves cleaning the riverbank before the puja and leaving it clean after. In this sense, Chhath Puja embodies a relationship of reverence toward nature that is increasingly recognized as environmentally significant.</p>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="chhath-puja-vidhi-rituals-complete-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌅</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document your family&apos;s Chhath traditions</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save your thekua recipe, vrat songs, and ghat photos on OurParampara — for generations to come.</p>
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
