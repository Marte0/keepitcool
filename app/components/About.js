import RevealOnScroll from "./RevealOnScroll";
import { ABOUT } from "../content/sections";

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-mist bg-snow"
      style={{ paddingBlock: "var(--section-py)" }}
    >
      <div className="mx-auto w-full max-w-page px-5 lg:px-[48px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <div>
            <RevealOnScroll>
              <p className="mb-4 font-display text-eyebrow font-semibold uppercase tracking-[0.2em] text-ice">
                {ABOUT.eyebrow}
              </p>
              <h2 className="font-display text-heading font-bold tracking-tight text-foreground">
                {ABOUT.title}
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <p className="mt-6 text-lead text-muted">{ABOUT.body}</p>
            </RevealOnScroll>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
            {ABOUT.stats.map((stat, i) => (
              <RevealOnScroll key={stat.label} delay={i + 1}>
                <div className="rounded-2xl border border-mist bg-frost px-6 py-8 transition-shadow duration-300 hover:shadow-[0_12px_40px_-12px_rgba(11,18,32,0.1)]">
                  <p className="font-display text-display font-bold leading-none text-deep">{stat.value}</p>
                  <p className="mt-2 text-body text-muted">{stat.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
