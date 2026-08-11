import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hariyali Teej — Complete Guide to Puja Vidhi, Fasting Rules & Significance | OurParampara",
  description: "Complete Hariyali Teej guide — significance of the monsoon festival, fasting rules for married women, Shiva-Parvati legend, puja vidhi, traditional songs and swing traditions.",
  keywords: "Hariyali Teej puja vidhi, Hariyali Teej fasting rules, Teej festival significance, Hariyali Teej date 2026, Teej festival traditions, Shiva Parvati Teej story, married women Teej vrat",
  openGraph: { title: "Hariyali Teej — Puja Vidhi, Fasting Rules & Significance Guide", description: "The Shiva-Parvati legend, fasting rules for married women, swing traditions, and how North Indian families celebrate Hariyali Teej.", url: "https://www.ourparampara.com/blog/hariyali-teej-puja-vidhi-significance-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=hariyali-teej-puja-vidhi-significance-guide", width: 1200, height: 630 }], type: "article" },
  twitter: { card: "summary_large_image", images: ["https://www.ourparampara.com/api/og?slug=hariyali-teej-puja-vidhi-significance-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/hariyali-teej-puja-vidhi-significance-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="hariyali-teej-puja-vidhi-significance-guide" title="Hariyali Teej — Complete Guide to Puja Vidhi, Fasting Rules & Significance" description="Complete Hariyali Teej guide — significance of the monsoon festival, fasting rules, Shiva-Parvati legend, puja vidhi, and traditional swing songs." date="2026-04-10" category="Festival Guide"
        faqs={[
          { q: "When is Hariyali Teej 2026?", a: "Hariyali Teej 2026 falls on August 15, 2026 — the third day of the bright fortnight (Shukla Tritiya) of the Shravan month. It coincides with Independence Day in 2026." },
          { q: "What is the difference between Hariyali Teej and Karva Chauth?", a: "Both are fasts observed by married women for their husbands wellbeing. Hariyali Teej falls in Shravan (monsoon season, July-August) and celebrates Parvati and Shiva's union with swing songs and green attire. Karva Chauth falls in Kartik (October-November) and involves a moonrise fast broken only after sighting the moon through a sieve." },
          { q: "What do women wear on Hariyali Teej?", a: "Green is the traditional color of Hariyali Teej — women wear green sarees, lehengas, or suits. Green bangles, mehendi (henna) on hands, and jewelry gifted by the in-laws (called Sindhara) are all traditional parts of the celebrations." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌿</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Hariyali Teej — Complete Guide to Puja Vidhi, Fasting Rules &amp; Significance</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>April 10, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Hariyali Teej — "hariyali" meaning greenery — is a monsoon festival observed by married women across North India, particularly in Rajasthan, Uttar Pradesh, Punjab, Haryana, and Madhya Pradesh. Falling on the third day of Shukla Paksha in the Shravan month (typically August), the festival celebrates the union of Lord Shiva and Goddess Parvati, the lush green of the monsoon season, and the wellbeing of husbands and marriages. The mood is joyous — swings, songs, mehndi, and green attire define the day.</p>

          <h2 style={h2}>The Legend of Shiva and Parvati</h2>
          <p style={s}>According to Hindu tradition, Parvati observed 107 births of austerities and devotion to be reunited with Shiva after their separation. On the Shravan Shukla Tritiya, her perseverance bore fruit — Shiva accepted her as his eternal consort. Hariyali Teej celebrates this reunion, and the fast observed by married women mirrors Parvati&apos;s devotion — a prayer for the strength, long life, and wellbeing of their husbands and the flourishing of their marriages.</p>

          <h2 style={h2}>Fasting Rules</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            {[["When to begin","The Teej vrat begins at sunrise on the day of Hariyali Teej"],["Nirjala option","Some women observe a Nirjala fast (no food or water) — considered most rigorous and meritorious"],["Phalhar option","A fruit and milk fast — the more widely observed version, especially for working women"],["When to break","The fast is traditionally broken after performing the evening puja of Goddess Parvati and praying for the husband&apos;s wellbeing"],["The Sargi","Many in-laws send a Sargi — a pre-dawn meal of fruits, sweets, and dry fruits — to their daughter-in-law the night before or early morning of Teej, similar to Karva Chauth tradition"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:12, padding:"7px 0", borderBottom:`1px solid rgba(200,84,26,0.1)` }}>
                <p style={{ fontSize:13, fontWeight:600, color:C.saffron, margin:0, minWidth:130, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:C.charcoal, margin:0, lineHeight:1.6 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Hariyali Teej Puja Vidhi</h2>
          {[
            "Take a bath early morning and dress in green — the colour of Shravan&apos;s lush monsoon greenery",
            "Apply mehndi (henna) — a key Teej tradition; the deeper the colour, the more the husband&apos;s love, according to popular belief",
            "Set up the puja thali with an idol or image of Shiva-Parvati, flowers (especially white and marigold), roli, kumkum, and diya",
            "Offer 16 items of solah shringar (16 adornments) symbolically to Parvati — including sindoor, bangles, bindi, kajal, and mehndi",
            "Perform aarti and read or listen to the Teej vrat katha (the story of Parvati&apos;s devotion)",
            "Sit on a swing (jhula) and sing traditional Teej songs — the swing is a central symbol of the festival&apos;s joyous spirit",
            "Break the fast with puja prasad — ghewar (a traditional Rajasthani sweet) is the signature Teej sweet, along with kheer and fruits",
          ].map((step, i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Ghewar — The Teej Sweet</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 8px" }}>What is Ghewar?</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Ghewar is a traditional Rajasthani disc-shaped sweet made from flour, ghee, and sugar syrup, with a honeycomb-like texture. Deep-fried in ghee and soaked in sugar syrup, it is topped with rabri (thickened sweetened milk), saffron, and pistachios. Ghewar is deeply associated with the Shravan season and Teej in particular — Rajasthani families send Ghewar as a festival gift, and in many households, making Ghewar together is itself a tradition.</p>
          </div>

          <h2 style={h2}>The Swing (Jhula) Tradition</h2>
          <p style={s}>The swing is the defining visual symbol of Hariyali Teej — mango trees and home courtyards are decorated with swings tied with flower garlands, and women sing traditional Teej songs (Teej geet) while swinging. The songs celebrate the monsoon rains, the longing of married women for their parents&apos; homes, and prayers for their husbands&apos; wellbeing. In Rajasthan, elaborately decorated swings in palaces and heritage homes remain a beloved Teej attraction.</p>

          <h2 style={h2}>Three Teejs — What&apos;s the Difference?</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Hariyali Teej (Shravan Shukla Tritiya, July-August) — the green monsoon Teej, most widely celebrated in North India","Kajari Teej (Bhadra Krishna Tritiya, August-September) — another monsoon Teej, especially significant in Madhya Pradesh and UP, celebrated with Kajari folk songs","Hartalika Teej (Bhadra Shukla Tritiya, August-September) — a sand/clay Shiva-Parvati idol is made for puja; this version is celebrated in Maharashtra and also widely in North India"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family has specific Teej songs passed down through women of the household, record them — these folk songs are among the most endangered elements of North Indian women&apos;s oral tradition. Even a voice recording on a phone, saved on OurParampara, is preservation work.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Also fasting for your husband&apos;s wellbeing? See our <Link href="/blog/karva-chauth-puja-vidhi-complete-guide" style={{ color:C.saffron, fontWeight:600 }}>Karva Chauth guide</Link>.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="hariyali-teej-puja-vidhi-significance-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌿</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your Teej traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Save Teej songs, Ghewar recipes, mehndi photos, and swing memories on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
