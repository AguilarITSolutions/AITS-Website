import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions | Aguilar IT Solutions",
  description:
    "Terms and conditions for using the Aguilar IT Solutions website.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader eyebrow="Legal" title="Terms & Conditions" />
        <section className="container max-w-3xl space-y-6 py-16 md:py-24">
          <p className="text-muted-foreground">
            This is a placeholder terms and conditions page. Aguilar IT
            Solutions will replace this page with fully reviewed terms of use
            before launch.
          </p>
          <p className="text-muted-foreground">
            Questions about these terms can be sent to{" "}
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
