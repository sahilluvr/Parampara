"use client";
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import { Plus, X, Check, Trash2, Heart, Lock, Crown } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import { getActiveFamily } from "@/lib/families";
import { syncPlanFromSupabase } from "@/lib/plan";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", forest:"#1A5C42", forestLight:"#E8F4EE", gold:"#B8922A", goldLight:"#F9F3E3", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff", cream:"#F5F0E8" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };

type MannatStatus = "active" | "fulfilled" | "transferred";

type Mannat = {
  id: string;
  title: string;
  deity: string;
  description: string;
  takenBy: string;
  takenOn: string;
  fulfilBy?: string;
  ritual?: string; // what ritual to perform when fulfilled
  isPrivate: boolean;
  status: MannatStatus;
  fulfilledOn?: string;
  notes?: string;
  createdAt: string;
};

// Deities/figures grouped by religion. Shown based on the family's selected
// religion (from family settings), with a universal "Other" fallback so the
// label fits any tradition or non-religious vow.
const DEITIES_BY_RELIGION: Record<string, string[]> = {
  Hindu: ["Lord Satyanarayan", "Mata Vaishno Devi", "Lord Hanuman", "Maa Durga", "Lord Shiva", "Lord Ganesha", "Lord Vishnu", "Maa Lakshmi", "Lord Krishna", "Sai Baba"],
  Sikh: ["Guru Nanak Dev Ji", "Guru Gobind Singh Ji", "Sri Guru Granth Sahib Ji", "Waheguru"],
  Muslim: ["Allah", "Khwaja Garib Nawaz", "A specific Dargah/Shrine", "A specific Pir/Sufi saint"],
  Christian: ["Jesus Christ", "Mother Mary", "Holy Spirit", "A specific Saint", "A specific Church"],
  Jain: ["Lord Mahavir", "A specific Tirthankara", "A specific Jain deity"],
  Buddhist: ["Lord Buddha", "A specific Bodhisattva", "A specific Buddhist figure"],
  Other: ["A specific figure or focus of the vow"],
};
// Example rituals per religion — used to make the "ritual to perform" field
// placeholder feel native to the family's own tradition instead of always
// showing Hindu examples regardless of who's using it.
const RITUAL_EXAMPLES_BY_RELIGION: Record<string, string> = {
  Hindu: "e.g., Satyanarayan puja, 108 pradakshina, visit to Vaishno Devi",
  Sikh: "e.g., Akhand Path, langar at the gurudwara, Kirtan",
  Muslim: "e.g., Sadaqah (charity), visit to a Dargah, fasting for a set number of days",
  Christian: "e.g., a Mass of thanksgiving, a pilgrimage, a charitable donation",
  Jain: "e.g., a Tapasya (fast), temple darshan, a donation to the Jain Sangh",
  Buddhist: "e.g., merit-making offerings, a temple visit, sponsoring a meal for monks",
  Other: "e.g., a specific act, donation, or visit promised when the vow is fulfilled",
};
function getDeitiesForReligion(religion?: string): string[] {
  const key = religion && DEITIES_BY_RELIGION[religion] ? religion : "Other";
  const list = DEITIES_BY_RELIGION[key] || [];
  return key === "Other" ? list : [...list, "Other"];
}
function getRitualPlaceholder(religion?: string): string {
  return RITUAL_EXAMPLES_BY_RELIGION[religion || ""] || RITUAL_EXAMPLES_BY_RELIGION.Other;
}
const DEITIES = getDeitiesForReligion(); // neutral fallback before family religion loads
const EMPTY_FORM = { title:"", deity:"Other", deityOther:"", description:"", takenBy:"", takenOn:"", fulfilBy:"", ritual:"", isPrivate:false, notes:"" };
const STATUS_META: Record<MannatStatus, { label:string; color:string; bg:string; emoji:string }> = {
  active:     { label:"Active",    color:"#1A5C42", bg:"#E8F4EE", emoji:"🙏" },
  fulfilled:  { label:"Fulfilled", color:"#B8922A", bg:"#F9F3E3", emoji:"✅" },
  transferred:{ label:"Transferred",color:"#71717A",bg:"#F4F4F5", emoji:"🔄" },
};

