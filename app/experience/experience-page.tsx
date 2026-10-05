import type { Metadata } from "next";
import { ScrollPrompt } from "../components/scroll-prompt";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { experience } from "../portfolio-data";
import { CareerTimeline } from "./experience-timeline";

const orderedExperience = [
  ...experience.filter((item) => item.period.includes("Present")),
  ...experience.filter((item) => !item.period.includes("Present")),
];

export const metadata: Metadata = {
  title: "Experience — Grethiel Joy",
  description: "Grethiel Joy's professional experience in web design, WordPress, graphics, and digital marketing.",
};

export default function ExperiencePage() {
  return (
    <div className="portfolio-shell">
      <SiteHeader />
      <main id="main-content" className="scroll-page">
        <section className="experience-section scroll-chapter" aria-labelledby="experience-title">
          <header className="career-hero-simple">
            <p className="section-kicker">Career · 2009—Present</p>
            <h1 id="experience-title" className="career-hero-title">
              Professional experience.
            </h1>
            <p className="career-hero-lede">
              A career across WordPress development, website design, graphics,
              content creation, and digital marketing support.
            </p>
            <ScrollPrompt href="#career-archive" label="View the timeline" />
          </header>
        </section>

        <CareerTimeline items={orderedExperience} />
      </main>
      <SiteFooter />
    </div>
  );
}
