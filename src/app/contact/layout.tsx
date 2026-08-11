import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact OurParampara — Support, Feedback and Enquiries",
  description: "Get in touch with the OurParampara team for support, feedback, or partnership enquiries. We are here to help Indian families preserve their heritage.",
  keywords: "contact Parampara, Parampara support, heritage app support India",
  alternates: { canonical: "https://www.ourparampara.com/contact" },
  openGraph: {
    title: "OG_Contact OurParampara — Support, Feedback and Enquiries",
    description: "Get in touch with our team for support, feedback, or partnership enquiries.",
    url: "https://www.ourparampara.com/contact",
    siteName: "OurParampara",
    images: [{ url: "BASE_https://www.ourparampara.com/contact/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OG_Contact OurParampara — Support, Feedback and Enquiries",
    description: "Get in touch with our team for support, feedback, or partnership enquiries.",
    images: ["BASE_https://www.ourparampara.com/contact/og-image.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
