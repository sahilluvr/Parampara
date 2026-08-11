"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { Mic } from "lucide-react";
import toast from "react-hot-toast";

const SC = { saffron:"#C8541A", gray:"#71717A" };
type Lang = "en-IN"|"hi-IN"|"pa-IN";

interface VoiceInputProps {
  value: string; onChange: (val: string) => void;
  placeholder?: string; multiline?: boolean; rows?: number;
  style?: React.CSSProperties; required?: boolean; type?: string; lang?: Lang;
}
interface SREvent extends Event { resultIndex:number; results:SpeechRecognitionResultList; }
interface SRErrEvent extends Event { error:string; }
interface ISR extends EventTarget {
  lang:string; continuous:boolean; interimResults:boolean;
  start():void; stop():void;
  onstart:((e:Event)=>void)|null; onresult:((e:SREvent)=>void)|null;
  onerror:((e:SRErrEvent)=>void)|null; onend:((e:Event)=>void)|null;
}
type ISRCtor = new() => ISR;

function getSR(): ISRCtor|null {
  if (typeof window === "undefined") return null;
  return (window as unknown as Record<string,ISRCtor>).SpeechRecognition
    || (window as unknown as Record<string,ISRCtor>).webkitSpeechRecognition
    || null;
}

export default function VoiceInput({ value, onChange, placeholder, multiline, rows=3, style, required, type="text", lang="en-IN" }: VoiceInputProps) {
  const [listening, setListening] = useState(false);
  const [supported, setSupported] = useState(false);
  const [activeLang, setActiveLang] = useState<Lang>(lang);
  const recRef = useRef<ISR|null>(null);
  const valRef = useRef(value);
  useEffect(() => { valRef.current = value; }, [value]);
  useEffect(() => { setSupported(!!getSR()); }, []);

  const start = useCallback(() => {
    const SR = getSR();
    if (!SR) { toast.error("Speech recognition not supported. Try Chrome."); return; }
    if (listening) { recRef.current?.stop(); return; }
    const rec = new SR();
    recRef.current = rec;
    rec.lang = activeLang; rec.continuous = true; rec.interimResults = true;
    let buf = "";
    rec.onstart = () => { setListening(true); toast("🎙 Listening…", { duration:2000 }); };
    rec.onresult = (e:SREvent) => {
      for (let i=e.resultIndex; i<e.results.length; i++) {
        if (e.results[i].isFinal) buf += e.results[i][0].transcript + " ";
      }
      if (buf) {
        onChange((valRef.current ? valRef.current.trimEnd()+" " : "") + buf.trim());
        buf = "";
      }
    };
    rec.onerror = (e:SRErrEvent) => {
      if (e.error === "not-allowed") toast.error("Microphone access denied.");
      else if (e.error !== "aborted") toast.error("Speech error. Try again.");
      setListening(false);
    };
    rec.onend = () => setListening(false);
    rec.start();
  }, [listening, activeLang, onChange]);

  const stop = useCallback(() => { recRef.current?.stop(); setListening(false); }, []);

  const LANGS: {value:Lang;label:string}[] = [
    {value:"en-IN",label:"EN"}, {value:"hi-IN",label:"हि"}, {value:"pa-IN",label:"ਪੰ"},
  ];

  const baseStyle: React.CSSProperties = {
    width:"100%", background:"#FAF7F2", color:"#18181B", outline:"none",
    border:"1px solid rgba(184,146,42,0.15)", borderRadius:9,
    fontFamily:"'Inter',system-ui,sans-serif", fontSize:13,
    boxSizing:"border-box", padding: supported ? "10px 92px 10px 13px" : "10px 13px",
    resize: multiline ? "vertical" : undefined,
    minHeight: multiline ? rows*26+20 : undefined,
    ...style,
  };

  return (
    <div style={{ position:"relative", width:"100%", marginBottom: listening ? 24 : 0 }}>
      {multiline
        ? <textarea value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} rows={rows} required={required} style={baseStyle}/>
        : <input type={type} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} required={required} style={baseStyle}/>
      }
      {supported && (
        <div style={{ position:"absolute", right:8, top:multiline?8:"50%", transform:multiline?"none":"translateY(-50%)", display:"flex", alignItems:"center", gap:3, zIndex:2 }}>
          {LANGS.map(l => (
            <button key={l.value} type="button" onClick={()=>setActiveLang(l.value)} title={`Voice in ${l.label}`}
              style={{ fontSize:9, fontWeight:700, padding:"2px 5px", borderRadius:4, border:"1px solid rgba(200,84,26,0.2)", cursor:"pointer", background:activeLang===l.value?SC.saffron:"rgba(200,84,26,0.05)", color:activeLang===l.value?"#fff":SC.gray, fontFamily:"'Inter',sans-serif", lineHeight:1.4 }}>
              {l.label}
            </button>
          ))}
          <button type="button" onClick={listening?stop:start} title={listening?"Stop":"Click to dictate"}
            style={{ width:28, height:28, borderRadius:"50%", border:`1px solid ${listening?"#C8541A":"rgba(200,84,26,0.25)"}`, background:listening?SC.saffron:"rgba(200,84,26,0.06)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s", flexShrink:0 }}>
            {listening
              ? <span style={{ width:8,height:8,borderRadius:2,background:"#fff",display:"block" }}/>
              : <Mic size={12} color={SC.saffron}/>
            }
          </button>
        </div>
      )}
      {listening && (
        <div style={{ position:"absolute", bottom:-22, left:0, display:"flex", alignItems:"center", gap:5 }}>
          <div style={{ display:"flex", gap:2, alignItems:"flex-end" }}>
            {[1,2,3,4,5].map(i=>(
              <div key={i} style={{ width:3,borderRadius:2,background:SC.saffron,height:10,animation:`vw 0.6s ${i*0.1}s ease-in-out infinite` }}/>
            ))}
          </div>
          <span style={{ fontSize:10,color:SC.saffron,fontWeight:500 }}>Listening in {activeLang}…</span>
        </div>
      )}
      <style>{`@keyframes vw{0%,100%{height:4px}50%{height:14px}}`}</style>
    </div>
  );
}
