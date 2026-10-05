---
version: alpha
name: Grethiel Joy Portfolio
description: A cocoa-and-gold portfolio for a Digital Marketing Specialist and Web Developer.
colors:
  cocoa: "#412D21"
  deep-brown: "#3D1700"
  secondary: "#6A4E40"
  gold: "#C58F15"
  pale-gold: "#F7E8B5"
  bright-gold: "#FFC700"
  background: "#F2EDE8"
  surface: "#F8F8F8"
  white: "#FFFFFF"
  focus: "#004AAD"
typography:
  display:
    fontFamily: '"Roxborough CF", Baskerville, "Baskerville Old Face", Georgia, serif'
  body:
    fontFamily: '"Trebuchet MS", "Segoe UI", sans-serif'
  utility:
    fontFamily: 'Consolas, "Courier New", monospace'
  page-heading:
    fontFamily: '"Roxborough CF", Baskerville, "Baskerville Old Face", Georgia, serif'
    lineHeight: "0.9"
  section-heading:
    fontFamily: '"Roxborough CF", Baskerville, "Baskerville Old Face", Georgia, serif'
    lineHeight: "0.95"
  feature-heading:
    fontFamily: '"Roxborough CF", Baskerville, "Baskerville Old Face", Georgia, serif'
    lineHeight: "1"
  card-heading:
    fontFamily: '"Roxborough CF", Baskerville, "Baskerville Old Face", Georgia, serif'
    lineHeight: "1.12"
rounded:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.75rem"
  pill: "999px"
spacing:
  control-gap: "0.5rem"
  card-padding: "1.5rem"
  section-gap: "4rem"
  page-gutter: "clamp(1.25rem, 2.4vw, 3rem)"
components:
  header: {}
  project-card: {}
  project-viewer: {}
  hero-atmosphere: {}
  experience-archive: {}
  footer: {}
---

# Grethiel Joy Portfolio

## Overview

An English-language brand portfolio for prospective clients and employers, positioning Grethiel as a Digital Marketing Specialist & Web Developer. The established identity comes from her cocoa-and-gold personal branding, with a floating portrait and expressive serif headlines. The September 2026 revision refines the shared navigation and adds a visual project collection while preserving the homepage heading, portrait, and calls to action.

The signature is the combination of Grethiel’s gold-thread brand mark and a softly moving gold atmosphere behind the hero portrait. The gallery stays quiet so each client's visual identity leads. Avoid neon effects, unrelated accent palettes, invented results, or complex social features.

Runtime ownership: `app/globals.css` remains the canonical token source. `app/portfolio-refresh.css` consumes those variables for the header, background, grid, and viewer. This document mirrors accepted values and explains their use; it does not generate code.

## Colors

Studio ivory anchors the header and page surfaces, while deep cocoa anchors the contact tab, mobile navigation, footer, selected filters, and primary viewer action. Pale gold marks active navigation and hover emphasis. Muted gold is for signature lines and borders, never small text on white. Functional focus remains blue on light surfaces.

Global scrollbar tokens in `app/globals.css`: thumb `#967447`, track `#F2EDE8`, hover `#6A4E40`, active `#412D21`; forced-colors uses system defaults. All new overflow regions inherit this baseline.

## Typography

Preserve the current serif display stack, including local platform fallbacks. Use the body stack for readable navigation, controls, descriptions, and captions. Utility type is reserved for eyebrows and counts. Keep visible text at least 16px. Gallery headings use normal-weight serif, with italic reserved for the supporting phrase. Reading copy uses 1.5–1.7 line height.

Heading size follows one four-level hierarchy across every public route: page titles use `--gj-heading-page-*`, major section titles use `--gj-heading-section-*`, featured editorial or panel titles use `--gj-heading-feature-*`, and repeated card or timeline titles use `--gj-heading-card-*`. `app/globals.css` owns these runtime tokens, and the final shared mappings in `app/scroll-experience.css` assign them by content role. Keep weight 400 throughout display headings; use tighter leading and tracking at the larger levels, then relax both for card readability. Do not introduce page-local heading clamps when one of these roles fits.

## Layout

The homepage Profile section uses the supplied workspace photograph (`public/profile-background.png`) as its background. The label, heading, paragraph, and navigation links share one left edge; the photograph remains prominent on the right. Ivory overlays protect reading contrast and softly fade the image into the sections above and below. On mobile, the same left-aligned reading order uses a stronger overlay and stacked links.

