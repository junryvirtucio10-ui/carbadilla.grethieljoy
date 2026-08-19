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
        <a className="wordmark" href="/" aria-label="Grethiel Joy, home">
          Grethiel Joy<span aria-hidden="true">.</span>
        </a>
        <nav className="site-nav" aria-label="Portfolio pages">
          {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <p className="header-label">WordPress · Design · Digital</p>
      </header>
    </>
  );
}
