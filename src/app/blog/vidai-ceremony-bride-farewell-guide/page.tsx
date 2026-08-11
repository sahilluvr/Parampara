import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vidai Ceremony — Complete Guide to the Indian Bride's Wedding Farewell | OurParampara",
  description: "Complete Vidai ceremony guide — the significance of the bride's farewell, the rice-throwing tradition, the Doli, the cries that are expected, and how this most emotionally intense Indian wedding ritual is observed across different communities.",
  keywords: "Vidai ceremony guide, Indian wedding Vidai, bride farewell Indian wedding, Vidai rice throwing, Vidai traditions India, Doli ceremony wedding, bride leaving home ceremony, wedding Vidai significance",
  openGraph: { title: "Vidai Ceremony — Complete Guide to the Indian Bride's Wedding Farewell | OurParampara", description: "Complete Vidai ceremony guide — the significance of the bride's farewell, the rice-throwing tradition, the Doli, the cries that are expected, and how this most emotionally intense Indian wedding ritual is observed across different communities.", url: "https://www.ourparampara.com/blog/vidai-ceremony-bride-farewell-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=vidai-ceremony-bride-farewell-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=vidai-ceremony-bride-farewell-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/vidai-ceremony-bride-farewell-guide" },
};

export default function Page() {
  return (
    <>
      <BlogStructuredData
        slug="vidai-ceremony-bride-farewell-guide"
        title="Vidai Ceremony — Complete Guide to the Indian Bride's Wedding Farewell | OurParampara"
        description="Complete Vidai ceremony guide — the significance of the bride's farewell, the rice-throwing tradition, the Doli, the cries that are expected, and how this most emotionally intense Indian wedding ritual is observed across different communities."
        date="2026-07-10"
        category="Wedding Guide"
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Wedding Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🕊️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Vidai Ceremony</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 10, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>
        </section>
        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Vidai — the bride's farewell from her parental home — is arguably the most emotionally intense moment in the Indian wedding. After the Saptapadi (seven steps) and the completion of all wedding rituals, the new bride touches her parents' feet, turns to leave, and throws handfuls of rice and coins backward over her shoulder as she walks to the car or Doli that will take her to her new home. She does not look back. Her parents stand at the door watching her go. Everyone is weeping — the bride, her parents, her siblings, her female relatives. And in this weeping, something profound is acknowledged: that this moment of joy (a wedding) is also a moment of irreversible change.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Significance of Vidai</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Vidai is not simply a logistical departure — it is a ritual death and rebirth. The bride leaves behind her identity as her parents' daughter and enters a new identity as her husband's wife and her in-laws' daughter-in-law. In the traditional Indian family system, this transition was total — a woman who married left her family and became part of another family's household. Even in modern nuclear family contexts, the Vidai carries the weight of this ancient transition.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Rice Throwing — Why?</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>As the bride leaves, she throws puffed rice (lawa or kheel) backward over her shoulder toward her parental home. This act has a specific meaning: the bride is throwing prosperity and abundance back to her parents, symbolically paying back the gift of her upbringing with blessings of plenty. The rice represents fertility, wealth, and the Lakshmi energy that the bride carries — she is sharing it with her parents even as she leaves. The bride throws the rice three times without looking back — looking back is considered inauspicious, a reluctance to fully embrace her new life.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Doli — The Decorated Palanquin</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>In traditional weddings, the bride left in a Doli — a decorated palanquin carried by four men, which protected her from public view during the transition between her two homes. The Doli is now largely symbolic — converted to a decorated car or SUV in modern weddings — but many traditional families still use a ceremonial Doli structure for the first phase of the departure, before transferring to a car. The Doli represents the liminal space between the bride's two worlds: she is no longer entirely her parents' daughter, not yet fully her husband's wife.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Regional Vidai Traditions</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Punjabi Vidai:</strong> The bride throws rice three times; her brothers carry the Doli/car door; her father and maternal uncle walk her to the car; the intensity of emotion is culturally unrestrained — weeping loudly is expected and honoured</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Bengali Bidai:</strong> The bride holds a betel leaf and coconut; she looks back once at her parental home; specific Bidai songs are sung by the women of the family</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Tamilian Vidayal:</strong> The bride's feet are washed and she steps on a white cloth as she leaves; the mother-in-law welcomes her at the threshold with specific rituals</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Gujarati Kelad:</strong> The bride's brothers walk her to the vehicle and their role in this ceremony is specifically honoured with gifts</li>
          </ul>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>First Arrival at the New Home — Grihapravesh</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Vidai has a mirror ceremony at the groom's home: the bride's arrival (Grihapravesh or Vaastu Pravesh). The bride arrives at the threshold, often with pots of rice on her head or in her arms — rice representing Lakshmi, prosperity coming into the new home with her. She tips the rice pot forward, spilling the rice into the house, symbolising abundance pouring in. She steps into the home with her right foot first, on a plate of red kunkum water, leaving red footprints — the footprints of Lakshmi entering the home.</p>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(184,146,42,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#B8922A", margin:"0 0 6px" }}>💡 Honour the Vidai properly</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>The Vidai is one of the most important family photographs of a wedding — the parents' faces as their daughter leaves. Ensure your photographer is briefed to capture this moment carefully. And document the specific Vidai traditions of your family on OurParampara — the specific songs, the specific sequence — for future generations.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="vidai-ceremony-bride-farewell-guide" category="Wedding Guide"/>
        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🕊️</p>
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
