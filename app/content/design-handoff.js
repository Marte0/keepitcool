/**
 * Design handoff — KeepItCool landing (Figma).
 *
 * Fonte di verità per stato redesign e decisioni approvate.
 * Aggiornare a ogni step approvato dall'utente.
 */

export const DESIGN_HANDOFF = {
  figmaUrl: "https://www.figma.com/design/h8h30JRo9ffjr9tXxvcI5j/Sito?node-id=89-3655",
  status: "step-1-approved",
  currentStep: 2,
  currentStepName: "Hero",
  approved: [
    "Step 0 — design tokens (/styleguide)",
    "Font: Chillax Bold (local) + Outfit (Google variable)",
    "Ink: ink #2c2c2c (main), ink-muted #434343 (secondary), ink-warm #503b14 (CTA on yellow)",
    "CTA: radial gradient btn-cta — not flat #fad724",
    "highlight-yellow: flat mark under text (bottom 0.22em)",
    "SDG colors scoped to 4 Learning Goals cards only",
    "Game cards: game-card-talk/plan/play gradients scoped to Game section",
    "Tag student gradient ends #708721 (was too dark at #435310)",
    "Tag team member names reuse tag-psychologist style",
    "nav-pill / nav-pill-sticky: classi CSS normali in globals.css (come btn-cta), cream 50% + backdrop-blur(12px)",
    "Step 1 — Navbar: logo Figma (/images/logo.svg), mix-blend-multiply, wrapper isolate",
    "Step 1 — layout desktop centrato: logo | nav-pill | Get in touch, gap 100px",
    "Step 1 — nav-pill-sticky sul wrapper pill (pattern /styleguide), header sticky top-4 z-50",
    "Step 1 — link: How it works #how-it-works, Approach #approach, Partners #partners, About us #about (no hero)",
    "Step 1 — CTA Get in touch → #contact; desktop in header, mobile solo nel drawer",
    "Step 1 — mobile: hamburger in cerchio nav-pill; drawer cream-light/95 + blur",
    "Step 1 — scroll hash smooth, scroll-padding-top 5rem, no hide-on-scroll",
  ],
  next: "Step 2 — Hero (titolo Figma, sottotitolo, CTA Join now, card energy topics)",
  blockers: [],
  fonts: {
    display: {
      family: "Chillax Bold",
      tailwind: "font-display (alias font-chillax)",
      path: "public/fonts/Chillax-Bold.otf",
    },
    body: {
      family: "Outfit",
      tailwind: "font-body (alias font-outfit)",
      source: "next/font/google (variable 100–900)",
    },
  },
  cta: {
    type: "radial-gradient",
    stops: ["#fad724 0%", "#e9b717 50%", "#d8970a 100%"],
    textColor: "#503b14",
    note: "Non usare flat #fad724 per CTA — solo per highlight sotto testo",
  },
  sdgColors: {
    scoped: true,
    rule: "Usare bg-sdg-* SOLO nelle card Learning Goals",
    values: {
      red: "#C5192D",
      yellow: "#FCC30B",
      brown: "#BF8B2E",
      green: "#3F7E44",
    },
  },
  gameCards: {
    scoped: true,
    rule: "Usare game-card-talk/plan/play SOLO in GameSection",
    midTones: { talk: "#e05773", plan: "#2b9295", play: "#da6a30" },
  },
  tagLabels: {
    scoped: true,
    rule: "tag-student / tag-psychologist SOLO su pill; nomi team = tag-psychologist",
    text: { student: "#435117", psychologist: "#732474" },
    studentGradient: { start: "#8eaa2c", end: "#708721" },
  },
  definitive: [
    "brand name KeepItCool",
    "palette cream/ink/yellow gradient CTA",
    "Chillax + Outfit",
    "SDG colors scoped to 4 cards",
    "section order from Figma",
  ],
  indicative: ["spacing", "exact font sizes", "copy placeholder", "hero assets"],
};

export const SDG_COLOR_RULE =
  "Token sdg-red, sdg-yellow, sdg-brown, sdg-green: solo componenti SdgCard / LearningGoals.";
