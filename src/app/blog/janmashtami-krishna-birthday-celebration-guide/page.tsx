import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Janmashtami — Complete Guide to Krishna's Birthday Celebrations & Rituals | OurParampara",
  description: "Complete Janmashtami guide — significance of Krishna Janmashtami, fasting rules, midnight puja vidhi, Dahi Handi tradition, jhanki decoration ideas, and family celebration traditions.",
  keywords: "Janmashtami rituals, Krishna Janmashtami significance, Janmashtami puja vidhi, Dahi Handi tradition, Janmashtami fasting rules, Janmashtami date 2026, Krishna birthday celebration",
  openGraph: {
    title: "Janmashtami — Complete Guide to Krishna's Birthday Celebrations & Rituals | OurParampara",
    description: "Complete Janmashtami guide — significance of Krishna Janmashtami, fasting rules, midnight puja vidhi, Dahi Handi tradition, jhanki decoration ideas, and family celebration traditions.",
    url: "https://www.ourparampara.com/blog/janmashtami-krishna-birthday-celebration-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=janmashtami-krishna-birthday-celebration-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=janmashtami-krishna-birthday-celebration-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/janmashtami-krishna-birthday-celebration-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="janmashtami-krishna-birthday-celebration-guide"
        title="Janmashtami — Complete Guide to Krishna\'s Birthday Celebrations & Rituals | OurParampara"
        description="Complete Janmashtami guide — significance of Krishna Janmashtami, fasting rules, midnight puja vidhi, Dahi Handi tradition, jhanki decoration ideas, and family celebration traditions."
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
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Festival Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🦚</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Janmashtami — Complete Guide to Krishna&apos;s Birthday Celebrations &amp; Rituals</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 8, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Janmashtami celebrates the birth of Lord Krishna — the eighth avatar of Vishnu — born at midnight on the eighth day (Ashtami) of the dark fortnight in Bhadrapada. Also known as Krishna Jayanti, Gokulashtami, or Sri Krishna Jayanti, it's celebrated with fasting, midnight prayers, elaborate decorations, and in many regions, the energetic Dahi Handi tradition.</p>

          <h2 style={h2}>Significance of Janmashtami</h2>
          <p style={s}>Krishna's birth is celebrated as the arrival of divine love, wisdom, and playful mischief into the world — a being who would later deliver the Bhagavad Gita's teachings on duty, devotion, and dharma. The midnight timing of celebrations directly commemorates the hour of his birth, described in scripture as occurring during a storm, in a prison cell, under extraordinary circumstances that protected the infant Krishna from danger.</p>

          <h2 style={h2}>Janmashtami Fasting Rules</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            {["Many devotees observe a full-day fast (Nirjala or fruit-only) until midnight","The fast is broken after the midnight puja, once Krishna's 'birth' is celebrated","Some families follow a less strict version — a single sattvic meal during the day","Foods typically avoided during the fast include grains, lentils, and regular salt — similar to Ekadashi fasting guidelines","Pregnant women, elderly, and those with health conditions are generally advised to modify the fast appropriately"].map(i=>(
              <div key={i} style={{ display:"flex", gap:8, padding:"6px 0" }}>
                <span style={{ color:C.saffron, fontSize:13 }}>•</span><span style={{ fontSize:13, color:"#374151" }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Midnight Puja Vidhi</h2>
          {[
            "Set up a decorated cradle (jhanki) for the Krishna idol — often elaborately themed, depicting scenes from Krishna's life in Vrindavan",
            "Decorate the home and puja area with flowers, lights, and small figurines of cows, gopis, and Krishna's friends",
            "As midnight approaches, gather the family near the jhanki for a final countdown to Krishna's birth",
            "At midnight, bathe the Krishna idol (Abhishekam) with panchamrit (a mixture of milk, curd, honey, ghee, and sugar)",
            "Dress the idol in new clothes and ornaments, place it in the decorated cradle, and gently rock it",
            "Perform aarti, ring bells, and chant 'Hare Krishna' or recite verses from the Bhagavad Gita",
            "Offer prasad — makhan-mishri (butter and sugar, Krishna's favourite), panjiri, and other sweets",
            "Break the fast with the offered prasad, sharing it among family members",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Dahi Handi Tradition</h2>
          <p style={s}>The day after Janmashtami (in many North Indian and Maharashtrian communities), Dahi Handi reenacts young Krishna's playful theft of curd and butter from neighbours' homes. Earthen pots filled with curd, butter, and other treats are hung high above the ground, and teams (govindas) form human pyramids to reach and break them — accompanied by music, dancing, and large community gatherings, especially prominent in Mumbai and Gujarat.</p>

          <h2 style={h2}>Decorating Jhanki at Home</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Create a small Vrindavan-themed setup — miniature cows, peacock feathers, flute, and a cradle for baby Krishna",
              "Use flowers (especially marigold and tulsi) and fairy lights for decoration",
              "Many families recreate scenes — Krishna in Yashoda's lap, the Govardhan lifting scene, or the Raas Leela with Radha",
              "Children often enjoy dressing up as Krishna or Radha, with peacock feather crowns and traditional outfits",
              "Footprints made of rice flour paste leading to the puja area symbolize baby Krishna's arrival into the home — a charming tradition for families with young children",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Janmashtami jhankis often become elaborate family projects, especially with children involved. Photograph each year's jhanki setup — over the years, this becomes a wonderful visual record of how your family's celebrations and children's creativity have evolved.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Continuing the festival season? See our <Link href="/blog/govardhan-puja-annakut-vidhi-guide" style={{ color:C.saffron, fontWeight:600 }}>Govardhan Puja guide</Link> for more Krishna-related celebrations.</p>
          </div>
        
<h2 style={h2}>The Story of Krishna's Birth</h2>
          <p style={s}>The story of Krishna's birth is filled with dramatic divine intervention: Kamsa had been warned that the eighth child of his sister Devaki would kill him. He imprisoned Devaki and Vasudeva and killed their seven children. On the eighth birth, at midnight, the prison doors miraculously opened, Vasudeva's chains fell away, and he carried the baby Krishna across the Yamuna river (which parted to let them through) to safety in Gokul with Nanda and Yashoda. The symbolism is rich — the divine incarnates when evil reaches its peak, entering the world in darkness and constraint to liberate it.</p>
<h2 style={h2}>Janmashtami at Mathura and Vrindavan</h2>
          <p style={s}>The Janmashtami celebrations at Mathura (Krishna's birthplace) and Vrindavan are the most elaborate in India — lasting several days before the actual Janmashtami. The Krishna Janmabhoomi temple in Mathura sees hundreds of thousands of pilgrims at midnight. Vrindavan's temples perform elaborate Abhishekam, dramatic presentations of Krishna's birth story (Leela performances), and swings the deity in decorated jhulas. The atmosphere is described by pilgrims as utterly joyful.</p>
<h2 style={h2}>Janmashtami Foods</h2>
          <p style={s}>Traditional Janmashtami foods reflect Krishna's love of dairy products: Mathura Ke Pede (the most famous prasad from Mathura — soft milk sweets), Panchamrit, Mishri and dry fruits distributed as prasad, Makkhan (butter — specially offered as Krishna's favourite), Charanamrit, and the sweets prepared with the first milk of the year. Many families make a full spread of dairy-based sweets for the midnight celebration.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Janmashtami traditions — the specific way the midnight puja is performed in your home, the specific bhajans sung to baby Krishna, the specific sweets made, and any tradition of the Jhula (cradle) decoration. Many families have beautifully decorated cradles for baby Krishna that have been in the family for generations — worth photographing and documenting.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="janmashtami-krishna-birthday-celebration-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🦚</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Save your jhanki, year after year</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Document your Janmashtami decorations, recipes, and midnight celebrations on OurParampara.</p>
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
