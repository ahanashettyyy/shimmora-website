import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="pt-20 md:pt-24">
       <Loader>
      <Navbar />

      <Hero />

      <FadeIn>
        <About />
      </FadeIn>

      <FadeIn>
        <Services />
      </FadeIn>

      <FadeIn>
        <Events />
      </FadeIn>

      <FadeIn>
        <Gallery />
      </FadeIn>

      <FadeIn>
        <WhyUs />
      </FadeIn>

      <FadeIn>
        <CTA />
      </FadeIn>

      <Footer />
        </Loader>
    </main>
  );
}