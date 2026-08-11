import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vidyarambham — Complete Guide to the Child's First Writing Ceremony | OurParampara",
  description: "Complete Vidyarambham guide — the Hindu ceremony of a child's first writing, when it is performed on Vijayadashami, the Ezhuthiniruthu tradition of Kerala, how the guru guides the child's hand, and the significance of beginning education with divine blessing.",
  keywords: "Vidyarambham guide, Ezhuthiniruthu Kerala, child first writing ceremony Hindu, Vijayadashami Vidyarambham, Hindu education initiation ceremony, how to perform Vidyarambham, Saraswati first writing ceremony, kids first writing India",
  openGraph: { title: "Vidyarambham — Complete Guide to the Child's First Writing Ceremony | OurParampara", description: "Complete Vidyarambham guide — the Hindu ceremony of a child's first writing, when it is performed on Vijayadashami, the Ezhuthiniruthu tradition of Kerala, how the guru guides the child's hand, and the significance of beginning education with divine blessing.", url: "https://www.ourparampara.com/blog/saraswati-puja-vidyarambham-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=saraswati-puja-vidyarambham-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=saraswati-puja-vidyarambham-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/saraswati-puja-vidyarambham-guide" },
};

export default function Page() {
  return (
    <>
      <BlogStructuredData
        slug="saraswati-puja-vidyarambham-guide"
        title="Vidyarambham — Complete Guide to the Child's First Writing Ceremony | OurParampara"
        description="Complete Vidyarambham guide — the Hindu ceremony of a child's first writing, when it is performed on Vijayadashami, the Ezhuthiniruthu tradition of Kerala, how the guru guides the child's hand, and the significance of beginning education with divine blessing."
        date="2026-07-10"
        category="Samskara Guide"
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
            <div style={{ fontSize:40, marginBottom:14 }}>✍️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Vidyarambham</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 10, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>
        </section>
        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Vidyarambham — 'the beginning of knowledge' — is the Hindu ceremony in which a young child is formally introduced to learning. A teacher (guru), parent, or elder guides the child's hand to write the first letters or syllables of the alphabet, reciting prayers to Saraswati (goddess of learning) as they do so. In Kerala, the ceremony is called Ezhuthiniruthu ('beginning to write') and is performed on Vijayadashami (Dussehra), the day after the nine-day Navratri festival — the day when all books and instruments, placed before Saraswati during Navratri, are taken back and used again. The child who first picks up a pen on this auspicious day begins their educational life with Saraswati's explicit blessing.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Vijayadashami Timing — Why This Day</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Vijayadashami is considered the most auspicious day of the year for new beginnings — the day Rama defeated Ravana, the day the Pandavas retrieved their weapons after one year of exile, the day of Shakti's final victory. Beginning any new learning — whether a child's first letters or an adult's first lesson in a new skill, musical instrument, or craft — on Vijayadashami is believed to ensure success through Saraswati's blessing and the day's inherent auspiciousness. Martial arts traditions (Kalaripayattu in Kerala, sword fighting in Tamil Nadu) also begin initiation on this day.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Ezhuthiniruthu in Kerala — The Living Tradition</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Kerala maintains the Vidyarambham tradition most elaborately. Temples — particularly Saraswati temples and major temples like Thunchan Parambu in Tirur (associated with the Malayalam literary tradition's founder Thunchath Ezhuthachan) — are packed on Vijayadashami with families bringing children aged 3-5 for their first writing. A scholar or the temple priest guides the child's index finger to write 'Hari Shri Ganapathaye Namaha, Avi Sarva Siddhi Bhavanthu' in rice or in sand, reciting these words as the child's hand moves. This is the child's first conscious encounter with the act of writing.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Ritual — Step by Step</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Preparation:</strong> A clean plate filled with rice or fine sand. Incense and a lamp lit before Saraswati's image.</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>The writing medium:</strong> Traditionally, gold stylus or the index finger in rice/sand. Modern adaptations use chalk, a pen on paper.</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>The first syllable:</strong> In Kerala: 'Hari Shri' (an auspicious beginning). In North India: 'Om' or 'Shri Ganeshaya Namaha'. In Tamil Nadu: 'Om' followed by Tamil alphabet.</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>The guru's role:</strong> The teacher/elder holds the child's hand from behind, guiding each stroke — the child experiences the movement of correct letter formation from the very first moment.</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Prasad:</strong> After the writing, sweets are distributed. The child receives gifts — books, pencils, school bag.</li>
          </ul>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Vidyarambham in the Diaspora</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>For Kerala families in the Gulf, UK, USA, and Australia, Vidyarambham is one of the most consistently maintained cultural practices — performed at home with rice on a plate, with parents or grandparents guiding the child's hand. The specific words written, the specific prayer said, and the specific person who guides the first writing are each chosen with care. Many diaspora families specifically schedule a visit to grandparents in India around Vijayadashami so the grandparent can guide the grandchild's first writing — a three-generation transmission in a single gesture.</p>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(184,146,42,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#B8922A", margin:"0 0 6px" }}>💡 Record Vidyarambham carefully</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>The child's first writing, guided by whose hand, with which words, on which date — this is one of the most meaningful family photographs you will ever take. Document the full ceremony on OurParampara, including who taught whom and what was written.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="saraswati-puja-vidyarambham-guide" category="Samskara Guide"/>
        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>✍️</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, rituals, and cultural heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
