import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Perform Satyanarayan Katha at Home — Complete Guide | Parampara",
  description: "Complete step-by-step guide to Satyanarayan Katha at home — samagri list, ritual steps, mantras, prasad recipe and muhurat guide.",
  keywords: "Satyanarayan Katha at home, Satyanarayan puja steps, satyanarayan samagri list, satyanarayan prasad recipe, satyanarayan katha vidhi",
  openGraph: { title: "How to Perform Satyanarayan Katha at Home", description: "Complete step-by-step guide with samagri list and prasad recipe.", url: "https://www.ourparampara.com/blog/how-to-perform-satyanarayan-katha", siteName: "Parampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=how-to-perform-satyanarayan-katha", width: 1200, height: 630, alt: "how-to-perform-satyanarayan-katha" }] },
  alternates: { canonical: "https://www.ourparampara.com/blog/how-to-perform-satyanarayan-katha" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Perform Satyanarayan Katha at Home",
  "description": "Complete step-by-step guide to Satyanarayan Katha at home",
  "totalTime": "PT3H",
  "step": [
    { "@type": "HowToStep", "name": "Prepare samagri", "text": "Gather all required puja items the day before." },
    { "@type": "HowToStep", "name": "Morning preparation", "text": "Clean the house and set up puja sthal." },
    { "@type": "HowToStep", "name": "Kalash sthapana", "text": "Set up the sacred water pot with coconut." },
    { "@type": "HowToStep", "name": "Ganesh puja", "text": "Begin with Ganesh puja before the main katha." },
    { "@type": "HowToStep", "name": "Satyanarayan katha", "text": "Read or listen to all five chapters of the katha." },
    { "@type": "HowToStep", "name": "Prasad distribution", "text": "Distribute panchamrit and sheera prasad to all." },
  ],
};

export default function Page() {
  return (
    <>
      <BlogStructuredData
        slug="how-to-perform-satyanarayan-katha"
        title="How to Perform Satyanarayan Katha at Home — Complete Guide | Parampara"
        description="Complete step-by-step guide to Satyanarayan Katha at home — samagri list, ritual steps, mantras, prasad recipe and muhurat guide."
        date="2026-06-01"
        category="Festival Guide"
        faqs={[
          { q: "What is Satyanarayan Katha?", a: "Satyanarayan Katha is a Hindu devotional ritual involving the reading of sacred stories about Lord Satyanarayan (a form of Vishnu), performed to seek blessings for prosperity and wellbeing." },
          { q: "What samagri is needed for Satyanarayan Katha?", a: "Key items include panchamrit, flowers, tulsi leaves, panchameva (five dry fruits), bananas, roli, chandan, akshat, diya, ghee, and prasad ingredients like semolina, sugar, and banana." },
          { q: "How long does Satyanarayan Katha take?", a: "A complete Satyanarayan Katha typically takes 2-3 hours including the puja setup, recitation of all five chapters, and aarti." },
        ]}
      />
      <Navbar/>
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
        
        {/* Hero */}
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16, flexWrap:"wrap" }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Ritual Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:16 }}>🙏</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(28px,4vw,48px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:16, letterSpacing:"-0.5px" }}>
              How to Perform Satyanarayan Katha at Home
            </h1>
            <p style={{ fontSize:16, color:"rgba(255,255,255,0.5)", lineHeight:1.8, marginBottom:20 }}>
              Complete step-by-step guide with samagri list, prasad recipe, and muhurat guidance
            </p>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span>
              <span>·</span>
              <span>June 1, 2026</span>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article style={{ maxWidth:760, margin:"0 auto", padding:"48px 24px 80px" }}>
          <BlogContent/>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="how-to-perform-satyanarayan-katha" category="Festival Guide"/>

        {/* CTA */}
        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"48px 24px" }}>
          <div style={{ maxWidth:600, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:32, marginBottom:12 }}>🪔</p>
            <h2 style={{ fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:10 }}>Document this ritual for your family</h2>
            <p style={{ fontSize:15, color:C.gray, marginBottom:24 }}>Save your family&apos;s version of Satyanarayan Katha — with your own samagri list, family notes, and traditions.</p>
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

