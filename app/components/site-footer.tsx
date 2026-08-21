export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="brand-logo-link" href="/" aria-label="Grethiel Joy, home">
        <span className="brand-logo-crop" aria-hidden="true">
          <img src="/grethiel-joy-logo.png" alt="" width="1920" height="640" />
        </span>
      </a>
      <p className="footer-note">Based in Cebu · Working remotely</p>
      <a className="footer-contact" href="/contact">Start a project <span aria-hidden="true">↗</span></a>
    </footer>
  );
}
