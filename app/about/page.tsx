import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import CTA from "@/components/cta";
import ScrollReveal from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team, values, timeline } from "@/lib/team";

export const metadata: Metadata = {
  title: "About Us | Aguilar IT Solutions",
  description:
    "Learn about Aguilar IT Solutions' mission, values, and the team behind our IT consulting and software delivery work.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="About Us"
          title="Technology partners, not just vendors"
          description="Aguilar IT Solutions was founded to help growing businesses get out of their own way, technically, so they can focus on what they do best."
        />

        {/* Mission */}
        <section className="container grid max-w-5xl grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold">Our mission</h2>
            <p className="text-muted-foreground mt-4 sm:text-lg">
              Too many growing businesses are held back by manual processes,
              outdated systems, and software that doesn&apos;t quite fit. We
              exist to fix that, with practical, right-sized technology work
              that actually moves the business forward.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div
              aria-hidden="true"
              className="from-aits-light-blue to-aits-primary/30 aspect-[4/3] rounded-2xl bg-gradient-to-br"
            />
          </ScrollReveal>
        </section>

        {/* Values */}
        <section className="border-t">
          <div className="container max-w-5xl space-y-12 py-16 md:py-24">
            <ScrollReveal>
              <h2 className="font-heading text-center text-3xl font-bold">
                What we value
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="border-t">
          <div className="container max-w-3xl space-y-12 py-16 md:py-24">
            <ScrollReveal>
              <h2 className="font-heading text-center text-3xl font-bold">
                Our story
              </h2>
            </ScrollReveal>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <div className="border-aits-primary border-l-2 pl-6">
                    <p className="text-aits-primary text-sm font-semibold">
                      {item.year}
                    </p>
                    <h3 className="font-heading mt-1 font-bold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="border-t">
          <div className="container max-w-5xl space-y-12 py-16 md:py-24">
            <ScrollReveal>
              <h2 className="font-heading text-center text-3xl font-bold">
                The team
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {team.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 0.1}>
                  <div className="text-center">
                    <div
                      aria-hidden="true"
                      className="bg-aits-light-blue mx-auto aspect-square w-32 rounded-full"
                    />
                    <h3 className="font-heading mt-4 font-bold">
                      {member.name}
                    </h3>
                    <p className="text-aits-primary text-sm">{member.role}</p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      {member.bio}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
