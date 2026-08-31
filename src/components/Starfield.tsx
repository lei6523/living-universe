import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number; // depth 0..1 → brightness & parallax
  r: number;
  vx: number;
  vy: number;
  phase: number;
  node: boolean; // part of the constellation network
};

const STAR_COUNT = 180;
const LINK_DIST = 150;

/**
 * Living starfield + data constellation, rendered on canvas.
 * Slow drift, twinkle, near-neighbour constellation links,
 * light pointer parallax. Static when prefers-reduced-motion.
 */
export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let raf = 0;
    let stars: Star[] = [];
    let t = 0;
    let last = performance.now();
    const mouse = { x: 0, y: 0 };

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const build = () => {
      stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: 0.35 + Math.random() * 0.65,
        r: 0.4 + Math.random() * 1.1,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.04,
        phase: Math.random() * Math.PI * 2,
        node: i % 3 === 0,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const px = mouse.x * 16;
      const py = mouse.y * 12;

      // constellation links
      ctx.lineWidth = 0.6;
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i];
        if (!a.node) continue;
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j];
          if (!b.node) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha =
              (1 - Math.sqrt(d2) / LINK_DIST) * 0.13 * Math.min(a.z, b.z);
            ctx.strokeStyle = `rgba(124,199,232,${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x + px * a.z, a.y + py * a.z);
            ctx.lineTo(b.x + px * b.z, b.y + py * b.z);
            ctx.stroke();
          }
        }
      }

      // stars
      for (const s of stars) {
        const tw = reduced ? 0 : Math.sin(t * 0.02 + s.phase) * 0.16;
        const alpha = Math.min(1, Math.max(0.1, s.z * 0.75 + tw));
        ctx.fillStyle = `rgba(212,231,250,${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(s.x + px * s.z, s.y + py * s.z, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 16.7, 3);
      last = now;
      t += dt;
      for (const s of stars) {
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        if (s.x < -4) s.x = w + 4;
        else if (s.x > w + 4) s.x = -4;
        if (s.y < -4) s.y = h + 4;
        else if (s.y > h + 4) s.y = -4;
      }
      draw();
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduced) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    resize();
    build();
    if (reduced) {
      draw(); // single static frame
    } else {
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(tick);
    }
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
