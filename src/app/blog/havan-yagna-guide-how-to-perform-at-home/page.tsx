import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Havan & Yagna — Complete Guide to Performing the Sacred Fire Ritual at Home | OurParampara",
  description: "Complete guide to performing Havan or Yagna at home — what Havan is, samagri list, step-by-step vidhi, types of Havan for different purposes, and simplified home Havan for NRI families.",
  keywords: "how to perform Havan at home, Yagna guide home, Havan samagri list, Havan vidhi step by step, types of Havan Hindu, home Havan NRI families, sacred fire ritual India",
  openGraph: { title: "Havan & Yagna — Complete Guide to Performing the Sacred Fire Ritual at Home", description: "Complete guide to performing Havan or Yagna at home — what Havan is, samagri list, step-by-step vidhi, types of Havan for different purposes, and simplified home Havan for NRI families.", url: "https://www.ourparampara.com/blog/havan-yagna-guide-how-to-perform-at-home", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=havan-yagna-guide-how-to-perform-at-home", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=havan-yagna-guide-how-to-perform-at-home"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/havan-yagna-guide-how-to-perform-at-home" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="havan-yagna-guide-how-to-perform-at-home" title="Havan & Yagna — Complete Guide to Performing the Sacred Fire Ritual at Home" description="Complete guide to performing Havan or Yagna at home — what Havan is, samagri list, step-by-step vidhi, types of Havan for different purposes, and simplified home Havan for NRI families." date="2026-06-04" category="Ritual Guide"
        faqs={[
          { q: "What is the difference between Havan and Yagna?", a: "Havan and Yagna are often used interchangeably, but technically a Yagna is a larger, more elaborate fire ritual that may last days and require multiple priests and complex rituals. A Havan is a shorter, simpler fire offering performed at home or in a temple for specific purposes. For home practice, Havan is the more common and accessible term." },
          { q: "What samagri is needed for a basic home Havan?", a: "Basic Havan samagri includes: Havan kund (fire pit), mango wood pieces, Havan samagri mix (available at Indian stores — contains herbs, dried fruits, grains), ghee, camphor, roli, akshat, flowers, and the specific samagri for the purpose of the Havan (e.g., sesame seeds for Shradh, specific herbs for health Havans)." },
          { q: "Can Havan be performed without a priest at home?", a: "Yes, a simplified Havan can be performed by any devout family member. Many families perform Havan for Griha Pravesh, new year, birthdays, and festival occasions without a priest using printed Havan vidhi guides. For complex purposes like Vastu Shanti, Navagraha shanti, or Mrityunjaya Havan, a qualified priest adds significant value." },
        ]}
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
            <div style={{ fontSize:40, marginBottom:14 }}>🔥</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Havan & Yagna — Complete Guide to Performing the Sacred Fire Ritual at Home</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 4, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Havan — the sacred fire ritual — is one of the oldest continuous practices in human civilization. Rooted in the Vedic tradition of offering to Agni (the fire god) as a messenger between humans and the divine, Havan purifies the space, the participants, and the intention behind it. The crackling of the fire, the smell of ghee and herbs, the Sanskrit mantras — together they create an atmosphere that has been described across cultures and millennia as uniquely sacred.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>A basic home Havan requires a Havan kund, mango wood, Havan samagri mix, and ghee. Light the fire with camphor, add mango wood, then offer ghee and samagri into the fire with Swaha after each mantra. The complete process takes 30-60 minutes. A priest is helpful but not required for a basic home Havan.</p>
          </div>

          <h2 style={h2}>What Havan Is — and Why It&apos;s Performed</h2>
          <p style={s}>In Vedic understanding, fire (Agni) is the divine witness and the cosmic purifier. Offerings made into fire are believed to reach the divine directly — bypassing physical limitations of time and space. The Havan creates a purified zone (yagnashala) that drives away negative energies, blesses the space and participants, and generates positive vibrations. Scientifically, the burning of specific herbs and woods creates air purifying compounds — the smoke of mango wood, ghee, and Havan herbs has measurable antimicrobial properties, which explains why Havan has historically been performed after illness, after death, and when moving into new spaces.</p>

          <h2 style={h2}>Types of Havan and Their Purposes</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Griha Pravesh Havan","Performed when entering a new home — purifies the space and invokes divine blessing on the family&apos;s new beginning"],["Ganesh Havan","Performed at the beginning of important undertakings — business launches, exam seasons, new ventures — invoking Ganesha to remove obstacles"],["Navgraha Shanti Havan","Performed to balance the nine planetary influences in one&apos;s horoscope — typically recommended by a Jyotishi for specific life challenges"],["Mrityunjaya Havan","A powerful Havan dedicated to Lord Shiva for health, longevity, and protection from serious illness"],["Satyanarayan Havan","Combined with Satyanarayan Katha — performed for prosperity and family wellbeing"],["Vastu Shanti Havan","Performed to harmonise the energies of a home or business space according to Vastu principles"],["Anniversary/Birthday Havan","Many families perform a short Havan on birthdays and anniversaries as a blessing ritual"]].map(([k,v])=>(
              <div key={k} style={{ padding:"10px 14px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}`, display:"flex", gap:12 }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:160, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Havan Samagri — Complete List</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Havan kund — a square or pyramid-shaped fire pit made of copper, clay, or brick","Mango wood (aam ki lakdi) — the primary fuel; mango wood has specific purifying properties","Havan samagri mix — available at Indian stores; contains dried herbs, seeds, and grains","Pure ghee — for offerings; each offering into the fire is accompanied by ghee","Camphor (kapoor) — for lighting the fire initially","Roli, akshat, and flowers for the accompanying puja","Sesame seeds (til) — especially for Shradh or ancestral Havans","Specific additional items based on the purpose of the Havan (e.g., specific herbs for health Havans)"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Havan Vidhi — Step by Step</h2>
          {["Clean and prepare the Havan space — ideally in an open or well-ventilated area","Set up the Havan kund on a raised platform covered with sand or soil","Arrange mango wood pieces in a criss-cross pattern inside the kund","Perform a short Ganesh puja before beginning — Ganesha is invoked at the start of all auspicious activities","Light camphor and place under the wood to start the fire","Once the fire is established, begin the Havan offerings — add ghee first, then samagri mix, with &apos;Swaha&apos; (meaning &apos;I offer this&apos;) after each mantra","Continue the offerings rhythmically — the priest or family lead recites mantras, participants add ghee and samagri","Conclude with a Purnahuti — the final offering, typically a coconut wrapped in cloth dipped in ghee","Perform aarti and distribute prasad"].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family performs Havan for specific occasions — a particular family birthday, the founding anniversary of a family business, or an annual Vastu Havan — document the mantras used, the specific samagri added, and the occasion. These family Havan traditions are among the most sacred and specific heritage worth preserving.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="havan-yagna-guide-how-to-perform-at-home" category="Ritual Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🔥</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your family&apos;s ceremonies, rituals and memories on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
