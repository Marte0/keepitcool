import RevealOnScroll from "./RevealOnScroll";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "../content/sections";

function TestimonialsTitleLeft() {
  const { before, highlight } = TESTIMONIALS.titleLeft;
  return (
    <h2 className="font-display text-section text-ink-muted">
      {before}
      <span className="highlight-yellow">{highlight}</span>
    </h2>
  );
}

function TestimonialsTitleRight() {
  const { before, highlight } = TESTIMONIALS.titleRight;
  return (
    <h2 className="font-display text-section text-ink-muted">
      {before}
      <span className="highlight-yellow">{highlight}</span>
    </h2>
  );
}

function TestimonialStack({ quotes, variant, startDelay = 1 }) {
  return (
    <div className={`testimonials-stack testimonials-stack--${variant}`}>
      {quotes.map((quote, index) => (
        <TestimonialCard
          key={quote.id}
          quote={quote}
          stackIndex={index}
          delay={startDelay + index}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="relative bg-cream"
      style={{
        paddingBottom: "var(--section-py)",
        paddingTop: "clamp(2rem, 1rem + 3vw, 4rem)",
      }}
    >
      <div className="mx-auto w-full max-w-page px-5 lg:px-12">
        <div className="testimonials-blocks mx-auto max-w-[67.5rem]">
          <div className="testimonials-row testimonials-row--students">
            <RevealOnScroll delay={0} className="testimonials-row__title">
              <TestimonialsTitleLeft />
            </RevealOnScroll>
            <TestimonialStack
              quotes={TESTIMONIALS.students}
              variant="students"
              startDelay={1}
            />
          </div>

          <div className="testimonials-row testimonials-row--experts">
            <TestimonialStack
              quotes={TESTIMONIALS.experts}
              variant="experts"
              startDelay={4}
            />
            <RevealOnScroll delay={0} className="testimonials-row__title testimonials-row__title--right">
              <TestimonialsTitleRight />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
