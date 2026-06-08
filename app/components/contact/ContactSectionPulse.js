"use client";

import { useState } from "react";
import Button from "../Button";
import RevealOnScroll from "../RevealOnScroll";
import { CONTACT } from "../../content/sections";

const ORBIT_POSITIONS = [
  { top: "8%", left: "18%", delay: "0s" },
  { top: "6%", right: "14%", delay: "-6s" },
  { top: "42%", left: "4%", delay: "-12s" },
  { top: "44%", right: "2%", delay: "-18s" },
  { bottom: "12%", left: "22%", delay: "-24s" },
  { bottom: "10%", right: "18%", delay: "-30s" },
];

export default function ContactSectionPulse() {
  const [paused, setPaused] = useState(false);
  const [activeTopic, setActiveTopic] = useState(null);

  return (
    <section
      id="contact"
      className="contact-pulse-section relative overflow-hidden bg-cream"
      style={{ paddingBlock: "var(--section-py)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, color-mix(in srgb, #fad724 8%, transparent), transparent)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-page px-5 lg:px-12">
        <div className="mx-auto flex max-w-[42rem] flex-col items-center text-center">
          <RevealOnScroll delay={0} className="contact-pulse-orbit-stage w-full">
            <div
              className={`contact-pulse-orbit ${paused ? "is-paused" : ""}`}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => {
                setPaused(false);
                setActiveTopic(null);
              }}
              aria-hidden
            >
              {CONTACT.topics.map((topic, index) => {
                const pos = ORBIT_POSITIONS[index % ORBIT_POSITIONS.length];
                return (
                  <button
                    key={topic.id}
                    type="button"
                    className="contact-pulse-topic"
                    style={{ ...pos, animationDelay: pos.delay }}
                    onFocus={() => {
                      setPaused(true);
                      setActiveTopic(topic.id);
                    }}
                    onBlur={() => {
                      setPaused(false);
                      setActiveTopic(null);
                    }}
                    onMouseEnter={() => setActiveTopic(topic.id)}
                    onMouseLeave={() => setActiveTopic(null)}
                    aria-label={topic.label}
                  >
                    <span className="contact-pulse-topic__label">{topic.label}</span>
                    {activeTopic === topic.id ? (
                      <span className="contact-pulse-topic__tooltip" role="tooltip">
                        {topic.label}
                      </span>
                    ) : null}
                  </button>
                );
              })}
              <span className="contact-pulse-orbit__core" aria-hidden />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <h2 className="font-display text-section text-ink-muted">{CONTACT.title}</h2>
          </RevealOnScroll>

          <RevealOnScroll delay={2}>
            <p className="mt-6 font-body text-lead text-ink">{CONTACT.body}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={3}>
            <div className="contact-pulse-cta-wrap mt-8">
              <Button href={CONTACT.cta.href} variant="cta" className="contact-pulse-cta">
                {CONTACT.cta.label}
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
