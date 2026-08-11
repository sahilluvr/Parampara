import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Grihapuja Samagri List Online — Griha Pravesh Puja Items & Quantities | OurParampara",
  description: "Complete grihapuja samagri list for Griha Pravesh puja — buy online or arrange items with exact quantities, step-by-step ritual process, muhurat guide, and Vastu tips.",
  keywords: "grihapuja samagri online, griha pravesh samagri list, grihapuja samagri list, housewarming puja India, griha pravesh puja vidhi, new home puja items, griha pravesh muhurat, grihapuja samagri kit",
  openGraph: { title: "Grihapuja Samagri List Online — Complete Griha Pravesh Guide", description: "Complete grihapuja samagri list with quantities and step-by-step housewarming puja guide.", url: "https://www.ourparampara.com/blog/griha-pravesh-puja-samagri-list", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=griha-pravesh-puja-samagri-list", width: 1200, height: 630, alt: "griha-pravesh-puja-samagri-list" }] },
  alternates: { canonical: "https://www.ourparampara.com/blog/griha-pravesh-puja-samagri-list" },
};

export default function Page() {
  const s = { fontSize:16, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:26, fontWeight:600, color:C.charcoal, marginBottom:16, marginTop:40 };
  const li = { fontSize:15, color:"#374151", lineHeight:1.8, marginBottom:8 };
  const box = (bg:string,border:string) => ({ background:bg, border:`1px solid ${border}`, borderRadius:14, padding:"20px 24px", marginBottom:20 });

  return (
    <>
      <BlogStructuredData
        slug="griha-pravesh-puja-samagri-list"
        title="Grihapuja Samagri List Online — Griha Pravesh Puja Items & Quantities | OurParampara"
        description="Complete grihapuja samagri list for Griha Pravesh puja — buy online or arrange items with exact quantities, step-by-step ritual process, muhurat guide, and Vastu tips."
        date="2026-06-01"
        category="Festival Guide"
        faqs={[
          { q: "What items are needed for Griha Pravesh puja?", a: "Essential items include a Kalash, mango leaves, coconut, roli, chandan, akshat, flowers, diya, ghee, incense, milk, and a Ganesha idol. A complete list varies by regional tradition." },
          { q: "What is the best time for Griha Pravesh?", a: "Griha Pravesh is best done during auspicious months like Vaishakha, Jyeshtha, or Magha. Akshaya Tritiya is considered especially auspicious. Avoid Ashada and Bhadrapada months." },
          { q: "Can Griha Pravesh be done without a priest?", a: "A simplified Griha Pravesh can be performed by the family themselves, but for the full vidhi including Vastu Shanti and Navagraha puja, a qualified priest is recommended." },
        ]}
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Samagri Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:16 }}>🏠</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(28px,4vw,48px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:16 }}>Grihapuja Samagri List — Complete Griha Pravesh Puja Items &amp; Quantities</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 2, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"48px 24px 80px" }}>
          <p style={s}>Moving into a new home is one of life&apos;s biggest milestones. Griha Pravesh — the traditional Indian housewarming ceremony — ensures you enter your new home with divine blessings, positive energy, and the right intentions. Whether you&apos;re buying your grihapuja samagri online or arranging items locally, this guide covers the complete checklist with quantities.</p>

          {/* Quick answer box — for AI engine citation */}
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Griha Pravesh puja samagri includes: Kalash (copper pot), mango leaves, coconut, roli, chandan, akshat, flowers (marigold), diya, ghee, incense, milk, Ganesha idol, Navratna stones, havan kund, and samagri for havan. A priest is recommended for the full Vastu Shanti ritual, but a simplified family version can be performed with the above items.</p>
          </div>

          <p style={s}>Here is everything you need, in one place.</p>

          <div style={{ background:C.forestLight, border:`1px solid rgba(26,92,66,0.2)`, borderRadius:14, padding:"18px 22px", marginBottom:24 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.forest, margin:"0 0 8px" }}>🛒 Buying Grihapuja Samagri Online</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>
              Most items on this list are available as ready-made &quot;grihapuja samagri kits&quot; from online stores like Amazon, Flipkart, and dedicated puja stores — usually priced ₹500–₹1,500 depending on what&apos;s included. If buying online, order at least 3–4 days before your muhurat to allow for delivery and any last-minute substitutions. Fresh items — mango leaves, flowers, coconut, cow dung — are best bought locally on the day before.
            </p>
          </div>

          <h2 style={h2}>Types of Griha Pravesh</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:12, marginBottom:24 }}>
            {[["Apoorva","Entering a new home for the first time","#FDF0E6","#C8541A"],["Sapoorva","Re-entering after renovation or long absence","#E8F4EE","#1A5C42"],["Dwandwah","Entering after overcoming a calamity","#EFF6FF","#1D4ED8"]].map(([type,desc,bg,color])=>(
              <div key={type} style={{ background:bg, border:`1px solid ${color}30`, borderRadius:12, padding:"14px 16px" }}>
                <p style={{ fontSize:14, fontWeight:700, color, margin:"0 0 4px" }}>{type}</p>
                <p style={{ fontSize:12, color:"#374151", margin:0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Complete Samagri List with Quantities</h2>
          <div style={box(C.saffronLight,"rgba(200,84,26,0.2)")}>
            <p style={{ fontSize:13, fontWeight:700, color:C.saffron, marginBottom:12 }}>🛕 MAIN PUJA ITEMS</p>
            {[["Kalash (brass/copper)","1","For Varuna puja"],["Coconut","3","For kalash, Ganesha, and entry"],["Mango leaves","21","For kalash decoration"],["Gangajal","250ml","For sanctification"],["Red cloth","1 metre","For chowki"],["Cow dung","Small amount","For threshold purification"],["Flowers — marigold","2 kg","Decoration and offering"],["Agarbatti (incense)","2 packs","Throughout puja"],["Ghee (clarified butter)","500g","For havan and diya"],["Camphor (kapoor)","50g","For aarti"],["Havan samagri","500g","For the havan kund"]].map(([item,qty,use])=>(
              <div key={item} style={{ display:"grid", gridTemplateColumns:"2fr 1fr 2fr", gap:8, padding:"8px 0", borderBottom:"1px solid rgba(200,84,26,0.1)", fontSize:13, color:C.charcoal }}>
                <span style={{ fontWeight:500 }}>{item}</span>
                <span style={{ color:C.saffron, fontWeight:600 }}>{qty}</span>
                <span style={{ color:C.gray }}>{use}</span>
              </div>
            ))}
          </div>

          <div style={box(C.forestLight,"rgba(26,92,66,0.2)")}>
            <p style={{ fontSize:13, fontWeight:700, color:C.forest, marginBottom:12 }}>🍎 OFFERINGS & PRASAD</p>
            {[["Panchamrit ingredients","—","Milk, curd, honey, ghee, sugar"],["Fruits","5 types","Seasonal fruits for offering"],["Coconut ladoo or kheer","—","For prasad distribution"],["Paan (betel leaf)","11","For deity offering"],["Supari","11","For offering"],["Turmeric (haldi)","100g","For threshold"],["Kumkum (sindoor)","50g","For threshold and women"],["Akshat (rice)","250g","For offering throughout"]].map(([item,qty,use])=>(
              <div key={item} style={{ display:"grid", gridTemplateColumns:"2fr 1fr 2fr", gap:8, padding:"8px 0", borderBottom:"1px solid rgba(26,92,66,0.1)", fontSize:13, color:C.charcoal }}>
                <span style={{ fontWeight:500 }}>{item}</span>
                <span style={{ color:C.forest, fontWeight:600 }}>{qty}</span>
                <span style={{ color:C.gray }}>{use}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Step-by-Step Griha Pravesh Process</h2>
          {[
            ["Choose the muhurat","Consult a pandit for the auspicious date and time. Typically performed in the morning (Brahma muhurat). Uttarayan (Jan-June) is considered most auspicious."],
            ["Day before — clean and decorate","Thoroughly clean the entire house. Draw rangoli at the entrance. Hang mango leaf torans on all doors. Place flowers."],
            ["Havan","The ceremony begins with a havan (sacred fire). The family sits around the havan kund while the pandit performs Vastu shanti and Griha Pravesh mantras. Offer ghee and samagri into the fire."],
            ["Kalash puja","Perform puja of the kalash (water pot) representing Varuna, god of water. This sanctifies all water in the home."],
            ["First entry ritual","The lady of the house (eldest married woman) enters first. She pushes a vessel of rice or grain with her right foot over the threshold — symbolizing bringing abundance into the home. Husband follows."],
            ["Boiling milk","Boil milk until it overflows on all four sides of the stove. This is called Griha Pravesh milk boiling and symbolizes prosperity overflowing in the home."],
            ["Vastu puja and room-by-room blessings","Perform puja in each room, starting with the puja room. Light a diya in every room."],
            ["Prasad and feast","Conclude with prasad distribution and a vegetarian meal for all guests."],
          ].map(([title,desc],i)=>(
            <div key={i} style={{ display:"flex", gap:16, marginBottom:20 }}>
              <div style={{ width:32, height:32, borderRadius:"50%", background:C.forestLight, border:`2px solid ${C.forest}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:C.forest, flexShrink:0, marginTop:2 }}>{i+1}</div>
              <div>
                <h3 style={{ fontFamily:F.serif, fontSize:17, fontWeight:600, color:C.charcoal, marginBottom:6, marginTop:0 }}>{title}</h3>
                <p style={s}>{desc}</p>
              </div>
            </div>
          ))}

          <h2 style={h2}>Vastu Tips for New Home Entry</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            {["Enter from the North or East door if possible","Place a Ganesha idol near the main entrance","Keep the prayer room in the North-East corner","Do not enter with shoes on the first day","Keep the kitchen in the South-East direction"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="griha-pravesh-puja-samagri-list" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"48px 24px" }}>
          <div style={{ maxWidth:600, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:32, marginBottom:12 }}>🏠</p>
            <h2 style={{ fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:10 }}>Save this ritual for your family</h2>
            <p style={{ fontSize:15, color:C.gray, marginBottom:24 }}>Document your family&apos;s Griha Pravesh tradition with your own samagri list and family notes.</p>
            <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", padding:"13px 28px", borderRadius:12, fontSize:14, fontWeight:600, textDecoration:"none" }}>
              Save in Parampara — Free →
            </Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
