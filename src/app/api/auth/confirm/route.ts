import { NextRequest, NextResponse } from "next/server";
import { getAdmin } from "@/lib/billing";

// POST /api/auth/confirm { email }
// For people who signed up while email verification was still required and
// never clicked the link: marks the address confirmed so they can sign in.
// It doesn't sign anyone in — the password is still checked by Supabase.
export async function POST(req: NextRequest) {
  const { email: raw } = await req.json().catch(() => ({}));
  const email = String(raw || "").trim().toLowerCase();
  if (!email) return NextResponse.json({ ok: false }, { status: 400 });
  const admin = await getAdmin();
  if (!admin) return NextResponse.json({ ok: false }, { status: 503 });
  try {
    const { data } = await admin.auth.admin.generateLink({ type: "magiclink", email }); // looks the user up; sends nothing
    const user = data?.user;
    if (user && !user.email_confirmed_at) await admin.auth.admin.updateUserById(user.id, { email_confirm: true });
  } catch { /* unknown email — same response */ }
  return NextResponse.json({ ok: true });
}
