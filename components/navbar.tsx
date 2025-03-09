"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Menu, MountainIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FadeIn from "./fade-in";

interface NavBarOption {
  name: string;
  link: string;
  optionNavigation: "scrollTo" | "goToLink";
}

const navBarOptions: NavBarOption[] = [
  { name: "Services", link: "services", optionNavigation: "scrollTo" },
  { name: "Industries", link: "industries", optionNavigation: "goToLink" },
  { name: "About Us", link: "about", optionNavigation: "goToLink" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // Close mobile menu after clicking a link
    } else {
      console.error(`Section with id "${id}" not found`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <MountainIcon className="h-6 w-6" />
            <span className="font-bold">Aguilar IT Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
            {navBarOptions.map((option) =>
              option.optionNavigation === "scrollTo" ? (
                <button
                  key={option.name}
                  onClick={() => scrollToSection(option.link)}
                  className="hover:text-primary cursor-pointer transition-colors"
                >
                  {option.name}
                </button>
              ) : (
                <Link
                  key={option.name}
                  href={"/" + option.link}
                  className="hover:text-primary transition-colors"
                >
                  {option.name}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center space-x-4 md:flex">
            <Link
              href="https://github.com/amanesoft"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
            <Button size="sm">Get a Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex flex-1 justify-end md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
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
              {navBarOptions.map((option) =>
                option.optionNavigation === "scrollTo" ? (
                  <button
                    key={option.name}
                    onClick={() => scrollToSection(option.link)}
                    className="hover:text-primary block p-2 text-left transition-colors"
                  >
                    {option.name}
                  </button>
                ) : (
                  <Link
                    key={option.name}
                    href={option.link}
                    className="hover:text-primary p-2 transition-colors"
                  >
                    {option.name}
                  </Link>
                ),
              )}
            </nav>

            <div className="border-border/40 flex flex-col space-y-2 border-t pt-2">
              <Button variant="ghost" size="sm" className="justify-start">
                Contact
              </Button>
              <Button size="sm" className="justify-start">
                Get a Demo
              </Button>
            </div>
          </FadeIn>
        </div>
      </header>
    </>
  );
}
