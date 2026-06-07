/**
 * Project brief — KeepItCool landing.
 *
 * Contesto prodotto, tono e hint per sezione.
 * Leggere prima di proporre copy o implementare una sezione autonomamente.
 */

export const PROJECT_BRIEF = {
  brand: {
    name: "KeepItCool",
    internalNote: "NOVA = nome interno deprecato — non usare nel copy del sito",
  },
  product: {
    type: "cooperative digital game",
    goal: "energy literacy / energy transition through play",
    audience: {
      primary: "students 15–18",
      secondary: "educators, investors/stakeholders",
    },
    playerExperience:
      "Two players as Energy Ministers in a fictional nation facing an energy crisis — strategic investments, trade-offs, minigames, dashboard, and shared strategy.",
    pillars: [
      "collaboration",
      "decision-making",
      "consequences",
      "teamwork",
      "systems thinking",
    ],
    notTraditionalEdTool:
      "Serious game — learning through decisions, consequences, and teamwork, not lecture-style education.",
  },
  topics: [
    "renewable energy",
    "fossil fuels",
    "nuclear energy",
    "carbon reduction",
    "public approval",
    "smart grids",
    "storage",
    "electrification",
    "infrastructure",
  ],
  tone: {
    website: [
      "clear",
      "energetic",
      "accessible",
      "slightly narrative",
      "direct",
    ],
    avoid: ["too academic", "dry institutional"],
    visualNote:
      "Website less bold than in-game UI — site targets stakeholders/investors; game targets teens with bolder, playful identity.",
    address: "Players or educators/investors depending on section",
  },
  keywords: [
    "cooperative game",
    "energy transition",
    "energy literacy",
    "teenagers",
    "education",
    "sustainability",
    "systems thinking",
    "climate awareness",
    "interactive learning",
    "serious game",
    "teamwork",
    "decision-making",
    "future scenarios",
  ],
  coreMessage:
    "KeepItCool turns the complexity of the energy transition into a cooperative game where young people learn by making decisions, solving challenges and experiencing the consequences of their choices.",
  gameLoop: {
    talkPlanPlay:
      "TALK / PLAN / PLAY — each investment linked to a cooperative minigame; players communicate, compare data, and decide together.",
    balances: ["energy demand", "emissions", "budget", "public approval"],
    mechanics:
      "Cooperative games, mobile interactions, quick decision challenges — abstract energy topics made concrete through play.",
  },
};

/** Hint per step Figma → cosa enfatizzare (copy placeholder, non layout). */
export const SECTION_HINTS = {
  hero: "Energy literacy → cooperative game; bold uppercase title; CTA join/participate; optional energy topic cards",
  game: "Cooperative play, TALK/PLAN/PLAY minigames, collaboration — not solo play",
  energy: "Transition shapes the future; complexity, dashboard, decisions, future scenarios",
  learningGoals:
    "Energy literacy outcomes; 4 SDG cards — use bg-sdg-* tokens scoped only here",
  testimonials: "Students + educators/professors; quotes with tag-student / tag-psychologist pills",
  partners: "Partnership with the energy sector; logo grid placeholder",
  team: "But who are we — team portraits, approachable narrative",
  finalCta: "Want to learn more — Get in touch; stakeholder-facing CTA",
};

export const COPY_RULES = [
  "Brand name: KeepItCool only",
  "All copy is placeholder until client approval",
  "Tone: energetic but not childish on website; not academic",
  "Speak to players OR educators/investors depending on section",
  "Landing communicates: serious educational project + engaging cooperative game",
];
