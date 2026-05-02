# Requirements — kaecius.github.io Redesign

## 1. Objective

Rebuild the personal portfolio of Daniel Kaecius from the ground up. The current React 16 codebase should be destroyed and replaced. The goal is to create a modern, technical, and memorable personal website that serves as a point of entry for investors and software engineers worldwide.

The design must be heavily inspired by [michaellivs.com](https://michaellivs.com/): a dark, terminal-style aesthetic with monospace typography for metadata, high information density, and a developer-first identity.

## 2. Scope

### In Scope
- Complete destruction of the current project (`developerFolio` based React 16 app).
- Rebuild as a static site using **Astro 5**.
- Single-page application with anchor navigation to all major sections.
- Migration of all professional information currently present in `src/portfolio.js`.
- Implementation of a custom dark theme with a terminal-inspired visual language.
- Internationalization (i18n) for English (default) and Spanish.
- Preparation of the site structure for a future blog, but no blog content yet.
- Custom UI components (Terminal, Browser) for showcasing projects.
- Full responsiveness (mobile, tablet, desktop).
- SEO optimization (meta tags, JSON-LD, sitemap).
- Automated deployment to GitHub Pages via GitHub Actions.
- End-to-end (E2E) testing with Playwright.

### Out of Scope (Future Iterations)
- Blog content and blog listing pages.
- Backend, API, or dynamic functionality (site must be 100% static).
- A dark/light mode toggle (the site will be permanently dark).

## 3. Functional Requirements

### 3.1 Structure & Navigation
The site will be a **single-page application** with the following sections, navigable via a sticky header:

1.  **Hero**: The main landing area.
    *   **Identity**: Display `/dev/daniel` as the main title, using a monospaced font.
    *   **Tagline**: Display `Plan, Build, Validate`.
    *   **Sub-tagline**: A 2-line description of the professional focus (e.g., "Software Engineer & Researcher. Building innovative systems from first principles.").
    *   **Navigation**: Links to all other sections: `[About] [Experience] [Education] [Skills] [Projects] [Contact]`.
    *   **Social Links**: Direct links to GitHub and LinkedIn profiles.
2.  **About**: A section detailing the professional persona.
    *   A concise bio focusing on the I+D (Research & Development) mindset and innovation-driven approach.
    *   No professional photo is required for this iteration.
3.  **Work Experience**: A chronological timeline (most recent first) of professional roles.
    *   Each entry must include: Role, Company, Date Range, Location, and a list of key achievements/responsibilities.
    *   The data must be sourced from the current `portfolio.js`.
4.  **Education**: A timeline or list of academic qualifications.
    *   Each entry must include: Degree, Institution, Date Range, and description.
    *   The data must be sourced from the current `portfolio.js`.
5.  **Skills**: A categorized grid of technical skills.
    *   Categories: Languages, Frameworks, Cloud & DevOps, Tools.
    *   Each skill must display a visual indicator of proficiency (e.g., a progress bar or level tag like "Expert", "Advanced").
    *   The data must be sourced from the current `portfolio.js`.
6.  **Projects**: A showcase of personal or professional projects.
    *   Each project must be presented as a "case study" with: Title, Description, Tech Stack, and links to Source/Demo.
    *   **Visuals**: Use custom `Terminal` or `Browser` mockup components to visually represent project demos (e.g., a fake terminal window showing commands, or a browser window showing a screenshot).
    *   The data must be sourced from the current `portfolio.js`.
7.  **Contact**: A clear call-to-action section.
    *   Display the professional email address (`dcanadillas.github@outlook.com`).
    *   Provide a direct, highly visible link to the LinkedIn profile for contact.
    *   Do NOT include a contact form (to keep the site static and simple).

### 3.2 Internationalization (i18n)
- The site must support two languages: **English** (default) and **Spanish**.
- A language switcher must be present in the header.
- The switcher must use a terminal-style format, e.g., `$ lang --set es` or `[EN] [ES]`.
- All content, including section titles, labels, and body text, must be translatable.
- The URL should not change when switching languages (client-side i18n).

### 3.3 Visual Design & Theme
- **Theme**: Permanently dark. No light mode toggle.
- **Color Palette**:
    *   Background: `#0a0a0a` (or similar deep dark).
    *   Text Primary: `#e0e0e0`.
    *   Text Secondary/Meta: `#a0a0a0`.
    *   Accent Color: A distinct color for hover states and highlights (e.g., `#4ec9b0` or `#ff79c6`, to be defined).
    *   Borders: Subtle dotted or 1px solid lines in a low-contrast color.
- **Typography**:
    *   **Headings & Body**: A clean sans-serif font (e.g., **Geist Sans** or **Inter**).
    *   **Metadata, Navigation, Dates, Code**: A monospaced font (e.g., **Geist Mono**). This is critical for the terminal aesthetic.
- **Interactions**:
    *   All interactive elements (links, buttons) must have an **inverted hover effect**: `background-color` becomes the accent color, and `color` becomes the background color.
    *   Smooth scrolling when clicking navigation anchors.
    *   (Optional but recommended) Astro's built-in **View Transitions** for a polished feel.
- **Components**:
    *   `Terminal`: A UI component styled to look like a macOS terminal window (with a header and traffic light buttons) to display code snippets or project commands.
    *   `Browser`: A UI component styled to look like a browser window to display project screenshots or web demos.

### 3.4 Assets
- **Favicon**: A simple, monochromatic favicon (e.g., a terminal icon or the initials `dk`).
- **Open Graph Image**: An `og-image.png` for social media sharing.
- **No external images** are required for the main layout, apart from project screenshots (if available).

## 4. Technical Requirements

### 4.1 Framework & Language
- **Astro 5** with `output: 'static'`.
- **TypeScript** for all components and logic.

### 4.2 Styling
- **Pure CSS** with CSS Custom Properties (variables) for theming.
- **NO Tailwind CSS** or other utility-first frameworks, to maintain full control over the bespoke design.
- **NO CSS-in-JS** libraries (e.g., Styled Components). Use scoped styles within `.astro` components or a global stylesheet.

### 4.3 Dependencies
- `astro`: The core framework.
- `@fontsource/geist-mono` & `@fontsource/geist-sans` (or similar): For self-hosted fonts.
- `astro-i18n` or a custom i18n solution: For language switching.
- `@astrojs/sitemap`: For automatic sitemap generation.

### 4.4 Data Source
- All personal data (bio, experience, education, skills, projects) must be stored in **JSON or TypeScript files** inside the project (e.g., `src/data/portfolio.json` or `src/data/portfolio.ts`).
- This data must be imported by the relevant components. It is a **direct migration** of the current `src/portfolio.js` content.

### 4.5 SEO & Meta
- Correct `<meta>` tags for title, description, Open Graph, and Twitter Cards on all pages.
- JSON-LD structured data for `Person` and `WebSite`.
- A `robots.txt` and `sitemap.xml` must be generated.

### 4.6 Performance
- The site must achieve a **Lighthouse Performance score of 95+**.
- Minimal JavaScript shipped to the client (leveraging Astro's island architecture).

### 4.7 Hosting & Deploy
- Must be fully compatible with **GitHub Pages**.
- Must use the repository's existing `CNAME` (if any) or be configured for the `kaecius.github.io` domain.
- A GitHub Actions workflow must be created to build and deploy the site on every push to the `main` branch.

## 5. Content Migration

The following data must be migrated from the current `src/portfolio.js`:

- `greeting` object (username, title, subTitle, resumeLink).
- `socialMediaLinks` (github, linkedin, gmail).
- `skills` object (all categories: frontend, mobile, backend, cloudInfra, databases, programmingLanguages).
- `competitiveSites` (LeetCode, HackerRank).
- `degrees` (master's and bachelor's details).
- `certifications` (titles and descriptions).
- `experience` (all roles, companies, dates, locations, and bullets).
- `projects` (all project titles, descriptions, footer links, and categories).

## 6. Acceptance Criteria

- The new site visually resembles the terminal-inspired aesthetic of `michaellivs.com`.
- All sections from the current portfolio are present and populated with the correct data.
- The site is fully navigable via the header anchor links.
- The language can be switched between English and Spanish, and all text updates accordingly.
- The site is fully responsive on mobile, tablet, and desktop viewports.
- All E2E tests pass.
- The site deploys successfully to GitHub Pages.
