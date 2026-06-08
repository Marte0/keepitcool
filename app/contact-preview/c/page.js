import ContactPreviewNav from "../../components/contact/ContactPreviewNav";
import ContactSectionPulse from "../../components/contact/ContactSectionPulse";
import Footer from "../../components/Footer";
import TeamSection from "../../components/TeamSection";

export const metadata = {
  title: "Contact preview — C Energy pulse",
};

export default function ContactPreviewC() {
  return (
    <main>
      <ContactPreviewNav active="c" />
      <TeamSection />
      <ContactSectionPulse />
      <Footer />
    </main>
  );
}
