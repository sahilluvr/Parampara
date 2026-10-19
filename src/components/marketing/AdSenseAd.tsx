"use client";
import { useEffect } from "react";

// Replace with your actual AdSense publisher ID after approval
// Format: ca-pub-XXXXXXXXXXXXXXXXX
const PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "";

interface AdSenseAdProps {
  slot: string;           // Ad unit slot ID from AdSense dashboard
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  style?: React.CSSProperties;
  className?: string;
}

export default function AdSenseAd({ slot, format = "auto", style, className }: AdSenseAdProps) {
  useEffect(() => {
    try {
      // Push ad to AdSense queue
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {
      // Silently fail if AdSense not loaded
    }
  }, []);

  // Don't render if no publisher ID configured
  if (!PUBLISHER_ID) return null;

  return (
    <div
      className={className}
      style={{
        display: "block",
        textAlign: "center",
        margin: "24px 0",
        minHeight: 100,
        ...style,
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
