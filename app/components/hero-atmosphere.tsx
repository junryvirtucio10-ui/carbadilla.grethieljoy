"use client";

import { useEffect, useRef } from "react";

export function HeroAtmosphere() {
  const background = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const surface = background.current;
    const hero = surface?.parentElement;
    if (!surface || !hero) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (preference.matches || event.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = hero.getBoundingClientRect();
        surface.style.setProperty("--pointer-x", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 55}px`);
        surface.style.setProperty("--pointer-y", `${((event.clientY - bounds.top) / bounds.height - 0.5) * 40}px`);
      });
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      surface.style.setProperty("--pointer-x", "0px");
      surface.style.setProperty("--pointer-y", "0px");
    };
    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", reset);
    preference.addEventListener("change", reset);
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", reset);
      preference.removeEventListener("change", reset);
    };
  }, []);

  return (
    <div className="hero-atmosphere" ref={background} aria-hidden="true">
      <div className="atmosphere-light" />
      <div className="atmosphere-ribbons"><i /><i /><i /></div>
    </div>
  );
}
