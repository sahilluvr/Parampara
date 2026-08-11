import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Indian Wedding Abroad — How NRI Families Plan a Traditional Wedding in USA, UK & Canada | OurParampara",
  description: "Complete guide for NRI families planning an Indian wedding abroad — finding a pandit, sourcing Indian wedding outfits, catering, venue Vastu, and blending Western and Indian traditions.",
  keywords: "Indian wedding abroad NRI, Hindu wedding USA UK Canada, NRI wedding planning guide, Indian wedding venue abroad, finding pandit for wedding abroad, Indian wedding catering USA, traditional Indian wedding outside India",
  openGraph: { title: "Indian Wedding Abroad — NRI Planning Guide", description: "Finding a pandit, sourcing lehengas, Indian catering, and blending Western and Indian traditions for your NRI wedding in USA, UK or Canada.", url: "https://www.ourparampara.com/blog/indian-wedding-abroad-nri-planning-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-wedding-abroad-nri-planning-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=indian-wedding-abroad-nri-planning-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-wedding-abroad-nri-planning-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="indian-wedding-abroad-nri-planning-guide" title="Indian Wedding Abroad — How NRI Families Plan a Traditional Wedding in USA, UK & Canada" description="Finding a pandit, sourcing lehengas, Indian catering, and blending Western and Indian traditions for your NRI wedding in USA, UK or Canada." date="2026-04-26" category="Heritage Guide"
        faqs={[
          { q: "How do I find a pandit for an Indian wedding in the USA or UK?", a: "Contact your local Hindu temple first — they typically have a list of priests available for weddings. Hindu temples in cities like Fremont CA, Houston TX, Chicago IL, Southall London, and Brampton Ontario have extensive networks of qualified priests. Online platforms like Pandit.com, 99Pandit, and BookMyPuja also connect NRI families with priests for weddings abroad. Confirm the priest knows your regional tradition (North Indian, South Indian, Gujarati, etc.) as rituals vary significantly." },
          { q: "Is an Indian wedding performed abroad legally valid in India?", a: "If you are married abroad under the laws of that country and obtain a marriage certificate, that marriage is generally recognised in India for most legal purposes. However, if you want the marriage formally registered in India, you can register it at the Indian Embassy or Consulate under the Foreign Marriage Act 1969. For property and inheritance rights in India, having the marriage documented in India provides extra legal clarity, though it is not strictly required in most cases." },
          { q: "What are the most important rituals for an Indian wedding abroad that cannot be simplified?", a: "The core ritual that makes a Hindu marriage legally and spiritually valid is the Saptapadi — the seven steps around the sacred fire (havan). This ritual, performed with mantras by a qualified priest, is the essential non-negotiable. Most other pre-wedding and post-wedding rituals (mehendi, sangeet, Vidai) can be adapted or simplified based on the family's preferences and venue constraints." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>💒</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Indian Wedding Abroad — How NRI Families Plan a Traditional Wedding in USA, UK &amp; Canada</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>April 26, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Planning an Indian wedding outside India is one of the most logistically complex things an NRI family undertakes — and one of the most meaningful. A traditional Indian wedding has dozens of rituals, specific vendors, particular aesthetics, and a cast of hundreds that in India organises itself through cultural osmosis. Abroad, every element has to be deliberately found, sourced, and coordinated. The families who do it well plan early, delegate smartly, and accept that the result will be their own unique version of the tradition — which is exactly as it should be.</p>

          <h2 style={h2}>12-18 Months Before — The Foundations</h2>
          {["Book the venue first — Indian weddings require a space that can accommodate a mandap (wedding canopy), a havan (sacred fire), a large guest gathering, and often a multi-event format (mehendi evening + wedding day + reception). Banquet halls, hotel ballrooms, and South Asian wedding venues in Indian-heavy cities are the best starting points.","Find the pandit — contact your local Hindu temple or use an online service, specifying your regional tradition. Meet or video call the priest before booking to confirm they know your specific rituals.","Set the date with a muhurat — if you want an astrologically auspicious date, consult a priest or panchang early. Good dates book fast. Alternatively, many NRI families choose the date based on guest availability rather than muhurat — both approaches are valid.","Lock in the Indian caterer — Indian wedding catering is specialist work; non-Indian caterers rarely execute it satisfactorily. Ask for Indian caterers at Indian community gatherings or the temple, not just Google searches.","Begin sourcing wedding outfits — lehengas, sherwanis, and sarees often need to be ordered from India or from specialist Indian bridal boutiques in cities like New York, Toronto, London, or Chicago, with lead times of 4-6 months for custom pieces."].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Finding Vendors Abroad</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Indian wedding photographers","Search for South Asian wedding photographers in your city — this is a strong specialty niche. Ask for photographers who have shot traditional Indian ceremonies, not just reception parties."],["Mehendi artist","Indian community networks are the best source — Facebook groups, Indian association WhatsApp groups. Confirmed bookings are essential as good henna artists book months ahead."],["Indian florist","Marigold garlands and traditional Indian floral arrangements require a florist experienced with Indian weddings. Ask at the temple or catering contacts for referrals."],["Indian jewellery","Major Indian cities abroad (New Jersey, Fremont, Toronto, Southall) have Indian jewellery shops for purchase or rental. Rental is common and practical for NRI brides."],["DJ / dhol players","Dhol players for the baraat (wedding procession) are available in most large Indian communities. Book early — they are in high demand for wedding season."],["Wedding coordinator","An Indian wedding coordinator who has managed full traditional weddings abroad is worth the investment — they know every vendor and every logistical pitfall."]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>The Mandap &amp; Havan Abroad</h2>
          <p style={s}>The mandap (ceremonial canopy) and havan (sacred fire) are the two elements that most venues abroad are unfamiliar with. Key considerations:</p>
          <ul style={{ paddingLeft:20 }}>
            {["Most hotel venues require prior approval for an open fire — get this in writing early. Many now accommodate small, controlled havans with proper ventilation and fire suppression systems","Mandap rental is available from Indian wedding decoration specialists in most cities with large Indian communities — they set up and dismantle the full structure","Confirm with the venue that the havan smoke can be managed — a portable outdoor havan may be an option for warm-weather weddings","The priest will need the havan kund (fire pit) to be a specific size and shape — discuss this with the pandit before confirming the venue arrangement","Many families now use a small tabletop havan (with a contained flame) for indoor venues where a full open fire is not permitted — the priest can perform the rituals with this modification"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Blending Indian and Western Wedding Traditions</h2>
          <p style={s}>Most NRI weddings today are genuinely hybrid — and this is a strength rather than a compromise. Common approaches that work well: a traditional Hindu ceremony (with full rituals) followed by a Western-format reception; a mehendi and sangeet evening that doubles as a cocktail party; incorporating both Indian and Western music; seating arrangements that work for guests unfamiliar with the on-the-floor mandap format (by providing chairs around the ceremony space); and wedding favours that reflect both cultures (a small diya alongside a Western favour).</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document not just the wedding day but the process of creating it — the challenges you navigated, the vendors you found, the compromises you made. Future generations in your family who marry abroad will use your experience as a guide. Preserve the muhurat details, the pandit&apos;s contact, and the full ritual sequence on OurParampara — it becomes the family&apos;s wedding planning manual.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Planning the pre-wedding ceremonies? See our <Link href="/blog/roka-engagement-ceremony-guide" style={{ color:C.saffron, fontWeight:600 }}>Roka &amp; Sagai guide</Link> and <Link href="/blog/hindu-wedding-muhurat-dates-2026-2027" style={{ color:C.saffron, fontWeight:600 }}>wedding muhurat guide</Link>.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-wedding-abroad-nri-planning-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>💒</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your wedding story</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Save your muhurat details, vendor contacts, ceremony photos, and the story of your wedding on OurParampara — for your children to look back on.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
