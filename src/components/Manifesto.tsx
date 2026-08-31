import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import CornerFrame from "./CornerFrame";
import { LINKS } from "../lib/links";
import { useLang } from "../context/LanguageContext";

export default function Manifesto() {
  const { t } = useLang();

  const CTAS = [
    { label: t.manifesto.cta1, href: LINKS.manifesto, primary: true },
    { label: t.manifesto.cta2, href: LINKS.overview, primary: false },
    { label: t.manifesto.cta3, href: LINKS.repo, primary: false },
  ];

  return (
    <section id="manifesto" className="relative scroll-mt-24 border-t border-line">
      {/* ambient decoration layer */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          data-parallax="-0.055"
          className="absolute right-2 top-6 select-none font-display text-[13rem] font-bold leading-none tracking-tight text-cold opacity-[0.03] md:text-[17rem]"
        >
          04
        </div>
        <div
          data-parallax="-0.08"
          className="absolute left-1/2 top-[38%] h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,199,232,0.05), transparent 62%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-36">
        <SectionHeader kicker={t.manifesto.kicker} />

        <Reveal delay={120}>
          <div className="relative mt-14 text-center">
            {/* breathing halo behind the oath */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[42rem] max-w-full"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(124,199,232,0.09), transparent 65%)",
                animation: "pulseGlow 7s ease-in-out infinite",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="font-mono text-[10px] tracking-[0.35em] text-gold">
                {t.manifesto.seal}
              </p>
              <h2 className="text-glow mx-auto mt-8 max-w-3xl font-display text-3xl font-bold leading-snug tracking-tight text-cold md:text-[44px] md:leading-[1.2]">
                {t.manifesto.q1}
                <br />
                {t.manifesto.q2}
              </h2>
              <p className="mt-6 font-mono text-[11px] tracking-[0.2em] text-faint">
                {t.manifesto.sub}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative mx-auto mt-16 max-w-3xl border border-line bg-panel/50 px-8 py-10 text-center backdrop-blur-[2px]">
            <CornerFrame />
            <p className="text-lg leading-relaxed text-mist">
              {t.manifesto.p}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {CTAS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    c.primary
                      ? "border border-accent/40 bg-accent/10 px-6 py-3 font-mono text-[11px] tracking-[0.22em] text-cold transition-all hover:border-accent/80 hover:bg-accent/20 hover:shadow-[0_0_28px_-6px_rgba(124,199,232,0.55)]"
                      : "border border-line px-6 py-3 font-mono text-[11px] tracking-[0.22em] text-mist transition-all hover:border-accent/60 hover:text-cold"
                  }
                >
                  {c.label} ↗
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-16 text-center font-mono text-[11px] tracking-[0.3em] text-faint">
            {t.manifesto.motto}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
