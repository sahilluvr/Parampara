import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Haldi Ceremony — Complete Guide to the Indian Wedding Turmeric Ritual | OurParampara",
  description: "Complete Haldi ceremony guide — the spiritual significance of turmeric, how Haldi is performed for bride and groom, regional variations, what to wear, Haldi paste recipes, and why this pre-wedding ritual is among India's most joyful.",
  keywords: "Haldi ceremony guide, Indian wedding Haldi, turmeric ceremony wedding India, Haldi paste recipe wedding, Haldi ceremony significance, Haldi outfit ideas, pre-wedding Haldi ritual, Haldi ceremony traditions",
  openGraph: { title: "Haldi Ceremony — Complete Guide to the Indian Wedding Turmeric Ritual | OurParampara", description: "Complete Haldi ceremony guide — the spiritual significance of turmeric, how Haldi is performed for bride and groom, regional variations, what to wear, Haldi paste recipes, and why this pre-wedding ritual is among India's most joyful.", url: "https://www.ourparampara.com/blog/haldi-ceremony-wedding-complete-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=haldi-ceremony-wedding-complete-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=haldi-ceremony-wedding-complete-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/haldi-ceremony-wedding-complete-guide" },
};

export default function Page() {
  return (
    <>
      <BlogStructuredData
        slug="haldi-ceremony-wedding-complete-guide"
        title="Haldi Ceremony — Complete Guide to the Indian Wedding Turmeric Ritual | OurParampara"
        description="Complete Haldi ceremony guide — the spiritual significance of turmeric, how Haldi is performed for bride and groom, regional variations, what to wear, Haldi paste recipes, and why this pre-wedding ritual is among India's most joyful."
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌿</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Haldi Ceremony</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 10, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>
        </section>
        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Haldi ceremony — the application of turmeric paste to the bride and groom before the wedding — is one of India's oldest and most universally observed pre-wedding rituals, practiced across Hindu, Muslim (as Ubtan ceremony), and Sikh families. It is simultaneously one of the most spiritually significant and most joyful pre-wedding events: turmeric's golden colour is auspicious, its antiseptic properties are practical, and the act of family members lovingly applying the paste while singing creates a tenderness that cuts through the stress of wedding preparations.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Significance of Turmeric</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Turmeric (Haldi) holds a unique place in Indian culture — it is simultaneously a spice, a medicine, a cosmetic, and a sacred substance. In Hindu tradition, the golden-yellow colour of turmeric represents prosperity, health, and purity. Turmeric is offered to deities, applied to the threshold of homes, used in all major rituals, and has been used as a bridal beautification treatment for centuries — traditional Indian aesthetics prize the golden glow that turmeric gives to skin. Modern dermatology confirms that curcumin (turmeric's active compound) has genuine anti-inflammatory and skin-brightening properties.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Haldi Ritual — How It Is Performed</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Haldi ceremony is typically performed the morning of the wedding day, or the day before. The bride and groom each have their ceremony separately at their respective homes (for a traditional wedding) or together (for modern celebrations). The bride or groom sits on a wooden plank or chair decorated with marigolds. Family members — beginning with the eldest and moving to younger relatives — each take some Haldi paste and apply it to the bride/groom's face, arms, and feet while blessings are spoken. The specific sequence of who applies first varies by family tradition.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Haldi Paste — Regional Variations</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Basic paste:</strong> Turmeric powder + water or raw milk — the simplest and most traditional form</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>North Indian Ubtan:</strong> Turmeric + chickpea flour (besan) + mustard oil + rose water + sandalwood powder — creates a thick paste that is both beautifying and fragrant</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>South Indian:</strong> Turmeric + coconut oil + a small amount of lime — the coconut oil base suits the climate</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Rajasthani:</strong> Turmeric + rose water + saffron + milk cream — the saffron addition reflects the region's royal wedding traditions</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Bengali:</strong> Gaye Holud uses turmeric mixed with mustard oil, applied by the maternal uncle first in a specific ceremonial sequence</li>
          </ul>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Haldi Ceremony Customs Across India</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}><strong>Bengali Gaye Holud:</strong> The most elaborate regional Haldi — performed separately for bride and groom, the bride's ceremony called 'Ai Buro Bhaat' the night before, the turmeric brought from the groom's home as a gift. The applying of Holud by each family member is accompanied by specific songs (Holud songs) and the ululation of women.</p>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}><strong>Punjabi Vatna:</strong> The Vatna paste (besan-mustard oil-turmeric) is applied with much playfulness — family members often apply it more vigorously than gently, creating the Haldi's characteristic chaos and laughter. The Vatna is traditionally applied to both bride and groom by their respective families on the morning of the wedding.</p>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}><strong>Maharashtrian Halad Chadavane:</strong> The turmeric ceremony in Maharashtra has specific songs and a specific protocol — the married women of the family apply first, followed by others. The turmeric is mixed with oil and sometimes with a specific flower.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>What to Wear at a Haldi Ceremony</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The advice is universal and practical: wear clothes you don't mind ruining. Turmeric stains are permanent. Most Haldi ceremonies now have a colour theme — yellow, white, or pastels — with guests wearing clothes they can sacrifice. The bride or groom typically wears a simple yellow outfit (often chosen specifically for the Haldi and retired afterward). Guests wearing white creates the most photogenic results — the turmeric stains on white fabric become a kind of joyful documentation of the ceremony.</p>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(184,146,42,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#B8922A", margin:"0 0 6px" }}>💡 Photograph and document your Haldi traditions</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>The specific Haldi paste recipe your family uses, who applies first, the specific songs sung — these are family wedding heritage. Record them on OurParampara.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="haldi-ceremony-wedding-complete-guide" category="Wedding Guide"/>
        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌿</p>
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
