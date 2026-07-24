import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import CTA from "@/components/cta";
import ScrollReveal from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | Aguilar IT Solutions",
  description:
    "See how Aguilar IT Solutions has helped clients automate processes, migrate to the cloud, and build custom software.",
};

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Case Studies"
          title="Outcomes, not just output"
          description="A look at how our work has helped clients save time, reduce risk, and grow."
        />

        <section className="container py-16 md:py-24">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={study.slug} delay={index * 0.1}>
                <Link href={`/case-studies/${study.slug}`}>
                  <Card className="hover:border-aits-primary h-full transition-colors">
                    <CardHeader>
                      <p className="text-aits-primary text-sm font-medium">
                        {study.category}
                      </p>
                      <CardTitle className="text-xl">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">
                        {study.summary}
                      </p>
                      <p className="font-heading text-aits-primary text-3xl font-extrabold">
                        {study.stat.value}
                        <span className="text-muted-foreground ml-2 text-sm font-normal">
                          {study.stat.label}
                        </span>
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
