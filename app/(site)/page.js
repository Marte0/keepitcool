import Hero from "../components/Hero";
import GameSection from "../components/GameSection";
import About from "../components/About";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import ContactCta from "../components/ContactCta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <GameSection />
      <About />
      <Features />
      <HowItWorks />
      <ContactCta />
      <Footer />
    </main>
  );
}
