import Button from "./Button";
import RevealOnScroll from "./RevealOnScroll";
import { HERO } from "../content/sections";

export default function Hero() {
  const titleLines = HERO.title.split("\n");

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-mist bg-frost"
      style={{ paddingBlock: "var(--section-py)" }}
    >
      <div
        className="hero-orb pointer-events-none absolute -right-32 top-0 h-[480px] w-[480px] rounded-full opacity-80 motion-safe:animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-glacier/40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-page px-5 lg:px-[48px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <RevealOnScroll>
              <p className="mb-4 font-display text-eyebrow font-semibold uppercase tracking-[0.2em] text-ice">
                {HERO.eyebrow}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={1}>
              <h1 className="font-display text-display font-bold leading-[1.05] tracking-tight text-foreground">
                {titleLines.map((line, i) => (
                  <span key={line} className={i > 0 ? "text-deep" : undefined}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <p className="mt-6 max-w-xl text-lead text-muted">{HERO.subtitle}</p>
            </RevealOnScroll>

            <RevealOnScroll delay={3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href={HERO.primaryCta.href}>{HERO.primaryCta.label}</Button>
                <Button href={HERO.secondaryCta.href} variant="secondary">
                  {HERO.secondaryCta.label}
                </Button>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={2} className="relative">
            <div className="relative mx-auto aspect-square max-w-md rounded-3xl border border-mist bg-snow p-6 shadow-[0_24px_64px_-12px_rgba(11,18,32,0.12)] lg:max-w-none">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-caption font-medium text-muted">Live reading</span>
                <span className="flex items-center gap-2 text-caption font-medium text-ice">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-ice" aria-hidden />
                  In range
                </span>
              </div>

              <div className="flex flex-col items-center justify-center py-8">
                <span className="font-display text-[clamp(4rem,10vw,6rem)] font-bold leading-none tracking-tight text-foreground">
                  3.2
                  <span className="text-heading text-muted">°C</span>
                </span>
                <span className="mt-2 text-body text-muted">Target: 2–4 °C</span>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-mist pt-6">
                {[
                  { label: "Min", value: "2.8°" },
                  { label: "Avg", value: "3.1°" },
                  { label: "Max", value: "3.6°" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-frost px-3 py-3 text-center">
                    <p className="text-caption text-muted">{stat.label}</p>
                    <p className="font-display text-body font-semibold text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
