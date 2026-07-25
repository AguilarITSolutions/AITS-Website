import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | Aguilar IT Solutions",
  description: "How Aguilar IT Solutions handles your information.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader eyebrow="Legal" title="Privacy Policy" />
        <section className="container max-w-3xl space-y-6 py-16 md:py-24">
          <p className="text-muted-foreground">
            This is a placeholder privacy policy. Aguilar IT Solutions will
            replace this page with a full, legally reviewed privacy policy
            before collecting personal information from site visitors at scale.
          </p>
          <p className="text-muted-foreground">
            In the meantime: information submitted through our{" "}
            <a href="/contact" className="text-aits-primary hover:underline">
              contact form
            </a>{" "}
            is used only to respond to your inquiry and is not sold or shared
            with third parties. Questions about your data can be sent to{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-aits-primary hover:underline"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
