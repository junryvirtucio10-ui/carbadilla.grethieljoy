import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { experience } from "../portfolio-data";

export const metadata: Metadata = {
  title: "Experience — Grethiel Joy",
  description: "Grethiel Joy's professional experience in web design, WordPress, graphics, and digital marketing.",
};

export default function ExperiencePage() {
  return (
    <div className="portfolio-shell">
      <SiteHeader />
      <main id="main-content">
        <section className="experience-section" aria-labelledby="experience-title">
          <header className="experience-heading">
            <p className="section-kicker">Experience</p>
            <h1 id="experience-title">Websites, graphics, and digital content—built together.</h1>
          </header>
          <ol className="experience-list">
            {experience.map((item) => (
              <li key={`${item.company}-${item.period}`}>
                <p className="experience-period">{item.period}</p>
                <div><h2>{item.company}</h2><p>{item.role}</p></div>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
