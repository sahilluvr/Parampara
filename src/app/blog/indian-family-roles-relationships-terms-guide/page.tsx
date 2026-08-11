import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Indian Family Relationship Terms — A Complete Guide to Hindi, Punjabi & Regional Names for Relatives | OurParampara",
  description: "Unlike English, which uses 'uncle' and 'aunt' generically, Hindi and most Indian languages have entirely distinct, specific terms for each relationship based on whether the relative is from the mother",
  keywords: "Indian family relationship terms, Hindi names for relatives, what do you call your relatives in Hindi, Indian family relations chart, Punjabi family relation names",
  openGraph: { title: "Indian Family Relationship Terms — A Complete Guide to Hindi, Punjabi & Regional Names for Relatives", description: "Unlike English, which uses 'uncle' and 'aunt' generically, Hindi and most Indian languages have entirely distinct, specific terms for each relationship based on whether the relative is from the mother", url: "https://www.ourparampara.com/blog/indian-family-roles-relationships-terms-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-family-roles-relationships-terms-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=indian-family-roles-relationships-terms-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-family-roles-relationships-terms-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="indian-family-roles-relationships-terms-guide" title="Indian Family Relationship Terms — A Complete Guide to Hindi, Punjabi & Regional Names for Relatives" description="Unlike English, which uses 'uncle' and 'aunt' generically, Hindi and most Indian languages have entirely distinct, specific terms for each relationship based on whether the relative is from the mother" date="2026-06-20" category="Heritage Guide"
        faqs={[
          { q: "Why does Hindi have so many different words for English 'uncle' and 'aunt'?", a: "Unlike English, which uses 'uncle' and 'aunt' generically, Hindi and most Indian languages have entirely distinct, specific terms for each relationship based on whether the relative is from the mother's or father's side, older or younger than the parent, and by blood or marriage. For example: Chacha (father's younger brother), Tau/Taya (father's older brother), Mama (mother's brother), Phupha/Fufa (father's sister's husband), and Mausa (mother's sister's husband) are all different people that English would simply call 'uncle.' This precision reflects how central extended family structure and respect-by-relationship is in Indian culture." },
          { q: "What are the Hindi terms for relatives on the father's side?", a: "Father's side relations: Dada (paternal grandfather), Dadi (paternal grandmother), Tau/Taya (father's older brother), Tai (Tau's wife), Chacha (father's younger brother), Chachi (Chacha's wife), Bua/Phupho (father's sister), Fufa (Bua's husband). Children of Chacha/Tau are called cousin-brothers/sisters but in close families are often simply called Bhai (brother) or Didi/Behen (sister), reflecting how closely paternal cousins are integrated into the immediate family structure." },
          { q: "What are the Hindi terms for relatives on the mother's side?", a: "Mother's side relations: Nana (maternal grandfather), Nani (maternal grandmother), Mama (mother's brother), Mami (Mama's wife), Mausi/Maasi (mother's sister), Mausa (Mausi's husband). The mother's side terms are generally simpler than the father's side (which distinguishes older vs. younger brothers with Tau vs. Chacha) — reflecting historical patrilineal family structures where the father's extended family typically lived together and needed more granular distinction." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>👨‍👩‍👧‍👦</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Indian Family Relationship Terms — A Complete Guide to Hindi, Punjabi & Regional Names for Relatives</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 20, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Anyone who has tried explaining their family tree to a non-Indian friend knows the challenge: English has exactly one word for 'uncle' and one for 'aunt,' while Hindi, Punjabi, Tamil, Bengali, and nearly every Indian language have a dozen distinct, precise terms — each one telling you exactly how that person is related, from which side of the family, and often their relative age. This guide brings together the most common Indian family relationship terms in one place, useful for NRI families raising children who may not have grown up using them daily.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Father's side: Dada/Dadi (grandparents), Tau/Tai (father's older brother & wife), Chacha/Chachi (father's younger brother & wife), Bua/Fufa (father's sister & husband). Mother's side: Nana/Nani (grandparents), Mama/Mami (mother's brother & wife), Mausi/Mausa (mother's sister & husband). In-law terms: Sasur/Saas (spouse's parents), Sala/Sali (spouse's siblings), Devar/Jeth (husband's brothers), Nanad (husband's sister).</p>
          </div>

          <h2 style={h2}>Grandparents</h2>
          <p style={s}>Dada (paternal grandfather), Dadi (paternal grandmother), Nana (maternal grandfather), Nani (maternal grandmother). Many regional languages use similar but distinct sounds — Tamil uses Thatha/Paati, Telugu uses Tata/Ammamma, while Bengali uses Dadu/Didima and Dadu/Thakurma depending on the side, reflecting the same father-side/mother-side distinction found in Hindi.</p>
          <h2 style={h2}>Father's Side Relations</h2>
          <p style={s}>Tau or Taya (father's older brother — given special respect as senior to one's own father), Tai (Tau's wife), Chacha (father's younger brother), Chachi (Chacha's wife), Bua or Phupho (father's sister), Fufa (Bua's husband). The distinction between Tau and Chacha based on whether they're older or younger than your father is unique to many Indian languages and reflects the importance of birth order within extended families.</p>
          <h2 style={h2}>Mother's Side Relations</h2>
          <p style={s}>Mama (mother's brother — traditionally holds a special, affectionate role in Indian families, particularly at weddings and ceremonies), Mami (Mama's wife), Mausi or Maasi (mother's sister), Mausa (Mausi's husband). The Mama-Bhanja (maternal uncle-nephew/niece) relationship carries particular ceremonial significance in many Hindu rituals, including specific roles in weddings.</p>
          <h2 style={h2}>In-Law Relations After Marriage</h2>
          <p style={s}>Sasur (father-in-law), Saas (mother-in-law), Sala (wife's brother), Sali (wife's sister), Jeth (husband's older brother), Devar (husband's younger brother), Jethani (Jeth's wife), Devrani (Devar's wife), Nanad (husband's sister), Nandoi (Nanad's husband). These terms become central to daily family life after marriage and carry their own specific etiquette and relationship dynamics in joint family settings.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your children are growing up outside India and don't use these terms daily, teaching them even the core ones — Dada, Dadi, Nana, Nani, Mama, Chacha — preserves a small but meaningful piece of how Indian families understand relationship and respect. Document your own family's specific relationship map on OurParampara so the connections stay clear across generations and continents.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-family-roles-relationships-terms-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>👨‍👩‍👧‍👦</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, names and heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
