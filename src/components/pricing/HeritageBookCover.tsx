// A small cloth-bound "Heritage Book" with the family's own name on the cover.
// Used on pricing, upgrade and the dashboard so the Pro value is something
// people can picture holding, not a bullet point.
type Props = { familyName?: string; width?: number; subtitle?: string };

export default function HeritageBookCover({ familyName = "Your Family", width = 168, subtitle }: Props) {
  const h = Math.round(width * 1.32);
  const stripped = familyName.replace(/\s+(family|parivar|parivaar)$/i, "");
  const name = stripped && !/^(your|my|our)$/i.test(stripped) ? stripped : familyName;
  // Fit the longest word on one line inside the gold frame
  const longest = Math.max(...name.split(/\s+/).map(w => w.length), 1);
  const fontSize = Math.min(width / 7.2, (width * 0.52) / (longest * 0.62));
  return (
    <div aria-hidden="true" style={{ width, height: h, position: "relative", flexShrink: 0, transform: "rotate(-3deg)", filter: "drop-shadow(0 18px 28px rgba(30,21,70,0.35))" }}>
      {/* pages */}
      <div style={{ position: "absolute", top: 6, right: -6, bottom: 4, width: "92%", background: "repeating-linear-gradient(90deg,#F4ECDD 0 2px,#E9DDC8 2px 3px)", borderRadius: "0 4px 4px 0" }} />
      {/* cover */}
      <div style={{ position: "absolute", inset: 0, borderRadius: "3px 6px 6px 3px", background: "linear-gradient(160deg,#3A2A86 0%,#2A1E66 55%,#1A1247 100%)", overflow: "hidden" }}>
        {/* spine */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: width * 0.09, background: "linear-gradient(90deg,rgba(0,0,0,0.35),rgba(0,0,0,0.05))" }} />
        {/* gold frame */}
        <div style={{ position: "absolute", inset: `${width * 0.08}px ${width * 0.08}px ${width * 0.08}px ${width * 0.15}px`, border: "1.5px solid rgba(255,178,36,0.75)", borderRadius: 2 }} />
        <div style={{ position: "absolute", inset: `${width * 0.105}px ${width * 0.105}px ${width * 0.105}px ${width * 0.175}px`, border: "0.75px solid rgba(255,178,36,0.45)" }} />
        <div style={{ position: "absolute", left: width * 0.15, right: width * 0.08, top: 0, bottom: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: `0 ${width * 0.06}px`, color: "#FFC94D" }}>
          <span style={{ fontSize: width * 0.13, lineHeight: 1, marginBottom: width * 0.06, opacity: 0.9 }}>🪔</span>
          <span style={{ fontFamily: "'Bricolage Grotesque',system-ui,sans-serif", fontWeight: 700, fontSize, lineHeight: 1.1, letterSpacing: 0.2, overflowWrap: "normal" }}>{name}</span>
          <span style={{ display: "block", width: width * 0.28, height: 1, background: "rgba(255,178,36,0.6)", margin: `${width * 0.05}px 0` }} />
          <span style={{ fontFamily: "'Bricolage Grotesque',system-ui,sans-serif", fontStyle: "italic", fontSize: Math.max(9, width * 0.065), opacity: 0.85 }}>{subtitle || "Parivar ki Parampara"}</span>
        </div>
      </div>
    </div>
  );
}
