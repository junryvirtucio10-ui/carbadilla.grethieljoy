import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { ProjectGallery } from "../components/project-gallery";

export const metadata: Metadata = {
  title: "Selected Work — Grethiel Joy",
  description: "Explore website development, e-commerce, and digital content projects by Grethiel Joy, Digital Marketing Specialist & Web Developer.",
};

export default function WorkPage() {
  return (
    <div className="portfolio-shell">
      <SiteHeader />
      <main id="main-content" className="inner-page">
        <header className="work-gallery-heading">
          <p className="section-kicker">The portfolio</p>
          <h1>Thoughtful websites.<br /><em>Real-world work.</em></h1>
          <p>Web development and digital creative for businesses in healthcare, travel, e-commerce, and beyond. Explore the details behind each project.</p>
        </header>

        <section className="work-gallery-section" aria-label="Selected projects">
          <ProjectGallery />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
