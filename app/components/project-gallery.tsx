"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { projects, type Project } from "../portfolio-data";

const categories = ["All work", "Health & wellness", "E-commerce", "Business & services", "Travel & hospitality", "Digital content"];
const services = [
  { title: "WordPress development", detail: "Responsive business websites", image: "/projects/thumbnails/direct-construction.webp" },
  { title: "E-commerce websites", detail: "Clear product and buying journeys", image: "/projects/thumbnails/innovamed-industries.webp" },
  { title: "SEO & content", detail: "Useful, conversion-focused pages", image: "/projects/thumbnails/tradie-growth.webp" },
  { title: "Social media creative", detail: "Campaign graphics and content", image: "/projects/thumbnails/life-regeneration-church.webp" },
];
const subscribeToProject = (notify: () => void) => {
  window.addEventListener("hashchange", notify);
  window.addEventListener("popstate", notify);
  return () => {
    window.removeEventListener("hashchange", notify);
    window.removeEventListener("popstate", notify);
  };
};
const getProjectHash = () => window.location.hash.slice(1);
const getServerHash = () => "";

function setProjectHash(slug: string, replace = false) {
  const url = new URL(window.location.href);
  url.hash = slug;
  window.history[replace ? "replaceState" : "pushState"](null, "", url);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

const closeProjectPreview = () => setProjectHash("", true);

function ProjectViewer({ project, onClose, onNavigate, onSelect, index, count }: {
  project: Project;
  onClose: () => void;
  onNavigate: (direction: number) => void;
  onSelect: (slug: string) => void;
  index: number;
  count: number;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [loadedSource, setLoadedSource] = useState("");
  const [failedSource, setFailedSource] = useState("");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const modal = dialog.current;
    const previousFocus = document.activeElement;
    const oldOverflow = document.body.style.overflow;
    modal?.showModal();
    const closeOnBackdrop = (event: MouseEvent) => { if (event.target === modal) onClose(); };
    modal?.addEventListener("click", closeOnBackdrop);
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    return () => {
      modal?.close();
      modal?.removeEventListener("click", closeOnBackdrop);
      document.body.style.overflow = oldOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true });
    };
  }, [onClose]);

  useEffect(() => { dialog.current?.scrollTo({ top: 0, left: 0, behavior: "instant" }); }, [project.slug]);

  const failed = failedSource === project.image;
  const projectIndex = projects.findIndex(item => item.slug === project.slug);
  const relatedProjects = Array.from(
    { length: Math.min(4, projects.length - 1) },
    (_, offset) => projects[(projectIndex + offset + 1) % projects.length],
  );
  return (
    <dialog className="project-dialog" ref={dialog} aria-labelledby="project-dialog-title" aria-describedby="project-dialog-description"
      onCancel={(event) => { event.preventDefault(); onClose(); }}>
      <div className="project-dialog-shell">
        <header className="project-dialog-header">
          <div className="project-author"><span className="project-author-avatar" aria-hidden="true"><img src="/grethiel-images/grethiel-joy.png" alt="" /></span><div><strong>Grethiel Joy</strong><span>Digital Marketing & Web Development</span></div></div>
          <div className="project-dialog-actions">
            <div className="project-dialog-navigation" role="group" aria-label="Browse projects">
              <button type="button" onClick={() => onNavigate(-1)} disabled={index === 0} aria-label="Previous project">←</button>
              <span aria-live="polite">{index + 1} / {count}</span>
              <button type="button" onClick={() => onNavigate(1)} disabled={index === count - 1} aria-label="Next project">→</button>
            </div>
            <button className="viewer-close" ref={closeButton} type="button" onClick={onClose} aria-label="Close project preview">×</button>
          </div>
        </header>
        <div className="project-dialog-body">
          <section className="project-dialog-intro">
            <p className="gallery-category">{project.category}</p>
            <h2 id="project-dialog-title">{project.title}</h2>
            <p>{project.role}</p>
          </section>

          <div className="project-shot-stage">
            <div className="project-shot" role="region" aria-label={`${project.title} full-page screenshot`} aria-busy={!failed && loadedSource !== project.image}>
              {failed ? <div className="preview-feedback" role="status"><p>This preview couldn’t load.</p><button type="button" onClick={() => { setFailedSource(""); setAttempt(attempt + 1); }}>Retry preview</button></div> : <>
                {loadedSource !== project.image && <p className="preview-loading" role="status">Loading preview…</p>}
                <img key={`${project.slug}-${attempt}`} src={project.image} alt={project.alt} onLoad={() => setLoadedSource(project.image)} onError={() => setFailedSource(project.image)} />
              </>}
            </div>
          </div>

          <section className="project-details">
            <div className="project-story-copy">
              <p className="gallery-category">Project overview</p>
              <h3>About the project</h3>
              <p id="project-dialog-description">{project.description}</p>
              {project.note && <p className="project-capture-note">{project.note}</p>}
            </div>
            <div className="project-story-meta">
              <dl><div><dt>Project</dt><dd>{project.role}</dd></div></dl>
              <ul className="project-detail-tags" aria-label="Project focus">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              {project.url && <a className="viewer-website" href={project.url} target="_blank" rel="noopener noreferrer">{project.note ? "Visit domain" : "View live site"}<span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}
            </div>
          </section>

          <section className="project-creator-section" aria-labelledby="project-creator-title">
            <div className="project-creator-rule" aria-hidden="true"><span><img src="/grethiel-images/grethiel-joy.png" alt="" /></span></div>
            <div className="project-creator-intro">
              <h3 id="project-creator-title">Grethiel Joy</h3>
              <p>Digital marketer and web developer creating clear, useful digital experiences.</p>
              <a className="viewer-contact" href="/contact">Get in touch</a>
            </div>

            <div className="related-projects-heading">
              <h4>More by Grethiel Joy</h4>
              <button type="button" onClick={onClose}>View all projects</button>
            </div>
            <div className="related-project-grid">
              {relatedProjects.map(item => (
                <button className="related-project-card" type="button" key={item.slug} onClick={() => onSelect(item.slug)} aria-label={`View ${item.title} project`}>
                  <span className="related-project-image"><img src={item.thumbnail ?? item.image} alt="" loading="lazy" decoding="async" /></span>
                  <span className="related-project-copy"><strong>{item.title}</strong><span>{item.caption}</span></span>
                </button>
              ))}
            </div>

            <div className="related-projects-heading service-offerings-heading">
              <h4>Services by Grethiel Joy</h4>
              <a href="/contact">Discuss a project</a>
            </div>
            <div className="service-offerings-grid">
              {services.map(service => (
                <a className="service-offering-card" href="/contact" key={service.title}>
                  <span className="service-offering-image"><img src={service.image} alt="" loading="lazy" decoding="async" /></span>
                  <span className="service-offering-copy"><strong>{service.title}</strong><span>{service.detail}</span></span>
                </a>
              ))}
            </div>

            <div className="project-ending-navigation" aria-label="Project navigation">
              <button type="button" onClick={() => onNavigate(-1)} disabled={index === 0}><kbd>←</kbd> Previous project</button>
              <button type="button" onClick={() => onNavigate(1)} disabled={index === count - 1}>Next project <kbd>→</kbd></button>
              <button type="button" onClick={onClose}><kbd>esc</kbd> Close</button>
            </div>
          </section>
        </div>
      </div>
    </dialog>
  );
}