The homepage hero fills the available dynamic viewport below the sticky navigation, with a legacy viewport fallback. The header measures its expanded height into the shell's `--gj-header-height` variable (CSS fallbacks: 93px on desktop, 79px below 760px); contraction and the open mobile menu do not resize the hero. The left column is a deliberate two-line typographic statement: “Websites made” stays upright in cocoa, while “clear and useful.” forms one gold italic promise beneath it. Supporting copy stays within a 39rem reading measure. Hero calls to action use the body typeface in sentence case, equal-height framed controls, and the same circular arrow treatment; utility type remains reserved for the eyebrow. Portrait size, typography, and spacing adapt to screen height; mobile uses a compact portrait and content-safe stacking. Keep the hero's height content-safe: short screens and enlarged text may extend it so all content remains accessible through document scrolling.

The header is shared across Home, Work, About, Experience, and Contact. Its asymmetric letterhead layout uses the dark logo on ivory, an active-page sparkle borrowed from the logo, a gold signature rule, and a cocoa contact tab. It contracts after the reader scrolls and responds to pointer position with a restrained gold glint. Below 760px, a transparent brown three-line hamburger opens a full-viewport white navigation canvas and morphs into an unboxed X. The logo and icon remain in the top bar while large serif page names, numbered 01–05, form full-width ruled rows beneath it. The active route is italic with a gold number. The Work gallery introduction uses compact mobile padding that overrides the historical desktop `!important` rule; the gallery has three columns, two below 1100px, and one below 520px. Thumbnail geometry stays 4:3 while images load.

All shared page surfaces use the runtime `--gj-page-inset` token for their left and right content edges. It combines a responsive gutter (`clamp(1.25rem, 2.4vw, 3rem)`) with a 1660px maximum content width, so the header, full-screen chapters, Work gallery, contact strip, and footer align at every breakpoint while their backgrounds remain full bleed. Do not add page-specific horizontal padding outside this shared inset unless a contained component intentionally needs internal spacing.

Every route remains a separate page, but its major content blocks read as full-screen scroll chapters. Chapters use content-safe `min-height` values based on the dynamic viewport and the measured shared header; they must never clip long or zoomed content. A thin gold line at the top of the browser shows document progress, and the first viewport uses a labelled downward cue to set the next destination. Large, sufficiently tall screens may use proximity scroll snapping; mobile, short screens, and reduced-motion contexts keep ordinary document scrolling. Long project galleries and content-heavy chapters always expand naturally beyond one viewport.

Each chapter now enters as one composed surface before its internal elements follow. The section-level motion uses a short upward settle and very light scale change; headings and copy rise gently, paired editorial blocks slide from their natural side, and project cards settle in with a restrained scale change. Sibling content may stagger in 75ms steps, capped after four items so large galleries remain responsive. The shared observers begin reveals before content reaches the lower edge, never hide initially visible content, and leave all content static and visible when reduced motion is requested.

The Work introduction uses an editorial split composition rather than an empty full-screen canvas. The left column retains the portfolio message, truthful project and focus-area totals, and gallery cue. The right column layers three real project thumbnails from the portfolio archive over a restrained gold field. Preview cards deep-link to their existing project presentations; they remain visually still on pointer hover, while keyboard focus uses the shared blue outline. No fabricated project metrics are shown.

The Experience route is a quiet two-chapter career story, deliberately unlike the Work route. Its light studio hero is a compact subpage introduction—not a full-screen landing hero—and uses the direct title “Professional experience,” a 2009–Present date marker, and one short overview. The hero’s entire background is an animated ivory, gold, and cocoa color field: oversized gradient washes drift across the full surface while a broad gold light band travels edge to edge behind the stationary copy. This motion must read as the section background, never as a floating illustration or self-contained object, and it becomes a strong static color field when reduced motion is requested. The hero has no project previews, statistics panel, recent-role register, or visual grid. The second chapter is a scroll-led career narrative inspired by the supplied process reference while retaining Grethiel's own palette and typography. On wide screens its introduction stays pinned beside seven tall, sequential roles; the role nearest the viewport's reading line becomes active, its number turns gold, and a continuous rail advances in one-seventh increments. Life Regeneration Church leads the current-first order. Periods, employers, and exact role titles remain plain, spacious text instead of cards, chips, or tiles, with an explicit ongoing marker where the source says “Present.” On small screens the introduction becomes static and the same rail, active-step behavior, and reading order continue at the left edge. The shared footer provides the route’s contact path, so the career story does not end with a separate promotional panel. Keep all historical employers, periods, and role titles unchanged unless Grethiel supplies a correction.

