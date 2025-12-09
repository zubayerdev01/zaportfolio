import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    SITE_URL: z.string().url().default("http://localhost:3000"),
    RESEND_API_KEY: z.string().min(1).default("test_api_key"),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  },
  runtimeEnv: {
    SITE_URL: process.env.SITE_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
});
