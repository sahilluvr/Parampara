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
import { petalBurst } from "@/components/ui/Joy";
import { announceMilestone } from "@/components/billing/UpgradeNudge";

const C = { saffron:"#D6246E", saffronLight:"#FCE8F0", border:"rgba(122,63,217,0.15)", forest:"#0F7A73", forestLight:"#E3F4F2", ivory:"#F8F6FC", charcoal:"#1C1733", gray:"#625C7A", white:"#fff" };
const F = { serif:"'Bricolage Grotesque',system-ui,sans-serif", sans:"'Inter',system-ui,sans-serif" };
const inp = { width:"100%", padding:"10px 13px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:13, fontFamily:F.sans, background:C.ivory, color:C.charcoal, outline:"none", boxSizing:"border-box" as const };

export default function NewRitualPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [stage, setStage] = useState<"pick" | "write">("pick");
  const [more, setMore] = useState(false);
  const [form, setForm] = useState({ name:"", subtitle:"", category:"Festival", religion:"Hindu", region:"North India", language:"Hindi/Sanskrit", preparationDays:7, elderNotes:"" });
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
      toast.success(`${newRitual.name} saved for the family 🙏`);
      petalBurst(window.innerWidth / 2, window.innerHeight / 2, 24);
      announceMilestone();
      const af = getActiveFamily();
      notifyRitualAdded(newRitual.name, localStorage.getItem('parampara_user_name')||'Someone', af?.id||'default', af?.name||'Family');
      router.push(`/rituals/${newRitual.id}`);
    } catch {
      toast.error("Failed to save. Please try again.");
      setSaving(false);
    }
  }

  const TEMPLATES: { name: string; emoji: string; category: string; steps: string[]; samagri: string[] }[] = [
    { name: "Satyanarayan Katha", emoji: "🪔", category: "Annual Tradition", steps: ["Clean the puja place and draw a rangoli", "Place the kalash with mango leaves and a coconut", "Ganesh puja to begin", "Read the five chapters of the katha", "Aarti and distribute prasad"], samagri: ["Kalash", "Banana leaves", "Panchamrit", "Tulsi", "Sheera prasad", "Diya"] },
    { name: "Diwali Lakshmi Puja", emoji: "✨", category: "Festival", steps: ["Clean the house and make a rangoli at the door", "Set up Lakshmi and Ganesh idols on a red cloth", "Light diyas around the house", "Lakshmi puja with flowers and sweets", "Aarti and share sweets"], samagri: ["Diyas", "Red cloth", "Lakshmi-Ganesh idol", "Flowers", "Sweets", "Coins"] },
    { name: "Karva Chauth", emoji: "🌙", category: "Festival", steps: ["Sargi before sunrise", "Fast through the day", "Evening katha with the karva", "See the moon through the sieve", "Break the fast with water from husband"], samagri: ["Karva", "Sieve", "Diya", "Sargi", "Mehendi"] },
    { name: "Griha Pravesh", emoji: "🏡", category: "Housewarming", steps: ["Choose the muhurat", "Toran of mango leaves at the door", "Kalash puja at the entrance", "Enter with the right foot first", "Havan and boil milk in the new kitchen"], samagri: ["Kalash", "Mango leaves", "Coconut", "Havan samagri", "Milk"] },
    { name: "Namkaran", emoji: "👶", category: "Naming", steps: ["Bathe and dress the baby in new clothes", "Puja and havan", "Whisper the name in the baby's right ear", "Family blessings"], samagri: ["New clothes", "Havan samagri", "Rice", "Sweets"] },
    { name: "Wedding ritual", emoji: "💍", category: "Marriage", steps: ["Ganesh puja", "Haldi", "Mehendi", "Pheras around the sacred fire", "Sindoor and mangalsutra", "Vidaai"], samagri: ["Haldi", "Mehendi", "Garlands", "Sindoor", "Mangalsutra"] },
  ];

  function pickTemplate(t?: (typeof TEMPLATES)[number]) {
    if (t) {
      setForm(f => ({ ...f, name: t.name, category: t.category }));
      setSteps([...t.steps, ""]);
      setSamagri([...t.samagri.map(item => ({ item, quantity: "", purpose: "" })), { item: "", quantity: "", purpose: "" }]);
    } else {
      setForm(f => ({ ...f, name: "" })); setSteps(["", ""]); setSamagri([{ item: "", quantity: "", purpose: "" }]);
    }
    setStage("write");
  }

  function stepKey(e: React.KeyboardEvent, i: number) {
    if (e.key === "Enter") { e.preventDefault(); if (i === steps.length - 1) addStep(); setTimeout(() => (document.getElementById(`step-${i + 1}`) as HTMLInputElement | null)?.focus(), 0); }
  }

  return (
    <AppShell>
      <div className="rn">
        <div className="rn-top">
          {stage === "write"
            ? <button type="button" className="rn-icon" onClick={() => setStage("pick")} aria-label="Back"><ArrowLeft size={18}/></button>
            : <Link href="/rituals" className="rn-icon" aria-label="Back"><ArrowLeft size={18}/></Link>}
          <div>
            <h1>{stage === "pick" ? "Save a ritual" : (form.name || "Your ritual")}</h1>
            <p>{stage === "pick" ? "Start from a common one or write your own." : "Write it the way your family does it."}</p>
          </div>
        </div>

        {stage === "pick" ? (
          <div className="rn-grid">
            {TEMPLATES.map((t, i) => (
              <button key={t.name} type="button" className="rn-tpl" style={{ animationDelay: `${i * 50}ms` }} onClick={() => pickTemplate(t)}>
                <span className="rn-emoji">{t.emoji}</span><b>{t.name}</b><small>{t.steps.length} steps ready to edit</small>
              </button>
            ))}
            <button type="button" className="rn-tpl rn-tpl-own" onClick={() => pickTemplate()}>
              <span className="rn-emoji">✍️</span><b>Write my own</b><small>Any ritual, any tradition</small>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSave} className="rn-form">
            <label className="rn-label" htmlFor="rn-name">Name of the ritual</label>
            <VoiceInput value={form.name} onChange={v=>setForm(f=>({...f,name:v}))} placeholder="e.g., Dadi's Teej puja"/>

            <label className="rn-label">Steps <span>press Enter for the next step</span></label>
            <ol className="rn-steps">
              {steps.map((st, i) => (
                <li key={i}>
                  <span className="rn-n">{i + 1}</span>
                  <input id={`step-${i}`} className="rn-input" value={st} onChange={e=>updateStep(i, e.target.value)} onKeyDown={e=>stepKey(e, i)} placeholder={i === 0 ? "What happens first?" : "Then…"}/>
                  {steps.length > 1 && <button type="button" className="rn-del" onClick={()=>removeStep(i)} aria-label={`Remove step ${i + 1}`}><Trash2 size={16}/></button>}
                </li>
              ))}
            </ol>
            <button type="button" className="rn-add" onClick={addStep}><Plus size={16}/> Add a step</button>

            <label className="rn-label">Things you&apos;ll need</label>
            <div className="rn-chips">
              {samagri.map((sm, i) => (
                <span key={i} className="rn-chip">
                  <input value={sm.item} onChange={e=>updateSamagri(i, "item", e.target.value)} onKeyDown={e=>{ if (e.key === "Enter") { e.preventDefault(); addSamagri(); } }} placeholder={i === samagri.length - 1 ? "+ add item" : ""} size={Math.max(8, sm.item.length + 1)}/>
                  {sm.item && <button type="button" onClick={()=>removeSamagri(i)} aria-label={`Remove ${sm.item}`}>×</button>}
                </span>
              ))}
            </div>

            <label className="rn-label" htmlFor="rn-tip">A tip from the elders <span>optional</span></label>
            <textarea id="rn-tip" className="rn-input" rows={3} value={form.elderNotes} onChange={e=>setForm(f=>({...f, elderNotes:e.target.value}))} placeholder="e.g., Dadi always added tulsi to the panchamrit first"/>

            <button type="button" className="rn-more" onClick={()=>setMore(v=>!v)} aria-expanded={more}>{more ? "− Fewer options" : "+ More options (mantra, region, language)"}</button>
            {more && (
              <div className="rn-more-box">
                <div className="rn-two">
                  <div><label className="rn-label">Type</label>
                    <select className="rn-input" value={form.category} onChange={e=>setForm(f=>({...f,category:e.target.value}))}>
                      {["Birth","Naming","Mundan","Thread Ceremony","Marriage","Housewarming","Festival","Death & Remembrance","Annual Tradition","Custom"].map(c=><option key={c}>{c}</option>)}
                    </select></div>
                  <div><label className="rn-label">Faith</label>
                    <select className="rn-input" value={form.religion} onChange={e=>setForm(f=>({...f,religion:e.target.value}))}>
                      {["Hindu","Sikh","Muslim","Christian","Jain","Buddhist","Other"].map(c=><option key={c}>{c}</option>)}
                    </select></div>
                  <div><label className="rn-label">Region</label><input className="rn-input" value={form.region} onChange={e=>setForm(f=>({...f,region:e.target.value}))}/></div>
                  <div><label className="rn-label">Language</label><input className="rn-input" value={form.language} onChange={e=>setForm(f=>({...f,language:e.target.value}))}/></div>
                </div>
                <label className="rn-label">Mantra</label>
                <input className="rn-input" value={mantra.devanagari} onChange={e=>setMantra(m=>({...m,devanagari:e.target.value}))} placeholder="In Devanagari or Gurmukhi"/>
                <input className="rn-input" style={{ marginTop: 8 }} value={mantra.meaning} onChange={e=>setMantra(m=>({...m,meaning:e.target.value}))} placeholder="Meaning (optional)"/>
              </div>
            )}

            <button type="submit" className="rn-save" disabled={saving}>{saving ? "Saving…" : "Save ritual for the family"}</button>
          </form>
        )}
      </div>
      <style>{`
        .rn { padding:24px 18px 80px; max-width:720px; margin:0 auto; font-family:'Inter',system-ui,sans-serif; color:#1C1733; }
        .rn-top { display:flex; gap:12px; align-items:center; margin-bottom:22px; }
        .rn-top h1 { font-family:'Bricolage Grotesque',system-ui,sans-serif; font-weight:800; font-size:clamp(24px,3.4vw,32px); letter-spacing:-0.02em; margin:0; }
        .rn-top p { margin:2px 0 0; color:#625C7A; font-size:16px; }
        .rn-icon { width:44px; height:44px; border-radius:14px; border:1.5px solid #E6E1F0; background:#fff; display:flex; align-items:center; justify-content:center; color:#1C1733; cursor:pointer; flex-shrink:0; }
        .rn-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:12px; }
        .rn-tpl { display:flex; flex-direction:column; align-items:flex-start; gap:4px; text-align:left; padding:18px; border-radius:20px; border:1.5px solid #E6E1F0; background:#fff; cursor:pointer; font-family:inherit; color:#1C1733; animation:rnIn .4s cubic-bezier(.2,.7,.2,1) both; transition:transform .2s ease, border-color .2s ease, background .2s ease; }
        .rn-tpl:hover { transform:translateY(-3px); border-color:#D6246E; background:#FCE8F0; }
        .rn-tpl b { font-size:17px; } .rn-tpl small { color:#625C7A; font-size:13px; }
        .rn-emoji { font-size:32px; line-height:1.1; margin-bottom:4px; }
        .rn-tpl-own { background:#FFF4DC; border-color:#FFB224; }
        .rn-form { background:#fff; border:1px solid #E6E1F0; border-radius:24px; padding:20px; }
        .rn-label { display:block; font-weight:700; font-size:16px; margin:18px 0 8px; }
        .rn-label:first-child { margin-top:0; }
        .rn-label span { font-weight:500; color:#625C7A; font-size:13px; margin-left:6px; }
        .rn-input { width:100%; box-sizing:border-box; padding:13px 14px; border:1.5px solid #E6E1F0; border-radius:12px; font-size:16px; font-family:inherit; background:#F8F6FC; color:#1C1733; outline:none; resize:vertical; }
        .rn-input:focus { border-color:#D6246E; background:#fff; }
        .rn-steps { list-style:none; padding:0; margin:0; display:grid; gap:8px; }
        .rn-steps li { display:flex; gap:10px; align-items:center; animation:rnIn .3s ease both; }
        .rn-n { width:32px; height:32px; border-radius:50%; background:#D6246E; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:14px; flex-shrink:0; }
        .rn-del { background:none; border:none; color:#A9A3C2; cursor:pointer; padding:6px; }
        .rn-add, .rn-more { margin-top:10px; background:none; border:none; color:#D6246E; font-weight:700; font-size:15px; cursor:pointer; display:inline-flex; align-items:center; gap:6px; padding:6px 0; font-family:inherit; }
        .rn-more { color:#7A3FD9; margin-top:18px; }
        .rn-chips { display:flex; flex-wrap:wrap; gap:8px; }
        .rn-chip { display:inline-flex; align-items:center; background:#FFF4DC; border-radius:999px; padding:6px 12px; border:1.5px solid transparent; }
        .rn-chip:focus-within { border-color:#FFB224; }
        .rn-chip input { border:none; background:none; outline:none; font-size:15px; font-family:inherit; color:#1C1733; min-width:60px; }
        .rn-chip button { border:none; background:none; color:#625C7A; cursor:pointer; font-size:18px; line-height:1; padding:0 0 0 6px; }
        .rn-more-box { background:#F8F6FC; border-radius:16px; padding:2px 14px 14px; margin-top:8px; }
        .rn-more-box .rn-input { background:#fff; }
        .rn-two { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
        .rn-save { width:100%; margin-top:24px; padding:17px; border:none; border-radius:14px; background:#D6246E; color:#fff; font-size:17px; font-weight:800; cursor:pointer; font-family:inherit; }
        .rn-save:hover { background:#B0175A; }
        .rn-tpl:focus-visible, .rn-save:focus-visible, .rn-add:focus-visible, .rn-icon:focus-visible { outline:3px solid #FFB224; outline-offset:2px; }
        @keyframes rnIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }
        @media (max-width:480px) { .rn-grid { grid-template-columns:1fr; } .rn-two { grid-template-columns:1fr; } }
        @media (prefers-reduced-motion: reduce) { .rn-tpl, .rn-steps li { animation:none; } }
      `}</style>
    </AppShell>
  );
}
