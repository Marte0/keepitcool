import ContactPreviewNav from "../../components/contact/ContactPreviewNav";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import TeamSection from "../../components/TeamSection";

export const metadata = {
  title: "Contact preview — A Quiet close",
};

export default function ContactPreviewA() {
  return (
    <main>
      <ContactPreviewNav active="a" />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
