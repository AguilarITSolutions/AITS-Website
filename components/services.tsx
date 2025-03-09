import { Brain, Cloud, Shield, Zap } from "lucide-react";
import FadeIn from "@/components/fade-in";

const services = [
  {
    name: "Process Analysis & Automation",
    description:
      "Automate repetitive tasks and streamline processes to save time and money.",
    icon: Brain,
  },
  {
    name: "Custom Application Development",
    description:
      "Tailored solutions to meet your unique business needs and requirements.",
    icon: Cloud,
  },
  {
    name: "System & Cloud Migration",
    description:
      "Modernize your systems and migrate to the cloud for improved scalability and security.",
    icon: Shield,
  },
  {
    name: "System Enhancement & Extension",
    description:
      "Enhance existing applications to match your changing business needs.",
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="container space-y-16 py-24 md:py-32">
      <FadeIn delay={200} duration={800}>
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl leading-[1.1] font-bold sm:text-3xl md:text-5xl">
            Modern Solutions for Evolving Businesses
          </h2>
          <p className="text-muted-foreground mt-4 sm:text-lg">
            Discover how Aguilar IT Solutions can transform your business and
            help you grow.
          </p>
        </div>
      </FadeIn>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {services.map((feature, index) => (
          <FadeIn key={feature.name} delay={400 + index * 100} duration={800}>
            <div className="relative overflow-hidden rounded-lg border p-8">
              <div className="flex items-center gap-4">
                <feature.icon className="h-8 w-8" />
                <h3 className="font-bold">{feature.name}</h3>
              </div>
              <p className="text-muted-foreground mt-2">
                {feature.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
