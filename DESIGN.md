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
rounded:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.75rem"
  pill: "999px"
spacing:
  control-gap: "0.5rem"
  card-padding: "1.5rem"
  section-gap: "4rem"
components:
  header: {}
  project-card: {}
  project-viewer: {}
  hero-atmosphere: {}
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

## Layout

The header is shared across Home, Work, About, Experience, and Contact. Its asymmetric letterhead layout uses the dark logo on ivory, an active-page sparkle borrowed from the logo, a gold signature rule, and a cocoa contact tab. It contracts after the reader scrolls and responds to pointer position with a restrained gold glint. Below 760px, a transparent brown three-line hamburger opens a full-viewport white navigation canvas and morphs into an unboxed X. The logo and icon remain in the top bar while large serif page names, numbered 01–05, form full-width ruled rows beneath it. The active route is italic with a gold number. The Work gallery introduction uses compact mobile padding that overrides the historical desktop `!important` rule; the gallery has three columns, two below 1100px, and one below 520px. Thumbnail geometry stays 4:3 while images load.

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

Project clicks open a full-page screenshot with project information, a website link when supplied, and previous/next navigation within the current category. Avoid nested screenshot and sidebar scrollers; the dialog itself is the only scroll container. The URL hash identifies the project and supports direct links and browser history. Closing restores focus. The native dialog owns focus trapping, background inertness, and Escape behavior. Loading and retry states belong to the screenshot surface.

Use semantic links for navigation and buttons for actions. All controls have hover, focus, pressed, and disabled states as applicable. Touch users see the same labelled preview action as pointer users. Do not invent likes, view counts, performance metrics, project dates, or case-study results.

New project descriptions describe the supplied screenshots; individual contribution scope and platforms have not been independently confirmed. Thriving Gutters is visibly marked as a domain capture because its supplied image shows a parked domain. Preserve that distinction until an original project screenshot is supplied.

Hero background motion is specifically authorised by the September 2026 brief, replacing the earlier no-ambient-animation rule for this section only. It has no visible playback control; respect the visitor’s reduced-motion preference and confine pointer response to decorative background elements. Portrait and content remain governed by their existing motion rules.

## Do's and Don'ts

- Keep Digital Marketing & Web Development first in profile copy and metadata.
- Preserve all 20 projects and use optimised thumbnails separately from full-page previews.
- Maintain the user's existing staged edits; this refresh builds on them.
- Do not replace the portrait, rewrite historical employment titles, or fabricate project outcomes.

## Reconciliation

The earlier `docs/portfolio-design-system.md` named an uppercase sans display face; the established runtime now uses the serif stack documented here. This document adopts the runtime typography. The user explicitly requested background motion and a grid, superseding the earlier static-background and asymmetric-project recommendations for these components. Shared palette tokens remain unchanged.
