import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { getProjectThumbnail, projects } from "./portfolio-data";
import { HeroAtmosphere } from "./components/hero-atmosphere";
import { ScrollPrompt } from "./components/scroll-prompt";

export default function Home() {
  return (
    <div className="portfolio-shell">
      <SiteHeader />
      <main id="main-content" className="scroll-page">
        <section id="introduction" className="hero scroll-chapter" aria-labelledby="hero-title">
          <HeroAtmosphere />
          <div className="hero-copy">
            <p className="eyebrow">Digital Marketing & Web Development</p>
            <h1 id="hero-title">
              <span className="hero-title-line">Websites made</span>
              <em className="hero-title-accent">clear and useful.</em>
            </h1>
            <p className="hero-lede">I’m Grethiel Joy, a Digital Marketing Specialist & Web Developer based in Cebu. I bring together marketing strategy, compelling content, and responsive websites to help businesses connect with the right people and turn interest into action.</p>
            <div className="hero-actions">
              <a className="hero-button hero-button-primary" href="/work">
                <span className="hero-button-label">View my work</span>
                <span className="hero-button-icon" aria-hidden="true">↗</span>
              </a>
              <a className="hero-button hero-button-secondary" href="/about">
                <span className="hero-button-label">About me</span>
                <span className="hero-button-icon" aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="hero-meta">Based in Cebu, Philippines <span aria-hidden="true">·</span> Available for remote projects</p>
            <ScrollPrompt href="#profile" label="Continue to my profile" />
          </div>

          <div className="hero-art">
            <figure className="resume-portrait">
              <img
                src="/optimized/joy-grethiel-768.webp"
                srcSet="/optimized/joy-grethiel-480.webp 480w, /optimized/joy-grethiel-768.webp 768w, /optimized/joy-grethiel-1023.webp 1023w"
                sizes="(max-width: 650px) calc(100vw - 2rem), (max-width: 1100px) min(78vw, 560px), min(41vw, 590px)"
                alt="Grethiel Joy Carbadilla G."
                width="1023"
                height="1537"
                decoding="async"
                fetchPriority="high"
              />
            </figure>
          </div>
        </section>

        <section id="profile" className="home-intro scroll-chapter" aria-labelledby="home-intro-title">
          <p className="section-kicker">Profile</p>
          <div>
            <h2 id="home-intro-title">Marketing with purpose. Websites that work.</h2>
            <p>Digital marketing and web development are at the heart of my work. From WordPress websites and conversion-focused content to social media creative and ongoing website care, I help brands build a connected digital presence.</p>
            <div className="home-page-links">
              <a href="/about">About my approach <span aria-hidden="true">↗</span></a>
              <a href="/experience">View experience <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section id="selected-work" className="home-featured scroll-chapter" aria-labelledby="featured-title">
          <header className="home-featured-heading">
            <div><p className="section-kicker">Selected work</p><h2 id="featured-title">A quick look at recent projects.</h2></div>
            <a className="arrow-link" href="/work">View all projects <span aria-hidden="true">↗</span></a>
          </header>
          <div className="home-project-grid">
            {projects.slice(0, 2).map((project) => {
              const thumbnail = getProjectThumbnail(project);
              return <article className="home-project-card" key={project.slug}>
                <a href={`/work#${project.slug}`}>
                  <figure>
                    <img src={thumbnail.src} srcSet={thumbnail.srcSet} sizes="(max-width: 780px) calc(100vw - 2.4rem), 42vw" alt={project.alt} width="800" height="600" loading="lazy" decoding="async" />
                    <figcaption>{project.caption}</figcaption>
                  </figure>
                  <p>{project.role}</p>
                  <h3>{project.title}</h3>
                  <span>View project <b aria-hidden="true">↗</b></span>
                </a>
              </article>;
            })}
          </div>
        </section>

        <section id="contact-invitation" className="home-contact-strip scroll-chapter" aria-label="Contact invitation">
          <div className="home-contact-main">
            <div className="home-contact-copy">
              <p>Have a website or digital project in mind?</p>
              <h2>Let’s make it <em>clear, useful, and ready to work.</em></h2>
            </div>
            <a href="/contact"><span>Start a project</span><b aria-hidden="true">↗</b></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
