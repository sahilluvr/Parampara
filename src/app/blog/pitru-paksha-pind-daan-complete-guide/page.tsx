import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pitru Paksha & Pind Daan — Complete Guide to Ancestor Remembrance | OurParampara",
  description: "Complete Pitru Paksha and Pind Daan guide — the 16 days of ancestor remembrance, how to perform Pind Daan at home or in Gaya, Tarpan rituals, which tithi to observe for which ancestor, and the significance of feeding crows.",
  keywords: "Pitru Paksha guide, Pind Daan guide, Shraddha ritual guide, Pitru Paksha 2026 dates, how to do Tarpan, Gaya Pind Daan guide, ancestor remembrance Hindu, Sarvapitri Amavasya guide",
  openGraph: { title: "Pitru Paksha & Pind Daan — Complete Guide to Ancestor Remembrance | OurParampara", description: "Complete Pitru Paksha and Pind Daan guide — the 16 days of ancestor remembrance, how to perform Pind Daan at home or in Gaya, Tarpan rituals, which tithi to observe for which ancestor, and the significance of feeding crows.", url: "https://www.ourparampara.com/blog/pitru-paksha-pind-daan-complete-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=pitru-paksha-pind-daan-complete-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=pitru-paksha-pind-daan-complete-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/pitru-paksha-pind-daan-complete-guide" },
};

export default function Page() {
  return (
    <>
      <BlogStructuredData
        slug="pitru-paksha-pind-daan-complete-guide"
        title="Pitru Paksha & Pind Daan — Complete Guide to Ancestor Remembrance | OurParampara"
        description="Complete Pitru Paksha and Pind Daan guide — the 16 days of ancestor remembrance, how to perform Pind Daan at home or in Gaya, Tarpan rituals, which tithi to observe for which ancestor, and the significance of feeding crows."
        date="2026-07-10"
        category="Ritual Guide"
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
            <div style={{ fontSize:40, marginBottom:14 }}>🕊️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Pitru Paksha & Pind Daan</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 10, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>
        </section>
        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Pitru Paksha — the fortnight of the ancestors — is the 16-day period in the dark half of Ashwin month (September-October) dedicated entirely to the memory and welfare of departed family members. Every day of these 16 days corresponds to a specific death tithi (lunar date), and on the day matching the date of their death, specific rituals (Shraddha, Tarpan, and Pind Daan) are performed for the departed. The underlying belief: the souls of the departed continue to exist and are nourished by the prayers and food offerings of their living descendants. Neglecting Pitru Paksha is said to trouble the ancestors; maintaining it is said to bring their blessings to the family.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The 16 Days — Which Day for Which Ancestor</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Each day corresponds to a lunar tithi:</strong> If your father died on Ashtami (8th tithi), you perform his Shraddha on the Ashtami day of Pitru Paksha</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Sarvapitri Amavasya (last day):</strong> The most important day — all ancestors can be honoured simultaneously, regardless of their death tithi. If you don't know an ancestor's tithi, perform their Shraddha on this day.</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Mahalaya Amavasya:</strong> The final day of Pitru Paksha — the most widely observed Shraddha day in Bengal (where it begins the countdown to Durga Puja)</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Pratipada:</strong> For ancestors who died young, childless, or whose death date is unknown</li>
          </ul>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Tarpan — Water Offering</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Tarpan is the offering of water mixed with sesame seeds (til) and kusha grass from cupped hands, poured in the direction of the south (the direction of Yama, the god of death, and of the ancestors). The water offering is the most basic and universally practiced form of Pitru Paksha observance — even those who cannot perform the full Shraddha ritual can offer Tarpan at a river, lake, or even in a bucket of water at home. For each ancestor, specific mantras are recited while pouring the water.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Pind Daan — Rice Ball Offering</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Pind Daan is the offering of rice balls (pinda) made from cooked rice mixed with sesame seeds, honey, and milk — each pinda represents an ancestor. The pinda is offered at the sacred site (river, pond, Gaya, or a domestic sacred space) with specific mantras. If a crow eats the pinda, it is considered a sign of the ancestor's acceptance. Crows are believed to be messengers between the world of the living and the departed — a crow coming to accept the Pind Daan offering is one of the most awaited signs during Pitru Paksha.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Gaya — The Most Sacred Pitru Paksha Site</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Gaya in Bihar is the most sacred site for Pind Daan in Hinduism — a city whose entire economy revolves around the annual Pitru Paksha pilgrimage. The Vishnupad Temple (built over the footprint of Vishnu) is the central site for Pind Daan, performed on the ghats of the Falgu river. The Gaya Shraddha is said to liberate three generations of ancestors simultaneously — grandfather, father, and the person performing. Many Hindu families make a once-in-a-lifetime pilgrimage to Gaya to perform Pind Daan for their ancestors.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Performing Pitru Paksha at Home</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Morning ritual:</strong> Bathe early. Face south (the direction of ancestors). Sit on a kusha grass mat if possible.</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Prepare Tarpan water:</strong> Clean water in a copper vessel, mixed with sesame seeds and kusha grass</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Offer Tarpan:</strong> Pour water from cupped hands toward the south, reciting each ancestor's name and gotra</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Prepare pinda:</strong> Cooked rice balls mixed with sesame, honey, and milk</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Place pinda:</strong> On a banana leaf or clean ground, in the south-facing direction</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Invite crows:</strong> Place the pinda where crows can access it; if a crow eats, the offering is accepted</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Feed Brahmins or donate food to the poor:</strong> An essential element — the feeding of the living is as important as offerings to the departed</li>
          </ul>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(184,146,42,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#B8922A", margin:"0 0 6px" }}>💡 Document your family's Pitru Paksha practice</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Which ancestors does your family specifically honour? Which tithis? The Gotra and names used in the Tarpan mantras? Recording this on OurParampara ensures future generations can maintain the same tradition accurately.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="pitru-paksha-pind-daan-complete-guide" category="Ritual Guide"/>
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
