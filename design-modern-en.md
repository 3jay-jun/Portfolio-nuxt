# Design System

## 1. Visual Theme & Atmosphere

This design language is the essence of confident minimalism — a black-and-white world where every pixel serves a purpose and decoration must earn its place. The entire experience is built on a stark duality: jet black (`#000000`) and pure white (`#ffffff`), with virtually no mid-tone grays diluting the message. This is not the hollow minimalism of a brand still figuring itself out — it is the deliberate restraint of a system where silence itself is authority.

The core typeface is **Pretendard**. A geometric, contemporary sans-serif family with a dense weight scale, it builds a complete typographic system from a single family — spanning display headlines down to captions without ever reaching for a second face. Pretendard Bold (700) at 52px delivers billboard-level headlines: authoritative, direct, unmistakable. Pretendard Medium (500) handles buttons and UI text with a softer, more readable character. Together they create a typographic system as clear and efficient as a transit map — built for scanning, not lingering.

What most distinctly defines this interface language is the combination of full-bleed photography and illustration with pill-shaped interactive elements (999px border-radius). Navigation chips, CTA buttons, and category selectors all share this capsule form, creating a tactile, thumb-friendly interface vocabulary. Warm, slightly stylized illustrations inject humanity into what could otherwise feel like a cold, monochrome system. The layout alternates between white content sections and a full-black footer, with card-based layouts using the gentlest shadows (rgba(0,0,0,0.12–0.16)) to create subtle lift without fracturing the flat aesthetic.

**Key Characteristics:**
- Pure black-and-white foundation — virtually no mid-tone grays in the UI chrome
- Pretendard single family — weight scale differentiates headlines from body
- Pill-shaped buttons, chips, and navigation items — 999px border-radius throughout
- Warm, human-centric illustrations contrasting the monochrome interface
- Card-based layouts with whisper-level shadows (0.12–0.16 opacity)
- 8px spacing grid with compact, information-dense layouts
- Bold photography used as full-bleed hero backgrounds
- Black footer anchors the page in a high-contrast environment

---

## 2. Color Palette & Roles

### Primary
- **Black** (`#000000`): The defining system color — used for primary buttons, headlines, navigation text, and the footer. Not "near-black" or "off-black," but true, uncompromising black.
- **Pure White** (`#ffffff`): The primary surface color and inverse text. Used for page backgrounds, card surfaces, and text on black elements.

### Interactive & Button States
- **Hover Gray** (`#e2e2e2`): White button hover state — a clean, cool light gray that provides clear feedback without warmth.
- **Hover Light** (`#f3f3f3`): Subtle hover for elevated white buttons — a barely-there gray for gentle interaction feedback.
- **Chip Gray** (`#efefef`): Background for secondary/filter buttons and navigation chips — a neutral, ultra-light gray.

### Text & Content
- **Body Gray** (`#4b4b4b`): Secondary text and footer links — a true mid-gray with no warm or cool bias.
- **Muted Gray** (`#afafaf`): Tertiary text, de-emphasized footer links, and placeholder content.

### Borders & Separation
- **Border Black** (`#000000`): Thin 1px borders for structural containment — used sparingly on dividers and form containers.

### Shadows & Depth
- **Shadow Light** (`rgba(0, 0, 0, 0.12)`): Standard card elevation — a featherweight lift for content cards.
- **Shadow Medium** (`rgba(0, 0, 0, 0.16)`): Slightly stronger elevation for floating action buttons and overlays.
- **Button Press** (`rgba(0, 0, 0, 0.08)`): Inset shadow for active/pressed states on secondary buttons.

### Link States
- **Default Link Blue** (`#0000ee`): Standard browser blue for underlined text links — used in body content.
- **Link White** (`#ffffff`): Links on dark surfaces — used in footer and dark sections.
- **Link Black** (`#000000`): Links on light surfaces with underline decoration.

### Gradient System
This design system is **entirely gradient-free**. The black/white duality and flat color blocks create all visual hierarchy. No gradients appear anywhere in the system — every surface is a solid color, every transition is a hard edge or a shadow.

---

## 3. Typography Rules

### Font Family
**Pretendard** single family is used across all contexts. Roles are differentiated by weight alone — both headlines and UI text are solved entirely within the Pretendard family.

```css
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-Thin.woff2') format('woff2');
  font-weight: 100;
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-ExtraLight.woff2') format('woff2');
  font-weight: 200;
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-Light.woff2') format('woff2');
  font-weight: 300;
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-Medium.woff2') format('woff2');
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-ExtraBold.woff2') format('woff2');
  font-weight: 800;
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-Black.woff2') format('woff2');
  font-weight: 900;
  font-display: swap;
}

/* Base application */
body {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}
```

