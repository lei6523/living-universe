import { useEffect, useRef, useState } from "react";

/**
 * Section index header: mono kicker + a rule that draws itself
 * (scaleX 0→1) when the section scrolls into view, finished by a
 * small terminal dot. Gives each section an "archive opens" feel.
 */
export default function SectionHeader({ kicker }: { kicker: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex items-center gap-5">
      <span
        className={`font-mono text-[11px] tracking-[0.35em] text-accent transition-[opacity,transform] duration-700 ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        {kicker}
      </span>
      <span
        className={`h-px flex-1 origin-left bg-line transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inView ? "scale-x-100" : "scale-x-0"
        }`}
      />
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70 shadow-[0_0_8px_rgba(124,199,232,0.6)] transition-opacity duration-700 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
