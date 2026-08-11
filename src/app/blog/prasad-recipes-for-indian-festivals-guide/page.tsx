import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Prasad Recipes for Indian Festivals — Panchamrit, Panjiri, Kheer & More | OurParampara",
  description: "Complete guide to prasad recipes for major Indian festivals — Panchamrit, Panjiri, Suji Halwa, Chana, Kheer, Modak and how to prepare them correctly for puja offerings.",
  keywords: "prasad recipes Indian festivals, how to make panchamrit, panjiri recipe Navratri, suji halwa prasad, modak recipe Ganesh Chaturthi, festival prasad guide India",
  openGraph: { title: "Prasad Recipes for Indian Festivals — Panchamrit, Panjiri, Kheer & More", description: "Complete guide to prasad recipes for major Indian festivals — Panchamrit, Panjiri, Suji Halwa, Chana, Kheer, Modak and how to prepare them correctly for puja offerings.", url: "https://www.ourparampara.com/blog/prasad-recipes-for-indian-festivals-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=prasad-recipes-for-indian-festivals-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=prasad-recipes-for-indian-festivals-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/prasad-recipes-for-indian-festivals-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="prasad-recipes-for-indian-festivals-guide" title="Prasad Recipes for Indian Festivals — Panchamrit, Panjiri, Kheer & More" description="Complete guide to prasad recipes for major Indian festivals — Panchamrit, Panjiri, Suji Halwa, Chana, Kheer, Modak and how to prepare them correctly for puja offerings." date="2026-06-06" category="Ritual Guide"
        faqs={[
          { q: "What is Panchamrit and how is it made?", a: "Panchamrit (five nectars) is a sacred mixture of five ingredients: milk, curd, ghee, honey, and sugar. Equal parts of each are mixed together. It is used to bathe idols during abhishekam and then distributed as prasad. The quantities are typically 1 tablespoon each for home puja, scaled up for larger ceremonies." },
          { q: "What is the prasad for Ganesh Chaturthi?", a: "The traditional prasad for Ganesh Chaturthi is Modak — steamed rice flour dumplings filled with coconut and jaggery. Lord Ganesha is believed to love modaks. Both steamed (ukadiche modak) and fried modak are offered. Coconut ladoo and besan ladoo are also common Ganesh Chaturthi prasad." },
          { q: "Can prasad be made at home without special ingredients?", a: "Yes. Most prasad recipes use simple home ingredients. Suji (semolina) halwa requires only suji, ghee, sugar, and water. Panjiri uses wheat flour, ghee, sugar, and dry fruits. The key requirement is that the cook should be in a clean state of body and mind, and the prasad should be offered to the deity before being consumed." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🍚</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Prasad Recipes for Indian Festivals — Panchamrit, Panjiri, Kheer & More</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 6, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Prasad — the blessed food offered to the deity and then distributed to devotees — is one of the most tangible expressions of Indian ritual life. Every puja, every festival, every ceremony involves specific prasad. And every family has its own recipes — the exact proportion of ghee in the halwa, the specific dry fruits added to panjiri, the consistency of kheer that generations have agreed is correct. These recipes are family heritage as specific and irreplaceable as any ritual.</p>
          <h2 style={h2}>Panchamrit — The Universal Puja Offering</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 10px" }}>Panchamrit Recipe</p>
            <p style={{ fontSize:13, color:"#374151", margin:"0 0 8px" }}>Ingredients (for home puja): 1 tbsp milk, 1 tbsp curd (yogurt), 1 tsp ghee, 1 tsp honey, 1 tsp sugar</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Mix all five ingredients together. Use to bathe the idol or Shiva lingam. Then collect the used Panchamrit and distribute as prasad. Do not add water. The mixture should be fresh for each puja.</p>
          </div>
          <h2 style={h2}>Suji Halwa — Most Universal Prasad</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 8px" }}>Ingredients (serves 6-8): 1 cup suji (semolina), 1/2 cup ghee, 3/4 cup sugar, 2.5 cups water, cardamom, raisins, cashews</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Heat ghee in a heavy pan. Roast suji on low flame until golden and fragrant (8-10 minutes). Separately boil water with sugar until dissolved. Carefully add the sugar water to the roasted suji — it will splutter. Add cardamom, raisins, and cashews. Stir until it leaves the sides of the pan. Cover and rest for 5 minutes.</p>
          </div>
          <h2 style={h2}>Festival-Specific Prasad Guide</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Navratri","Panjiri (wheat flour roasted in ghee with dry fruits and sugar), sabudana khichdi, kuttu puri with aloo, halwa-puri-chana on Ashtami"],["Ganesh Chaturthi","Modak (steamed rice flour dumplings with coconut-jaggery filling) — Lord Ganesha&apos;s favourite. Also coconut ladoo."],["Satyanarayan Katha","Panchamrit, banana, and a specific prasad made with semolina, banana, sugar, and milk — the traditional Satyanarayan prasad"],["Diwali","Kheel batasha (puffed rice and sugar discs) for Lakshmi puja, then sweets distributed to neighbours"],["Ekadashi","No grain prasad — fruits, milk sweets, and sabudana-based items"],["Shiva puja (Shravan)","Bilva leaves, bel fruit, milk, water — these are the offerings; bhang prasad is traditional at specific Shiva temples"],["Hanuman puja","Besan ladoo, boondi, and sindoor with jasmine oil — red is sacred to Hanuman"]].map(([k,v])=>(
              <div key={k} style={{ padding:"10px 14px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}`, display:"flex", gap:12 }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:130, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Document your family&apos;s prasad recipes</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Your grandmother&apos;s specific suji halwa recipe — the exact ghee ratio, whether she added milk, the specific moment she knew it was done — is different from everyone else&apos;s. These recipe variations are living heritage. Record them on OurParampara with her voice if possible.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="prasad-recipes-for-indian-festivals-guide" category="Ritual Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🍚</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your family&apos;s ceremonies, rituals and memories on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
