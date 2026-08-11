import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bengali Bhog — Khichuri, Labra & Durga Puja Feast Recipes & Traditions | OurParampara",
  description: "Complete guide to Bengali Bhog — the sacred community feast of Durga Puja. Khichuri recipe, Labra recipe, Chutney, Payesh, and the tradition of cooking and sharing Bhog during the five days of Durga Puja.",
  keywords: "Bengali Bhog guide, Khichuri recipe Durga Puja, Labra recipe Bengali, Durga Puja Bhog traditions, Bengali community feast, Niramish Khichuri recipe, Bengali Durga Puja food",
  openGraph: { title: "Bengali Bhog — Khichuri, Labra & Durga Puja Feast Recipes & Traditions", description: "Complete guide to Bengali Bhog — the sacred community feast of Durga Puja. Khichuri recipe, Labra recipe, Chutney, Payesh, and the tradition of cooking and sharing Bhog during the five days of Durga P", url: "https://www.ourparampara.com/blog/bengali-durga-puja-bhog-khichuri-recipe", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=bengali-durga-puja-bhog-khichuri-recipe", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=bengali-durga-puja-bhog-khichuri-recipe"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/bengali-durga-puja-bhog-khichuri-recipe" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="bengali-durga-puja-bhog-khichuri-recipe" title="Bengali Bhog — Khichuri, Labra & Durga Puja Feast Recipes & Traditions" description="Complete guide to Bengali Bhog — the sacred community feast of Durga Puja. Khichuri recipe, Labra recipe, Chutney, Payesh, and the tradition of cooking and sharing Bhog during the five days of Durga P" date="2026-06-16" category="Heritage Guide"
        faqs={[
          { q: "What is Bengali Bhog and when is it served during Durga Puja?", a: "Bengali Bhog is the sacred community meal prepared and distributed free to all during Durga Puja. It is offered to Goddess Durga as prasad and then distributed to all devotees — regardless of caste, class, or religion. Bhog is typically served on Ashtami and Navami — the two most important days of the five-day festival. The classic Bhog menu is Niramish (vegetarian) Khichuri, Labra, Chutney, and Payesh." },
          { q: "What is Niramish Khichuri and how is it different from regular Khichuri?", a: "Niramish Khichuri is the vegetarian (no onion, no garlic) version of the Bengali rice-and-lentil dish. It is specifically made as Bhog because the food offered to the goddess must be pure (sattvic). The Khichuri uses gobi (cauliflower), potatoes, green peas, and bay leaves but no onion or garlic. It is typically made with moong dal and gobindo bhog rice — a specific aromatic short-grain rice prized for Bhog." },
          { q: "What is Labra and why is it served with Bhog Khichuri?", a: "Labra is a mixed vegetable dish made with at least 7-8 different vegetables — typically potato, pumpkin, banana flower (mocha), plantain, drumstick, brinjal, and seasonal vegetables — cooked together with mustard and panch phoron (Bengali five-spice). It is the traditional companion to Bhog Khichuri and provides textural and flavour variety alongside the creamy khichuri." },
        ]}
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
            <div style={{ fontSize:40, marginBottom:14 }}>🍚</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Bengali Bhog — Khichuri, Labra & Durga Puja Feast Recipes & Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>

          <p style={s}>The smell of Khichuri cooking in giant karahis over wood fires is one of the defining sensory memories of Durga Puja for every Bengali. Bengali Bhog — the sacred community meal offered to Goddess Durga and then distributed free to all — is not just food. It is a statement of community, equality, and devotion. Everyone eats the same meal, from the same vessel, sitting together on the ground. The specific combination of Niramish Khichuri, Labra, Chutney, and Payesh has been the Durga Puja Bhog for generations.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Bengali Bhog consists of: Niramish Khichuri (vegetarian rice-lentil dish with cauliflower and potatoes, no onion or garlic), Labra (mixed 7-vegetable dish with panch phoron), Tomato or tamarind Chutney, and Payesh (rice pudding). Served on Ashtami and Navami of Durga Puja as prasad to all.</p>
          </div>

          <h2 style={h2}>Niramish Khichuri — The Bhog Recipe</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 10px" }}>Ingredients (serves 6-8)</p>
            <p style={{ fontSize:13, color:"#374151", margin:"0 0 12px" }}>Gobindo bhog or any aromatic short-grain rice — 2 cups, Moong dal — 1 cup, Cauliflower (florets), Potato (cubed), Green peas, Tomato, Bay leaves (3-4), Ginger paste, Cumin seeds, Turmeric, Ghee, Salt, Green chillies, and optionally panch phoron</p>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 8px" }}>Method</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Dry roast the moong dal until golden. Heat ghee in a large pot, temper with bay leaves, cumin, and ginger. Add vegetables and stir. Add washed rice and dal. Cover with water (2.5x volume). Add turmeric, salt. Cook on medium heat until soft and creamy. The Bhog Khichuri should be looser than regular khichuri — more like a thick porridge. Finish with extra ghee before serving.</p>
          </div>

          <h2 style={h2}>Labra — The Seven-Vegetable Companion</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:13, color:"#374151", margin:"0 0 10px" }}>Traditional Labra vegetables: Potato, Pumpkin, Plantain (kacha kola), Banana flower (mocha), Brinjal, Drumstick, Sweet potato, and any available seasonal vegetable. The rule is at least 5-7 different vegetables.</p>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 8px" }}>Method</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Heat mustard oil until smoking. Add panch phoron and dry red chillies. Add harder vegetables first (potato, drumstick), then softer ones (pumpkin, brinjal). Add turmeric, salt, a little sugar (Bengali cooking uses sugar in savoury dishes). Cook covered until all vegetables are soft and slightly caramelised. Finish with a splash of water and ghee.</p>
          </div>

          <h2 style={h2}>Payesh — The Sweet Conclusion</h2>
          <p style={s}>Payesh — Bengali rice pudding — is the essential conclusion to the Bhog meal. Made with gobindo bhog rice cooked slowly in full-fat milk with sugar and cardamom, it is both offered to Durga and distributed as prasad. The Bengali Payesh is thinner than North Indian kheer — more liquid, more delicate. Some families add date palm jaggery (nolen gur) instead of sugar for a distinctive caramel flavour unique to Bengali cuisine.</p>

          <h2 style={h2}>Bhog Traditions</h2>
          <ul style={{ paddingLeft:20 }}>
            {["In large pandals, Bhog is cooked by volunteers in giant quantities over wood fires — the scale and community effort is part of its spiritual meaning","At home Durga Pujas (Bonedi Bari pujas), the family&apos;s own Bhog recipe has been refined over generations — specific proportions, specific vegetables, specific day each dish is made","Eating Bhog while seated on the ground, served on banana leaf or stitched leaf plates, with the community — is the intended experience","Bengali diaspora communities worldwide organise Durga Puja with Bhog distribution — connecting the tradition to new generations growing up abroad"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family has a Bonedi Bari puja with its own Bhog recipe — document it in precise detail. The specific proportion of dal to rice, which vegetables your family&apos;s Labra always includes, whether you use Gobindo bhog or another rice variety — these specifics are what distinguish your family&apos;s heritage from any generic Durga Puja guide.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="bengali-durga-puja-bhog-khichuri-recipe" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🍚</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, recipes and heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
