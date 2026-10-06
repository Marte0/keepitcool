"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_SCROLL_MS = 1300;

export default function HeroFoldersCarousel({ folders }) {
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);
  const activeIndexRef = useRef(0);
  const pausedRef = useRef(false);
  const visibleRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const loadedImagesRef = useRef(new Set());

  const [spacerWidth, setSpacerWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesReady, setImagesReady] = useState(false);

  const markImageReady = useCallback((index) => {
    loadedImagesRef.current.add(index);
    if (loadedImagesRef.current.size === folders.length) setImagesReady(true);
  }, [folders.length]);

  const scrollToIndex = useCallback((index, behavior) => {
    const container = scrollRef.current;
    const item = itemRefs.current[index];
    if (!container || !item) return;

    const left = item.offsetLeft - (container.clientWidth - item.offsetWidth) / 2;
    container.scrollTo({
      left,
      behavior: behavior ?? (reducedMotionRef.current ? "auto" : "smooth"),
    });
  }, []);

  const updateSpacerWidth = useCallback(() => {
    const container = scrollRef.current;
    const item = itemRefs.current[0];
    if (!container || !item) return;
    setSpacerWidth(Math.max(0, (container.clientWidth - item.offsetWidth) / 2));
  }, []);

  const updateActiveFromScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closest = 0;
    let minDist = Infinity;

    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const dist = Math.abs(containerCenter - itemCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = index;
      }
    });

    activeIndexRef.current = closest;
    setActiveIndex(closest);
  }, []);

  const pauseAutoScroll = useCallback(() => {
    pausedRef.current = true;
  }, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    reducedMotionRef.current = reduced;

    updateSpacerWidth();
    updateActiveFromScroll();

    const container = scrollRef.current;
    if (!container) return;

    let scrollRaf = 0;
    const onScroll = () => {
      cancelAnimationFrame(scrollRaf);
      scrollRaf = requestAnimationFrame(updateActiveFromScroll);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    container.addEventListener("pointerdown", pauseAutoScroll);
    container.addEventListener("touchstart", pauseAutoScroll, { passive: true });
    container.addEventListener("wheel", pauseAutoScroll, { passive: true });

    window.addEventListener("resize", updateSpacerWidth);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
    }, { threshold: 0.5 });
    visibilityObserver.observe(container);

    let intervalId = null;
    if (!reduced && imagesReady) {
      intervalId = setInterval(() => {
        if (pausedRef.current || !visibleRef.current || document.hidden) return;
        const next = (activeIndexRef.current + 1) % folders.length;
        scrollToIndex(next);
      }, AUTO_SCROLL_MS);
    }

    return () => {
      cancelAnimationFrame(scrollRaf);
      container.removeEventListener("scroll", onScroll);
      container.removeEventListener("pointerdown", pauseAutoScroll);
      container.removeEventListener("touchstart", pauseAutoScroll);
      container.removeEventListener("wheel", pauseAutoScroll);
      window.removeEventListener("resize", updateSpacerWidth);
      visibilityObserver.disconnect();
      if (intervalId) clearInterval(intervalId);
    };
  }, [
    folders.length,
    imagesReady,
    pauseAutoScroll,
    scrollToIndex,
    updateActiveFromScroll,
    updateSpacerWidth,
  ]);

  return (
    <div className="hero-folder-scroll-outer -mx-5 w-[calc(100%+2.5rem)] shrink-0">
      <div
        ref={scrollRef}
        className="hero-folder-scroll"
        aria-label="Energy topic folders"
      >
        <div className="hero-folder-scroll-track">
          <div
            className="hero-folder-spacer shrink-0"
            style={{ width: spacerWidth }}
            aria-hidden
          />

          {folders.map((folder, index) => (
            <button
              key={folder.src}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              type="button"
              className="hero-folder-scroll-item shrink-0 cursor-pointer border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
              aria-label={`Show ${folder.alt} folder`}
              aria-pressed={activeIndex === index}
              onClick={() => {
                pauseAutoScroll();
                scrollToIndex(index);
              }}
              onFocus={() => {
                pauseAutoScroll();
                scrollToIndex(index);
              }}
            >
              <span
                className={`hero-folder-card hero-folder-card-inner block ${
                  activeIndex === index ? "is-active" : ""
                }`}
                style={{ "--folder-tilt": `${folder.tilt}deg` }}
              >
                <Image
                  src={folder.src}
                  alt=""
                  aria-hidden="true"
                  width={228}
                  height={310}
                  className="hero-folder-img hero-folder-shadow-img"
                  loading="eager"
                  unoptimized
                />
                <Image
                  src={folder.src}
                  alt=""
                  width={228}
                  height={310}
                  className="hero-folder-img"
                  priority={index === 0}
                  loading={index === 0 ? undefined : "eager"}
                  unoptimized
                  onLoad={() => markImageReady(index)}
                  onError={() => markImageReady(index)}
                />
              </span>
            </button>
          ))}

          <div
            className="hero-folder-spacer shrink-0"
            style={{ width: spacerWidth }}
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
