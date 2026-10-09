# Pro subscriptions (Razorpay) — setup checklist

Pro is a real auto-renewing Razorpay **Subscription** (monthly ₹49 / yearly ₹470).

1. **Enable Subscriptions** on your Razorpay account (Dashboard → Subscriptions). It is a separate product and may need activation by Razorpay.
2. **Environment variables (Vercel):**
   - `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET` (already set)
   - `RAZORPAY_WEBHOOK_SECRET` — required; renewals are recorded by the webhook
   - `SUPABASE_SERVICE_ROLE_KEY` (already set)
   - Optional: `RAZORPAY_PLAN_ID_MONTHLY`, `RAZORPAY_PLAN_ID_YEARLY`. If unset, plans named "Parampara Pro Monthly/Yearly" are found or created automatically.
3. **Webhook** (Dashboard → Settings → Webhooks → Add):
   - URL: `https://www.ourparampara.com/api/razorpay/webhook`
   - Secret: same value as `RAZORPAY_WEBHOOK_SECRET`
   - Events: subscription.authenticated, subscription.activated, subscription.charged, subscription.pending, subscription.halted, subscription.cancelled, subscription.completed, subscription.paused, subscription.resumed, subscription.updated
4. **Test in Razorpay Test Mode first** with test keys: subscribe monthly, confirm Pro activates, then trigger a charge / cancel from the Razorpay dashboard and check Account & Plan updates.

## How access works
- Source of truth: `app_metadata.billing` on the Supabase user (server-only). `user_metadata.plan` is only a display mirror — users can edit user_metadata, so it is never trusted.
- Pro while `plan_expires_at` is in the future. Each successful charge sets it to the end of the paid period + 3 days grace (Razorpay's retry window).
- Cancel = stop auto-renew at period end (Account & Plan). Access continues until the paid period ends.
- Existing one-time customers are migrated on their next visit (payment verified with Razorpay). If they turn on auto-renew, the first charge is scheduled for when their current Pro ends — no double charge.
- Daily cron (`/api/cron/check-expirations`) re-checks lapsed subscribers against Razorpay before downgrading, and only reminds people whose Pro will not renew.

## Shared Razorpay account
This Razorpay account also serves another product. Parampara tags everything it creates with `notes.app = "parampara"` and its webhook ignores (returns 200 for) every event without that tag, so the other product's subscriptions, plans and webhooks are never read or changed. Add Parampara's webhook as a **new, separate** webhook — do not edit the existing one.
