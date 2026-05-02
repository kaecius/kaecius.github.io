# /dev/daniel

Personal portfolio of Daniel Cañadillas — Software Engineer & Researcher.

Built with [Astro 5](https://astro.build), inspired by terminal aesthetics and dark minimalism.

## Stack

- **Framework**: Astro 5 (static output)
- **Language**: TypeScript
- **Styling**: Pure CSS with custom properties
- **Fonts**: Geist Mono & Geist Sans
- **Testing**: Playwright (E2E)
- **Deployment**: GitHub Pages

## Features

- Single-page portfolio with anchor navigation
- Terminal-inspired visual design (dark theme, monospace metadata)
- Internationalization (English / Spanish)
- Custom UI components: Terminal, Browser
- Fully responsive (mobile, tablet, desktop)
- SEO optimized (meta tags, JSON-LD, sitemap)
- Automated deployment via GitHub Actions

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run E2E tests
npm run build && npx playwright test
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow that builds and deploys to GitHub Pages automatically.

## License

MIT
