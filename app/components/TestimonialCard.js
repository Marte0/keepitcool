import RevealOnScroll from "./RevealOnScroll";

export default function TestimonialCard({ quote, stackIndex = 0, delay = 0 }) {
  const tagAlignClass =
    quote.tagAlign === "right" ? "testimonial-card__tag--right" : "testimonial-card__tag--left";

  return (
    <RevealOnScroll
      delay={delay}
      className="testimonial-card"
      style={{ "--stack-index": stackIndex }}
    >
      <figure
        className="testimonial-card__inner"
        style={{
          "--testimonial-tilt": `${quote.tilt}deg`,
          "--testimonial-tilt-mobile": `${quote.mobileTilt}deg`,
        }}
      >
        <figcaption
          className={`testimonial-card__tag ${quote.tagClass} ${tagAlignClass} rounded-2xl px-3 py-2 shadow-card`}
        >
          <span className="testimonial-card__tag-line1">{quote.tagLine1}</span>
          <span className="testimonial-card__tag-line2">{quote.tagLine2}</span>
        </figcaption>
        <blockquote className="testimonial-card__quote" cite={`#testimonial-${quote.id}`}>
          &ldquo;{quote.quote}&rdquo;
        </blockquote>
      </figure>
    </RevealOnScroll>
  );
}
