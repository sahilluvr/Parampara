import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Jumu'ah — Complete Guide to Friday Prayers, Khutbah & Traditions | OurParampara",
  description: "Friday (Yawm al-Jumu'ah — the Day of Assembly) is the most sacred day of the week in Islam. The Prophet Muhammad said that Friday is the master of all days, the best day on which the sun rises. Specia",
  keywords: "Jumu'ah Friday prayers guide, Friday prayer Islam guide, Khutbah significance, Surah Kahf Friday, Jumu'ah traditions India, Friday Islam significance",
  openGraph: { title: "Jumu'ah — Complete Guide to Friday Prayers, Khutbah & Traditions", description: "Friday (Yawm al-Jumu'ah — the Day of Assembly) is the most sacred day of the week in Islam. The Prophet Muhammad said that Friday is the master of all days, the best day on which the sun rises. Specia", url: "https://www.ourparampara.com/blog/jumma-namaz-friday-prayers-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=jumma-namaz-friday-prayers-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=jumma-namaz-friday-prayers-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/jumma-namaz-friday-prayers-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="jumma-namaz-friday-prayers-guide" title="Jumu'ah — Complete Guide to Friday Prayers, Khutbah & Traditions" description="Friday (Yawm al-Jumu'ah — the Day of Assembly) is the most sacred day of the week in Islam. The Prophet Muhammad said that Friday is the master of all days, the best day on which the sun rises. Specia" date="2026-06-18" category="Ritual Guide"
        faqs={[
          { q: "What is the significance of Friday in Islam?", a: "Friday (Yawm al-Jumu'ah — the Day of Assembly) is the most sacred day of the week in Islam. The Prophet Muhammad said that Friday is the master of all days, the best day on which the sun rises. Special deeds recommended on Fridays: performing ghusl (full bath), reciting Durood (blessings on the Prophet), reciting Surah Al-Kahf (the 18th chapter of the Quran), making abundant dua (supplication) particularly in the last hour before Maghrib, giving charity." },
          { q: "What happens at Jumu'ah prayer?", a: "Jumu'ah prayer at the mosque: the Adhan (call to prayer) sounds, then the Imam ascends the minbar (pulpit) and delivers a two-part Khutbah (sermon) in Arabic — the first part is a reminder of God-consciousness and Islamic duties, the second is a specific topic. After the Khutbah, two rakats (prayer units) of congregational prayer are performed. Jumu'ah replaces Zuhr (midday) prayer for men on Fridays and is mandatory. The entire service takes approximately 30-45 minutes." },
          { q: "How is Friday observed in Indian Muslim homes?", a: "Friday observance in Indian Muslim families: early morning — Fajr prayer with additional Durood; ghusl before Jumu'ah; good clothes (preferably white); attending Jumu'ah at the mosque; after prayer — visiting family or elders; in the evening — recitation of Surah Al-Kahf and additional supplications. In some families, a special Friday meal is prepared. The specific Friday evening duas made by an elder in the family — for children's wellbeing, for the family's protection — are among the most intimate religious practices." },
        ]}
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
            <div style={{ fontSize:40, marginBottom:14 }}>🕌</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Jumu'ah — Complete Guide to Friday Prayers, Khutbah & Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Jumu'ah (Friday) prayer is the most important congregational prayer of the week in Islam — mandatory for Muslim men and strongly recommended for women. For Indian Muslim families, the Friday routine — the family gathering, the Jumu'ah prayer, the specific Friday traditions — is one of the most consistent rhythms of Islamic family life.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Jumu'ah prayer: mandatory for Muslim men, recommended for women. Consists of Khutbah (two-part sermon) followed by two rakats of congregational prayer. Replaces Zuhr on Fridays. Friday traditions: ghusl in morning, good clothes, recite Surah Al-Kahf, abundant Durood (blessings on Prophet), dua in last hour before Maghrib, charity, family gathering.</p>
          </div>

          <h2 style={h2}>The Khutbah</h2>
          <p style={s}>The Khutbah (sermon) is an integral part of Jumu'ah — the two-part sermon delivered by the Imam from the minbar before the congregational prayer. The first part (Khutbah) traditionally includes praise of Allah, Durood (blessings on the Prophet), and an exhortation to God-consciousness (Taqwa). The second part is a dua (supplication) for the Muslim community. The congregation must listen to the Khutbah in silence. The Khutbah is traditionally in Arabic, though many Indian mosques also provide a translation or parallel address in Urdu or the local language.</p>
          <h2 style={h2}>Surah Al-Kahf on Fridays</h2>
          <p style={s}>Reciting Surah Al-Kahf (the Cave — 18th chapter of the Quran) on Fridays is one of the most recommended acts in Islamic practice. The Prophet said that whoever recites Surah Al-Kahf on Jumu'ah will be given a light (nur) between two Fridays. Many Indian Muslim families have a tradition of reciting Surah Al-Kahf together on Friday evenings — an act that both fulfils the Sunnah and creates family spiritual bonding.</p>
          <h2 style={h2}>Friday Dua Time</h2>
          <p style={s}>One of the most valued Friday traditions is making dua in the last hour before Maghrib (sunset) — a time the Prophet identified as particularly auspicious for supplications. Many Indian Muslim families make it a practice to sit together for dua in this window — especially mothers making dua for their children and families. These specific supplications — the words used, the specific prayers for specific family members — are some of the most intimate expressions of Islamic family life.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Friday traditions — the specific mosque attended for Jumu'ah for generations, the specific Friday dua your elders make, whether your family recites Surah Al-Kahf together. The Friday rhythm is the heartbeat of Islamic family spiritual life — its specific expressions in your household are worth preserving.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="jumma-namaz-friday-prayers-guide" category="Ritual Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🕌</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, rituals and heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
