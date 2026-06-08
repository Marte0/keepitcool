/**
 * Project brief — KeepItCool landing.
 *
 * Contesto prodotto, tono e hint per sezione.
 * Leggere prima di proporre copy o implementare una sezione autonomamente.
 *
 * Phase 2c — aggiornato da brief collega (giu 2026).
 */

export const PROJECT_BRIEF = {
  brand: {
    name: "KeepItCool",
    displayName: "KEEP IT COOL",
    internalNote:
      "NOVA = nome interno deprecato. Menzionare solo se utile come origine: «formerly developed as NOVA».",
  },
  product: {
    type: "cooperative serious game",
    oneLiner:
      "KeepItCool is a cooperative serious game that helps teenagers understand the energy transition by managing the future of a fictional nation and experiencing the consequences of their decisions.",
    shortDescription:
      "KeepItCool is a cooperative educational game designed to make energy systems understandable for teenagers. Through strategic decisions, complementary roles and real-time consequences, players learn how energy production, emissions, demand, public approval and infrastructure are connected.",
    longDescription:
      "KeepItCool is a cooperative serious game that transforms energy literacy into an interactive learning experience. Players take responsibility for the future of a fictional nation and must guide it through the energy transition by balancing resources, public approval, emissions, infrastructure and energy demand. The game is built around cooperation: one player makes strategic decisions, while the other interprets data and provides guidance. Together, they discover that energy systems are not made of isolated choices, but of interconnected trade-offs.",
    valueProposition:
      "KeepItCool makes complex energy systems understandable, engaging and emotionally accessible for young people through cooperative gameplay, strategic decision-making and visible consequences.",
    goal: "energy literacy / energy transition through play",
    playerExperience:
      "Players manage the energy transition of a fictional nation, balancing emissions, public approval, budget, energy demand and long-term sustainability. Two players with complementary roles: one decision-maker, one data interpreter and strategic advisor.",
    pillars: [
      "collaboration",
      "decision-making",
      "consequences",
      "systems thinking",
      "energy literacy",
    ],
    notTraditionalEdTool:
      "Serious game — learning through decisions, consequences and teamwork, not lecture-style education. Not a board game only, not a generic sustainability game, not a finished commercial product.",
    roles:
      "One player acts as decision-maker; the other interprets data, reads the system and gives strategic advice — creating dialogue, negotiation and shared understanding.",
    balances: [
      "energy demand",
      "emissions",
      "budget",
      "public approval",
      "infrastructure",
      "long-term sustainability",
    ],
    research:
      "Developed through interaction design research, surveys, focus groups, expert interviews and user testing with high school students.",
    recognition: [
      "BRIDGE Proof of Concept (Innosuisse)",
      "iF Design Student Award 2026",
      "SUPSI / MA Interaction Design background",
    ],
  },
  audience: {
    primary: {
      who: "educators, schools and educational institutions",
      age: "teenagers 15–18",
      contexts: [
        "high school students",
        "teachers and educators",
        "workshops and classroom activities",
        "informal learning",
        "energy literacy and sustainability education",
      ],
    },
    secondary: [
      "energy partners and institutions (AET, Ticino Energia, etc.)",
      "funding bodies and innovation programs",
      "investors / strategic partners",
      "design and innovation community",
      "teenagers / young players (site should feel modern, not institutional)",
    ],
    websiteNote:
      "Primary website audience is educators and institutions; teenagers are secondary — site must feel attractive but credible for funders and schools.",
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
    "trade-offs",
    "systems thinking",
  ],
  tone: {
    website: [
      "clear and accessible",
      "confident but not corporate",
      "engaging and slightly playful",
      "educational but not academic-heavy",
      "visionary but grounded",
      "optimistic — empowerment over fear",
    ],
    avoid: [
      "too academic or thesis-like",
      "too alarmist about climate change",
      "too childish or superficially gamified",
      "too startup-buzzword-heavy",
      "too focused on technology alone",
      "too abstract or generic about sustainability",
      "revolutionary / disruptive / AI-powered unless relevant",
    ],
    visualNote:
      "Website less bold than in-game UI — credible for institutions and funders, engaging for schools and design audiences.",
    address:
      "Educators and institutions primarily; players and partners depending on section.",
  },
  keywords: [
    "cooperative game",
    "energy transition",
    "energy literacy",
    "teenagers",
    "education",
    "serious game",
    "systems thinking",
    "decision-making",
    "trade-offs",
    "game-based learning",
    "interaction design",
    "climate awareness",
  ],
  keyMessages: [
    "Energy systems are a matter of balance — every decision has consequences",
    "Learning happens through cooperation — complementary roles, dialogue, negotiation",
    "Complex topics become accessible through play — tangible, interactive, not abstract",
    "Awareness without eco-anxiety — informed and capable, not paralyzed",
    "Research-based and tested — user testing, expert input, external recognition",
  ],
  positioning: {
    primary: "A cooperative serious game for energy literacy.",
    alternatives: [
      "A cooperative game to understand the energy transition.",
      "A serious game that turns energy complexity into strategic play.",
      "An interactive learning experience about energy choices and their consequences.",
      "A game-based tool to help teenagers understand the trade-offs behind the energy transition.",
    ],
  },
  coreMessage:
    "KeepItCool turns the complexity of the energy transition into a cooperative game where young people learn by making decisions, discussing trade-offs and experiencing the consequences of their choices.",
  gameLoop: {
    talkPlanPlay:
      "TALK / PLAN / PLAY — each investment linked to a cooperative minigame; players communicate, compare data, and decide together.",
    balances: ["energy demand", "emissions", "budget", "public approval"],
    mechanics:
      "Cooperative games, dashboard and data interpretation, yearly turns, strategic decisions — abstract energy topics made concrete through play.",
  },
  language: {
    primary: "English",
    future: "optional Italian for Ticino/Swiss local stakeholders",
    rule: "No mixing languages within the same section unless intentional.",
  },
  ctas: {
    preferred: [
      "Discover the game",
      "Explore how it works",
      "Bring KeepItCool to your school",
      "Partner with us",
      "Get in touch",
      "Follow the project",
      "Support the next phase",
    ],
    institutional: [
      "Start a collaboration",
      "Request more information",
      "Discuss a workshop",
      "Explore partnership opportunities",
    ],
    avoid: ["Buy now", "Subscribe", "Download now"],
  },
  avoidFraming: [
    "only a board game",
    "only a digital game",
    "only a school workshop",
    "only a climate awareness project",
    "a finished commercial product (still in development)",
    "a generic sustainability game",
    "claiming players become energy experts",
    "unrealistic claims about solving eco-anxiety",
    "overclaiming informal partnerships",
  ],
  stakeholders: {
    publicWording:
      "KeepItCool was developed through interaction design research, expert interviews and user testing with high school students. The project is currently being further developed with the support of BRIDGE Proof of Concept and has received the iF Design Student Award 2026.",
    confirmedPartners: [
      "SUPSI",
      "AET",
      "Ticino Energia",
      "Dipartimento del Territorio",
      "WATT ABOUT",
      "BRIDGE / Innosuisse",
    ],
    rule: "Mention specific partners only when confirmed for public communication.",
  },
};

