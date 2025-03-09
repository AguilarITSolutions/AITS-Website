import Hero from "@/components/hero"
import Services from "@/components/services"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import FadeIn from "@/components/fade-in"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

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
    </div>
  )
}

