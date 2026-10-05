"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type CareerTimelineItem = {
  company: string;
  period: string;
  role: string;
};

type CareerTimelineProps = {
  items: readonly CareerTimelineItem[];
};

type TimelineStyle = CSSProperties & {
  "--career-progress": string;
};

export function CareerTimeline({ items }: CareerTimelineProps) {
  const listRef = useRef<HTMLOListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let animationFrame = 0;
    let disposed = false;

    const updateActiveStep = () => {
      animationFrame = 0;
      const steps = Array.from(list.querySelectorAll<HTMLElement>(".career-step"));
      if (steps.length === 0) return;

      const readingLine = window.innerHeight * 0.5;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      steps.forEach((step, index) => {
        const bounds = step.getBoundingClientRect();
        const distance = Math.abs(bounds.top + bounds.height / 2 - readingLine);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveIndex((currentIndex) =>
        currentIndex === nearestIndex ? currentIndex : nearestIndex,
      );
    };

    const requestUpdate = () => {
      if (disposed || animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateActiveStep);
    };

    updateActiveStep();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    document.fonts?.ready.then(requestUpdate);

    return () => {
      disposed = true;
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [items.length]);

  const progress = items.length > 0 ? ((activeIndex + 1) / items.length) * 100 : 0;
  const timelineStyle = { "--career-progress": `${progress}%` } as TimelineStyle;

  return (
    <section
      id="career-archive"
      className="career-archive career-process scroll-chapter"
      aria-labelledby="career-archive-title"
    >
      <div className="career-process-layout">
        <header className="career-archive-heading career-process-sticky">
          <p className="section-kicker">Career timeline</p>
          <h2 id="career-archive-title">Roles that shaped the work.</h2>
          <p>
            Seven roles across WordPress development, website design, graphics,
            content, social media, and digital marketing.
          </p>
        </header>

        <div className="career-process-list" style={timelineStyle}>
          <div className="career-process-track" aria-hidden="true">
            <span />
          </div>

          <ol
            id="experience-timeline"
            ref={listRef}
            className="experience-list career-ledger"
            aria-label="Professional experience"
          >
            {items.map((item, index) => {
              const isOngoing = item.period.includes("Present");
              const isActive = activeIndex === index;

              return (
                <li
                  className={`career-step${isOngoing ? " career-step--ongoing" : ""}${isActive ? " is-active" : ""}`}
                  aria-current={isActive ? "step" : undefined}
                  key={`${item.company}-${item.period}`}
                >
                  <article className="career-step-body">
                    <span className="career-step-number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="career-step-copy">
                      <div className="career-step-meta">
                        <time>{item.period}</time>
                        {isOngoing ? <span>Ongoing</span> : null}
                      </div>
                      <h3>{item.company}</h3>
                      <p>{item.role}</p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
