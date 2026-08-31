import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  r: number;
  vx: number;
  vy: number;
  phase: number;
  node: boolean;
};

type Meteor = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
} | null;

const STAR_COUNT = 240;
const LINK_DIST = 130;

/**
 * Fixed viewport-wide backdrop: deep-space star sheet + nebula glows
 * + faint constellation network + the occasional meteor.
 * Sits behind every section (-z-10) so the lower parts of the page
 * keep the "universe is running" atmosphere. Static when
 * prefers-reduced-motion (no drift, no twinkle, no meteors).
 */
export default function AmbientBackdrop() {
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
    let meteor: Meteor = null;
    let nextMeteorAt = 4500;
    let t = 0;
    let last = performance.now();

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const build = () => {
      stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: 0.25 + Math.random() * 0.75,
        r: 0.5 + Math.random() * 1.1,
        vx: (Math.random() - 0.5) * 0.04,
        vy: (Math.random() - 0.5) * 0.032,
        phase: Math.random() * Math.PI * 2,
        node: i % 4 === 0,
      }));
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h);

      // constellation links (faint)
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
              (1 - Math.sqrt(d2) / LINK_DIST) * 0.1 * Math.min(a.z, b.z);
            ctx.strokeStyle = `rgba(124,199,232,${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // stars
      for (const s of stars) {
        const tw = reduced ? 0 : Math.sin(t * 0.018 + s.phase) * 0.09;
        const alpha = Math.min(0.55, Math.max(0.08, 0.14 + s.z * 0.42 + tw));
        ctx.fillStyle = `rgba(205,226,248,${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // meteor
      if (meteor) {
        const m = meteor;
        m.x += m.vx * ((now - last) / 16.7);
        m.y += m.vy * ((now - last) / 16.7);
        m.life -= (now - last) / 16.7;
        if (m.life <= 0) {
          meteor = null;
        } else {
          const alpha = Math.min(1, m.life / 60) * 0.5;
          const tx = m.x - m.vx * 10;
          const ty = m.y - m.vy * 10;
          const grad = ctx.createLinearGradient(m.x, m.y, tx, ty);
          grad.addColorStop(0, `rgba(190,224,248,${alpha.toFixed(3)})`);
          grad.addColorStop(1, "rgba(190,224,248,0)");
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.1;
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(tx, ty);
          ctx.stroke();
        }
      }
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 16.7, 3);
      last = now;
      t += dt;

      for (const s of stars) {
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        if (s.x < -3) s.x = w + 3;
        else if (s.x > w + 3) s.x = -3;
        if (s.y < -3) s.y = h + 3;
        else if (s.y > h + 3) s.y = -3;
      }

      if (!reduced && !meteor && now >= nextMeteorAt) {
        meteor = {
          x: w * 0.1 + Math.random() * w * 0.8,
          y: Math.random() * h * 0.3,
          vx: (2.2 + Math.random() * 1.8) * (Math.random() < 0.5 ? -1 : 1),
          vy: 1.6 + Math.random() * 1.2,
          life: 110,
        };
        nextMeteorAt = now + 9000 + Math.random() * 9000;
      }

      draw(now);
      raf = requestAnimationFrame(tick);
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
      draw(0);
    } else {
      raf = requestAnimationFrame(tick);
    }
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 62% 52% at 16% 10%, rgba(124,199,232,0.07), transparent 62%), radial-gradient(ellipse 50% 42% at 86% 32%, rgba(142,155,240,0.06), transparent 60%), radial-gradient(ellipse 46% 40% at 58% 88%, rgba(224,176,108,0.05), transparent 62%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
