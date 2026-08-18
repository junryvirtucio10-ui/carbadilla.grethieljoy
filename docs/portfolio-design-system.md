# Grethiel Joy Portfolio Design System

Version 1.0 — August 2026

## Purpose

This system translates the cocoa, gold, off-white, and blue visual language of Grethiel Joy's resume into an accessible digital portfolio. It is designed for small-business clients, creative teams, and hiring managers.

The portfolio has one job: make Grethiel's multidisciplinary range feel focused, show the quality of the work, and make starting a conversation easy.

## Brand character

- Clear, warm, capable, hands-on, optimistic, and precise.
- Use strong structure before decoration.
- Let gold mark actions and authorship.
- Use the offset gold frame only for featured work or major calls to action.
- Use the hand-drawn golden thread at most once per viewport.

## Colour tokens

| Token | Value | Use |
| --- | --- | --- |
| `--gj-brown-950` | `#3D1700` | Deep borders and contrast |
| `--gj-cocoa-900` | `#412D21` | Primary brand surfaces |
| `--gj-cocoa-700` | `#6A4E40` | Secondary text |
| `--gj-gold-600` | `#C58F15` | Muted lines and borders |
| `--gj-gold-500` | `#FFC700` | Primary actions and signature marks |
| `--gj-gold-300` | `#FFDE59` | Large highlights on dark surfaces |
| `--gj-gold-100` | `#F7E8B5` | Warm supporting surfaces |
| `--gj-studio-100` | `#F2EDE8` | Alternate page surface |
| `--gj-studio-50` | `#F8F8F8` | Main page surface and cards |
| `--gj-white` | `#FFFFFF` | Text and high-contrast cards |
| `--gj-blue-700` | `#004AAD` | Focus rings and functional links |

### Colour rules

- Use white, light gold, or golden yellow on cocoa backgrounds.
- Use deep brown for body text on studio white.
- Do not use small golden-yellow or muted-gold text on white.
- Keep blue functional: focus states, hyperlinks, and status information.
- Never communicate status with colour alone.

## Typography

### Roles

- Display: `Arial Black`, `Avenir Next`, Arial, sans-serif.
- Body: `Trebuchet MS`, `Segoe UI`, sans-serif.
- Utility: Consolas, `Courier New`, monospace.

The display face is uppercase, tightly spaced, and used for short headlines. The body face handles all reading copy. The utility face is reserved for labels, dates, tags, and project metadata.

### Scale

| Role | Size | Typical use |
| --- | --- | --- |
| Display | `clamp(4rem, 8vw, 9rem)` | Hero thesis |
| H1 | `4rem` | Page title |
| H2 | `3rem` | Section title |
| H3 | `1.75rem` | Card title |
| Lead | `1.25rem` | Opening copy |
| Body | `1rem` | Reading text |
| Supporting | `1rem` | Supporting text |
| Utility | `1rem` | Labels and data |

Body text uses a line height of 1.6–1.7 and a maximum measure of 65–70 characters. All visible text, including labels, captions, metadata, and navigation, has a hard minimum of 16px.

## Layout

- Maximum content width: 1280px.
- Desktop grid: 12 columns.
- Desktop gutter: 32–64px.
- Mobile gutter: 20px.
- Reading width: 65–70 characters.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, and 128px.

Use asymmetry to distinguish featured work, while keeping reading copy aligned to a stable grid.

## Shape, border, and shadow

- Small radius: 8px.
- Medium radius: 16px.
- Large radius: 28px.
- Pill radius: 999px.
- Standard border: 1px cocoa at 22% opacity.
- Featured border: 2–3px deep brown.
- Soft shadow: `0 24px 60px rgba(61, 23, 0, .14)`.
- Signature shadow: `12px 12px 0 #FFC700`.

## Components

### Buttons

- Primary: golden-yellow fill, deep-brown text, deep-brown border, offset shadow.
- Secondary: cocoa fill, white text, deep-brown border.
- Text action: dark text with a golden underline and a directional arrow.
- Minimum interactive height: 44px; preferred height: 48–52px.

### Project cards

Every case-study card should state:

1. Project type and role.
2. Project name.
3. The problem or intended outcome.
4. Relevant tools or capabilities.
5. A specific case-study action.

Reserve the offset frame for the featured project only.

### Tags

Use tags for tools, services, and project status. Do not use tags as substitutes for full descriptions.

### Forms

- Use visible labels above fields.
- Use sentence-case action labels that state what happens next.
- Keep error messages specific and place them next to the affected field.

## Motion

- Use one short entrance sequence for the hero.
- Use small directional motion on arrows and buttons.
- Keep interaction transitions between 140 and 220ms.
- Avoid continuous ambient animation.
- Respect `prefers-reduced-motion`.

## Voice

Write like a trusted collaborator: specific about the work, generous with context, and confident without exaggeration.

Prefer: “I designed and maintained responsive WordPress pages for a local service business.”

Avoid: “I deliver cutting-edge, world-class digital solutions that elevate brands.”

Use active voice, concrete verbs, sentence case, and verifiable outcomes.

## Accessibility checklist

- Keep body copy at 16px or larger.
- Preserve visible keyboard focus using blue focus rings.
- Maintain 44px minimum touch targets.
- Use semantic heading order.
- Write descriptive link labels.
- Add useful alternative text to project imagery.
- Do not put small gold text on white.
- Respect reduced-motion preferences.
- Test layouts at 320px, 768px, and 1280px widths.

## Implementation

Foundation tokens are defined in `app/globals.css`. The live design-system reference is available at `/design-system`, with component examples in `app/design-system/page.tsx` and scoped presentation styles in `app/design-system/design-system.css`.
