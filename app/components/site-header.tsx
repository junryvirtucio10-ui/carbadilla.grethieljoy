"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 28);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!open) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const links = Array.from(nav.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = [toggle.current, ...links].filter(
        (item): item is HTMLButtonElement | HTMLAnchorElement => Boolean(item),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = oldOverflow;
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header
        className={`signature-header${scrolled ? " is-scrolled" : ""}${open ? " menu-is-open" : ""}`}
        ref={header}
        onPointerMove={(event) => {
          if (event.pointerType === "touch") return;
          const bounds = event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty("--header-x", `${event.clientX - bounds.left}px`);
          event.currentTarget.style.setProperty("--header-y", `${event.clientY - bounds.top}px`);
        }}
        onPointerLeave={() => {
          header.current?.style.setProperty("--header-x", "50%");
          header.current?.style.setProperty("--header-y", "50%");
        }}
      >
        <span className="signature-header-glint" aria-hidden="true" />
        <div className="signature-header-inner">
          {/* A document navigation is intentional: Vinext's beta client router can swallow Link clicks in production. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a className="brand-logo-link" href="/" aria-label="Grethiel Joy, home">
            <span className="brand-logo-crop" aria-hidden="true">
              <picture>
                <source media="(max-width: 760px)" srcSet="/optimized/gj-mobile-icon-192.webp" />
                <img src="/optimized/grethiel-joy-logo-640.webp" alt="" width="640" height="200" decoding="async" />
              </picture>
            </span>
          </a>

          <button className="nav-toggle" ref={toggle} type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="portfolio-navigation" onClick={() => setOpen(!open)}>
            <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
            <i aria-hidden="true"><b /><b /><b /></i>
          </button>

          <nav id="portfolio-navigation" className={`signature-nav${open ? " is-open" : ""}`} aria-label="Portfolio pages" ref={nav}>
            {navigation.map((item, index) => (
              <a href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>
                <span>{item.label}</span><small className="nav-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</small>
              </a>
            ))}
          </nav>

          <a className="signature-project-link" href="/contact">
            <span>Start a project</span>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
      </header>
    </>
  );
}
