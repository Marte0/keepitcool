import Hero from "../components/Hero";
import GameSection from "../components/GameSection";
import EnergySection from "../components/EnergySection";
import LearningGoalsSection from "../components/LearningGoalsSection";
import PartnersSection from "../components/PartnersSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <GameSection />
      <EnergySection />
      <LearningGoalsSection />
      <PartnersSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
