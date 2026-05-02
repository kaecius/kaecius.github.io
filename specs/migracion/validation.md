# Validation Criteria — kaecius.github.io Redesign

This document defines the specific criteria that must be met for the project to be considered complete and successfully deployed. All items must be checked and passing.

## 1. Functional Validation

### 1.1 Core Content
- [ ] The hero section displays the title `/dev/daniel` in a monospaced font.
- [ ] The hero section displays the tagline `Plan, Build, Validate`.
- [ ] The "About" section contains a professional bio.
- [ ] The "Work Experience" section lists all roles from the original `portfolio.js` in reverse chronological order.
- [ ] Each experience entry includes: Role, Company, Date Range, Location, and at least one bullet point.
- [ ] The "Education" section lists all degrees from the original `portfolio.js`.
- [ ] The "Skills" section lists all skills from the original `portfolio.js`, categorized correctly.
- [ ] The "Projects" section lists all projects from the original `portfolio.js`.
- [ ] The "Contact" section displays the email `dcanadillas.github@outlook.com` and a link to the LinkedIn profile.

### 1.2 Navigation & UX
- [ ] The header navigation is sticky (or fixed) at the top of the viewport.
- [ ] Clicking a navigation link smoothly scrolls the page to the corresponding section.
- [ ] The active section is visually indicated in the navigation (optional but recommended, e.g., an underline or highlight).
- [ ] All external links (GitHub, LinkedIn, Email) open in a new tab (`target="_blank"`) and have the correct URLs.

### 1.3 Internationalization (i18n)
- [ ] The site defaults to the English language.
- [ ] A language switcher is present in the header.
- [ ] Clicking the language switcher changes all static UI text (e.g., section titles like "Work Experience", "Skills") to the selected language.
- [ ] Clicking the language switcher changes all content text (bio, experience bullets, project descriptions) to the selected language.
- [ ] The language preference persists across page reloads (using `localStorage`).

### 1.4 Responsiveness
- [ ] The layout is fully functional and visually correct on a **mobile** viewport (320px - 480px width).
- [ ] The layout is fully functional and visually correct on a **tablet** viewport (768px - 1024px width).
- [ ] The layout is fully functional and visually correct on a **desktop** viewport (1440px+ width).
- [ ] On mobile, the navigation collapses into a hamburger menu or remains a simple, non-breaking horizontal list.
- [ ] No horizontal scrolling occurs on any viewport size.

## 2. Visual & Design Validation

### 2.1 Aesthetic Consistency
- [ ] The site uses a **permanently dark** color scheme.
- [ ] The background color is a deep dark shade (e.g., `#0a0a0a`, `#111111`).
- [ ] The primary text color is a light shade (e.g., `#e0e0e0`, `#f0f0f0`).
- [ ] The accent color is used consistently for interactive elements and highlights.
- [ ] The typography uses a **monospaced font** (e.g., Geist Mono) for all metadata, navigation, dates, and code snippets.
- [ ] The typography uses a **sans-serif font** (e.g., Geist Sans, Inter) for body text and headings.

### 2.2 Interactions
- [ ] All text links have an **inverted hover effect**: the background color changes to the accent color, and the text color changes to the background color.
- [ ] Buttons (if any) have a clear hover state.
- [ ] The hover transitions are smooth (e.g., `transition: all 0.2s ease-in-out`).

### 2.3 Components
- [ ] The `Terminal` component (if used) renders correctly with a header (traffic lights) and a body for content.
- [ ] The `Browser` component (if used) renders correctly with a toolbar and a content area.

## 3. Technical Validation

### 3.1 Performance
- [ ] A Lighthouse audit in Chrome DevTools yields a **Performance score of 95 or higher**.
- [ ] A Lighthouse audit yields an **Accessibility score of 95 or higher**.
- [ ] A Lighthouse audit yields a **Best Practices score of 95 or higher**.
- [ ] A Lighthouse audit yields an **SEO score of 95 or higher**.

### 3.2 SEO & Meta
- [ ] The `<title>` tag is set correctly (e.g., `/dev/daniel | Software Engineer`).
- [ ] The `<meta name="description">` tag is present and descriptive.
- [ ] Open Graph meta tags (`og:title`, `og:description`, `og:image`, `og:url`) are present in the page `<head>`.
- [ ] Twitter Card meta tags are present.
- [ ] JSON-LD structured data for `Person` is present.
- [ ] A `sitemap.xml` is generated and accessible at `/sitemap.xml`.
- [ ] A `robots.txt` is present and allows indexing.

### 3.3 Build & Deploy
- [ ] The command `npm run build` completes without errors.
- [ ] The `dist/` folder is generated and contains the static site files.
- [ ] The site is successfully deployed to GitHub Pages.
- [ ] The live site at `kaecius.github.io` loads without 404 errors.
- [ ] All assets (CSS, fonts, images) load correctly on the live site (no broken links).

## 4. End-to-End (E2E) Testing

All Playwright tests must pass. The test suite must cover:

- [ ] **Homepage Load**: The page loads, and the hero title `/dev/daniel` is visible within 2 seconds.
- [ ] **Section Visibility**: All major sections (Hero, About, Experience, Education, Skills, Projects, Contact) are visible on the page.
- [ ] **Navigation**: Clicking a navigation link scrolls the viewport so the target section's heading is at the top.
- [ ] **Language Switching**: Changing the language updates the text of at least one section title and one piece of content.
- [ ] **External Links**: Clicking the GitHub link navigates to `https://github.com/kaecius`. Clicking the LinkedIn link navigates to the correct URL.
- [ ] **Responsive Layout**: On a mobile viewport, the navigation does not overflow horizontally, and all sections are stacked vertically.

## 5. Content Accuracy

- [ ] All data from the original `src/portfolio.js` has been migrated without loss of information.
- [ ] All dates, company names, and job titles are accurate to the original data.
- [ ] All project links (GitHub, demo) are correct and functional.

---

**Sign-off:**

Once all checkboxes above are marked as complete, the project is ready for final review and can be considered finished.
