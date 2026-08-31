import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { useLang } from "../context/LanguageContext";

export default function Concept() {
  const { t } = useLang();

  return (
    <section id="concept" className="relative scroll-mt-24 border-t border-line">
      {/* ambient decoration layer */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          data-parallax="-0.055"
          className="absolute right-2 top-6 select-none font-display text-[13rem] font-bold leading-none tracking-tight text-cold opacity-[0.03] md:text-[17rem]"
        >
          01
        </div>
        <div
          data-parallax="-0.1"
          className="absolute -top-44 right-[6%] h-[30rem] w-[30rem] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,199,232,0.07), transparent 65%)",
          }}
        />
        <div
          data-parallax="0.07"
          className="absolute bottom-10 left-[4%] h-72 w-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(142,155,240,0.05), transparent 65%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeader kicker={t.concept.kicker} />

        <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <Reveal>
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-cold md:text-5xl">
                {t.concept.h2a}
                <br />
                <span className="text-glow text-accent">{t.concept.h2b}</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 text-[15px] leading-relaxed text-mist">
                {t.concept.p1}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-5 text-[15px] leading-relaxed text-mist">
                {t.concept.p2}
              </p>
            </Reveal>

            <Reveal delay={280}>
              <p className="mt-10 font-mono text-[11px] tracking-[0.25em] text-faint">
                {t.concept.motto}
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-4">
            {t.concept.items.map((p, i) => (
              <Reveal key={p.code} delay={i * 110}>
                <div className="group relative border border-line bg-panel/50 px-6 py-5 backdrop-blur-[2px] transition-colors hover:border-accent/50">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg font-semibold tracking-[0.14em] text-cold transition-colors group-hover:text-accent">
                      {p.title}
                    </h3>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
                      {p.code}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
