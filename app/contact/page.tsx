import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact-form";
import ScrollReveal from "@/components/scroll-reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | Aguilar IT Solutions",
  description:
    "Get in touch with Aguilar IT Solutions to talk about your project.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Contact"
          title="Let's talk"
          description={
            <>
              Tell us a bit about your business and what&apos;s slowing you
              down.
              <br />
              We&apos;ll get back to you within one business day.
            </>
          }
        />

        <section className="container max-w-3xl space-y-12 py-16 md:py-24">
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="text-center">
              <h2 className="font-heading font-bold">Email us directly</h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-aits-primary mt-1 flex items-center justify-center gap-2 text-sm hover:underline"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
