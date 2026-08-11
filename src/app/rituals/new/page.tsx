"use client";
import { notifyRitualAdded } from "@/lib/notifications";
import { getActiveFamily } from "@/lib/families";
import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import VoiceInput from "@/components/ui/VoiceInput";
import { useRouter } from "next/navigation";
import { type Ritual } from "@/lib/store";
import toast from "react-hot-toast";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", forest:"#1A5C42", forestLight:"#E8F4EE", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };
const inp = { width:"100%", padding:"10px 13px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:13, fontFamily:F.sans, background:C.ivory, color:C.charcoal, outline:"none", boxSizing:"border-box" as const };

export default function NewRitualPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ name:"", subtitle:"", category:"Birth", religion:"Hindu", region:"North India", language:"Hindi/Sanskrit", preparationDays:7, elderNotes:"" });
  const [steps, setSteps] = useState([""]);
  const [samagri, setSamagri] = useState([{ item:"", quantity:"", purpose:"" }]);
  const [mantra, setMantra] = useState({ devanagari:"", transliteration:"", meaning:"" });

  function addStep() { setSteps(p => [...p, ""]); }
  function updateStep(i:number, v:string) { setSteps(p => { const n=[...p]; n[i]=v; return n; }); }
  function removeStep(i:number) { setSteps(p => p.filter((_,j) => j!==i)); }
  function addSamagri() { setSamagri(p => [...p, {item:"",quantity:"",purpose:""}]); }
  function updateSamagri(i:number, k:keyof typeof samagri[0], v:string) { setSamagri(p => { const n=[...p]; n[i]={...n[i],[k]:v}; return n; }); }
  function removeSamagri(i:number) { setSamagri(p => p.filter((_,j) => j!==i)); }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) return toast.error("Ritual name is required");
    const cleanSteps = steps.filter(s => s.trim());
    if (cleanSteps.length === 0) return toast.error("Add at least one step");
    setSaving(true);
    const newRitual: Ritual = {
      id: `ritual-${Date.now()}`,
      name: form.name.trim(),
      subtitle: form.subtitle.trim() || form.category,
      category: form.category,
      religion: [form.religion],
      region: form.region,
      language: form.language,
      performedCount: 0,
      steps: cleanSteps,
      samagri: samagri.filter(s => s.item.trim()),
      mantras: mantra.devanagari.trim() ? [mantra] : [],
      elderNotes: form.elderNotes.trim(),
      preparationDays: form.preparationDays,
      isTemplate: false,
      createdAt: new Date().toISOString(),
    };
    try {
      const existing = JSON.parse(localStorage.getItem(`parampara_rituals_${getActiveFamily()?.id||"default"}`) || "[]");
      localStorage.setItem(`parampara_rituals_${getActiveFamily()?.id||"default"}`, JSON.stringify([...existing, newRitual]));
      toast.success(`${newRitual.name} documented and preserved! 🙏`);
      const af = getActiveFamily();
      notifyRitualAdded(newRitual.name, localStorage.getItem('parampara_user_name')||'Someone', af?.id||'default', af?.name||'Family');
      router.push(`/rituals/${newRitual.id}`);
    } catch {
      toast.error("Failed to save. Please try again.");
      setSaving(false);
    }
  }

  const sectionCard = { background:C.white, borderRadius:12, border:`1px solid ${C.border}`, padding:"20px 22px", marginBottom:16 };
  const labelStyle = { fontSize:12, fontWeight:600 as const, color:C.charcoal, display:"block" as const, marginBottom:6 };

  return (
    <AppShell>
      <div style={{ padding:"24px", maxWidth:680, margin:"0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
          <Link href="/rituals" style={{ display:"flex", alignItems:"center", justifyContent:"center", width:36, height:36, borderRadius:9, border:`1px solid ${C.border}`, background:C.white, textDecoration:"none", flexShrink:0 }}>
            <ArrowLeft size={16} color={C.gray}/>
          </Link>
          <div>
            <h1 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, margin:0 }}>Document a Ritual</h1>
            <p style={{ fontSize:13, color:C.gray, marginTop:3 }}>Preserve this tradition for future generations</p>
          </div>
        </div>

        <form onSubmit={handleSave}>

          {/* Basic info */}
          <div style={sectionCard}>
            <h2 style={{ fontFamily:F.serif, fontSize:15, fontWeight:600, color:C.charcoal, margin:"0 0 16px" }}>Basic Information</h2>

            <label style={labelStyle}>Ritual name *</label>
            <div style={{ marginBottom:14 }}>
              <VoiceInput value={form.name} onChange={v => setForm(f=>({...f,name:v}))} placeholder="e.g., Namkaran, Vivah, Satyanarayan Puja" required/>
            </div>

            <label style={labelStyle}>Short description</label>
            <div style={{ marginBottom:14 }}>
              <VoiceInput value={form.subtitle} onChange={v => setForm(f=>({...f,subtitle:v}))} placeholder="e.g., Naming ceremony performed 10 days after birth"/>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              {([
                {k:"category",l:"Category",opts:["Birth","Naming","Mundan","Thread Ceremony","Marriage","Housewarming","Festival","Death & Remembrance","Annual Tradition","Custom"]},
                {k:"religion",l:"Religion",opts:["Hindu","Sikh","Muslim","Christian","Jain","Buddhist","Other"]},
                {k:"region",l:"Region",opts:["North India","South India","East India","West India","Bengal","Punjab","Gujarat","Maharashtra","Tamil Nadu","Kerala","Rajasthan","Pan India","Other"]},
                {k:"language",l:"Language",opts:["Hindi/Sanskrit","Tamil","Telugu","Kannada","Malayalam","Bengali","Punjabi","Gujarati","Marathi","English","Other"]},
              ] as const).map(({ k, l, opts }) => (
                <div key={k}>
                  <label style={labelStyle}>{l}</label>
                  <select value={form[k as keyof typeof form] as string} onChange={e => setForm(f=>({...f,[k]:e.target.value}))} style={inp}>
                    {opts.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>
            <div style={{ marginTop:12 }}>
              <label style={labelStyle}>Preparation days before ceremony</label>
              <input type="number" value={form.preparationDays} onChange={e => setForm(f=>({...f,preparationDays:+e.target.value}))} min={0} max={365} style={{...inp,width:120}}/>
            </div>
          </div>

          {/* Steps */}
          <div style={sectionCard}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
              <h2 style={{ fontFamily:F.serif, fontSize:15, fontWeight:600, color:C.charcoal, margin:0 }}>Step-by-step Process *</h2>
              <button type="button" onClick={addStep} style={{ display:"flex", alignItems:"center", gap:4, fontSize:12, color:C.saffron, background:"none", border:"none", cursor:"pointer", fontWeight:500 }}>
                <Plus size={13}/> Add step
              </button>
            </div>
            <p style={{ fontSize:11, color:C.gray, marginBottom:12 }}>Tip: Use the 🎙 mic icon to dictate steps by voice</p>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {steps.map((step, i) => (
                <div key={i} style={{ display:"flex", gap:8, alignItems:"flex-start" }}>
                  <span style={{ width:24, textAlign:"center", fontSize:12, color:C.saffron, fontWeight:600, flexShrink:0, paddingTop:11 }}>{i+1}</span>
                  <div style={{ flex:1 }}>
                    <VoiceInput value={step} onChange={v => updateStep(i, v)} placeholder={`Step ${i+1}…`}/>
                  </div>
                  {steps.length > 1 && (
                    <button type="button" onClick={() => removeStep(i)} style={{ background:"none", border:"none", cursor:"pointer", color:"#DDD", display:"flex", paddingTop:10 }}>
                      <Trash2 size={13}/>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Samagri */}
          <div style={sectionCard}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
              <h2 style={{ fontFamily:F.serif, fontSize:15, fontWeight:600, color:C.charcoal, margin:0 }}>Pooja Samagri</h2>
              <button type="button" onClick={addSamagri} style={{ display:"flex", alignItems:"center", gap:4, fontSize:12, color:C.saffron, background:"none", border:"none", cursor:"pointer", fontWeight:500 }}>
                <Plus size={13}/> Add item
              </button>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr auto auto", gap:6, marginBottom:8 }}>
              <span style={{ fontSize:11, color:C.gray, fontWeight:500 }}>Item</span>
              <span style={{ fontSize:11, color:C.gray, fontWeight:500, width:80, textAlign:"center" }}>Quantity</span>
              <span style={{ width:28 }}/>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {samagri.map((s, i) => (
                <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 80px 28px", gap:6, alignItems:"center" }}>
                  <VoiceInput value={s.item} onChange={v => updateSamagri(i,"item",v)} placeholder="e.g., Ghee"/>
                  <input value={s.quantity} onChange={e => updateSamagri(i,"quantity",e.target.value)} placeholder="500g" style={inp}/>
                  <button type="button" onClick={() => removeSamagri(i)} style={{ background:"none", border:"none", cursor:"pointer", color:"#DDD", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <Trash2 size={13}/>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Mantra */}
          <div style={sectionCard}>
            <h2 style={{ fontFamily:F.serif, fontSize:15, fontWeight:600, color:C.charcoal, margin:"0 0 16px" }}>Mantra / Prayer (optional)</h2>
            <label style={labelStyle}>Sanskrit / Devanagari</label>
            <div style={{ marginBottom:12 }}>
              <VoiceInput value={mantra.devanagari} onChange={v => setMantra(m=>({...m,devanagari:v}))} placeholder="ॐ नमः शिवाय…" lang="hi-IN" style={{ fontFamily:"'Noto Serif Devanagari',serif", fontSize:16 }}/>
            </div>
            <label style={labelStyle}>Transliteration</label>
            <div style={{ marginBottom:12 }}>
              <VoiceInput value={mantra.transliteration} onChange={v => setMantra(m=>({...m,transliteration:v}))} placeholder="Om Namah Shivaya…"/>
            </div>
            <label style={labelStyle}>Meaning in English</label>
            <VoiceInput value={mantra.meaning} onChange={v => setMantra(m=>({...m,meaning:v}))} placeholder="I bow to Shiva…"/>
          </div>

          {/* Elder notes */}
          <div style={sectionCard}>
            <h2 style={{ fontFamily:F.serif, fontSize:15, fontWeight:600, color:C.charcoal, margin:"0 0 12px" }}>Elder&apos;s Notes</h2>
            <p style={{ fontSize:11, color:C.gray, marginBottom:12 }}>Click the mic 🎙 to dictate in Hindi, Punjabi or English</p>
            <VoiceInput
              value={form.elderNotes}
              onChange={v => setForm(f=>({...f,elderNotes:v}))}
              placeholder="What do your elders say about this ritual? Any family-specific variations, stories, or important notes to preserve for future generations…"
              multiline
              rows={4}
            />
          </div>

          <div style={{ display:"flex", gap:12 }}>
            <Link href="/rituals" style={{ flex:1, padding:"13px", border:`1px solid ${C.border}`, borderRadius:10, fontSize:13, fontWeight:500, textAlign:"center", textDecoration:"none", color:C.gray, background:C.white, display:"block" }}>
              Cancel
            </Link>
            <button type="submit" disabled={saving} style={{ flex:2, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:10, padding:"13px", fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:F.sans }}>
              {saving ? "Preserving ritual…" : "Save Ritual 🙏"}
            </button>
          </div>
        </form>
      </div>
    </AppShell>
  );
}
