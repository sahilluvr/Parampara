import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About OurParampara — Our Mission to Preserve Indian Family Heritage",
  description: "Learn how OurParampara helps South Asian families — Hindu, Sikh, Muslim, Christian and more — document ceremonies, preserve traditions, and pass elders wisdom to future generations.",
  keywords: "about Parampara, Indian heritage platform, family tradition preservation, cultural heritage app India",
  alternates: { canonical: "https://www.ourparampara.com/about" },
  openGraph: {
    title: "OG_About OurParampara — Our Mission to Preserve Indian Family Heritage",
    description: "Learn how OurParampara helps South Asian families — Hindu, Sikh, Muslim, Christian and more — document ceremonies, preserve traditions, and pass elders wisdom to future generations.",
    url: "https://www.ourparampara.com/about",
    siteName: "OurParampara",
    images: [{ url: "BASE_https://www.ourparampara.com/about/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OG_About OurParampara — Our Mission to Preserve Indian Family Heritage",
    description: "Learn how OurParampara helps South Asian families — Hindu, Sikh, Muslim, Christian and more — document ceremonies, preserve traditions, and pass elders wisdom to future generations.",
    images: ["BASE_https://www.ourparampara.com/about/og-image.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
