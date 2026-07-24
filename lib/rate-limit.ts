import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Rate limits contact form submissions per IP. Requires UPSTASH_REDIS_REST_URL
// and UPSTASH_REDIS_REST_TOKEN (see .env.example). If they're not configured,
// rate limiting is skipped rather than blocking submissions outright.
export const contactRateLimit =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(5, "10 m"),
        prefix: "aits-contact-form",
      })
    : null;
