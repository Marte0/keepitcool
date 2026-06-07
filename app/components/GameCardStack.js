"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import GameCard from "./GameCard";
import RevealOnScroll from "./RevealOnScroll";

const STACK_ITEMS = [
  { itemClass: "game-card-stack-item--talk", tilt: -5, revealDelay: 0 },
  { itemClass: "game-card-stack-item--plan", tilt: 3, revealDelay: 1 },
  { itemClass: "game-card-stack-item--play", tilt: -2, revealDelay: 2 },
];

const GameCardsContext = createContext(null);

const ASSET_STAGGER_MS = 90;
const ASSET_DURATION_OUT_MS = 520;
const ASSET_DURATION_IN_MS = 760;

function GameCardScene({ card, isActive }) {
  return (
    <div className="game-card-scene relative aspect-square w-full">
      <div className="game-card-assets pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        {card.assets?.map((asset, index) => (
          <div
            key={asset.src}
            className="game-card-asset"
            style={{
              "--game-asset-delay": isActive ? `${index * ASSET_STAGGER_MS}ms` : "0ms",
              "--game-asset-duration": isActive
                ? `${ASSET_DURATION_OUT_MS}ms`
                : `${ASSET_DURATION_IN_MS}ms`,
              "--game-asset-x": isActive ? `${asset.offsetX}px` : "0px",
              "--game-asset-y": isActive ? `${asset.offsetY}px` : "0px",
              "--game-asset-tilt": isActive ? `${asset.tilt}deg` : "0deg",
              "--game-asset-w": `${asset.displayWidth}px`,
            }}
          >
            <Image
              src={asset.src}
              alt=""
              width={asset.width}
              height={asset.height}
              className="game-card-asset-img"
            />
          </div>
        ))}
      </div>
      <GameCard card={card} className="relative z-[2] h-full min-h-0 w-full" />
    </div>
  );
}

const HASH_GRACE_MS = 600;

function isHowItWorksHash() {
  if (typeof window === "undefined") return false;
  const hash = decodeURIComponent(window.location.hash.slice(1));
  return hash === "how-it-works";
}

export function GameCardsRoot({ cards, children }) {
  const [activeId, setActiveId] = useState(null);
  const itemRefs = useRef(new Map());
  const reducedMotionRef = useRef(false);
  const hashGraceRef = useRef(false);
  const userScrolledRef = useRef(false);

  const registerRef = useCallback((id, el, variant) => {
    let entry = itemRefs.current.get(id);
    if (!entry) {
      if (!el) return;
      entry = { desktop: null, mobile: null };
      itemRefs.current.set(id, entry);
    }

    entry[variant] = el;

    if (!entry.desktop && !entry.mobile) {
      itemRefs.current.delete(id);
    }
  }, []);

  const getVisibleEl = useCallback((entry) => {
    for (const el of [entry.desktop, entry.mobile]) {
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) return el;
    }
    return null;
  }, []);

  const updateActiveCard = useCallback(() => {
    if (reducedMotionRef.current) return;
    if (hashGraceRef.current && !userScrolledRef.current) {
      setActiveId(null);
      return;
    }

    const viewportCenter = window.innerHeight * 0.5;
    const activationThreshold = Math.min(window.innerHeight * 0.18, 128);
    let closestId = null;
    let closestDistance = Infinity;

    itemRefs.current.forEach((entry, id) => {
      const el = getVisibleEl(entry);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const cardCenter = rect.top + rect.height * 0.5;
      const distance = Math.abs(cardCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestId = id;
      }
    });

    setActiveId(closestDistance <= activationThreshold ? closestId : null);
  }, [getVisibleEl]);

  const beginHashGrace = useCallback(() => {
    hashGraceRef.current = true;
    userScrolledRef.current = false;
    setActiveId(null);
  }, []);

  const onScroll = useCallback(
    (e) => {
      if (e.isTrusted) userScrolledRef.current = true;
      if (hashGraceRef.current && userScrolledRef.current) {
        hashGraceRef.current = false;
      }
      updateActiveCard();
    },
    [updateActiveCard],
  );

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotionRef.current) return;

    let graceTimer;

    const armGraceIfNeeded = () => {
      if (!isHowItWorksHash()) return;
      beginHashGrace();
      clearTimeout(graceTimer);
      graceTimer = setTimeout(() => {
        hashGraceRef.current = false;
        updateActiveCard();
      }, HASH_GRACE_MS);
    };

    armGraceIfNeeded();
    window.addEventListener("hashchange", armGraceIfNeeded);

    const run = () => requestAnimationFrame(updateActiveCard);
    run();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveCard, { passive: true });

    return () => {
      clearTimeout(graceTimer);
      window.removeEventListener("hashchange", armGraceIfNeeded);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveCard);
    };
  }, [beginHashGrace, onScroll, updateActiveCard]);

  return (
    <GameCardsContext.Provider value={{ cards, activeId, registerRef }}>
      {children}
    </GameCardsContext.Provider>
  );
}

function useGameCards() {
  const ctx = useContext(GameCardsContext);
  if (!ctx) throw new Error("GameCardsRoot required");
  return ctx;
}

export function GameCardDesktopStack() {
  const { cards, activeId, registerRef } = useGameCards();

  return (
    <div
      className="game-card-stack relative md:-mt-16 lg:-mt-20"
      aria-label="TALK, PLAN and PLAY game phases"
    >
      {cards.map((card, index) => {
        const { itemClass, revealDelay, tilt } = STACK_ITEMS[index];
        const isActive = activeId === card.id;

        return (
          <div
            key={card.id}
            ref={(el) => registerRef(card.id, el, "desktop")}
            className={`game-card-stack-item ${itemClass}${isActive ? " is-active" : ""}`}
          >
            <RevealOnScroll delay={revealDelay} className="h-full w-full">
              <div className="game-card-stack-item-inner">
                <GameCardScene card={card} isActive={isActive} />
              </div>
            </RevealOnScroll>
          </div>
        );
      })}
    </div>
  );
}

export function GameCardMobileStack() {
  const { cards, activeId, registerRef } = useGameCards();

  return (
    <div className="mt-10 flex flex-col items-center gap-8">
      {cards.map((card, index) => {
        const { tilt } = STACK_ITEMS[index];
        const isActive = activeId === card.id;

        return (
          <div
            key={card.id}
            ref={(el) => registerRef(card.id, el, "mobile")}
            className={`game-card-mobile-item w-full max-w-[304px]${isActive ? " is-active" : ""}`}
            style={{ "--game-card-tilt": `${tilt}deg` }}
          >
            <RevealOnScroll delay={index + 2}>
              <div className="game-card-stack-item-inner">
                <GameCardScene card={card} isActive={isActive} />
              </div>
            </RevealOnScroll>
          </div>
        );
      })}
    </div>
  );
}
