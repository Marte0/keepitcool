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
  eyebrow: "Temperature monitoring",
  title: "Keep it cool.\nKeep it safe.",
  subtitle:
    "A lightweight sensor and dashboard that watch your cold chain 24/7 — so you focus on your work, not on spoilage.",
  primaryCta: { label: "Get early access", href: "#contact" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
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
