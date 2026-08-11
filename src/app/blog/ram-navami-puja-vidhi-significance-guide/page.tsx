import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ram Navami — Complete Guide to Puja Vidhi, Significance & Celebrations | OurParampara",
  description: "Complete Ram Navami guide — the birth story of Lord Rama, fasting rules, puja vidhi and samagri, Ramayana recitation traditions, and how families celebrate this auspicious day across India.",
  keywords: "Ram Navami puja vidhi, Ram Navami significance, Ram Navami fasting rules, Ram Navami date 2026, Ram Janmotsav celebration, Ramayana recitation Ram Navami",
  openGraph: {
    title: "Ram Navami — Complete Guide to Puja Vidhi, Significance & Celebrations | OurParampara",
    description: "Complete Ram Navami guide — the birth story of Lord Rama, fasting rules, puja vidhi and samagri, Ramayana recitation traditions, and how families celebrate this auspicious day across India.",
    url: "https://www.ourparampara.com/blog/ram-navami-puja-vidhi-significance-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=ram-navami-puja-vidhi-significance-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=ram-navami-puja-vidhi-significance-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/ram-navami-puja-vidhi-significance-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="ram-navami-puja-vidhi-significance-guide"
        title="Ram Navami — Complete Guide to Puja Vidhi, Significance & Celebrations | OurParampara"
        description="Complete Ram Navami guide — the birth story of Lord Rama, fasting rules, puja vidhi and samagri, Ramayana recitation traditions, and how families celebrate this auspicious day across India."
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
            <div style={{ fontSize:40, marginBottom:14 }}>🏹</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Ram Navami — Complete Guide to Puja Vidhi, Significance &amp; Celebrations</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 11, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Ram Navami celebrates the birth of Lord Rama — the seventh avatar of Vishnu and the hero of the Ramayana — on the ninth day (Navami) of the bright fortnight of Chaitra. Falling at the end of Chaitra Navratri, it is one of the most widely observed Hindu festivals, marked by fasting, puja, and Ramayana recitation across homes, temples, and communities throughout India and the global diaspora.</p>

          <h2 style={h2}>The Birth Story of Lord Rama</h2>
          <p style={s}>According to the Valmiki Ramayana, Rama was born to King Dasharatha of Ayodhya and his queen Kaushalya. His birth was the result of a divine Putrakameshti yajna (fire ritual for a son) performed by sage Rishyashringa on Dasharatha's behalf. At the exact moment of Madhyahna (midday) on Navami, when planets were aligned most auspiciously, Rama was born — an incarnation of Vishnu sent to restore dharma (righteousness) by defeating the demon king Ravana. This midday timing is why Ram Navami's most significant puja moment occurs around noon.</p>

          <h2 style={h2}>Ram Navami Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Rama idol or image (with Sita, Lakshmana, Hanuman if possible)","Cradle (jhula) for baby Rama idol","Yellow flowers — marigold especially","Panchamrit","Roli, chandan, akshat","Tulsi leaves (especially sacred in Rama worship)","Diya and ghee","Incense sticks","Fruits and sweets — particularly panchamrit prasad","Charnamrit","Ramcharitmanas or Valmiki Ramayana for recitation","Janeu (sacred thread) if performing full vidhi"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Ram Navami Puja Vidhi — Step by Step</h2>
          {[
            "Wake early and take a bath — many devotees observe a day-long fast, broken only at noon after puja",
            "Set up the puja altar with Rama's image or idol, ideally in a cradle (jhula) decorated with flowers to symbolize his birth",
            "Begin with Ganesh puja and Sankalpa — state your name, date, and intention for the day's observance",
            "Perform abhishekam of the idol with panchamrit — milk, curd, honey, ghee, and sugar — then with clean water",
            "Apply chandan and roli tilak, offer tulsi leaves (especially dear to Vishnu/Rama) and yellow flowers",
            "Recite Ram Stuti, Ramayana verses, or the Ramcharitmanas — the Sundara Kanda and Bal Kanda are particularly associated with this day",
            "At midday (around 12 PM) — the exact birth moment — perform a special aarti, ring bells, and chant 'Jai Shri Ram' or 'Shri Ram Jai Ram Jai Jai Ram'",
            "Rock the cradle gently at the birth moment, as a symbolic welcoming of the newborn Rama",
            "Offer panchamrit prasad and distribute among family members",
            "Break the fast with fruits and panjiri (a wheat-based sweet) — the traditional Ram Navami prasad",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Ramayana Recitation Traditions</h2>
          <p style={s}>Many families observe an Akhand Ramayan — a continuous, non-stop recitation of the entire Ramcharitmanas (Tulsidas's Hindi Ramayana) during the nine days of Chaitra Navratri, concluding on Ram Navami. Families take turns reading in shifts, ensuring the text is recited without interruption. Even for families who don't observe the full nine-day Akhand path, reading the Sundara Kanda or Bala Kanda on Ram Navami itself carries special significance.</p>

          <h2 style={h2}>How Ayodhya Celebrates</h2>
          <p style={s}>Ayodhya — the birthplace of Rama — is the epicenter of Ram Navami celebrations. The entire city is decorated, and the Ram Janmabhoomi temple complex sees lakhs of devotees. A ceremonial rath yatra (chariot procession) of Rama, Sita, Lakshmana, and Hanuman moves through the city. For diaspora families and those who can't travel, watching the Ayodhya celebration broadcast has become a meaningful annual tradition.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family recites Ramayana or Ramcharitmanas passages on Ram Navami, record which verses are traditionally read, who typically leads the recitation, and any family stories connected to this practice. Oral traditions around scripture recitation are among the most meaningful to preserve.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Ram Navami falls at the end of Chaitra Navratri — see our <Link href="/blog/navratri-puja-guide-9-days" style={{ color:C.saffron, fontWeight:600 }}>Navratri guide</Link> for the nine days leading up to it.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="ram-navami-puja-vidhi-significance-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🏹</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s Ram Navami traditions</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save your Ramayana recitation tradition, puja photos, and panjiri recipe on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
