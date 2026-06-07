import RevealOnScroll from "./RevealOnScroll";
import PartnerLogoBox from "./PartnerLogoBox";
import PartnersFundedRow from "./PartnersFundedRow";
import { PARTNERS } from "../content/sections";

function PartnersTitle() {
  return (
    <h2 className="font-display text-section text-ink-muted text-center">
      {PARTNERS.titleBefore}
      <span className="highlight-yellow">{PARTNERS.titleHighlight}</span>
    </h2>
  );
}

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative bg-cream"
      style={{
        paddingBottom: "var(--section-py)",
        paddingTop: "clamp(2rem, 1rem + 3vw, 4rem)",
      }}
    >
      <div className="mx-auto w-full max-w-page px-5 lg:px-12">
        <div className="partners-stage mx-auto max-w-[67.5rem]">
          {PARTNERS.logos.map((logo, index) => (
            <PartnerLogoBox key={logo.id} logo={logo} delay={index + 1} />
          ))}

          <div className="partners-stage__title relative z-[2] mx-auto max-w-[36rem] px-4 text-center">
            <RevealOnScroll delay={0}>
              <PartnersTitle />
            </RevealOnScroll>
          </div>
        </div>

        <PartnersFundedRow funded={PARTNERS.funded} />
      </div>
    </section>
  );
}
