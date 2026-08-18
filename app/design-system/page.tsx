import type { Metadata } from "next";
import "./design-system.css";

export const metadata: Metadata = {
  title: "Portfolio Design System — Grethiel Joy",
  description:
    "The visual language for Grethiel Joy's WordPress, web design, and digital creative portfolio.",
};

const palette = [
  {
    name: "Cocoa",
    hex: "#412D21",
    className: "tone-cocoa",
    use: "Primary brand surfaces",
  },
  {
    name: "Deep brown",
    hex: "#3D1700",
    className: "tone-deep",
    use: "Borders and deep contrast",
  },
  {
    name: "Golden thread",
    hex: "#FFC700",
    className: "tone-gold",
    use: "Actions and signatures",
  },
  {
    name: "Soft gold",
    hex: "#FFDE59",
    className: "tone-soft-gold",
    use: "Large highlights only",
  },
  {
    name: "Studio white",
    hex: "#F8F8F8",
    className: "tone-studio",
    use: "Main canvas and cards",
  },
];

const typeScale = [
  { token: "Display", size: "clamp(4rem, 8vw, 9rem)", use: "Hero thesis" },
  { token: "H1", size: "64px / 4rem", use: "Page title" },
  { token: "H2", size: "48px / 3rem", use: "Section title" },
  { token: "H3", size: "28px / 1.75rem", use: "Card title" },
  { token: "Lead", size: "20px / 1.25rem", use: "Opening copy" },
  { token: "Body", size: "16px / 1rem", use: "Reading text" },
  { token: "Supporting", size: "16px / 1rem", use: "Supporting text" },
  { token: "Utility", size: "16px / 1rem", use: "Labels and data" },
];

const spacing = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];