function BlogContent() {
  const s = { fontSize:16, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:26, fontWeight:600, color:C.charcoal, marginBottom:16, marginTop:40 };
  const h3 = { fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:12, marginTop:28 };
  const li = { fontSize:15, color:"#374151", lineHeight:1.8, marginBottom:8 };
  const box = (bg: string, border: string) => ({ background:bg, border:`1px solid ${border}`, borderRadius:14, padding:"20px 24px", marginBottom:24 });
  return (
    <div>
      <p style={s}>Satyanarayan Katha is one of the most widely performed Hindu rituals in India — performed on auspicious occasions, housewarming, birthdays, and every Purnima. Yet many families find themselves asking: how exactly do we do it correctly?</p>
      <p style={s}>This guide covers everything — from the samagri list to the step-by-step process — based on the traditional North Indian method.</p>

      <h2 style={h2}>When to Perform Satyanarayan Katha</h2>
      <p style={s}>The katha can be performed on any of these occasions:</p>
      <ul style={{ paddingLeft:20, marginBottom:20 }}>
        {["Purnima (full moon) — most auspicious", "Housewarming (Griha Pravesh)", "Marriage anniversary", "Birthday or naming ceremony", "Completion of a wish or mannat", "Any Thursday (Brihaspativar)"].map(i=><li key={i} style={li}>{i}</li>)}
      </ul>

      <h2 style={h2}>Complete Samagri List</h2>
      <div style={box(C.saffronLight, "rgba(200,84,26,0.2)")}>
        <p style={{ fontSize:14, fontWeight:700, color:C.saffron, marginBottom:12, letterSpacing:0.5 }}>🛒 FOR PUJA STHAL</p>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
          {["Chowki (wooden platform)","Yellow cloth for chowki","Kalash (copper/brass pot)","Coconut for kalash","Mango leaves (5-7)","Gangajal","Panchamrit ingredients","Flowers — marigold & rose","Tulsi leaves","Incense sticks (agarbatti)","Camphor (kapoor)","Ghee diya + cotton wicks","Roli, akshat (rice)","Fruits — banana, apple","Panchmeva (dry fruits)","Supari (betel nuts)","Coins (small)"].map(i=>(
            <div key={i} style={{ display:"flex", gap:6, alignItems:"center" }}>
              <span style={{ color:C.saffron, fontSize:12 }}>✓</span>
              <span style={{ fontSize:13, color:C.charcoal }}>{i}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={box(C.forestLight, "rgba(26,92,66,0.2)")}>
        <p style={{ fontSize:14, fontWeight:700, color:C.forest, marginBottom:12, letterSpacing:0.5 }}>🍚 FOR SHEERA PRASAD</p>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
          {["Wheat flour (atta) — 250g","Ghee — 4 tbsp","Sugar — 200g","Milk — 1 cup","Cardamom powder","Saffron (optional)","Raisins and cashews","Banana — 2 (add last)"].map(i=>(
            <div key={i} style={{ display:"flex", gap:6, alignItems:"center" }}>
              <span style={{ color:C.forest, fontSize:12 }}>✓</span>
              <span style={{ fontSize:13, color:C.charcoal }}>{i}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 style={h2}>Step-by-Step Ritual Process</h2>
      {[
        ["1. Morning Preparation (1-2 hours before)", "Take a bath and wear clean clothes. Clean the puja area and set up the chowki. Place the yellow cloth and arrange all samagri neatly."],
        ["2. Kalash Sthapana", "Fill the copper kalash with water and Gangajal. Place mango leaves around the rim and place a coconut on top. Put a few coins, supari, and flowers inside. This kalash represents Lord Vishnu."],
        ["3. Sheera (Prasad) Preparation", "Heat ghee in a pan. Roast wheat flour on low flame until golden and aromatic (10-15 minutes). Add milk gradually while stirring. Add sugar, cardamom, and mix well. Add mashed banana last. Keep warm."],
        ["4. Ganesh Puja", "Always begin with Ganesh puja. Offer flowers, akshat, and roli to Ganesha. Recite Ganesh Vandana. Light diya and incense."],
        ["5. Sankalp (Vow)", "The head of family takes a small amount of water, rice, and flowers in their palm and states the purpose of the katha — what wish, occasion, or mannat led to this puja."],
        ["6. Satyanarayan Katha — 5 Chapters", "The katha has 5 chapters (adhyayas). Read each chapter aloud or have a pandit read them. Family members sit and listen throughout. Ring the ghanta (bell) between chapters."],
        ["7. Aarti", "After the katha, perform Satyanarayan aarti. Light camphor and wave it in circular motion. All family members participate."],
        ["8. Prasad Distribution", "Distribute sheera prasad to everyone. It is very important that everyone present receives and eats the prasad — this is the core teaching of the katha."],
      ].map(([title, desc], i) => (
        <div key={i} style={{ display:"flex", gap:16, marginBottom:20 }}>
          <div style={{ width:32, height:32, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:C.saffron, flexShrink:0, marginTop:2 }}>{i+1}</div>
          <div>
            <h3 style={{ ...h3, marginTop:0, fontSize:17 }}>{title.replace(/^\d+\. /, "")}</h3>
            <p style={s}>{desc}</p>

          {/* Quick answer box — for AI engine citation */}
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Satyanarayan Katha requires: a clean puja space, Satyanarayan idol or image, panchamrit (milk, curd, ghee, honey, sugar), flowers, tulsi, fruits, and prasad ingredients (semolina, sugar, banana, ghee). The katha takes 2-3 hours, involves reading all five chapters, and concludes with aarti and prasad distribution. It can be self-performed by the family using the katha book.</p>
          </div>

          </div>
        </div>
      ))}

      <h2 style={h2}>Common Mistakes to Avoid</h2>
      <ul style={{ paddingLeft:20, marginBottom:20 }}>
        {["Never miss giving prasad to anyone present — this is the most important rule","Do not serve prasad before the katha is complete","Banana must be added to sheera at the very end (not during cooking)","The person who takes Sankalp must be present throughout","Do not consume non-vegetarian food on the day of katha"].map(i=><li key={i} style={li}>❌ {i}</li>)}
      </ul>

      <h2 style={h2}>Preserve Your Family's Version</h2>
      <p style={s}>Every family has their own way of performing Satyanarayan Katha — different regional variations, additional items, family-specific mantras. The Parampara app lets you document your family&apos;s exact version so it never gets lost.</p>

      <div style={{ background:"#F5F3FF", border:"1px solid rgba(124,58,237,0.2)", borderRadius:12, padding:"16px 20px" }}>
        <p style={{ fontSize:14, fontWeight:600, color:"#7C3AED", marginBottom:6 }}>💡 Pro tip</p>
        <p style={{ fontSize:14, color:"#374151", margin:0 }}>Record an elder family member explaining the ritual in their own words. A voice memo of your Dadi explaining why she adds saffron to the sheera is more valuable than any written guide.</p>
      </div>
    </div>
  );
}
