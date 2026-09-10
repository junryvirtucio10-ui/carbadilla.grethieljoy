import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Contact — Grethiel Joy",
  description: "Contact Grethiel Joy about WordPress, web design, graphics, or digital content work.",
};

export default function ContactPage() {
  return (
    <div className="portfolio-shell">
      <SiteHeader />
      <main id="main-content">
        <section className="contact-section contact-page" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="section-kicker">Start a project</p>
            <h1 id="contact-title">Let’s make the next digital thing <em>clear, useful, and memorable.</em></h1>
            <p className="contact-lede">Tell me what you’re building, improving, or maintaining. Email and WhatsApp are the fastest ways to start a conversation.</p>
            <p className="contact-availability"><span aria-hidden="true" />Available for remote projects</p>
          </div>

          <aside className="contact-panel" aria-labelledby="contact-panel-title">
            <header>
              <p>Get in touch</p>
              <h2 id="contact-panel-title">Choose the easiest way to reach me.</h2>
            </header>
            <div className="contact-links">
              <a href="mailto:grethieljoyc@gmail.com">
                <span className="contact-link-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M3.5 6.5h17v11h-17z" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                <span className="contact-link-copy">
                  <span>Email</span>
                  <strong>grethieljoyc@gmail.com</strong>
                  <small>Best for project details and files</small>
                </span>
                <b aria-hidden="true">↗</b>
              </a>
              <a href="https://wa.me/639751837109">
                <span className="contact-link-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M20 11.5a8 8 0 0 1-11.7 7.08L4 20l1.42-4.3A8 8 0 1 1 20 11.5Z" />
                    <path d="M9 8.5c.4 3 2 4.6 5 5" />
                    <path d="m9 8.5 1.2-.5M14 13.5l.5-1.2" />
                  </svg>
                </span>
                <span className="contact-link-copy">
                  <span>WhatsApp</span>
                  <strong>+63 975 183 1709</strong>
                  <small>Best for a quick conversation</small>
                </span>
                <b aria-hidden="true">↗</b>
              </a>
            </div>
            <p className="contact-panel-note">Include a short description, your timeline, and the kind of support you need.</p>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
