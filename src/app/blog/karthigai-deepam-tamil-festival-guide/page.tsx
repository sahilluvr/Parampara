import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Karthigai Deepam — Complete Guide to Tamil Nadu's Festival of Lights | OurParampara",
  description: "Complete Karthigai Deepam guide — why it is called Tamil Diwali, the significance of the Thiruvannamalai hill beacon, how Tamil families light lamps at home, the Karthigai Vilakku tradition, and the astronomical significance of this Kartik full moon festival.",
  keywords: "Karthigai Deepam guide, Tamil festival of lights, Karthigai Deepam significance, Thiruvannamalai Karthigai, Tamil Diwali guide, Karthigai Vilakku tradition, Karthigai Deepam 2026 date, lamps Tamil festival",
  openGraph: { title: "Karthigai Deepam — Complete Guide to Tamil Nadu's Festival of Lights | OurParampara", description: "Complete Karthigai Deepam guide — why it is called Tamil Diwali, the significance of the Thiruvannamalai hill beacon, how Tamil families light lamps at home, the Karthigai Vilakku tradition, and the astronomical significance of this Kartik full moon festival.", url: "https://www.ourparampara.com/blog/karthigai-deepam-tamil-festival-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=karthigai-deepam-tamil-festival-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=karthigai-deepam-tamil-festival-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/karthigai-deepam-tamil-festival-guide" },
};

export default function Page() {
  return (
    <>
      <BlogStructuredData
        slug="karthigai-deepam-tamil-festival-guide"
        title="Karthigai Deepam — Complete Guide to Tamil Nadu's Festival of Lights | OurParampara"
        description="Complete Karthigai Deepam guide — why it is called Tamil Diwali, the significance of the Thiruvannamalai hill beacon, how Tamil families light lamps at home, the Karthigai Vilakku tradition, and the astronomical significance of this Kartik full moon festival."
        date="2026-07-10"
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪔</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Karthigai Deepam</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 10, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>
        </section>
        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Karthigai Deepam — the festival of lamps in the Tamil month of Karthigai (November-December) — is often called Tamil Nadu's Diwali, though its origins, timing, and significance are entirely distinct. While Diwali celebrates Rama's return and Lakshmi's night, Karthigai Deepam celebrates the moment Lord Shiva manifested as an infinite column of flame (the Jyotirlinga) between Brahma and Vishnu, and the full moon night of the Karthigai nakshatra when the divine light is most accessible to human perception. The festival's centrepiece is light — millions of clay lamps lit in homes, streets, and temples across Tamil Nadu, culminating in the lighting of a massive beacon atop the Thiruvannamalai hill.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Theological Significance — Shiva as Light</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Karthigai Deepam mythology: Brahma and Vishnu argued over which of them was supreme. Shiva appeared between them as an infinite column of light — the Jyotirlinga — with no top or bottom discernible. Brahma flew upward for thousands of years searching for the top; Vishnu dug downward as a boar searching for the bottom. Neither could find the end. Both admitted their inability to comprehend the infinite nature of Shiva-as-Light. This story — the Linga emerging as infinite light — is re-enacted symbolically every Karthigai Deepam through the millions of lamps lit across Tamil Nadu and the beacon on Thiruvannamalai's Annamalai hill.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Thiruvannamalai — The Mountain Beacon</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Thiruvannamalai Karthigai Deepam is one of India's most spectacular religious events. On the full moon day of Karthigai, a massive beacon (Maha Deepam) is lit atop the Annamalai hill — visible from 30km away, the beacon represents Shiva's infinite flame. The lighting is performed by priests from the Arunachaleswara Temple. Lakhs of devotees gather at the base of the hill for the lighting. The Girivalam — circumambulation of the mountain (14km) — is performed by hundreds of thousands of people on this night, the sacred barefoot walk that is Thiruvannamalai's defining spiritual practice.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Karthigai Vilakku — Lighting Lamps at Home</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The domestic Karthigai Deepam tradition involves lighting clay lamps (agal vilakku) throughout the home — in every room, on every step, along every wall, in the garden or courtyard. The effect is identical to Diwali but with a specifically Tamil aesthetic: more clay lamps, less electric lighting, and the specific ritual of first lighting the lamp in the puja room before proceeding throughout the house. Kolam (rangoli made from rice flour) patterns are drawn at the entrance. Specific Karthigai foods are prepared.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Karthigai Foods — Pori Urundai and Appam</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Pori Urundai (puffed rice balls):</strong> The quintessential Karthigai sweet — puffed rice mixed with jaggery and cardamom, shaped into balls. Every Tamil household makes these.</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Aval Vilayichathu:</strong> Beaten rice mixed with coconut and jaggery</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Paniyaram:</strong> Small rice-lentil cakes made in a special pan — a Karthigai speciality in some communities</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Coconut pori:</strong> Puffed rice mixed with coconut and jaggery — a Karthigai variation</li>
          </ul>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(184,146,42,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#B8922A", margin:"0 0 6px" }}>💡 Light the full house on Karthigai Deepam</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Unlike Diwali where the focus is on the entrance and puja room, the Karthigai tradition involves lighting every corner of the house — symbolising Shiva's light filling every space. The sight of a Tamil home fully lit with clay lamps on Karthigai night is one of India's most beautiful domestic visual traditions.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="karthigai-deepam-tamil-festival-guide" category="Festival Guide"/>
        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪔</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, rituals, and cultural heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
