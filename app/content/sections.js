/** Ordine anchor in Navbar (nessun link al hero). */
export const SECTION_ORDER = [
  { id: "how-it-works", label: "How it works" },
  { id: "approach", label: "Approach" },
  { id: "partners", label: "Partners" },
  { id: "about", label: "About us" },
];

export const NAV = {
  cta: { label: "Get in touch", href: "#contact" },
};

export const SECTION_CHECKLIST = [
  "Use design-system fonts only",
  "Use tokenized colors only",
  "Use spacing scale or documented exception",
  "Keep visual hierarchy eyebrow > title > body",
  "Validate mobile and desktop",
];

export const SITE = {
  name: "KeepItCool",
  tagline: "Smart cooling for what matters.",
  description:
    "KeepItCool monitors temperature in real time and keeps your products in the safe zone — simple setup, clear alerts, peace of mind.",
  url: "https://keepitcool.app",
  email: "hello@keepitcool.app",
};

export const HERO = {
  title: "From energy literacy to a cooperative game",
  subtitle:
    "Helping young citizens explore the energy transition through play, strategy and collaboration",
  cta: { label: "Join now", href: "#contact" },
  folders: [
    {
      src: "/images/hero/folder-wind.png",
      alt: "New wind turbine plant",
      tilt: -3.62,
      offsetY: 8,
    },
    {
      src: "/images/hero/folder-lng.png",
      alt: "LNG import terminals",
      tilt: 3.43,
      offsetY: -16,
    },
    {
      src: "/images/hero/folder-nuclear.png",
      alt: "Nuclear power site",
      tilt: -5.42,
      offsetY: 4,
    },
    {
      src: "/images/hero/folder-awareness.png",
      alt: "Bridging the public awareness gap",
      tilt: 3.02,
      offsetY: -16,
    },
    {
      src: "/images/hero/folder-storage.png",
      alt: "Energy storage system",
      tilt: -2.3,
      offsetY: 6,
    },
  ],
};

export const GAME = {
  titleHighlight: "cooperative",
  titleBefore: "A ",
  titleAfter: " game about energy",
  body:
    "Guide your nation through the energy transition and reach net zero before it's too late. Every investment is a shared decision, and every choice can bring you closer to a sustainable future.",
  cards: [
    {
      id: "talk",
      title: "talk",
      gradientClass: "game-card-talk",
      titleClass: "text-[#9c1c36]",
      bodyClass: "text-[#8c0e27]",
      body: "Share information, discuss trade-offs and align your strategy with your teammate.",
      assets: [
        {
          slot: "top-right",
          src: "/images/game/talk/asset-1.png",
          alt: "Energy transition game on phone",
          width: 509,
          height: 509,
          displayWidth: 168,
          tilt: -7,
          offsetX: 120,
          offsetY: -195,
        },
        {
          slot: "mid-left",
          src: "/images/game/talk/asset-2.png",
          alt: "Grid connection investment card",
          width: 509,
          height: 509,
          displayWidth: 168,
          tilt: 6,
          offsetX: -175,
          offsetY: 0,
        },
        {
          slot: "bottom-left",
          src: "/images/game/talk/asset-3.png",
          alt: "Players reviewing the game together",
          width: 509,
          height: 509,
          displayWidth: 150,
          tilt: -5,
          offsetX: -190,
          offsetY: 170,
        },
      ],
    },
    {
      id: "plan",
      title: "plan",
      gradientClass: "game-card-plan",
      titleClass: "text-[#005a5d]",
      bodyClass: "text-[#003e40]",
      body: "Choose the right investments, balance limited resources and prepare for the consequences.",
      assets: [
        {
          slot: "top-right",
          src: "/images/game/plan/asset-1.png",
          alt: "Emissions tracker",
          width: 423,
          height: 530,
          displayWidth: 130,
          tilt: -8,
          offsetX: 115,
          offsetY: -188,
        },
        {
          slot: "mid-left",
          src: "/images/game/plan/asset-2.png",
          alt: "Society dashboard",
          width: 507,
          height: 530,
          displayWidth: 140,
          tilt: 5,
          offsetX: -168,
          offsetY: 0,
        },
        {
          slot: "bottom-left",
          src: "/images/game/plan/asset-3.png",
          alt: "Global warming tracker",
          width: 873,
          height: 583,
          displayWidth: 200,
          tilt: -4,
          offsetX: -200,
          offsetY: 165,
        },
      ],
    },
    {
      id: "play",
      title: "play",
      gradientClass: "game-card-play",
      titleClass: "text-[#9c3b09]",
      bodyClass: "text-[#6c2804]",
      body: "Complete each investment through a unique mini-game, solved with collaboration.",
      assets: [
        {
          slot: "top-right",
          src: "/images/game/play/asset-1.png",
          alt: "Place investment button",
          width: 483,
          height: 166,
          displayWidth: 160,
          tilt: 4,
          offsetX: 118,
          offsetY: -72,
        },
        {
          slot: "mid-left",
          src: "/images/game/play/asset-2.png",
          alt: "Compass minigame",
          width: 723,
          height: 737,
          displayWidth: 140,
          tilt: -9,
          offsetX: -172,
          offsetY: 0,
        },
        {
          slot: "bottom-left",
          src: "/images/game/play/asset-3.png",
          alt: "Solar panel minigame",
          width: 925,
          height: 872,
          displayWidth: 150,
          tilt: 6,
          offsetX: -188,
          offsetY: 168,
        },
      ],
    },
  ],
};

export const ABOUT = {
  eyebrow: "The problem",
  title: "When temperature drifts, quality follows.",
  body: "Fridges fail quietly. Deliveries run long. A few degrees too warm can mean wasted product and lost trust. KeepItCool gives you visibility before small issues become expensive ones.",
  stats: [
    { value: "24/7", label: "Continuous monitoring" },
    { value: "< 1 min", label: "Alert delivery" },
    { value: "5 min", label: "Setup time" },
  ],
};

export const FEATURES = {
  eyebrow: "Features",
  title: "Everything you need to stay in range.",
  items: [
    {
      title: "Real-time dashboard",
      description: "Live readings and history in one calm, readable view — on desktop or phone.",
    },
    {
      title: "Instant alerts",
      description: "Push and email when thresholds are crossed, with enough context to act fast.",
    },
    {
      title: "Simple install",
      description: "Peel, stick, connect. No wiring, no IT project — up and running in minutes.",
    },
    {
      title: "Export & compliance",
      description: "Download logs for audits and share read-only access with your team.",
    },
  ],
};

export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  title: "Three steps to peace of mind.",
  steps: [
    {
      step: "01",
      title: "Place the sensor",
      description: "Mount it where temperature matters — fridge, freezer, or transport box.",
    },
    {
      step: "02",
      title: "Set your range",
      description: "Define min/max thresholds and who gets notified when something shifts.",
    },
    {
      step: "03",
      title: "Stay informed",
      description: "Glance at the dashboard or wait for alerts — your cold chain stays visible.",
    },
  ],
};

export const CTA = {
  eyebrow: "Early access",
  title: "Ready to keep it cool?",
  body: "Join the waitlist — we'll reach out when KeepItCool is ready for your setup.",
  buttonLabel: "Join the waitlist",
  placeholder: "you@company.com",
};

export const FOOTER = {
  tagline: "Smart cooling for what matters.",
  links: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};
