import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pricing — OurParampara Free and Pro Plans for Indian Families",
  description: "OurParampara is free to start. Upgrade to Pro at Rs 49 per month for unlimited rituals, Heritage Book PDF, AI Assistant, and more.",
  keywords: "Parampara pricing, heritage app India subscription, family ritual app free plan, Pro plan Rs 49",
  alternates: { canonical: "https://www.ourparampara.com/pricing" },
  openGraph: {
    title: "OG_Pricing — OurParampara Free and Pro Plans for Indian Families",
    description: "Free to start. Pro at Rs 49 per month — unlimited rituals, Heritage Book PDF, AI Ritual Assistant, and Elder Voice Archive.",
    url: "https://www.ourparampara.com/pricing",
    siteName: "OurParampara",
    images: [{ url: "BASE_https://www.ourparampara.com/pricing/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OG_Pricing — OurParampara Free and Pro Plans for Indian Families",
    description: "Free to start. Pro at Rs 49 per month — unlimited rituals, Heritage Book PDF, AI Ritual Assistant, and Elder Voice Archive.",
    images: ["BASE_https://www.ourparampara.com/pricing/og-image.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
