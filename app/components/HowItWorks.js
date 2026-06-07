import RevealOnScroll from "./RevealOnScroll";
import { HOW_IT_WORKS } from "../content/sections";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-b border-mist bg-snow"
      style={{ paddingBlock: "var(--section-py)" }}
    >
      <div className="mx-auto w-full max-w-page px-5 lg:px-[48px]">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <p className="mb-4 font-display text-eyebrow font-semibold uppercase tracking-[0.2em] text-ice">
              {HOW_IT_WORKS.eyebrow}
            </p>
            <h2 className="font-display text-heading font-bold tracking-tight text-foreground">
              {HOW_IT_WORKS.title}
            </h2>
          </div>
        </RevealOnScroll>

        <ol className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <RevealOnScroll key={step.step} delay={i + 1}>
              <li className="relative">
                {i < HOW_IT_WORKS.steps.length - 1 && (
                  <span
                    className="pointer-events-none absolute left-8 top-16 hidden h-px w-[calc(100%+2.5rem)] bg-mist lg:block"
                    aria-hidden
                  />
                )}
                <span className="font-display text-caption font-bold uppercase tracking-widest text-ice">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-lead font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-body text-muted">{step.description}</p>
              </li>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
