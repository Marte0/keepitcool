import Button from "../components/Button";

const GLOBAL_COLORS = [
  { name: "cream", className: "bg-cream", hex: "#fbeed6" },
  { name: "cream-light", className: "bg-cream-light", hex: "#fcf4e7" },
  { name: "ink", className: "bg-ink", hex: "#2c2c2c" },
  { name: "ink-muted", className: "bg-ink-muted", hex: "#434343" },
  { name: "ink-warm", className: "bg-ink-warm", hex: "#503b14" },
  { name: "yellow-flat", className: "bg-yellow-flat", hex: "#fad724" },
];

const SDG_COLORS = [
  { name: "sdg-red", className: "bg-sdg-red", hex: "#C5192D" },
  { name: "sdg-yellow", className: "bg-sdg-yellow", hex: "#FCC30B" },
  { name: "sdg-brown", className: "bg-sdg-brown", hex: "#BF8B2E" },
  { name: "sdg-green", className: "bg-sdg-green", hex: "#3F7E44" },
];

const GAME_COLORS = [
  { name: "game-talk", className: "bg-game-talk", hex: "#e05773", note: "mid-tone · card usa gradient" },
  { name: "game-plan", className: "bg-game-plan", hex: "#2b9295", note: "mid-tone · card usa gradient" },
  { name: "game-play", className: "bg-game-play", hex: "#da6a30", note: "mid-tone · card usa gradient" },
];

const TAG_COLORS = [
  {
    name: "tag-student",
    className: "tag-student",
    hex: "#435117",
    note: "testo su gradient verde",
  },
  {
    name: "tag-psychologist",
    className: "tag-psychologist",
    hex: "#732474",
    note: "testo su gradient viola",
  },
];

function Swatch({ name, className, hex, note }) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`h-16 w-full rounded-xl border border-ink/10 ${className}`} />
      <p className="font-semibold text-body text-ink">{name}</p>
      <p className="text-caption text-ink-muted">{hex}</p>
      {note && <p className="text-caption text-ink-muted italic">{note}</p>}
    </div>
  );
}

function SdgCardMock({ colorClass, label, hex }) {
  return (
    <div
      className={`flex min-h-[220px] w-full max-w-[200px] flex-col gap-3 rounded-3xl border-[10px] border-white p-5 shadow-card sm:w-[200px] ${colorClass}`}
    >
      <div className="aspect-square w-full rounded-2xl bg-white/25" aria-hidden />
      <p className="text-caption leading-snug text-cream-light">Learning goal</p>
      <p className="font-display text-caption uppercase text-cream-light">{label}</p>
      <p className="text-caption text-cream-light/80">{hex}</p>
    </div>
  );
}

function GameCardMock({ gradientClass, title, bodyClass, titleClass, bodyText }) {
  return (
    <div
      className={`flex min-h-[250px] w-full max-w-[250px] flex-col justify-between rounded-[20px] p-6 shadow-card sm:w-[250px] ${gradientClass}`}
    >
      <p className={`font-display text-[2.875rem] uppercase leading-none ${titleClass}`}>{title}</p>
      <p className={`text-body leading-snug ${bodyClass}`}>{bodyText}</p>
    </div>
  );
}

export const metadata = {
  title: "Style guide",
  robots: { index: false, follow: false },
};

