import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";

// High-priority slugs that get 0.9 priority (ritual/puja guides with high search intent)
const HIGH_PRIORITY_SLUGS = new Set([
  "diwali-puja-steps-for-family",
  "navratri-puja-guide-9-days",
  "karva-chauth-puja-vidhi-complete-guide",
  "griha-pravesh-puja-samagri-list",
  "indian-wedding-rituals-step-by-step",
  "how-to-perform-satyanarayan-katha",
  "maha-shivratri-puja-vidhi-fasting-guide",
  "ram-navami-puja-vidhi-significance-guide",
  "ganesh-chaturthi-puja-vidhi-samagri",
  "makar-sankranti-festival-guide-rituals-significance",
  "holi-festival-guide-rituals-significance",
  "janmashtami-krishna-birthday-celebration-guide",
  "akshaya-tritiya-significance-rituals-guide",
  "chhath-puja-vidhi-rituals-complete-guide",
  "kumbh-mela-guide-significance-pilgrimage",
  "hindu-wedding-muhurat-dates-2026-2027",
  "vastu-shastra-tips-new-home",
  "hindu-baby-naming-rashi-nakshatra-guide",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.ourparampara.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                            lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/blog`,                  lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/about`,                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/what-we-do`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/rituals-services`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/auth/signup`,           lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${base}/contact`,               lastModified: now, changeFrequency: "yearly",  priority: 0.5 },
    { url: `${base}/privacy`,               lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${base}/terms`,                 lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${base}/refund`,                lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: HIGH_PRIORITY_SLUGS.has(post.slug) ? 0.9 : 0.7,
  }));

  return [...staticPages, ...blogPages];
}
