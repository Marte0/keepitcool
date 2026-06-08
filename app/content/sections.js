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
  tagline: "A cooperative serious game for energy literacy and the energy transition.",
  description:
    "KeepItCool turns the complexity of the energy transition into a cooperative game where young people learn by making decisions, solving challenges and experiencing the consequences of their choices.",
  url: "https://keepitcool.ch",
  email: "info@keepitcool.ch",
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
          offsetX: 125,
          offsetY: -145,
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

export const ENERGY = {
  titleBefore: "Energy shapes the ",
  titleHighlight: "future",
  body:
    "Energy is at the centre of the climate transition, yet young people often lack dedicated tools to understand how it works. The goal is to make this complexity more accessible by creating a tailored medium for them.",
  photos: [
    {
      src: "/images/energy/phones-energy-dashboard.jpg",
      alt: "Two phones showing gas import terminals and the energy crisis dashboard",
      tilt: -5.67,
      mobileTilt: -3.5,
      offsetY: 28,
      width: 1200,
      height: 1200,
    },
    {
      src: "/images/energy/grid-connection-gameplay.jpg",
      alt: "Student playing the grid connection improvements minigame",
      tilt: 10.13,
      mobileTilt: 3.5,
      offsetY: 0,
      width: 1200,
      height: 1200,
    },
    {
      src: "/images/energy/low-carbon-power-site.jpg",
      alt: "Low-carbon power site card on a phone during gameplay",
      tilt: -3.97,
      mobileTilt: -3,
      offsetY: 42,
      width: 1200,
      height: 1200,
    },
    {
      src: "/images/energy/students-playing-together.jpg",
      alt: "Two students playing the cooperative energy game together",
      tilt: 10.89,
      mobileTilt: 4,
      offsetY: 8,
      width: 1200,
      height: 1200,
    },
  ],
};

export const LEARNING_GOALS = {
  title: "Learning goals",
  cards: [
    {
      id: "sdg-4",
      sdg: 4,
      label: "Quality Education",
      colorClass: "bg-sdg-red",
      tilt: -7,
      mobileTilt: -3,
      body: "Making complex energy topics accessible through active, game-based learning.",
      icon: "/images/sdg/sdg-4-quality-education.png",
      width: 1500,
      height: 1500,
    },
    {
      id: "sdg-7",
      sdg: 7,
      label: "Affordable and Clean Energy",
      colorClass: "bg-sdg-yellow",
      tilt: -3.5,
      mobileTilt: 3,
      body: "Helping players understand energy sources, infrastructures and transition choices.",
      icon: "/images/sdg/sdg-7-affordable-clean-energy.png",
      width: 1500,
      height: 1500,
    },
    {
      id: "sdg-12",
      sdg: 12,
      label: "Responsible Consumption and Production",
      colorClass: "bg-sdg-brown",
      tilt: 3.5,
      mobileTilt: -3,
      body: "Encouraging reflection on energy demand, resource use and the impact of collective choices.",
      icon: "/images/sdg/sdg-12-responsible-consumption.png",
      width: 1500,
      height: 1500,
    },
    {
      id: "sdg-13",
      sdg: 13,
      label: "Climate Action",
      colorClass: "bg-sdg-green",
      tilt: 7,
      mobileTilt: 3,
      body: "Connecting energy decisions with emissions, climate goals and long-term consequences.",
      icon: "/images/sdg/sdg-13-climate-action.png",
      width: 1500,
      height: 1500,
    },
  ],
};

export const TESTIMONIALS = {
  titleLeft: { before: "Backed up from the ", highlight: "target" },
  titleRight: { before: "and from ", highlight: "experts" },
  students: [
    {
      id: "student-17",
      quote:
        "It made me realize that energy decisions are connected. Every choice affects the whole system.",
      tagClass: "tag-student",
      tagLine1: "Student",
      tagLine2: "17 years old",
      tagAlign: "left",
      tilt: 6.06,
      mobileTilt: 2,
    },
    {
      id: "student-16-communicate",
      quote:
        "The game pushed us to communicate and build a strategy together, instead of just playing individually.",
      tagClass: "tag-student-teal",
      tagLine1: "Student",
      tagLine2: "16 years old",
      tagAlign: "left",
      tilt: -7.32,
      mobileTilt: -2,
    },
    {
      id: "student-16-tradeoffs",
      quote:
        "By the end of the game, I realized I had started to understand the trade-offs behind the energy system: every choice had benefits, costs and consequences for the whole nation.",
      tagClass: "tag-student-play",
      tagLine1: "Student",
      tagLine2: "16 years old",
      tagAlign: "left",
      tilt: -2.09,
      mobileTilt: -2,
    },
  ],
  experts: [
    {
      id: "elena-battipede",
      quote:
        "It successfully combines education and entertainment, turning a complex and potentially anxiety-inducing topic into a structured, collaborative challenge.",
      tagClass: "tag-psychologist",
      tagLine1: "Elena Battipede",
      tagLine2: "Educational Researcher",
      tagAlign: "left",
      tilt: -7.28,
      mobileTilt: -2,
    },
    {
      id: "silvio-giacomini",
      quote:
        "The energy system is a delicate balance between production, demand, infrastructure, costs and social acceptance. Keep it cool makes this balance visible by allowing players to experience the consequences of each decision.",
      tagClass: "tag-expert-energy",
      tagLine1: "Silvio Giacomini,",
      tagLine2: "Energy expert",
      tagAlign: "left",
      tilt: 5.46,
      mobileTilt: 2,
    },
  ],
};

