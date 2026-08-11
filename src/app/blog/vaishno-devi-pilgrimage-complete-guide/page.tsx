import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vaishno Devi Pilgrimage — Complete Guide to the Trek, Darshan & Traditions | OurParampara",
  description: "The traditional trek from Katra to the Bhavan (main shrine) is approximately 13km one way, typically taking 5-6 hours at a comfortable pace. The Ardh Kuwari cave (a meditation cave the goddess is said",
  keywords: "Vaishno Devi pilgrimage guide, Vaishno Devi trek guide, Katra to Vaishno Devi, Vaishno Devi helicopter booking, Vaishno Devi darshan timings, Vaishno Devi best time visit",
  openGraph: { title: "Vaishno Devi Pilgrimage — Complete Guide to the Trek, Darshan & Traditions", description: "The traditional trek from Katra to the Bhavan (main shrine) is approximately 13km one way, typically taking 5-6 hours at a comfortable pace. The Ardh Kuwari cave (a meditation cave the goddess is said", url: "https://www.ourparampara.com/blog/vaishno-devi-pilgrimage-complete-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=vaishno-devi-pilgrimage-complete-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=vaishno-devi-pilgrimage-complete-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/vaishno-devi-pilgrimage-complete-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="vaishno-devi-pilgrimage-complete-guide" title="Vaishno Devi Pilgrimage — Complete Guide to the Trek, Darshan & Traditions" description="The traditional trek from Katra to the Bhavan (main shrine) is approximately 13km one way, typically taking 5-6 hours at a comfortable pace. The Ardh Kuwari cave (a meditation cave the goddess is said" date="2026-06-03" category="Heritage Guide"
        faqs={[
          { q: "How long is the Vaishno Devi trek and how difficult is it?", a: "The traditional trek from Katra to the Bhavan (main shrine) is approximately 13km one way, typically taking 5-6 hours at a comfortable pace. The Ardh Kuwari cave (a meditation cave the goddess is said to have rested in) is at the 6km mark. The route is well-developed with rest stops, dhabas, and facilities. It is considered moderately challenging and is completed comfortably by most pilgrims including families with children and elderly members using pony or palki (palanquin) services." },
          { q: "How do I book a helicopter for Vaishno Devi?", a: "Helicopter services operate from Katra helipad to Sanjichhat (about 2.5km from the Bhavan). Book online at the official Shrine Board website (maavaishnodevi.org) or through IRCTC. Booking opens 90 days in advance. Round trip typically takes about 2-3 hours including trek from Sanjichhat. Booking well in advance is essential especially during Navratri and peak season." },
          { q: "What is the best time to visit Vaishno Devi?", a: "Vaishno Devi is open year-round. The best time is March-April and September-October. Navratri (twice a year) sees the highest footfall — beautiful atmosphere but very crowded. Avoid peak summer (May-June school holidays) as queues can be extremely long. Winter (December-February) has snow and cold but fewer crowds. Yatra begins at Katra which is best visited in the morning to complete darshan by afternoon." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🙏</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Vaishno Devi Pilgrimage — Complete Guide to the Trek, Darshan & Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 3, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>

          <p style={s}>Vaishno Devi — the shrine of the divine mother Goddess Vaishno Devi set in the Trikuta Mountains of Jammu — receives over 8 million pilgrims every year, making it one of the most visited religious sites in the world. For millions of North Indian families, the Vaishno Devi yatra is a sacred family tradition — a pilgrimage undertaken at important life milestones, passed from generation to generation as one of the most meaningful journeys a family undertakes together.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Vaishno Devi trek: 13km one way from Katra to Bhavan shrine. Duration 5-6 hours walking. Pony and palki available. Helicopter from Katra to Sanjichhat (2.5km from shrine). Register at maavaishnodevi.org before visit (mandatory). Best time: March-April or September-October. Open year-round.</p>
          </div>

          <h2 style={h2}>The Sacred Story</h2>
          <p style={s}>The legend of Vaishno Devi tells of a young girl Vaishnavi who was devoted to Lord Vishnu and practiced austerities in the Trikuta forest. The demon Bhairon Nath pursued her relentlessly; she retreated into a cave (now the Ardh Kuwari cave) and meditated for 9 months. When Bhairon Nath eventually caught up to her at the Bhairon Ghati, she revealed her divine form and destroyed him. His dying request was that his devotees visit his shrine on their way back from hers — which is why pilgrims traditionally visit Bhairon Temple (2km beyond the main shrine) on their return, and the tradition is that without visiting Bhairon Nath, the Vaishno Devi yatra is incomplete.</p>

          <h2 style={h2}>The Trek Route</h2>
          {["Katra base camp — register at the Yatra Registration Counter and collect your Yatra Parchi (essential document)","Darshani Darwaza — the traditional starting point of the yatra, 2km from Katra. Most pilgrims begin at the Bank Gate instead.","Ban Ganga — a sacred stream where pilgrims traditionally take a dip (5km)","Ardh Kuwari — the meditation cave where Mata rested for 9 months. Pilgrims enter through a 15m crawl tunnel for blessings. (6.5km)","Sanjichhat — the helicopter arrival point and a rest area (11km)","Bhavan — the main shrine with the three Pindis (rock formations representing Mahakali, Mahalakshmi, and Mahasaraswati) (13km)","Bhairon Temple — 2km beyond Bhavan, traditional to visit here before descending"].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Practical Information</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Registration","Mandatory — register at maavaishnodevi.org or Katra counter. Yatra Parchi required."],["Pony & Palki","Available from Katra to Bhavan — useful for elderly and children. Book in advance during peak season."],["Helicopter","Katra to Sanjichhat (one way or return). Book at maavaishnodevi.org well in advance."],["Prasad","The official Prasad (dry fruit and sweets) from the Shrine Board is most auspicious. Available at official counters."],["Accommodation","Katra has extensive accommodation. Some options available at Bhavan itself — book through Shrine Board website."],["What to carry","Warm jacket (temperature drops at night), comfortable walking shoes, water bottle (refilling stations available), light snacks, ID proof"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Many families have a tradition of undertaking Vaishno Devi yatra at specific life milestones — after a recovery from illness, before a wedding, on the birth of a child. Document your family&apos;s history of Vaishno Devi visits — who went, when, the specific occasion, and what was experienced. This becomes a thread of devotion that runs through generations.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="vaishno-devi-pilgrimage-complete-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🙏</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s pilgrimage traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your sacred journeys and spiritual traditions on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
