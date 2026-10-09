import type { Metadata } from "next";
import HomeClient, { type GuideCard } from "./HomeClient";

export const metadata: Metadata = { alternates: { canonical: "https://www.ourparampara.com" } };
import { BLOG_POSTS } from "@/lib/blog";

const GUIDE_SLUGS = [
  "diwali-puja-steps-for-family",
  "indian-wedding-rituals-step-by-step",
  "how-to-celebrate-diwali-abroad-nri-guide",
  "raising-indian-kids-abroad-cultural-identity-guide",
  "how-to-perform-puja-at-home-without-priest-abroad",
  "connecting-with-grandparents-in-india-from-abroad",
];

// Server component: picks the featured guides here so the full blog index
// never reaches the browser.
export default function HomePage() {
  const guides: GuideCard[] = GUIDE_SLUGS
    .map(slug => BLOG_POSTS.find(p => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => !!p)
    .map(p => ({ slug: p.slug, title: p.title, emoji: p.emoji, category: p.category }));
  return <HomeClient guides={guides} guideCount={BLOG_POSTS.length}/>;
}
