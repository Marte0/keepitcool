import RevealOnScroll from "./RevealOnScroll";
import EnergyPhotoFan from "./EnergyPhotoFan";
import { ENERGY } from "../content/sections";

function EnergyTitle() {
  return (
    <h2 className="font-display text-section text-ink">
      {ENERGY.titleBefore}
      <span className="highlight-yellow">{ENERGY.titleHighlight}</span>
    </h2>
  );
}

export default function EnergySection() {
  return (
    <section
      id="approach"
      className="relative bg-cream"
      style={{ paddingBlock: "var(--section-py)" }}
    >
      <div className="mx-auto w-full max-w-page px-5 lg:px-12">
        <div className="mx-auto flex max-w-[38rem] flex-col items-center text-center">
          <RevealOnScroll delay={0}>
            <EnergyTitle />
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <p className="mt-6 font-body text-lead text-ink">{ENERGY.body}</p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={2} className="mt-12 md:mt-16">
          <EnergyPhotoFan photos={ENERGY.photos} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
