import { Button } from "@/components/ui/button";
import Link from "next/link";
import ScrollReveal from "@/components/scroll-reveal";

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-16 text-center md:py-24">
        <ScrollReveal className="flex flex-col items-center gap-4">
          <h2 className="font-heading text-3xl leading-[1.1] font-bold sm:text-3xl md:text-5xl">
            Ready to modernize your business?
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-normal sm:text-xl sm:leading-8">
            Let&apos;s talk about what&apos;s slowing your business and how we
            can fix it.
          </p>
          <Button size="lg" className="mt-4" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
