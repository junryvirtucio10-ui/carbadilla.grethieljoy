import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { projects } from "./portfolio-data";
import { HeroAtmosphere } from "./components/hero-atmosphere";

export default function Home() {
  return (
    <div className="portfolio-shell">
      <SiteHeader />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <HeroAtmosphere />
          <div className="hero-copy">
            <p className="eyebrow">Digital Marketing & Web Development</p>
            <h1 id="hero-title">Websites made <span>clear and useful.</span></h1>
            <p className="hero-lede">I’m Grethiel Joy, a Digital Marketing Specialist & Web Developer based in Cebu. I bring together marketing strategy, compelling content, and responsive websites to help businesses connect with the right people and turn interest into action.</p>
            <div className="hero-actions">
              <a className="hero-button hero-button-primary" href="/work">View my work <span aria-hidden="true">↗</span></a>
              <a className="hero-button hero-button-secondary" href="/about">About me</a>
            </div>
            <p className="hero-meta">Based in Cebu, Philippines <span aria-hidden="true">·</span> Available for remote projects</p>
          </div>

          <div className="hero-art">
            <figure className="resume-portrait">
              <img
                src="/grethiel-images/grethiel-joy.png"
                alt="Grethiel Joy Carbadilla G."
                width="1024"
                height="1536"
                decoding="async"
                fetchPriority="high"
              />
            </figure>
          </div>
        </section>

        <section className="home-intro" aria-labelledby="home-intro-title">
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
                    <img src={project.thumbnail ?? project.image} alt={project.alt} loading="lazy" decoding="async" />
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
          <div className="home-contact-main">
            <div className="home-contact-copy">
              <p>Have a website or digital project in mind?</p>
              <h2>Let’s make the next idea <em>clear, useful, and ready to work.</em></h2>
            </div>
            <a href="/contact"><span>Let’s talk</span><b aria-hidden="true">↗</b></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
