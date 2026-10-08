import {
  GameCardDesktopStack,
  GameCardMobileStack,
  GameCardsRoot,
} from "./GameCardStack";
import RevealOnScroll from "./RevealOnScroll";
import { GAME } from "../content/sections";

function GameTitle() {
  return (
    <h2 className="font-display text-section text-ink">
      {GAME.titleBefore}
      <span className="highlight-yellow">{GAME.titleHighlight}</span>
      {GAME.titleAfter}
    </h2>
  );
}

export default function GameSection() {
  // Keep the illustrations within the page without clipping their reveal around the cards.
  return (
    <section
      className="relative overflow-x-clip bg-cream"
      style={{ paddingBlock: "var(--section-py)" }}
    >
      <div className="mx-auto w-full max-w-page px-5 lg:px-12">
        <GameCardsRoot cards={GAME.cards}>
          <div className="lg:grid lg:grid-cols-[minmax(0,530px)_1fr] lg:items-center lg:gap-12">
            <div
              id="how-it-works"
              className="scroll-anchor-how-it-works max-w-[530px] text-center lg:self-center lg:text-left"
            >
              <RevealOnScroll delay={0} className="lg:hidden">
                <GameTitle />
              </RevealOnScroll>
              <RevealOnScroll delay={3} className="hidden lg:block">
                <GameTitle />
              </RevealOnScroll>
              <RevealOnScroll delay={1} className="lg:hidden">
                <p className="mt-6 font-body text-lead text-ink">{GAME.body}</p>
              </RevealOnScroll>
              <RevealOnScroll delay={4} className="hidden lg:block">
                <p className="mt-6 font-body text-lead text-ink">{GAME.body}</p>
              </RevealOnScroll>
            </div>

            <div className="hidden lg:block">
              <GameCardDesktopStack />
            </div>
          </div>

          <div className="lg:hidden">
            <GameCardMobileStack />
          </div>
        </GameCardsRoot>
      </div>
    </section>
  );
}
