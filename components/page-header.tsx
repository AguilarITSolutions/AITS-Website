import type React from "react";
import ScrollReveal from "@/components/scroll-reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="border-b">
      <div className="container max-w-4xl py-16 text-center md:py-24">
        <ScrollReveal>
          {eyebrow ? (
            <p className="text-aits-primary text-sm font-semibold tracking-wide uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-heading mt-2 text-4xl leading-[1.1] font-bold sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl sm:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </ScrollReveal>
      </div>
    </section>
  );
}