const inp: React.CSSProperties = { width:"100%", padding:"10px 13px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:13, fontFamily:F.sans, background:C.ivory, color:C.charcoal, outline:"none", boxSizing:"border-box", marginBottom:12 };
const lbl: React.CSSProperties = { fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:5 };

export default function MannatsPage() {
  const [mannats, setMannats]     = useState<Mannat[]>([]);
  const [isPro, setIsPro]         = useState(false);
  const [planLoading, setPlanLoading] = useState(true);
  const [showForm, setShowForm]   = useState(false);
  const [editId, setEditId]       = useState<string|null>(null);
  const [deleteId, setDeleteId]   = useState<string|null>(null);
  const [fulfillId, setFulfillId] = useState<string|null>(null);
  const [filter, setFilter]       = useState<"all"|MannatStatus>("all");
  const [form, setForm]           = useState(EMPTY_FORM);
  const [saving, setSaving]       = useState(false);
  const [expanded, setExpanded]   = useState<string|null>(null);
  const [deityOptions, setDeityOptions] = useState<string[]>(DEITIES);
  const [familyReligion, setFamilyReligion] = useState<string|undefined>(undefined);

  useEffect(() => {
    const religion = getActiveFamily()?.religion;
    setFamilyReligion(religion);
    setDeityOptions(getDeitiesForReligion(religion));
  }, []);

  function emptyForm() {
    const opts = getDeitiesForReligion(getActiveFamily()?.religion);
    return { ...EMPTY_FORM, deity: opts[0] || "Other" };
  }

  const storageKey = () => {
    const fid = getActiveFamily()?.id || "default";
    return `parampara_mannats_${fid}`;
  };

  useEffect(() => {
    syncPlanFromSupabase().then(p => { setIsPro(p === "pro"); setPlanLoading(false); });
    try {
      const raw = localStorage.getItem(storageKey());
      if (raw) setMannats(JSON.parse(raw));
    } catch {}
  }, []);

  function save(updated: Mannat[]) {
    setMannats(updated);
    localStorage.setItem(storageKey(), JSON.stringify(updated));
  }

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim()) return toast.error("Please enter what the mannat is for");
    if (!form.takenBy.trim()) return toast.error("Please enter who took the mannat");
    if (!form.takenOn) return toast.error("Please enter when the mannat was taken");
    setSaving(true);
    const resolvedDeity = form.deity === "Other" && form.deityOther.trim() ? form.deityOther.trim() : form.deity;
    setTimeout(() => {
      if (editId) {
        const updated = mannats.map(m => m.id===editId ? { ...m, ...form, deity:resolvedDeity, title:form.title.trim(), takenBy:form.takenBy.trim(), description:form.description.trim(), ritual:form.ritual.trim(), notes:form.notes.trim() } : m);
        save(updated);
        toast.success("Mannat updated 🙏");
      } else {
        const newMannat: Mannat = { id:`mannat-${Date.now()}`, ...form, deity:resolvedDeity, title:form.title.trim(), takenBy:form.takenBy.trim(), description:form.description.trim(), ritual:form.ritual.trim(), notes:form.notes.trim(), status:"active", createdAt:new Date().toISOString() };
        save([newMannat, ...mannats]);
        toast.success("Mannat logged 🙏 May it be fulfilled!");
      }
      setShowForm(false); setEditId(null); setForm(emptyForm()); setSaving(false);
    }, 500);
  }

  function markFulfilled(id: string) {
    const updated = mannats.map(m => m.id===id ? { ...m, status:"fulfilled" as MannatStatus, fulfilledOn:new Date().toISOString() } : m);
    save(updated);
    setFulfillId(null);
    toast.success("Jai Shri Ram! Mannat fulfilled 🙏✨", { duration:4000 });
  }

  function openEdit(m: Mannat) {
    const isKnown = deityOptions.includes(m.deity);
    setForm({ title:m.title, deity:isKnown?m.deity:"Other", deityOther:isKnown?"":m.deity, description:m.description||"", takenBy:m.takenBy, takenOn:m.takenOn, fulfilBy:m.fulfilBy||"", ritual:m.ritual||"", isPrivate:m.isPrivate, notes:m.notes||"" });
    setEditId(m.id); setShowForm(true);
  }

  function formatDate(d?: string) {
    if (!d) return "";
    return new Date(d).toLocaleDateString("en-IN",{ day:"numeric", month:"long", year:"numeric" });
  }

  const filtered = mannats.filter(m => filter==="all" || m.status===filter);
  const active    = mannats.filter(m=>m.status==="active").length;
  const fulfilled = mannats.filter(m=>m.status==="fulfilled").length;

  return (
    <AppShell>
      {/* Form modal */}
      {showForm && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:16, overflowY:"auto" }}>
          <div style={{ background:C.white, borderRadius:20, padding:"28px 24px", width:"100%", maxWidth:500, position:"relative", margin:"auto" }}>
            <button onClick={()=>{setShowForm(false);setEditId(null);setForm(emptyForm());}} style={{ position:"absolute", top:14, right:14, background:"none", border:"none", cursor:"pointer", color:C.gray }}><X size={20}/></button>
            <div style={{ fontSize:32, marginBottom:8 }}>🙏</div>
            <h2 style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:4 }}>{editId?"Edit Mannat":"Log a Mannat"}</h2>
            <p style={{ fontSize:13, color:C.gray, marginBottom:20 }}>Document this sacred vow so it is never forgotten</p>
            <form onSubmit={submitForm}>
              <label style={lbl}>What is the mannat? *</label>
              <input value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} placeholder="e.g., Complete recovery of Mama ji" required style={inp}/>

              <label style={lbl}>Deity, Figure, or Focus *</label>
              <select value={form.deity} onChange={e=>setForm(f=>({...f,deity:e.target.value}))} style={inp}>
                {deityOptions.map(d=><option key={d}>{d}</option>)}
              </select>
              {form.deity === "Other" && (
                <input
                  value={form.deityOther || ""}
                  onChange={e=>setForm(f=>({...f,deityOther:e.target.value}))}
                  placeholder="Name who or what this vow is directed to"
                  style={inp}
                />
              )}

              <label style={lbl}>Taken by *</label>
              <input value={form.takenBy} onChange={e=>setForm(f=>({...f,takenBy:e.target.value}))} placeholder="e.g., Dadi, Maa, Chacha ji" required style={inp}/>

              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                <div>
                  <label style={lbl}>Date taken *</label>
                  <input type="date" value={form.takenOn} onChange={e=>setForm(f=>({...f,takenOn:e.target.value}))} required style={inp}/>
                </div>
                <div>
                  <label style={lbl}>Fulfil by (optional)</label>
                  <input type="date" value={form.fulfilBy} onChange={e=>setForm(f=>({...f,fulfilBy:e.target.value}))} style={inp}/>
                </div>
              </div>

              <label style={lbl}>Description (the full vow)</label>
              <textarea value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))} placeholder="Describe the mannat in full — what was promised, under what circumstances..." rows={3} style={{...inp, resize:"vertical"}}/>

              <label style={lbl}>Ritual to perform when fulfilled</label>
              <input value={form.ritual} onChange={e=>setForm(f=>({...f,ritual:e.target.value}))} placeholder={getRitualPlaceholder(familyReligion)} style={inp}/>

              <label style={lbl}>Additional notes</label>
              <input value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))} placeholder="Any special conditions, family context..." style={inp}/>

              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20, padding:"12px 14px", background:C.ivory, borderRadius:9, border:`1px solid ${C.border}` }}>
                <input type="checkbox" id="private" checked={form.isPrivate} onChange={e=>setForm(f=>({...f,isPrivate:e.target.checked}))} style={{ width:16, height:16, accentColor:C.saffron }}/>
                <label htmlFor="private" style={{ fontSize:13, color:C.charcoal, cursor:"pointer", display:"flex", alignItems:"center", gap:6 }}>
                  <Lock size={13} color={C.gray}/> Keep private (only visible to you)
                </label>
              </div>

              <div style={{ display:"flex", gap:10 }}>
                <button type="button" onClick={()=>{setShowForm(false);setEditId(null);setForm(emptyForm());}} style={{ flex:1, padding:"11px", border:`1px solid ${C.border}`, borderRadius:10, fontSize:13, cursor:"pointer", background:C.white, fontFamily:F.sans }}>Cancel</button>
                <button type="submit" disabled={saving} style={{ flex:2, padding:"11px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, border:"none", borderRadius:10, fontSize:13, fontWeight:700, color:"#fff", cursor:"pointer", fontFamily:F.sans, opacity:saving?0.8:1 }}>
                  {saving ? "Saving…" : editId ? "Update Mannat" : "Log Mannat 🙏"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleteId && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div style={{ background:C.white, borderRadius:16, padding:28, maxWidth:320, width:"100%" }}>
            <h3 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Remove this mannat?</h3>
            <p style={{ fontSize:13, color:C.gray, marginBottom:20 }}>This record will be permanently deleted.</p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={()=>setDeleteId(null)} style={{ flex:1, padding:"10px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:13, cursor:"pointer", background:C.white, fontFamily:F.sans }}>Cancel</button>
              <button onClick={()=>{ save(mannats.filter(m=>m.id!==deleteId)); setDeleteId(null); toast.success("Removed"); }} style={{ flex:1, padding:"10px", background:"#DC2626", border:"none", borderRadius:9, fontSize:13, fontWeight:600, color:"#fff", cursor:"pointer", fontFamily:F.sans }}>Remove</button>
            </div>
          </div>
        </div>
      )}

      {/* Fulfill confirm */}
      {fulfillId && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div style={{ background:C.white, borderRadius:20, padding:"28px 24px", maxWidth:360, width:"100%", textAlign:"center" }}>
            <div style={{ fontSize:48, marginBottom:14 }}>🙏</div>
            <h3 style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Mark as Fulfilled?</h3>
            <p style={{ fontSize:13, color:C.gray, marginBottom:8, lineHeight:1.6 }}>
              {mannats.find(m=>m.id===fulfillId)?.ritual && (
                <>Before marking as fulfilled, remember to perform: <strong style={{ color:C.saffron }}>{mannats.find(m=>m.id===fulfillId)?.ritual}</strong></>
              )}
            </p>
            <p style={{ fontSize:12, color:C.gray, marginBottom:24 }}>Jai Shri Ram 🙏 The mannat has been fulfilled.</p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={()=>setFulfillId(null)} style={{ flex:1, padding:"11px", border:`1px solid ${C.border}`, borderRadius:10, fontSize:13, cursor:"pointer", background:C.white, fontFamily:F.sans }}>Cancel</button>
              <button onClick={()=>markFulfilled(fulfillId)} style={{ flex:1, padding:"11px", background:`linear-gradient(135deg,${C.forest},#B8922A)`, border:"none", borderRadius:10, fontSize:13, fontWeight:700, color:"#fff", cursor:"pointer", fontFamily:F.sans }}>
                Mark Fulfilled ✅
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{ padding:"20px", maxWidth:720, margin:"0 auto" }}>
        {/* Header */}
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:20, flexWrap:"wrap", gap:10 }}>
          <div>
            <h1 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, margin:0 }}>Family Mannats</h1>
            <p style={{ fontSize:13, color:C.gray, marginTop:3 }}>Sacred vows — never let them be forgotten</p>
          </div>
          {isPro && !planLoading && (
            <button onClick={()=>{setForm(emptyForm());setEditId(null);setShowForm(true);}}
              style={{ display:"flex", alignItems:"center", gap:6, background:C.saffron, color:"#fff", border:"none", borderRadius:10, padding:"10px 18px", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:F.sans }}>
              <Plus size={14}/> Log Mannat
            </button>
          )}
        </div>

        {/* Pro gate */}
        {planLoading ? (
          <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:"48px 24px", textAlign:"center" }}>
            <p style={{ fontSize:14, color:C.gray }}>Checking access…</p>
          </div>
        ) : !isPro ? (
          <div style={{ background:"linear-gradient(135deg,#18181B,#2D1810)", borderRadius:20, padding:"48px 28px", textAlign:"center", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", inset:0, opacity:0.08, background:"radial-gradient(circle at 50% 50%,#C8541A,transparent 70%)" }}/>
            <div style={{ position:"relative" }}>
              <div style={{ width:72, height:72, borderRadius:"50%", background:"rgba(200,84,26,0.15)", border:"1px solid rgba(200,84,26,0.3)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", fontSize:36 }}>🙏</div>
              <h2 style={{ fontFamily:F.serif, fontSize:24, fontWeight:600, color:"#fff", marginBottom:10 }}>Family Mannats — Pro Only</h2>
              <p style={{ fontSize:14, color:"rgba(255,255,255,0.5)", maxWidth:380, margin:"0 auto 24px", lineHeight:1.7 }}>
                Log and track your family&apos;s sacred vows — who took them, what or whom they were made to, and what to do when they&apos;re fulfilled. For every faith and tradition.
              </p>
              <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap", marginBottom:28 }}>
                {["🪔 Ritual to perform","🗓️ Fulfil by date","🔒 Private vows","✅ Mark fulfilled","📝 Elder&apos;s context"].map(f=>(
                  <span key={f} style={{ fontSize:12, color:"rgba(255,255,255,0.6)", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:20, padding:"5px 14px" }}>{f}</span>
                ))}
              </div>
              <Link href="/upgrade" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"linear-gradient(135deg,#C8541A,#B8922A)", color:"#fff", padding:"13px 32px", borderRadius:12, fontSize:14, fontWeight:700, textDecoration:"none", boxShadow:"0 8px 28px rgba(200,84,26,0.4)" }}>
                <Crown size={16}/> Upgrade to Pro — ₹49/month →
              </Link>
              <p style={{ fontSize:11, color:"rgba(255,255,255,0.2)", marginTop:12 }}>Cancel anytime · Instant access</p>
            </div>
          </div>
        ) : (
          <div>
        {/* Stats */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginBottom:20 }}>
          {[
            ["Active vows", active, "🙏", C.forest, C.forestLight],
            ["Fulfilled", fulfilled, "✅", C.gold, C.goldLight],
            ["Total", mannats.length, "📿", C.saffron, C.saffronLight],
          ].map(([label,val,emoji,color,bg])=>(
            <div key={label as string} style={{ background:C.white, borderRadius:12, padding:"14px 12px", border:`1px solid ${C.border}`, textAlign:"center" }}>
              <p style={{ fontSize:20, margin:0 }}>{emoji}</p>
              <p style={{ fontFamily:F.serif, fontSize:24, fontWeight:700, color:color as string, margin:"4px 0 0" }}>{val}</p>
              <p style={{ fontSize:11, color:C.gray, margin:0 }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display:"flex", gap:6, marginBottom:16, flexWrap:"wrap" }}>
          {(["all","active","fulfilled","transferred"] as const).map(f=>(
            <button key={f} onClick={()=>setFilter(f)}
              style={{ padding:"6px 14px", borderRadius:20, border:`1px solid ${filter===f?C.saffron:C.border}`, background:filter===f?C.saffronLight:"transparent", color:filter===f?C.saffron:C.gray, fontSize:12, fontWeight:filter===f?700:400, cursor:"pointer", fontFamily:F.sans }}>
              {f==="all"?"All":STATUS_META[f as MannatStatus].emoji+" "+STATUS_META[f as MannatStatus].label}
            </button>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:"48px 24px", textAlign:"center" }}>
            <div style={{ fontSize:48, marginBottom:14 }}>🙏</div>
            <h2 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:8 }}>
              {filter==="all" ? "No mannats logged yet" : `No ${filter} mannats`}
            </h2>
            <p style={{ fontSize:13, color:C.gray, marginBottom:20, lineHeight:1.6, maxWidth:360, margin:"0 auto 20px" }}>
              A mannat is a sacred vow — taken in faith, for a child&apos;s health, a family member&apos;s recovery, or a wish fulfilled. Whatever your tradition, document it here so it&apos;s never forgotten.
            </p>
            <button onClick={()=>{setForm(emptyForm());setShowForm(true);}}
              style={{ display:"inline-flex", alignItems:"center", gap:8, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:12, padding:"12px 28px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:F.sans }}>
              <Plus size={14}/> Log first mannat
            </button>
          </div>
        )}

        {/* Mannats list */}
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          {filtered.map(m => {
            const meta = STATUS_META[m.status];
            const isExpanded = expanded === m.id;
            return (
              <div key={m.id} style={{ background:C.white, borderRadius:16, border:`2px solid ${m.status==="active"?C.saffron:m.status==="fulfilled"?C.gold:C.border}`, overflow:"hidden" }}>
                {/* Top row */}
                <div style={{ padding:"16px 18px", cursor:"pointer", display:"flex", gap:14, alignItems:"flex-start" }} onClick={()=>setExpanded(isExpanded?null:m.id)}>
                  <div style={{ width:44, height:44, borderRadius:12, background:meta.bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>
                    {meta.emoji}
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap", marginBottom:4 }}>
                      <p style={{ fontSize:15, fontWeight:700, color:C.charcoal, margin:0 }}>{m.title}</p>
                      {m.isPrivate && <Lock size={12} color={C.gray}/>}
                      <span style={{ fontSize:10, fontWeight:700, background:meta.bg, color:meta.color, padding:"2px 8px", borderRadius:20 }}>{meta.label}</span>
                    </div>
                    <p style={{ fontSize:12, color:C.gray, margin:0 }}>
                      {m.deity} · Taken by <strong style={{ color:C.charcoal }}>{m.takenBy}</strong> · {formatDate(m.takenOn)}
                    </p>
                    {m.fulfilBy && m.status==="active" && (
                      <p style={{ fontSize:11, color:C.saffron, margin:"3px 0 0", fontWeight:500 }}>⏰ Fulfil by {formatDate(m.fulfilBy)}</p>
                    )}
                  </div>
                  <span style={{ fontSize:18, color:C.gray, flexShrink:0 }}>{isExpanded?"▲":"▼"}</span>
                </div>

                {/* Expanded details */}
                {isExpanded && (
                  <div style={{ padding:"0 18px 18px", borderTop:`1px solid ${C.border}` }}>
                    {m.description && (
                      <div style={{ background:C.ivory, borderRadius:10, padding:"12px 14px", marginTop:14, marginBottom:12, borderLeft:`3px solid ${C.saffron}` }}>
                        <p style={{ fontSize:11, fontWeight:700, color:C.saffron, margin:"0 0 4px", letterSpacing:0.5 }}>THE VOW</p>
                        <p style={{ fontSize:13, color:C.charcoal, margin:0, lineHeight:1.7, fontStyle:"italic" }}>&ldquo;{m.description}&rdquo;</p>
                      </div>
                    )}
                    {m.ritual && (
                      <div style={{ background:C.forestLight, borderRadius:10, padding:"10px 14px", marginBottom:12, border:`1px solid rgba(26,92,66,0.15)` }}>
                        <p style={{ fontSize:11, fontWeight:700, color:C.forest, margin:"0 0 4px" }}>🪔 RITUAL TO PERFORM</p>
                        <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>{m.ritual}</p>
                      </div>
                    )}
                    {m.notes && (
                      <div style={{ background:C.goldLight, borderRadius:10, padding:"10px 14px", marginBottom:12, border:`1px solid rgba(184,146,42,0.15)` }}>
                        <p style={{ fontSize:11, fontWeight:700, color:C.gold, margin:"0 0 4px" }}>📝 NOTES</p>
                        <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>{m.notes}</p>
                      </div>
                    )}
                    {m.fulfilledOn && (
                      <p style={{ fontSize:12, color:C.forest, margin:"0 0 12px", fontWeight:500 }}>✅ Fulfilled on {formatDate(m.fulfilledOn)}</p>
                    )}
                    <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginTop:4 }}>
                      {m.status === "active" && (
                        <button onClick={()=>setFulfillId(m.id)}
                          style={{ display:"flex", alignItems:"center", gap:6, background:`linear-gradient(135deg,${C.forest},#1A7A50)`, color:"#fff", border:"none", borderRadius:9, padding:"8px 16px", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:F.sans }}>
                          <Check size={13}/> Mark Fulfilled
                        </button>
                      )}
                      <button onClick={()=>openEdit(m)}
                        style={{ display:"flex", alignItems:"center", gap:6, background:C.ivory, border:`1px solid ${C.border}`, borderRadius:9, padding:"8px 14px", fontSize:12, fontWeight:500, cursor:"pointer", color:C.charcoal, fontFamily:F.sans }}>
                        Edit
                      </button>
                      <button onClick={()=>setDeleteId(m.id)}
                        style={{ display:"flex", alignItems:"center", gap:6, background:"#FEF2F2", border:"1px solid rgba(220,38,38,0.15)", borderRadius:9, padding:"8px 12px", fontSize:12, cursor:"pointer", color:"#DC2626", fontFamily:F.sans }}>
                        <Trash2 size={12}/>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* What is a mannat */}
        {mannats.length === 0 && (
          <div style={{ background:C.white, borderRadius:12, border:`1px solid ${C.border}`, padding:16, marginTop:16 }}>
            <p style={{ fontSize:12, fontWeight:600, color:C.charcoal, marginBottom:10 }}>🙏 WHAT IS A MANNAT?</p>
            {[
              ["A sacred vow","A mannat is a promise made in faith — 'If this happens, I will do this' — a practice found across Hindu, Sikh, Muslim, Christian, Jain, and Buddhist families alike."],
              ["Examples","'If Mama ji recovers, I will do Satyanarayan puja' · 'I will offer langar at the gurudwara when my daughter is born' · 'If I find work, I will give Sadaqah' · 'I promised a Mass of thanksgiving if she healed'"],
              ["Why document it","Mannats are often taken in moments of crisis — and forgotten when the crisis passes. Generations lose track of what was promised. This is how family vows go unfulfilled."],
            ].map(([title,desc])=>(
              <div key={title} style={{ marginBottom:10 }}>
                <p style={{ fontSize:12, fontWeight:600, color:C.saffron, margin:"0 0 2px" }}>{title}</p>
                <p style={{ fontSize:12, color:C.gray, margin:0, lineHeight:1.5 }}>{desc}</p>
              </div>
            ))}
          </div>
        )}
          </div>
        )}
      </div>
    </AppShell>
  );
}
