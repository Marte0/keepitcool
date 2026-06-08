"use client";

import { useState } from "react";
import Button from "../Button";
import RevealOnScroll from "../RevealOnScroll";
import { CONTACT } from "../../content/sections";

function buildMailtoHref(email, message) {
  const bodyLines = [message.trim()];
  if (email.trim()) {
    bodyLines.push("", `From: ${email.trim()}`);
  }
  const params = new URLSearchParams({
    subject: CONTACT.mailtoSubject,
    body: bodyLines.join("\n"),
  });
  return `${CONTACT.cta.href}?${params.toString()}`;
}

export default function ContactSectionCompose() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || message.trim().length < 10) return;
    window.location.href = buildMailtoHref(email, message);
  }

  return (
    <section
      id="contact"
      className="relative bg-cream-light"
      style={{ paddingBlock: "var(--section-py)" }}
    >
      <div className="mx-auto w-full max-w-page px-5 lg:px-12">
        <div className="mx-auto flex max-w-[42rem] flex-col items-center text-center">
          <RevealOnScroll delay={0}>
            <h2 className="font-display text-section text-ink-muted">{CONTACT.title}</h2>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <p className="mt-6 font-body text-lead text-ink">{CONTACT.body}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={2} className="mt-10 w-full">
            <div className="nav-pill contact-compose-card mx-auto w-full max-w-[36rem] rounded-3xl p-6 text-left md:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block font-body text-ui font-medium text-ink"
                  >
                    {CONTACT.compose.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={CONTACT.compose.emailPlaceholder}
                    className="contact-compose-input w-full"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block font-body text-ui font-medium text-ink"
                  >
                    {CONTACT.compose.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    minLength={10}
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={CONTACT.compose.messagePlaceholder}
                    className="contact-compose-input contact-compose-textarea w-full resize-y"
                  />
                </div>

                <div className="pt-1 text-center">
                  <Button type="submit" variant="cta">
                    {CONTACT.compose.submitLabel}
                  </Button>
                </div>
              </form>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={3}>
            <p className="mt-8 font-body text-body text-ink-muted">
              {CONTACT.emailDirectLabel}:{" "}
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
