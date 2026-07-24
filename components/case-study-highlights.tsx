import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";

export default function CaseStudyHighlights() {
  return (
    <section className="container space-y-12 py-16 md:py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="font-heading text-3xl leading-[1.1] font-bold sm:text-3xl md:text-5xl">
            Real outcomes for real businesses
          </h2>
          <p className="text-muted-foreground mt-4 sm:text-lg">
            A look at how our work has helped clients save time, reduce risk,
            and grow.
          </p>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {caseStudies.map((study, index) => (
          <ScrollReveal key={study.slug} delay={index * 0.1}>
            <Card className="flex h-full flex-col">
              <CardHeader>
                <p className="text-aits-primary text-sm font-medium">
                  {study.category}
                </p>
                <CardTitle className="text-lg">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-6">
                <div>
                  <p className="font-heading text-aits-primary text-3xl font-extrabold">
                    {study.stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {study.stat.label}
                  </p>
                </div>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="text-sm font-medium hover:underline"
                >
                  <span className="inline-flex items-center gap-1">
                    Read the case study
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/case-studies">View all case studies</Link>
        </Button>
      </div>
    </section>
  );
}
