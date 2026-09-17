import sharp from 'sharp';
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';

const source = process.argv[2];
if (!source) throw new Error('Pass the folder containing the supplied project screenshots.');
const files = await readdir(source);
const imports = [
  ['zoe-wellness', 'fullpage_snapshot_www_zoewellness_com_'],
  ['innovamed-industries', 'fullpage_snapshot_innovamedindustries_com_'],
  ['globall-workforce', 'fullpage_snapshot_globallworkforce_com_'],
  ['premier-island-jobs', 'fullpage_snapshot_premierislandjobs_com_'],
  ['flyover-travel', 'fullpage_snapshot_flyovertravel_com_'],
  ['perfect-foto', 'screencapture-perfectfotoinc-'],
  ['davis-global-group', 'screencapture-davisglobalgroup-'],
  ['amrocor', 'fullpage_snapshot_amrocor_com_'],
  ['buddy-bright', 'fullpage_snapshot_callbuddybright_com_'],
  ['sail-with-seth', 'fullpage_snapshot_sailwithseth_com_'],
  ['thriving-gutters', 'fullpage_snapshot_thriving-gutters_com_'],
  ['oyins-international', 'fullpage_snapshot_oyinsinternational_com_'],
  ['orbit-building', 'fullpage_snapshot_orbitbuildingandremodeling_com_'],
  ['classe-credit', 'fullpage_snapshot_www_classecreditconsulting_com_'],
  ['alliance-care', 'alliancecaremedical_com_'],
  ['assistmynt', 'assistmynt_com_'],
  ['newsom-eye', 'newsomeye_com_'],
  ['zoelogics', 'screencapture-zoelogics-2026-09-17-15_09_11.png', true],
  ['home-growth-capital', 'screencapture-homegrowthcapital-home-2026-09-17-15_09_32.png', true],
  ['the-torch-guys', 'screencapture-thetorchguys-2026-09-17-14_48_22.png', true],
  ['davis-media', 'fullpage_snapshot_www_davismedia_com_2026-09-17-06-07-05.webp', true],
  ['jimenez-real-estate-group', 'screencapture-jimenezrealestategroup-2026-09-16-09_28_12.png', true],
  ['idiart-law-group', 'screencapture-idiartlaw-2026-09-16-10_02_44.png', true],
  ['mt-grand-construction', 'screencapture-mtgrandconstruction-2026-09-16-10_36_14.png', true],
  ['damon-davis', 'damondavis_com_2026-08-25-06-21-48.webp', true],
  ['clark-gregory-design', 'clarkgregorydesign_com_2026-08-25-06-22-46.webp', true],
  ['mt-grand-homes', 'screencapture-mtgrandhomes-2026-09-16-10_36_03.png', true],
  ['lucky-portables', 'luckyportables_com_2026-08-27-02-29-09.webp', true],
];
const requestedSlugs = new Set(process.argv.slice(3));
const selectedImports = requestedSlugs.size
  ? imports.filter(([slug]) => requestedSlugs.has(slug))
  : imports;
if (requestedSlugs.size && selectedImports.length !== requestedSlugs.size) {
  throw new Error('One or more requested project slugs are not configured for import.');
}
await mkdir('public/projects/thumbnails', { recursive: true });
for (const [slug, sourceName, exactName = false] of selectedImports) {
  const matches = exactName
    ? files.filter(file => file === sourceName)
    : files.filter(file => file.startsWith(sourceName) && file.includes('2026-09-10'));
  if (matches.length !== 1) throw new Error(`Expected exactly one source for ${slug}`);
  const original = path.join(source, matches[0]);
  await sharp(original).rotate().resize({ width: 1440, withoutEnlargement: true }).webp({ quality: 80, effort: 6 }).toFile(`public/projects/${slug}.webp`);
  await sharp(original).rotate().resize(800, 600, { fit: 'cover', position: 'top' }).webp({ quality: 82, effort: 6 }).toFile(`public/projects/thumbnails/${slug}.webp`);
  console.log(`Imported ${slug}`);
}
if (!requestedSlugs.size) {
  for (const [slug, file] of [['direct-construction', 'direct-construction'], ['tradie-growth', 'tradie'], ['life-regeneration-church', 'life-regeneration-church']]) {
    await sharp(`public/projects/${file}.png`).resize(800, 600, { fit: 'cover', position: 'top' }).webp({ quality: 84 }).toFile(`public/projects/thumbnails/${slug}.webp`);
  }
}
