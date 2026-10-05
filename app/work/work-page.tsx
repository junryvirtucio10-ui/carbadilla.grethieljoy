import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { ProjectGallery } from "../components/project-gallery";
import { ScrollPrompt } from "../components/scroll-prompt";
import { getProjectThumbnail, projects } from "../portfolio-data";

export const metadata: Metadata = {
  title: "Selected Work — Grethiel Joy",
  description: "Explore website development, e-commerce, and digital content projects by Grethiel Joy, Digital Marketing Specialist & Web Developer.",
};

export default function WorkPage() {
  const featuredProjects = projects.slice(0, 3);
  const focusAreaCount = new Set(projects.map((project) => project.category)).size;

  return (
    <div className="portfolio-shell">
      <SiteHeader />
      <main id="main-content" className="inner-page scroll-page">
        <header id="work-introduction" className="work-gallery-heading scroll-chapter">
          <div className="work-hero-copy">
            <p className="section-kicker">The portfolio</p>
            <h1>Thoughtful websites.<br /><em>Real-world work.</em></h1>
            <p className="work-hero-lede">Web development and digital creative for businesses in healthcare, travel, e-commerce, and beyond. Explore the details behind each project.</p>

            <div className="work-hero-facts" aria-label="Portfolio overview">
              <p><strong>{projects.length}</strong><span>projects</span></p>
              <p><strong>{focusAreaCount}</strong><span>focus areas</span></p>
            </div>

            <ScrollPrompt href="#projects" label="Explore the project gallery" />
          </div>

          <div className="work-hero-showcase" aria-label="Featured project previews">
            <p className="work-hero-showcase-label">A glimpse into the archive</p>
            <div className="work-hero-stack">
              {featuredProjects.map((project, index) => {
                const thumbnail = getProjectThumbnail(project);

                return (
                  <a
                    className="work-hero-preview"
                    href={`/work#${project.slug}`}
                    key={project.slug}
                    aria-label={`View ${project.title} project`}
                  >
                    <span className="work-hero-preview-image">
                      {/* Responsive project thumbnails are pre-generated at two exact sizes. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={thumbnail.src}
                        srcSet={thumbnail.srcSet}
                        sizes="(max-width: 900px) 72vw, 34vw"
                        alt=""
                        width="800"
                        height="600"
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </span>
                    <span className="work-hero-preview-caption">
                      <small>{String(index + 1).padStart(2, "0")}</small>
                      <span>
                        <strong>{project.title}</strong>
                        <em>{project.caption}</em>
                      </span>
                      <i aria-hidden="true">↗</i>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </header>

        <section id="projects" className="work-gallery-section scroll-chapter" aria-label="Selected projects">
          <ProjectGallery />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
