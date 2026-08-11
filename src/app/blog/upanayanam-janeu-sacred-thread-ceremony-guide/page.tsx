import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Upanayanam (Janeu) Sacred Thread Ceremony — Complete Guide with Vidhi & Samagri | OurParampara",
  description: "Complete Upanayanam/Janeu ceremony guide — significance of the sacred thread, ideal age, samagri list, step-by-step vidhi, and what the three strands of the janeu represent.",
  keywords: "Upanayanam ceremony guide, Janeu ceremony vidhi, sacred thread ceremony Hindu, Upanayanam samagri list, Janeu ceremony age, Upanayanam significance",
  openGraph: {
    title: "Upanayanam (Janeu) Sacred Thread Ceremony — Complete Guide with Vidhi & Samagri | OurParampara",
    description: "Complete Upanayanam/Janeu ceremony guide — significance of the sacred thread, ideal age, samagri list, step-by-step vidhi, and what the three strands of the janeu represent.",
    url: "https://www.ourparampara.com/blog/upanayanam-janeu-sacred-thread-ceremony-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=upanayanam-janeu-sacred-thread-ceremony-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=upanayanam-janeu-sacred-thread-ceremony-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/upanayanam-janeu-sacred-thread-ceremony-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="upanayanam-janeu-sacred-thread-ceremony-guide"
        title="Upanayanam (Janeu) Sacred Thread Ceremony — Complete Guide with Vidhi & Samagri | OurParampara"
        description="Complete Upanayanam/Janeu ceremony guide — significance of the sacred thread, ideal age, samagri list, step-by-step vidhi, and what the three strands of the janeu represent."
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
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Samskara Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🧵</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Upanayanam (Janeu) Sacred Thread Ceremony — Complete Guide with Vidhi &amp; Samagri</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 21, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Upanayanam — also called Janeu, Poonal, Yajnopavita, or the sacred thread ceremony — is one of the most significant of the sixteen Hindu samskaras. It marks a boy's formal initiation into the path of learning, where he receives the sacred thread (janeu) and is taught the Gayatri Mantra by an elder or guru. This ceremony is considered a "second birth" — after Upanayanam, the boy is called "Dvija" (twice-born).</p>

          <h2 style={h2}>What is the Janeu (Sacred Thread)</h2>
          <p style={s}>The janeu is a thread made of three strands, traditionally cotton, worn over the left shoulder and across the chest. Each of the three strands carries symbolic meaning — commonly understood as a triple debt or commitment: to one's parents and ancestors, to one's teachers and the pursuit of knowledge, and to society and one's duties (dharma). Wearing the janeu is a daily reminder of these responsibilities throughout the wearer's life.</p>

          <h2 style={h2}>Ideal Age for Upanayanam</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 10px" }}>Traditional age guidelines (vary by community):</p>
            {[["Brahmin boys","Age 5, 7, or 8 — earliest among the varnas, reflecting early access to Vedic education"],["Kshatriya boys","Age 6, 9, or 11"],["Vaishya boys","Age 8 or 12"],["Modern practice","Many families perform it anytime between ages 7-16, often timed around school holidays or alongside a wedding (for the groom, if not done earlier)"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:12, padding:"7px 0", borderBottom:`1px solid rgba(200,84,26,0.1)` }}>
                <p style={{ fontSize:13, fontWeight:600, color:C.saffron, margin:0, minWidth:120, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>{v}</p>
              </div>
            ))}
          </div>
          <p style={s}>The exact muhurat is determined using the Panchang, taking into account the boy's nakshatra and the season — Vasant Ritu (spring) is traditionally considered most auspicious.</p>

          <h2 style={h2}>Upanayanam Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Janeu (sacred thread, multiple sets)","Deer skin or cloth (mृgacharma, often substituted with cloth)","Danda (wooden staff)","Kamandalu (water pot)","Bhiksha cloth/bag (for symbolic alms-seeking)","Havan samagri and kund","Ghee and samidha (wood for havan)","New clothes — typically saffron or white dhoti","Umbrella (chatra) — traditional accessory","Kalash with water","Rice, roli, chandan, akshat","Coconut and fruits for offering","Items for Go Puja (cow worship)"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Step-by-Step Ceremony</h2>
          {[
            "Pre-ceremony rituals begin a few days earlier in many families — including a haircut (chudakarana) for the boy and preparatory pujas",
            "On the main day, the boy takes a ritual bath, symbolizing purification before the new phase of life",
            "Ganesh Puja is performed first, seeking blessings for an obstacle-free ceremony",
            "Go Puja (worship of a cow) is performed — the cow represents abundance and is honored before the main rites",
            "The father (or designated elder/guru) ties the janeu over the boy's left shoulder for the first time",
            "The Gayatri Mantra is whispered into the boy's ear — this is the spiritual heart of the ceremony, often called Brahmopadesham",
            "The boy is given a danda (staff), kamandalu (water pot), and bhiksha bag — symbolically representing his new identity as a Brahmachari (student)",
            "A symbolic 'bhiksha' (alms) round is performed — the boy asks for alms from family members, usually rice or money, symbolizing humility and the student's dependence on the community",
            "A havan (fire ritual) is performed with mantras for the boy's wisdom and long life",
            "Family elders bless the boy, often gifting books, money, or jewelry",
            "A feast follows, with extended family and community members invited",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Caring for the Janeu After the Ceremony</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "The janeu is worn continuously, including while sleeping and bathing in most traditions",
              "It is changed periodically — typically during specific festivals like Raksha Bandhan/Shravani Upakarma, or if it becomes soiled or torn",
              "Each thread strand carries spiritual significance, and discarding an old janeu follows specific customs — usually placed in a sacred tree or water body, not thrown in regular trash",
              "Many families teach the boy to recite the Gayatri Mantra daily as part of his routine going forward",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Record who performed the Brahmopadesham (whispered the Gayatri Mantra), which family elders attended, and any family-specific customs followed during the ceremony — these details connect a child to their lineage in a way that's easy to forget over the years.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Planning other samskaras? See our guides on <Link href="/blog/namkaran-naming-ceremony-guide" style={{ color:C.saffron, fontWeight:600 }}>Namkaran</Link> and <Link href="/blog/mundan-ceremony-complete-guide" style={{ color:C.saffron, fontWeight:600 }}>Mundan</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="upanayanam-janeu-sacred-thread-ceremony-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🧵</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your son&apos;s Upanayanam memories</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Document the ceremony, who attended, and family blessings on OurParampara — for him to read someday.</p>
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