export default function StyleGuidePage() {
  return (
    <main className="mx-auto w-full max-w-page px-5 py-16 lg:px-[100px]">
      <p className="mb-2 text-caption font-semibold uppercase tracking-widest text-ink-muted">
        Dev only — Step 0 review
      </p>
      <h1 className="font-display text-display text-ink">Design tokens</h1>
      <p className="mt-4 max-w-2xl text-lead text-ink-muted">
        Preview per approvare palette, tipografia e CTA prima del redesign sezioni.
      </p>

      {/* Global colors */}
      <section className="mt-16">
        <h2 className="font-display text-section text-ink-muted">Global colors</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GLOBAL_COLORS.map((c) => (
            <Swatch key={c.name} {...c} />
          ))}
        </div>
      </section>

      {/* SDG colors + mocks */}
      <section className="mt-16">
        <h2 className="font-display text-section text-ink-muted">SDG card colors</h2>
        <p className="mt-2 text-body text-ink-muted">
          Solo per le 4 card Learning Goals — non usare altrove.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SDG_COLORS.map((c) => (
            <Swatch key={c.name} {...c} note="SDG only" />
          ))}
        </div>
        <h3 className="mt-12 font-display text-lead uppercase text-ink">SDG card mock</h3>
        <div className="mt-6 flex flex-wrap gap-6">
          {SDG_COLORS.map((c) => (
            <SdgCardMock key={c.name} colorClass={c.className} label={c.name} hex={c.hex} />
          ))}
        </div>
      </section>

      {/* Game cards TALK PLAN PLAY */}
      <section className="mt-16">
        <h2 className="font-display text-section text-ink-muted">Game cards</h2>
        <p className="mt-2 text-body text-ink-muted">
          TALK / PLAN / PLAY — solo sezione gioco. Swatch = tono medio; card = gradient Figma.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {GAME_COLORS.map((c) => (
            <Swatch key={c.name} {...c} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-8">
          <GameCardMock
            gradientClass="game-card-talk"
            title="talk"
            titleClass="text-[#9c1c36]"
            bodyClass="text-[#8c0e27]"
            bodyText="Share information, discuss trade-offs and align your strategy with your teammate."
          />
          <GameCardMock
            gradientClass="game-card-plan"
            title="plan"
            titleClass="text-[#005a5d]"
            bodyClass="text-[#003e40]"
            bodyText="Choose the right investments, balance limited resources and prepare for the consequences."
          />
          <GameCardMock
            gradientClass="game-card-play"
            title="play"
            titleClass="text-[#9c3b09]"
            bodyClass="text-[#6c2804]"
            bodyText="Complete each investment through a unique mini-game, solved with collaboration."
          />
        </div>
      </section>

      {/* Tag labels */}
      <section className="mt-16">
        <h2 className="font-display text-section text-ink-muted">Tag labels</h2>
        <p className="mt-2 text-body text-ink-muted">
          Pill per student / psychologist / team — gradient, non flat.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {TAG_COLORS.map((c) => (
            <Swatch key={c.name} {...c} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-6">
          <span className="tag-student inline-flex rounded-2xl px-3 py-2 font-display text-ui uppercase shadow-card">
            student
          </span>
          <span className="tag-psychologist inline-flex rounded-2xl px-3 py-2 font-display text-ui uppercase shadow-card">
            psychologist
          </span>
          <span className="tag-psychologist inline-flex rounded-2xl px-3 py-2 font-display text-ui uppercase shadow-card">
            Matteo dell&apos;agostino
          </span>
          <span className="tag-psychologist inline-flex rounded-2xl px-3 py-2 font-display text-ui uppercase shadow-card">
            marta piatti
          </span>
        </div>
      </section>

      {/* Typography */}
      <section className="mt-16">
        <h2 className="font-display text-section text-ink-muted">Typography</h2>
        <div className="mt-8 space-y-8 rounded-2xl border border-ink/10 bg-cream-light p-8">
          <div className="grid gap-6 border-b border-ink/10 pb-8 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-caption text-ink-muted">font-body · Outfit</p>
              <p className="font-body text-lead text-ink">The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div>
              <p className="mb-2 text-caption text-ink-muted">font-display · Chillax Bold</p>
              <p className="font-display text-lead text-ink">The quick brown fox jumps over the lazy dog.</p>
            </div>
          </div>
          <div>
            <p className="mb-2 text-caption text-ink-muted">text-display · font-display (Chillax)</p>
            <p className="font-display text-display text-ink">
              From energy literacy to a cooperative game
            </p>
          </div>
          <div>
            <p className="mb-2 text-caption text-ink-muted">highlight-yellow (flat mark + draw-in on reveal)</p>
            <p className="font-display text-section text-ink">
              A <span className="highlight-yellow">cooperative</span> game about energy
            </p>
            <p className="mt-2 text-caption text-ink-muted">
              In sezione con <code className="text-ink">.reveal</code>: fade-up del testo, poi
              sottolineatura da sinistra (~80% del fade-up). Titolo Game section usa delay 3.
            </p>
          </div>
        </div>
      </section>

      {/* Buttons & CTA */}
      <section className="mt-16">
        <h2 className="font-display text-section text-ink-muted">CTA &amp; buttons</h2>
        <p className="mt-2 text-body text-ink-muted">
          Il bottone primario usa gradient radiale giallo — non il flat #fad724.
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink/10 bg-cream-light p-8">
            <p className="mb-4 text-caption font-semibold text-ink-muted">CTA gradient (corretto)</p>
            <Button variant="cta">Get in touch</Button>
            <div className="mt-4 inline-flex min-h-12 min-w-[160px] items-center justify-center rounded-full btn-cta px-6 text-ui font-semibold">
              btn-cta class
            </div>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-cream-light p-8">
            <p className="mb-4 text-caption font-semibold text-ink-muted">Flat yellow (solo highlight testo)</p>
            <div className="inline-flex min-h-12 min-w-[160px] items-center justify-center rounded-full bg-yellow-flat px-6 text-ui font-semibold text-ink-warm">
              Flat #fad724
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button variant="secondary">How it works</Button>
          <Button variant="ghost">Approach</Button>
        </div>
      </section>

      {/* Nav pill */}
      <section className="mt-16 pb-16">
        <h2 className="font-display text-section text-ink-muted">Nav pill</h2>
        <p className="mt-2 text-body text-ink-muted">
          Sticky in alto con sfondo crema semi-trasparente e blur sul contenuto sottostante.
        </p>
        <div className="nav-pill-sticky mx-auto mt-8 flex w-fit justify-center">
          <div className="inline-flex nav-pill gap-6 px-5 py-3 text-ui text-ink">
            <span>How it works</span>
            <span>Approach</span>
            <span>Partners</span>
            <span>About us</span>
          </div>
        </div>
        <div className="mt-8 grid gap-3 rounded-2xl border border-ink/10 p-4">
          <div className="h-24 rounded-xl bg-sdg-red" aria-hidden />
          <div className="h-24 rounded-xl game-card-plan" aria-hidden />
          <div className="h-24 rounded-xl game-card-play" aria-hidden />
          <div className="h-24 rounded-xl bg-sdg-green" aria-hidden />
          <div className="h-24 rounded-xl tag-student" aria-hidden />
          <div className="h-24 rounded-xl tag-psychologist" aria-hidden />
        </div>
      </section>
    </main>
  );
}
