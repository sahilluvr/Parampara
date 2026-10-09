import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "What We Do — How OurParampara Preserves Indian Family Rituals and Heritage",
  description: "Discover how OurParampara documents Indian family rituals, generates AI-powered samagri lists, preserves elder voice recordings, and creates Heritage Books.",
  keywords: "ritual documentation app, AI samagri list generator, elder voice archive, family heritage book, Indian ritual app",
  alternates: { canonical: "https://www.ourparampara.com/what-we-do" },
  openGraph: {
    title: "OG_What We Do — How OurParampara Preserves Indian Family Rituals and Heritage",
    description: "Document rituals, generate AI samagri lists, archive elder voices, and create Heritage Books for Indian families.",
    url: "https://www.ourparampara.com/what-we-do",
    siteName: "OurParampara",
    images: [{ url: "BASE_https://www.ourparampara.com/what-we-do/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OG_What We Do — How OurParampara Preserves Indian Family Rituals and Heritage",
    description: "Document rituals, generate AI samagri lists, archive elder voices, and create Heritage Books for Indian families.",
    images: ["BASE_https://www.ourparampara.com/what-we-do/og-image.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
