import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import CTA from "@/components/cta";
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | Aguilar IT Solutions",
  description:
    "Process automation, custom application development, cloud migration, and system enhancement services from Aguilar IT Solutions.",
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Services"
          title="What we do"
          description="Four focused service lines, each built around getting your business running on modern, reliable technology."
        />

        <section className="container space-y-16 py-16 md:py-24">
          {services.map((service, index) => (
            <ScrollReveal key={service.slug} delay={index * 0.05}>
              <div
                id={service.slug}
                className="grid scroll-mt-20 grid-cols-1 items-start gap-8 border-b pb-16 last:border-b-0 last:pb-0 md:grid-cols-3"
              >
                <div className="flex items-center gap-4 md:col-span-1">
                  <service.icon className="text-aits-primary h-8 w-8 shrink-0" />
                  <h2 className="font-heading text-2xl font-bold">
                    {service.name}
                  </h2>
                </div>
                <div className="space-y-6 md:col-span-2">
                  <p className="text-muted-foreground sm:text-lg">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle2 className="text-aits-primary mt-0.5 h-4 w-4 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Discuss this service</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
