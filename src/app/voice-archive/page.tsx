"use client";
import { useState, useEffect, useRef } from "react";
import { getActiveFamily } from "@/lib/families";
import AppShell from "@/components/layout/AppShell";
import { Mic, MicOff, Play, Pause, Trash2, Plus, X, Square } from "lucide-react";
import toast from "react-hot-toast";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", forest:"#1A5C42", forestLight:"#E8F4EE", gold:"#B8922A", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff", red:"#DC2626" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };

type VoiceMemo = { id:string; title:string; elder:string; ritual?:string; duration:number; createdAt:string; dataUrl:string; };

function formatTime(secs: number): string {
  const m = Math.floor(secs/60); const s = secs%60;
  return `${m}:${String(s).padStart(2,"0")}`;
}

export default function VoiceArchivePage() {
  const [memos, setMemos]         = useState<VoiceMemo[]>([]);
  const [recording, setRecording] = useState(false);
  const [elapsed, setElapsed]     = useState(0);
  const [playing, setPlaying]     = useState<string|null>(null);
  const [showForm, setShowForm]   = useState(false);
  const [deleteId, setDeleteId]   = useState<string|null>(null);
  const [form, setForm]           = useState({ title:"", elder:"", ritual:"" });
  const [pendingBlob, setPendingBlob] = useState<Blob|null>(null);

  const mediaRef   = useRef<MediaRecorder|null>(null);
  const chunksRef  = useRef<Blob[]>([]);
  const timerRef   = useRef<NodeJS.Timeout|null>(null);
  const audioRef   = useRef<HTMLAudioElement|null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(`parampara_voice_archive_${getActiveFamily()?.id || "default"}`);
      if (raw) setMemos(JSON.parse(raw));
    } catch {}
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  function saveMemos(updated: VoiceMemo[]) {
    setMemos(updated);
    try { localStorage.setItem(`parampara_voice_archive_${getActiveFamily()?.id || "default"}`, JSON.stringify(updated)); } catch {
      toast.error("Storage full — some recordings may not save. Consider deleting old ones.");
    }
  }

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio:true });
      const mr = new MediaRecorder(stream, { mimeType: MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "audio/mp4" });
      chunksRef.current = [];
      mr.ondataavailable = e => { if (e.data.size > 0) chunksRef.current.push(e.data); };
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mr.mimeType });
        setPendingBlob(blob);
        setShowForm(true);
        stream.getTracks().forEach(t => t.stop());
      };
      mr.start(100);
      mediaRef.current = mr;
      setRecording(true);
      setElapsed(0);
      timerRef.current = setInterval(() => setElapsed(e => e+1), 1000);
    } catch {
      toast.error("Microphone access denied. Please allow microphone in browser settings.");
    }
  }

  function stopRecording() {
    mediaRef.current?.stop();
    if (timerRef.current) clearInterval(timerRef.current);
    setRecording(false);
  }

  async function saveMemo() {
    if (!form.title.trim() || !form.elder.trim()) { toast.error("Please add a title and elder's name"); return; }
    if (!pendingBlob) return;
    const reader = new FileReader();
    reader.onload = () => {
      const memo: VoiceMemo = {
        id: `voice-${Date.now()}`,
        title: form.title.trim(),
        elder: form.elder.trim(),
        ritual: form.ritual.trim() || undefined,
        duration: elapsed,
        createdAt: new Date().toISOString(),
        dataUrl: reader.result as string,
      };
      saveMemos([memo, ...memos]);
      setShowForm(false);
      setPendingBlob(null);
      setForm({ title:"", elder:"", ritual:"" });
      setElapsed(0);
      toast.success("Voice memo saved! 🎙️");
    };
    reader.readAsDataURL(pendingBlob);
  }

  function togglePlay(memo: VoiceMemo) {
    if (playing === memo.id) {
      audioRef.current?.pause();
      setPlaying(null);
      return;
    }
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ""; }
    const audio = new Audio(memo.dataUrl);
    audio.onended = () => setPlaying(null);
    audio.play();
    audioRef.current = audio;
    setPlaying(memo.id);
  }

  function deleteMemo(id: string) {
    if (playing === id) { audioRef.current?.pause(); setPlaying(null); }
    saveMemos(memos.filter(m => m.id !== id));
    setDeleteId(null);
    toast.success("Deleted");
  }

  function formatDate(d: string) { return new Date(d).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}); }

  const inp: React.CSSProperties = { width:"100%", padding:"10px 13px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:13, fontFamily:F.sans, background:C.ivory, color:C.charcoal, outline:"none", boxSizing:"border-box", marginBottom:12 };

  return (
    <AppShell>
      {/* Save memo modal */}
      {showForm && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div style={{ background:C.white, borderRadius:20, padding:"28px 24px", width:"100%", maxWidth:420, position:"relative" }}>
            <button onClick={()=>{setShowForm(false);setPendingBlob(null);}} style={{ position:"absolute", top:14, right:14, background:"none", border:"none", cursor:"pointer", color:C.gray }}><X size={20}/></button>
            <div style={{ fontSize:32, marginBottom:12 }}>🎙️</div>
            <h2 style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:6 }}>Save Voice Memo</h2>
            <p style={{ fontSize:13, color:C.gray, marginBottom:20 }}>Recorded {formatTime(elapsed)} of precious wisdom</p>
            <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Title *</label>
            <input value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} placeholder="e.g., Dadi explaining Satyanarayan puja" style={inp}/>
            <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Elder's name *</label>
            <input value={form.elder} onChange={e=>setForm(f=>({...f,elder:e.target.value}))} placeholder="e.g., Dadi, Nana ji, Chachi" style={inp}/>
            <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Related ritual (optional)</label>
            <input value={form.ritual} onChange={e=>setForm(f=>({...f,ritual:e.target.value}))} placeholder="e.g., Satyanarayan Katha" style={{...inp, marginBottom:20}}/>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={()=>{setShowForm(false);setPendingBlob(null);}} style={{ flex:1, padding:"11px", border:`1px solid ${C.border}`, borderRadius:10, fontSize:13, cursor:"pointer", background:C.white, fontFamily:F.sans }}>Discard</button>
              <button onClick={saveMemo} style={{ flex:1, padding:"11px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, border:"none", borderRadius:10, fontSize:13, fontWeight:600, color:"#fff", cursor:"pointer", fontFamily:F.sans }}>Save memo 🎙️</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleteId && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div style={{ background:C.white, borderRadius:16, padding:28, maxWidth:320, width:"100%" }}>
            <h3 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Delete this recording?</h3>
            <p style={{ fontSize:13, color:C.gray, marginBottom:20 }}>This voice memo will be permanently deleted and cannot be recovered.</p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={()=>setDeleteId(null)} style={{ flex:1, padding:"10px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:13, cursor:"pointer", background:C.white, fontFamily:F.sans }}>Cancel</button>
              <button onClick={()=>deleteMemo(deleteId)} style={{ flex:1, padding:"10px", background:C.red, border:"none", borderRadius:9, fontSize:13, fontWeight:600, color:"#fff", cursor:"pointer", fontFamily:F.sans }}>Delete</button>
            </div>
          </div>
        </div>
      )}

      <div style={{ padding:"24px 20px", maxWidth:680, margin:"0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom:20 }}>
          <h1 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, margin:0 }}>Elder Voice Archive</h1>
          <p style={{ fontSize:13, color:C.gray, marginTop:3 }}>Record your elders' wisdom before it's lost forever</p>
        </div>

        {/* Recorder */}
        <div style={{ background:recording?"linear-gradient(135deg,#2D1810,#18181B)":C.charcoal, borderRadius:20, padding:"32px 24px", textAlign:"center", marginBottom:20, transition:"background 0.5s" }}>
          {recording ? (
            <>
              <div style={{ display:"flex", justifyContent:"center", gap:4, marginBottom:20 }}>
                {Array.from({length:20}).map((_,i)=>(
                  <div key={i} style={{ width:3, background:"#E8894A", borderRadius:3, height:Math.random()*40+8, animation:`waveform 0.8s ease-in-out ${i*0.05}s infinite alternate` }}/>
                ))}
              </div>
              <p style={{ fontFamily:F.serif, fontSize:32, fontWeight:700, color:"#E8894A", marginBottom:8 }}>{formatTime(elapsed)}</p>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.5)", marginBottom:24 }}>Recording…</p>
              <button onClick={stopRecording}
                style={{ display:"inline-flex", alignItems:"center", gap:10, background:"#DC2626", color:"#fff", border:"none", borderRadius:50, padding:"16px 32px", fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:F.sans, boxShadow:"0 0 0 8px rgba(220,38,38,0.2)" }}>
                <Square size={18} fill="#fff"/> Stop Recording
              </button>
            </>
          ) : (
            <>
              <div style={{ width:72, height:72, borderRadius:"50%", background:"rgba(255,255,255,0.06)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", fontSize:32 }}>🎙️</div>
              <p style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:"#fff", marginBottom:8 }}>Record a voice memo</p>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.4)", marginBottom:24, maxWidth:320, margin:"0 auto 24px", lineHeight:1.6 }}>
                Capture your elder explaining a ritual, narrating a tradition, or reciting a mantra in their own voice.
              </p>
              <button onClick={startRecording}
                style={{ display:"inline-flex", alignItems:"center", gap:10, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:50, padding:"16px 32px", fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:F.sans, boxShadow:"0 8px 28px rgba(200,84,26,0.45)" }}>
                <Mic size={18}/> Start Recording
              </button>
            </>
          )}
        </div>

        {/* Memos list */}
        {memos.length === 0 ? (
          <div style={{ background:C.white, borderRadius:14, border:`1px solid ${C.border}`, padding:"40px 24px", textAlign:"center" }}>
            <p style={{ fontSize:32, marginBottom:10 }}>🎙️</p>
            <p style={{ fontSize:15, fontWeight:600, color:C.charcoal, marginBottom:6 }}>No recordings yet</p>
            <p style={{ fontSize:13, color:C.gray, lineHeight:1.6 }}>Press the button above to record your first voice memo from an elder. These recordings are priceless.</p>
          </div>
        ) : (
          <div>
            <p style={{ fontSize:12, fontWeight:600, color:C.charcoal, marginBottom:12, letterSpacing:0.5 }}>{memos.length} RECORDING{memos.length!==1?"S":""}</p>
            {memos.map(memo => (
              <div key={memo.id} style={{ background:C.white, borderRadius:14, border:`1px solid ${playing===memo.id?C.saffron:C.border}`, marginBottom:10, overflow:"hidden", transition:"border-color 0.2s" }}>
                <div style={{ display:"flex", alignItems:"center", gap:12, padding:"14px 16px" }}>
                  {/* Play button */}
                  <button onClick={()=>togglePlay(memo)}
                    style={{ width:44, height:44, borderRadius:"50%", background:playing===memo.id?`linear-gradient(135deg,${C.saffron},#B8922A)`:"rgba(200,84,26,0.1)", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"background 0.2s" }}>
                    {playing===memo.id ? <Pause size={16} color="#fff"/> : <Play size={16} color={C.saffron}/>}
                  </button>
                  <div style={{ flex:1, minWidth:0 }}>
                    <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:0, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{memo.title}</p>
                    <div style={{ display:"flex", gap:10, marginTop:3, flexWrap:"wrap" }}>
                      <span style={{ fontSize:11, color:C.saffron, fontWeight:600 }}>🧓 {memo.elder}</span>
                      {memo.ritual && <span style={{ fontSize:11, color:C.gray }}>📜 {memo.ritual}</span>}
                      <span style={{ fontSize:11, color:C.gray }}>⏱ {formatTime(memo.duration)}</span>
                      <span style={{ fontSize:11, color:C.gray }}>{formatDate(memo.createdAt)}</span>
                    </div>
                  </div>
                  <button onClick={()=>setDeleteId(memo.id)}
                    style={{ background:"#FEF2F2", border:"none", borderRadius:8, padding:"7px 8px", cursor:"pointer", display:"flex", alignItems:"center", color:C.red, flexShrink:0 }}>
                    <Trash2 size={13}/>
                  </button>
                </div>
                {/* Playing progress bar */}
                {playing === memo.id && (
                  <div style={{ height:3, background:`linear-gradient(90deg,${C.saffron},#B8922A)`, animation:"progress 3s linear infinite" }}/>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tips */}
        <div style={{ background:C.white, borderRadius:12, border:`1px solid ${C.border}`, padding:16, marginTop:16 }}>
          <p style={{ fontSize:12, fontWeight:600, color:C.charcoal, marginBottom:10 }}>💡 RECORDING TIPS</p>
          {[
            "Record in a quiet room — turn off fans and TV",
            "Ask open questions: 'How did your mother perform this puja?'",
            "The most valuable question: 'What should I never forget about this ritual?'",
            "Record during actual rituals — natural narration is priceless",
            "Even 5 minutes of your Dadi's voice is irreplaceable",
          ].map(tip=>(
            <div key={tip} style={{ display:"flex", gap:8, marginBottom:6 }}>
              <span style={{ color:C.saffron, fontSize:12 }}>→</span>
              <span style={{ fontSize:12, color:C.gray, lineHeight:1.5 }}>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes waveform { from{opacity:0.4} to{opacity:1} }
        @keyframes progress { from{width:0%} to{width:100%} }
      `}</style>
    </AppShell>
  );
}