export const PARTNERS = {
  titleBefore: "Partnership with the ",
  titleHighlight: "energy sector",
  linkLabel: "website →",
  logos: [
    {
      id: "aet",
      name: "AET",
      src: "/images/partners/aet.png",
      href: "https://www.aet.ch",
      tilt: -4,
      mobileTilt: -2,
      slot: "top-left",
      floatDelay: 0,
    },
    {
      id: "supsi",
      name: "SUPSI",
      src: "/images/partners/supsi.png",
      href: "https://www.supsi.ch",
      tilt: 3,
      mobileTilt: 2,
      slot: "top-center",
      floatDelay: 1.5,
    },
    {
      id: "ticino-energia",
      name: "Ticino Energia",
      src: "/images/partners/ticino-energia.png",
      href: "https://www.ticinoenergia.ch",
      tilt: 5,
      mobileTilt: 3,
      slot: "top-right",
      floatDelay: 3,
    },
    {
      id: "watt-about",
      name: "WATT ABOUT",
      src: "/images/partners/watt-about.png",
      href: "https://wattabout.ch",
      tilt: 4,
      mobileTilt: -2,
      slot: "bottom-left",
      floatDelay: 4.5,
    },
    {
      id: "dipartimento-territorio",
      name: "Dipartimento del territorio",
      src: "/images/partners/dipartimento-territorio.png",
      href: "https://www4.ti.ch/dt/",
      tilt: -6,
      mobileTilt: -3,
      slot: "bottom-right",
      floatDelay: 2.25,
    },
  ],
  funded: {
    labelBefore: "Project ",
    labelHighlight: "funded",
    labelAfter: " by",
    logo: {
      name: "BRIDGE",
      src: "/images/partners/bridge.png",
      href: "https://www.bridge.ch",
      tilt: 6.65,
      mobileTilt: 0,
      floatDelay: 0,
    },
  },
};

export const TEAM = {
  title: "But who are we?",
  body: "We are a small team of designers and researchers building KeepItCool — a cooperative game that helps young people explore the energy transition through play, strategy and shared decisions. We work with educators and energy partners to turn complex topics into something teenagers can actually engage with.",
  actionLabels: {
    portfolio: "portfolio →",
    mail: "mail →",
  },
  members: [
    {
      id: "matteo",
      name: "Matteo dell'agostino",
      src: "/images/team/matteo.png",
      width: 768,
      height: 1024,
      slot: "left",
      portfolioHref: "https://marte.industries",
      email: "matteodellagostino@gmail.com",
      tilt: -3,
      mobileTilt: -2,
    },
    {
      id: "marta",
      name: "marta piatti",
      src: "/images/team/marta.png",
      width: 768,
      height: 1024,
      slot: "right",
      portfolioHref: "https://instagram.com/marta.indd",
      email: "martapiaatti@gmail.com",
      tilt: 3,
      mobileTilt: 2,
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

/** Step 8 — Contact section (preview variants A/B/C; final picks one). */
export const CONTACT = {
  title: "Want to learn more?",
  body:
    "KeepItCool is a cooperative serious game that helps teenagers understand the energy transition through play — not lectures. If you're an educator, school partner, or investor exploring pilots, partnerships, or demos, we'd love to hear from you.",
  cta: { label: "Get in touch", href: "mailto:info@keepitcool.ch" },
  email: "info@keepitcool.ch",
  emailDirectLabel: "Or email us directly",
  mailtoSubject: "KeepItCool — Inquiry",
  compose: {
    emailLabel: "Your email",
    messageLabel: "Message",
    emailPlaceholder: "you@school.ch",
    messagePlaceholder: "Hi — I'm interested in learning more about KeepItCool for...",
    submitLabel: "Send message",
  },
  topics: [
    { id: "renewable", label: "Renewable energy" },
    { id: "smart-grid", label: "Smart grids" },
    { id: "nuclear", label: "Nuclear energy" },
    { id: "storage", label: "Energy storage" },
    { id: "electrification", label: "Electrification" },
    { id: "carbon", label: "Carbon reduction" },
  ],
};

export const FOOTER = {
  brandDisplay: "KEEP IT COOL",
  logoSrc: "/images/logo-footer.png",
  logoWidth: 1024,
  logoHeight: 547,
  tagline: "A cooperative serious game for energy literacy and the energy transition.",
  email: "info@keepitcool.ch",
  nav: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Approach", href: "#approach" },
    { label: "Partners", href: "#partners" },
    { label: "About us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
