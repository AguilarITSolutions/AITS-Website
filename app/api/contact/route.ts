import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { contactFormSchema } from "@/lib/contact-schema";
import { contactRateLimit } from "@/lib/rate-limit";

async function verifyTurnstileToken(token: string, ip: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // No secret configured (e.g. local dev without Turnstile set up) — skip
  // verification rather than hard-failing every submission.
  if (!secret) return true;

  const formData = new URLSearchParams();
  formData.append("secret", secret);
  formData.append("response", token);
  if (ip) formData.append("remoteip", ip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body: formData },
  );
  const data = (await res.json()) as { success: boolean };
  return data.success;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;

  if (contactRateLimit) {
    const { success } = await contactRateLimit.limit(ip ?? "unknown");
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }
  }

  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission.", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { name, email, company, message, company_website, turnstileToken } =
    parsed.data;

  // Honeypot tripped — pretend success so bots don't learn anything.
  if (company_website) {
    return NextResponse.json({ ok: true });
  }

  const isHuman = await verifyTurnstileToken(turnstileToken ?? "", ip);
  if (!isHuman) {
    return NextResponse.json(
      { error: "Verification failed. Please try again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error(
      "Contact form is not fully configured: missing SENDGRID_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL.",
    );
    return NextResponse.json(
      { error: "Contact form is not available right now." },
      { status: 503 },
    );
  }

  sgMail.setApiKey(apiKey);

  try {
    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
