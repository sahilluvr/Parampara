import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Maha Shivratri — Complete Guide to Puja Vidhi, Fasting Rules & Night Vigil | OurParampara",
  description: "Complete Maha Shivratri guide — significance of the great night of Shiva, four-prahar puja vidhi, fasting rules, Shiv Lingam abhishekam, Jagran (night vigil) traditions, and how families observe this festival.",
  keywords: "Maha Shivratri puja vidhi, Maha Shivratri fasting rules, Shiv Lingam abhishekam, Maha Shivratri significance, Maha Shivratri date 2027, Shivratri jagran night vigil, Maha Shivratri samagri list",
  openGraph: {
    title: "Maha Shivratri — Complete Guide to Puja Vidhi, Fasting Rules & Night Vigil | OurParampara",
    description: "Complete Maha Shivratri guide — significance of the great night of Shiva, four-prahar puja vidhi, fasting rules, Shiv Lingam abhishekam, Jagran (night vigil) traditions, and how families observe this ",
    url: "https://www.ourparampara.com/blog/maha-shivratri-puja-vidhi-fasting-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=maha-shivratri-puja-vidhi-fasting-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=maha-shivratri-puja-vidhi-fasting-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/maha-shivratri-puja-vidhi-fasting-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="maha-shivratri-puja-vidhi-fasting-guide"
        title="Maha Shivratri — Complete Guide to Puja Vidhi, Fasting Rules & Night Vigil | OurParampara"
        description="Complete Maha Shivratri guide — significance of the great night of Shiva, four-prahar puja vidhi, fasting rules, Shiv Lingam abhishekam, Jagran (night vigil) traditions, and how families observe this "
        date="2026-06-01"
        category="Festival Guide"
        faqs={[
          { q: "What can you eat on Maha Shivratri fast?", a: "On Maha Shivratri, you can eat fruits, milk, curd, sabudana, kuttu atta, singhara atta, and rock salt. Grains, regular salt, onion, garlic, and non-vegetarian food are avoided." },
          { q: "What time is the most important puja on Shivratri?", a: "The third prahar (12 AM to 3 AM) is considered the most sacred during Maha Shivratri. Staying awake for midnight Shiv puja is considered the most important practice of Jagran." },
          { q: "What are the four prahars of Shivratri puja?", a: "The four prahars are: 6-9 PM (abhishekam with milk), 9 PM-12 AM (abhishekam with curd), 12-3 AM (abhishekam with ghee — most sacred), and 3-6 AM (abhishekam with honey)." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🔱</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Maha Shivratri — Complete Guide to Puja Vidhi, Fasting Rules &amp; Night Vigil</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 12, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Maha Shivratri — "the great night of Shiva" — falls on the fourteenth day (Chaturdashi) of the dark fortnight in the month of Phalguna, typically in February or March. Unlike most Hindu festivals that celebrate joyful events, Maha Shivratri is a night of deep inward devotion — fasting, vigil, and continuous Shiva worship through the night. It is one of the most significant dates in the Hindu calendar, observed by hundreds of millions of devotees worldwide.</p>

          <h2 style={h2}>Why Shivratri Is Observed at Night</h2>
          <p style={s}>Multiple legends explain the significance of this night. According to one, the Shiva Linga first manifested as a column of infinite light (Jyotirlinga) on this night, when neither Brahma nor Vishnu could find its beginning or end — establishing Shiva's supreme nature. Another tradition holds that Shiva performed the cosmic dance (Tandava) on this night. A third legend describes it as the night of Shiva and Parvati's divine wedding. All traditions converge on this being the most powerful night for Shiva worship — when his energy is most accessible to devotees who remain awake and in prayer.</p>

          <h2 style={h2}>Maha Shivratri Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Shiva Lingam (home or temple)","Bel (bilva) leaves — most sacred offering for Shiva","Milk for abhishekam","Curd, honey, ghee, sugar (for panchamrit)","Water from a sacred source or clean water","Gangajal if available","Raw milk mixed with water for continuous abhishekam","Dhatura flowers (traditional, handle carefully)","Blue or white flowers","Sandalwood paste (chandan)","Vibhuti (sacred ash)","Incense sticks — preferably camphor or dhoop","Diya and ghee","Bhasma (if available from a temple)"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>The Four Prahar Puja — Worshipping Through the Night</h2>
          <p style={s}>The night of Maha Shivratri is traditionally divided into four prahars (three-hour watches), each with its own abhishekam and specific offerings:</p>
          <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:20 }}>
            {[["First Prahar (6 PM – 9 PM)","Abhishekam with milk. Offer bel leaves, flowers, and light a diya. Recite Om Namah Shivaya."],["Second Prahar (9 PM – 12 AM)","Abhishekam with curd. Offer akshat and sandalwood paste. Many families perform extended chanting during this prahar."],["Third Prahar (12 AM – 3 AM)","Abhishekam with ghee. This midnight prahar is considered the most powerful — staying awake for this is the heart of the Jagran."],["Fourth Prahar (3 AM – 6 AM)","Abhishekam with honey. Final offerings of bel leaves and flowers. Many families conclude with a complete aarti at sunrise."]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:14, padding:"12px 16px", background:C.saffronLight, borderRadius:10, border:`1px solid rgba(200,84,26,0.2)` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:160, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Fasting Rules</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            {["Full fast (Nirjala) — no food or water, typically followed by those with strong health and devotion","Fruit and milk fast — the most common observance: no grains, no cooked food, fruits and milk permitted","Sattvic single meal — some devotees eat once during the day before sunset, then fast through the night","Children, pregnant women, and those with health conditions are advised to follow modified fasting","The fast is traditionally broken on the morning of the next day (Chaturdashi) after the sunrise puja and aarti"].map(i=>(
              <div key={i} style={{ display:"flex", gap:8, padding:"6px 0" }}>
                <span style={{ color:C.saffron, fontSize:13 }}>•</span><span style={{ fontSize:13, color:"#374151" }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Jagran — The Night Vigil</h2>
          <p style={s}>Staying awake through the night (Jagran) is considered the most important aspect of Maha Shivratri — even more than fasting. The vigil is spent in prayer, chanting, or listening to Shiva-related stories (Shiva Purana katha). Many temples organize all-night bhajan sessions, and devotees stream into major Shiva temples — particularly Jyotirlinga shrines like Kashi Vishwanath (Varanasi), Somnath (Gujarat), and Mahakaleshwar (Ujjain) — for the night. For those observing at home, the midnight prahar is the most sacred hour.</p>

          <h2 style={h2}>Key Mantras for Maha Shivratri</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Om Namah Shivaya","The Panchakshara mantra — five syllables representing the five elements; the most widely chanted Shiva mantra"],["Mahamrityunjaya Mantra","Recited for health, longevity, and liberation from fear of death — especially powerful on this night"],["Om Tryambakam...","Full Mahamrityunjaya verse from the Rigveda — often recited 108 times with rudraksha mala"],["Shiva Chalisa","40-verse devotional hymn to Shiva — many families recite this at least once during the night"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Many families have a specific Shiva temple they visit every Maha Shivratri — sometimes the same temple for generations. Record which temple, who in the family makes the trip, and any specific rituals or offerings your family makes there. These pilgrimage traditions are deeply personal and worth preserving.</p>
          </div>
        
<h2 style={h2}>12 Jyotirlingas on Shivaratri</h2>
          <p style={s}>The 12 Jyotirlingas receive their largest annual gatherings on Maha Shivaratri. Kashi Vishwanath, Somnath, Mahakaleshwar, and Kedarnath see millions of pilgrims on this night. Online booking is essential for major Jyotirlingas.</p>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="maha-shivratri-puja-vidhi-fasting-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🔱</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your Shivratri vigil traditions</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save your family&apos;s night vigil practices, temple visits, and Maha Shivratri memories on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
