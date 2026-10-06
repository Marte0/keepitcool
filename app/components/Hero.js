import Image from "next/image";
import HeroFoldersCarousel from "./HeroFoldersCarousel";
import RevealOnScroll from "./RevealOnScroll";
import { HERO } from "../content/sections";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-cream"
      style={{ paddingBlock: "var(--section-py)" }}
    >
      <div className="relative mx-auto w-full max-w-page px-5 lg:px-12">
        <div className="mx-auto flex max-w-[1080px] flex-col items-center text-center">
          <RevealOnScroll>
            <h1 className="font-display text-display text-ink">{HERO.title}</h1>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <p className="mt-6 max-w-[740px] font-body text-lead text-ink">{HERO.subtitle}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={2} className="mt-12 hidden w-full md:mt-16 md:block">
            <div
              className="hero-folder-row relative mx-auto flex min-h-[340px] w-full max-w-[1080px] items-end justify-center py-6"
              aria-label="Energy topic folders"
            >
              {HERO.folders.map((folder, index) => (
                <div
                  key={folder.src}
                  className="hero-folder-card relative shrink-0"
                  style={{
                    "--folder-tilt": `${folder.tilt}deg`,
                    marginTop: `${folder.offsetY}px`,
                    marginLeft: index === 0 ? 0 : "-2.5rem",
                    zIndex: index + 1,
                  }}
                >
                  <Image
                    src={folder.src}
                    alt={folder.alt}
                    width={228}
                    height={310}
                    className="hero-folder-img drop-shadow-[0_4px_7.4px_rgba(0,0,0,0.12)]"
                    priority={index < 2}
                    loading={index < 2 ? undefined : "eager"}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={2} className="mt-12 w-full shrink-0 overflow-visible md:hidden">
            <HeroFoldersCarousel folders={HERO.folders} />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
