// ── Motif: Parampara's illustration system ──────────────────────
// Flat, geometric festival illustrations drawn in SVG — they replace every
// stock photo on the site. Ownable, on-palette, crisp at any size, weigh
// nothing, and a few are gently animated (flame flicker, rangoli turn,
// garland sway). Animation stops for reduced-motion visitors.

export type MotifName =
  | "diya" | "rangoli" | "kalash" | "toran" | "family" | "book" | "calendar" | "chat"
  | "frames" | "tree" | "moon" | "bowl" | "lotus" | "thread" | "rings" | "house";

export type MotifTone = "night" | "rani" | "marigold" | "peacock" | "violet" | "paper";

const TONES: Record<MotifTone, { bg: string; dot: string; a: string; b: string; c: string; ink: string }> = {
  night:    { bg: "#1E1546", dot: "rgba(255,255,255,0.08)", a: "#FFB224", b: "#D6246E", c: "#ffffff", ink: "#120C2E" },
  rani:     { bg: "#D6246E", dot: "rgba(255,255,255,0.12)", a: "#FFB224", b: "#1E1546", c: "#ffffff", ink: "#7A0F3D" },
  marigold: { bg: "#FFB224", dot: "rgba(30,21,70,0.10)",    a: "#D6246E", b: "#1E1546", c: "#ffffff", ink: "#7A4A00" },
  peacock:  { bg: "#0F7A73", dot: "rgba(255,255,255,0.10)", a: "#FFB224", b: "#FCE8F0", c: "#ffffff", ink: "#063F3B" },
  violet:   { bg: "#7A3FD9", dot: "rgba(255,255,255,0.10)", a: "#FFB224", b: "#FCE8F0", c: "#ffffff", ink: "#3A1A78" },
  paper:    { bg: "#F1EDF8", dot: "rgba(30,21,70,0.07)",    a: "#D6246E", b: "#FFB224", c: "#1E1546", ink: "#1E1546" },
};

type Props = { name: MotifName; tone?: MotifTone; className?: string; style?: React.CSSProperties; rounded?: number; label?: string };

export default function Motif({ name, tone = "night", className, style, rounded = 24, label }: Props) {
  const t = TONES[tone];
  const id = `m-${name}-${tone}`;
  return (
    <div className={`motif ${className || ""}`} style={{ position: "relative", overflow: "hidden", borderRadius: rounded, background: t.bg, ...style }}
      role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" style={{ display: "block", position: "absolute", inset: 0 }}>
        <defs>
          <pattern id={`${id}-dots`} width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1" fill={t.dot}/></pattern>
          <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor={t.a} stopOpacity="0.55"/><stop offset="100%" stopColor={t.a} stopOpacity="0"/></radialGradient>
        </defs>
        <rect width="200" height="150" fill={`url(#${id}-dots)`}/>
        {ART[name](t, id)}
      </svg>
      <style>{MOTIF_CSS}</style>
    </div>
  );
}

type Tone = (typeof TONES)[MotifTone];

const petalRing = (cx: number, cy: number, r: number, n: number, len: number, w: number, fill: string, rot = 0) =>
  Array.from({ length: n }, (_, i) => (
    <ellipse key={i} cx={cx} cy={cy - r} rx={w} ry={len} fill={fill} transform={`rotate(${(360 / n) * i + rot} ${cx} ${cy})`}/>
  ));

const marigold = (x: number, y: number, r: number, c1: string, c2: string, k: string | number) => (
  <g key={k}>
    {petalRing(x, y, r * 0.45, 10, r * 0.55, r * 0.32, c1)}
    <circle cx={x} cy={y} r={r * 0.45} fill={c2}/>
  </g>
);

