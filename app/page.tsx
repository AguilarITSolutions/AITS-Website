import Hero from "@/components/hero";
import Services from "@/components/services";
import Stats from "@/components/stats";
import CaseStudyHighlights from "@/components/case-study-highlights";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Stats />
        <CaseStudyHighlights />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
