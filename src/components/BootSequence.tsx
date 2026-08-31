import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";

/**
 * Boot / initialization overlay.
 * Auto-dismisses after ~3.2s (or instantly on repeat visits /
 * prefers-reduced-motion). Tap anywhere to skip.
 */
export default function BootSequence({ onDone }: { onDone: () => void }) {
  const { t } = useLang();
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let skipped = false;
    if (
      sessionStorage.getItem("livunis-booted") === "1" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      onDone();
      return;
    }

    const t1 = window.setTimeout(() => setLeaving(true), 2700);
    const t2 = window.setTimeout(onDone, 3350);

    const skip = () => {
      if (skipped) return;
      skipped = true;
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      setLeaving(true);
      window.setTimeout(onDone, 500);
    };
    window.addEventListener("pointerdown", skip, { once: true });

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("pointerdown", skip);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-void px-6 transition-opacity duration-700 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* exit scan sweep */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-accent/15 to-transparent ${
          leaving
            ? "animate-[scanBeam_0.9s_ease-in-out_forwards]"
            : "opacity-0"
        }`}
      />
      <div className="w-full max-w-md font-mono text-[12.5px] leading-7">
        {t.boot.lines.map((line, i) => (
          <p
            key={line.t}
            className={line.dim ? "text-faint" : "text-mist"}
            style={{
              animation: "fadeUp 0.45s ease-out both",
              animationDelay: `${i * 0.34}s`,
            }}
          >
            <span className="text-faint">{`[${(i * 0.34).toFixed(2)}s]`}</span>{" "}
            {line.t}
            {line.ok && <span className="text-signal">OK</span>}
          </p>
        ))}
        <p
          className="mt-5 text-faint"
          style={{
            animation: "fadeUp 0.45s ease-out both",
            animationDelay: "2.3s",
          }}
        >
          {t.boot.skip}
        </p>
      </div>
    </div>
  );
}
