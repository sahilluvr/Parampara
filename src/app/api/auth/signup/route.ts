import { NextRequest, NextResponse } from "next/server";
import { getAdmin } from "@/lib/billing";

// POST /api/auth/signup { email, password, name, familyName }
// Creates the account already confirmed — no "verify your email" step,
// which was stopping people from ever getting in. The browser then signs in
// with the same password straight away.
export async function POST(req: NextRequest) {
  try {
    const { email: rawEmail, password, name, familyName } = await req.json().catch(() => ({}));
    const email = String(rawEmail || "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    if (!password || String(password).length < 8) return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });

    const admin = await getAdmin();
    if (!admin) return NextResponse.json({ fallback: true });

    const { data, error } = await admin.auth.admin.createUser({
      email, password: String(password), email_confirm: true,
      user_metadata: { name: String(name || "").trim(), full_name: String(name || "").trim(), family_name: String(familyName || "").trim() },
    });
    if (error) {
      if (/already|registered|exists/i.test(error.message)) return NextResponse.json({ error: "An account with this email already exists. Please sign in instead.", code: "exists" }, { status: 409 });
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Friendly welcome email (non-blocking)
    import("@/lib/email").then(({ sendWelcomeEmail }) => sendWelcomeEmail(email, String(name || email.split("@")[0]), String(familyName || "your family"))).catch(() => {});
    return NextResponse.json({ ok: true, userId: data.user?.id });
  } catch (e) {
    console.error("signup failed:", e);
    return NextResponse.json({ error: "Couldn't create your account. Please try again." }, { status: 500 });
  }
}
