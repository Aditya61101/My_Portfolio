# Intelligent Architect implementation plan

Phase 0 audit · 27 November 2026 · Awaiting approval for Phase 1

## Repository baseline

- The local checkout is on `redesign/intelligent-architect` at `e6951ef`. Local `main`, the cached `origin/main`, and `origin/HEAD` point to the same commit. The configured remote is `Aditya61101/My_Portfolio`. The redesign branch has no configured upstream. The remote-tracking refs describe the local checkout's last known remote state.
- The tracked working tree and index were clean at intake. Four inputs were already untracked under `docs/`: the design reference, redesign spec, and two résumés. Git's configured filesystem monitor returned an IPC warning. Running status with `-c core.fsmonitor=false` verified the tree without changing Git configuration.
- `portfolio-frontend/` contains the only application manifest and lockfile. No checked-in Vercel project configuration, CI workflow, or application environment template was found. The root README mentions Sanity and Framer Motion, but neither appears in the manifest or application source. The app requires no credentials or backend service in the inspected source.
- `pages/index.js` renders the single page, manages theme and scroll state, and sets metadata through `next/head`. `pages/_app.js` imports global and floating-nav CSS. `pages/api/hello.js` is the starter endpoint. Next config only sets React strict mode. Tailwind 3 uses page/component globs, Autoprefixer and the scrollbar plugin. The custom Babel file contains only the Next preset.
- The [live homepage](https://aditya-folio.vercel.app/) served the legacy portfolio during the audit. The public response establishes reachability. Vercel's authenticated project and alias lookups returned 404 in the available scope, including a project retry in the connected team. Production branch, project root, overrides, Node setting, and deployed commit remain unverified.

### Baseline build

The baseline uses Node `24.11.1`, npm `11.6.2`, npm lockfile v2, and the existing installed dependencies. All direct installed versions matched the lockfile, including Next `13.0.6`, React and React DOM `18.2.0`, and Tailwind `3.2.4`. The build uses a disposable copy so that no checked-in application file or existing build cache is touched. No dependencies were installed.

**Build passes on retry. Standalone lint fails.** A fresh plain-path copy completed `npm run build` with exit code 0, prerendered `/` and `/404`, and included `/api/hello`. Next reported 105 kB of first-load JS for `/`. An earlier plain-path copy exited 1 with `EPERM` while creating `.next/server/pages/api`. The successful retry used a clean output directory and required no code or configuration workaround. The first attempt in the system temporary directory was separately blocked by a sandbox path containing an exclamation mark, which this Webpack version reserves for loader syntax.

Both plain-path builds logged the same ESLint configuration error. `npm run lint` independently exited 1 because `.eslintrc.json` extends `next/babel`, which is a Babel preset and fails to load as an ESLint configuration. The custom Babel file also disables Next 13's SWC transform. The Browserslist warning was informational.

## Design direction

The [design reference](design-reference.png) shows a near-black canvas with technical grids, emerald/cyan lighting, and a two-column hero. The left column carries the introduction and calls to action. The right contains an illuminated, orbiting computational core. Below are a compact highlights strip, a timeline, an asymmetric project grid, a row of technology tiles, compact education and achievement cards, and a digital wave behind contact.

Use the [redesign spec](redesign-spec.md) for section order and interaction details. Retain the reference's visual hierarchy, lighting and spacing with shared CSS tokens, Space Grotesk headings, Inter body text and JetBrains Mono technical labels. Build the core from real geometry and the closing landscape from a lightweight CSS or SVG treatment. Use a compact About section before Contact and a single sticky floating navigation. The hero gets viewport-scale emphasis. Subsequent sections size to their content.

The design image supplies composition. Its July 2024 employment date, school and score, numeric badges, availability indicator, and sample technology tags are placeholders. Derive highlights from confirmed content and avoid a dated experience counter on static HTML unless its build-time calculation and refresh expectations are explicit.

## Content and asset audit

Both supplied résumés agree on the following working facts. The portfolio can use concise résumé-supported summaries subject to the owner's approval of public employer details and metrics.

| Area | Evidence and publication decision |
| --- | --- |
| TCS | Both résumés say Systems Engineer (INE/Prime), August 2024 to present, on an enterprise GenAI platform. The redesign spec says September 2024 and the visual reference says July. Use August as the working date. The résumés support API optimization, document processing, SSE, workflow orchestration, LangGraph and Angular work. Confirm permission before publishing employer-specific platform details or quantified results. |
| Regalo.club | Both résumés say Software Development Intern, April–June 2023, on a React travel itinerary app with AI recommendations, WebSockets and API caching. The legacy timeline says October 2022–present and describes a digital-asset gifting product. Use the résumé entry and confirm whether the gifting item was separate before reusing any product link. |
| Other experience | Humantic.ai and Askin Astrology appear in the redesign spec but are absent from the supplied résumés. Confirm roles, dates and descriptions with the owner. DEEPGAZE and NJACK appear in the old site only. Keep them out of the primary experience timeline pending confirmation. |
| DecisionGuard | Both résumés support GitHub App and Checks integration, ADR-based review, Neo4j mapping and GraphRAG. Use résumé-backed summaries and confirm the public repo/demo and any architecture details planned for the dialog. |
| DevAssistant | The GenAI résumé supports an issue-to-PR workflow, staged review checkpoints, LangGraph, RAG, FastAPI, Spring Boot, PostgreSQL, React and TypeScript. Confirm any public links and project screenshots. |
| Notification System | The Backend résumé describes Java queues, worker threads, `DelayQueue` retries, a dead-letter queue and token-bucket rate limiting. Confirm implementation against the repository before publishing the case study. The mockup's Kafka, Spring Boot and PostgreSQL labels are unsupported for this project. |
| ClaimIQ and Askin Astrology | The spec identifies both as featured projects. The résumés and local app provide no corroborating case-study material. Obtain project sources or owner verification for the feature set, stack, links and screenshots. Public search did not establish attributable source repositories for the planned projects. |
| Education and achievements | Both résumés list IIT Patna, B.Tech. in Electrical and Electronics Engineering, November 2020–May 2024, CPI 8.36/10. The legacy 8.44 is a fifth-semester score. The résumés support the Inter IIT Tech Meet 11.0 bronze and regional finalist at AI Fridays 2025. Use a dated source if including changing competitive-programming ratings. |
| Skills and About | Build categories from résumé evidence and reviewed project code. Replace percentages with named tools and areas of expertise. Confirm current personal interests, such as guitar and sports, before carrying forward the legacy About copy. |

- GitHub, LinkedIn and the public contact email agree across the current site and both résumés. The [GitHub profile](https://github.com/Aditya61101) was reachable. [LinkedIn](https://www.linkedin.com/in/aditya-kumar-337a08218/) matches the résumé and existing link, but public fetch did not verify the destination. Recheck it during preview. Instagram and the old Drive résumé lack corroboration as current portfolio links. Keep them out of the proposed navigation pending confirmation.
- The two supplied PDFs contain a phone number. Treat them as local sources. Obtain approved public copies with the intended contact information for both résumé variants before adding downloads. Stage files selectively so local résumé drafts stay out of the public Git repository and deployment.
- Reuse candidates are the personal `public/adi.ico` as a branding reference, `public/iitp.png`, and selected skill marks with applicable usage rights. Evaluate `AboutMe.png` and the Regalo mark for provenance, current relevance and visual fit. Compress retained assets, preserve aspect ratios and verify filename case against Linux.
- Retirement candidates include `bdps.jpg`, `dev-ed-wave.png`, duplicate/starter `favicon.ico`, `vercel.svg`, `Burtons.otf`, generic `code.png`, `consulting.png`, `design.png`, `avatar.png`, and `web1.png` through `web6.png`. The six generic web images total about 9 MB and lack app references. Review old project and employer marks with their corresponding content before removing those assets. Recheck source and public-path references after cutover before deletion.

## Proposed platform and dependencies

Use Node 24 LTS and npm in the app directory. Standardize the runtime across local verification and Vercel after inspecting the existing project settings. Keep a single lockfile and pin the resolved, patched versions during Phase 1. [Vercel Node versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions)

| Package | Proposed version or line | Purpose and compatibility |
| --- | --- | --- |
| `next` | 16.4.6 candidate | App Router, static prerendering, Metadata API and built-in image/font support. Package metadata declares Node >=20.9 and React/React DOM 19 support. [Package metadata](https://registry.npmjs.org/next/latest) |
| `react`, `react-dom` | 19.3.1 candidate, pinned together | Match React and DOM. This release falls within the examined R3F 9.8 peer interval. Validate the installed reconciler and Next App Router integration with the actual Canvas smoke test. [React release](https://github.com/react/react/releases/tag/v19.3.1) |
| `motion` | Stable React-compatible release | Use `motion/react` for entrance, timeline and dialog transitions in small client components. Use CSS for simple hover and focus states. [Motion installation](https://motion.dev/docs/react-installation) |
| `three`, `@react-three/fiber`, `@react-three/drei` | Three 0.186.x candidate, Fiber 9.8.x, Drei 10.7.9 candidate | Install with the hero phase. The examined Fiber manifest declares React and DOM >=19 <19.4 and Three >=0.156. Drei declares React 19, Fiber 9 and Three >=0.159. Three 0.x minors can bring breaking changes in helpers or transitive peers, so pin the tested minor and align its types. [Fiber manifest](https://raw.githubusercontent.com/pmndrs/react-three-fiber/v9.8.2/packages/fiber/package.json) · [Drei manifest](https://raw.githubusercontent.com/pmndrs/drei/v10.7.9/package.json) · [pmndrs example stack](https://github.com/pmndrs/examples/blob/main/.syncpackrc.json) |
| `lucide-react` | Stable compatible release | Small, individually imported interface icons. Use vetted brand assets where needed. [Lucide React](https://lucide.dev/guide/react) |
| `tailwindcss`, `@tailwindcss/postcss`, `postcss` | Tailwind 4.3.x for both Tailwind packages, PostCSS 8.x | Dev dependencies. Use CSS-first theme tokens and the Tailwind PostCSS plugin. Tailwind 4 targets modern browsers, including Safari 16.4+, Chrome 111+ and Firefox 128+. [Tailwind Next.js setup](https://tailwindcss.com/docs/installation/framework-guides/nextjs) · [Tailwind upgrade guide](https://tailwindcss.com/docs/upgrade-guide) |
| `typescript`, `@types/node`, `@types/react`, `@types/react-dom`, `@types/three` | TypeScript 6.0.x candidate, Node 24 types, React 19 types, types matching the Three minor | Dev dependencies. TypeScript 6.0 is used in the examined Next ESLint package. Validate the complete toolchain, including the Next plugin, JSX types, and `tsc --noEmit`, before approving the lockfile. Add Three types with the scene. [Next ESLint package manifest](https://raw.githubusercontent.com/vercel/next.js/v16.4.6/packages/eslint-config-next/package.json) |
| `eslint`, `eslint-config-next` | ESLint 9.x, Next config matching Next | Dev dependencies. Use flat config with Next core-web-vitals and TypeScript presets and run `eslint .` separately from `next build`. [Next 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16) |

These are proposed selections based on published manifests and documentation. The shell could not resolve the npm registry directly, and the replacement dependency tree has not been installed or built. Before the first dependency commit, check current stable tags, advisories, engines and all resolved peers, run a clean `npm ci`, and use `npm ls` to confirm a consistent tree without peer overrides. Verify the 3D combination in a minimal client-only Canvas under the App Router before building the full scene.

## Target structure

```text
portfolio-frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root HTML, fonts and shared metadata
│   │   ├── page.tsx                # Static single-page composition
│   │   ├── globals.css             # Tailwind, tokens and base styles
│   │   ├── icon.svg
│   │   ├── opengraph-image.png
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/                 # Site navigation and footer
│   │   ├── sections/               # Hero, highlights, timeline, skills, etc.
│   │   ├── projects/               # Cards, dialogs and project visuals
│   │   ├── three/                  # Client loading boundary and core scene
│   │   └── ui/                     # Shared controls and small motion wrappers
│   ├── data/
│   │   ├── profile.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── education.ts
│   │   └── achievements.ts
│   └── types/
│       └── portfolio.ts
├── public/                         # Optimized media and approved public PDFs
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── package-lock.json
```

Keep sections and content on the server by default and prerender `/`. Use typed data for entries, date ranges, optional links, and skill categories. Add client components for mobile navigation, active anchors, project dialogs, copy-email feedback, animated reveals and the Canvas loader. Pass only serializable data across those boundaries. Start with native links, `details`, and a focus-managed dialog. Add shared hooks when repeated behavior warrants them. The site needs no API routes, CMS, database or global state library.

## Migration and review checkpoints

1. **Phase 1 · Technical modernization.** Work on the existing redesign branch. Establish Node/npm, strict TypeScript, Tailwind 4, and ESLint flat config. Replace `pages/index.js`, `pages/_app.js`, and the sample API in the same routing checkpoint that adds `src/app/page.tsx` and `layout.tsx`. Pages and App Router can coexist for distinct paths, but two definitions of `/` conflict. Preserve `/` and the current `#experience`, `#projects`, `#skills`, `#education`, `#about` and `#contact` deep links. Add `#home` for new navigation. Remove custom Babel once the default compiler handles the project, replace legacy lint and style tooling, and review `next/image` props on any carried-forward components. Update the outdated README as part of the migration. Verify lint, type checks, build and a local production smoke test with the new entry point. [App Router migration guide](https://nextjs.org/docs/app/guides/migrating/app-router-migration)
2. **Phase 2 · Design foundation.** Define typography, spacing, colors and focus styles. Build the responsive section skeleton and seed it with confirmed typed content. Establish metadata, canonical URL, favicon, robots, sitemap and a separate share image. Prefer licensed local font files via `next/font/local` to keep builds independent of remote font fetching.
3. **Phase 3 · Navigation and hero.** Replace both navigation systems and the scroll button with accessible sticky navigation, active anchors and subtle scroll progress. Introduce the computational core behind a dynamic import in a client component. Keep a same-size visual fallback visible before loading, and use it for small devices, reduced motion, unavailable WebGL or lost context. Cap pixel ratio, limit geometry and effects, and pause when offscreen or when the tab is hidden.
4. **Phase 4 · Experience and projects.** Build the timeline, bento grid and detail dialogs with keyboard focus restoration and Escape support. Prioritize DecisionGuard and ClaimIQ once evidence for both is available. Keep architecture diagrams and conceptual visuals distinguishable from product screenshots.
5. **Phase 5 · Remaining sections and cleanup.** Add professional highlights, grouped skills, education and achievements, About, contact and footer. Replace the mailto form with direct email and copy actions. Add the approved résumé variants when available. Remove the replaced components, typewriter, legacy form, Tailwind scrollbar plugin, unused CSS, redundant image assets and superseded dependencies after checking references.
6. **Phase 6 · Visual refinement.** Compare output with the reference at 1920×1080, 1440×900, 1366×768, 768×1024, 390×844 and 360×800. Check for overflow and overlapping controls. Verify font loading, contrast, readable type, hover equivalents, touch and reduced motion. Keep the project grid and motion effects usable on lower-powered devices.
7. **Phase 7 · Production readiness.** Run `npm ci`, lint, type checks, build, and Vercel preview verification. Check anchor behavior, project dialogs, downloadable files, social links, images, metadata, keyboard access, mobile performance, fallback modes and console output. Record Lighthouse results against the spec's 90+ performance and 95+ accessibility, best-practices and SEO targets. Obtain explicit approval before each following phase and before production merge.

## Vercel deployment risks and controls

| Risk | Check before release |
| --- | --- |
| Wrong project, root or production branch | Confirm the existing project and its link to the GitHub repo, the root directory `portfolio-frontend`, the framework preset, production branch (candidate `main`), and current production alias. Preserve the integration and URL. [Vercel build settings](https://vercel.com/docs/builds/configure-a-build) · [Git deployment behavior](https://vercel.com/docs/git) |
| Runtime or command mismatch | Inspect Node setting and install/build/output overrides. Confirm npm resolves the app lockfile and the build runs from the correct directory on Linux. Keep the normal Next.js build output and prerendered page. Validate native Tailwind/PostCSS and image dependencies with a clean preview. |
| Preview and production diverge | After approval to push, use the existing Git integration for a preview of the redesign branch and test the exact commit. Confirm that preview routing and protection are suitable for QA. Verify production configuration before merging and record the last known-good deployment for rollback. |
| 3D slows or breaks the initial load | Check that the hero text and primary actions render before the deferred scene. Test touch, reduced motion, disabled WebGL and context loss. Measure mobile layout shift and responsiveness in the preview. |
| Wrong URL or unintended publication | Keep canonical metadata on the existing production URL, verify preview indexing controls, and verify that only approved résumé binaries and public-safe project visuals enter Git and the build output. |

Phase 1 can establish the framework and static route while content confirmations are pending. Before publication, resolve the employment-date discrepancy, approve employer-specific claims, confirm project evidence and public URLs, and approve public résumé downloads. Confirm the Vercel project settings before the first remote build or release decision.