const ART: Record<MotifName, (t: Tone, id: string) => React.ReactNode> = {
  diya: (t, id) => (
    <g>
      <circle cx="100" cy="70" r="55" fill={`url(#${id}-glow)`} className="mf-glow"/>
      <path d="M58 92 Q100 132 142 92 Q120 100 100 100 Q80 100 58 92Z" fill={t.b}/>
      <path d="M58 92 Q100 104 142 92" stroke={t.a} strokeWidth="3" fill="none"/>
      <path d="M68 100 Q100 122 132 100" stroke={t.c} strokeOpacity=".35" strokeWidth="2" strokeDasharray="2 5" fill="none"/>
      <g className="mf-flame" style={{ transformOrigin: "100px 92px" }}>
        <path d="M100 52 C112 68 110 84 100 92 C90 84 88 68 100 52Z" fill={t.a}/>
        <path d="M100 66 C106 74 105 84 100 88 C95 84 94 74 100 66Z" fill={t.c}/>
      </g>
      {marigold(30, 120, 12, t.a, t.b, "m1")}{marigold(172, 118, 10, t.c, t.a, "m2")}
    </g>
  ),
  rangoli: (t) => (
    <g>
      <g className="mf-spin" style={{ transformOrigin: "100px 75px" }}>
        {petalRing(100, 75, 34, 12, 16, 7, t.b)}
        {petalRing(100, 75, 22, 8, 12, 6, t.a, 22.5)}
        {petalRing(100, 75, 10, 6, 8, 4, t.c)}
        <circle cx="100" cy="75" r="6" fill={t.a}/>
      </g>
      {Array.from({ length: 16 }, (_, i) => {
        const a = (Math.PI * 2 * i) / 16;
        return <circle key={i} cx={100 + Math.cos(a) * 60} cy={75 + Math.sin(a) * 60} r="2.4" fill={i % 2 ? t.a : t.c}/>;
      })}
    </g>
  ),
  kalash: (t) => (
    <g>
      <ellipse cx="100" cy="132" rx="46" ry="6" fill={t.ink} opacity=".25"/>
      <path d="M72 78 Q60 104 76 124 Q100 136 124 124 Q140 104 128 78Z" fill={t.a}/>
      <rect x="78" y="70" width="44" height="10" rx="4" fill={t.b}/>
      <path d="M74 100 Q100 110 126 100" stroke={t.b} strokeWidth="4" fill="none"/>
      <circle cx="100" cy="108" r="5" fill={t.c}/>
      <g className="mf-sway" style={{ transformOrigin: "100px 70px" }}>
        {[-40, -20, 0, 20, 40].map((r, i) => (
          <path key={i} d="M100 70 Q96 52 100 36 Q104 52 100 70Z" fill={i % 2 ? "#3FA34D" : "#2E8B57"} transform={`rotate(${r} 100 70)`}/>
        ))}
        <ellipse cx="100" cy="52" rx="13" ry="15" fill="#8B5A2B"/>
        <path d="M92 44 Q100 38 108 44" stroke="#5E3B1A" strokeWidth="2" fill="none"/>
      </g>
    </g>
  ),
  toran: (t) => (
    <g>
      <path d="M0 18 Q100 46 200 18" stroke={t.c} strokeOpacity=".6" strokeWidth="2" fill="none"/>
      {Array.from({ length: 9 }, (_, i) => {
        const x = 12 + i * 22; const y = 18 + Math.sin((i / 8) * Math.PI) * 26;
        return (
          <g key={i} className="mf-sway" style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${i * 0.15}s` }}>
            <line x1={x} y1={y} x2={x} y2={y + 54} stroke={t.c} strokeOpacity=".5" strokeWidth="1.2"/>
            {marigold(x, y + 14, 8, i % 2 ? t.a : t.b, t.c, "a")}
            {marigold(x, y + 34, 7, i % 2 ? t.b : t.a, t.c, "b")}
            <path d={`M${x} ${y + 46} q4 8 0 14 q-4 -6 0 -14z`} fill="#2E8B57"/>
          </g>
        );
      })}
      {marigold(60, 122, 14, t.a, t.b, "f1")}{marigold(100, 128, 10, t.c, t.a, "f2")}{marigold(140, 120, 13, t.b, t.a, "f3")}
    </g>
  ),
  family: (t) => {
    const fig = (x: number, h: number, head: string, body: string, k: string) => (
      <g key={k} className="mf-bob" style={{ animationDelay: `${x / 100}s` }}>
        <path d={`M${x - h * 0.42} 140 Q${x - h * 0.42} ${140 - h} ${x} ${140 - h} Q${x + h * 0.42} ${140 - h} ${x + h * 0.42} 140Z`} fill={body}/>
        <circle cx={x} cy={140 - h - h * 0.2} r={h * 0.17} fill={head}/>
      </g>
    );
    return (
      <g>
        <circle cx="100" cy="30" r="16" fill={t.a} opacity=".9"/>
        {fig(48, 62, t.c, t.b, "dadi")}{fig(100, 78, t.c, t.a, "papa")}{fig(146, 52, t.c, t.b, "you")}{fig(178, 32, t.c, t.a, "kid")}
        <path d="M48 70 Q100 50 178 98" stroke={t.c} strokeOpacity=".55" strokeWidth="1.5" strokeDasharray="3 5" fill="none"/>
      </g>
    );
  },
  book: (t) => (
    <g>
      <path d="M100 48 Q70 36 38 42 V118 Q70 112 100 124Z" fill={t.c}/>
      <path d="M100 48 Q130 36 162 42 V118 Q130 112 100 124Z" fill={t.c} opacity=".88"/>
      <path d="M100 48 V124" stroke={t.ink} strokeOpacity=".25" strokeWidth="1.5"/>
      {[60, 72, 84, 96].map(y => <path key={y} d={`M48 ${y} Q72 ${y - 5} 92 ${y + 2}`} stroke={t.ink} strokeOpacity=".2" strokeWidth="2" fill="none"/>)}
      <circle cx="132" cy="78" r="16" fill={t.a}/><path d="M132 66 C138 74 137 82 132 86 C127 82 126 74 132 66Z" fill={t.b}/>
      {[[40, 26], [168, 30], [150, 132], [30, 130]].map(([x, y], i) => <path key={i} className="mf-twinkle" style={{ animationDelay: `${i * 0.4}s`, transformOrigin: `${x}px ${y}px` }} d={`M${x} ${y - 6} L${x + 2} ${y - 2} L${x + 6} ${y} L${x + 2} ${y + 2} L${x} ${y + 6} L${x - 2} ${y + 2} L${x - 6} ${y} L${x - 2} ${y - 2}Z`} fill={t.a}/>)}
    </g>
  ),
  calendar: (t) => (
    <g>
      <rect x="52" y="34" width="96" height="92" rx="12" fill={t.c}/>
      <rect x="52" y="34" width="96" height="24" rx="12" fill={t.b}/><rect x="52" y="46" width="96" height="12" fill={t.b}/>
      <rect x="72" y="26" width="6" height="16" rx="3" fill={t.ink}/><rect x="122" y="26" width="6" height="16" rx="3" fill={t.ink}/>
      {Array.from({ length: 12 }, (_, i) => <circle key={i} cx={68 + (i % 4) * 21} cy={72 + Math.floor(i / 4) * 17} r="4.5" fill={i === 6 ? t.a : t.ink} opacity={i === 6 ? 1 : 0.15}/>)}
      <circle cx="110" cy="89" r="10" fill="none" stroke={t.a} strokeWidth="2.5" className="mf-pulse" style={{ transformOrigin: "110px 89px" }}/>
      {marigold(160, 120, 11, t.a, t.c, "m")}
    </g>
  ),
  chat: (t) => (
    <g>
      <rect x="30" y="30" width="104" height="36" rx="18" fill={t.c}/><path d="M48 64 l-6 12 l16 -10z" fill={t.c}/>
      {[52, 70, 88, 106].map(x => <rect key={x} x={x - 6} y="44" width={x === 106 ? 14 : 12} height="6" rx="3" fill={t.ink} opacity=".25"/>)}
      <rect x="70" y="84" width="104" height="40" rx="20" fill={t.a}/><path d="M156 122 l8 12 l-18 -10z" fill={t.a}/>
      <circle cx="104" cy="104" r="4" fill={t.ink} className="mf-dot1"/><circle cx="122" cy="104" r="4" fill={t.ink} className="mf-dot2"/><circle cx="140" cy="104" r="4" fill={t.ink} className="mf-dot3"/>
      <path d="M170 26 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3z" fill={t.a} className="mf-twinkle" style={{ transformOrigin: "170px 36px" }}/>
    </g>
  ),
  frames: (t) => (
    <g>
      <g transform="rotate(-8 70 80)"><rect x="34" y="40" width="70" height="80" rx="6" fill={t.c}/><rect x="40" y="46" width="58" height="52" rx="3" fill={t.b}/><circle cx="58" cy="64" r="8" fill={t.a}/><path d="M40 98 L62 76 L76 88 L86 80 L98 92 V98Z" fill={t.ink} opacity=".5"/></g>
      <g transform="rotate(7 132 76)"><rect x="96" y="34" width="70" height="80" rx="6" fill={t.c}/><rect x="102" y="40" width="58" height="52" rx="3" fill={t.a}/>{marigold(131, 66, 12, t.b, t.c, "m")}</g>
      <g transform="translate(60 128)">{Array.from({ length: 20 }, (_, i) => <rect key={i} className="mf-wave" style={{ animationDelay: `${i * 0.06}s`, transformOrigin: `${i * 4 + 1}px 0px` }} x={i * 4} y={-(4 + Math.abs(Math.sin(i * 1.3)) * 10)} width="2.4" height={8 + Math.abs(Math.sin(i * 1.3)) * 20} rx="1.2" fill={t.a}/>)}</g>
    </g>
  ),
  tree: (t) => (
    <g>
      <path d="M100 34 V62 M56 62 H144 M56 62 V84 M144 62 V84 M56 84 V96 M30 96 H82 M30 96 V108 M82 96 V108 M144 84 V96 M126 96 H162 M126 96 V108 M162 96 V108" stroke={t.c} strokeOpacity=".6" strokeWidth="2.5" fill="none"/>
      <circle cx="100" cy="26" r="13" fill={t.a} className="mf-bob"/>
      {[[56, 84, t.c], [144, 84, t.c]].map(([x, y, c], i) => <circle key={i} cx={x as number} cy={y as number} r="11" fill={c as string} className="mf-bob" style={{ animationDelay: `${0.2 + i * 0.2}s` }}/>)}
      {[30, 82, 126, 162].map((x, i) => <circle key={x} cx={x} cy="116" r="9" fill={i % 2 ? t.a : t.b === "#1E1546" ? t.c : t.b} className="mf-bob" style={{ animationDelay: `${0.6 + i * 0.15}s` }}/>)}
    </g>
  ),
  moon: (t) => (
    <g>
      <circle cx="120" cy="56" r="28" fill={t.a}/><circle cx="132" cy="48" r="26" fill={t.bg}/>
      {[[40, 30], [70, 50], [160, 100], [52, 110], [176, 30]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i % 2 ? 2.2 : 3} fill={t.c} className="mf-twinkle" style={{ animationDelay: `${i * 0.5}s`, transformOrigin: `${x}px ${y}px` }}/>)}
      <path d="M60 108 Q100 140 140 108 Z" fill={t.b}/><path d="M60 108 Q100 120 140 108" stroke={t.c} strokeWidth="2.5" fill="none"/>
      <path d="M64 108 Q60 92 72 90" stroke={t.c} strokeWidth="2.5" fill="none"/><path d="M136 108 Q140 92 128 90" stroke={t.c} strokeWidth="2.5" fill="none"/>
    </g>
  ),
  bowl: (t) => (
    <g>
      <ellipse cx="100" cy="92" rx="52" ry="12" fill={t.c}/>
      {Array.from({ length: 40 }, (_, i) => <ellipse key={i} cx={56 + (i * 37) % 88} cy={86 + ((i * 13) % 9)} rx="2.6" ry="1.4" fill={t.c} stroke={t.ink} strokeOpacity=".15" strokeWidth=".5"/>)}
      <path d="M48 92 Q100 148 152 92Z" fill={t.b}/>
      <path d="M60 104 Q100 128 140 104" stroke={t.a} strokeWidth="3" strokeDasharray="1 7" strokeLinecap="round" fill="none"/>
      <path d="M140 60 Q160 70 150 92" stroke={t.a} strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M100 40 C106 48 105 56 100 60 C95 56 94 48 100 40Z" fill={t.a} className="mf-flame" style={{ transformOrigin: "100px 60px" }}/>
    </g>
  ),
  lotus: (t) => (
    <g>
      <path d="M20 120 Q100 108 180 120" stroke={t.c} strokeOpacity=".35" strokeWidth="2" fill="none"/>
      <path d="M40 128 Q100 116 160 128" stroke={t.c} strokeOpacity=".2" strokeWidth="2" fill="none"/>
      {[-60, -30, 0, 30, 60].map((r, i) => <path key={r} d="M100 112 Q80 80 100 50 Q120 80 100 112Z" fill={i === 2 ? t.c : i % 2 ? t.b : t.a} transform={`rotate(${r} 100 112)`} className="mf-open" style={{ transformOrigin: "100px 112px", animationDelay: `${Math.abs(r) / 100}s` }}/>)}
      <circle cx="100" cy="108" r="6" fill={t.a}/>
    </g>
  ),
  thread: (t, id) => (
    <g>
      <path d="M40 30 Q160 50 70 90 Q20 112 150 128" stroke={t.c} strokeWidth="3" fill="none" strokeLinecap="round" className="mf-draw"/>
      <path d="M44 34 Q164 54 74 94 Q24 116 154 132" stroke={t.a} strokeWidth="3" fill="none" strokeLinecap="round" className="mf-draw" style={{ animationDelay: ".3s" }}/>
      <circle cx="150" cy="40" r="16" fill={`url(#${id}-glow)`}/>
      <path d="M150 28 C158 38 157 46 150 52 C143 46 142 38 150 28Z" fill={t.a} className="mf-flame" style={{ transformOrigin: "150px 52px" }}/>
      <rect x="138" y="52" width="24" height="8" rx="4" fill={t.b}/>
    </g>
  ),
  rings: (t) => (
    <g>
      <path d="M40 30 V130 M160 30 V130" stroke={t.c} strokeOpacity=".5" strokeWidth="4"/>
      <path d="M30 30 Q100 6 170 30" stroke={t.a} strokeWidth="6" fill="none"/>
      {[50, 75, 100, 125, 150].map((x, i) => <g key={x} className="mf-sway" style={{ transformOrigin: `${x}px 26px`, animationDelay: `${i * 0.2}s` }}>{marigold(x, 40 - Math.abs(100 - x) * 0.18, 7, i % 2 ? t.b : t.a, t.c, "m")}</g>)}
      <circle cx="88" cy="96" r="20" fill="none" stroke={t.a} strokeWidth="7"/>
      <circle cx="114" cy="96" r="20" fill="none" stroke={t.c} strokeWidth="7"/>
      <circle cx="101" cy="74" r="5" fill={t.c} className="mf-twinkle" style={{ transformOrigin: "101px 74px" }}/>
    </g>
  ),
  house: (t) => (
    <g>
      <path d="M50 70 L100 34 L150 70Z" fill={t.b}/><rect x="58" y="70" width="84" height="62" fill={t.c}/>
      <rect x="88" y="94" width="24" height="38" rx="12" fill={t.a}/>
      <path d="M62 78 Q100 92 138 78" stroke={t.a} strokeWidth="2" fill="none"/>
      {[68, 80, 92, 104, 116, 128].map((x, i) => <g key={x} className="mf-sway" style={{ transformOrigin: `${x}px 80px`, animationDelay: `${i * 0.12}s` }}><path d={`M${x} ${82 + Math.sin(i / 5 * Math.PI) * 5} q4 8 0 13 q-4 -5 0 -13z`} fill="#2E8B57"/></g>)}
      <rect x="66" y="98" width="14" height="14" rx="3" fill={t.ink} opacity=".25"/><rect x="120" y="98" width="14" height="14" rx="3" fill={t.ink} opacity=".25"/>
      {marigold(36, 124, 10, t.a, t.c, "m1")}{marigold(166, 124, 10, t.a, t.c, "m2")}
    </g>
  ),
};

const MOTIF_CSS = `
  .motif .mf-flame { animation: mfFlicker 1.6s ease-in-out infinite; }
  .motif .mf-glow { animation: mfGlow 2.4s ease-in-out infinite; transform-origin: 100px 70px; transform-box: view-box; }
  .motif .mf-spin { animation: mfSpin 40s linear infinite; transform-box: view-box; }
  .motif .mf-sway { animation: mfSway 3.2s ease-in-out infinite; transform-box: view-box; }
  .motif .mf-bob { animation: mfBob 3s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
  .motif .mf-twinkle { animation: mfTwinkle 2.2s ease-in-out infinite; transform-box: view-box; }
  .motif .mf-pulse { animation: mfPulse 2s ease-out infinite; transform-box: view-box; }
  .motif .mf-wave { animation: mfWave 1s ease-in-out infinite alternate; transform-box: view-box; }
  .motif .mf-open { animation: mfOpen 4s ease-in-out infinite; transform-box: view-box; }
  .motif .mf-draw { stroke-dasharray: 400; animation: mfDraw 6s ease-in-out infinite; }
  .motif .mf-dot1, .motif .mf-dot2, .motif .mf-dot3 { animation: mfDots 1.2s ease-in-out infinite; }
  .motif .mf-dot2 { animation-delay: .2s; } .motif .mf-dot3 { animation-delay: .4s; }
  @keyframes mfFlicker { 0%,100% { transform: scale(1,1) rotate(0); } 30% { transform: scale(.94,1.06) rotate(-3deg); } 60% { transform: scale(1.05,.95) rotate(2deg); } }
  @keyframes mfGlow { 50% { opacity: .65; transform: scale(1.08); } }
  @keyframes mfSpin { to { transform: rotate(360deg); } }
  @keyframes mfSway { 0%,100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } }
  @keyframes mfBob { 50% { transform: translateY(-3px); } }
  @keyframes mfTwinkle { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .35; transform: scale(.7); } }
  @keyframes mfPulse { 0% { opacity: 1; transform: scale(.8); } 100% { opacity: 0; transform: scale(1.8); } }
  @keyframes mfWave { to { transform: scaleY(.45); } }
  @keyframes mfOpen { 50% { transform: scale(1.06); } }
  @keyframes mfDraw { 0% { stroke-dashoffset: 400; } 45%,100% { stroke-dashoffset: 0; } }
  @keyframes mfDots { 50% { transform: translateY(-4px); opacity: .5; } }
  @media (prefers-reduced-motion: reduce) { .motif * { animation: none !important; } }
`;
