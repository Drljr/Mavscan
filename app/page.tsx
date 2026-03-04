import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import WaitlistSection from "@/components/waitlist-section"
import FAQ from "@/components/faq"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-slate-900 overflow-x-hidden">
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-64 bg-[radial-gradient(circle_at_top,_rgba(0,127,207,0.12),_transparent_60%)]" />

        <Header />

        <section className="border-b border-slate-200/60 bg-[#f5f5f5]">
          <Hero />
        </section>

        <section id="features" className="scroll-mt-20 border-b border-slate-200/60 bg-[#f5f5f5]">
          <Features />
        </section>

        <section id="how-it-works" className="scroll-mt-20 border-b border-slate-200/60 bg-[#f5f5f5]">
          <HowItWorks />
        </section>

        <WaitlistSection />

        <section id="faq" className="scroll-mt-20 border-b border-slate-200/60 bg-[#f5f5f5]">
          <FAQ />
        </section>

        <section className="bg-[#f5f5f5]">
          <FinalCTA />
        </section>

        <Footer />
      </div>
    </main>
  )
}
