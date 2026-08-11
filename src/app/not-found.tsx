import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight:"100vh", background:"#FAF7F2", display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center", padding:24, fontFamily:"'Inter',system-ui,sans-serif" }}>
      <div>
        <div style={{ fontSize:60, marginBottom:16 }}>🪔</div>
        <h1 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:28, fontWeight:600, color:"#18181B", marginBottom:8 }}>Page not found</h1>
        <p style={{ color:"#71717A", marginBottom:28, fontSize:14 }}>This path doesn&apos;t exist in our traditions.</p>
        <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
          <Link href="/dashboard" style={{ background:"linear-gradient(135deg,#C8541A,#B8922A)", color:"#fff", padding:"12px 24px", borderRadius:10, fontSize:14, fontWeight:600, textDecoration:"none" }}>
            Go to Dashboard
          </Link>
          <Link href="/" style={{ background:"#fff", color:"#18181B", padding:"12px 24px", borderRadius:10, fontSize:14, fontWeight:500, textDecoration:"none", border:"1px solid rgba(184,146,42,0.2)" }}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
