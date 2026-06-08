"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FOOTER } from "../content/sections";

function navigateToSectionHash(e, href, pathname) {
  const id =
    href.startsWith("/#") && href.length > 2
      ? decodeURIComponent(href.slice(2))
      : href.startsWith("#") && href.length > 1
        ? decodeURIComponent(href.slice(1))
        : "";
  if (!id) return;
  e.preventDefault();

  if (pathname !== "/") {
    window.location.assign(`/#${id}`);
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.history.pushState(null, "", `/#${id}`);
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}

function FooterNavLink({ href, label, pathname }) {
  const fullHref = href.startsWith("#") ? `/${href}` : href;

  return (
    <a
      href={fullHref}
      onClick={(e) => navigateToSectionHash(e, href, pathname)}
      className="group font-body text-caption text-ink-muted no-underline transition-colors hover:text-ink focus-visible:outline-none focus-visible:text-ink"
    >
      <span className="relative inline-block">
        <span className="relative z-10">{label}</span>
        <span
          className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
          aria-hidden
        />
      </span>
    </a>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-ink bg-cream">
      <div className="mx-auto w-full max-w-page px-5 py-6 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12 lg:py-7">
        <div className="max-w-[15rem] shrink-0">
          <Link
            href="/"
            className="inline-flex isolate items-center no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            <Image
              src={FOOTER.logoSrc}
              alt={FOOTER.brandDisplay}
              width={FOOTER.logoWidth}
              height={FOOTER.logoHeight}
              className="h-auto w-[5.5rem] sm:w-[6rem]"
              unoptimized
            />
          </Link>
          <p className="mt-2 font-body text-caption leading-snug text-ink-muted">{FOOTER.tagline}</p>
        </div>

        <nav
          className="mt-5 flex flex-wrap gap-x-5 gap-y-2 lg:mt-0 lg:flex-1 lg:justify-center"
          aria-label="Footer"
        >
          {FOOTER.nav.map((link) => (
            <FooterNavLink key={link.href} href={link.href} label={link.label} pathname={pathname} />
          ))}
        </nav>

        <div className="mt-5 shrink-0 lg:mt-0 lg:text-right">
          <a
            href={`mailto:${FOOTER.email}`}
            className="font-body text-caption text-ink-muted no-underline underline-offset-4 transition-colors hover:text-ink hover:underline focus-visible:outline-none focus-visible:text-ink focus-visible:underline"
          >
            {FOOTER.email}
          </a>
          <p className="mt-1.5 font-body text-caption text-ink-muted">
            © {year} {FOOTER.brandDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
}
