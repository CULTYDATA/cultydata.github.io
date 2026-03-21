# Cultydata Studio — Redesign Implementation Plan

## Design Direction: Quantum Kandinsky

**Concept**: Black & white sober base inspired by Kandinsky's geometric abstraction. Clean monochrome foundation with bold geometric accents (circles, intersecting lines, triangles) used sparingly. The "quantum" dimension brings connected nodes, entanglement visuals, and network diagrams — a perfect metaphor for the human + AI agent model.

**Visual language**:
- Monochrome base (black, white, grays)
- Geometric decorative elements: circles, lines, arcs — referencing Kandinsky's compositional style
- Primary-color accents used very sparingly (a single red circle, a blue line) to draw the eye
- Network/node visuals for the AI agent concept (connected dots = quantum entanglement)
- Lots of whitespace, precise spacing, typographic confidence

---

## Step 1: Design System Foundation — SCSS Modularization & Variables

### 1.1 Create SCSS partials structure

Create `/src/styles/scss/` with:

**`_variables.scss`**:
```scss
// Kandinsky Quantum palette
$white: #ffffff;
$off-white: #fafafa;
$gray-100: #f5f5f5;
$gray-200: #e5e5e5;
$gray-300: #d4d4d4;
$gray-400: #a3a3a3;
$gray-500: #737373;
$gray-600: #525252;
$gray-700: #404040;
$gray-800: #262626;
$gray-900: #171717;
$black: #0a0a0a;

// Kandinsky accents — used very sparingly
$accent-blue: #2563eb;    // For interactive elements, links, primary CTA
$accent-red: #dc2626;     // For a single geometric accent element
$accent-yellow: #eab308;  // For AI agent indicators
$accent-purple: #7c3aed;  // For AI-specific elements

// Semantic mappings
$main-color: $black;
$body-color: $gray-600;
$heading-color: $black;
$border-color: $gray-200;
$bg-light: $gray-100;
$bg-dark: $gray-900;
$link-color: $accent-blue;

$font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
$mono-font: "JetBrains Mono", monospace;
$font-size: 16px;
$transition: 0.3s;
```

**`_base.scss`**: Body, typography, links, reset
**`_buttons.scss`**: Primary (black bg, white text), outline, ghost variants
**`_navbar.scss`**: Extracted from style.scss lines ~1009-1200
**`_hero.scss`**: New hero styles
**`_sections.scss`**: Section headers, approach, services, engagement, projects, CTA
**`_cards.scss`**: Card base styles
**`_footer.scss`**: Extracted from style.scss lines ~12800-12950
**`_page-banner.scss`**: Minimal page header (replaces template banner)
**`_responsive.scss`**: Keep existing responsive.scss content, updated
**`_kandinsky.scss`**: Geometric decoration elements (SVG circles, lines, arcs)
**`main.scss`**: Imports all partials

### 1.2 Update font import
Replace Sulphur Point with Inter + JetBrains Mono.

### 1.3 Button system
```scss
.btn-primary {
  background: $black;
  color: $white;
  border: 1px solid $black;
  // On hover: invert
  &:hover { background: $white; color: $black; }
}

.btn-outline {
  background: transparent;
  color: $black;
  border: 1px solid $black;
  &:hover { background: $black; color: $white; }
}
```

### 1.4 Section headers
Left-aligned with monospace label (JetBrains Mono, uppercase, small).

**Files**: Create new files in `src/styles/scss/`, update imports in `gatsby-browser.js`

---

## Step 2: Kandinsky Geometric Elements

### 2.1 Create SVG/CSS geometric decorations

Build a set of reusable Kandinsky-inspired geometric elements:
- **Circle**: Thin-stroked circle, positioned absolutely as section decoration
- **Line**: Diagonal or horizontal thin line, used as a divider or accent
- **Arc**: Quarter-circle or semi-circle, used in hero and section transitions
- **Dot grid**: Small dot pattern (quantum reference)
- **Network**: Connected nodes for the AI agent visual

These will be CSS/SVG-based, zero image weight. A React component `<KandinskyDecor type="circle" color="red" />` renders them.

### 2.2 Color accent rules
- Maximum 1 colored geometric element per viewport
- All other geometric elements are black, gray, or white
- The accent color draws the eye to the most important element in each section

**Files**: New component `src/components/Common/KandinskyDecor.js`, new `_kandinsky.scss`

---

## Step 3: Landing Page — Full Redesign

### 3.1 Hero (`MainBanner.js`)

Two-column layout:
- **Left**: Monospace label + bold h1 + subtitle + two buttons (primary black + outline) + proof metrics
- **Right**: Kandinsky-inspired network diagram (CSS/SVG) — 3 solid circles (humans) connected by thin lines to 4 dashed circles (AI agents), with one red accent circle. Subtle pulse animation on AI nodes.
- **Background**: White with a large thin-stroked gray circle positioned partially off-screen (top-right)

Content:
```
Label: "AI-Augmented Builder"
H1: "We build AI-augmented organizations. Then we hand you the keys."
Subtitle: Short description of the model
CTA1: "Start a project" (black)
CTA2: "See our work" (outline)
Proof: "50+ years combined" | "100% ownership transferred"
```

