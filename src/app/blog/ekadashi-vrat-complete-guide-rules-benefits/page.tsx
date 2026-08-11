import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ekadashi Vrat — Complete Guide to Rules, Significance & How to Observe It | OurParampara",
  description: "Complete Ekadashi vrat guide — significance of the eleventh lunar day, fasting rules, what to eat and avoid, types of Ekadashi through the year, and the spiritual benefits of observing this vrat.",
  keywords: "Ekadashi vrat rules, Ekadashi fasting guide, Ekadashi significance, what to eat on Ekadashi, types of Ekadashi, Ekadashi vrat benefits, monthly Ekadashi dates",
  openGraph: {
    title: "Ekadashi Vrat — Complete Guide to Rules, Significance & How to Observe It | OurParampara",
    description: "Complete Ekadashi vrat guide — significance of the eleventh lunar day, fasting rules, what to eat and avoid, types of Ekadashi through the year, and the spiritual benefits of observing this vrat.",
    url: "https://www.ourparampara.com/blog/ekadashi-vrat-complete-guide-rules-benefits",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=ekadashi-vrat-complete-guide-rules-benefits", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=ekadashi-vrat-complete-guide-rules-benefits"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/ekadashi-vrat-complete-guide-rules-benefits" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="ekadashi-vrat-complete-guide-rules-benefits"
        title="Ekadashi Vrat — Complete Guide to Rules, Significance & How to Observe It | OurParampara"
        description="Complete Ekadashi vrat guide — significance of the eleventh lunar day, fasting rules, what to eat and avoid, types of Ekadashi through the year, and the spiritual benefits of observing this vrat."
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
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Ritual Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🪔</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Ekadashi Vrat — Complete Guide to Rules, Significance &amp; How to Observe It</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 2, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Ekadashi is the eleventh day of each lunar fortnight (Paksha) — occurring twice a month, once during the waxing moon (Shukla Paksha) and once during the waning moon (Krishna Paksha). Considered one of the most significant fasting days in Hindu tradition, Ekadashi is dedicated primarily to Lord Vishnu and is observed by millions of families as a day of fasting, prayer, and spiritual discipline.</p>

          <h2 style={h2}>Significance of Ekadashi</h2>
          <p style={s}>According to Hindu scriptures, observing Ekadashi vrat helps purify the mind and body, reduce accumulated karma, and deepen one's connection to the divine. The number eleven is considered symbolically significant — representing the ten senses (five physical, five subtle) plus the mind, all of which the fast is meant to help control. Many families have observed Ekadashi for generations, often passed down from grandparents who followed it strictly throughout their lives.</p>

          <h2 style={h2}>Types of Ekadashi Through the Year</h2>
          <p style={s}>With 24 (sometimes 25, in a leap lunar year) Ekadashis occurring annually, each has its own name and specific significance:</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Ekadashi (Shukla)","Devshayani — Lord Vishnu begins his cosmic sleep (Chaturmas begins)"],["Ekadashi (Shukla)","Devotthani/Prabodhini — Vishnu awakens, marking the end of Chaturmas"],["Nirjala Ekadashi","Considered the most rigorous — observed without even water, in the month of Jyeshtha"],["Mokshada Ekadashi","Falls in Margashirsha, associated with the day Krishna delivered the Bhagavad Gita"],["Putrada Ekadashi","Observed by couples seeking blessings for children"],["Vaikuntha Ekadashi","Considered especially auspicious — believed to open the gates of Vaikuntha (Vishnu's abode)"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Fasting Rules</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 10px" }}>General guidelines (levels of observance vary by family and individual capacity):</p>
            {["Complete fast (Nirjala) — no food or water at all, typically only for Nirjala Ekadashi or by those with strong spiritual discipline","Fruit-only fast — consuming only fruits and milk through the day","Single meal (havishya) — one sattvic meal without grains, often featuring sabudana, kuttu, or singhare ka atta","Grain-free observance — avoiding rice, wheat, and lentils (dal) for the day, even if not fully fasting"].map(i=>(
              <div key={i} style={{ display:"flex", gap:8, padding:"6px 0" }}>
                <span style={{ color:C.saffron, fontSize:13 }}>•</span><span style={{ fontSize:13, color:"#374151" }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>What to Eat &amp; Avoid</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:20 }}>
            <div style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:10, padding:14 }}>
              <p style={{ fontSize:13, fontWeight:700, color:"#16A34A", margin:"0 0 8px" }}>✓ Commonly eaten</p>
              {["Sabudana (tapioca pearls)","Kuttu (buckwheat) and singhare ka atta (water chestnut flour)","Fruits and dry fruits","Milk, curd, and paneer","Potatoes and sweet potatoes","Rock salt (sendha namak)"].map(i=>(
                <p key={i} style={{ fontSize:12, color:"#374151", margin:"4px 0" }}>{i}</p>
              ))}
            </div>
            <div style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:10, padding:14 }}>
              <p style={{ fontSize:13, fontWeight:700, color:"#DC2626", margin:"0 0 8px" }}>✗ Avoided</p>
              {["Rice and wheat-based grains","Lentils (dal) and most pulses","Onion and garlic","Regular table salt","Non-vegetarian food and alcohol","Honey (in some traditions)"].map(i=>(
                <p key={i} style={{ fontSize:12, color:"#374151", margin:"4px 0" }}>{i}</p>
              ))}
            </div>
          </div>

          <h2 style={h2}>How to Observe Ekadashi — Step by Step</h2>
          {[
            "Wake before sunrise and take a bath — purification is considered essential before beginning the vrat",
            "Offer prayers to Lord Vishnu — many families recite the Vishnu Sahasranama or Vishnu Sahastranam stotra",
            "Begin the fast at sunrise according to the chosen level of observance (complete, fruit-only, or grain-free)",
            "Spend the day in prayer, reading scripture (such as the Bhagavad Gita or Vishnu Purana), or meditation",
            "Avoid sleeping during the day in stricter observances — some traditions recommend staying awake through the night (Ekadashi jagran)",
            "Break the fast the next morning (Dwadashi) — typically after sunrise, with a simple sattvic meal",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Who Should Be Cautious</h2>
          <p style={s}>Strict fasting isn't suitable for everyone — pregnant women, people with diabetes or other health conditions, elderly individuals, and young children are generally advised to follow a modified version (such as a single sattvic meal) rather than a complete fast. The spiritual intent of Ekadashi — devotion and discipline — matters more than the severity of the fast, and most traditions accommodate this flexibility.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family has a tradition of observing a specific Ekadashi (like Ekadashi or a particular monthly one), record which family members observe it, the specific recipes used for the sattvic meal, and any stories about why this particular Ekadashi became significant for your family.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Looking for more ritual guides? See our <Link href="/blog/how-to-perform-satyanarayan-katha" style={{ color:C.saffron, fontWeight:600 }}>Satyanarayan Katha guide</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="ekadashi-vrat-complete-guide-rules-benefits" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪔</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Track your family&apos;s vrat traditions</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Record which Ekadashis your family observes, sattvic recipes, and the stories behind your traditions on OurParampara.</p>
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
