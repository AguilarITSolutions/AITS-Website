import Link from "next/link";
import { services } from "@/lib/services";
import ScrollReveal from "@/components/scroll-reveal";

export default function Services() {
  return (
    <section id="services" className="container space-y-16 py-16 md:py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-232 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] font-bold sm:text-3xl md:text-5xl">
            Modern Solutions for Evolving Businesses
          </h2>
          <p className="text-muted-foreground mt-4 sm:text-lg">
            Discover how Aguilar IT Solutions can transform your business and
            help you grow.
          </p>
        </div>
      </ScrollReveal>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <ScrollReveal key={service.slug} delay={index * 0.1}>
            <Link
              href={`/services#${service.slug}`}
              className="group hover:border-aits-primary relative block overflow-hidden rounded-lg border p-8 transition-colors"
            >
              <div className="flex items-center gap-4">
                <service.icon className="text-aits-primary h-8 w-8" />
                <h3 className="font-heading font-bold">{service.name}</h3>
              </div>
              <p className="text-muted-foreground mt-2">{service.summary}</p>
              <span className="text-aits-primary mt-4 inline-block text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
                Learn more →
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