export function ProjectGallery() {
  const [category, setCategory] = useState("All work");
  const hash = useSyncExternalStore(subscribeToProject, getProjectHash, getServerHash);
  const selected = projects.find(project => project.slug === hash);
  const visible = category === "All work" ? projects : projects.filter(project => project.category === category);
  const sequence = selected && !visible.includes(selected) ? projects : visible;
  const index = selected ? sequence.indexOf(selected) : -1;
  return (
    <>
      <div className="gallery-toolbar">
        <div className="gallery-filters" role="group" aria-label="Filter projects by category">
          {categories.map(item => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <p className="gallery-count" aria-live="polite">{visible.length} projects</p>
      </div>
      <div className="portfolio-project-grid">
        {visible.map((project, projectIndex) => (
          <article className="gallery-card" key={project.slug}>
            <button className="gallery-card-open" type="button" onClick={() => setProjectHash(project.slug)} aria-label={`View ${project.title} project`} aria-haspopup="dialog">
              <span className="gallery-image-frame">
                <img src={project.thumbnail ?? project.image} alt={project.alt} width={800} height={600} loading={projectIndex < 3 ? "eager" : "lazy"} decoding="async" />
                <span className="gallery-view-label">View project <span aria-hidden="true">↗</span></span>
                {project.note && <span className="gallery-capture-label">Domain capture</span>}
              </span>
              <span className="gallery-card-text"><span className="gallery-category">{project.caption}</span><span className="gallery-card-title">{project.title}</span></span>
            </button>
          </article>
        ))}
      </div>
      {selected && <ProjectViewer project={selected} index={index} count={sequence.length} onClose={closeProjectPreview} onSelect={slug => setProjectHash(slug, true)} onNavigate={direction => {
        const project = sequence[index + direction];
        if (project) setProjectHash(project.slug, true);
      }} />}
    </>
  );
}
