import RevealOnScroll from "./RevealOnScroll";
import SdgCard from "./SdgCard";
import { LEARNING_GOALS } from "../content/sections";

export default function LearningGoalsSection() {
  return (
    <section
      className="relative bg-cream"
      style={{
        paddingBottom: "var(--section-py)",
        paddingTop: "clamp(2rem, 1rem + 3vw, 4rem)",
      }}
    >
      <div className="mx-auto w-full max-w-page px-5 lg:px-12">
        <RevealOnScroll delay={0}>
          <h2 className="text-center font-display text-section text-ink-muted">
            {LEARNING_GOALS.title}
          </h2>
        </RevealOnScroll>

        <div
          className="sdg-cards-grid mx-auto mt-12 grid max-w-[1080px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:gap-6"
          aria-label="Sustainable Development Goal learning outcomes"
        >
          {LEARNING_GOALS.cards.map((card, index) => (
            <RevealOnScroll key={card.id} delay={index + 1} className="flex justify-center">
              <SdgCard card={card} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
