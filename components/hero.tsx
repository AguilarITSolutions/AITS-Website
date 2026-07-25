import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container grid max-w-screen-2xl items-center gap-12 py-16 md:grid-cols-2 md:py-24">
      <div className="space-y-6 text-center md:text-left">
        <h1 className="from-foreground via-foreground/90 to-foreground/70 bg-linear-to-br from-30% bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
          IT Solutions for the Modern Business
        </h1>
        <p className="text-muted-foreground mx-auto max-w-xl leading-normal sm:text-lg sm:leading-8 md:mx-0">
          Let us handle the tech. Just focus on growing your business.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
          <Button size="lg" asChild>
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </div>

      {/* Hero visual placeholder — swap for a real photo per Section 5 of the revamp plan */}
      <div
        aria-hidden="true"
        className="from-aits-primary to-aits-accent relative hidden aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br md:block"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "2rem 2rem",
          }}
        />
      </div>
    </section>
  );
}
