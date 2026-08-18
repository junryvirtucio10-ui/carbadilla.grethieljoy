const experience = [
  {
    company: "Tradie — formerly Pro Tradesmen Club",
    period: "Feb 2025 — Feb 2026",
    role: "Website Designer, Graphics Designer & Digital Marketing Assistant",
  },
  {
    company: "Bizwise Company",
    period: "Oct 2023 — Jan 2025",
    role: "Website Designer, Graphics Designer & Content Creator",
  },
  {
    company: "Alpha Key Digital",
    period: "Mar 2023 — Sep 2023",
    role: "Website Designer, Graphics Designer & Digital Marketing Assistant",
  },
  {
    company: "Life Regeneration Church",
    period: "Jun 2009 — Present",
    role: "WordPress Developer & Graphics Designer",
  },
  {
    company: "Morrow Growth Agency",
    period: "Jun 2023 — Jul 2023",
    role: "Graphics Designer & Digital Marketing Assistant",
  },
  {
    company: "Exoskill",
    period: "Jul 2020 — Oct 2022",
    role: "WordPress Developer & Graphics Designer",
  },
  {
    company: "Skillsource",
    period: "May 2019 — Jun 2020",
    role: "WordPress Developer, Graphics Designer & Social Media Assistant",
  },
];

const skills = [
  "WordPress",
  "Elementor",
  "Canva",
  "Digital marketing",
  "Website maintenance",
  "Website design",
  "Content management",
  "Adobe Photoshop",
  "Graphic design",
  "Figma",
  "Social media management",
  "Google Workspace",
  "Responsive design",
  "Team collaboration",
  "UX/UI design",
  "Attention to detail",
  "Communication",
];

const tools = ["WordPress", "Elementor", "Divi", "Google Workspace", "Figma", "Canva"];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <p className="concept-ribbon">Portfolio foundation · brand system v1.0</p>

      <header className="site-header" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Grethiel Joy, home">
          Grethiel Joy<span aria-hidden="true">.</span>
        </a>
        <nav className="site-nav" aria-label="Portfolio sections">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="/design-system">System</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="header-label">WordPress · Design · Digital</p>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy" id="main-content">
          <p className="eyebrow">
            WordPress, web design & digital content · Cebu, Philippines
          </p>
          <h1 id="hero-title">
            Grethiel Joy
            <span>Carbadilla G.</span>
          </h1>
          <div className="hero-intro">
            <p>
              I create responsive websites, clear user experiences, and digital
              content that help businesses work better online.
            </p>
            <a className="arrow-link" href="#work">
              View selected work <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>

        <div className="hero-art">
          <div
            className="resume-portrait"
            role="img"
            aria-label="Portrait of Grethiel Joy Carbadilla G."
          />
          <aside className="hero-note">
            <span>Design system signature</span>
            <p>Built in cocoa. Signed in gold.</p>
          </aside>
        </div>

        <p className="hero-location">System No. 01 · Cocoa & gold</p>
      </section>

      <section className="profile-section" aria-labelledby="profile-title">
        <div className="section-label">
          <p>What I do</p>
          <p>Websites · Content · Marketing</p>
        </div>
        <div className="profile-copy">
          <h2 id="profile-title">
            I build websites that look polished, work smoothly, and stay useful
            after launch.
          </h2>
          <p>
            I’m a creative website designer experienced in building and
            managing WordPress websites, organizing content, improving user
            experience, and making sure every page works well across devices. I
            also support brands through graphics, social content, SEO, and
            digital marketing campaigns.
          </p>
        </div>
        <aside className="profile-note">
          <span>Working across digital since 2019</span>
          <p>Design, build, maintain, improve.</p>
        </aside>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <header className="section-heading">
          <p className="section-kicker">Selected projects</p>
          <h2 id="work-title">Work made for real audiences.</h2>
          <p>
            Each case study uses the same hierarchy: the challenge, the work,
            the tools, and the result. Final links can be added as projects are
            prepared for publication.
          </p>
        </header>

        <div className="project-list">
          <article className="project project-featured">
            <figure className="project-visual">
              <div
                className="resume-project resume-project-construction"
                role="img"
                aria-label="Construction company website shown in Grethiel's resume"
              />
              <figcaption>WordPress website design</figcaption>
            </figure>
            <div className="project-copy">
              <p className="project-role">Website design</p>
              <h3>Construction Website</h3>
              <p>
                A construction company website designed with WordPress and
                Elementor, with a clear structure and service-focused layout.
              </p>
              <ul aria-label="Construction Website tools">
                <li>WordPress</li>
                <li>Elementor</li>
                <li>Responsive design</li>
              </ul>
            </div>
          </article>

          <div className="project-pair">
            <article className="project">
              <figure className="project-visual project-visual-tall">
                <div
                  className="resume-project resume-project-uk"
                  role="img"
                  aria-label="UK local service website shown in Grethiel's resume"
                />
                <figcaption>Web design & content</figcaption>
              </figure>
              <div className="project-copy">
                <p className="project-role">Web design</p>
                <h3>UK Local Service Website</h3>
                <p>
                  Website design updates, landing-page creation, user-focused
                  layout improvements, social media support, and visual content.
                </p>
                <ul aria-label="UK Local Service Website work">
                  <li>Landing pages</li>
                  <li>Content</li>
                  <li>Social media</li>
                </ul>
              </div>
            </article>

            <article className="project project-offset">
              <figure className="project-visual project-visual-square">
                <div
                  className="resume-project resume-project-social"
                  role="img"
                  aria-label="Social media management project shown in Grethiel's resume"
                />
                <figcaption>Social media management</figcaption>
              </figure>
              <div className="project-copy">
                <p className="project-role">Digital content</p>
                <h3>Social Media Management</h3>
                <p>
                  Social graphics, video reels, captions, and page content
                  created for church updates, campaigns, and events.
                </p>
                <ul aria-label="Social Media Management work">
                  <li>Graphics</li>
                  <li>Video reels</li>
                  <li>Copywriting</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="experience-section"
        id="experience"
        aria-labelledby="experience-title"
      >
        <header className="experience-heading">
          <p className="section-kicker">Experience</p>
          <h2 id="experience-title">
            Websites, graphics, and digital content—built together.
          </h2>
        </header>

        <ol className="experience-list">
          {experience.map((item) => (
            <li key={`${item.company}-${item.period}`}>
              <p className="experience-period">{item.period}</p>
              <div>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="skills-section" aria-labelledby="skills-title">
        <header className="skills-heading">
          <p className="section-kicker">Skills & tools</p>
          <h2 id="skills-title">A practical, hands-on digital toolkit.</h2>
        </header>

        <div className="skills-layout">
          <ul className="skill-cloud" aria-label="Professional skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
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
          <div>
            <h3>Bachelor of Science in Tourism Management</h3>
            <p>Asian College of Technology IEF · 2021 — 2025</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <p className="section-kicker">Start a project</p>
        <h2 id="contact-title">
          Let’s make the next digital thing clear, useful, and memorable.
        </h2>
        <div className="contact-links">
          <a href="mailto:grethieljoyc@gmail.com">
            <span>Email</span>
            grethieljoyc@gmail.com
            <b aria-hidden="true">↗</b>
          </a>
          <a href="https://wa.me/639751837109">
            <span>WhatsApp</span>
            +63 975 183 7109
            <b aria-hidden="true">↗</b>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#top" aria-label="Back to the top">
          Grethiel Joy<span aria-hidden="true">.</span>
        </a>
        <p>Portfolio design system · Version 1.0</p>
        <p>Cebu, Philippines · Cocoa & gold</p>
      </footer>
    </main>
  );
}
