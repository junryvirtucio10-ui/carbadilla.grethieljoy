"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollProgress() {
  const pathname = usePathname();
  const progress = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const indicator = progress.current;
    if (!indicator) return;

    let frame = 0;
    const update = () => {
      const scrollable = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        0,
      );
      const amount = scrollable === 0
        ? 0
        : Math.max(0, Math.min(window.scrollY / scrollable, 1));
      indicator.style.transform = `scaleX(${amount})`;
    };
    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("load", requestUpdate);
    void document.fonts?.ready.then(requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("load", requestUpdate);
    };
  }, [pathname]);

  return (
    <div className="page-scroll-progress" aria-hidden="true">
      <span ref={progress} />
    </div>
  );
}
