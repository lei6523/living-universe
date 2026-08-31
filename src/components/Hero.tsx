import Starfield from "./Starfield";
import { LINKS } from "../lib/links";
import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* atmosphere layers */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 38%, rgba(124,199,232,0.09), transparent 70%), radial-gradient(ellipse 40% 35% at 72% 70%, rgba(142,155,240,0.05), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <Starfield />

      {/* faint watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="select-none font-display text-[22vw] font-bold leading-none tracking-[0.18em] text-cold opacity-[0.025]">
          LIVUNIS
        </span>
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-28 text-center">
        <p
          className="font-mono text-[11px] tracking-[0.4em] text-accent"
          style={{ animation: "fadeUp 0.9s ease-out both", animationDelay: "0.15s" }}
        >
          {t.hero.kicker}
        </p>

        <h1
          className="text-glow mt-7 font-display text-5xl font-bold leading-[1.05] tracking-tight text-cold md:text-7xl"
          style={{ animation: "fadeUp 1s ease-out both", animationDelay: "0.3s" }}
        >
          {t.hero.h1a}
          <br />
          {t.hero.h1b}
        </h1>

        <p
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-mist md:text-lg"
          style={{ animation: "fadeUp 1s ease-out both", animationDelay: "0.5s" }}
        >
          {t.hero.sub}
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animation: "fadeUp 1s ease-out both", animationDelay: "0.68s" }}
        >
          <a
            href="#concept"
            className="border border-accent/40 bg-accent/10 px-7 py-3 font-mono text-[11px] tracking-[0.22em] text-cold transition-all hover:border-accent/80 hover:bg-accent/20 hover:shadow-[0_0_28px_-6px_rgba(124,199,232,0.55)]"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href={LINKS.manifesto}
            target="_blank"
            rel="noreferrer"
            className="border border-line px-7 py-3 font-mono text-[11px] tracking-[0.22em] text-mist transition-all hover:border-accent/60 hover:text-cold"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        <p
          className="mt-14 font-mono text-[10px] tracking-[0.3em] text-faint"
          style={{ animation: "fadeUp 1s ease-out both", animationDelay: "0.9s" }}
        >
          {t.hero.scrollHint}
        </p>
      </div>

      {/* corner system readouts */}
      <div
        className="absolute bottom-8 left-6 hidden font-mono text-[10px] leading-6 tracking-[0.18em] text-faint lg:block"
        style={{ animation: "fadeUp 1s ease-out both", animationDelay: "1.1s" }}
      >
        {t.hero.readouts.map((r) => (
          <p key={r.k}>
            {r.k} <span className="text-faint/60">···</span>{" "}
            <span className="text-mist">{r.v}</span>
          </p>
        ))}
      </div>
      <div
        className="absolute bottom-8 right-6 hidden font-mono text-[10px] tracking-[0.2em] text-faint lg:block"
        style={{ animation: "fadeUp 1s ease-out both", animationDelay: "1.2s" }}
      >
        {t.hero.corner.split("\n").map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
}
