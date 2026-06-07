"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { NAV, SECTION_ORDER, SITE } from "../content/sections";

function navigateToSectionHash(e, href, pathname, onAfterNavigate) {
  const id =
    href.startsWith("/#") && href.length > 2
      ? decodeURIComponent(href.slice(2))
      : href.startsWith("#") && href.length > 2
        ? decodeURIComponent(href.slice(1))
        : "";
  if (!id) return;
  e.preventDefault();

  if (pathname !== "/") {
    window.location.assign(`/#${id}`);
    onAfterNavigate?.();
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.history.pushState(null, "", `/#${id}`);
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  onAfterNavigate?.();
}

function navigateHomeTop(e, pathname) {
  if (pathname !== "/") return;
  e.preventDefault();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (window.location.hash) {
    window.history.pushState(null, "", "/");
  }
  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
}

function NavLink({ href, label, pathname, onNavigate }) {
  return (
    <a
      href={href}
      onClick={(e) => navigateToSectionHash(e, href, pathname, onNavigate)}
      className="group rounded-sm text-ui text-ink no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
    >
      <span className="relative inline-block leading-none">
        <span className="relative z-10">{label}</span>
        <span
          className="pointer-events-none absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
          aria-hidden
        />
      </span>
    </a>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    function onKeyDown(e) {
      if (e.key === "Escape") setIsMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const navLinks = SECTION_ORDER.map((section) => ({
    href: `/#${section.id}`,
    label: section.label,
  }));

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-4 z-50 w-full pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-page px-5 lg:px-12">
        <div className="hidden min-h-[49px] items-center justify-center gap-[100px] md:flex">
          <Link
            href="/"
            onClick={(e) => navigateHomeTop(e, pathname)}
            className="inline-flex shrink-0 isolate items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.svg"
              alt={SITE.name}
              width={89}
              height={49}
              className="h-[49px] w-[89px] mix-blend-multiply"
            />
          </Link>

          <div className="nav-pill-sticky flex w-fit justify-center">
            <nav aria-label="Primary">
              <div className="nav-pill inline-flex items-center gap-6 px-5 py-3 text-ui text-ink lg:gap-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    pathname={pathname}
                  />
                ))}
              </div>
            </nav>
          </div>

          <Button
            variant="cta"
            href={NAV.cta.href}
            onClick={(e) => navigateToSectionHash(e, NAV.cta.href, pathname)}
            className="shrink-0"
          >
            {NAV.cta.label}
          </Button>
        </div>

        <div className="flex min-h-[49px] items-center justify-between md:hidden">
          <Link
            href="/"
            onClick={(e) => navigateHomeTop(e, pathname)}
            className="inline-flex shrink-0 isolate items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.svg"
              alt={SITE.name}
              width={89}
              height={49}
              className="h-[49px] w-[89px] mix-blend-multiply"
            />
          </Link>

          <div className="nav-pill-sticky flex w-fit justify-center">
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer rounded-full border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              <span className="nav-pill relative flex h-11 w-11 items-center justify-center">
                <span className="relative block h-3.5 w-5">
                  <span
                    className={`absolute left-0 h-0.5 w-full rounded-full bg-ink transition-all duration-300 ease-out ${
                      isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-ink transition-all duration-300 ease-out ${
                      isMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 h-0.5 w-full rounded-full bg-ink transition-all duration-300 ease-out ${
                      isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "bottom-0"
                    }`}
                  />
                </span>
              </span>
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          aria-hidden={!isMenuOpen}
          className={`overflow-hidden border-ink/10 transition-all duration-300 ease-out md:hidden ${
            isMenuOpen
              ? "mt-2 max-h-96 rounded-2xl border bg-cream-light/95 backdrop-blur-md"
              : "max-h-0 border-transparent"
          }`}
        >
          <ul className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-ink/10 last:border-b-0">
                <a
                  href={link.href}
                  onClick={(e) =>
                    navigateToSectionHash(e, link.href, pathname, closeMenu)
                  }
                  className="block py-3.5 text-body text-ink no-underline transition-colors hover:text-ink-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <Button
                variant="cta"
                href={NAV.cta.href}
                onClick={(e) =>
                  navigateToSectionHash(e, NAV.cta.href, pathname, closeMenu)
                }
                className="w-full justify-center"
              >
                {NAV.cta.label}
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
