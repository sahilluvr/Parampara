import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Panch Dev Puja — The Five Deities of Hindu Household Worship | OurParampara",
  description: "The Panch Dev (five deities) represent the most essential divine principles in Hindu household worship: Ganesha (the remover of obstacles — invoked at the beginning of all undertakings), Vishnu/Naraya",
  keywords: "Panch Dev puja guide, five deities Hindu worship, Panchadeva traditions, Ganesha Vishnu Shiva Devi Surya, Hindu household puja guide, daily puja five deities",
  openGraph: { title: "Panch Dev Puja — The Five Deities of Hindu Household Worship", description: "The Panch Dev (five deities) represent the most essential divine principles in Hindu household worship: Ganesha (the remover of obstacles — invoked at the beginning of all undertakings), Vishnu/Naraya", url: "https://www.ourparampara.com/blog/panch-dev-puja-significance-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=panch-dev-puja-significance-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=panch-dev-puja-significance-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/panch-dev-puja-significance-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="panch-dev-puja-significance-guide" title="Panch Dev Puja — The Five Deities of Hindu Household Worship" description="The Panch Dev (five deities) represent the most essential divine principles in Hindu household worship: Ganesha (the remover of obstacles — invoked at the beginning of all undertakings), Vishnu/Naraya" date="2026-06-18" category="Ritual Guide"
        faqs={[
          { q: "What are the Panch Dev (five deities) of Hindu household worship?", a: "The Panch Dev (five deities) represent the most essential divine principles in Hindu household worship: Ganesha (the remover of obstacles — invoked at the beginning of all undertakings), Vishnu/Narayana (the sustainer of the universe — worshipped in his forms as Rama, Krishna, etc.), Shiva (the transformer — worshipped as the Shivalinga or Nataraja), Devi/Shakti (the divine feminine — worshipped in forms such as Durga, Lakshmi, Saraswati, Kali), and Surya (the Sun — the visible divine, source of all life and light). Each household typically has primary devotion to one or two of these but acknowledges all five." },
          { q: "Why do Hindu homes have a specific Kula Devata?", a: "The Kula Devata (family deity) is the specific deity who has been the tutelary deity of a lineage for generations — often associated with the ancestral village temple. The Kula Devata connection is maintained through specific rituals at the family temple, visits on specific occasions, and naming children with names connected to the deity. The Kula Devata is considered the protector of the entire family lineage — and the obligation to maintain this connection is transmitted from generation to generation." },
          { q: "How is daily puja performed at home for the Panch Dev?", a: "A simplified daily home puja for all five: clean the puja room; light a ghee lamp and incense; offer water from a small vessel to each deity (or a single combined puja space); offer flowers (fresh or dry flowers are both acceptable); recite the names or a simple mantra for each deity (Om Gan Ganeshaya Namaha, Om Namo Narayanaya, Om Namah Shivaya, Om Durgayai Namaha, Om Suryaya Namaha); perform aarti; distribute prasad. This complete 5-deity puja takes 15-20 minutes." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🛕</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Panch Dev Puja — The Five Deities of Hindu Household Worship</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The Panch Dev — the five deities of Hindu household worship — represent a comprehensive theology of the divine: the obstacle-remover, the sustainer, the transformer, the divine feminine, and the visible divine (sun). Together they cover the full spectrum of spiritual needs and divine principles that a Hindu family honours in daily practice.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Panch Dev (five deities): Ganesha (obstacles), Vishnu (sustenance), Shiva (transformation), Devi/Shakti (divine feminine), Surya (the Sun). Daily household puja acknowledges all five. Most families have primary devotion to one deity (Kula Devata) while maintaining respect for all. Panchadeva puja: light lamp and incense, offer water and flowers to each, recite names/mantras, perform aarti.</p>
          </div>

          <h2 style={h2}>The Smarta Tradition</h2>
          <p style={s}>The Panch Dev puja comes primarily from the Smarta tradition — the Hindu theological school associated with Adi Shankaracharya (8th century CE) that teaches the unity of all forms of the divine and the worship of all five as manifestations of the one Brahman. Unlike the exclusively Vaishnava or Shaiva devotional traditions that focus on one deity, Smartas maintain the five-deity framework as a practical theology of divine unity. Most ordinary Hindu household puja practices in North India follow this Smarta structure even without knowing the theological background.</p>
          <h2 style={h2}>Surya — The Most Ancient Deity</h2>
          <p style={s}>Surya (the Sun) is the oldest deity in the Hindu pantheon — predating the Puranic period. Solar worship is one of the most ancient religious practices of humanity. In Hindu daily practice, Surya is honoured every morning through the Surya Namaskar (Sun salutation — both a yoga sequence and a prayer), the offering of Arghya (water held in the joined hands and poured toward the rising sun), and the recitation of the Gayatri Mantra — the most universally recited Hindu prayer, addressed to the divine Sun (Savitri).</p>
          <h2 style={h2}>How to Build a Family Puja Space</h2>
          <p style={s}>A dedicated puja space (puja ghar or puja room) helps establish a daily spiritual rhythm for the family. Essential elements: a clean, raised shelf or altar; idols or images of the deities the family worships; a permanent ghee lamp or oil lamp; a vessel for water; a small container for flowers; and a thali for aarti. The puja space becomes the spiritual anchor of the home — the place the family returns to in times of difficulty and celebration. Even a small corner shelf with a lamp and an image creates a puja space.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific puja space — which deities are worshipped, the specific idols that have been in the family for generations, the specific daily puja sequence. The puja ghar of an Indian household is the most intimate expression of the family's spiritual life — its specific contents, the specific objects that have been there for decades, are worth photographing and documenting.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="panch-dev-puja-significance-guide" category="Ritual Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🛕</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, rituals and heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
