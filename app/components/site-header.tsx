const navigation = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand-logo-link" href="/" aria-label="Grethiel Joy, home">
          <span className="brand-logo-crop" aria-hidden="true">
            <img src="/grethiel-joy-logo.png" alt="" width="1920" height="640" />
          </span>
        </a>
        <nav className="site-nav" aria-label="Portfolio pages">
          {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <p className="header-label">Digital Marketing · WordPress · Design</p>
      </header>
    </>
  );
}
