import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogGrid from "@/components/marketing/BlogGrid";
import { BLOG_POSTS } from "@/lib/blog";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog — Indian Ritual Guides, Puja Samagri Lists & Heritage Tips | OurParampara",
  description: `Step-by-step puja guides, samagri lists, festival guides, and tips to preserve your family's Indian cultural heritage. ${BLOG_POSTS.length} free guides covering Diwali, Navratri, weddings and more.`,
  keywords: "Indian ritual guides, puja samagri list, Hindu festival guide, family heritage tips, Indian traditions blog, puja vidhi, festival celebrations India",
  openGraph: {
    title: "Blog — Indian Ritual Guides & Heritage Tips | OurParampara",
    description: "Step-by-step puja guides, samagri lists, and practical advice for preserving your family's cultural traditions.",
    url: "https://www.ourparampara.com/blog",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Navbar/>
      <main>
        {/* Hero */}
        <section style={{ paddingTop:120, paddingBottom:60, background:C.ivory, textAlign:"center" }}>
          <div style={{ maxWidth:700, margin:"0 auto", padding:"0 24px" }}>
            <p style={{ fontSize:12, fontWeight:700, letterSpacing:2.5, textTransform:"uppercase", color:C.saffron, marginBottom:14 }}>Heritage Blog</p>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(36px,5vw,60px)", fontWeight:600, color:C.charcoal, lineHeight:1.12, marginBottom:18, letterSpacing:"-1px" }}>
              Ritual guides &amp;<br/><em style={{ fontStyle:"italic", color:"#E8894A" }}>heritage tips</em>
            </h1>
            <p style={{ fontSize:16, color:C.gray, lineHeight:1.8 }}>
              {BLOG_POSTS.length} free step-by-step guides — puja vidhi, samagri lists, festival traditions, and practical advice for Indian families everywhere.
            </p>
          </div>
        </section>

        {/* Category filter + Posts grid */}
        <section style={{ padding:"60px 24px 80px", background:C.cream }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <BlogGrid/>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
