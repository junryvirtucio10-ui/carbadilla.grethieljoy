"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  ".home-intro > .section-kicker",
  ".home-intro > div",
  ".home-featured-heading > *",
  ".home-project-card",
  ".home-contact-main > *",
  ".about-story > .section-kicker",
  ".about-story > div",
  ".skills-heading > *",
  ".skills-layout > *",
  ".education-card",
  ".gallery-toolbar",
  ".gallery-card",
  ".career-archive-heading > *",
  ".site-footer > *",
].join(",");

const mediaSelector = ".home-project-card, .gallery-card, .education-card";
const leftSelector = ".home-intro > .section-kicker, .about-story > .section-kicker, .career-archive-heading > .section-kicker";
const rightSelector = ".home-intro > div, .about-story > div";
const sectionSelector = ".scroll-chapter, .site-footer";

export function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) return;

    const prepared = new WeakSet<HTMLElement>();
    const preparedSections = new WeakSet<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-scroll-revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.12,
      },
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-scroll-section-revealed");
          sectionObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -6%",
        threshold: 0.035,
      },
    );

    const prepareSection = (section: HTMLElement) => {
      if (preparedSections.has(section)) return;
      preparedSections.add(section);
      section.classList.add("scroll-section-reveal");

      const bounds = section.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.94 && bounds.bottom > 0) {
        section.classList.add("is-scroll-section-revealed");
      } else {
        sectionObserver.observe(section);
      }
    };

    const prepareElement = (element: HTMLElement) => {
      if (prepared.has(element)) return;
      prepared.add(element);

      const siblings = element.parentElement
        ? Array.from(element.parentElement.children)
        : [];
      const siblingIndex = Math.max(siblings.indexOf(element), 0);

      element.classList.add("scroll-reveal");
      element.style.setProperty("--scroll-reveal-delay", `${Math.min(siblingIndex % 4, 3) * 75}ms`);

      if (element.matches(mediaSelector)) {
        element.classList.add("scroll-reveal--scale");
      } else if (element.matches(leftSelector)) {
        element.classList.add("scroll-reveal--left");
      } else if (element.matches(rightSelector)) {
        element.classList.add("scroll-reveal--right");
      }

      const bounds = element.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.9 && bounds.bottom > 0) {
        element.classList.add("is-scroll-revealed");
      } else {
        observer.observe(element);
      }
    };

    document.querySelectorAll<HTMLElement>(sectionSelector).forEach(prepareSection);
    document.querySelectorAll<HTMLElement>(revealSelector).forEach(prepareElement);

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches(sectionSelector)) prepareSection(node);
          node.querySelectorAll<HTMLElement>(sectionSelector).forEach(prepareSection);
          if (node.matches(revealSelector)) prepareElement(node);
          node.querySelectorAll<HTMLElement>(revealSelector).forEach(prepareElement);
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      sectionObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
