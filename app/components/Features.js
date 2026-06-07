import RevealOnScroll from "./RevealOnScroll";
import { FEATURES } from "../content/sections";

const ICONS = ["◈", "◎", "⬡", "▣"];

export default function Features() {
  return (
    <section
      id="features"
      className="border-b border-mist bg-frost"
      style={{ paddingBlock: "var(--section-py)" }}
    >
      <div className="mx-auto w-full max-w-page px-5 lg:px-[48px]">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <p className="mb-4 font-display text-eyebrow font-semibold uppercase tracking-[0.2em] text-ice">
              {FEATURES.eyebrow}
            </p>
            <h2 className="font-display text-heading font-bold tracking-tight text-foreground">
              {FEATURES.title}
            </h2>
          </div>
        </RevealOnScroll>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {FEATURES.items.map((item, i) => (
            <RevealOnScroll key={item.title} delay={(i % 2) + 1}>
              <article className="group h-full rounded-2xl border border-mist bg-snow p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ice/40 hover:shadow-[0_16px_48px_-16px_rgba(11,18,32,0.12)]">
                <span
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-glacier/50 font-display text-xl text-deep transition-colors duration-300 group-hover:bg-ice group-hover:text-midnight"
                  aria-hidden
                >
                  {ICONS[i % ICONS.length]}
                </span>
                <h3 className="font-display text-lead font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-body text-muted">{item.description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
