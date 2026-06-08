import Link from "next/link";

const VARIANTS = [
  { id: "a", href: "/contact-preview/a", label: "A — Quiet close", note: "Minimal" },
  { id: "b", href: "/contact-preview/b", label: "B — Compose box", note: "Inline mail" },
  { id: "c", href: "/contact-preview/c", label: "C — Energy pulse", note: "Animated" },
];

export default function ContactPreviewNav({ active }) {
  return (
    <div
      className="sticky top-[calc(1rem+3.5rem)] z-40 border-b border-ink/10 bg-cream/90 backdrop-blur-md"
      role="navigation"
      aria-label="Contact section preview variants"
    >
      <div className="mx-auto flex w-full max-w-page flex-wrap items-center justify-center gap-2 px-5 py-3 lg:px-12">
        <span className="mr-1 font-body text-caption font-medium uppercase tracking-wider text-ink-muted">
          Contact preview
        </span>
        {VARIANTS.map((variant) => {
          const isActive = active === variant.id;
          return (
            <Link
              key={variant.id}
              href={variant.href}
              className={`rounded-full px-4 py-2 font-body text-caption font-semibold no-underline transition-colors ${
                isActive
                  ? "bg-ink text-cream-light"
                  : "nav-pill text-ink hover:bg-cream-light"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {variant.label}
              <span className="hidden sm:inline"> · {variant.note}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
