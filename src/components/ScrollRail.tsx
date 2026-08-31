import { useEffect, useState } from "react";

const STOPS = ["top", "concept", "structure", "memory", "manifesto"];
const LABELS = ["00", "01", "02", "03", "04"];

/**
 * Right-hand system progress rail: a charging line + section index
 * (00→04) that lights up as you travel through the archive.
 */
export default function ScrollRail() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const vh = window.innerHeight;
      const sy = window.scrollY;
      const max = document.documentElement.scrollHeight - vh;
      setProgress(max > 0 ? sy / max : 0);
      let idx = 0;
      for (let i = 0; i < STOPS.length; i++) {
        const el = document.getElementById(STOPS[i]);
        if (el && el.getBoundingClientRect().top <= vh * 0.45) idx = i;
      }
      setActive(idx);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-5 lg:flex"
      aria-hidden="true"
    >
      <div className="relative h-44 w-px overflow-hidden bg-line">
        <span
          className="absolute inset-x-0 top-0 bg-accent/70 shadow-[0_0_8px_rgba(124,199,232,0.7)]"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
      <div className="flex flex-col items-center gap-3.5">
        {LABELS.map((l, i) => (
          <span
            key={l}
            className={`font-mono text-[9px] tracking-[0.2em] transition-colors duration-500 ${
              i === active ? "text-accent" : "text-faint/60"
            }`}
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
