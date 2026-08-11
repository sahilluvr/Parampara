import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ramadan Fasting Guide for Indian Muslim Families — Rules, Sehri, Iftar & Traditions | OurParampara",
  description: "During Ramadan, Muslims abstain from food, drink (including water), smoking, and sexual relations from Fajr (pre-dawn prayer) to Maghrib (sunset prayer). The fast is broken with Iftar at sunset. Those",
  keywords: "Ramadan fasting guide Indian Muslims, Sehri Iftar traditions India, Ramadan rules India, Taraweeh prayer guide, Ramadan food traditions India, Ramadan NRI abroad",
  openGraph: { title: "Ramadan Fasting Guide for Indian Muslim Families — Rules, Sehri, Iftar & Traditions", description: "During Ramadan, Muslims abstain from food, drink (including water), smoking, and sexual relations from Fajr (pre-dawn prayer) to Maghrib (sunset prayer). The fast is broken with Iftar at sunset. Those", url: "https://www.ourparampara.com/blog/ramadan-fasting-guide-indian-muslim-families", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=ramadan-fasting-guide-indian-muslim-families", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=ramadan-fasting-guide-indian-muslim-families"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/ramadan-fasting-guide-indian-muslim-families" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="ramadan-fasting-guide-indian-muslim-families" title="Ramadan Fasting Guide for Indian Muslim Families — Rules, Sehri, Iftar & Traditions" description="During Ramadan, Muslims abstain from food, drink (including water), smoking, and sexual relations from Fajr (pre-dawn prayer) to Maghrib (sunset prayer). The fast is broken with Iftar at sunset. Those" date="2026-06-06" category="Heritage Guide"
        faqs={[
          { q: "What are the fasting rules for Ramadan?", a: "During Ramadan, Muslims abstain from food, drink (including water), smoking, and sexual relations from Fajr (pre-dawn prayer) to Maghrib (sunset prayer). The fast is broken with Iftar at sunset. Those exempt from fasting include children, the elderly, pregnant or nursing women, travellers, and those who are ill. Missed fasts must be made up later or compensated with Fidya (feeding the poor)." },
          { q: "What is the spiritual significance of Ramadan?", a: "Ramadan is the ninth month of the Islamic calendar — the month in which the Quran was first revealed to Prophet Muhammad (PBUH). It is a month of heightened spiritual practice: increased prayer, Quran recitation, charitable giving (Zakat and Sadaqah), and self-discipline. The Night of Power (Laylat al-Qadr) in the last 10 days of Ramadan is believed to be the most blessed night of the year." },
          { q: "What is Sehri and Iftar?", a: "Sehri (also called Suhoor) is the pre-dawn meal eaten before the Fajr prayer begins the day's fast. It should be nutritious and hydrating to sustain the fast. Iftar is the meal that breaks the fast at sunset — traditionally begun with dates and water (following the Prophet's practice), then Maghrib prayer, followed by a full meal. Indian Muslim Iftar tables feature specific regional foods: Haleem, Sheer Khurma, Samosas, Fruit Chaat, and varied sweets." },
        ]}
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌙</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Ramadan Fasting Guide for Indian Muslim Families — Rules, Sehri, Iftar & Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 6, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Ramadan — the holy month of fasting — is the most spiritually intensive period of the Islamic year for Muslim families worldwide. For Indian Muslim families, Ramadan has its own specific character: the predawn Sehri meal with its particular foods, the community Iftar breaking of the fast, the nightly Taraweeh prayers that lengthen each evening, and the specific sweets and dishes that are associated with different days and nights of the month.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Ramadan 2026: approximately March 1 - March 30. Fast from Fajr (pre-dawn) to Maghrib (sunset) — no food, drink, or smoking. Sehri (pre-dawn meal) before Fajr. Iftar (sunset meal) begins with dates and water. Taraweeh prayers nightly after Isha. Final 10 nights: intensified worship seeking Laylat al-Qadr (Night of Power).</p>
          </div>

          <h2 style={h2}>Sehri Traditions</h2>
          <p style={s}>The pre-dawn meal eaten across Indian Muslim households varies by region — in Lucknow, nimbu pani (lime water) and parathas; in Hyderabad, biryani leftovers and fruits; in Kashmir, noon chai and girda bread. The family wakes together, often to the call of the Sehri drummer who traditionally walks through neighbourhoods announcing the pre-dawn meal time. This communal awakening is one of the most distinctive Ramadan experiences.</p>
          <h2 style={h2}>Iftar Traditions</h2>
          <p style={s}>The breaking of the fast at sunset is the most anticipated moment of each Ramadan day. The traditional Iftar sequence: dates (following the Prophet's practice), water, then Maghrib prayer, then the full Iftar meal. Indian Muslim Iftar tables feature Haleem (slow-cooked meat and lentil stew — a Ramadan essential in Hyderabad), Sheer Khurma, fruit chaat, samosas, kebabs, and various sweets. Each region has its specific Iftar specialties.</p>
          <h2 style={h2}>Taraweeh Prayers</h2>
          <p style={s}>Taraweeh are the special nightly prayers performed after Isha during Ramadan — typically 8 or 20 rakats (prayer units) depending on the community. The entire Quran is recited over the course of the month during Taraweeh. Many mosques have a Hafiz (one who has memorized the Quran) lead the Taraweeh prayers. It is one of the most community-bonding practices of Ramadan — families attend mosque together each night.</p>
          <h2 style={h2}>Ramadan for NRI Families</h2>
          <p style={s}>NRI Muslim families observe Ramadan wherever they live — the fast timing changes by location (in northern summer countries, Ramadan fasts can be 17-19 hours long). Many community mosques in the UK, USA, Canada, and UAE organize community Iftar events and Taraweeh prayers. The Ramadan experience abroad is often described as both more effortful (fewer halal Iftar options, longer fasts) and more community-bonded.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific Ramadan foods — your grandmother's Haleem recipe, the specific sweets made only in Ramadan, the sequence of your family's Iftar table. The specific tastes and smells of Ramadan are among the most powerful family memory anchors in any tradition.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="ramadan-fasting-guide-indian-muslim-families" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌙</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your sacred journeys, ceremonies and heritage on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
