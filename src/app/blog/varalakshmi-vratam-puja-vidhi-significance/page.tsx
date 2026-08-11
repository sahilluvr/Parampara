import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Varalakshmi Vratam — Complete Guide to Puja Vidhi & Significance | OurParampara",
  description: "Varalakshmi Vratam is a South Indian vrat observed primarily by married women on the Friday before the full moon of Shravan month. Dedicated to Goddess Varalakshmi — a form of Lakshmi who grants boons — it is celebrated with elaborate puja, decorated kalash, and specific food offerings. In 2026 it falls on August 21.",
  keywords: "Varalakshmi Vratam puja vidhi, Varalakshmi Vratam significance, Varalakshmi puja samagri, South Indian Lakshmi vrat, Varalakshmi fasting rules",
  openGraph: { title: "Varalakshmi Vratam — Complete Guide to Puja Vidhi & Significance", description: "Varalakshmi Vratam is a South Indian vrat observed primarily by married women on the Friday before the full moon of Shravan month. Dedicated to Goddess Varalakshmi — a form of Lakshmi who grants boons", url: "https://www.ourparampara.com/blog/varalakshmi-vratam-puja-vidhi-significance", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=varalakshmi-vratam-puja-vidhi-significance", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=varalakshmi-vratam-puja-vidhi-significance"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/varalakshmi-vratam-puja-vidhi-significance" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="varalakshmi-vratam-puja-vidhi-significance" title="Varalakshmi Vratam — Complete Guide to Puja Vidhi & Significance" description="Varalakshmi Vratam is a South Indian vrat observed primarily by married women on the Friday before the full moon of Shravan month. Dedicated to Goddess Varalakshmi — a form of Lakshmi who grants boons" date="2026-06-03" category="Festival Guide"
        faqs={[
          { q: "When is Varalakshmi Vratam 2026?", a: "Varalakshmi Vratam 2026 falls on Friday, August 21, 2026 — the second Friday before Shravan Purnima. It is primarily observed in Andhra Pradesh, Telangana, Tamil Nadu, and Karnataka." },
          { q: "What is offered to Varalakshmi?", a: "Offerings include turmeric, kumkum, flowers (especially lotus), fruits, coconut, betel leaves and nuts, gold or silver jewellery, silk thread tied around a kalash, and sweet pongal or payasam as prasad." },
          { q: "Can Varalakshmi Vratam be performed without a priest?", a: "Yes. Varalakshmi Vratam is traditionally performed by the woman of the house herself. A kalash (pot) is decorated with mango leaves, coconut, and a face drawn with turmeric as the representation of Varalakshmi. The puja includes 16 offerings, and the Varalakshmi Vratam Katha is read." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌺</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Varalakshmi Vratam — Complete Guide to Puja Vidhi & Significance</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 3, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Varalakshmi Vratam is one of the most important festivals for married women in South India — a dedicated vrat (fast) and puja to Goddess Varalakshmi, the form of Lakshmi who grants boons (vara) to her devotees. It is observed on the second Friday of the Shravan month, and while particularly prominent in Andhra Pradesh, Telangana, Tamil Nadu, and Karnataka, its reach extends to South Indian diaspora communities worldwide.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Varalakshmi Vratam 2026 is on August 21. Set up a kalash decorated with mango leaves and turmeric face as Varalakshmi. Offer 16 items (shodashopachara), read the Varalakshmi Katha, tie sacred thread on wrists, and share prasad of sweet pongal or payasam.</p>
          </div>
          <h2 style={h2}>Significance of Varalakshmi Vratam</h2>
          <p style={s}>The legend behind Varalakshmi Vratam tells of Charumathi, a devoted woman in the city of Kundina, who was visited in a dream by Goddess Varalakshmi instructing her to observe this vrat. After performing it faithfully, Charumathi and her family received divine blessings of health, prosperity, and happiness. The other women of the city followed, and the tradition has continued for generations. The vrat is primarily observed by married women for the wellbeing of their husbands and families, and by unmarried women for a good marriage.</p>
          <h2 style={h2}>Puja Vidhi</h2>
          {["Wake early, take a bath, and wear new or clean traditional clothes — silk saree is traditional","Clean the puja room and set up a wooden plank (mantapa) covered with a clean cloth","Place a kalash (copper or silver pot) filled with raw rice, topped with a coconut wrapped in silk cloth","Draw or paste a face on the kalash using turmeric paste — this represents Goddess Varalakshmi","Decorate with mango leaves, flowers, and turmeric-soaked thread tied around the kalash","Perform the 16-step shodashopachara puja — invoking, seating, bathing, clothing, adorning, and feeding the Goddess","Read or listen to the Varalakshmi Vratam Katha (the story of Charumathi)","Tie the sacred yellow thread (tied around the kalash during puja) on the right wrist — this is considered the main blessing of the vrat","Prepare and offer sweet pongal or payasam as prasad","Invite married women neighbours and relatives and give them turmeric, kumkum, flowers, and dakshina"].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>The specific jewellery offered to Varalakshmi, the particular payasam recipe used as prasad, the neighbours who join the celebration every year — these are the specific details that make your family&apos;s Varalakshmi Vratam unique. Document them on OurParampara.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="varalakshmi-vratam-puja-vidhi-significance" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌺</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your family&apos;s ceremonies, rituals and memories on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