export default function DesignSystemPage() {
  return (
    <main className="system-page">
      <a className="system-skip-link" href="#system-content">
        Skip to design system
      </a>

      <header className="system-bar">
        <a href="/" aria-label="Back to Grethiel Joy's portfolio">
          GJ<span aria-hidden="true">.</span>
        </a>
        <nav aria-label="Design system sections">
          <a href="#color">Colour</a>
          <a href="#type">Type</a>
          <a href="#components">Components</a>
          <a href="#voice">Voice</a>
        </nav>
        <a className="system-back-link" href="/">
          View portfolio <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="system-hero" id="system-content">
        <div className="system-hero-copy">
          <p className="system-eyebrow">Grethiel Joy Carbadilla G.</p>
          <h1>
            Built in cocoa.
            <span>Signed in gold.</span>
          </h1>
          <p className="system-lede">
            A warm, capable visual language for a creative who designs,
            builds, and keeps digital work moving.
          </p>
        </div>

        <aside className="system-signature" aria-label="Brand signature example">
          <span className="signature-index">Signature / 01</span>
          <strong>GJ</strong>
          <p>Websites with structure. Design with warmth.</p>
        </aside>
      </section>

      <section className="system-principles" aria-labelledby="principles-title">
        <div>
          <p className="system-section-label">The brief</p>
          <h2 id="principles-title">Warm enough to welcome. Structured enough to trust.</h2>
        </div>
        <dl>
          <div>
            <dt>Audience</dt>
            <dd>Small-business clients, creative teams, and hiring managers.</dd>
          </div>
          <div>
            <dt>Single job</dt>
            <dd>Make Grethiel’s range feel focused and make starting a conversation easy.</dd>
          </div>
          <div>
            <dt>Character</dt>
            <dd>Capable, warm, hands-on, optimistic, and precise.</dd>
          </div>
        </dl>
      </section>

      <section
        className="palette-preview system-section"
        id="color"
        aria-labelledby="palette-title"
      >
        <div>
          <p className="system-section-label">01 / Colour</p>
          <h2 id="palette-title">The resume palette, made digital.</h2>
          <p className="system-section-intro">
            Cocoa carries the brand. Gold marks action and authorship. Studio
            white gives the work room to breathe.
          </p>
        </div>
        <ul>
          {palette.map((color) => (
            <li className={color.className} key={color.hex}>
              <span aria-hidden="true" />
              <strong>{color.name}</strong>
              <code>{color.hex}</code>
              <p>{color.use}</p>
            </li>
          ))}
        </ul>

        <div className="contrast-rules" aria-label="Accessible colour pairings">
          <article className="contrast-dark">
            <span>Approved / Dark</span>
            <strong>White or gold on cocoa</strong>
            <p>Use for navigation, calls to action, and featured sections.</p>
          </article>
          <article className="contrast-light">
            <span>Approved / Light</span>
            <strong>Deep brown on studio white</strong>
            <p>Use for body text, long-form case studies, and forms.</p>
          </article>
          <article className="contrast-warning">
            <span>Avoid</span>
            <strong>Small gold text on white</strong>
            <p>Gold is a marker, not a body-text colour on light surfaces.</p>
          </article>
        </div>
      </section>

      <section className="type-section system-section" id="type" aria-labelledby="type-title">
        <header className="system-section-heading">
          <p className="system-section-label">02 / Typography</p>
          <h2 id="type-title">Direct at first glance. Human when you stay.</h2>
          <p>
            A bold, resume-inspired display face creates recognition. A softer
            humanist sans keeps project stories approachable. Monospace labels
            give tools and project details a practical rhythm.
          </p>
        </header>

        <div className="type-specimens">
          <article className="display-specimen">
            <span>Display / Arial Black</span>
            <p>CREATE.<br />BUILD.<br /><b>IMPROVE.</b></p>
          </article>
          <article className="body-specimen">
            <span>Body / Trebuchet MS</span>
            <h3>Good digital work should feel clear from the first click.</h3>
            <p>
              Use the body face for summaries, case-study narratives, service
              explanations, and contact details. Keep paragraphs under 70
              characters per line and use a relaxed 1.65 line height.
            </p>
          </article>
          <article className="utility-specimen">
            <span>Utility / Consolas</span>
            <p>WordPress / Elementor / Responsive</p>
            <code>PROJECT_TYPE: WEBSITE_DESIGN</code>
          </article>
        </div>

        <div className="type-scale" aria-label="Typography scale">
          {typeScale.map((item) => (
            <div key={item.token}>
              <strong>{item.token}</strong>
              <code>{item.size}</code>
              <span>{item.use}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="layout-section system-section" aria-labelledby="layout-title">
        <header className="system-section-heading compact-heading">
          <p className="system-section-label">03 / Layout & space</p>
          <h2 id="layout-title">A workbench, not a showroom.</h2>
          <p>
            A 12-column frame supports wide project stories and asymmetrical
            details. The 4-pixel spacing base keeps every gap intentional.
          </p>
        </header>

        <div className="layout-demo">
          <div className="grid-demo" aria-label="Twelve-column layout grid">
            {Array.from({ length: 12 }, (_, index) => (
              <span key={index}>{String(index + 1).padStart(2, "0")}</span>
            ))}
          </div>
          <dl className="layout-facts">
            <div><dt>Maximum width</dt><dd>1280px</dd></div>
            <div><dt>Desktop gutter</dt><dd>32–64px</dd></div>
            <div><dt>Mobile gutter</dt><dd>20px</dd></div>
            <div><dt>Reading width</dt><dd>65–70ch</dd></div>
          </dl>
        </div>

        <div className="spacing-scale" aria-label="Spacing scale">
          {spacing.map((value) => (
            <div key={value}>
              <span style={{ width: `${Math.min(value, 96)}px` }} aria-hidden="true" />
              <code>{value}px</code>
            </div>
          ))}
        </div>
      </section>

      <section
        className="component-section system-section"
        id="components"
        aria-labelledby="components-title"
      >
        <header className="system-section-heading">
          <p className="system-section-label">04 / Components</p>
          <h2 id="components-title">A small kit with a clear point of view.</h2>
          <p>
            Components are graphic but disciplined. The offset gold frame is
            the signature move, reserved for featured work and major calls to action.
          </p>
        </header>

        <div className="component-grid">
          <article className="component-panel button-panel">
            <p className="component-label">Actions</p>
            <div>
              <a className="system-button system-button-primary" href="#contact-example">
                Start a project <span aria-hidden="true">↗</span>
              </a>
              <a className="system-button system-button-secondary" href="#project-example">
                View the work
              </a>
              <a className="system-text-link" href="#type">
                Read the story <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <article className="component-panel tag-panel">
            <p className="component-label">Tags & status</p>
            <div className="system-tags">
              <span>WordPress</span>
              <span>Elementor</span>
              <span>Responsive</span>
              <span className="tag-dark">Available for work</span>
            </div>
          </article>

          <article className="project-card-demo" id="project-example">
            <div className="project-card-art" aria-hidden="true">
              <span>Selected work</span>
              <strong>01</strong>
            </div>
            <div className="project-card-copy">
              <p>Website design · WordPress</p>
              <h3>Local service website</h3>
              <span>A clearer path from first visit to enquiry.</span>
              <a href="#project-example">Read case study <b aria-hidden="true">↗</b></a>
            </div>
          </article>

          <article className="component-panel form-panel" id="contact-example">
            <p className="component-label">Contact field</p>
            <label htmlFor="example-email">Email address</label>
            <div>
              <input id="example-email" type="email" placeholder="you@example.com" />
              <button type="button">Continue <span aria-hidden="true">→</span></button>
            </div>
            <small>Use sentence case and say what happens next.</small>
          </article>
        </div>
      </section>

      <section className="voice-section system-section" id="voice" aria-labelledby="voice-title">
        <header className="system-section-heading compact-heading">
          <p className="system-section-label">05 / Voice & behaviour</p>
          <h2 id="voice-title">Clear. Warm. Capable.</h2>
          <p>
            Write like a trusted collaborator: specific about the work,
            generous with context, and confident without exaggeration.
          </p>
        </header>

        <div className="voice-grid">
          <article>
            <span>Say</span>
            <p>“I designed and maintained responsive WordPress pages for a local service business.”</p>
          </article>
          <article>
            <span>Avoid</span>
            <p>“I deliver cutting-edge, world-class digital solutions that elevate brands.”</p>
          </article>
          <article>
            <span>Motion</span>
            <p>Use one short reveal per section and a small directional nudge on links. Respect reduced-motion settings.</p>
          </article>
          <article>
            <span>Accessibility</span>
            <p>Keep visible focus states, 44px touch targets, semantic headings, descriptive links, and body text at 16px or larger.</p>
          </article>
        </div>
      </section>

      <footer className="system-footer">
        <div>
          <p className="system-section-label">Grethiel Joy / Portfolio system</p>
          <h2>Built in cocoa.<br /><span>Signed in gold.</span></h2>
        </div>
        <p>Version 1.1 · August 2026</p>
        <a href="/">Return to portfolio <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
}
