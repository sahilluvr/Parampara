// Injects JSON-LD structured data for blog posts.
// Adds Article schema (for all posts) + FAQ schema (for ritual/puja guides).
// This helps Google show rich results — star ratings, FAQ dropdowns, breadcrumbs.

type Props = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  // Optional FAQ items — shown as expandable Q&A in search results
  faqs?: { q: string; a: string }[];
};

const BASE = "https://www.ourparampara.com";

export default function BlogStructuredData({ slug, title, description, date, category, faqs }: Props) {
  const url = `${BASE}/blog/${slug}`;
  const ogImage = `${BASE}/api/og?slug=${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": date,
    "dateModified": date,
    "author": {
      "@type": "Organization",
      "name": "OurParampara",
      "url": BASE,
    },
    "publisher": {
      "@type": "Organization",
      "name": "OurParampara",
      "url": BASE,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE}/favicon.svg`,
      },
    },
    "image": {
      "@type": "ImageObject",
      "url": ogImage,
      "width": 1200,
      "height": 630,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
    "articleSection": category,
    "inLanguage": "en-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${BASE}/blog` },
      { "@type": "ListItem", "position": 3, "name": title, "item": url },
    ],
  };

  const faqSchema = faqs && faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(({ q, a }) => ({
          "@type": "Question",
          "name": q,
          "acceptedAnswer": { "@type": "Answer", "text": a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
