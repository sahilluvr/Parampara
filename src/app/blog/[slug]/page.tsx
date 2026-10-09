import { permanentRedirect } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blog";

// Any /blog/<slug> that isn't a real article (old, renamed or merged posts,
// typos in inbound links) used to return 404 — Search Console reported 21 of
// them. Now they 308-redirect to the closest matching article, or the blog
// index, so the link value isn't lost. Real articles are static folders and
// always take precedence over this route.

const STOP = new Set(["guide", "complete", "the", "a", "of", "and", "for", "in", "to", "how", "significance", "rituals", "india", "indian"]);
const tokens = (s: string) => new Set(s.toLowerCase().split(/[^a-z0-9]+/).filter(t => t && !STOP.has(t)));

export default async function BlogFallback({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const want = tokens(slug);
  let best = { slug: "", score: 0 };
  for (const p of BLOG_POSTS) {
    const have = tokens(p.slug);
    const inter = [...want].filter(t => have.has(t)).length;
    const score = inter / Math.max(1, new Set([...want, ...have]).size);
    if (score > best.score) best = { slug: p.slug, score };
  }
  permanentRedirect(best.score >= 0.34 ? `/blog/${best.slug}` : "/blog");
}
