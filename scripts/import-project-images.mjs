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
];
await mkdir('public/projects/thumbnails', { recursive: true });
for (const [slug, prefix] of imports) {
  const matches = files.filter(file => file.startsWith(prefix) && file.includes('2026-09-10'));
  if (matches.length !== 1) throw new Error(`Expected exactly one source for ${slug}`);
  const original = path.join(source, matches[0]);
  await sharp(original).resize({ width: 1440, withoutEnlargement: true }).webp({ quality: 86 }).toFile(`public/projects/${slug}.webp`);
  await sharp(original).resize(800, 600, { fit: 'cover', position: 'top' }).webp({ quality: 84 }).toFile(`public/projects/thumbnails/${slug}.webp`);
  console.log(`Imported ${slug}`);
}
for (const [slug, file] of [['direct-construction', 'direct-construction'], ['tradie-growth', 'tradie'], ['life-regeneration-church', 'life-regeneration-church']]) {
  await sharp(`public/projects/${file}.png`).resize(800, 600, { fit: 'cover', position: 'top' }).webp({ quality: 84 }).toFile(`public/projects/thumbnails/${slug}.webp`);
}
