import type { Metadata } from "next";
import Image from "next/image";
import { HeroAtmosphere } from "../components/hero-atmosphere";
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
          <HeroAtmosphere />
          <div>
            <p className="section-kicker">About</p>
            <h1>I design, build, maintain, and improve.</h1>
            <p>I’m a Digital Marketing Specialist & Web Developer who brings strategy and hands-on creative work together. My experience spans WordPress, SEO, content, social media, responsive websites, and ongoing website care.</p>
          </div>
          <figure>
            <img
              src="/optimized/joy-grethiel-768.webp"
              srcSet="/optimized/joy-grethiel-480.webp 480w, /optimized/joy-grethiel-768.webp 768w, /optimized/joy-grethiel-1023.webp 1023w"
              sizes="(max-width: 760px) calc(100vw - 2.4rem), min(31vw, 496px)"
              width="1023"
              height="1537"
              alt="Grethiel Joy Carbadilla G."
              decoding="async"
              fetchPriority="high"
            />
          </figure>
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
              {tools.map((tool) => (
                <div key={tool.name} className="tool-card">
                  <Image
                    className="tool-card-logo"
                    src={tool.logo}
                    alt=""
                    width={500}
                    height={500}
                    aria-hidden="true"
                  />
                  <p>{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
          <article className="education-card" aria-labelledby="education-title">
            <div className="education-card-meta">
              <p className="section-kicker">Education</p>
              <p className="education-period">2021 — 2025</p>
            </div>
            <div className="education-card-copy">
              <p className="education-type">Bachelor’s degree</p>
              <h3 id="education-title">Bachelor of Science <span>in Tourism Management</span></h3>
              <p className="education-school">Asian College of Technology IEF</p>
              <p className="education-relevance">A foundation in communication, service, planning, and audience-centred experiences—skills I bring to every digital project.</p>
            </div>
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