/** Hint per step Figma → cosa enfatizzare (copy placeholder, non layout). */
export const SECTION_HINTS = {
  hero: "Immediately explain what KeepItCool is; cooperative serious game; energy transition; CTA toward educators/partners",
  game: "Cooperative play, TALK/PLAN/PLAY, complementary roles, trade-offs and consequences — not solo play",
  energy: "Energy shapes the future; complexity made accessible; lack of tools for young people; playable systems",
  learningGoals:
    "Energy literacy outcomes; 4 SDG cards — systems thinking, decision-making, collaboration",
  testimonials:
    "Students + experts; cooperation, trade-offs, education+entertainment; tag-student / tag-psychologist pills",
  partners: "Energy sector partnership; credibility; BRIDGE funded row",
  team: "Interaction design team; research + prototyping; approachable narrative",
  finalCta:
    "Educators, school partners, investors — Get in touch; no commercial early-access tone",
};

export const COPY_RULES = [
  "Brand name: KeepItCool (display KEEP IT COOL in footer only)",
  "Primary language: English",
  "Tone: clear, confident, engaging — not academic, not childish, not alarmist",
  "Primary audience on site: educators and institutions; secondary: partners, funders, design community",
  "Emphasize cooperation, consequences, trade-offs, research credibility",
  "Avoid: generic sustainability, expert claims, commercial CTAs, overclaiming partnerships",
  "Landing communicates: serious educational project + engaging cooperative game",
];
