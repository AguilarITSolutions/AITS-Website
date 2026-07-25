"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-aits-primary relative text-white">
      <div className="container grid min-h-[calc(100dvh-3.5rem)] max-w-screen-2xl items-center gap-12 py-16 md:py-24">
        <div className="space-y-6 text-center">
          <h1 className="bg-linear-to-br from-white from-30% via-white/90 to-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            IT Solutions for the Modern Business
          </h1>
          <p className="mx-auto leading-normal text-white/85 sm:text-lg">
            Let us handle the tech to do the heavy lifting so you can focus on
            what matters the most.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="text-aits-primary bg-white hover:bg-white/90"
              asChild
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
        <div
          className={`absolute inset-x-0 bottom-6 flex flex-col items-center gap-1 text-xs text-white/70 transition-opacity duration-300 ${
            scrolled ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <span>Scroll to learn more</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
