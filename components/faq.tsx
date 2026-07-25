import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/faq";
import ScrollReveal from "@/components/scroll-reveal";

export default function FAQ() {
  return (
    <section className="border-t">
      <div className="container max-w-3xl py-16 md:py-24">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-heading text-3xl leading-[1.1] font-bold sm:text-3xl md:text-5xl">
              Got questions? We have answers.
            </h2>
            <p className="text-muted-foreground mt-4 sm:text-lg">
              Can&apos;t find what you&apos;re looking for?{" "}
              <a href="/contact" className="text-aits-primary hover:underline">
                Get in touch
              </a>
              .
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
