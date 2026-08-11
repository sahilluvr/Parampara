import { ImageResponse } from "next/og";
import { BLOG_POSTS } from "@/lib/blog";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") || "";

  const post = BLOG_POSTS.find(p => p.slug === slug);
  const title = post?.title ?? "OurParampara — Preserve Your Family Heritage";
  const category = post?.category ?? "Heritage Guide";
  const emoji = post?.emoji ?? "🪔";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#18181B",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "48px", height: "4px", background: "#C8541A", borderRadius: "2px" }} />
          <span style={{ fontSize: "16px", color: "#C8541A", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
            {category}
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", flex: 1, justifyContent: "center" }}>
          <div style={{ fontSize: "72px", lineHeight: 1 }}>{emoji}</div>
          <div
            style={{
              fontSize: title.length > 70 ? "38px" : title.length > 50 ? "44px" : "50px",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom branding */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#C8541A",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              🪔
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>OurParampara</span>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>www.ourparampara.com</span>
            </div>
          </div>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", letterSpacing: "1px" }}>
            HERITAGE · RITUALS · TRADITIONS
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
