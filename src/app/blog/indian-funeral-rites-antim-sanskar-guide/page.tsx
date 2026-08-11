import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hindu Funeral Rites — Complete Guide to Antim Sanskar & Cremation | OurParampara",
  description: "Complete Hindu funeral guide — the Antim Sanskar (last rites), the cremation process, the 13-day mourning period, Asthi Visarjan, Terahvin ceremony, what to do when a Hindu dies, and how different communities observe death rituals.",
  keywords: "Hindu funeral rites guide, Antim Sanskar guide, Hindu cremation rituals, 13 day mourning Hindu, Asthi Visarjan guide, Terahvin ceremony, what to do when Hindu dies, Hindu death rituals India",
  openGraph: { title: "Hindu Funeral Rites — Complete Guide to Antim Sanskar & Cremation | OurParampara", description: "Complete Hindu funeral guide — the Antim Sanskar (last rites), the cremation process, the 13-day mourning period, Asthi Visarjan, Terahvin ceremony, what to do when a Hindu dies, and how different communities observe death rituals.", url: "https://www.ourparampara.com/blog/indian-funeral-rites-antim-sanskar-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-funeral-rites-antim-sanskar-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=indian-funeral-rites-antim-sanskar-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-funeral-rites-antim-sanskar-guide" },
};

export default function Page() {
  return (
    <>
      <BlogStructuredData
        slug="indian-funeral-rites-antim-sanskar-guide"
        title="Hindu Funeral Rites — Complete Guide to Antim Sanskar & Cremation | OurParampara"
        description="Complete Hindu funeral guide — the Antim Sanskar (last rites), the cremation process, the 13-day mourning period, Asthi Visarjan, Terahvin ceremony, what to do when a Hindu dies, and how different communities observe death rituals."
        date="2026-07-10"
        category="Ritual Guide"
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
            <div style={{ fontSize:40, marginBottom:14 }}>🕊️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Hindu Funeral Rites</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 10, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>
        </section>
        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Antim Sanskar (last rites) is the final of the 16 Hindu samskaras — the ritual care of the body after death and the ceremonies that follow. Hindu funeral rites are among the most carefully prescribed in any world tradition, with specific actions required at each stage, from the moment of death through the 13-day mourning period and the immersion of ashes. Understanding these rites — what happens, why, and in what sequence — is essential both for those who may need to perform them and for those who want to understand the Hindu relationship with death and the afterlife.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>At the Moment of Death</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>When death occurs or is imminent: if possible, place the dying person on the floor (the earth connection), which is considered auspicious for the soul's departure. Place a few drops of Ganga water or Tulsi water on the lips. Recite the name of God — 'Ram Nam Satya Hai' in North India ('The name of Ram is truth'), or the family deity's name, or 'Om Namah Shivaya.' The soul's departure is eased by the presence of family and the sound of sacred names.</p>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>After death: close the eyes. Cover the body with a white cloth. Do not leave the body alone — someone should remain present until the cremation. Inform the local cremation ground (shamshan). In most Hindu traditions, the body should be cremated within 24 hours — the same urgency exists in Hinduism as in Islam, for the body without soul is considered ritually impure and should return to the elements quickly.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Preparation of the Body — Antyeshti Sacrament</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The body is bathed and dressed in new white clothes (or in the clothes the deceased specifically requested to be cremated in). In many traditions, a small amount of Ganga water is poured into the mouth. Flowers are placed on the body. Sesame seeds are placed on the body (sesame is associated with the ancestors and with Yama). The deceased is placed on a bier of bamboo or wood, covered with a white shroud and flowers, for the journey to the cremation ground.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Cremation — Antyeshti</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The cremation is typically led by the eldest son — who performs the last rites as a primary duty. If there is no son, the nearest male relative performs this role. The funeral pyre is prepared at the cremation ground (shamshan or Mokshadham). The body is placed on the pyre. The son or chief mourner circumambulates the pyre three times and then lights it — traditionally with fire brought from the family's domestic hearth.</p>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Pran Pratishtha ritual (breaking of the skull) is performed in some traditions — allowing the soul to exit completely. The Antyeshti fire is maintained until the body is fully cremated. In modern electric crematoriums, the ritual fire is adapted — a symbolic flame is lit before the body enters the cremation chamber.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The 13 Days — Mourning Period</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Day 1 (Cremation day):</strong> After cremation, the family bathes. A ritual meal is cooked and eaten — the first meal after cremation breaks a fast that began at the moment of death.</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Days 1-10:</strong> Daily Tarpan (water offering) for the departed soul. The family avoids temple visits, celebrations, and auspicious events. Close relatives bring food — the mourning family does not cook for themselves.</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Day 3 (Asthi Sanchayan):</strong> The ashes and bone fragments are collected from the cooled cremation ground.</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Day 12 or 13:</strong> Asthi Visarjan — the immersion of ashes in a sacred river (ideally the Ganges at Haridwar or Varanasi). The ashes being immersed in the Ganga is believed to grant the soul liberation.</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Terahvin/Barhvin (Day 13 or 12):</strong> The main mourning ceremony — a gathering of family and community, prayers and often a Kirtan or Satsang, feeding of the community, and the formal end of the acute mourning period.</li>
          </ul>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>After the 13 Days — Ongoing Remembrance</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The formal mourning ends on the 13th day, but the remembrance continues: monthly Shraddha on the death tithi for the first year, then annual Shraddha on the same tithi every year. Pitru Paksha (the 16-day fortnight of the ancestors in Ashwin month) offers a specific annual period for collective ancestor remembrance. Many families also perform special puja on the deceased's birthday — honouring the life that was lived rather than only the death.</p>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(184,146,42,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#B8922A", margin:"0 0 6px" }}>💡 Document your family's death rituals</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Every family has specific traditions around death and mourning — specific mantras used, specific foods served at the Terahvin, which river the ashes are immersed in. Recording these on OurParampara ensures future generations can honour their ancestors in the same way.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-funeral-rites-antim-sanskar-guide" category="Ritual Guide"/>
        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🕊️</p>
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
