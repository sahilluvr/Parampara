# Hosting on Cloudflare Workers (free plan)

The site runs on Cloudflare Workers via the OpenNext adapter. Compressed worker: ~2.6 MB (free limit 3 MB).

## One-time setup
1. Cloudflare dashboard → **Workers & Pages → Create → Import a repository** → connect GitHub → pick `sahilluvr/Parampara`.
2. Build settings:
   - Build command: `npx opennextjs-cloudflare build`
   - Deploy command: `npx opennextjs-cloudflare deploy`
   - Root directory: `/`
3. **Variables** — add every variable below in BOTH places:
   - *Settings → Build → Variables and secrets* (needed at build time, especially `NEXT_PUBLIC_*`)
   - *Settings → Variables and secrets* (runtime; mark keys/secrets as "Secret")

   NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_APP_URL,
   NEXT_PUBLIC_ADSENSE_PUBLISHER_ID, NEXT_PUBLIC_ADSENSE_SLOT_DISPLAY, NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE,
   SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, ANTHROPIC_API_KEY, CRON_SECRET,
   RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, RAZORPAY_WEBHOOK_SECRET,
   RAZORPAY_PLAN_ID_MONTHLY, RAZORPAY_PLAN_ID_YEARLY (only if you had them),
   STRIPE_* (only if you had them)
4. Deploy, then open the `*.workers.dev` URL and check the homepage, login and a blog post.
5. **Custom domain**: Worker → Settings → Domains & Routes → Add → `www.ourparampara.com` and `ourparampara.com`.
   Cloudflare must manage the domain's DNS: Add site `ourparampara.com` to Cloudflare (free) and change the
   nameservers at your domain registrar to the two Cloudflare shows. Keep existing email DNS records (MX, SPF, DKIM for Resend).
6. Redirect apex → www: Rules → Redirect Rules → `ourparampara.com/*` → `https://www.ourparampara.com/${1}` (301).

## Daily jobs
Defined in `wrangler.jsonc → triggers.crons` and handled in `custom-worker.ts`:
- 02:30 UTC (08:00 IST) → `/api/cron/birthday-reminders`
- 03:00 UTC (08:30 IST) → `/api/cron/check-expirations`
Both send `Authorization: Bearer $CRON_SECRET`.

## After the move
- Supabase → Authentication → URL Configuration: Site URL `https://www.ourparampara.com` (unchanged if already set).
- Razorpay webhook URL stays the same; check it is **Active**.
- Local test: `npm run cf:preview`.
