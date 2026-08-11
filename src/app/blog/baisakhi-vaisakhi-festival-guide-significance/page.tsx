import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Baisakhi (Vaisakhi) — Complete Guide to Punjab's Harvest Festival & Sikh New Year | OurParampara",
  description: "Complete Baisakhi guide — significance of the harvest festival, Khalsa Panth founding story, Bhangra and Giddha traditions, Golden Temple celebrations, and family traditions.",
  keywords: "Baisakhi festival guide, Vaisakhi significance, Khalsa Panth history, Baisakhi celebrations Punjab, Baisakhi date 2027, Sikh New Year traditions, Bhangra Giddha Baisakhi",
  openGraph: { title: "Baisakhi — Complete Guide to Punjab's Harvest Festival", description: "The Khalsa Panth founding, Bhangra traditions, Golden Temple celebrations, and how Punjabi families celebrate Baisakhi.", url: "https://www.ourparampara.com/blog/baisakhi-vaisakhi-festival-guide-significance", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=baisakhi-vaisakhi-festival-guide-significance", width: 1200, height: 630 }], type: "article" },
  twitter: { card: "summary_large_image", images: ["https://www.ourparampara.com/api/og?slug=baisakhi-vaisakhi-festival-guide-significance"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/baisakhi-vaisakhi-festival-guide-significance" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="baisakhi-vaisakhi-festival-guide-significance" title="Baisakhi (Vaisakhi) — Complete Guide to Punjab's Harvest Festival & Sikh New Year" description="Complete Baisakhi guide — significance of the harvest festival, Khalsa Panth founding story, Bhangra and Giddha traditions, Golden Temple celebrations." date="2026-04-04" category="Festival Guide"
        faqs={[
          { q: "When is Baisakhi 2027?", a: "Baisakhi 2027 falls on April 14, 2027. It is observed on the first day of the Vaisakha month in the Solar calendar, which is typically April 13 or 14 each year." },
          { q: "What is the significance of Baisakhi for Sikhs?", a: "Baisakhi marks the founding of the Khalsa Panth by Guru Gobind Singh Ji on April 13, 1699, at Anandpur Sahib. It is considered one of the most sacred days in the Sikh calendar, observed with prayers at Gurudwaras and Nagar Kirtans." },
          { q: "How is Baisakhi different from Lohri?", a: "Lohri (January 13) celebrates the end of winter and the harvest season's beginning, primarily around a bonfire. Baisakhi (April 13/14) celebrates the actual wheat harvest and also has deep Sikh religious significance as the founding of the Khalsa Panth." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌾</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Baisakhi (Vaisakhi) — Complete Guide to Punjab&apos;s Harvest Festival &amp; Sikh New Year</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>April 4, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Baisakhi — also spelled Vaisakhi — falls on April 13 or 14 every year, marking the first day of the Vaisakha month in the solar calendar. It is simultaneously a harvest festival, a new year celebration across several regional calendars, and one of the most sacred days in the Sikh faith. For Punjabi families worldwide, Baisakhi is among the most joyously celebrated annual occasions.</p>

          <h2 style={h2}>Dual Significance — Harvest & Khalsa</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:20 }}>
            <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:12, padding:"16px" }}>
              <p style={{ fontSize:14, fontWeight:700, color:C.saffron, margin:"0 0 8px" }}>🌾 Harvest festival</p>
              <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Baisakhi marks the ripening of the Rabi (winter) wheat crop in Punjab. Farmers celebrate the harvest with gratitude, music, and feasting — thanking the land for its bounty after months of hard work.</p>
            </div>
            <div style={{ background:C.forestLight, border:`1px solid rgba(26,92,66,0.2)`, borderRadius:12, padding:"16px" }}>
              <p style={{ fontSize:14, fontWeight:700, color:C.forest, margin:"0 0 8px" }}>🪔 Khalsa Panth founding</p>
              <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>On April 13, 1699, Guru Gobind Singh Ji founded the Khalsa Panth at Anandpur Sahib — initiating the five Panj Pyaras and establishing the Sikh martial-spiritual order that exists to this day.</p>
            </div>
          </div>

          <h2 style={h2}>The Founding of the Khalsa — 1699</h2>
          <p style={s}>At the Baisakhi gathering of 1699, Guru Gobind Singh Ji appeared before a large assembly carrying an unsheathed sword and called for a devoted Sikh willing to offer their head. One by one, five volunteers stepped forward — the Panj Pyaras (Five Beloved Ones). They were initiated into the Khalsa, receiving Amrit (nectar, prepared in an iron bowl stirred with a khanda sword) and the five Ks (Kesh, Kangha, Kara, Kachera, Kirpan). Guru Gobind Singh then asked the Panj Pyaras to initiate him in return, establishing the principle of equality between Guru and Sangat.</p>

          <h2 style={h2}>How Baisakhi Is Celebrated</h2>
          {[["Nagar Kirtan","Grand processions through city streets, led by the Panj Pyaras and the Guru Granth Sahib Ji, with kirtan, gatka (martial arts demonstrations), and community participation"],["Gurudwara celebrations","Special prayers, kirtan, and langar (community meal) at Gurudwaras — the Golden Temple in Amritsar draws lakhs of pilgrims on Baisakhi"],["Bhangra and Giddha","Traditional Punjabi folk dances — men perform Bhangra (energetic drum-driven dance) and women perform Giddha (clap-and-song circle dance) — celebrating the harvest"],["Melas (fairs)","Community fairs with food, music, wrestling competitions, and folk performances in villages and cities across Punjab"],["New clothes and feasting","Families dress in new clothes and share festive meals — makki di roti and sarson da saag are traditional, though seasonal Baisakhi foods vary by family"]].map(([k,v])=>(
            <div key={k} style={{ display:"flex", gap:12, padding:"10px 0", borderBottom:`1px solid ${C.border}`, marginBottom:4 }}>
              <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:140, flexShrink:0 }}>{k}</p>
              <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
            </div>
          ))}

          <h2 style={h2}>Baisakhi as New Year</h2>
          <p style={s}>Baisakhi is the new year for several communities beyond Punjab: it is Bohag Bihu (Assamese New Year), Puthandu (Tamil New Year), Vishu (Kerala New Year), and Pohela Boishakh (Bengali New Year) — all falling around April 13-15. Across India, this solar date marks the transition into a new annual cycle, observed with regional specificity but a shared spirit of renewal.</p>

          <h2 style={h2}>Baisakhi for Punjabi Families Abroad</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Major Sikh communities in the UK (Southall), Canada (Brampton, Surrey BC), USA (Fremont, Yuba City), and Australia organize large Nagar Kirtans on or around Baisakhi","Yuba City, California hosts one of the largest Sikh parades in the world annually around Baisakhi","Families abroad often watch the Golden Temple Baisakhi celebrations via live stream","Teaching children the story of the Panj Pyaras and the significance of Amrit Sanchar is a common family tradition","Cooking traditional Punjabi dishes together as a family — especially if a grandmother is visiting — often becomes the centerpiece of diaspora Baisakhi celebrations"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family has a connection to a specific Gurudwara where Baisakhi has been celebrated for generations, record that history — the Gurudwara&apos;s name, when your family first started attending, and any memories associated with it. These institutional connections are part of family heritage too.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Related: <Link href="/blog/lohri-festival-celebration-guide" style={{ color:C.saffron, fontWeight:600 }}>Lohri festival guide</Link> · <Link href="/blog/holi-festival-guide-rituals-significance" style={{ color:C.saffron, fontWeight:600 }}>Holi guide</Link></p>
          </div>
        
<h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Baisakhi at the Gurdwara</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>For Sikh families, Baisakhi begins with the Amrit Vela (pre-dawn prayer) at the Gurdwara. Akhand Path (continuous reading of the Guru Granth Sahib Ji) is completed on this day. Special kirtan programmes run throughout the day. Many Sikhs choose Baisakhi as the day to take Amrit (Khalsa initiation) — making it a day of personal spiritual commitment as well as community celebration. Langar runs through the day feeding all who come. The Golden Temple at Amritsar on Baisakhi is one of India's most extraordinary religious experiences — the sarovar illuminated, hundreds of thousands of devotees, the sound of kirtan filling the air.</p>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="baisakhi-vaisakhi-festival-guide-significance" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌾</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s Baisakhi memories</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Save Gurudwara visits, Bhangra memories, and harvest traditions on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
