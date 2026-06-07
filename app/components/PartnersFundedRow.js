import RevealOnScroll from "./RevealOnScroll";
import PartnerLogoBox from "./PartnerLogoBox";

export default function PartnersFundedRow({ funded, labelDelay = 6, logoDelay = 7 }) {
  const fundedLogo = {
    ...funded.logo,
    slot: "funded",
  };

  return (
    <div className="partners-funded-row mx-auto mt-16 max-w-[59.375rem] md:mt-20">
      <RevealOnScroll delay={labelDelay}>
        <p className="partners-funded-row__label font-display text-section text-ink-muted text-center md:text-left">
          {funded.labelBefore}
          <span className="highlight-yellow">{funded.labelHighlight}</span>
          {funded.labelAfter}
        </p>
      </RevealOnScroll>

      <div className="partners-funded-row__box mt-6 flex justify-center md:mt-0">
        <PartnerLogoBox logo={fundedLogo} delay={logoDelay} variant="funded" width={320} height={120} />
      </div>
    </div>
  );
}
