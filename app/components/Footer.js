import { FOOTER, SITE } from "../content/sections";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-deep bg-midnight text-snow">
      <div className="mx-auto flex w-full max-w-page flex-col gap-8 px-5 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-[48px]">
        <div>
          <p className="font-display text-body font-semibold">{SITE.name}</p>
          <p className="mt-1 text-caption text-slate">{FOOTER.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          {FOOTER.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-caption text-slate no-underline transition-colors duration-300 hover:text-ice focus-visible:outline-none focus-visible:text-ice"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            className="text-caption text-slate no-underline transition-colors duration-300 hover:text-ice focus-visible:outline-none focus-visible:text-ice"
          >
            {SITE.email}
          </a>
        </nav>

        <p className="text-caption text-slate">© {year} {SITE.name}</p>
      </div>
    </footer>
  );
}
