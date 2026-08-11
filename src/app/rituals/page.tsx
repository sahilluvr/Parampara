"use client";
import { getActiveFamily, migrateLegacyData } from "@/lib/families";
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import { SAMPLE_RITUAL, type Ritual } from "@/lib/store";
import Link from "next/link";
import { Plus, Trash2, Search, Filter } from "lucide-react";
import toast from "react-hot-toast";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", forest:"#1A5C42", forestLight:"#E8F4EE", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };

const CATEGORIES = ["All","Birth","Naming","Mundan","Thread Ceremony","Marriage","Housewarming","Festival","Annual Tradition","Custom"];

export default function RitualsPage() {
  const [rituals, setRituals] = useState<Ritual[]>([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [confirmDelete, setConfirmDelete] = useState<string|null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(`parampara_rituals_${getActiveFamily()?.id||"default"}`);
      if (stored) setRituals(JSON.parse(stored));
    } catch {}
  }, []);

  function deleteRitual(id: string) {
    const updated = rituals.filter(r => r.id !== id);
    setRituals(updated);
    localStorage.setItem(`parampara_rituals_${getActiveFamily()?.id||"default"}`, JSON.stringify(updated));
    setConfirmDelete(null);
    toast.success("Ritual deleted");
  }

  const filtered = rituals.filter(r => {
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase()) || r.subtitle.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || r.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <AppShell>
      <div style={{ padding:"24px", maxWidth:840, margin:"0 auto" }}>

        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
          <div>
            <h1 style={{ fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, margin:0 }}>Ritual Vault</h1>
            <p style={{ fontSize:13, color:C.gray, marginTop:4 }}>{rituals.length} ritual{rituals.length!==1?"s":""} documented</p>
          </div>
          <Link href="/rituals/new" style={{ display:"flex", alignItems:"center", gap:6, background:C.saffron, color:"#fff", padding:"10px 18px", borderRadius:10, fontSize:13, fontWeight:600, textDecoration:"none" }}>
            <Plus size={14}/> Document Ritual
          </Link>
        </div>

        {/* Search */}
        <div style={{ position:"relative", marginBottom:14 }}>
          <Search size={15} color={C.gray} style={{ position:"absolute", left:12, top:"50%", transform:"translateY(-50%)" }}/>
          <input
            value={search}
            onChange={e=>setSearch(e.target.value)}
            placeholder="Search rituals…"
            style={{ width:"100%", padding:"10px 12px 10px 36px", border:`1px solid ${C.border}`, borderRadius:10, fontSize:13, fontFamily:F.sans, background:C.white, color:C.charcoal, outline:"none", boxSizing:"border-box" }}
          />
        </div>

        {/* Category filters */}
        <div style={{ display:"flex", gap:8, marginBottom:20, flexWrap:"wrap" }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={()=>setActiveCategory(cat)} style={{ padding:"6px 14px", borderRadius:20, fontSize:12, fontWeight:500, border:`1px solid ${activeCategory===cat?"#C8541A":"rgba(200,84,26,0.2)"}`, background:activeCategory===cat?C.saffron:C.white, color:activeCategory===cat?"#fff":C.gray, cursor:"pointer", transition:"all 0.15s" }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Delete confirmation modal */}
        {confirmDelete && (
          <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:24 }}>
            <div style={{ background:C.white, borderRadius:16, padding:28, maxWidth:360, width:"100%" }}>
              <h3 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Delete ritual?</h3>
              <p style={{ fontSize:13, color:C.gray, marginBottom:24, lineHeight:1.6 }}>This will permanently remove this ritual and all its steps, samagri, and notes. This cannot be undone.</p>
              <div style={{ display:"flex", gap:10 }}>
                <button onClick={()=>setConfirmDelete(null)} style={{ flex:1, padding:"11px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:13, fontWeight:500, cursor:"pointer", color:C.gray, background:C.white, fontFamily:F.sans }}>Cancel</button>
                <button onClick={()=>deleteRitual(confirmDelete)} style={{ flex:1, padding:"11px", background:"#DC2626", border:"none", borderRadius:9, fontSize:13, fontWeight:600, cursor:"pointer", color:"#fff", fontFamily:F.sans }}>Delete</button>
              </div>
            </div>
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && rituals.length === 0 && (
          <div style={{ textAlign:"center", padding:"60px 24px", background:C.white, borderRadius:16, border:`1px solid ${C.border}` }}>
            <div style={{ fontSize:48, marginBottom:12 }}>📜</div>
            <h2 style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:8 }}>No rituals yet</h2>
            <p style={{ fontSize:13, color:C.gray, maxWidth:360, margin:"0 auto 24px", lineHeight:1.6 }}>Start by documenting your family's first ritual. Add steps, samagri, mantras and elder notes.</p>
            <Link href="/rituals/new" style={{ display:"inline-flex", alignItems:"center", gap:6, background:C.saffron, color:"#fff", padding:"12px 24px", borderRadius:10, fontSize:14, fontWeight:600, textDecoration:"none" }}>
              Document first ritual →
            </Link>
          </div>
        )}

        {filtered.length === 0 && rituals.length > 0 && (
          <div style={{ textAlign:"center", padding:40, color:C.gray }}>
            <p style={{ fontSize:14 }}>No rituals match your search.</p>
            <button onClick={()=>{setSearch("");setActiveCategory("All");}} style={{ marginTop:10, fontSize:12, color:C.saffron, background:"none", border:"none", cursor:"pointer", fontWeight:500 }}>Clear filters</button>
          </div>
        )}

        {/* Ritual list */}
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {filtered.map(r => (
            <div key={r.id} style={{ background:C.white, borderRadius:12, border:`1px solid ${C.border}`, borderLeft:`3px solid ${C.saffron}`, overflow:"hidden" }}>
              <Link href={`/rituals/${r.id}`} style={{ display:"block", padding:"16px 18px", textDecoration:"none" }}>
                <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:10 }}>
                  <div style={{ flex:1 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                      <h2 style={{ fontFamily:F.serif, fontSize:16, fontWeight:600, color:C.charcoal, margin:0 }}>{r.name}</h2>
                      {r.isTemplate && <span style={{ fontSize:9, background:C.forestLight, color:C.forest, padding:"2px 7px", borderRadius:10, fontWeight:500 }}>sample</span>}
                    </div>
                    <p style={{ fontSize:12, color:C.gray, margin:0 }}>{r.subtitle}</p>
                  </div>
                  <span style={{ fontSize:11, fontWeight:500, background:C.saffronLight, color:C.saffron, padding:"3px 10px", borderRadius:20, flexShrink:0 }}>{r.category}</span>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginTop:8, fontSize:11, color:C.gray, flexWrap:"wrap" }}>
                  <span>🕉 {r.religion.join(", ")}</span>
                  <span>·</span>
                  <span>📍 {r.region}</span>
                  <span>·</span>
                  <span>{r.steps.filter(Boolean).length} steps</span>
                  <span>·</span>
                  <span>{r.samagri.filter(s=>s.item).length} samagri items</span>
                  {r.performedCount > 0 && <span style={{ marginLeft:"auto", color:C.forest, fontWeight:500 }}>✓ {r.performedCount}× performed</span>}
                </div>
              </Link>
              {/* Delete button row */}
              <div style={{ padding:"8px 18px", borderTop:`1px solid ${C.border}`, display:"flex", alignItems:"center", justifyContent:"flex-end", background:"#FAFAF9" }}>
                <button onClick={()=>setConfirmDelete(r.id)} style={{ display:"flex", alignItems:"center", gap:4, fontSize:11, color:"#DC2626", background:"none", border:"none", cursor:"pointer", padding:"4px 8px", borderRadius:6, fontFamily:F.sans }}>
                  <Trash2 size={12}/> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
