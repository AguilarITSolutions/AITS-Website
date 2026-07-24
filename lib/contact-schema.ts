import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please include a few details about what you need.")
    .max(5000),
  // Honeypot field: real visitors never fill this in. If it's populated,
  // the submission is silently rejected as spam.
  company_website: z.string().max(0).optional().or(z.literal("")),
  // Only required end-to-end when Turnstile is actually configured (see
  // TURNSTILE_SECRET_KEY handling in the API route and NEXT_PUBLIC_TURNSTILE_SITE_KEY
  // in the form) — left optional here so local/dev builds without Turnstile
  // keys aren't blocked from submitting.
  turnstileToken: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
