# Implementation Plan — kaecius.github.io Redesign

This plan outlines the step-by-step execution for rebuilding the portfolio. Each step is designed to be a concrete, actionable task.

## Phase 0: Destruction & Backup

1.  **Backup Data**: Create a temporary copy of `src/portfolio.js` outside the repository to ensure no data is lost during the destruction phase.
2.  **Destroy Project**: Delete all files and folders in the repository root **except**:
    *   `.git/`
    *   `.gitignore`
    *   `CNAME` (if it exists)
    *   `README.md` (can be overwritten later)
    *   The backed-up `portfolio.js`.

## Phase 1: Project Setup

1.  **Initialize Astro**:
    *   Run `npm create astro@latest . -- --template minimal --install --git false`.
    *   Select TypeScript when prompted.
2.  **Configure Astro**:
    *   Update `astro.config.mjs` to set `output: 'static'` and configure the `site` and `base` properties for GitHub Pages (e.g., `site: 'https://kaecius.github.io'`).
3.  **Install Dependencies**:
    *   `npm install @fontsource/geist-mono @fontsource/geist-sans`
    *   `npm install -D @astrojs/sitemap`
    *   `npm install -D playwright @playwright/test`
4.  **Project Structure**:
    *   Create the following directory structure:
        ```
        src/
        ├── components/
        │   ├── ui/          # Reusable UI components (Terminal, Browser)
        │   ├── layout/      # Layout components (Header, Footer, Nav)
        │   └── sections/    # Page sections (Hero, About, Experience, etc.)
        ├── layouts/
        │   └── Layout.astro # Main page layout
        ├── pages/
        │   └── index.astro  # Single main page
        ├── data/
        │   └── portfolio.ts # Migrated data from portfolio.js
        ├── i18n/
        │   ├── en.json      # English translations
        │   └── es.json      # Spanish translations
        ├── styles/
        │   └── global.css   # Global styles and CSS variables
        └── types/
            └── index.ts     # Shared TypeScript types
        ```

## Phase 2: Global Styles & Layout

1.  **Define CSS Variables**:
    *   In `src/styles/global.css`, define the color palette, typography scales, and spacing using CSS Custom Properties (e.g., `--color-bg`, `--color-text`, `--font-mono`, `--font-sans`).
2.  **Import Fonts**:
    *   Import Geist Mono and Geist Sans in `global.css` or via `<link>` tags in the Layout.
3.  **Create Main Layout**:
    *   Build `src/layouts/Layout.astro`.
    *   It must include the HTML `<head>` with meta tags, charset, viewport, favicon, and SEO tags (title, description, Open Graph, JSON-LD).
    *   It must wrap the page content and include the global styles.

## Phase 3: Data Migration & i18n Setup

1.  **Migrate Data**:
    *   Convert the backed-up `portfolio.js` into a TypeScript object inside `src/data/portfolio.ts`.
    *   Ensure all arrays (skills, experience, projects) are strongly typed using interfaces defined in `src/types/index.ts`.
2.  **Setup i18n**:
    *   Create `src/i18n/en.json` and `src/i18n/es.json`.
    *   Populate them with translations for all UI strings (e.g., section titles like "Work Experience", "Skills", button text).
    *   Create a simple i18n helper utility (e.g., `src/i18n/index.ts`) that loads the correct JSON based on a selected locale and provides a `t(key)` function.

## Phase 4: Core UI Components

1.  **Header/Navigation** (`src/components/layout/Nav.astro`):
    *   Sticky header at the top.
    *   Contains anchor links to all sections (`#about`, `#experience`, etc.).
    *   Contains the language switcher (`[EN] [ES]`).
    *   Uses the monospaced font for all text.
2.  **Footer** (`src/components/layout/Footer.astro`):
    *   Simple footer with copyright and social links.
3.  **Terminal Component** (`src/components/ui/Terminal.astro`):
    *   Accepts props: `title` (window title), `content` (array of strings for lines).
    *   Renders a styled container with a header (red/yellow/green dots) and a body where each line of content is displayed.
    *   Use the monospaced font.
4.  **Browser Component** (`src/components/ui/Browser.astro`):
    *   Accepts props: `url`, `children` (for the content inside the browser window).
    *   Renders a styled container with a toolbar (back/forward buttons, address bar) and a content area.

