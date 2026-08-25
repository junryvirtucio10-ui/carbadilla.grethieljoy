import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { projects } from "./portfolio-data";

export default function Home() {
  return (
    <div className="portfolio-shell">
      <SiteHeader />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Web design · WordPress · Digital content</p>
            <h1 id="hero-title">Websites made <span>clear and useful.</span></h1>
            <p className="hero-lede">I’m Grethiel Joy, a Cebu-based web designer and WordPress developer. I turn content and ideas into responsive websites people can understand and use.</p>
            <div className="hero-actions">
              <a className="hero-button hero-button-primary" href="/work">View my work <span aria-hidden="true">↗</span></a>
              <a className="hero-button hero-button-secondary" href="/about">About me</a>
            </div>
            <p className="hero-meta">Based in Cebu, Philippines <span aria-hidden="true">·</span> Available for remote projects</p>
          </div>

          <div className="hero-art">
            <div className="hero-work-circle" aria-hidden="true"><img src="/projects/direct-construction.png" alt="" /></div>
            <figure className="resume-portrait">
              <img
                src="/grethiel.png"
                alt="Grethiel Joy Carbadilla G."
                width="1050"
                height="1050"
                decoding="async"
                fetchPriority="high"
              />
            </figure>
            <div className="hero-availability"><span aria-hidden="true" /><p>Available for website design, WordPress, and digital content work.</p></div>
          </div>
        </section>

        <section className="home-intro" aria-labelledby="home-intro-title">
          <p className="section-kicker">Profile</p>
          <div>
            <h2 id="home-intro-title">Websites with structure. Digital design with warmth.</h2>
            <p>My work brings together WordPress, visual design, content, and ongoing website care. Browse each part of the portfolio on its own page, or start with the selected projects below.</p>
            <div className="home-page-links">
              <a href="/about">About my approach <span aria-hidden="true">↗</span></a>
              <a href="/experience">View experience <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="home-featured" aria-labelledby="featured-title">
          <header className="home-featured-heading">
            <div><p className="section-kicker">Selected work</p><h2 id="featured-title">A quick look at recent projects.</h2></div>
            <a className="arrow-link" href="/work">View all projects <span aria-hidden="true">↗</span></a>
          </header>
          <div className="home-project-grid">
            {projects.slice(0, 2).map((project) => (
              <article className="home-project-card" key={project.slug}>
                <a href={`/work#${project.slug}`}>
                  <figure>
                    <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
                    <figcaption>{project.caption}</figcaption>
                  </figure>
                  <p>{project.role}</p>
                  <h3>{project.title}</h3>
                  <span>View project <b aria-hidden="true">↗</b></span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="home-contact-strip" aria-label="Contact invitation">
          <p>Have a website or digital project in mind?</p>
          <a href="/contact">Let’s talk <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
