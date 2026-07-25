import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-aits-accent text-white">
      <div className="container flex flex-col gap-8 py-12 md:flex-row md:py-16">
        <div className="flex-1 space-y-4">
          <h2 className="font-heading text-lg font-extrabold tracking-tight">
            Aguilar IT Solutions
          </h2>
          <p className="max-w-xs text-sm text-white/70">
            {siteConfig.description}
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-3 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href={siteConfig.github}
                className="text-white/70 transition-colors hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center gap-2 border-t border-white/10 py-6 sm:flex-row sm:justify-between">
        <p className="text-center text-sm text-white/60">
          © {new Date().getFullYear()} Aguilar IT Solutions. All rights
          reserved.
        </p>
        <nav className="flex gap-6">
          {siteConfig.legalLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
