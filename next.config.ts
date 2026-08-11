import type { NextConfig } from "next";

// Consolidated blog posts (Aug 2026 content cleanup) — old slugs 301 to the
// surviving "pillar" post so link equity and any existing rankings/traffic
// transfer instead of hitting a 404. Keep this list until Search Console
// shows the old URLs have dropped out of the index (~3-6 months), then it's
// safe to remove.
const BLOG_REDIRECTS: Array<{ source: string; destination: string }> = [
  { source: "/blog/bihu-assam-festival-complete-guide", destination: "/blog/bihu-festival-assam-complete-guide" },
  { source: "/blog/baisakhi-vaisakhi-punjab-festival-guide", destination: "/blog/baisakhi-vaisakhi-festival-guide-significance" },
  { source: "/blog/anand-karaj-sikh-wedding-guide", destination: "/blog/anand-karaj-sikh-wedding-ceremony-guide" },
  { source: "/blog/nikah-ceremony-traditions-complete-guide", destination: "/blog/nikah-ceremony-guide-indian-muslim-wedding" },
  { source: "/blog/indian-new-year-ugadi-gudi-padwa-guide", destination: "/blog/ugadi-gudi-padwa-new-year-guide" },
  { source: "/blog/govardhan-puja-annakut-guide", destination: "/blog/govardhan-puja-annakut-vidhi-guide" },
  { source: "/blog/vasant-panchami-saraswati-puja-guide", destination: "/blog/saraswati-puja-vasant-panchami-guide" },
  { source: "/blog/mahashivaratri-significance-shiva-temples-guide", destination: "/blog/maha-shivratri-puja-vidhi-fasting-guide" },
  { source: "/blog/karwa-chauth-significance-complete-guide", destination: "/blog/karva-chauth-puja-vidhi-complete-guide" },
  { source: "/blog/chhath-puja-rituals-significance-guide", destination: "/blog/chhath-puja-vidhi-rituals-complete-guide" },
  { source: "/blog/durga-puja-celebration-guide-bengal", destination: "/blog/durga-puja-guide-pandal-rituals-significance" },
  { source: "/blog/durga-puja-bengal-complete-guide", destination: "/blog/durga-puja-guide-pandal-rituals-significance" },
  { source: "/blog/durga-puja-navratri-saraswati-puja-guide", destination: "/blog/durga-puja-guide-pandal-rituals-significance" },
  { source: "/blog/chaitra-navratri-puja-guide-nine-days", destination: "/blog/navratri-puja-guide-9-days" },
  { source: "/blog/navaratri-nine-days-complete-significance", destination: "/blog/navratri-puja-guide-9-days" },
  { source: "/blog/pitru-paksha-shradh-ancestor-guide", destination: "/blog/pitru-paksha-shradh-rituals-guide" },
  { source: "/blog/raksha-bandhan-rakhi-puja-vidhi-significance-2026", destination: "/blog/raksha-bandhan-rituals-significance" },
  { source: "/blog/sagai-engagement-ceremony-rituals-guide", destination: "/blog/roka-engagement-ceremony-guide" },
  { source: "/blog/roka-sagai-engagement-ceremony-guide", destination: "/blog/roka-engagement-ceremony-guide" },
  { source: "/blog/onam-festival-kerala-complete-guide", destination: "/blog/onam-festival-guide-significance-sadhya-pookalam" },
  { source: "/blog/tonsure-mundan-ceremony-complete-guide", destination: "/blog/mundan-ceremony-complete-guide" },
  { source: "/blog/janmashtami-significance-rituals-guide", destination: "/blog/janmashtami-krishna-birthday-celebration-guide" },
  { source: "/blog/holi-significance-rangwali-dhuleti-guide", destination: "/blog/holi-festival-guide-rituals-significance" },
  { source: "/blog/nag-panchami-snake-worship-guide", destination: "/blog/naag-panchami-puja-vidhi-significance-guide" },
  { source: "/blog/kumbh-mela-2027-guide-prayagraj", destination: "/blog/kumbh-mela-guide-significance-pilgrimage" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.r2.cloudflarestorage.com" },
      { protocol: "https", hostname: "**.supabase.co" },
    ],
  },
  async redirects() {
    return BLOG_REDIRECTS.map(r => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
