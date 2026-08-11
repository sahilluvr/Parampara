import { NextRequest, NextResponse } from "next/server";
import {
  sendWelcomeEmail,
  sendFamilyInviteEmail,
  sendRitualAddedEmail,
  sendBirthdayReminderEmail,
  sendAnniversaryReminderEmail,
  sendFestivalReminderEmail,
  sendMemoryAddedEmail,
  sendWeeklyDigestEmail,
  sendUpgradeConfirmationEmail,
} from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, ...data } = body;

    let success = false;

    switch (type) {
      case "welcome":
        success = await sendWelcomeEmail(data.to, data.userName, data.familyName);
        break;
      case "family_invite":
        success = await sendFamilyInviteEmail(data.to, data.inviteeName, data.inviterName, data.familyName, data.role, data.inviteLink, data.inviteCode || "");
        break;
      case "ritual_added":
        success = await sendRitualAddedEmail(data.to, data.memberName, data.addedBy, data.familyName, data.ritualName, data.ritualCategory, data.stepCount, data.ritualId);
        break;
      case "birthday_reminder":
        success = await sendBirthdayReminderEmail(data.to, data.recipientName, data.birthdayPersonName, data.daysUntil, data.familyName, data.age);
        break;
      case "anniversary_reminder":
        success = await sendAnniversaryReminderEmail(data.to, data.recipientName, data.coupleName, data.daysUntil, data.familyName, data.years);
        break;
      case "festival_reminder":
        success = await sendFestivalReminderEmail(data.to, data.memberName, data.festivalName, data.festivalDate, data.daysUntil, data.significance, data.familyName);
        break;
      case "memory_added":
        success = await sendMemoryAddedEmail(data.to, data.memberName, data.addedBy, data.familyName, data.memoryLabel, data.memoryType);
        break;
      case "weekly_digest":
        success = await sendWeeklyDigestEmail(data.to, data.memberName, data.familyName, data.ritualsCount, data.membersCount, data.upcomingFestival, data.upcomingDays);
        break;
      case "upgrade_confirmation":
        success = await sendUpgradeConfirmationEmail(data.to, data.userName, data.familyName, data.billingCycle, data.amount);
        break;
      default:
        return NextResponse.json({ error: `Unknown email type: ${type}` }, { status: 400 });
    }

    return NextResponse.json({ success, configured: !!process.env.RESEND_API_KEY });
  } catch (err) {
    console.error("Email API error:", err);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