### Available Weights

| Weight | File | Intended Use |
|--------|------|--------------|
| 100 (Thin) | Pretendard-Thin.woff2 | Decorative large display, logo support |
| 200 (ExtraLight) | Pretendard-ExtraLight.woff2 | Sub-hero, intro text |
| 300 (Light) | Pretendard-Light.woff2 | Supporting body, captions |
| 400 (Regular) | Pretendard-Regular.woff2 | Default body text |
| 500 (Medium) | Pretendard-Medium.woff2 | UI text, buttons, navigation |
| 600 (SemiBold) | Pretendard-SemiBold.woff2 | Sub-headings, emphasis labels |
| 700 (Bold) | Pretendard-Bold.woff2 | Section headings, card titles |
| 800 (ExtraBold) | Pretendard-ExtraBold.woff2 | Major headings |
| 900 (Black) | Pretendard-Black.woff2 | Display / hero, billboard headlines |

### Typography Hierarchy

| Role | Weight | Size | Line Height | Notes |
|------|--------|------|-------------|-------|
| Display / Hero | 900 (Black) | 52px (3.25rem) | 1.23 | Maximum impact, billboard presence |
| Section Heading | 800 (ExtraBold) | 36px (2.25rem) | 1.22 | Major section anchors |
| Card Title | 700 (Bold) | 32px (2rem) | 1.25 | Card and feature headings |
| Sub-heading | 700 (Bold) | 24px (1.5rem) | 1.33 | Secondary section headers |
| Small Heading | 600 (SemiBold) | 20px (1.25rem) | 1.40 | Compact headings, list titles |
| Nav / UI Large | 500 (Medium) | 18px (1.13rem) | 1.33 | Navigation links, prominent UI text |
| Body / Button | 400–500 | 16px (1rem) | 1.25–1.50 | Standard body text, button labels |
| Caption | 400–500 | 14px (0.88rem) | 1.14–1.43 | Metadata, descriptions, small links |
| Micro | 300–400 | 12px (0.75rem) | 1.67 | Fine print, legal text |

### Principles
- **Heavy headlines, medium body**: Headlines use weight 800–900 — every headline hits with billboard force. Body and UI text uses 400–500, creating a clear visual hierarchy through weight contrast.
- **Tight heading line-heights**: All headlines use line-heights between 1.22–1.40 — compact and punchy, designed for scanning rather than reading.
- **Functional typography**: There is no decorative type treatment anywhere. No letter-spacing adjustments, no text-transform, no ornamental sizing. Every text element serves a direct communication purpose.
- **Single family, weight defines role**: Pretendard covers every text role. The weight scale — not a second typeface — draws the line between headlines and UI.

---

## 4. Component Stylings

### Buttons

**Primary Black (CTA)**
```css
background: #000000;
color: #ffffff;
padding: 10px 12px;
border-radius: 999px;
border: none;
font-family: 'Pretendard', sans-serif;
font-weight: 500;
font-size: 16px;
/* Focus */
box-shadow: inset rgb(255,255,255) 0px 0px 0px 2px;
```
The primary action button — bold, high-contrast, unmissable.

**Secondary White**
```css
background: #ffffff;
color: #000000;
padding: 10px 12px;
border-radius: 999px;
/* Hover */
background: #e2e2e2;
```
Used on dark surfaces or as a secondary action alongside Primary Black.

**Chip / Filter**
```css
background: #efefef;
color: #000000;
padding: 14px 16px;
border-radius: 999px;
font-weight: 500;
font-size: 14px;
/* Active */
box-shadow: inset rgba(0,0,0,0.08) 0px 0px 0px 999px;
```
Navigation chips, category selectors, filter toggles.

**Floating Action**
```css
background: #ffffff;
color: #000000;
padding: 14px;
border-radius: 999px;
box-shadow: rgba(0,0,0,0.16) 0px 2px 8px 0px;
transform: translateY(2px);
/* Hover */
background: #f3f3f3;
```
Map controls, scroll-to-top, floating CTAs.

---

### Cards & Containers
```css
background: #ffffff;
border-radius: 8px;              /* Standard card */
border-radius: 12px;             /* Featured / promoted card */
box-shadow: rgba(0,0,0,0.12) 0px 4px 16px 0px;
```
- No border — cards are defined by shadow, not stroke
- Image-led cards use full-bleed imagery with text overlay or text below
- Internal padding approximately 24–32px to maintain information density

---

