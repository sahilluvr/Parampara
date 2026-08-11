import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bene Israel — India's Jewish Community Traditions, Shabbat & Synagogue Heritage | OurParampara",
  description: "The Bene Israel are India's largest Jewish community, concentrated in Maharashtra. Their tradition holds they are descendants of Jews who arrived over 2,000 years ago. They maintained Jewish practices",
  keywords: "Bene Israel India guide, Indian Jewish community traditions, Cochin Jews heritage, Paradesi Synagogue Cochin, Indian Jewish Shabbat traditions, Baghdadi Jews India heritage",
  openGraph: { title: "Bene Israel — India's Jewish Community Traditions, Shabbat & Synagogue Heritage", description: "The Bene Israel are India's largest Jewish community, concentrated in Maharashtra. Their tradition holds they are descendants of Jews who arrived over 2,000 years ago. They maintained Jewish practices", url: "https://www.ourparampara.com/blog/indian-jewish-bene-israel-traditions-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-jewish-bene-israel-traditions-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=indian-jewish-bene-israel-traditions-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-jewish-bene-israel-traditions-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="indian-jewish-bene-israel-traditions-guide" title="Bene Israel — India's Jewish Community Traditions, Shabbat & Synagogue Heritage" description="The Bene Israel are India's largest Jewish community, concentrated in Maharashtra. Their tradition holds they are descendants of Jews who arrived over 2,000 years ago. They maintained Jewish practices" date="2026-06-16" category="Heritage Guide"
        faqs={[
          { q: "Who are the Bene Israel Jews?", a: "The Bene Israel are India's largest Jewish community, concentrated in Maharashtra. Their tradition holds they are descendants of Jews who arrived over 2,000 years ago. They maintained Jewish practices in relative isolation for centuries before contact with other Jewish communities in the 18th century. Most have emigrated to Israel." },
          { q: "Who are the Cochin Jews?", a: "The Cochin Jews have lived in Kerala for over 2,000 years. The Paradesi Synagogue in Kochi (1568) is the oldest active synagogue in the Commonwealth. The community now numbers fewer than 10 people in India — nearly all have emigrated to Israel. The synagogue is a major heritage site." },
          { q: "What is unique about Indian Jewish culture?", a: "Indian Jewish communities developed distinctive practices blending Jewish law with Indian culture. Bene Israel women wore sarees to synagogue. The Malida ceremony (offering to prophet Elijah using flattened rice) is unique to India. Cochin Jews incorporated Indian music into synagogue services." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>✡️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Bene Israel — India's Jewish Community Traditions, Shabbat & Synagogue Heritage</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>India is home to one of the world's oldest Jewish communities — with roots over 2,000 years old. The Bene Israel of Maharashtra, Cochin Jews of Kerala, and Baghdadi Jews of Mumbai and Kolkata each developed uniquely Indian forms of Jewish practice. Though most have emigrated to Israel, their heritage in India is irreplaceable.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>India's Jewish communities: Bene Israel (Maharashtra), Cochin Jews (Kerala, Paradesi Synagogue 1568 — oldest active synagogue in Commonwealth), Baghdadi Jews (Mumbai and Kolkata, arrived 18th-19th century). Key heritage sites: Paradesi Synagogue Kochi, Shaare Rachamim Synagogue Mumbai, Magen David Synagogue Kolkata.</p>
          </div>

          <h2 style={h2}>The Paradesi Synagogue</h2>
          <p style={s}>Built 1568 in Kochi's Mattancherry Jew Town — the oldest active synagogue in the Commonwealth. Features: Chinese willow-pattern tiles, Belgian chandeliers, clock tower with Hebrew-numeralled clocks, and ancient copper plates from the Cochin raja granting Jewish settlement rights. The synagogue and surrounding Jew Town are remarkable examples of the long Indian-Jewish history.</p>
          <h2 style={h2}>Indian Jewish Traditions</h2>
          <p style={s}>The Malida ceremony of Bene Israel — offering to Elijah using flattened rice, coconut, and fruits — blends Jewish Elijah-reverence with Indian puja-like offerings. Bene Israel women wore nine-yard sarees to synagogue. Many Bene Israel dishes (like Chicken Curry for Shabbat) are Indian-Jewish fusions unique to their community.</p>
          <h2 style={h2}>Preserving Indian Jewish Heritage</h2>
          <p style={s}>With near-complete emigration to Israel, preservation is urgent. Synagogues are heritage sites but communities no longer pray regularly. The Jewish Heritage Trust and individual families maintain documentation. If your family has Indian Jewish ancestry, documentation is of exceptional cultural importance.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family has Indian Jewish heritage — particularly Bene Israel or Cochin Jewish ancestry — document everything: the specific synagogue prayed in, the specific Hebrew-Marathi or Hebrew-Malayalam traditions, the specific foods. Indian Jewish heritage is one of the world's most irreplaceable.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-jewish-bene-israel-traditions-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>✡️</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your sacred journeys, ceremonies and heritage on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
