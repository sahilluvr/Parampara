import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vahan Puja for New Car — Complete Vidhi, Mantra & Samagri Guide | OurParampara",
  description: "Step-by-step Vahan Puja guide for new cars and bikes — samagri list, mantras, lemon-crushing ritual, muhurat tips, and what to do if you can't get a pandit immediately.",
  keywords: "Vahan puja vidhi, new car puja samagri, vehicle puja at home, car puja mantra, lemon crushing ritual car, Vahan puja muhurat",
  openGraph: {
    title: "Vahan Puja for New Car — Complete Vidhi, Mantra & Samagri Guide | OurParampara",
    description: "Step-by-step Vahan Puja guide for new cars and bikes — samagri list, mantras, lemon-crushing ritual, muhurat tips, and what to do if you can't get a pandit immediately.",
    url: "https://www.ourparampara.com/blog/vahan-puja-new-car-vidhi-samagri",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=vahan-puja-new-car-vidhi-samagri", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=vahan-puja-new-car-vidhi-samagri"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/vahan-puja-new-car-vidhi-samagri" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="vahan-puja-new-car-vidhi-samagri"
        title="Vahan Puja for New Car — Complete Vidhi, Mantra & Samagri Guide | OurParampara"
        description="Step-by-step Vahan Puja guide for new cars and bikes — samagri list, mantras, lemon-crushing ritual, muhurat tips, and what to do if you can\'t get a pandit immediately."
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
            <div style={{ fontSize:40, marginBottom:14 }}>🚗</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Vahan Puja for New Car — Complete Vidhi, Mantra &amp; Samagri Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Bringing home a new vehicle — whether a car, scooter, or bike — is a significant moment for any Indian family. Vahan Puja (vehicle worship) is performed before the vehicle's first drive to seek protection, remove negative energy picked up during manufacturing and transit, and invoke Lord Ganesha's blessings for safety on the road.</p>

          <h2 style={h2}>Why Perform Vahan Puja</h2>
          <p style={s}>In Hindu tradition, every new possession — especially something as significant as a vehicle that will carry your family daily — is blessed before use. The puja is believed to ward off "drishti" (evil eye), ensure the vehicle serves the family safely for years, and mark the auspicious beginning of its journey with you.</p>

          <h2 style={h2}>Vahan Puja Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Coconut","Lemons (5-7, for crushing under wheels)","Red cloth","Flower garland (for the vehicle)","Roli, kumkum, chandan","Akshat (rice)","Diya and ghee/oil","Camphor","Incense sticks","Sweets — for prasad and distribution","Holy water (Gangajal)","Ganesha idol/photo (small, for dashboard)","Mustard oil (for evil eye remedy)","Black thread or lemon-chilli string (nazar battu)"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Step-by-Step Vahan Puja Vidhi</h2>
          {[
            "Choose an auspicious day and time — many families prefer Tuesdays (for Hanuman), Wednesdays (for Ganesha), or any day during Navratri/Dussehra which is considered universally auspicious for vehicle purchases",
            "Clean the vehicle thoroughly inside and out before the puja",
            "Decorate the vehicle with a flower garland — typically marigold — around the front grille or rearview mirror",
            "Apply tilak (roli + akshat) on the bonnet, dashboard, and steering wheel",
            "Place a small Ganesha idol or photo on the dashboard",
            "Light the diya and incense near the vehicle",
            "Perform a small aarti, circling the diya around the vehicle",
            "Recite the Ganesha mantra: 'Om Gan Ganapataye Namah' or simply pray for safe travels",
            "Place the coconut near the front wheel",
            "Crush 1-2 lemons under each front wheel as you slowly drive the vehicle forward — this is the most iconic part of the ritual, symbolizing the destruction of obstacles and evil eye before the journey begins",
            "Distribute prasad/sweets to family members and anyone present",
            "Take the vehicle for its first short drive — often to a temple",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>The Lemon-Crushing Ritual Explained</h2>
          <p style={s}>Crushing lemons under the wheels is one of the most recognizable parts of Vahan Puja. Lemons are considered to absorb negative energy and the "evil eye" — by crushing them under the wheels as the vehicle moves for the first time, the family symbolically ensures the vehicle's journey starts free of misfortune. Some families also tie a string of lemons and green chillies (nazar battu) under the vehicle or near the number plate as an ongoing protective charm.</p>

          <h2 style={h2}>Common Mantras</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            {[["Ganesha Mantra","Om Gan Ganapataye Namah — for removing obstacles"],["Hanuman Mantra","Om Hanumate Namah — for protection during travel"],["General blessing","Om Sri Vahanaya Namah — specifically invoking blessings on the vehicle"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:12, padding:"7px 0", borderBottom:`1px solid rgba(200,84,26,0.1)` }}>
                <p style={{ fontSize:13, fontWeight:600, color:C.saffron, margin:0, minWidth:120, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>If You Can't Get a Pandit Immediately</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "A simplified family-led puja is completely acceptable — the eldest family member can perform the basic steps",
              "At minimum: tilak on the dashboard, a small aarti, and the lemon-crushing ritual cover the essentials",
              "If timing matters more than ceremony (e.g., picking up the car on a specific auspicious day), do a brief puja at home/dealership and arrange a fuller ceremony with a pandit later at a temple",
              "Many temples offer a simple vehicle-blessing service — driving by slowly while a priest performs a brief aarti — convenient for busy families",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Photograph each new vehicle puja — the car, the decorations, the family gathered around. Years later, these photos become a fun timeline of your family's vehicles and milestones.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Moving into a new home too? See our <Link href="/blog/griha-pravesh-puja-samagri-list" style={{ color:C.saffron, fontWeight:600 }}>Griha Pravesh samagri guide</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="vahan-puja-new-car-vidhi-samagri" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🚗</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document every family milestone</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>From new cars to new homes — save the rituals, photos, and memories on OurParampara.</p>
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
