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
  return (
    <section
      id="approach"
      className="relative bg-cream"
      style={{ paddingBlock: "var(--section-py)" }}
    >
      <div className="mx-auto w-full max-w-page px-5 lg:px-12">
        <GameCardsRoot cards={GAME.cards}>
          <div className="md:grid md:grid-cols-[minmax(0,530px)_1fr] md:items-center md:gap-8 lg:gap-12">
            <div className="hidden max-w-[530px] md:block md:self-center">
              <RevealOnScroll delay={3}>
                <GameTitle />
              </RevealOnScroll>
              <RevealOnScroll delay={4}>
                <p className="mt-10 font-body text-lead text-ink">{GAME.body}</p>
              </RevealOnScroll>
            </div>

            <div className="hidden md:block">
              <GameCardDesktopStack />
            </div>
          </div>

          <div className="md:hidden">
            <RevealOnScroll delay={0}>
              <GameTitle />
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <p className="mt-10 font-body text-lead text-ink">{GAME.body}</p>
            </RevealOnScroll>
            <GameCardMobileStack />
          </div>
        </GameCardsRoot>
      </div>
    </section>
  );
}