## Phase 5: Section Components

Build each section as a separate Astro component in `src/components/sections/`. Each component will import data from `src/data/portfolio.ts` and use the `t()` function for text.

1.  **Hero** (`Hero.astro`):
    *   Render `/dev/daniel` (using a monospaced font).
    *   Render `Plan, Build, Validate`.
    *   Render the sub-tagline.
    *   Render a list of social links (GitHub, LinkedIn, Email).
2.  **About** (`About.astro`):
    *   Render the bio text from the data.
3.  **Experience** (`Experience.astro`):
    *   Iterate over the `experience` array from the data.
    *   For each item, render the role, company, date, and bullets.
    *   Style as a vertical timeline or a list of cards.
4.  **Education** (`Education.astro`):
    *   Iterate over the `degrees` array.
    *   Render degree, institution, date, and description.
5.  **Skills** (`Skills.astro`):
    *   Iterate over skill categories.
    *   For each skill, render the name and a visual proficiency indicator.
6.  **Projects** (`Projects.astro`):
    *   Iterate over the `projects` array.
    *   For each project, render the title, description, tech stack, and links.
    *   Optionally wrap a screenshot or description inside a `Browser` or `Terminal` component for visual flair.
7.  **Contact** (`Contact.astro`):
    *   Render the email address and a large, prominent link to the LinkedIn profile.

## Phase 6: Main Page Assembly

1.  **Build `src/pages/index.astro`**:
    *   Use the `Layout.astro`.
    *   Import all section components.
    *   Arrange them in the correct order: Hero, About, Experience, Education, Skills, Projects, Contact.
    *   Ensure each section has the correct `id` attribute for anchor navigation (e.g., `<section id="about">`).

## Phase 7: Interactivity & Polish

1.  **Language Switching**:
    *   Implement the logic in the `Nav` component. Clicking `ES` or `EN` should update a global state (e.g., a reactive variable or localStorage) and re-render the page content.
    *   Ensure the `t()` function reacts to this state change.
2.  **Smooth Scrolling**:
    *   Add `scroll-behavior: smooth` to the global CSS.
3.  **Hover Effects**:
    *   Verify all links and interactive elements have the inverted hover effect defined in the requirements.
4.  **Responsive Design**:
    *   Test and adjust layouts for mobile, tablet, and desktop using CSS media queries.
    *   Ensure the single-column layout on mobile stacks sections correctly.

## Phase 8: Testing

1.  **Setup Playwright**:
    *   Ensure `playwright.config.ts` is correctly set up to test the built static site.
2.  **Write E2E Tests**:
    *   `homepage-loads.spec.ts`: Verifies the page loads and the hero title `/dev/daniel` is visible.
    *   `navigation.spec.ts`: Verifies clicking a nav link scrolls to the correct section.
    *   `i18n.spec.ts`: Verifies switching language updates text content.
    *   `links.spec.ts`: Verifies all external links (GitHub, LinkedIn, Email) have the correct `href`.
    *   `responsive.spec.ts`: Verifies key elements are visible at different viewport sizes.
3.  **Run Tests**:
    *   Run `npm run build` to create the static site.
    *   Run `npx playwright test`.
    *   Fix any failing tests.

## Phase 9: Deployment

1.  **GitHub Actions Workflow**:
    *   Create `.github/workflows/deploy.yml`.
    *   It should trigger on pushes to `main`.
    *   Steps: Checkout code, setup Node.js, install dependencies, build the Astro site, deploy the `dist/` folder to the `gh-pages` branch.
2.  **Configure Repository**:
    *   In the GitHub repository settings, set the Pages source to the `gh-pages` branch.
3.  **Deploy**:
    *   Push the `main` branch.
    *   Verify the workflow runs successfully and the site is live at `kaecius.github.io`.

## Phase 10: Final Validation

1.  **Lighthouse Audit**:
    *   Run a Lighthouse audit in Chrome DevTools.
    *   Ensure all scores (Performance, Accessibility, Best Practices, SEO) are 95+.
    *   Address any issues.
2.  **Manual QA**:
    *   Visually inspect the site on multiple devices/browsers.
    *   Verify all data from the original `portfolio.js` is present and correct.
3.  **Cleanup**:
    *   Remove any temporary backup files.
    *   Update `README.md` with instructions on how to build and deploy the new site.
