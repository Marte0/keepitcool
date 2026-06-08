import ContactPreviewNav from "../../components/contact/ContactPreviewNav";
import ContactSectionCompose from "../../components/contact/ContactSectionCompose";
import Footer from "../../components/Footer";
import TeamSection from "../../components/TeamSection";

export const metadata = {
  title: "Contact preview — B Compose box",
};

export default function ContactPreviewB() {
  return (
    <main>
      <ContactPreviewNav active="b" />
      <TeamSection />
      <ContactSectionCompose />
      <Footer />
    </main>
  );
}
