import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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
  assert.match(html, /Websites made <span>clear and useful\.<\/span>/);
  assert.match(html, /src="\/grethiel-images\/grethiel-joy\.png"/);
  assert.doesNotMatch(html, /Pause background|Play background/);
  assert.match(html, /View my work/);
  assert.match(html, /About me/);
  assert.doesNotMatch(html, /Your site is taking shape/);
});

test("work renders all 20 projects with accessible preview actions and real screenshot assets", async () => {
  const html = await render("/work");
  assert.equal((html.match(/class="gallery-card-open"/g) ?? []).length, 20);
  for (const name of ["Zoë Wellness", "Innovamed Industries", "Globall Workforce", "Premier Island Jobs", "Flyover Travel", "Perfect Foto", "Davis Global Group", "Amrocor", "Buddy Bright", "Sail with Seth", "Thriving Gutters", "Oyins International", "Orbit Building &amp; Remodeling", "Classe Credit Consulting", "Alliance Care Medical", "Assistmynt", "Newsom Eye", "Direct Construction Website", "Tradie Growth Website", "Life Regeneration Church"]) {
    assert.ok(html.includes(name), `${name} must appear in the gallery`);
  }
  assert.equal((html.match(/aria-haspopup="dialog"/g) ?? []).length, 20);
  assert.match(html, /Domain capture/);
  const images = [...html.matchAll(/src="(\/projects\/thumbnails\/[^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(images).size, 20);
  for (const image of images) await access(new URL(`../public${image}`, import.meta.url));
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

test("the shared header uses document navigation that remains usable without the client router", async () => {
  const source = await readFile(new URL("../app/components/site-header.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(source, /from ["']next\/link["']/);
  assert.match(source, /<a className="brand-logo-link" href="\/"/);
  assert.match(source, /<a href=\{item\.href\}/);
  assert.match(source, /<a className="signature-project-link" href="\/contact"/);
});

test("every full-page project image exists and new project URLs have no trailing punctuation", async () => {
  const source = await readFile(new URL("../app/portfolio-data.ts", import.meta.url), "utf8");
  const images = [...source.matchAll(/image:\s*"([^"]+)"/g)].map(match => match[1]);
  assert.equal(images.length, 20);
  for (const image of images) await access(new URL(`../public${image}`, import.meta.url));
  const urls = [...source.matchAll(/url:\s*"([^"]+)"/g)].map(match => match[1]);
  assert.equal(urls.length, 17);
  for (const url of urls) {
    assert.equal(new URL(url).protocol, "https:");
    assert.equal(new URL(url).pathname, "/");
  }
});
