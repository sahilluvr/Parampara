import { NextRequest, NextResponse } from "next/server";

// Best-effort notification — currently logs; could extend to push notifications/email
export async function POST(req: NextRequest) {
  try {
    const { familyId, joinerName, familyName } = await req.json();
    console.log(`[NOTIFY] ${joinerName} joined family ${familyName} (${familyId})`);
    // Notifications are primarily handled client-side via localStorage for the joiner.
    // For the inviter (who may be on a different device), this would require
    // a push notification service or storing notifications server-side.
    // Currently a no-op placeholder — extend with Supabase notifications table if needed.
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false });
  }
}
