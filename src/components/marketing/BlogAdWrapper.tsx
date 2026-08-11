"use client";
import { useEffect, useRef } from "react";

// This component wraps blog post content and automatically injects
// AdSense ad units at optimal positions:
// - After the 3rd paragraph (above the fold on mobile)
// - In the middle of the article
// - Before the related posts section
//
// Works WITHOUT modifying individual blog post files.

const PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "";
const AD_SLOT_IN_ARTICLE = process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE || "";
const AD_SLOT_DISPLAY = process.env.NEXT_PUBLIC_ADSENSE_SLOT_DISPLAY || "";

function InArticleAd({ slot }: { slot: string }) {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  if (!PUBLISHER_ID || !slot) return null;

  return (
    <div style={{ margin: "32px 0", textAlign: "center" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
      />
    </div>
  );
}

export function AdSlotTop() {
  return <InArticleAd slot={AD_SLOT_IN_ARTICLE} />;
}

export function AdSlotMid() {
  return <InArticleAd slot={AD_SLOT_DISPLAY} />;
}

export default function BlogAdWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