The homepage closing invitation is a compact editorial band rather than a full-screen chapter. It keeps one direct promise, one `Start a project` action, and enough negative space to separate it from the project gallery without delaying access to the footer. The footer itself is a concise letterhead: reduced logo, location note, contact link, and three circular social icons. LinkedIn, Instagram, and Facebook point to Grethiel’s supplied profiles, open in a new tab, and keep accessible names and visible keyboard focus. X is intentionally omitted because it is not part of her social presence.

The viewer is a native modal dialog styled as a spacious project presentation. On wide screens it grows to 1660px while retaining a small view of the dimmed Work page around it. It uses one continuous scroll surface: a compact sticky creator bar with Grethiel's portrait, previous/next navigation, and Close; an editorial project introduction; the uninterrupted full-page screenshot; an overview with the presentation's only live-site action; and a Dribbble-inspired creator ending with a portrait divider, contact action, four related projects, four established service offerings, and quiet navigation controls. On mobile, the creator bar shows only the circular close control, while previous and next navigation remains at the end of the presentation. Desktop and mobile follow the same reading order, while mobile expands the dialog to the full viewport. Page scroll position is preserved beneath the overlay.

## Elevation & Depth

Use a fine gold edge on cocoa navigation and subtle image shadows. Reserve backdrop blur for the modal. Do not add floating panels around every text block. Project screenshots are the focal point.

## Shapes

Use clean text navigation, a clipped-corner contact tab, pill filter controls, medium-radius gallery images, and a restrained rounded modal. Preserve the circular portrait. Geometry comes from the existing `--gj-radius-*` variables.

## Components

| Consumer | Canonical runtime values |
| --- | --- |
| Header | `--gj-cocoa-900`, `--gj-gold-100`, `--gj-gold-600`, `--gj-radius-pill` |
| Gallery cards | `--gj-line`, `--gj-radius-medium`, `--gj-shadow-soft`, `--gj-display` |
| Viewer | `--gj-studio-100`, `--gj-cocoa-900`, `--gj-gold-100`, `--gj-blue-700` |
| Hero | Existing hero tokens; decorative alpha variants of gold and pale gold |
| Scroll surfaces | Shared `--gj-scroll-*` variables |
| Heading hierarchy | `--gj-heading-page-*`, `--gj-heading-section-*`, `--gj-heading-feature-*`, `--gj-heading-card-*` |
| Experience archive | Shared cocoa/gold palette, page/section heading roles, `--gj-page-inset`, continuous gold timeline |
| Footer and closing CTA | Shared cocoa/gold palette, `--gj-page-inset`, 44px social targets |

Project clicks open a full-page screenshot with project information, a website link when supplied, and previous/next navigation within the current category. Avoid nested screenshot and sidebar scrollers; the dialog itself is the only scroll container. The URL hash identifies the project and supports direct links and browser history. Closing restores focus. The native dialog owns focus trapping, background inertness, and Escape behavior. Loading and retry states belong to the screenshot surface.

Use semantic links for navigation and buttons for actions. All controls have hover, focus, pressed, and disabled states as applicable. Touch users see the same labelled preview action as pointer users. Do not invent likes, view counts, performance metrics, project dates, or case-study results.

New project descriptions describe the supplied screenshots; individual contribution scope and platforms have not been independently confirmed. Thriving Gutters is visibly marked as a domain capture because its supplied image shows a parked domain. Preserve that distinction until an original project screenshot is supplied.

Hero background motion is specifically authorised by the September 2026 brief, replacing the earlier no-ambient-animation rule for this section only. It has no visible playback control; respect the visitor’s reduced-motion preference and confine pointer response to decorative background elements. Portrait and content remain governed by their existing motion rules.

## Do's and Don'ts

- Keep Digital Marketing & Web Development first in profile copy and metadata.
- Preserve all 31 projects and use optimised thumbnails separately from full-page previews.
- Maintain the user's existing staged edits; this refresh builds on them.
- Do not replace the portrait, rewrite historical employment titles, or fabricate project outcomes.

## Reconciliation

The earlier `docs/portfolio-design-system.md` named an uppercase sans display face; the established runtime now uses the serif stack documented here. This document adopts the runtime typography. The user explicitly requested background motion and a grid, superseding the earlier static-background and asymmetric-project recommendations for these components. Shared palette tokens remain unchanged.
