import { useEffect } from "react";

/**
 * Scroll parallax for decorative layers.
 * Any element with [data-parallax="<factor>"] drifts vertically at that
 * speed while the page scrolls (negative = slower, opposite to content).
 * Layout feedback is avoided by measuring via the offsetParent chain
 * (transforms never touch layout positions).
 * No-op when prefers-reduced-motion.
 */
export function useParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const vh = window.innerHeight;
      const sy = window.scrollY;
      document
        .querySelectorAll<HTMLElement>("[data-parallax]")
        .forEach((el) => {
          const f = parseFloat(el.dataset.parallax || "0");
          const parent = el.offsetParent as HTMLElement | null;
          if (!parent || f === 0) return;
          const topDoc = parent.getBoundingClientRect().top + sy;
          const mid = topDoc + el.offsetTop + el.offsetHeight / 2;
          const off = (mid - (sy + vh / 2)) * f;
          el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
        });
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
}
