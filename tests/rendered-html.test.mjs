import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import test from "node:test";

const { default: worker } = await import(new URL("../dist/server/index.js", import.meta.url).href);

async function render(path = "/") {
  const response = await worker.fetch(
    new Request(`http://localhost:3000${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(response.status, 200, `${path} should render successfully`);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("homepage preserves the portrait and heading while leading with marketing and development", async () => {
  const html = await render();
  assert.match(html, /Digital Marketing Specialist &amp; Web Developer/);
  assert.match(html, /<span class="hero-title-line">Websites made<\/span>/);
  assert.match(html, /<em class="hero-title-accent">clear and useful\.<\/em>/);
  assert.equal((html.match(/class="hero-button-icon"/g) ?? []).length, 2);
  assert.match(html, /src="\/optimized\/joy-grethiel-768\.webp"/);
  assert.match(html, /srcSet="\/optimized\/joy-grethiel-480\.webp 480w/);
  assert.doesNotMatch(html, /Pause background|Play background/);
  assert.match(html, /View my work/);
  assert.match(html, /About me/);
  assert.doesNotMatch(html, /Your site is taking shape/);
});

test("work renders all 31 projects with accessible preview actions and real screenshot assets", async () => {
  const html = await render("/work");
  assert.equal((html.match(/class="gallery-card-open"/g) ?? []).length, 31);
  for (const name of ["ZoëLogics", "Home Growth Capital", "The Torch Guys", "Davis Media", "Jimenez Real Estate Group", "Idiart Law Group", "MT Grand Construction", "Damon Davis", "Clark Gregory Design", "MT Grand Homes", "Lucky Portables", "Zoë Wellness", "Innovamed Industries", "Globall Workforce", "Premier Island Jobs", "Flyover Travel", "Perfect Foto", "Davis Global Group", "Amrocor", "Buddy Bright", "Sail with Seth", "Thriving Gutters", "Oyins International", "Orbit Building &amp; Remodeling", "Classe Credit Consulting", "Alliance Care Medical", "Assistmynt", "Newsom Eye", "Direct Construction Website", "Tradie Growth Website", "Life Regeneration Church"]) {
    assert.ok(html.includes(name), `${name} must appear in the gallery`);
  }
  assert.equal((html.match(/aria-haspopup="dialog"/g) ?? []).length, 31);
  assert.match(html, /class="work-hero-showcase"/);
  assert.equal((html.match(/class="work-hero-preview"/g) ?? []).length, 3);
  assert.match(html, /<strong>31<\/strong><span>projects<\/span>/);
  assert.match(html, /<strong>5<\/strong><span>focus areas<\/span>/);
  assert.match(html, /Domain capture/);
  const images = [...html.matchAll(/src="(\/projects\/thumbnails\/[^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(images).size, 31);
  for (const image of images) await access(new URL(`../public${image}`, import.meta.url));
  const mobileImages = images.map(image => image.replace("/projects/thumbnails/", "/projects/thumbnails/mobile/"));
  assert.equal(mobileImages.length, 34);
  for (const image of mobileImages) await access(new URL(`../public${image}`, import.meta.url));
});

test("all portfolio routes share navigation with the correct active page", async () => {
  for (const [path, label] of [["/", "Home"], ["/work", "Work"], ["/about", "About"], ["/experience", "Experience"], ["/contact", "Contact"]]) {
    const html = await render(path);
    assert.match(html, /class="signature-header/);
    assert.ok(html.includes(`href="${path}" aria-current="page"><span>${label}</span>`), `${path} must mark its active navigation link`);
    assert.match(html, /aria-controls="portfolio-navigation"/);
    assert.match(html, /id="main-content"/);
  }
});

test("the portfolio stays multi-page while every route uses the shared scroll experience", async () => {
  const routes = ["/", "/work", "/about", "/experience", "/contact"];
  for (const path of routes) {
    const html = await render(path);
    assert.match(html, /class="[^"]*scroll-page[^"]*"/);
    assert.match(html, /class="page-scroll-progress"/);
    assert.match(html, /class="[^"]*scroll-chapter[^"]*"/);
  }

  const home = await render("/");
  const work = await render("/work");
  const about = await render("/about");
  assert.match(home, /href="#profile"/);
  assert.match(work, /href="#projects"/);
  assert.match(about, /href="#approach"/);
});

test("experience presents a clean, flowing career timeline", async () => {
  const html = await render("/experience");
  const styles = await readFile(new URL("../app/scroll-experience.css", import.meta.url), "utf8");
  const timelineSource = await readFile(new URL("../app/experience/experience-timeline.tsx", import.meta.url), "utf8");

  assert.match(html, /Professional experience\./);
  assert.match(html, /class="career-hero-simple"/);
  assert.doesNotMatch(html, /experience-hero-motion|experience-hero-orbit|experience-hero-comet/);
  assert.match(html, /Career · 2009—Present/);
  assert.match(html, /id="career-archive"/);
  assert.doesNotMatch(html, /career-hero-register/);
  assert.doesNotMatch(html, /career-role-list/);
  assert.doesNotMatch(html, /career-next-step/);
  assert.match(html, /class="career-process-layout"/);
  assert.match(html, /class="career-process-track"/);
  assert.equal((html.match(/class="career-step(?: career-step--ongoing)?(?: is-active)?"/g) ?? []).length, 7);
  assert.match(html, /class="career-step career-step--ongoing is-active" aria-current="step"/);
  assert.match(html, /class="career-step-number" aria-hidden="true">01</);
  assert.match(html, /class="career-step-number" aria-hidden="true">07</);
  assert.match(html, />Ongoing<\/span>/);
  assert.match(html, /WordPress Developer &amp; Graphics Designer/);
  assert.ok(
    html.indexOf("Life Regeneration Church") < html.indexOf("Tradie — formerly Pro Tradesmen Club"),
    "the current role should lead the timeline",
  );
  assert.match(styles, /Experience revision — a flowing timeline, intentionally free of grid and card layouts/);
  assert.match(styles, /@keyframes experience-background-flow/);
  assert.match(styles, /prefers-reduced-motion: no-preference[\s\S]*?\.experience-section::before/);
  assert.doesNotMatch(styles, /experience-orbit-clockwise|experience-hero-comet/);
  assert.match(styles, /\.career-process-sticky\s*\{[\s\S]*?position: sticky/);
  assert.match(styles, /\.career-process-track > span\s*\{[\s\S]*?height: var\(--career-progress\)/);
  assert.match(styles, /\.career-step\.is-active \.career-step-number/);
  assert.match(styles, /@media \(max-width: 840px\)[\s\S]*?\.career-process-sticky\s*\{[\s\S]*?position: static/);
  assert.match(timelineSource, /window\.requestAnimationFrame/);
  assert.match(timelineSource, /window\.addEventListener\("scroll", requestUpdate/);
  assert.match(timelineSource, /bounds\.top \+ bounds\.height \/ 2 - readingLine/);
  assert.doesNotMatch(timelineSource, /ResizeObserver/);
});

test("the shared header uses document navigation that remains usable without the client router", async () => {
  const source = await readFile(new URL("../app/components/site-header.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(source, /from ["']next\/link["']/);
  assert.match(source, /<a className="brand-logo-link" href="\/"/);
  assert.match(source, /<a href=\{item\.href\}/);
  assert.match(source, /<a className="signature-project-link" href="\/contact"/);
});

test("scroll reveals use viewport intersection without resize-observer loops", async () => {
  const source = await readFile(new URL("../app/components/scroll-reveals.tsx", import.meta.url), "utf8");
  const progress = await readFile(new URL("../app/components/scroll-progress.tsx", import.meta.url), "utf8");
  assert.match(source, /new IntersectionObserver/);
  assert.match(source, /\.scroll-chapter, \.site-footer/);
  assert.match(source, /is-scroll-section-revealed/);
  assert.match(source, /prefers-reduced-motion: reduce/);
  assert.doesNotMatch(source, /ResizeObserver/);
  assert.doesNotMatch(progress, /ResizeObserver/);
});

test("shared page surfaces use one responsive horizontal gutter", async () => {
  const globals = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const scrollStyles = await readFile(new URL("../app/scroll-experience.css", import.meta.url), "utf8");
  assert.match(globals, /--gj-page-gutter: clamp\(1\.25rem, 2\.4vw, 3rem\)/);
  assert.match(globals, /--gj-content-max: 1660px/);
  assert.match(scrollStyles, /\.signature-header-inner,[\s\S]*padding-left: var\(--gj-page-inset\)/);
  for (const selector of [".hero", ".home-intro", ".home-featured", ".about-story", ".skills-section", ".experience-section", ".contact-section", ".home-contact-main", ".site-footer", ".work-gallery-heading", ".work-gallery-section"]) {
    assert.ok(scrollStyles.includes(selector), `${selector} must use the shared page inset`);
  }
});

test("public pages share one semantic heading scale and Work hero previews stay still on hover", async () => {
  const globals = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const scrollStyles = await readFile(new URL("../app/scroll-experience.css", import.meta.url), "utf8");

  for (const token of ["page", "section", "feature", "card"]) {
    assert.match(globals, new RegExp(`--gj-heading-${token}-size: clamp\\(`));
    assert.match(scrollStyles, new RegExp(`font-size: var\\(--gj-heading-${token}-size\\)`));
  }

  for (const selector of [".hero h1", ".work-gallery-heading .work-hero-copy h1", ".career-hero-title", ".contact-copy h1"]) {
    assert.ok(scrollStyles.includes(selector), `${selector} must use the shared page-heading role`);
  }

  assert.doesNotMatch(scrollStyles, /\.work-hero-preview:hover/);
  assert.doesNotMatch(scrollStyles, /\.work-hero-preview:(?:hover|focus-visible) img/);
  assert.match(scrollStyles, /\.work-hero-preview:focus-visible\s*\{[\s\S]*?outline:/);
});

test("homepage closes with a compact CTA and three accessible social profile links", async () => {
  const html = await render("/");
  const scrollStyles = await readFile(new URL("../app/scroll-experience.css", import.meta.url), "utf8");
  const profiles = {
    LinkedIn: "https://www.linkedin.com/in/grethiel-joy-carbadilla-61768242b/",
    Instagram: "https://www.instagram.com/gre_thang?fbclid=IwY2xjawUv5vFleHRuA2FlbQIxMABwZG9mBWJyaWQRMW1pWFBFbnRhdVowTExuRWdzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeXvBTg8p0SniZS2RvwIprynHsQmYo10ZfUT2NHTJE_hScPKqjoA-Gd0RY9F4_aem_13BmUlxe1ZMsOeA8GmP7HQ",
    Facebook: "https://www.facebook.com/grethieljou.carbadilla",
  };

  assert.match(html, /Let’s make it <em>clear, useful, and ready to work\.<\/em>/);
  assert.match(html, /<span>Start a project<\/span>/);
  assert.equal((html.match(/target="_blank" rel="noreferrer"/g) ?? []).length, 3);
  for (const [social, url] of Object.entries(profiles)) {
    const escapedUrl = url.replaceAll("&", "&amp;");
    assert.ok(html.includes(`href="${escapedUrl}" aria-label="${social}" title="${social}"`), `${social} needs its profile link`);
  }
  assert.doesNotMatch(html, /aria-label="X" title="X"/);

  assert.match(scrollStyles, /\.home-contact-strip\.scroll-chapter\s*\{[\s\S]*?min-height: auto/);
  assert.match(scrollStyles, /\.footer-social-links a\s*\{[\s\S]*?width: 44px;[\s\S]*?height: 44px/);
});

test("critical responsive images stay within performance budgets", async () => {
  const budgets = [
    ["optimized/grethiel-joy-1023.webp", 100],
    ["optimized/grethiel-joy-480.webp", 35],
    ["optimized/grethiel-joy-logo-640.webp", 50],
    ["optimized/gj-mobile-icon-192.webp", 25],
    ["optimized/home-intro-background-1672.webp", 50],
    ["optimized/gj-favicon-64.png", 10],
  ];
  for (const [image, maxKilobytes] of budgets) {
    const info = await stat(new URL(`../public/${image}`, import.meta.url));
    assert.ok(info.size <= maxKilobytes * 1024, `${image} must remain under ${maxKilobytes} KB`);
  }
});

test("new project imagery stays within gallery performance budgets", async () => {
  const newProjectSlugs = [
    "zoelogics", "home-growth-capital", "the-torch-guys", "davis-media",
    "jimenez-real-estate-group", "idiart-law-group", "mt-grand-construction",
    "damon-davis", "clark-gregory-design", "mt-grand-homes", "lucky-portables",
  ];
  for (const slug of newProjectSlugs) {
    const [fullPage, thumbnail, mobileThumbnail] = await Promise.all([
      stat(new URL(`../public/projects/${slug}.webp`, import.meta.url)),
      stat(new URL(`../public/projects/thumbnails/${slug}.webp`, import.meta.url)),
      stat(new URL(`../public/projects/thumbnails/mobile/${slug}.webp`, import.meta.url)),
    ]);
    assert.ok(fullPage.size <= 600 * 1024, `${slug} full-page preview must remain under 600 KB`);
    assert.ok(thumbnail.size <= 100 * 1024, `${slug} desktop thumbnail must remain under 100 KB`);
    assert.ok(mobileThumbnail.size <= 35 * 1024, `${slug} mobile thumbnail must remain under 35 KB`);
  }
});

test("every full-page project image exists and new project URLs have no trailing punctuation", async () => {
  const source = await readFile(new URL("../app/portfolio-data.ts", import.meta.url), "utf8");
  const images = [...source.matchAll(/image:\s*"([^"]+)"/g)].map(match => match[1]);
  assert.equal(images.length, 31);
  for (const image of images) await access(new URL(`../public${image}`, import.meta.url));
  const urls = [...source.matchAll(/url:\s*"([^"]+)"/g)].map(match => match[1]);
  assert.equal(urls.length, 27);
  for (const url of urls) {
    assert.equal(new URL(url).protocol, "https:");
    assert.doesNotMatch(url, /[.,;:!?)]$/);
  }
});
