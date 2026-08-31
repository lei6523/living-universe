import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import CornerFrame from "./CornerFrame";
import { useLang } from "../context/LanguageContext";

const CX = 420;
const CY = 296;
const R = 184;
const posOf = (i: number) => {
  const ang = (Math.PI / 3) * i - Math.PI / 2;
  return { x: CX + R * Math.cos(ang), y: CY + R * Math.sin(ang) };
};

export default function SystemStructure() {
  const { t } = useLang();
  const [sel, setSel] = useState<number | null>(null);
  const nodes = t.structure.nodes;
  const POS = nodes.map((_, i) => posOf(i));
  const current = nodes[sel ?? 0];

  return (
    <section id="structure" className="relative scroll-mt-24 border-t border-line">
      {/* ambient decoration layer */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          data-parallax="-0.055"
          className="absolute right-2 top-6 select-none font-display text-[13rem] font-bold leading-none tracking-tight text-cold opacity-[0.03] md:text-[17rem]"
        >
          02
        </div>
        <div
          data-parallax="-0.09"
          className="absolute left-1/2 top-[38%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,199,232,0.06), transparent 62%)",
          }}
        />
        {/* slowly rotating dashed orbit behind the node network */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="h-[430px] w-[430px] rounded-full border border-dashed border-accent/15 md:h-[520px] md:w-[520px]"
            style={{ animation: "spinSlow 90s linear infinite" }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeader kicker={t.structure.kicker} />

        <Reveal delay={100}>
          <h2 className="mt-12 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-cold md:text-5xl">
            {t.structure.h2a}
            <br />
            <span className="text-glow text-accent">{t.structure.h2b}</span>
          </h2>
        </Reveal>

        {/* network — desktop */}
        <Reveal delay={180}>
          <div className="mt-12 hidden md:block">
            <svg
              viewBox="0 0 840 592"
              className="w-full"
              role="img"
              aria-label={t.structure.aria}
            >
              {/* decorative orbit */}
              <circle
                cx={CX}
                cy={CY}
                r={126}
                fill="none"
                stroke="rgba(150,195,240,0.07)"
                strokeDasharray="2 7"
              />

              {/* links */}
              {POS.map((p, i) => (
                <line
                  key={nodes[i].code}
                  x1={CX}
                  y1={CY}
                  x2={p.x}
                  y2={p.y}
                  stroke={
                    sel === i
                      ? "rgba(124,199,232,0.75)"
                      : "rgba(150,195,240,0.16)"
                  }
                  strokeWidth={sel === i ? 1.2 : 0.8}
                  style={{ transition: "stroke 250ms, stroke-width 250ms" }}
                />
              ))}

              {/* nodes */}
              {POS.map((p, i) => (
                <g
                  key={nodes[i].code}
                  onMouseEnter={() => setSel(i)}
                  onMouseLeave={() => setSel(null)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={34}
                    fill="#0b1220"
                    stroke={
                      sel === i
                        ? "rgba(124,199,232,0.8)"
                        : "rgba(150,195,240,0.2)"
                    }
                    style={{ transition: "stroke 250ms" }}
                  />
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={sel === i ? 5 : 2.5}
                    fill="#7cc7e8"
                    style={{ transition: "r 250ms" }}
                  />
                  <text
                    x={p.x}
                    y={p.y - 47}
                    textAnchor="middle"
                    fontSize="10"
                    letterSpacing="2"
                    fill="#5e738f"
                    fontFamily="IBM Plex Mono, monospace"
                  >
                    {nodes[i].code}
                  </text>
                  <text
                    x={p.x}
                    y={p.y + 55}
                    textAnchor="middle"
                    fontSize="12"
                    letterSpacing="3"
                    fill={sel === i ? "#7cc7e8" : "#a3b6cc"}
                    fontFamily="IBM Plex Mono, monospace"
                  >
                    {nodes[i].name}
                  </text>
                </g>
              ))}

              {/* core */}
              <circle
                cx={CX}
                cy={CY}
                r={62}
                fill="#0b1220"
                stroke="rgba(150,195,240,0.24)"
              />
              <circle
                cx={CX}
                cy={CY}
                r={50}
                fill="none"
                stroke="rgba(124,199,232,0.22)"
                strokeDasharray="3 6"
              />
              <text
                x={CX}
                y={CY - 2}
                textAnchor="middle"
                fontSize="14"
                letterSpacing="4"
                fill="#e7eef7"
                fontWeight="700"
                fontFamily="Space Grotesk, sans-serif"
              >
                LIVUNIS
              </text>
              <text
                x={CX}
                y={CY + 17}
                textAnchor="middle"
                fontSize="9"
                letterSpacing="3"
                fill="#5e738f"
                fontFamily="IBM Plex Mono, monospace"
              >
                {t.structure.coreLabel}
              </text>
            </svg>

            {/* inspection panel */}
            <div className="relative mt-10 border border-line bg-panel/50 px-6 py-6 backdrop-blur-[2px] md:min-h-[118px]">
              <CornerFrame />
              <p className="font-mono text-[11px] tracking-[0.3em] text-accent">
                {current.code} · {current.name}
              </p>
              <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-mist">
                {current.desc}
              </p>
              <p className="mt-4 font-mono text-[10px] tracking-[0.25em] text-faint">
                {t.structure.panelHint}
              </p>
            </div>
          </div>
        </Reveal>

        {/* network — mobile fallback */}
        <div className="mt-10 flex flex-col gap-4 md:hidden">
          {nodes.map((n, i) => (
            <Reveal key={n.code} delay={i * 70}>
              <div className="border border-line bg-panel/50 px-6 py-5 backdrop-blur-[2px]">
                <p className="font-mono text-[10px] tracking-[0.28em] text-faint">
                  {n.code}
                </p>
                <h3 className="mt-1 font-mono text-sm tracking-[0.25em] text-accent">
                  {n.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {n.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
