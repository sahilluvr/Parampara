"use client";
import { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import { C, F } from "@/lib/constants";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", { day:"numeric", month:"long", year:"numeric" });
}

const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  "Ritual Guide":   { bg:"#FDF0E6", color:"#C8541A" },
  "Samagri Guide":  { bg:"#E8F4EE", color:"#1A5C42" },
  "Festival Guide": { bg:"#FFFBEB", color:"#B45309" },
  "Heritage Guide": { bg:"#EFF6FF", color:"#1D4ED8" },
  "Samskara Guide": { bg:"#F5F3FF", color:"#7C3AED" },
  "Wedding Guide":  { bg:"#FDF2F8", color:"#9D174D" },
};

const ALL_CATEGORIES = ["All", ...Array.from(new Set(BLOG_POSTS.map(p => p.category))).sort()];

export default function BlogGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === active);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Category filter */}
      <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:32 }}>
        {ALL_CATEGORIES.map(cat => {
          const col = CATEGORY_COLORS[cat] || { bg:C.saffronLight, color:C.saffron };
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding:"8px 18px", borderRadius:999, fontSize:13, fontWeight:600,
                cursor:"pointer", border:"none", fontFamily:"'Inter',sans-serif",
                background: isActive ? (cat === "All" ? C.charcoal : col.color) : C.white,
                color: isActive ? "#fff" : (cat === "All" ? C.charcoal : col.color),
                boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.15)" : `inset 0 0 0 1.5px ${cat === "All" ? C.border : col.color}33`,
                transition:"all 0.15s",
              }}
            >
              {cat === "All" ? `All ${BLOG_POSTS.length} guides` : cat}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p style={{ fontSize:15, color:C.gray, textAlign:"center", padding:"40px 0" }}>No guides in this category yet.</p>
      )}

      {/* Featured post */}
      {featured && (
        <Link href={`/blog/${featured.slug}`} style={{ textDecoration:"none", display:"block", marginBottom:32 }}>
          <div style={{ background:C.charcoal, borderRadius:24, padding:"40px 40px", position:"relative", overflow:"hidden", cursor:"pointer" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg,#C8541A,#B8922A)" }}/>
            <div style={{ position:"absolute", top:0, right:0, bottom:0, width:"40%", background:"linear-gradient(135deg,rgba(200,84,26,0.08),rgba(184,146,42,0.04))", borderLeft:"1px solid rgba(255,255,255,0.04)" }}/>
            <div style={{ position:"relative", maxWidth:"60%" }}>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
                <span style={{ fontSize:11, fontWeight:700, background:"rgba(200,84,26,0.2)", color:"#E8894A", padding:"3px 10px", borderRadius:20, letterSpacing:0.5 }}>FEATURED</span>
                <span style={{ fontSize:11, color:"rgba(255,255,255,0.35)" }}>{featured.readTime}</span>
              </div>
              <p style={{ fontSize:32, marginBottom:12 }}>{featured.emoji}</p>
              <h2 style={{ fontFamily:F.serif, fontSize:"clamp(22px,3vw,32px)", fontWeight:600, color:"#fff", lineHeight:1.3, marginBottom:12 }}>{featured.title}</h2>
              <p style={{ fontSize:14, color:"rgba(255,255,255,0.5)", lineHeight:1.7, marginBottom:20 }}>{featured.description}</p>
              <p style={{ fontSize:13, fontWeight:600, color:"#E8894A" }}>Read guide →</p>
            </div>
          </div>
        </Link>
      )}

      {/* Grid */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:20 }}>
        {rest.map(post => {
          const cat = CATEGORY_COLORS[post.category] || { bg:C.saffronLight, color:C.saffron };
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration:"none" }}>
              <article style={{ background:C.white, borderRadius:18, padding:"24px", border:`1px solid ${C.border}`, height:"100%", display:"flex", flexDirection:"column", cursor:"pointer" }}>
                <div style={{ fontSize:36, marginBottom:14 }}>{post.emoji}</div>
                <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:12 }}>
                  <span style={{ fontSize:10, fontWeight:700, background:cat.bg, color:cat.color, padding:"3px 9px", borderRadius:20 }}>{post.category}</span>
                  <span style={{ fontSize:11, color:C.gray }}>{post.readTime}</span>
                </div>
                <h2 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, lineHeight:1.35, marginBottom:10, flex:1 }}>{post.title}</h2>
                <p style={{ fontSize:13, color:C.gray, lineHeight:1.7, marginBottom:16 }}>{post.description.slice(0,120)}…</p>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ fontSize:12, color:C.gray }}>{formatDate(post.date)}</span>
                  <span style={{ fontSize:13, fontWeight:600, color:C.saffron }}>Read →</span>
                </div>
              </article>
            </Link>
          );
        })}
      </div>

      {/* Post count */}
      <p style={{ fontSize:13, color:C.gray, textAlign:"center", marginTop:32 }}>
        Showing {filtered.length} of {BLOG_POSTS.length} guides
        {active !== "All" && <> in <strong style={{ color:C.charcoal }}>{active}</strong></>}
      </p>
    </>
  );
}
