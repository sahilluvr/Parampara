import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import { C, F } from "@/lib/constants";

// Returns up to `count` posts from the same category, excluding the current slug.
// Falls back to posts from any category if same-category posts are insufficient.
function getRelated(currentSlug: string, category: string, count = 3) {
  const sameCategory = BLOG_POSTS.filter(
    p => p.slug !== currentSlug && p.category === category
  );
  if (sameCategory.length >= count) return sameCategory.slice(0, count);
  const others = BLOG_POSTS.filter(
    p => p.slug !== currentSlug && p.category !== category
  );
  return [...sameCategory, ...others].slice(0, count);
}

type Props = { currentSlug: string; category: string };

export default function RelatedPosts({ currentSlug, category }: Props) {
  const posts = getRelated(currentSlug, category);
  if (posts.length === 0) return null;

  return (
    <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 64px" }}>
      <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40 }}>
        <h2 style={{ fontFamily: F.serif, fontSize: 20, fontWeight: 600, color: C.charcoal, marginBottom: 20 }}>
          You might also like
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", display: "block", background: "#fff", border: `1px solid ${C.border}`, borderRadius: 12, padding: "16px 18px", transition: "box-shadow 0.15s" }}
            >
              <p style={{ fontSize: 22, margin: "0 0 8px" }}>{post.emoji}</p>
              <p style={{ fontSize: 12, fontWeight: 700, color: C.saffron, textTransform: "uppercase", letterSpacing: 0.5, margin: "0 0 6px" }}>{post.category}</p>
              <p style={{ fontSize: 14, fontWeight: 600, color: C.charcoal, lineHeight: 1.4, margin: "0 0 6px" }}>{post.title}</p>
              <p style={{ fontSize: 12, color: C.gray, margin: 0 }}>{post.readTime}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