### 3.2 Our Approach (`OurApproach.js`)

3-column CSS Grid with numbered items (01, 02, 03 in JetBrains Mono).
- Card 01: Human expertise — black border
- Card 02: AI agents — dashed border + small yellow dot accent (AI indicator)
- Card 03: Handover — black border
- Geometric decoration: thin diagonal line crossing behind the grid

### 3.3 Services (`OurServices.js`)

Horizontal list layout (icon left, text center, arrow right). White cards on light gray background.
- Add 4th service: AI-Augmented Organization Setup
- Use SVG icons (already exist: blockchain1.svg, datascience1.svg, fullstack1.svg)
- Hover: black left-border appears

### 3.4 Engagement Models (`OurEngagementModel.js`)

3-column grid, centered headers. Middle card (BOT) gets a black top-border and slightly different background to signal it's the primary model. Remove boxicons entirely. Clean text-only cards.

### 3.5 Projects (`OurProjects.js`)

Alternating two-column rows (image left/right). Larger, more impactful. Geometric accent: thin arc in top corner of image container.

### 3.6 CTA (`StartProject.js`)

Black background, white text. Simple and bold. Single blue CTA button as the only color on the section.

### 3.7 Translation updates

Add new keys to both EN and FR:
- `home.mainBanner.label`
- `home.mainBanner.proof1`, `home.mainBanner.proof2`
- `home.button.viewCases`

**Files**: All components in `src/components/Index2/`, translation files

---

## Step 4: Navbar & Footer

### 4.1 Navbar (`Navbar.js`)

- Flatten navigation: "About" → direct link (no dropdown)
- Remove `window.location.reload()` anti-pattern
- Sticky style: white bg + thin bottom border, no shadow
- CTA button: black `.btn-primary`
- Language switcher: keep, restyle with monospace font

### 4.2 Footer (`Footer.js`)

- Black background, white text (matches new CTA section)
- 3 columns: Logo+tagline | Nav links | Contact info
- Fix `.slogan` font-size bug (currently 5px → 15px)
- Geometric accent: thin white circle, partially off-screen, bottom-left

**Files**: `src/components/_App/Navbar.js`, `src/components/_App/Footer.js`, navbar/footer SCSS

---

## Step 5: PageBanner & Inner Pages

### 5.1 PageBanner (`PageBanner.js`)

- Remove background image (`page-title-bg.jpg`)
- Remove all shape decorations (shape1.svg, shape2.png, shape3.png)
- Remove AOS animations
- Solid white background, left-aligned text
- Breadcrumb in monospace with `/` separators
- Single thin horizontal line below

### 5.2 About Us page

- Update `AboutUsContent.js`: tighter text, remove checklist features, replace with 2-3 bullets
- Merge `WhyChooseUs` + `OurValueProposition` into one section
- Apply new card/typography styles

### 5.3 Team page

- Apply new card styles to human team members
- `AIAgents.js`: Extract inline styles to SCSS, use purple/yellow accents for AI cards, dashed borders
- Geometric decoration: network diagram connecting human + AI cards

### 5.4 Service pages

- Apply new PageBanner, typography, card styles
- Mostly cascading changes from design system

### 5.5 Contact page

- Fix `class` → `className` bug in ContactForm.js
- Apply new styles

### 5.6 Case Studies

- Apply new styles (cascading)

**Files**: `src/components/Common/PageBanner.js`, about/team/service/contact/case-study components

---

## Step 6: SCSS Cleanup & Unused Code Removal

### 6.1 Remove unused template CSS

The style.scss file contains ~8,000 lines of CSS for features that don't exist on this site: courses, cart, checkout, events, products, galleries, FAQ, blog, etc. Audit which classes are actually used in JSX and delete the rest.

### 6.2 Remove unused images

Delete template images not referenced by any component: `team1-7.jpg`, `user1-6.jpg`, shape images (after PageBanner refactor), etc.

### 6.3 Remove unused routes

Verify and remove pages for blog, courses, FAQ, coming-soon if they have no content.

**Files**: `src/styles/css/style.scss` (bulk deletion), `src/images/` cleanup, `src/pages/` audit

---

## Step 7: Testing & Polish

### 7.1 Bilingual verification
- Check every page in both EN and FR
- Verify all new translation keys exist in both files

### 7.2 Responsive testing
- Verify all breakpoints work with new grid layouts
- Update responsive.scss for new components

### 7.3 Build verification
```bash
npm run build && npm run serve
```

### 7.4 Lighthouse audit
- Performance (image weight, unused CSS reduction)
- Accessibility (contrast ratios with B&W palette)
- SEO (meta descriptions updated)

---

## Implementation Notes

- **Preserve existing Gatsby/i18n infrastructure** — no changes to gatsby-config.js, gatsby-node.js, or translation loading
- **Incremental approach**: Change SCSS variables first (cascades everywhere), then refactor components one by one
- **The monolithic style.scss risk**: Don't delete sections until confirming no JSX references them. Use grep to verify.
- **Commit after each step** for easy rollback
