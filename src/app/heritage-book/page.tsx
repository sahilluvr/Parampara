"use client";
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import { BookOpen, Download, Eye, Crown } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import { getActiveFamily } from "@/lib/families";
import { syncPlanFromSupabase } from "@/lib/plan";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", forest:"#1A5C42", forestLight:"#E8F4EE", gold:"#B8922A", goldLight:"#F9F3E3", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };

export default function HeritageBookPage() {
  const [isPro, setIsPro]       = useState(false);
  const [loading, setLoading]   = useState(true);
  const [generating, setGenerating] = useState(false);
  const [members, setMembers]   = useState<Record<string,string>[]>([]);
  const [rituals, setRituals]   = useState<Record<string,unknown>[]>([]);
  const [familyName, setFamilyName] = useState("My Family");
  const [religion, setReligion] = useState("Hindu");
  const [region, setRegion]     = useState("Chandigarh");

  useEffect(() => {
    syncPlanFromSupabase().then(p => {
      setIsPro(p === "pro");
      setLoading(false);
    });
    // Load data
    const active = getActiveFamily();
    const fid = active?.id || "default";
    setFamilyName(localStorage.getItem("parampara_family_name") || "My Family");
    setReligion(active?.religion || "Hindu");
    setRegion(active?.region || "Chandigarh");

    // Load members — check all possible key patterns
    try {
      const memberKeys = Object.keys(localStorage).filter(k =>
        k.startsWith("parampara_members_") || k === "parampara_members"
      );
      const seen = new Set<string>();
      const allMembers: Record<string,string>[] = [];
      for (const key of memberKeys) {
        const raw = localStorage.getItem(key);
        if (!raw || raw === "[]") continue;
        try {
          const arr = JSON.parse(raw);
          if (Array.isArray(arr)) {
            for (const m of arr) {
              if (m?.name && !seen.has(m.name)) {
                seen.add(m.name);
                allMembers.push(m);
              }
            }
          }
        } catch {}
      }
      setMembers(allMembers);
    } catch {}

    // Load rituals — check all possible key patterns
    try {
      const ritualKeys = Object.keys(localStorage).filter(k =>
        k.startsWith("parampara_rituals_") || k === "parampara_rituals"
      );
      const seenR = new Set<string>();
      const allRituals: Record<string,unknown>[] = [];
      for (const key of ritualKeys) {
        const raw = localStorage.getItem(key);
        if (!raw || raw === "[]") continue;
        try {
          const arr = JSON.parse(raw);
          if (Array.isArray(arr)) {
            for (const r of arr) {
              const name = (r as Record<string,unknown>)?.name as string;
              if (name && !seenR.has(name)) {
                seenR.add(name);
                allRituals.push(r);
              }
            }
          }
        } catch {}
      }
      setRituals(allRituals);
    } catch {}
  }, []);

  async function generateBook() {
    setGenerating(true);
    try {
      const res = await fetch("/api/heritage-book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ familyName, members, rituals, religion, region }),
      });
      const html = await res.text();
      const blob = new Blob([html], { type:"text/html" });
      const url = URL.createObjectURL(blob);
      const win = window.open(url, "_blank");
      if (!win) {
        // Fallback: download
        const a = document.createElement("a");
        a.href = url; a.download = `${familyName}-Heritage-Book.html`;
        a.click();
        toast.success("Heritage Book downloaded! Open in browser and print to PDF.");
      } else {
        toast.success("Heritage Book opened! Use Ctrl+P / Cmd+P to save as PDF 🪔");
      }
    } catch {
      toast.error("Failed to generate. Please try again.");
    }
    setGenerating(false);
  }

  if (loading) return (
    <AppShell>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"60vh" }}>
        <p style={{ color:C.gray }}>Loading…</p>
      </div>
    </AppShell>
  );

  return (
    <AppShell>
      <div style={{ padding:"24px 20px", maxWidth:680, margin:"0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom:24 }}>
          <h1 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, margin:0 }}>Heritage Book</h1>
          <p style={{ fontSize:13, color:C.gray, marginTop:3 }}>Export your family's complete heritage as a beautiful PDF</p>
        </div>

        {/* Preview card */}
        <div style={{ background:"linear-gradient(135deg,#1A0A00,#2D1810)", borderRadius:20, padding:"40px 32px", textAlign:"center", marginBottom:20, position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, opacity:0.05, fontSize:200, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:F.serif }}>ॐ</div>
          <div style={{ position:"relative" }}>
            <div style={{ fontSize:56, marginBottom:16 }}>🪔</div>
            <h2 style={{ fontFamily:F.serif, fontSize:26, fontWeight:700, color:"#fff", marginBottom:8 }}>The <em style={{ color:"#E8894A" }}>{familyName}</em></h2>
            <h3 style={{ fontFamily:F.serif, fontSize:20, fontWeight:400, color:"rgba(255,255,255,0.6)", marginBottom:20 }}>Heritage Book</h3>
            <div style={{ display:"flex", gap:16, justifyContent:"center", fontSize:13, color:"rgba(255,255,255,0.4)" }}>
              <span>👥 {members.length} members</span>
              <span>📜 {rituals.length} rituals</span>
              <span>🏛️ {religion}</span>
            </div>
          </div>
        </div>

        {/* What's included */}
        <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:20, marginBottom:16 }}>
          <p style={{ fontSize:12, fontWeight:700, color:C.charcoal, marginBottom:14, letterSpacing:0.5 }}>📖 WHAT'S INCLUDED</p>
          {[
            ["🎨","Beautiful cover page","With family name, year, religion and region"],
            ["👥","Family members directory","All members with names, roles, and birthdates"],
            ["📜","Complete ritual documentation","Every ritual with steps, samagri lists, and mantras"],
            ["📝","Elder's notes","Personal notes and wisdom from family elders"],
            ["🖨️","Print-ready design","Optimised for A4 printing and PDF saving"],
          ].map(([emoji,title,desc])=>(
            <div key={title} style={{ display:"flex", gap:12, padding:"10px 0", borderBottom:`1px solid ${C.border}` }}>
              <span style={{ fontSize:18, flexShrink:0 }}>{emoji}</span>
              <div>
                <p style={{ fontSize:13, fontWeight:600, color:C.charcoal, margin:0 }}>{title}</p>
                <p style={{ fontSize:12, color:C.gray, margin:"2px 0 0" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pro gate or Generate button */}
        {loading ? (
          <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:"40px 24px", textAlign:"center" }}>
            <div style={{ fontSize:32, marginBottom:12 }}>📖</div>
            <p style={{ fontSize:14, color:C.gray }}>Checking your plan…</p>
          </div>
        ) : !isPro ? (
          <div style={{ background:"linear-gradient(135deg,#18181B,#2D1810)", borderRadius:20, padding:"40px 28px", textAlign:"center", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", inset:0, opacity:0.08, background:"radial-gradient(circle at 50% 50%,#C8541A,transparent 70%)" }}/>
            <div style={{ position:"relative" }}>
              <Crown size={36} color="#E8894A" style={{ marginBottom:14 }}/>
              <h3 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:"#fff", marginBottom:10 }}>Heritage Book — Pro Only</h3>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.5)", marginBottom:24, maxWidth:360, margin:"0 auto 24px", lineHeight:1.7 }}>
                Generate a beautiful printable PDF of your family&apos;s rituals, members, and heritage. Available on Pro.
              </p>
              <Link href="/upgrade" style={{ display:"inline-flex", alignItems:"center", gap:8, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", padding:"13px 32px", borderRadius:12, fontSize:14, fontWeight:700, textDecoration:"none", boxShadow:"0 8px 28px rgba(200,84,26,0.4)" }}>
                <Crown size={16}/> Upgrade to Pro — ₹49/month →
              </Link>
              <p style={{ fontSize:11, color:"rgba(255,255,255,0.25)", marginTop:12 }}>Cancel anytime · Instant access</p>
            </div>
          </div>
        ) : (
          <div>
            {members.length === 0 && rituals.length === 0 ? (
              <div style={{ background:C.ivory, borderRadius:14, border:`1px solid ${C.border}`, padding:"24px", textAlign:"center", marginBottom:16 }}>
                <p style={{ fontSize:14, color:C.gray, marginBottom:12 }}>No data yet to export. Add family members and rituals first.</p>
                <div style={{ display:"flex", gap:10, justifyContent:"center" }}>
                  <Link href="/members" style={{ fontSize:13, fontWeight:600, color:C.saffron, textDecoration:"none", padding:"8px 16px", background:C.saffronLight, borderRadius:9, border:`1px solid rgba(200,84,26,0.2)` }}>Add members →</Link>
                  <Link href="/rituals" style={{ fontSize:13, fontWeight:600, color:C.forest, textDecoration:"none", padding:"8px 16px", background:C.forestLight, borderRadius:9, border:`1px solid rgba(26,92,66,0.2)` }}>Add rituals →</Link>
                </div>
              </div>
            ) : null}
            <button onClick={generateBook} disabled={generating}
              style={{ width:"100%", padding:"15px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:14, fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:F.sans, opacity:generating?0.8:1, display:"flex", alignItems:"center", justifyContent:"center", gap:10, boxShadow:"0 6px 24px rgba(200,84,26,0.35)" }}>
              {generating ? (
                <><span>Generating Heritage Book…</span></>
              ) : (
                <><BookOpen size={18}/> Generate Heritage Book</>
              )}
            </button>
            <p style={{ fontSize:12, color:C.gray, textAlign:"center", marginTop:10 }}>
              Opens in new tab → use <strong>Ctrl+P</strong> (or <strong>Cmd+P</strong> on Mac) → Save as PDF
            </p>
          </div>
        )}
      </div>
    </AppShell>
  );
}
