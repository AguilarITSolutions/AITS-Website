import ScrollReveal from "@/components/scroll-reveal";

const stats = [
  { value: "4", label: "core service lines" },
  { value: "100%", label: "custom-tailored engagements" },
  { value: "24/7", label: "monitoring on managed systems" },
];

export default function Stats() {
  return (
    <section className="border-t">
      <div className="container grid grid-cols-1 gap-8 py-16 text-center sm:grid-cols-3 md:py-24">
        {stats.map((stat, index) => (
          <ScrollReveal key={stat.label} delay={index * 0.1}>
            <p className="font-heading text-aits-primary text-4xl font-extrabold sm:text-5xl">
              {stat.value}
            </p>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              {stat.label}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
