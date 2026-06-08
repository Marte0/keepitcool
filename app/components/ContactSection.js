import Button from "./Button";
import RevealOnScroll from "./RevealOnScroll";
import { CONTACT } from "../content/sections";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-cream"
      style={{ paddingBlock: "var(--section-py)" }}
    >
      <div className="mx-auto w-full max-w-page px-5 lg:px-12">
        <div className="mx-auto flex max-w-[38rem] flex-col items-center text-center">
          <RevealOnScroll delay={0}>
            <h2 className="font-display text-section text-ink-muted">{CONTACT.title}</h2>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <p className="mt-6 font-body text-lead text-ink">{CONTACT.body}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={2}>
            <div className="mt-8">
              <Button href={CONTACT.cta.href} variant="cta">
                {CONTACT.cta.label}
              </Button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={3}>
            <p className="mt-6 font-body text-body text-ink-muted">
              <a
                href={CONTACT.cta.href}
                className="underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/40"
              >
                {CONTACT.email}
              </a>
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
