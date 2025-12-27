import Hero from "@/components/hero";
import Services from "@/components/services";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import FadeIn from "@/components/fade-in";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section className="w-full py-4 sm:py-10 md:py-16 lg:py-24 xl:py-32">
          <div className="relative z-10">
            <FadeIn delay={100} duration={600}>
              <Navbar />
            </FadeIn>

            <FadeIn delay={300} duration={800}>
              <Hero />
            </FadeIn>

            <FadeIn delay={600} duration={800}>
              <Services />
            </FadeIn>

            <FadeIn delay={800} duration={800}>
              <CTA />
            </FadeIn>

            <FadeIn delay={1000} duration={800}>
              <Footer />
            </FadeIn>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Aguilar IT Solutions. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            className="text-xs text-gray-500 underline-offset-4 hover:underline dark:text-gray-400"
            href="/"
          >
            Terms & Conditions
          </Link>
          <Link
            className="text-xs text-gray-500 underline-offset-4 hover:underline dark:text-gray-400"
            href="/"
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
