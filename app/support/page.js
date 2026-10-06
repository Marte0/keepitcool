import Link from "next/link";
import Footer from "../components/Footer";
import { SITE } from "../content/sections";

export const metadata = {
  title: "Support",
  description: "Get help with Keep It Cool or share feedback about the game.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support — KeepItCool",
    description: "Get help with Keep It Cool or share feedback about the game.",
    url: "/support",
  },
};

export default function SupportPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-page flex-1 px-5 pb-20 pt-20 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-[760px]">
          <h1 className="font-display text-section leading-[1.1] text-ink">Support</h1>
          <p className="mt-7 font-body text-lead font-medium text-ink">
            Need help with Keep It Cool?
          </p>
          <p className="mt-3 max-w-[65ch] font-body text-body leading-relaxed text-ink-muted">
            If you encounter a problem, have a question, or would like to share feedback about the
            game, get in touch with us.
          </p>

          <section
            aria-labelledby="contact-heading"
            className="mt-10 rounded-[20px] bg-cream-light p-6 shadow-card sm:mt-12 sm:p-9"
          >
            <h2 id="contact-heading" className="font-display text-[1.75rem] leading-tight text-ink sm:text-[2rem]">
              Contact us
            </h2>
            <p className="mt-5 font-body text-body text-ink-muted">Email</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-1 inline-block break-all rounded-sm font-body text-lead font-semibold text-ink underline decoration-yellow-flat decoration-[3px] underline-offset-[6px] transition-colors hover:text-ink-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-cream-light"
            >
              {SITE.email}
            </a>

            <div className="mt-8 border-t border-ink/20 pt-7">
              <p className="font-body text-body font-medium text-ink">
                When reporting a problem, please include:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 font-body text-body leading-relaxed text-ink-muted marker:text-ink">
                <li>your device model</li>
                <li>your iOS version</li>
                <li>a short description of the issue</li>
              </ul>
            </div>
          </section>

          <p className="mt-8 font-body text-body leading-relaxed text-ink-muted">
            We’ll get back to you as soon as possible.
          </p>
          <p className="mt-10 border-t border-ink/20 pt-6 font-body text-body text-ink-muted">
            Looking for information about your data? Read our{" "}
            <Link
              href="/privacy"
              className="rounded-sm font-semibold text-ink underline decoration-yellow-flat decoration-[3px] underline-offset-4 transition-colors hover:text-ink-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
