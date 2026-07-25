"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FadeIn from "./fade-in";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-border/40 bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-heading text-lg font-extrabold tracking-tight">
            Aguilar IT Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center space-x-4 md:flex">
          <Button size="sm" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex flex-1 justify-end md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "bg-background border-border/40 fixed inset-x-0 top-14 z-50 transform border-b transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0",
        )}
      >
        <FadeIn
          delay={0}
          duration={300}
          className="flex flex-col space-y-4 p-4"
        >
          <nav className="flex flex-col space-y-4 text-sm font-medium">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary p-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="border-border/40 flex flex-col space-y-2 border-t pt-2">
            <Button size="sm" className="justify-start" asChild>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </header>
  );
}