### Inputs & Forms
```css
color: #000000;
background: #ffffff;
border: 1px solid #000000;
border-radius: 8px;
font-family: 'Pretendard', sans-serif;
font-weight: 400;
font-size: 16px;
```
- The only place in the system where a visible border appears prominently
- Focus: relies on standard browser focus ring

---

### Navigation
```css
/* Sticky top navigation */
background: #ffffff;
position: sticky;
top: 0;

/* Navigation links */
font-family: 'Pretendard', sans-serif;
font-weight: 500;
font-size: 14px–18px;
color: #000000;

/* Category chips */
background: #efefef;
border-radius: 999px;
padding: 14px 16px;
```
- Logo: pinned to the left
- Category navigation: horizontal row of pill chips
- Menu toggle: circular button with `border-radius: 50%`
- Mobile: hamburger menu pattern

---

### Image Treatment
- Warm, hand-illustrated scenes preferred over photography for feature sections
- Illustration style: slightly stylized figures, warm color palette within illustrations, contemporary sensibility
- Hero sections: bold photography or illustration as full-width background
- Card imagery: `border-radius: 8px` or `12px` when contained

---

### Distinctive Components

**Category Pill Navigation**
```css
/* Container */
display: flex;
gap: 8px;
overflow-x: auto;

/* Each chip */
background: #efefef;
color: #000000;
border-radius: 999px;
padding: 14px 16px;
font-weight: 500;
font-size: 14px;
white-space: nowrap;

/* Active state */
background: #000000;
color: #ffffff;
```

**Hero with Dual Action**
- Left: text + CTA, Right: map or illustration
- Pickup/destination input fields side by side
- Black pill CTA button

**Feature Cards**
- Warm, human-centric illustration as the visual focal point
- Black pill CTA button at the bottom
- Background: Pure White, elevation expressed through shadow

---

## 5. Layout Principles

### Spacing System
```
Base unit:          8px
Scale:              4 / 6 / 8 / 10 / 12 / 14 / 16 / 18 / 20 / 24 / 32px

Button padding:     10px 12px (compact) / 14px 16px (comfortable)
Card inner padding: 24–32px
Section spacing:    64–96px between major sections
```

### Grid & Container
```
Max container width:  1136px (centered)
Hero:                 Split — text left, visual right
Feature sections:     2-column card grid or full-width single column
Footer:               Multi-column link grid, black background
```

### Whitespace Philosophy
- **Efficient, not airy**: Whitespace is functional — enough to separate, never enough to feel empty. Transit-system spacing: compact, clear, purpose-driven.
- **Information-dense cards**: Cards pack content tightly with minimal internal spacing, using shadow and radius to define boundaries rather than breathing room.
- **Section breathing room**: Major sections receive generous vertical spacing, but elements within sections are closely grouped.

### Border Radius Scale

| Value | Use |
|-------|-----|
| 0px | No sharp corners on interactive elements |
| 8px | Content cards, input fields, listboxes |
| 12px | Featured cards, larger containers, link cards |
| 999px | All buttons, chips, navigation items, pills |
| 50% | Avatar images, icon containers, circular controls |

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow, solid background | Page background, inline content, text sections |
| Subtle (1) | `rgba(0,0,0,0.12) 0px 4px 16px` | Standard content cards, feature blocks |
| Medium (2) | `rgba(0,0,0,0.16) 0px 4px 16px` | Elevated cards, overlay elements |
| Floating (3) | `rgba(0,0,0,0.16) 0px 2px 8px` + `translateY(2px)` | Floating action buttons, map controls |
| Pressed (4) | `rgba(0,0,0,0.08) inset` | Active / pressed button states |
| Focus Ring | `rgb(255,255,255) 0px 0px 0px 2px inset` | Keyboard focus indicators |

**Shadow philosophy**: Shadows are used purely as a structural tool, never decoratively. They are always black at very low opacity (0.08–0.16), creating the bare minimum lift needed to separate content layers. Blur radii are moderate (8–16px) — enough to feel natural, never dramatic. No colored shadows, no layered shadow stacks, no ambient glow effects. Depth is communicated more through black/white section contrast than through shadow elevation.

---

## 7. Do's and Don'ts

### ✅ Do
- Use true black (`#000000`) and pure white (`#ffffff`) as the primary palette — the stark contrast is the system's identity
- Apply 999px border-radius to all buttons, chips, and pill-shaped navigation elements
- Use Pretendard weight 900–800 for billboard-level headline impact
- Use whisper-level shadows (0.12–0.16 opacity) for card elevation
- Maintain compact, information-dense layouts
- Use warm, human-centric illustrations to soften the monochrome interface
- Apply 8px radius to content cards and 12px to featured containers
- Use Pretendard Medium (500) for navigation and prominent UI text
- Pair black primary buttons with white secondary buttons in dual-action layouts

