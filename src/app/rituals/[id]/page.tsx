"use client";
import { getActiveFamily } from "@/lib/families";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import AppShell from "@/components/layout/AppShell";
import { SAMPLE_RITUAL, type Ritual } from "@/lib/store";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Sparkles, List, BookOpen, Music, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", saffronMid:"rgba(200,84,26,0.1)", border:"rgba(184,146,42,0.15)", forest:"#1A5C42", forestLight:"#E8F4EE", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif", dev:"'Noto Serif Devanagari',serif" };

export default function RitualDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [ritual, setRitual] = useState<Ritual|null>(null);
  const [notFound, setNotFound] = useState(false);
  const [tab, setTab] = useState<"steps"|"samagri"|"mantras"|"ai">("steps");
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [aiLoading, setAiLoading] = useState(false);
  const [aiText, setAiText] = useState("");
  const [performed, setPerformed] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    if (!id) return;
    try {
      const stored = JSON.parse(localStorage.getItem(`parampara_rituals_${getActiveFamily()?.id||"default"}`) || "[]") as Ritual[];
      const found = stored.find(r => r.id === id);
      if (found) { setRitual(found); }
      else { setNotFound(true); }
    } catch { setNotFound(true); }
  }, [id]);

  function toggleCheck(i:number) {
    setChecked(prev=>{const n=new Set(prev);n.has(i)?n.delete(i):n.add(i);return n;});
  }

  function markPerformed() {
    setPerformed(true);
    if (!ritual) return;
    try {
      const stored = JSON.parse(localStorage.getItem(`parampara_rituals_${getActiveFamily()?.id||"default"}`) || "[]") as Ritual[];
      const updated = stored.map(r => r.id === id ? { ...r, performedCount: r.performedCount + 1 } : r);
      localStorage.setItem(`parampara_rituals_${getActiveFamily()?.id||"default"}`, JSON.stringify(updated));
      setRitual(r => r ? { ...r, performedCount: r.performedCount + 1 } : r);
    } catch {}
    toast.success(`${ritual.name} marked as performed! 🙏`);
  }

  function deleteRitual() {
    try {
      const stored = JSON.parse(localStorage.getItem(`parampara_rituals_${getActiveFamily()?.id||"default"}`) || "[]") as Ritual[];
      const updated = stored.filter(r => r.id !== id);
      localStorage.setItem(`parampara_rituals_${getActiveFamily()?.id||"default"}`, JSON.stringify(updated));
      toast.success("Ritual deleted");
      router.push("/rituals");
    } catch { toast.error("Could not delete"); }
  }

  async function loadAI() {
    setTab("ai");
    if (aiText || !ritual) return;
    setAiLoading(true);
    try {
      const res = await fetch("/api/ai/explain-ritual", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ ritualName:ritual.name, religion:ritual.religion[0], region:ritual.region }) });
      const data = await res.json();
      setAiText(data.explanation || data.error || "Could not load explanation. Make sure ANTHROPIC_API_KEY is set in Vercel.");
    } catch { setAiText("Unable to connect to AI. Please check your ANTHROPIC_API_KEY in Vercel settings."); }
    setAiLoading(false);
  }

  if (notFound) {
    return (
      <AppShell>
        <div style={{ padding:60, textAlign:"center" }}>
          <p style={{ fontSize:48, marginBottom:12 }}>🙏</p>
          <h1 style={{ fontFamily:F.serif, fontSize:22, color:C.charcoal, marginBottom:8 }}>Ritual not found</h1>
          <p style={{ color:C.gray, marginBottom:24, fontSize:14 }}>This ritual may have been deleted or doesn&apos;t exist.</p>
          <Link href="/rituals" style={{ background:C.saffron, color:"#fff", padding:"11px 24px", borderRadius:10, fontSize:14, fontWeight:600, textDecoration:"none" }}>← Back to Ritual Vault</Link>
        </div>
      </AppShell>
    );
  }

  if (!ritual) {
    return (
      <AppShell>
        <div style={{ padding:60, textAlign:"center", color:C.gray, fontSize:14 }}>Loading ritual…</div>
      </AppShell>
    );
  }

  const tabs = [
    {id:"steps",label:"Steps",icon:List},
    {id:"samagri",label:"Samagri",icon:BookOpen},
    {id:"mantras",label:"Mantras",icon:Music},
    {id:"ai",label:"AI Insight",icon:Sparkles},
  ] as const;

  return (
    <AppShell>
      <div style={{ padding:"24px", maxWidth:720, margin:"0 auto" }}>

        {/* Delete confirm modal */}
        {showDeleteConfirm && (
          <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:24 }}>
            <div style={{ background:C.white, borderRadius:16, padding:28, maxWidth:360, width:"100%" }}>
              <h3 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Delete "{ritual.name}"?</h3>
              <p style={{ fontSize:13, color:C.gray, marginBottom:24, lineHeight:1.6 }}>All steps, samagri, mantras, and notes will be permanently removed. This cannot be undone.</p>
              <div style={{ display:"flex", gap:10 }}>
                <button onClick={()=>setShowDeleteConfirm(false)} style={{ flex:1, padding:"11px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:13, fontWeight:500, cursor:"pointer", color:C.gray, background:C.white, fontFamily:F.sans }}>Cancel</button>
                <button onClick={deleteRitual} style={{ flex:1, padding:"11px", background:"#DC2626", border:"none", borderRadius:9, fontSize:13, fontWeight:600, cursor:"pointer", color:"#fff", fontFamily:F.sans }}>Delete</button>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div style={{ display:"flex", alignItems:"flex-start", gap:12, marginBottom:20 }}>
          <Link href="/rituals" style={{ display:"flex", alignItems:"center", justifyContent:"center", width:36, height:36, borderRadius:9, border:`1px solid ${C.border}`, background:C.white, textDecoration:"none", flexShrink:0, marginTop:2 }}>
            <ArrowLeft size={16} color={C.gray}/>
          </Link>
          <div style={{ flex:1 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <h1 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, margin:0 }}>{ritual.name}</h1>
              {ritual.isTemplate && <span style={{ fontSize:10, background:C.forestLight, color:C.forest, padding:"2px 8px", borderRadius:10, fontWeight:500 }}>sample</span>}
            </div>
            <p style={{ fontSize:13, color:C.gray, margin:"3px 0 0" }}>{ritual.subtitle}</p>
          </div>
          <div style={{ display:"flex", gap:8, flexShrink:0 }}>
            <button onClick={markPerformed} style={{ display:"flex", alignItems:"center", gap:6, padding:"8px 14px", borderRadius:9, fontSize:12, fontWeight:600, border:`1px solid ${performed?C.forest:C.saffron}`, background:performed?C.forestLight:C.saffron, color:performed?C.forest:"#fff", cursor:"pointer", transition:"all 0.15s" }}>
              <CheckCircle size={14}/>
              {performed?"Performed ✓":"Mark done"}
            </button>
            <button onClick={()=>setShowDeleteConfirm(true)} style={{ display:"flex", alignItems:"center", justifyContent:"center", width:36, height:36, borderRadius:9, border:"1px solid rgba(220,38,38,0.2)", background:"#FEF2F2", cursor:"pointer" }}>
              <Trash2 size={14} color="#DC2626"/>
            </button>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:20 }}>
          {[
            {label:ritual.category,bg:C.saffronLight,color:C.saffron},
            ...ritual.religion.map(r=>({label:r,bg:C.forestLight,color:C.forest})),
            {label:`📍 ${ritual.region}`,bg:C.white,color:C.gray},
            {label:`🗣 ${ritual.language}`,bg:C.white,color:C.gray},
            {label:`📅 Prepare ${ritual.preparationDays}d ahead`,bg:C.white,color:C.gray},
            ...(ritual.performedCount>0?[{label:`✓ Performed ${ritual.performedCount}×`,bg:C.forestLight,color:C.forest}]:[]),
          ].map((t,i)=>(
            <span key={i} style={{ fontSize:11, fontWeight:500, background:t.bg, color:t.color, padding:"4px 10px", borderRadius:20, border:`1px solid ${C.border}` }}>{t.label}</span>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display:"flex", gap:3, background:C.white, borderRadius:12, padding:4, border:`1px solid ${C.border}`, marginBottom:20 }}>
          {tabs.map(({id:tid,label,icon:Icon})=>(
            <button key={tid} onClick={()=>tid==="ai"?loadAI():setTab(tid as typeof tab)}
              style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:6, padding:"9px 10px", borderRadius:9, fontSize:12, fontWeight:500, border:"none", cursor:"pointer", transition:"all 0.2s", background:tab===tid?C.saffron:"transparent", color:tab===tid?"#fff":C.gray, fontFamily:F.sans }}>
              <Icon size={13}/>{label}
            </button>
          ))}
        </div>

        {/* Steps tab */}
        {tab==="steps" && (
          <div>
            <div style={{ background:C.white, borderRadius:12, border:`1px solid ${C.border}`, padding:"18px 20px", marginBottom:14 }}>
              {ritual.steps.filter(Boolean).length === 0 ? (
                <p style={{ fontSize:13, color:C.gray, textAlign:"center", padding:"20px 0" }}>No steps documented yet.</p>
              ) : (
                <ol style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:12 }}>
                  {ritual.steps.filter(Boolean).map((step,i)=>(
                    <li key={i} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                      <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, color:C.saffron, fontSize:11, fontWeight:600, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>{i+1}</span>
                      <span style={{ fontSize:14, color:C.charcoal, lineHeight:1.65, paddingTop:3 }}>{step}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>
            {ritual.elderNotes && (
              <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:12, padding:16 }}>
                <p style={{ fontSize:12, fontWeight:600, color:C.saffron, margin:"0 0 8px" }}>📜 Elder&apos;s Notes</p>
                <p style={{ fontSize:13, color:C.charcoal, lineHeight:1.7, fontStyle:"italic", margin:0 }}>&ldquo;{ritual.elderNotes}&rdquo;</p>
              </div>
            )}
          </div>
        )}

        {/* Samagri tab */}
        {tab==="samagri" && (
          <div>
            {ritual.samagri.filter(s=>s.item).length === 0 ? (
              <div style={{ background:C.white, borderRadius:12, border:`1px solid ${C.border}`, padding:"40px 20px", textAlign:"center", color:C.gray, fontSize:13 }}>
                No samagri items documented yet.
              </div>
            ) : (
              <>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
                  <p style={{ fontSize:12, color:C.gray, margin:0 }}>{ritual.samagri.filter(s=>s.item).length} items · tap to check off</p>
                  <span style={{ fontSize:12, color:C.forest, fontWeight:500 }}>{checked.size}/{ritual.samagri.filter(s=>s.item).length} ready</span>
                </div>
                <div style={{ background:C.white, borderRadius:12, border:`1px solid ${C.border}`, overflow:"hidden" }}>
                  {ritual.samagri.filter(s=>s.item).map((s,i,arr)=>(
                    <div key={i} onClick={()=>toggleCheck(i)} style={{ display:"flex", alignItems:"center", gap:12, padding:"13px 16px", cursor:"pointer", borderBottom:i<arr.length-1?`1px solid ${C.border}`:"none", background:"transparent", transition:"background 0.1s" }}>
                      <div style={{ width:20, height:20, borderRadius:5, border:`2px solid ${checked.has(i)?C.forest:"#DDD"}`, background:checked.has(i)?C.forest:"#fff", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"all 0.15s" }}>
                        {checked.has(i)&&<span style={{ color:"#fff", fontSize:10, fontWeight:700 }}>✓</span>}
                      </div>
                      <div style={{ flex:1 }}>
                        <p style={{ fontSize:13, fontWeight:500, color:checked.has(i)?C.gray:C.charcoal, margin:0, textDecoration:checked.has(i)?"line-through":"none" }}>{s.item}</p>
                        {s.purpose && <p style={{ fontSize:11, color:C.gray, margin:0 }}>{s.purpose}</p>}
                      </div>
                      {s.quantity && <span style={{ fontSize:11, fontWeight:500, background:C.saffronLight, color:C.saffron, padding:"3px 8px", borderRadius:6, flexShrink:0 }}>{s.quantity}</span>}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Mantras tab */}
        {tab==="mantras" && (
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {ritual.mantras.length === 0 ? (
              <div style={{ background:C.white, borderRadius:12, border:`1px solid ${C.border}`, padding:"40px 20px", textAlign:"center", color:C.gray, fontSize:13 }}>
                No mantras documented yet. Ask your family priest to share them.
              </div>
            ) : ritual.mantras.map((m,i)=>(
              <div key={i} style={{ background:C.white, borderRadius:12, border:`1px solid ${C.border}`, padding:20 }}>
                <p style={{ fontFamily:F.dev, fontSize:18, color:C.charcoal, lineHeight:1.9, marginBottom:10 }}>{m.devanagari}</p>
                <p style={{ fontSize:13, color:C.saffron, fontStyle:"italic", marginBottom:8 }}>{m.transliteration}</p>
                <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:10 }}>
                  <p style={{ fontSize:12, color:C.gray, lineHeight:1.6, margin:0 }}>{m.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AI tab */}
        {tab==="ai" && (
          <div style={{ background:`linear-gradient(135deg,${C.saffronLight},#FAF7F2)`, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:12, padding:20 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
              <Sparkles size={16} color={C.saffron}/>
              <span style={{ fontSize:14, fontWeight:600, color:C.charcoal }}>AI Cultural Insight — {ritual.name}</span>
            </div>
            {aiLoading ? (
              <div>
                {[90,72,84,60,78].map((w,i)=>(
                  <div key={i} style={{ height:11, background:"rgba(200,84,26,0.15)", borderRadius:6, marginBottom:9, width:`${w}%`, animation:"shimmer 1.5s ease-in-out infinite" }}/>
                ))}
                <p style={{ fontSize:12, color:C.gray, marginTop:8 }}>Reading cultural knowledge…</p>
              </div>
            ) : aiText ? (
              <p style={{ fontSize:13, color:C.charcoal, lineHeight:1.8, whiteSpace:"pre-wrap", margin:0 }}>{aiText}</p>
            ) : (
              <p style={{ fontSize:13, color:C.gray, margin:0 }}>Click the AI Insight tab again to load cultural context.</p>
            )}
          </div>
        )}

      </div>
    </AppShell>
  );
}
