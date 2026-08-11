import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Northeast India Christmas — How Nagaland, Mizoram & Manipur Celebrate | OurParampara",
  description: "Nagaland is India's most Christian state (approximately 88% Christian). Christianity was embraced by Naga tribes in the 19th century partly as an alternative to inter-tribal conflicts and a new shared",
  keywords: "Northeast India Christmas guide, Nagaland Christmas traditions, Mizoram Christmas guide, Manipur Christmas customs, Christian Northeast India, tribal Christmas traditions India",
  openGraph: { title: "Northeast India Christmas — How Nagaland, Mizoram & Manipur Celebrate", description: "Nagaland is India's most Christian state (approximately 88% Christian). Christianity was embraced by Naga tribes in the 19th century partly as an alternative to inter-tribal conflicts and a new shared", url: "https://www.ourparampara.com/blog/northeast-india-christmas-nagaland-mizoram-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=northeast-india-christmas-nagaland-mizoram-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=northeast-india-christmas-nagaland-mizoram-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/northeast-india-christmas-nagaland-mizoram-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="northeast-india-christmas-nagaland-mizoram-guide" title="Northeast India Christmas — How Nagaland, Mizoram & Manipur Celebrate" description="Nagaland is India's most Christian state (approximately 88% Christian). Christianity was embraced by Naga tribes in the 19th century partly as an alternative to inter-tribal conflicts and a new shared" date="2026-06-16" category="Festival Guide"
        faqs={[
          { q: "Why is Christmas celebrated so elaborately in Nagaland?", a: "Nagaland is India's most Christian state (approximately 88% Christian). Christianity was embraced by Naga tribes in the 19th century partly as an alternative to inter-tribal conflicts and a new shared identity. Christmas is the most important cultural and religious event of the year — choral competitions, elaborate village lighting, celebrations expressing the distinctive Naga tribal-Christian fusion." },
          { q: "What are Mizoram Christmas traditions?", a: "Mizoram is approximately 87% Christian (primarily Presbyterian). Christmas features elaborate church services, carol singing throughout December, and community feasts. Mizoram is famous for its choral tradition — church choirs are central to Mizo cultural identity and Christmas concerts are among the finest choral events in India." },
          { q: "How do Manipuri Christians celebrate Christmas?", a: "Manipur's significant Christian population (Meitei, Naga, and Kuki communities) celebrates with church services, carol singing, and community feasts. The Manipuri Christian tradition adds specific elements: Meitei folk tunes in hymns, traditional attire at services, and specific Manipuri foods at the Christmas feast." },
        ]}
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
            <div style={{ fontSize:40, marginBottom:14 }}>⛪</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Northeast India Christmas — How Nagaland, Mizoram & Manipur Celebrate</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Christmas in Northeast India is among the most unique in the world — a celebration blending centuries-old tribal culture with Christianity introduced in the 19th century, producing a distinctly Northeast Indian festivity that is both deeply Christian and unmistakably Naga, Mizo, Manipuri, and Khasi.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Northeast India Christmas: Nagaland (88% Christian, most elaborate celebrations), Mizoram (87% Christian, outstanding choral tradition), Manipur (tribal-Christian fusion). Christmas Eve midnight service and Christmas Day morning service are central. Carol singing begins in December. Community feasts feature regional tribal foods alongside Christmas cake.</p>
          </div>

          <h2 style={h2}>Nagaland Christmas</h2>
          <p style={s}>Celebrations begin in early December with carol groups going house to house. Villages construct elaborate Christmas gates. Christmas Eve Midnight Mass at every church. Christmas Day feasts feature traditional Naga foods alongside Christmas cake. The entire December is effectively a festival season.</p>
          <h2 style={h2}>Mizo Choral Tradition</h2>
          <p style={s}>The Mizo choral tradition — one of the finest in Asia — blends Western classical technique with Mizo musical sensibilities, a direct result of American Baptist and Welsh missionary influence in the early 20th century. Christmas concerts draw audiences from across the Northeast. The YMA (Young Mizo Association) organizes major community events.</p>
          <h2 style={h2}>Tribal Christian Heritage</h2>
          <p style={s}>The Christianity of Northeast India is a genuine synthesis — not erasure of tribal culture but transformation of it. Many communities maintain pre-Christian animist traditions alongside Christian practice. The distinctiveness of Northeast Indian Christianity — tribal languages in worship, specific foods at religious feasts, choral traditions — is cultural heritage as specific and precious as any other in India.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family has roots in Northeast India's Christian traditions, document your specific community's Christmas customs — the hymns sung in your tribal language, the specific Christmas foods prepared, the specific church attended for generations. Northeast India's Christian heritage is among the most distinctive in the world.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="northeast-india-christmas-nagaland-mizoram-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>⛪</p>
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
