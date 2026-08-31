import type { Dict } from "./types";

export const en: Dict = {
  boot: {
    lines: [
      { t: "LIVUNIS KERNEL 0.2 — cold start", ok: false, dim: true },
      { t: "linking canon archive .............. ", ok: true, dim: false },
      { t: "loading world memory ............... ", ok: true, dim: false },
      { t: "verifying continuity ............... ", ok: true, dim: false },
      { t: "indexing history layers ............ ", ok: true, dim: false },
      { t: "archive interface ready — initializing", ok: false, dim: true },
    ],
    skip: "▮ tap anywhere to skip",
  },
  nav: {
    links: [
      { href: "#concept", label: "01 CONCEPT" },
      { href: "#structure", label: "02 STRUCTURE" },
      { href: "#memory", label: "03 MEMORY" },
      { href: "#manifesto", label: "04 MANIFESTO" },
    ],
    status: "SYSTEM ONLINE",
    switchEn: "EN",
    switchZh: "中文",
  },
  hero: {
    kicker: "THE LIVING UNIVERSE FRAMEWORK",
    h1a: "A universe",
    h1b: "that remembers.",
    sub: "LIVUNIS is a framework for narrative civilizations that persist beyond any single story — worlds where fiction, once validated, becomes history, and history reshapes everything that comes after.",
    ctaPrimary: "ENTER THE ARCHIVE ↓",
    ctaSecondary: "READ THE MANIFESTO",
    scrollHint: "// SCROLL TO INITIALIZE THE ARCHIVE",
    readouts: [
      { k: "WORLD STATUS", v: "EVOLVING" },
      { k: "MEMORY LAYERS", v: "ACTIVE" },
      { k: "CANON ENGINE", v: "STANDBY" },
      { k: "CONTINUITY", v: "VERIFIED" },
    ],
    corner: "V0.2 · FRAMEWORK DRAFT\nELEVATION 0000 · ARCHIVE 01",
  },
  concept: {
    kicker: "01 · THE CONCEPT",
    h2a: "Stories end.",
    h2b: "Worlds should not.",
    p1: "A novel has a final page. A film has a final frame. A living universe does not. LIVUNIS is a framework for building worlds that keep functioning long after the story that introduced them — worlds with a shared record of what happened, a continuous present, and a history that future stories must take seriously.",
    p2: "The universe is the product. Stories are how history happens. Anything written into canon is no longer merely a narrative — it becomes part of the world's memory, and memory has consequences.",
    motto: "// THE UNIVERSE IS THE PRODUCT. STORIES ARE HOW HISTORY HAPPENS.",
    items: [
      {
        code: "REC-001",
        title: "PERSISTENCE",
        body: "The world does not reset between stories. It accumulates.",
      },
      {
        code: "REC-002",
        title: "MEMORY",
        body: "What is accepted becomes record. What is refuted becomes history of another kind.",
      },
      {
        code: "REC-003",
        title: "CONTINUITY",
        body: "Every new story inherits everything that came before it — and must reckon with it.",
      },
    ],
  },
  structure: {
    kicker: "02 · SYSTEM STRUCTURE",
    h2a: "Six systems.",
    h2b: "One living world.",
    nodes: [
      {
        code: "SYS-01",
        name: "WORLD",
        desc: "A persistent state of places, people and power that keeps changing long after the last page.",
      },
      {
        code: "SYS-02",
        name: "CANON",
        desc: "The shared record of what the world agrees is true. Written by many. Final authority held by humans.",
      },
      {
        code: "SYS-03",
        name: "HISTORY",
        desc: "Validated fiction becomes history — and history has consequences for every story born after it.",
      },
      {
        code: "SYS-04",
        name: "CREATORS",
        desc: "Human authorship stays protected. No single author ever owns the universe.",
      },
      {
        code: "SYS-05",
        name: "AGENTS",
        desc: "AI governs consistency, not creativity. It asks \u201ccan it exist?\u201d — it never decides what becomes history.",
      },
      {
        code: "SYS-06",
        name: "EVOLUTION",
        desc: "Better explanations can reframe the past. Canon facts may change; canon artifacts remain.",
      },
    ],
    coreLabel: "CORE",
    panelHint: "// move across the network to inspect each system",
    aria: "LIVUNIS system structure network",
  },
  archive: {
    kicker: "03 · THE UNIVERSE REMEMBERS",
    h2a: "Nothing is lost.",
    h2b: "Everything is remembered.",
    p: "The universe does not only keep what happened. It keeps what was believed, what was recorded, and what was later reinterpreted. The wrong records stay on file — because an error, once inscribed, is history too.",
    quote: "Canon facts may change.\nCanon artifacts remain.",
    quoteSource: "// HISTORICAL RECORD LAYER · EPISTEMIC LAYER",
    records: [
      {
        id: "REC-0001",
        tag: "STORY",
        title: "A story is proposed",
        body: "A creator writes inside a chosen time, place and scope. The world hands them a canonical snapshot of everything that happened before.",
      },
      {
        id: "REC-0002",
        tag: "CLAIM",
        title: "Claims are extracted",
        body: "Every assertion about the world becomes a claim — subject, relation, object, valid time, source, status. A story is not yet history.",
      },
      {
        id: "REC-0003",
        tag: "ENGINE",
        title: "The canon engine validates",
        body: "Timelines, causality, technology, identity, blast radius. The engine asks one question: can this exist in the world as we know it?",
      },
      {
        id: "REC-0004",
        tag: "JUDGMENT",
        title: "A human decision",
        body: "AI asks if it can exist. Humans decide if it should become history. No single author owns the record — but an author owns the work.",
      },
      {
        id: "REC-0005",
        tag: "COMMIT",
        title: "History is committed",
        body: "Reality canon, world state, historical memory and provenance update together. The event leaves a permanent, traceable mark.",
      },
      {
        id: "REC-0006",
        tag: "MEMORY",
        title: "The world remembers",
        body: "Records persist even when reinterpreted. Old stories are reclassified — reframed, never deleted. Error becomes history too.",
      },
    ],
  },
  manifesto: {
    kicker: "04 · THE MANIFESTO",
    seal: "◆ CANON SEAL · PRINCIPLE 03",
    q1: "AI asks: can it exist?",
    q2: "Humans decide: should it become history?",
    sub: "CONSISTENCY IS MACHINE-GOVERNED. AUTHORITY IS HUMAN.",
    p: "LIVUNIS is an open framework, not a finished product. It is the infrastructure for a new kind of narrative civilization — built by many creators, watched over by a canon engine, remembered by a world that never stops.",
    cta1: "READ THE MANIFESTO",
    cta2: "EXPLORE THE FRAMEWORK",
    cta3: "ENTER THE DOCUMENTATION",
    motto: "// THE UNIVERSE IS THE PRODUCT. STORIES ARE HOW HISTORY HAPPENS.",
  },
  footer: {
    tagline:
      "Living Universe — a persistent narrative civilization. Worlds that outlive their stories.",
    status: "SYSTEM ONLINE",
    columns: [
      {
        title: "FRAMEWORK",
        links: [
          { label: "THE CONCEPT", href: "#concept" },
          { label: "SYSTEM STRUCTURE", href: "#structure" },
          { label: "THE UNIVERSE REMEMBERS", href: "#memory" },
          { label: "THE MANIFESTO", href: "#manifesto" },
        ],
      },
      {
        title: "DOCUMENTS",
        links: [
          {
            label: "MANIFESTO",
            href: "https://github.com/lei6523/LIVUNIS/blob/main/MANIFESTO.md",
          },
          {
            label: "SYSTEM OVERVIEW",
            href: "https://github.com/lei6523/LIVUNIS/blob/main/docs/SYSTEM_OVERVIEW.md",
          },
          {
            label: "GLOSSARY",
            href: "https://github.com/lei6523/LIVUNIS/blob/main/GLOSSARY.md",
          },
          {
            label: "ARCHITECTURE ATLAS",
            href: "https://github.com/lei6523/LIVUNIS/blob/main/docs/visuals/README.md",
          },
        ],
      },
      {
        title: "SYSTEM",
        links: [
          {
            label: "WEBSITE REPOSITORY",
            href: "https://github.com/lei6523/LIVUNIS",
          },
          {
            label: "STATUS — DOCUMENTATION PHASE",
            href: "https://github.com/lei6523/LIVUNIS",
          },
          { label: "CONTACT — OPEN CHANNEL", href: "mailto:contact@livunis.space" },
        ],
      },
    ],
    copyright: "© 2026 LIVUNIS · A LIVING UNIVERSE PROJECT",
    meta: "V0.2 · FRAMEWORK DRAFT · EARTH UPLINK: STABLE",
  },
};
