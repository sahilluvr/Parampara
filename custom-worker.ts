// Cloudflare Worker entry: the OpenNext-generated Next.js app plus a
// `scheduled` handler for the daily jobs (Vercel crons don't run here).
// Cron schedules are in wrangler.jsonc → triggers.crons.
// @ts-expect-error — generated at build time by `opennextjs-cloudflare build`
import { default as handler } from "./.open-next/worker.js";

type Env = { CRON_SECRET?: string } & Record<string, unknown>;
type Ctx = { waitUntil(p: Promise<unknown>): void };

const JOBS: Record<string, string> = {
  "30 2 * * *": "/api/cron/birthday-reminders", // 08:00 IST
  "0 3 * * *": "/api/cron/check-expirations",   // 08:30 IST
  "0 4 * * *": "/api/cron/engagement",          // 09:30 IST
};

export default {
  fetch: handler.fetch,
  async scheduled(event: { cron: string }, env: Env, ctx: Ctx) {
    const path = JOBS[event.cron];
    if (!path) return;
    const req = new Request(`https://www.ourparampara.com${path}`, {
      headers: env.CRON_SECRET ? { authorization: `Bearer ${env.CRON_SECRET}` } : {},
    });
    ctx.waitUntil(handler.fetch(req, env, ctx).then((r: Response) => console.log(`cron ${path}: ${r.status}`)));
  },
};

// Durable Objects used by OpenNext's cache (must be re-exported)
// @ts-expect-error — generated at build time
export { DOQueueHandler, DOShardedTagCache, BucketCachePurge } from "./.open-next/worker.js";
