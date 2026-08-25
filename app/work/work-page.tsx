import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { projects } from "../portfolio-data";

export const metadata: Metadata = {
  title: "Selected Work — Grethiel Joy",
  description: "Website, WordPress, and digital content projects by Grethiel Joy Carbadilla G.",
};

export default function WorkPage() {
  return (
    <div className="portfolio-shell">
      <SiteHeader />
      <main id="main-content" className="inner-page">
        <header className="page-hero">
          <p className="section-kicker">Work</p>
          <h1>Selected projects for real audiences.</h1>
          <p>Website design, WordPress builds, conversion content, and social creative—each shaped around the people who need to use it.</p>
        </header>

        <section className="work-section work-page-section" aria-label="Selected projects">
          <div className="project-list">
            {projects.map((project, index) => (
              <article className={`project ${index === 0 ? "project-featured" : "project-page-card"}`} id={project.slug} key={project.slug}>
                <figure className={`project-visual ${index > 0 ? "project-visual-tall" : ""}`}>
                  <div className="project-image-frame">
                    <img className={`project-image ${index === 2 ? "project-image-social" : ""}`} src={project.image} alt={project.alt} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
                  </div>
                  <figcaption>{project.caption}</figcaption>
                </figure>
                <div className="project-copy">
                  <p className="project-role">{project.role}</p>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <ul aria-label={`${project.title} tools and services`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}