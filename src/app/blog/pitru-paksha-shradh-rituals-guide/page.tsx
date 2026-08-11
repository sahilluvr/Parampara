import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pitru Paksha & Shradh — Complete Guide to Honoring Your Ancestors | OurParampara",
  description: "Complete Pitru Paksha guide — what Shradh means, who can perform it, step-by-step rituals, tarpan process, food for Brahmins, and how to document family ancestry.",
  keywords: "Pitru Paksha rituals, Shradh ceremony guide, tarpan vidhi, Pitru Paksha dates 2026, ancestor worship Hindu, Shradh samagri list",
  openGraph: {
    title: "Pitru Paksha & Shradh — Complete Guide to Honoring Your Ancestors | OurParampara",
    description: "Complete Pitru Paksha guide — what Shradh means, who can perform it, step-by-step rituals, tarpan process, food for Brahmins, and how to document family ancestry.",
    url: "https://www.ourparampara.com/blog/pitru-paksha-shradh-rituals-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=pitru-paksha-shradh-rituals-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=pitru-paksha-shradh-rituals-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/pitru-paksha-shradh-rituals-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="pitru-paksha-shradh-rituals-guide"
        title="Pitru Paksha & Shradh — Complete Guide to Honoring Your Ancestors | OurParampara"
        description="Complete Pitru Paksha guide — what Shradh means, who can perform it, step-by-step rituals, tarpan process, food for Brahmins, and how to document family ancestry."
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
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Heritage Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🕯️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Pitru Paksha &amp; Shradh — Complete Guide to Honoring Your Ancestors</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Pitru Paksha (also called Shraddha Paksha) is a 16-day period in the Hindu calendar dedicated to honoring one's ancestors (pitrs). Families perform Shradh — rituals of remembrance and offering — to express gratitude, seek blessings, and ensure the peace of departed family members' souls. It's one of the most significant periods for connecting with family history and lineage.</p>

          <h2 style={h2}>When is Pitru Paksha 2026</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 6px" }}>September 27 – October 10, 2026</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Pitru Paksha begins on Bhadrapada Purnima and ends on Sarva Pitru Amavasya (Mahalaya Amavasya) — the 16-day "fortnight of the ancestors" immediately preceding Navratri.</p>
          </div>

          <h2 style={h2}>What is Shradh</h2>
          <p style={s}>Shradh is a ritual performed to honor deceased ancestors — typically parents, grandparents, and other family elders — through offerings of food, water, and prayers. The word comes from "shraddha" (faith), reflecting the devotion with which descendants remember those who came before them. Shradh is traditionally performed on the tithi (lunar date) corresponding to the ancestor's death anniversary, falling within Pitru Paksha.</p>

          <h2 style={h2}>Who Can Perform Shradh</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Traditionally, the eldest son performs Shradh for parents — but this is not a strict requirement",
              "In the absence of sons, daughters, grandsons, or other close relatives can and do perform these rituals — many families have updated this practice",
              "If no family member is available or able, a Brahmin priest can perform Shradh on the family's behalf",
              "Married women generally perform Shradh for their own parents (not in-laws) on a separate date if needed",
              "The specific tithi for each ancestor is the most important factor — families maintain a record of death anniversaries by lunar date for this reason",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Shradh Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Black sesame seeds (til)","Kusha grass","Rice (akshat)","Water (for tarpan)","Barley (jau)","Ghee","Flowers — white preferred","Sacred thread (janeu)","Banana leaves (for serving food)","Food for Brahmin/priest meal","Cooked rice and dal (for crow/cow offering)","Silver or copper vessel for water"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Step-by-Step Shradh Ritual</h2>
          {[
            "Wake early, take a purifying bath, and wear clean clothes (often white)",
            "Sit facing south — the direction associated with ancestors in Hindu cosmology",
            "Perform Tarpan — offering water mixed with black sesame seeds to ancestors using cupped hands, letting it flow between the fingers (different from offerings to gods, which flow from the thumb side)",
            "Recite the names and gotra of ancestors being honored, along with prayers for their peace",
            "Prepare a simple meal — often rice, dal, and vegetables without onion/garlic — as an offering",
            "Place a portion of the food on a banana leaf for crows (believed to be messengers connecting to ancestors) and cows",
            "Invite a Brahmin priest for a meal, if possible — feeding a Brahmin is considered equivalent to feeding the ancestors directly",
            "Offer dakshina (donation) to the priest or to charity",
            "Conclude with a prayer of gratitude and a request for the family's continued wellbeing",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Sarva Pitru Amavasya — The Final Day</h2>
          <p style={s}>The last day of Pitru Paksha, Sarva Pitru Amavasya (also called Mahalaya Amavasya), is considered the most important. Shradh performed on this day is believed to honor all ancestors collectively — including those whose specific death dates may be unknown or forgotten. Many families who cannot perform Shradh on the exact tithi for each ancestor choose to do a combined ritual on this final day.</p>

          <h2 style={h2}>Preserving Ancestor Information</h2>
          <p style={s}>One of the biggest practical challenges families face during Pitru Paksha is simply remembering the correct tithi (lunar date) for each ancestor's Shradh — these dates shift every year on the Gregorian calendar and are easy to lose track of, especially across generations. Recording each ancestor's name, gotra, death tithi, and any specific rituals your family follows in a shared family record ensures this knowledge isn't lost when the person who currently "remembers" passes on.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Use Pitru Paksha as an opportunity to record family stories about ancestors — not just names and dates, but who they were, what they did, and memories family members have of them. This turns a ritual obligation into a meaningful act of preserving family history.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Building your family history? See our guide on <Link href="/blog/indian-family-tree-maker-guide" style={{ color:C.saffron, fontWeight:600 }}>making an Indian family tree</Link>.</p>
          </div>
        
<h2 style={h2}>Performing Shradh Abroad</h2>
          <p style={s}>For NRI families, the simplest form of Shradh that can be performed at home: on the tithi of the ancestor's death during Pitru Paksha, perform Tarpan (facing south, offer water mixed with sesame seeds while reciting: 'Asmaakam pitru-naama amuk-gotra amuk-sharma/varma/devi [ancestor's name and gotra] trupyataam idam tila-mishtam salilam tarpayami' three times). Offer food to a Brahmin or donate to charity in the ancestor's name. Light a diya for the ancestor in the evening.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Shradh traditions — the specific tithi observed for each family member, the specific foods prepared (the ancestor's favourite dishes are traditionally made), the Gaya pilgrimage if undertaken, and any specific prayers recited. Ancestor worship is one of the most emotionally resonant Indian rituals — the specific foods made for a grandmother's Shradh, the specific prayers — connect the living to the departed in the most tangible way.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="pitru-paksha-shradh-rituals-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🕯️</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your ancestors&apos; stories</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Record names, dates, gotra, and family stories on OurParampara — for generations to come.</p>
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
