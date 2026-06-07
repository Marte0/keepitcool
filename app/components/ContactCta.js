"use client";

import { useState } from "react";
import Button from "./Button";
import RevealOnScroll from "./RevealOnScroll";
import { CTA } from "../content/sections";

export default function ContactCta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-midnight text-snow"
      style={{ paddingBlock: "var(--section-py)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, color-mix(in srgb, #5eb8ff 25%, transparent), transparent)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-page px-5 lg:px-[48px]">
        <div className="mx-auto max-w-2xl text-center">
          <RevealOnScroll>
            <p className="mb-4 font-display text-eyebrow font-semibold uppercase tracking-[0.2em] text-ice">
              {CTA.eyebrow}
            </p>
            <h2 className="font-display text-heading font-bold tracking-tight">{CTA.title}</h2>
            <p className="mt-6 text-lead text-mist">{CTA.body}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            {submitted ? (
              <p className="mt-10 rounded-2xl border border-ice/30 bg-deep/50 px-6 py-8 text-lead text-glacier">
                Thanks — you&apos;re on the list. We&apos;ll be in touch soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={CTA.placeholder}
                  className="min-w-0 flex-1 rounded-full border border-deep bg-deep/60 px-6 py-3 text-body text-snow placeholder:text-slate focus:border-ice focus:outline-none focus:ring-2 focus:ring-ice/50"
                />
                <Button type="submit" variant="inverse" className="shrink-0">
                  {CTA.buttonLabel}
                </Button>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
