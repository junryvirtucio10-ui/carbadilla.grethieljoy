export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* A document navigation matches the production-safe header behavior in Vinext. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="brand-logo-link" href="/" aria-label="Grethiel Joy, home">
          <span className="brand-logo-crop" aria-hidden="true">
            <img src="/optimized/grethiel-joy-logo-white-960.webp" alt="" width="960" height="320" loading="lazy" decoding="async" />
          </span>
        </a>
        <p className="footer-note">Based in Cebu · Working remotely</p>
        <a className="footer-contact" href="/contact">Start a project <span aria-hidden="true">↗</span></a>
      </div>

      <nav className="footer-socials" aria-label="Social media">
        <p>Elsewhere</p>
        <div className="footer-social-links">
          <a href="https://www.linkedin.com/in/grethiel-joy-carbadilla-61768242b/" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M6.5 8.3h-3V21h3V8.3ZM5 3a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 5 3Zm4 5.3h2.9V10h.04a3.2 3.2 0 0 1 2.88-1.58c3.08 0 3.65 2.03 3.65 4.67V21h-3v-6.97c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V21H9V8.3Z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/gre_thang?fbclid=IwY2xjawUv5vFleHRuA2FlbQIxMABwZG9mBWJyaWQRMW1pWFBFbnRhdVowTExuRWdzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeXvBTg8p0SniZS2RvwIprynHsQmYo10ZfUT2NHTJE_hScPKqjoA-Gd0RY9F4_aem_13BmUlxe1ZMsOeA8GmP7HQ" aria-label="Instagram" title="Instagram" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle className="social-icon-dot" cx="17.4" cy="6.7" r="1" />
            </svg>
          </a>
          <a href="https://www.facebook.com/grethieljou.carbadilla" aria-label="Facebook" title="Facebook" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M14.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.25-1.5 1.55-1.5h1.66V3.62a22.5 22.5 0 0 0-2.42-.12c-2.4 0-4.04 1.46-4.04 4.15V9.9H8.24V13h2.71v8h3.25Z" />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
}
