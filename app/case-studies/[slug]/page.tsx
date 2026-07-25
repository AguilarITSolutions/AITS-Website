import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import ScrollReveal from "@/components/scroll-reveal";
import { caseStudies } from "@/lib/case-studies";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} | Aguilar IT Solutions Case Studies`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="border-b">
          <div className="container max-w-3xl py-16 md:py-24">
            <ScrollReveal>
              <p className="text-aits-primary text-sm font-semibold tracking-wide uppercase">
                {study.category}
              </p>
              <h1 className="font-heading mt-2 text-4xl leading-[1.1] font-bold sm:text-5xl">
                {study.title}
              </h1>
              <p className="font-heading text-aits-primary mt-6 text-4xl font-extrabold">
                {study.stat.value}
                <span className="text-muted-foreground ml-3 text-base font-normal">
                  {study.stat.label}
                </span>
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="container max-w-3xl space-y-10 py-16 md:py-24">
          {[
            { heading: "The Challenge", body: study.challenge },
            { heading: "Our Approach", body: study.approach },
            { heading: "The Outcome", body: study.outcome },
          ].map((section, index) => (
            <ScrollReveal key={section.heading} delay={index * 0.1}>
              <h2 className="font-heading text-2xl font-bold">
                {section.heading}
              </h2>
              <p className="text-muted-foreground mt-3 sm:text-lg">
                {section.body}
              </p>
            </ScrollReveal>
          ))}
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
