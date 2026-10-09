import { NextRequest, NextResponse } from "next/server";
export async function GET(_req: NextRequest) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ status:"not_configured", fix:"Add RESEND_API_KEY to Vercel env vars → redeploy" });
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(key);
    const result = await resend.domains.list();
    const raw = result.data as unknown as {name?:string,status?:string}[];
    const domainList = Array.isArray(raw) ? raw.map(d=>({name:d?.name, status:d?.status})) : [];
    const verified = domainList.some(d => d.name?.includes("ourparampara") && d.status === "verified");
    return NextResponse.json({ status:"configured", keyPrefix:key.slice(0,10)+"...", domains:domainList, ourparamparaVerified:verified });
  } catch (err) { return NextResponse.json({ status:"error", error:String(err) }); }
}
