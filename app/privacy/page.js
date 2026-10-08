import Footer from "../components/Footer";
import { SITE } from "../content/sections";

export const metadata = {
  title: "Privacy Policy",
  description: "How the Keep It Cool iOS game handles information during play.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — KeepItCool",
    description: "How the Keep It Cool iOS game handles information during play.",
    url: "/privacy",
  },
};

const sectionClass = "border-t border-ink/20 pt-8 sm:pt-10";
const headingClass = "font-display text-2xl leading-tight text-ink sm:text-3xl";
const paragraphClass = "mt-4 font-body text-body leading-relaxed text-ink-muted";
const emailClass =
  "inline-block break-all rounded-sm font-semibold text-ink underline decoration-yellow-flat decoration-[3px] underline-offset-4 transition-colors hover:text-ink-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-cream";

export default function PrivacyPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-page px-5 pb-20 pt-20 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-28">
        <article className="mx-auto max-w-[760px]">
          <header>
            <h1 className="font-display text-section leading-[1.1] text-ink">Privacy Policy</h1>
            <p className="mt-5 font-body text-caption text-ink-muted">Last updated: October 2026</p>
            <p className="mt-8 max-w-[65ch] font-body text-lead leading-relaxed text-ink">
              This Privacy Policy explains how Keep It Cool handles information when you play the
              iOS game.
            </p>
          </header>

          <div className="mt-12 space-y-10 sm:mt-14 sm:space-y-12">
            <section aria-labelledby="gameplay-heading" className={sectionClass}>
              <h2 id="gameplay-heading" className={headingClass}>
                Information used during gameplay
              </h2>
              <p className={paragraphClass}>
                Keep It Cool is a cooperative game for two players. You do not need to create an
                account. You can choose any nickname; it is not verified and does not need to be your
                real name.
              </p>
              <p className={paragraphClass}>
                During a game, the app sends your nickname, a temporary session ID, and gameplay
                inputs and actions to the game server at nova.treeps.ch over a secure WebSocket
                connection (wss://). These inputs can include device rotation or inclination,
                control values, game interactions, and card exchanges. This information is needed to
                synchronize the two players in real time.
              </p>
            </section>

            <section aria-labelledby="storage-heading" className={sectionClass}>
              <h2 id="storage-heading" className={headingClass}>
                Data storage
              </h2>
              <p className={paragraphClass}>
                The nickname, temporary session ID, gameplay activity, and other player-related
                session information are used only for the active game. The server does not retain
                this information after the session ends. Keep It Cool does not create persistent
                player profiles or accounts.
              </p>
            </section>

            <section aria-labelledby="tracking-heading" className={sectionClass}>
              <h2 id="tracking-heading" className={headingClass}>
                Analytics, advertising and tracking
              </h2>
              <p className={paragraphClass}>
                Keep It Cool does not use third-party advertising or analytics SDKs, including
                AdMob and Firebase Analytics. It also does not use Crashlytics or similar services.
                The game does not track you across apps or websites, use your activity for
                advertising, or build advertising or marketing profiles.
              </p>
            </section>

            <section aria-labelledby="sharing-heading" className={sectionClass}>
              <h2 id="sharing-heading" className={headingClass}>
                Data sharing
              </h2>
              <p className={paragraphClass}>
                Gameplay information is used to keep the two players in sync. Player information is
                not sold or shared for advertising or marketing purposes.
              </p>
            </section>

            <section aria-labelledby="children-heading" className={sectionClass}>
              <h2 id="children-heading" className={headingClass}>
                Children and young players
              </h2>
              <p className={paragraphClass}>
                Keep It Cool is an educational game designed primarily for young people. The game
                does not ask you for your real name, email address, phone number, or other directly
                identifying personal information. A nickname is all you need to play.
              </p>
            </section>

            <section aria-labelledby="deletion-heading" className={sectionClass}>
              <h2 id="deletion-heading" className={headingClass}>
                Data deletion and privacy requests
              </h2>
              <p className={paragraphClass}>
                There is no persistent player account or player-related gameplay information to
                delete after a session ends. If you have a privacy-related question, email us at{" "}
                <a href={`mailto:${SITE.email}`} className={emailClass}>
                  {SITE.email}
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="changes-heading" className={sectionClass}>
              <h2 id="changes-heading" className={headingClass}>
                Changes to this Privacy Policy
              </h2>
              <p className={paragraphClass}>
                We may update this policy if the app or its data practices change. The latest
                version will always be available on this page.
              </p>
            </section>

            <section aria-labelledby="contact-heading" className={sectionClass}>
              <h2 id="contact-heading" className={headingClass}>
                Contact
              </h2>
              <p className={paragraphClass}>Marta Piatti</p>
              <p className="mt-2 font-body text-body">
                <a href={`mailto:${SITE.email}`} className={emailClass}>
                  {SITE.email}
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
