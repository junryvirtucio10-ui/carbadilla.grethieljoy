import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { skills, tools } from "../portfolio-data";

export const metadata: Metadata = {
  title: "About — Grethiel Joy",
  description: "About Grethiel Joy's approach, skills, tools, and education.",
};

export default function AboutPage() {
  return (
    <div className="portfolio-shell">
      <SiteHeader />
      <main id="main-content" className="inner-page">
        <header className="page-hero page-hero-portrait">
          <div>
            <p className="section-kicker">About</p>
            <h1>I design, build, maintain, and improve.</h1>
            <p>I’m a creative website designer experienced in WordPress, content organisation, responsive user experience, graphics, SEO, and digital marketing support.</p>
          </div>
          <figure><img src="/grethiel.png" alt="Grethiel Joy Carbadilla G." /></figure>
        </header>

        <section className="about-story" aria-labelledby="approach-title">
          <p className="section-kicker">How I work</p>
          <div>
            <h2 id="approach-title">Clear from the first click. Useful after launch.</h2>
            <p>Good websites are not only attractive. They make information easy to find, guide people toward the next step, and remain manageable for the team behind them. I combine design and hands-on maintenance so the work continues to perform after it goes live.</p>
          </div>
        </section>

        <section className="skills-section" aria-labelledby="skills-title">
          <header className="skills-heading">
            <p className="section-kicker">Skills & tools</p>
            <h2 id="skills-title">A practical digital toolkit.</h2>
          </header>
          <div className="skills-layout">
            <ul className="skill-cloud" aria-label="Professional skills">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
            <div className="tool-grid" aria-label="Design and website tools">
              {tools.map((tool, index) => (
                <div key={tool} className="tool-card">
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <p>{tool}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="education-card">
            <p className="section-kicker">Education</p>
            <div><h3>Bachelor of Science in Tourism Management</h3><p>Asian College of Technology IEF · 2021 — 2025</p></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
