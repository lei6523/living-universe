import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { useLang } from "../context/LanguageContext";

export default function Archive() {
  const { t } = useLang();

  return (
    <section id="memory" className="relative scroll-mt-24 border-t border-line">
      {/* ambient decoration layer */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          data-parallax="-0.055"
          className="absolute right-2 top-6 select-none font-display text-[13rem] font-bold leading-none tracking-tight text-cold opacity-[0.03] md:text-[17rem]"
        >
          03
        </div>
        <div
          data-parallax="-0.09"
          className="absolute left-[6%] top-40 h-[26rem] w-[26rem] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(224,176,108,0.055), transparent 65%)",
          }}
        />
        <div
          data-parallax="0.06"
          className="absolute bottom-16 right-[12%] h-80 w-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,199,232,0.05), transparent 65%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeader kicker={t.archive.kicker} />

        <div className="mt-12 grid gap-14 md:grid-cols-5 md:gap-16">
          {/* sticky statement */}
          <div className="md:col-span-2">
            <div className="md:sticky md:top-28">
              <Reveal>
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-cold md:text-4xl">
                  {t.archive.h2a}
                  <br />
                  <span className="text-glow text-accent">
                    {t.archive.h2b}
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-7 text-[15px] leading-relaxed text-mist">
                  {t.archive.p}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-8 border-l-2 border-gold/60 pl-5">
                  <p className="text-[15px] italic leading-relaxed text-cold/90">
                    {t.archive.quote.split("\n").map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <p className="mt-3 font-mono text-[10px] tracking-[0.25em] text-faint">
                    {t.archive.quoteSource}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* memory timeline */}
          <div className="relative md:col-span-3">
            {/* beam line */}
            <div className="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-accent/30 via-line to-transparent" />
            <span
              className="pointer-events-none absolute left-[5px] h-12 w-px -translate-x-1/2 bg-accent/60 blur-[2px]"
              style={{ animation: "beamDown 16s linear infinite" }}
            />
            <div className="flex flex-col gap-10">
              {t.archive.records.map((r, i) => (
                <Reveal key={r.id} delay={i * 90}>
                  <div className="relative pl-10">
                    <span className="absolute left-[1px] top-2 h-[9px] w-[9px] rounded-full border border-accent/70 bg-void shadow-[0_0_10px_rgba(124,199,232,0.5)]" />
                    <p className="font-mono text-[10px] tracking-[0.28em] text-faint">
                      {r.id} · {r.tag}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-cold">
                      {r.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-mist">
                      {r.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
