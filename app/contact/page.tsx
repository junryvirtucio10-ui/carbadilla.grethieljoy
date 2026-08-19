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
          <p className="section-kicker">Start a project</p>
          <h1 id="contact-title">Let’s make the next digital thing clear, useful, and memorable.</h1>
          <p className="contact-lede">Tell me what you’re building, improving, or maintaining. Email and WhatsApp are the fastest ways to start a conversation.</p>
          <div className="contact-links">
            <a href="mailto:grethieljoyc@gmail.com"><span>Email</span>grethieljoyc@gmail.com<b aria-hidden="true">↗</b></a>
            <a href="https://wa.me/639751837109"><span>WhatsApp</span>+63 975 183 7109<b aria-hidden="true">↗</b></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
