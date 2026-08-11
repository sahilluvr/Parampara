import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Navratri Puja Guide — 9 Days, 9 Devis, Complete Vidhi | Parampara",
  description: "Complete Navratri guide for all 9 days — Devi for each day, colours to wear, samagri list, fasting rules, and Kanya Puja on Ashtami.",
  keywords: "Navratri puja guide, 9 days Navratri, Navratri colours, Kanya puja Ashtami, Navratri fasting rules, Navratri samagri list",
  openGraph: {
    title: "Navratri Puja Guide — 9 Days, 9 Devis, Complete Vidhi | Parampara",
    description: "Complete Navratri guide for all 9 days — Devi for each day, colours to wear, samagri list, fasting rules, and Kanya Puja on Ashtami.",
    url: "https://www.ourparampara.com/blog/navratri-puja-guide-9-days",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=navratri-puja-guide-9-days", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=navratri-puja-guide-9-days"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/navratri-puja-guide-9-days" },
};

const NINE_DAYS = [
  { day:1, devi:"Shailputri",   colour:"Grey",       mantra:"Vande Vaanchhitalabhaya Chandrardhakritashekharam", significance:"The daughter of mountains — invoke her for strength" },
  { day:2, devi:"Brahmacharini",colour:"Orange",     mantra:"Dadhaana Karpadma Abhayam Akshamala Kamandalu", significance:"The ascetic form — invoke her for discipline and wisdom" },
  { day:3, devi:"Chandraghanta",colour:"White",      mantra:"Pindajavara Pravara Chandakopastrakairyuta", significance:"The warrior goddess — invoke her for courage" },
  { day:4, devi:"Kushmanda",    colour:"Red",        mantra:"Surासम्पूर्ण Kalasham Rudhiraptam Eva Cha", significance:"Creator of the universe — invoke her for health and prosperity" },
  { day:5, devi:"Skandamata",   colour:"Royal Blue", mantra:"Simhासana Gata Nityam Padmaashrita Karadvaya", significance:"Mother of Kartikeya — invoke her for children's wellbeing" },
  { day:6, devi:"Katyayani",    colour:"Yellow",     mantra:"Chandrahasojjvalakara Shaardoolavaravahana", significance:"The fierce warrior — invoke her for removing obstacles" },
  { day:7, devi:"Kalaratri",    colour:"Green",      mantra:"Ekaveni Japakarnapura Nagna Kharasthita", significance:"The destroyer of darkness — invoke her for protection" },
  { day:8, devi:"Mahagauri",    colour:"Peacock Green",mantra:"Shvetavrishesamarudha Shvetambaradhara Shuchih", significance:"The pure one — invoke her for purity and peace" },
  { day:9, devi:"Siddhidatri",  colour:"Purple",     mantra:"Siddha Gandharva Yakshadyair Asurairamarairapi", significance:"Giver of all siddhis — invoke her for spiritual powers" },
];

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  return (
    <>
      <BlogStructuredData
        slug="navratri-puja-guide-9-days"
        title="Navratri Puja Guide — 9 Days, 9 Devis, Complete Vidhi | Parampara"
        description="Complete Navratri guide for all 9 days — Devi for each day, colours to wear, samagri list, fasting rules, and Kanya Puja on Ashtami."
        date="2026-06-01"
        category="Festival Guide"
        faqs={[
          { q: "What can you eat during Navratri fast?", a: "During Navratri fasting, you can eat sabudana (tapioca), kuttu atta (buckwheat flour), singhara atta, fruits, milk, curd, paneer, potatoes, sweet potatoes, and rock salt (sendha namak)." },
          { q: "What is Kanya Puja in Navratri?", a: "Kanya Puja is performed on Ashtami or Navami, where young girls (age 2-10) are worshipped as embodiments of the nine forms of Devi. They are washed, offered a full meal, and given gifts." },
          { q: "What are the 9 colours of Navratri?", a: "The 9 Navratri colours are: Royal Blue (Day 1), Yellow (Day 2), Green (Day 3), Grey (Day 4), Orange (Day 5), White (Day 6), Red (Day 7), Sky Blue (Day 8), Pink or Purple (Day 9)." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🙏</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,46px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Navratri Puja Guide — 9 Days, 9 Devis, Complete Vidhi</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 8, 2026</span><span>·</span><span>9 min read</span>
            </div>
          </div>
        </section>
        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Navratri — nine nights of the goddess — is the most widely celebrated Hindu festival after Diwali. Yet many families are unsure which Devi to worship on which day, what colour to wear, or how to perform the complete vidhi. This guide covers everything.</p>

          {/* Quick answer box — for AI engine citation */}
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Navratri 9 colours: Day 1 Royal Blue, Day 2 Yellow, Day 3 Green, Day 4 Grey, Day 5 Orange, Day 6 White, Day 7 Red, Day 8 Sky Blue, Day 9 Pink/Purple. Daily puja involves lighting a diya, offering flowers to the nine forms of Devi (Navadurga), reciting Durga Saptashati or Devi Stuti, and performing aarti morning and evening. Kanya Puja is performed on Ashtami or Navami.</p>
          </div>


          <h2 style={h2}>9 Days, 9 Devis — Complete Guide</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:28 }}>
            {NINE_DAYS.map(day => (
              <div key={day.day} style={{ background:"#fff", borderRadius:14, border:`1px solid ${C.border}`, overflow:"hidden", display:"flex" }}>
                <div style={{ width:48, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <p style={{ fontFamily:F.serif, fontSize:20, fontWeight:700, color:"#fff", margin:0 }}>{day.day}</p>
                </div>
                <div style={{ padding:"12px 16px", flex:1 }}>
                  <div style={{ display:"flex", gap:10, alignItems:"center", flexWrap:"wrap", marginBottom:4 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:C.charcoal, margin:0 }}>{day.devi}</p>
                    <span style={{ fontSize:11, fontWeight:600, background:C.saffronLight, color:C.saffron, padding:"2px 8px", borderRadius:20 }}>{day.colour}</span>
                  </div>
                  <p style={{ fontSize:12, color:C.gray, margin:0 }}>{day.significance}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={h2}>Navratri Samagri List</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
              {["Kalash with coconut","Mango leaves","Red chunri (dupatta)","Akhand diya + oil","Sindoor, kumkum, roli","Flowers — marigold, rose","Betel leaves & supari","Panchamrit ingredients","Coconut","Fruits — seasonal","Mishri (rock sugar)","Nav durga idol/photo","Incense sticks","Camphor","Durva grass","Red cloth for chowki"].map(i=>(
                <div key={i} style={{ display:"flex", gap:6 }}><span style={{ color:C.saffron }}>✓</span><span style={{ fontSize:13 }}>{i}</span></div>
              ))}
            </div>
          </div>

          <h2 style={h2}>Navratri Fasting Rules</h2>
          {[["What to eat","Sabudana khichdi, fruit, kuttu atta roti, samak rice, singhara atta, dairy, rock salt"],["What to avoid","Regular salt, grains (wheat, rice), non-veg, onion, garlic, alcohol"],["Who can skip fasting","Elderly, pregnant women, children, those with health conditions — it is punya to participate in any way you can"],["Breaking the fast","On Ashtami or Navami with Kanya Puja — feed 9 young girls and offer them gifts"]].map(([title,desc])=>(
            <div key={title} style={{ display:"flex", gap:12, padding:"10px 0", borderBottom:`1px solid ${C.border}`, marginBottom:4 }}>
              <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:140, flexShrink:0 }}>{title}</p>
              <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.6 }}>{desc}</p>
            </div>
          ))}

          <h2 style={h2}>Kanya Puja — Ashtami & Navami</h2>
          <p style={s}>The most important ritual of Navratri. Invite 9 young girls (ideally pre-pubescent) to your home — they represent the 9 forms of Devi.</p>
          {["Wash their feet with water and apply alta (red colour)","Offer them a full meal — puri, halwa, chana, and kheer","Apply tilak on their foreheads","Gift each girl something — typically a chunni, bangles, or money","Take their blessings by touching their feet","This ritual is considered equivalent to the entire nine-day fast"].map((s2,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:8 }}>
              <span style={{ width:24, height:24, borderRadius:"50%", background:C.saffronLight, color:C.saffron, fontSize:11, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{i+1}</span>
              <span style={{ fontSize:14, color:"#374151", lineHeight:1.7 }}>{s2}</span>
            </div>
          ))}
        
<h2 style={h2}>Ghatasthapana — Establishing the Sacred Pot (Day 1)</h2>
          <p style={s}>Every Navratri begins with Ghatasthapana — the ritual installation of a Kalash (sacred pot) that invokes and hosts Devi's presence for the nine days. The Kalash is filled with water, adorned with mango leaves and a coconut, and placed on a bed of soil in which barley or wheat seeds are sown. These seeds sprout over the nine days — the sprouting is watched as an auspicious sign and the green sprouts (Jwara) are distributed as prasad on Navami.</p>
        
<h2 style={h2}>Dussehra — The Tenth Day</h2>
          <p style={s}>The tenth day of Navratri is Vijayadashami (Dussehra) — the day of victory. It commemorates: Ram's victory over Ravana (the burning of Ravana effigies, most elaborate at Delhi's Ramlila and Mysuru's Mysore Dasara — one of the grandest in India); Durga's victory over Mahishasura; and Arjuna revealing himself from hiding after his year of incognito exile. It is also considered auspicious to begin new undertakings on Vijayadashami.</p>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="navratri-puja-guide-9-days" category="Festival Guide"/>
        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🙏</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document your family&apos;s Navratri tradition</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20 }}>Every family celebrates Navratri slightly differently. Preserve your family&apos;s version for generations to come.</p>
            <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", padding:"12px 28px", borderRadius:12, fontSize:14, fontWeight:600, textDecoration:"none" }}>Save in Parampara — Free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
