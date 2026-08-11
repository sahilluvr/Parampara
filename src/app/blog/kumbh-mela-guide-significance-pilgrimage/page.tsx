import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kumbh Mela — Complete Guide to Significance, Shahi Snan & Pilgrimage Planning | OurParampara",
  description: "Complete Kumbh Mela guide — the legend behind this world's largest gathering, significance of Shahi Snan (royal bath) dates, the four sacred locations, what to expect, and how families plan the pilgrimage.",
  keywords: "Kumbh Mela significance, Kumbh Mela Shahi Snan dates, Kumbh Mela pilgrimage guide, Prayagraj Kumbh Mela, Kumbh Mela 2027, Ardh Kumbh Mela, Kumbh Mela family pilgrimage",
  openGraph: {
    title: "Kumbh Mela — Complete Guide to Significance, Shahi Snan & Pilgrimage Planning | OurParampara",
    description: "Complete Kumbh Mela guide — the legend behind this world's largest gathering, significance of Shahi Snan (royal bath) dates, the four sacred locations, what to expect, and how families plan the pilgri",
    url: "https://www.ourparampara.com/blog/kumbh-mela-guide-significance-pilgrimage",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=kumbh-mela-guide-significance-pilgrimage", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=kumbh-mela-guide-significance-pilgrimage"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/kumbh-mela-guide-significance-pilgrimage" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="kumbh-mela-guide-significance-pilgrimage"
        title="Kumbh Mela — Complete Guide to Significance, Shahi Snan & Pilgrimage Planning | OurParampara"
        description="Complete Kumbh Mela guide — the legend behind this world\'s largest gathering, significance of Shahi Snan (royal bath) dates, the four sacred locations, what to expect, and how families plan the pilgri"
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
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Heritage Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🏞️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Kumbh Mela — Complete Guide to Significance, Shahi Snan &amp; Pilgrimage Planning</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 15, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Kumbh Mela is the largest peaceful gathering of human beings on earth — a pilgrimage that draws tens of millions to sacred river confluences to bathe on auspicious dates, seeking purification and liberation. Recognized by UNESCO as an Intangible Cultural Heritage of Humanity, Kumbh Mela is simultaneously a religious event, a cultural phenomenon, and a living expression of India's spiritual heritage on a scale unmatched anywhere in the world.</p>

          <h2 style={h2}>The Legend Behind Kumbh Mela</h2>
          <p style={s}>The origin story comes from the Samudra Manthan — the cosmic churning of the ocean by gods (devas) and demons (asuras) to obtain Amrit (the nectar of immortality). When the Kumbha (pot) of Amrit finally emerged, a struggle ensued, and drops of nectar fell at four locations on earth: Prayagraj (at the Triveni Sangam where Ganga, Yamuna, and the mythical Saraswati meet), Haridwar (on the Ganga), Ujjain (on the Shipra), and Nashik (on the Godavari). Kumbh Mela is held at these four locations in rotation, based on specific planetary alignments believed to recreate the cosmic conditions of that original event.</p>

          <h2 style={h2}>The Four Kumbh Locations</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Prayagraj (Allahabad)","At the Triveni Sangam — the most sacred, drawing the largest crowds. Maha Kumbh occurs every 12 years here."],["Haridwar","On the banks of the Ganga, in the foothills of the Himalayas — celebrated every 12 years (Ardh Kumbh every 6 years)."],["Ujjain","On the Shipra river in Madhya Pradesh — held every 12 years during the Simhastha period."],["Nashik","On the Godavari river in Maharashtra — also held every 12 years during Simhastha."]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Types of Kumbh</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            {[["Maha Kumbh","Every 12 years at Prayagraj — the largest; the 2025 Maha Kumbh was the most recent, drawing an estimated 400+ million visitors over 45 days"],["Purna Kumbh","Full Kumbh at each location every 12 years"],["Ardh Kumbh (Half Kumbh)","Every 6 years at Haridwar and Prayagraj — smaller but still draws millions"],["Magh Mela","An annual gathering at Prayagraj during the month of Magha — a mini-Kumbh held every year"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:12, padding:"7px 0", borderBottom:`1px solid rgba(200,84,26,0.1)` }}>
                <p style={{ fontSize:13, fontWeight:600, color:C.saffron, margin:0, minWidth:140, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:C.charcoal, margin:0, lineHeight:1.6 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Shahi Snan — The Royal Bath</h2>
          <p style={s}>The most significant ritual of Kumbh Mela is the Shahi Snan (royal bath) on specific astrologically determined dates. On these days, the akharas (religious orders of ascetics and sadhus) lead massive processions to the river — riding elephants, horses, and chariots — before descending to bathe. The sequence is strictly observed: different akharas bathe in a specific order established by tradition. Millions of ordinary devotees follow, believing that bathing in the sacred confluence on these specific dates cleanses accumulated sins and breaks the cycle of rebirth. The sight of millions entering the water simultaneously is one of the most extraordinary spectacles in human experience.</p>

          <h2 style={h2}>Planning a Family Pilgrimage to Kumbh</h2>
          {[
            "Identify the next Kumbh — check which city is hosting and when. The next major Kumbh after the 2025 Maha Kumbh will be at Haridwar or Ujjain depending on the planetary cycle.",
            "Book accommodation 6-12 months in advance — tent cities, dharamshalas, and hotels fill up extremely quickly, especially around Shahi Snan dates.",
            "Identify the key Shahi Snan dates for the Kumbh you're attending — these are the most spiritually significant bathing days, but also the most crowded.",
            "Arrive a day before and depart a day after — Shahi Snan days involve extremely dense crowds; arriving early helps with navigation and darshan.",
            "Travel light — large bags are difficult to manage in the crowds; keep essential documents, medicines, and a meeting-point plan for family members.",
            "Visit beyond the main snan — many families explore the akharas (where sadhus are camped), attend evening aarti at the ghats, and seek blessings from revered saints who gather during Kumbh.",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Kumbh for the Diaspora</h2>
          <p style={s}>For Indian families abroad, attending a Kumbh Mela — especially the Maha Kumbh at Prayagraj — is often a once-in-a-generation family pilgrimage. Many NRI families plan trips to India specifically around Kumbh, combining it with family visits and other pilgrimage sites. Prayagraj, being a hub with rail and air connections, is relatively accessible; the main planning challenges are accommodation and crowd management during peak Shahi Snan dates.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family has attended a Kumbh Mela — especially older members who attended in earlier decades when it was a very different experience — record their stories. What year, who went, what they saw, how they travelled, who they met. These first-person accounts of one of humanity's oldest living traditions are genuinely irreplaceable family heritage.</p>
          </div>
        
<h2 style={h2}>The Akharas — Ascetic Orders</h2>
          <p style={s}>One of the most remarkable sights at Kumbh Mela is the Shahi Snan procession of the 13 Akharas (orders of Hindu ascetics — Shaiva, Vaishnava, and Udasi). The Naga sadhus (naked, ash-covered ascetics) of the Shaiva Akharas lead the procession to the Sangam on the Shahi Snan dates, bathe first, and their bathing is considered to have elevated the spiritual potency of the water for all subsequent bathers. The procession is one of the most visually extraordinary events in the world.</p>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="kumbh-mela-guide-significance-pilgrimage" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🏞️</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s Kumbh Mela story</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Record who attended, which year, and what the experience meant — on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
