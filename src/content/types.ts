export type Lang = "en" | "zh";

export interface Dict {
  boot: {
    lines: Array<{ t: string; ok: boolean; dim: boolean }>;
    skip: string;
  };
  nav: {
    links: Array<{ href: string; label: string }>;
    status: string;
    switchEn: string;
    switchZh: string;
  };
  hero: {
    kicker: string;
    h1a: string;
    h1b: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
    readouts: Array<{ k: string; v: string }>;
    corner: string;
  };
  concept: {
    kicker: string;
    h2a: string;
    h2b: string;
    p1: string;
    p2: string;
    motto: string;
    items: Array<{ code: string; title: string; body: string }>;
  };
  structure: {
    kicker: string;
    h2a: string;
    h2b: string;
    nodes: Array<{ code: string; name: string; desc: string }>;
    coreLabel: string;
    panelHint: string;
    aria: string;
  };
  archive: {
    kicker: string;
    h2a: string;
    h2b: string;
    p: string;
    quote: string;
    quoteSource: string;
    records: Array<{ id: string; tag: string; title: string; body: string }>;
  };
  manifesto: {
    kicker: string;
    seal: string;
    q1: string;
    q2: string;
    sub: string;
    p: string;
    cta1: string;
    cta2: string;
    cta3: string;
    motto: string;
  };
  footer: {
    tagline: string;
    status: string;
    columns: Array<{
      title: string;
      links: Array<{ label: string; href: string }>;
    }>;
    copyright: string;
    meta: string;
  };
}