### ❌ Don't
- Don't introduce color into the UI chrome — the interface is strictly black, white, and gray
- Don't use border-radius less than 999px on buttons — the full-pill shape is a core identity element
- Don't apply heavy or high-opacity shadows — depth must feel whisper-subtle
- Don't use serif fonts — typography is exclusively Pretendard (geometric sans-serif)
- Don't create airy layouts with excessive whitespace — information density is intentional
- Don't use gradients or color overlays — every surface is a flat, solid color
- Don't use decorative borders — borders are functional (inputs, dividers) or absent entirely
- Don't dilute the black/white contrast with off-whites or near-blacks — the duality is deliberate

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | 320px | Minimum layout, single column, stacked inputs, compact typography |
| Mobile | 600px | Standard mobile, stacked layout, hamburger nav |
| Tablet Small | 768px | Two-column grids begin, expanded card layouts |
| Tablet | 1119px | Full tablet layout, side-by-side hero content |
| Desktop Small | 1120px | Desktop grid activates, horizontal nav pills |
| Desktop | 1136px | Full desktop layout, maximum container width, split hero |

### Touch Targets
- All pill buttons: minimum 44px height (10–14px vertical padding + line-height)
- Navigation chips: 14px 16px padding for comfortable thumb tapping
- Circular controls (menu, close): 50% radius ensures large, easy-to-hit targets
- Card surfaces serve as full-area touch targets on mobile

### Collapsing Strategy
- **Navigation**: Horizontal pill nav collapses to hamburger menu with circular toggle
- **Hero**: Split layout (text + visual) stacks to single column — text above, visual below
- **Input fields**: Side-by-side inputs stack vertically
- **Feature cards**: 2-column grid collapses to full-width stacked cards
- **Headings**: 52px display scales down through 36px → 32px → 24px → 20px
- **Footer**: Multi-column link grid collapses to accordion or stacked single column
- **Category pills**: Horizontal scroll with overflow on smaller screens

### Image Behavior
- Illustrations scale proportionally within their containers
- Hero imagery maintains aspect ratio, may crop on smaller screens
- Card imagery maintains 8–12px radius at all sizes

---

## 9. Quick Reference & Prompt Guide

### Color Quick Reference
```
Primary button:           #000000
Page background:          #ffffff
Button text (on black):   #ffffff
Button text (on white):   #000000
Secondary text:           #4b4b4b
Tertiary text:            #afafaf
Chip background:          #efefef
Hover state:              #e2e2e2
Card shadow:              rgba(0,0,0,0.12) 0px 4px 16px
Footer background:        #000000
```

### Example Component Prompts
- "Hero section on Pure White (`#ffffff`). Pretendard Black (900) headline at 52px, line-height 1.23, color `#000000`. Subtitle in Body Gray (`#4b4b4b`), Pretendard Regular (400) 16px, line-height 1.50. Black pill CTA button: `#000000` background, white text, 999px radius, padding 10px 12px."
- "Horizontal pill chip navigation bar. Each chip: `#efefef` background, `#000000` text, 14px 16px padding, 999px radius, Pretendard Medium (500) 14px. Active chip inverts to black background with white text."
- "Feature card on Pure White, 8px radius, shadow `rgba(0,0,0,0.12) 0px 4px 16px`. Title: Pretendard Bold (700) 24px. Description: Body Gray (`#4b4b4b`), Pretendard Regular (400) 16px. Black pill CTA button at the bottom."
- "Dark footer on `#000000` background. Pure White headings in Pretendard ExtraBold (800) 20px. Footer links in Muted Gray (`#afafaf`), Pretendard Regular (400) 14px. Links hover to Pure White. Multi-column grid layout."
- "Floating action button: Pure White background, 999px radius, 14px padding, shadow `rgba(0,0,0,0.16) 0px 2px 8px`. Hover shifts background to `#f3f3f3`."

### Iteration Guide
1. Focus on **one component at a time**
2. Reference the strict black/white palette explicitly — use "Black (`#000000`)" not just "dark"
3. Always specify 999px radius for buttons and pills — non-negotiable
4. Describe font weight explicitly — "Pretendard Black (900) for the headline, Pretendard Medium (500) for the label"
5. For shadows, use "whisper shadow `rgba(0,0,0,0.12) 0px 4px 16px`" — never heavy
6. Keep layouts compact and information-dense — efficiency, not emptiness
7. Illustrations should be warm and human — describe "stylized figures in warm tones," not abstract shapes
8. Pair black and white buttons in balanced dual-action CTA layouts
