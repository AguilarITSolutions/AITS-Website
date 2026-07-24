import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Careers | Aguilar IT Solutions",
  description: "Open roles at Aguilar IT Solutions.",
};

export default function CareersPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Careers"
          title="We're not currently hiring"
          description="We don't have any open roles right now, but we're always happy to hear from people who care about doing good IT work. Feel free to reach out and introduce yourself."
        />
        <section className="container max-w-2xl py-16 text-center md:py-24">
          <ScrollReveal>
            <Button size="lg" asChild>
              <Link href={`mailto:${siteConfig.email}`}>Get in touch</Link>
            </Button>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
