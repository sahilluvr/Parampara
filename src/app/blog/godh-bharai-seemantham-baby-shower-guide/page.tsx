import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Godh Bharai & Seemantham — Complete Indian Baby Shower Ceremony Guide | OurParampara",
  description: "Complete Godh Bharai / Seemantham guide — regional names across India, best month and muhurat, rituals and samagri, gift ideas, and how families celebrate this pregnancy blessing ceremony.",
  keywords: "Godh Bharai ceremony, Seemantham rituals, Indian baby shower traditions, Godh Bharai muhurat, Valaikappu ceremony, Godh Bharai gift ideas, baby shower puja vidhi",
  openGraph: {
    title: "Godh Bharai & Seemantham — Complete Indian Baby Shower Ceremony Guide | OurParampara",
    description: "Complete Godh Bharai / Seemantham guide — regional names across India, best month and muhurat, rituals and samagri, gift ideas, and how families celebrate this pregnancy blessing ceremony.",
    url: "https://www.ourparampara.com/blog/godh-bharai-seemantham-baby-shower-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=godh-bharai-seemantham-baby-shower-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=godh-bharai-seemantham-baby-shower-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/godh-bharai-seemantham-baby-shower-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="godh-bharai-seemantham-baby-shower-guide"
        title="Godh Bharai & Seemantham — Complete Indian Baby Shower Ceremony Guide | OurParampara"
        description="Complete Godh Bharai / Seemantham guide — regional names across India, best month and muhurat, rituals and samagri, gift ideas, and how families celebrate this pregnancy blessing ceremony."
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
            <div style={{ fontSize:40, marginBottom:14 }}>🤰</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Godh Bharai &amp; Seemantham — Complete Indian Baby Shower Ceremony Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 27, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Godh Bharai — literally "filling the lap" — is the Indian equivalent of a baby shower, celebrated during a woman's first pregnancy to bless the mother-to-be and the unborn child. Known by different names across regions — Seemantham in Kerala and Andhra Pradesh, Valaikappu in Tamil Nadu, Dohale Jevan in Maharashtra, and Shrimant in Gujarat — the ceremony shares a common purpose: surrounding the expectant mother with love, blessings, and protection.</p>

          <h2 style={h2}>Regional Names &amp; Variations</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Seemantham","Kerala, Andhra Pradesh, Telangana — hair-parting ritual, husband actively participates"],["Valaikappu","Tamil Nadu — bangle ceremony, mother-to-be wears colourful glass bangles"],["Dohale Jevan","Maharashtra — favourite-food ceremony, mother is served her favourite dishes"],["Shrimant","Gujarat — gift-giving ceremony with traditional songs"],["Godh Bharai","North India — lap-filling ceremony with fruits, sweets, and gifts"],["Swad","Bengal — taste/craving ceremony focused on the mother's food preferences"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Best Time to Perform Godh Bharai</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            {[["7th month","Most preferred — after completion of 6 months of pregnancy"],["9th month","Also commonly chosen, especially in North India"],["8th month","Strictly avoided in most traditions"],["Preferred days","Thursdays and Fridays are considered highly auspicious"],["Preferred nakshatras","Rohini, Mrigashira, and Pushya"],["Avoid","Pitru Paksha and Amavasya (new moon) days"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:12, padding:"7px 0", borderBottom:`1px solid rgba(200,84,26,0.1)` }}>
                <p style={{ fontSize:13, fontWeight:600, color:C.saffron, margin:0, minWidth:120, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Godh Bharai Samagri &amp; Essentials</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["New saree or outfit for the mother-to-be","Bangles — often colourful glass bangles","Flowers for hair and decoration","Fruits — a variety, especially coconut and bananas","Sweets for distribution","Roli, chandan, and turmeric","Diya and incense","Small gifts for the baby — clothes, toys","Decorated swing or chair for the mother","Auspicious thread (mauli)","Kajal/eyeliner for the baby (traditional gift)","Items for the favourite-food spread (regional)"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>How the Ceremony Unfolds</h2>
          {[
            "The mother-to-be dresses in new, festive clothing — often a saree gifted for the occasion",
            "Elder women of the family perform a short puja, applying tilak and offering blessings",
            "In Seemantham, the husband traditionally parts the mother's hair and applies kumkum — a moment symbolizing the couple's shared journey into parenthood",
            "The mother-to-be is seated on a decorated chair or swing, often surrounded by flowers and lights",
            "Women gather around her, sing traditional songs, and offer gifts — bangles, sweets, baby items",
            "In Valaikappu, the mother's hands and arms are adorned with rows of colourful bangles — the sound is believed to soothe the baby",
            "A special meal featuring the mother's favourite foods is served (Dohale Jevan tradition)",
            "The ceremony concludes with aarti and distribution of prasad to all guests",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Gift Ideas</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Traditional bangles and jewellery for the mother",
              "Sarees or comfortable maternity wear",
              "Baby essentials — clothes, blankets, soft toys",
              "Handwritten letters or recorded video messages for the baby to receive later",
              "Books on parenting or children's storybooks to start a home library",
              "Practical postpartum care items — for the mother's recovery period",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Record who attended, what songs were sung, and the blessings given during this ceremony — this becomes a beautiful keepsake to share with your child when they're older, showing how loved they were even before birth.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Planning for after the baby arrives? See our guides on <Link href="/blog/namkaran-naming-ceremony-guide" style={{ color:C.saffron, fontWeight:600 }}>Namkaran</Link> and <Link href="/blog/annaprashan-ceremony-guide" style={{ color:C.saffron, fontWeight:600 }}>Annaprashan</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="godh-bharai-seemantham-baby-shower-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🤰</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve this special moment forever</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save photos, songs, and blessings from your Godh Bharai on OurParampara — for your child to treasure one day.</p>
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
