# Portfolio V2 — Intelligent Architect

## 1. Project Overview

**Owner:** Aditya Kumar  
**Repository:** Aditya61101/My_Portfolio  
**Application directory:** portfolio-frontend/  
**Live website:** https://aditya-folio.vercel.app/  
**Development branch:** redesign/intelligent-architect

### Objective

Completely redesign the existing personal portfolio into a premium, futuristic, interactive, single-page website that represents Aditya's professional identity as a software engineer specializing in:

- Backend engineering
- Agentic AI and Generative AI
- Software architecture and system design
- End-to-end product development

The website should be visually memorable, technically impressive and professional.

It must not resemble a generic student portfolio, conventional online resume or prebuilt portfolio template.

## 2. Design Reference

The primary visual reference is:

`docs/design-reference.png`

Closely follow the reference's:

- Overall visual identity
- Section composition
- Color palette
- Typography hierarchy
- Lighting and atmospheric effects
- Interactive computational core concept
- Project card presentation
- Digital landscape

The reference image is conceptual. Its placeholder text, metrics and professional information must not be treated as factual.

Do not use the entire reference image as a website background or substitute for implemented UI components.

## 3. Visual Identity

### Theme

Intelligent Architect — a combination of futuristic engineering, intelligent systems and premium minimalism.

The website should visually communicate interconnected systems, software engineering and applied artificial intelligence.

### Color Palette

| Token | Value |
|---|---|
| Primary background | #080D12 |
| Secondary background | #0D151B |
| Card background | #111C22 |
| Primary accent | #00D9A6 |
| Secondary accent | #38BDF8 |
| Primary text | #F1F5F9 |
| Secondary text | #94A3B8 |
| Muted text | #64748B |
| Border | #24343C |
| Accent glow | rgba(0, 217, 166, 0.15) |

Centralize these values using CSS variables and design tokens.

Dark mode is the default and only required theme for the initial release.

### Typography

- Headings: Space Grotesk
- Body: Inter
- Technical labels: JetBrains Mono

Use large, confident headings, readable body text and small monospace labels for technical details.

### Visual Language

- Deep obsidian backgrounds
- Subtle technical grid patterns
- Emerald and cyan ambient lighting
- Restrained glassmorphism
- Illuminated card borders
- Interconnected nodes and geometric structures
- Digital wave landscapes
- Purposeful negative space
- Smooth, cinematic transitions

Avoid excessive neon effects, excessive gradients, generic stock images, unrelated decorative animations and visually noisy backgrounds.

## 4. Website Structure

The website must remain a single-page portfolio.

All primary content must be accessible through vertical scrolling and section navigation.

Section order:

1. Navigation
2. Hero
3. Professional highlights
4. Professional experience
5. Featured projects
6. Technical expertise
7. Education and achievements
8. About me
9. Contact and footer

Only the hero should be designed to occupy approximately one viewport.

Other sections should use content-driven heights.

Do not apply min-h-screen indiscriminately to every section.

## 5. Navigation

Implement a floating, translucent navigation bar.

### Content

- Personal brand: AK.
- Home
- Experience
- Projects
- Skills
- About
- Contact
- Resume button

### Behavior

- Sticky floating navigation.
- Glass effect with background blur.
- Active section tracking using IntersectionObserver or an equivalent lightweight mechanism.
- Smooth anchor navigation.
- Animated active navigation indicator.
- Subtle scroll progress indicator.
- Responsive mobile navigation.
- Accessible keyboard navigation.

The resume button should provide access to Backend Engineering and GenAI Engineering resume variants, once approved public PDFs are available.

Replace the existing Navbar, FloatNavbar and ScrollButton implementations with a cohesive navigation system.

## 6. Hero Section

The hero is the signature section of the portfolio.

### Desktop Layout

Use a two-column composition.

Left column: professional introduction.

Right column: interactive 3D computational core.

### Hero Content

Small introductory label:

SOFTWARE ENGINEER · INDIA

Primary heading:

Hey, I'm  
Aditya Kumar.

Professional identity:

Backend Engineer. AI Builder.

Description:

I build reliable backend systems, intelligent agents and software products that solve complex engineering problems.

Currently working at Tata Consultancy Services. IIT Patna graduate.

Primary actions:

- Explore My Work
- View Resume

Secondary actions:

- GitHub
- LinkedIn
- Email

An availability indicator may be included if its status is confirmed.

The exact copy can be refined without changing the intended professional positioning.

### Interactive Computational Core

Create a custom interactive 3D visualization using Three.js, React Three Fiber and Drei.

The visualization should consist of:

- A central luminous computational cube.
- Smaller interconnected geometric modules.
- Energy connections between modules.
- Orbital rings.
- Subtle particles.
- Emerald and cyan illumination.
- A technical grid or atmospheric background.

The modules represent:

1. Backend Systems
2. Agentic AI
3. System Design
4. Product Development

### Hero Interactions

- Slow continuous rotation.
- Subtle orbital movement.
- Animated energy pulses.
- Cursor-responsive movement.
- Highlighting individual modules on hover.
- Smooth transitions between module states.
- Staggered text entrance animations.

The visualization must be implemented using rendered geometry, not a flat screenshot of the design reference.

Do not require visitors to interact with the visualization to access important information.

### Performance

- Lazy-load the 3D scene.
- Limit device pixel ratio.
- Use optimized geometry and materials.
- Avoid unnecessary post-processing.
- Pause rendering when the scene is outside the viewport or the browser tab is inactive.
- Provide a lightweight mobile fallback.
- Provide a fallback for unsupported WebGL environments.
- Respect reduced-motion preferences.

The hero must remain readable and usable before the 3D scene loads.

## 7. Professional Highlights

Create a compact horizontal strip of professional highlights beneath the hero.

Potential highlights:

- Years of industry experience
- IIT Patna graduate
- Featured engineering projects
- Enterprise software and AI systems

Calculate industry experience using the verified employment start date.

Do not invent user counts, revenue figures, project impact metrics or performance improvements.

Use animated counters only for verified numeric values.

## 8. Professional Experience

Create a premium vertical timeline with interconnected experience cards.

### Current Employment

Tata Consultancy Services

September 2024 — Present

Use the latest verified resume for designation, responsibilities, accomplishments and technical details.

Prioritize:

- Enterprise agentic AI platform development
- Backend API development
- Workflow orchestration
- Document processing
- Conversational AI systems
- RAG and non-RAG pipelines
- Database design
- Cloud integrations
- Verified engineering impact

### Previous Experience

Include relevant experience from:

- Humantic.ai
- Askin Astrology
- Regalo.club

Use verified employment dates and descriptions.

Do not retain outdated or contradictory experience information from the original website.

### Experience UI

- Animated vertical timeline.
- Company identity and logo where available.
- Role and duration.
- Concise responsibility summary.
- Verified achievements.
- Technology tags.
- Expandable details.

The timeline should illuminate progressively as the user scrolls.

Avoid exposing confidential employer information or proprietary architecture.

## 9. Featured Projects

Create an asymmetric bento-grid layout.

Prioritize engineering depth rather than generic project descriptions.

### Featured Project 1: DecisionGuard

AI-powered architectural governance for GitHub pull requests.

Highlight verified capabilities such as:

- Repository knowledge graph
- Architectural decision records
- Revision-aware code analysis
- Multi-agent architecture violation detection
- GitHub App integration

Visual concept:

An animated knowledge graph with interconnected repository nodes, highlighted dependencies and architecture validation signals.

### Featured Project 2: ClaimIQ

Agentic insurance claims evaluation.

Highlight verified capabilities such as:

- Document ingestion
- Structured data extraction
- Claims verification
- Fraud evaluation
- Policy compliance
- Human-in-the-loop review

Visual concept:

An animated multi-stage agentic workflow that illustrates claim evaluation.

### Featured Project 3: DevAssistant

AI-powered developer productivity tooling.

Use the latest resume and repository information to determine its actual features and technology stack.

Visual concept:

An animated code editor, developer terminal or code-analysis visualization.

### Featured Project 4: Notification System

Backend system engineering project.

Use the actual repository implementation to establish its architecture, delivery mechanisms and supported functionality.

Visual concept:

An animated notification delivery pipeline.

Do not imply message queues, retries, distributed processing or other capabilities unless implemented.

### Featured Project 5: Askin Astrology

Commercial full-stack numerology application.

Highlight verified capabilities such as:

- Report generation
- Authentication
- Payment workflows
- Conversational AI
- Report-specific RAG
- Cloud deployment

Visual concept:

An animated digital report and conversational interface preview.

### Project Card Requirements

Every project card should contain:

- Project title
- Concise value proposition
- Verified technology tags
- Custom project-specific visual
- View Details action
- GitHub link, where available
- Live application link, where available

DecisionGuard and ClaimIQ should receive greater visual prominence through larger cards.

Use a responsive bento grid that collapses gracefully on smaller screens.

### Project Interactions

- Subtle spotlight effect following the cursor.
- Illuminated hover borders.
- Restrained card elevation or 3D tilt.
- Project-specific animations.
- Smooth transitions.

### Project Details

Clicking View Details opens an accessible modal or drawer.

The visitor must remain on the same page.

Each project detail view should contain:

- Project overview
- Problem statement
- Engineering approach
- System architecture
- Major features
- Technical challenges
- Verified outcomes
- Technology stack
- Screenshots, where available
- Repository and live application links

Include architecture diagrams where they improve understanding.

Clearly distinguish conceptual illustrations from actual product screenshots.

## 10. Technical Expertise

Replace the existing skill proficiency percentages with categorized technical expertise.

Potential categories:

### Programming Languages

Python, Java, JavaScript, TypeScript, SQL.

### Backend and Databases

Flask, FastAPI, Node.js, Express.js, PostgreSQL, MySQL, MongoDB, SQLAlchemy, Prisma, Neo4j.

### AI and Agentic Systems

LangGraph, LangChain, LLM integrations, RAG, multi-agent orchestration, vector search, document intelligence.

### Frontend

React, Angular, Next.js, Tailwind CSS.

### Infrastructure

Docker, Kubernetes, AWS, GCP, Git, GitHub.

Validate the final technology list against actual experience and the latest resumes.

### UI and Animation

Use technology tiles with recognizable icons.

Possible presentation:

- Categorized interactive cards.
- Two controlled marquee rows moving in opposite directions.
- Hover highlighting.
- Technology labels.

All technologies must remain accessible when animations are disabled.

Do not use arbitrary percentages, proficiency bars or star ratings.

## 11. Education and Achievements

### Education

Indian Institute of Technology Patna

Bachelor of Technology  
Electrical and Electronics Engineering  
2020–2024

Include the verified final academic score if present in the latest resume.

Remove school education from the portfolio.

### Achievements

Include relevant verified achievements from the latest resume.

Potential content:

- Inter IIT Tech Meet bronze medal.
- Engineering hackathons.
- Professional awards.
- Other significant technical achievements.

Do not invent rankings, awards or accomplishments.

### Presentation

Use compact premium cards with subtle reveal animations, icons and illuminated borders.

## 12. About Me

Keep this section concise and personal.

The professional introduction belongs in the hero.

This section should communicate the person behind the engineering work, including:

- Engineering philosophy.
- Interest in solving complex technical problems.
- Interest in learning and building software products.
- Selected personal interests, such as music, guitar and sports.

Avoid generic claims such as hardworking, passionate, quick learner or technology enthusiast without supporting context.

Do not duplicate the resume or experience section.

## 13. Contact and Footer

Create a cinematic closing section.

Primary heading:

Let's build something impactful.

Include:

- Email
- LinkedIn
- GitHub
- Resume access

Use verified contact details.

Do not publish residential addresses or unnecessary personal information.

### Visual Concept

An animated digital particle wave or wireframe landscape behind the contact section.

### Interactions

- Smooth hover transitions.
- Subtle magnetic button effects.
- Illuminated borders.
- Copy-email interaction.
- Lightweight background animation.

Remove the existing contact form.

No dedicated backend is required.

Footer:

Designed and built by Aditya Kumar.

Include a dynamically generated copyright year.

## 14. Animation System

Animations are a core part of the experience, not an optional enhancement.

### Initial Page Load

- Staggered navigation entrance.
- Hero text reveal.
- Progressive 3D scene appearance.
- Subtle ambient lighting transition.

Do not use a blocking loading screen or artificial loading delay.

### Scroll Animations

- Section reveal transitions.
- Experience timeline progression.
- Project card entrance animations.
- Subtle parallax where appropriate.
- Animated highlights when first entering the viewport.

### Continuous Animations

- Computational core rotation.
- Energy pulses.
- Selected project visualizations.
- Controlled technology marquee.
- Contact particle landscape.

Continuous animations must pause when not visible.

### Interaction Animations

- Card spotlight.
- Button hover effects.
- Navigation indicator transitions.
- Project modal entrance and exit.
- Module highlighting.
- Expandable experience details.

### Animation Principles

- Motion should feel smooth, restrained and consistent.
- Avoid scroll hijacking.
- Avoid excessive bouncing and glitch effects.
- Avoid excessive cursor effects.
- Avoid animating every element simultaneously.
- Prefer GPU-friendly transform and opacity animations.
- Respect prefers-reduced-motion.
- Ensure content remains usable without animation.

## 15. Responsive Design

### Desktop

- Two-column hero.
- Large interactive computational core.
- Multi-column bento project layout.
- Floating navigation.
- Generous but controlled spacing.

### Tablet

- Adapted hero composition.
- Simplified 3D visualization where needed.
- Reduced grid complexity.
- Touch-friendly interactions.

### Mobile

- Stacked hero layout.
- Lightweight computational core or static fallback.
- Single-column project cards.
- Accessible mobile navigation.
- Full-width project detail dialogs where appropriate.
- No reliance on hover interactions.

Test at minimum:

- 1920 × 1080
- 1440 × 900
- 1366 × 768
- 768 × 1024
- 390 × 844
- 360 × 800

No horizontal overflow, overlapping content or inaccessible actions.

## 16. Technical Architecture

### Existing Application

The current portfolio uses:

- Next.js 13.0.6
- React 18.2.0
- Pages Router
- JavaScript
- Tailwind CSS 3.2.4

The existing application resides in portfolio-frontend/.

### Target Architecture

- Modern stable Next.js.
- App Router.
- TypeScript.
- Compatible React version.
- Tailwind CSS.
- Motion.
- Three.js.
- React Three Fiber.
- Drei.
- Lucide React.
- CSS and SVG for lightweight animations.

Verify dependency compatibility before installation.

Introduce GSAP, Lenis or additional animation libraries only if a specific requirement justifies them.

### Rendering Strategy

Use server components for static content wherever practical.

Use client components for:

- 3D scenes
- Interactive navigation
- Project dialogs
- Expandable cards
- Animation wrappers
- Browser-dependent interactions

Do not convert the entire application into a client component.

### Component Organization

Organize source code into:

- app/
- components/layout/
- components/sections/
- components/three/
- components/projects/
- components/ui/
- data/
- hooks/
- types/
- lib/

The exact structure may be refined during the repository audit.

Avoid unnecessary abstraction.

### Content Management

Centralize professional content using typed data files:

- profile.ts
- experience.ts
- projects.ts
- skills.ts
- education.ts
- achievements.ts

Keep presentation logic separate from content.

Updating project information or adding experience should not require modifying unrelated UI components.

No CMS, database, backend API or global state management library is required for the initial release.

## 17. Legacy Cleanup

Replace or remove:

- Existing typewriter hero.
- Existing duplicate navigation.
- Skill percentages.
- School education cards.
- Outdated professional information.
- Contact form.
- Sample API endpoint.
- Unused CSS.
- Unused legacy image assets.
- Obsolete Babel configuration, if no longer required.

Preserve verified social links, useful assets and necessary deployment configuration.

Do not remove assets until references have been checked.

## 18. SEO and Accessibility

Implement:

- Professional page title and description.
- Open Graph metadata.
- Social sharing image.
- Canonical URL.
- Sitemap.
- Robots configuration.
- Appropriate favicon.
- Semantic HTML.
- Logical heading hierarchy.
- Descriptive image alternative text.
- Accessible navigation.
- Visible keyboard focus.
- Accessible modal focus management.
- Sufficient color contrast.
- Reduced-motion support.

Important professional content must be available as normal HTML text, not exclusively inside canvas elements or animations.

## 19. Performance Requirements

The website must remain fast despite its visual complexity.

- Lazy-load 3D scenes.
- Optimize fonts and images.
- Limit animation complexity.
- Avoid unnecessary JavaScript.
- Avoid excessive client-side rendering.
- Prevent layout shifts.
- Pause offscreen animations.
- Provide mobile and WebGL fallbacks.
- Avoid redundant dependencies.
- Optimize bundle sizes.

Target Lighthouse scores:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

These are optimization targets, not guaranteed outcomes.

Report actual measurements and explain any remaining limitations.

## 20. Content Sources and Accuracy

Use the following sources, where available:

1. Latest Backend Engineering resume.
2. Latest GenAI Engineering resume.
3. Verified GitHub project repositories.
4. Explicitly provided professional information.
5. Existing portfolio for reusable verified information only.

Do not invent:

- Academic scores
- Employment dates
- Professional designations
- Project metrics
- Awards
- Technology stacks
- User counts
- Business impact
- Repository links
- Project capabilities

Flag conflicting or missing information.

Private resume drafts must not be committed to the public repository.

Only approved public resume PDFs may be published.

## 21. Git and Deployment

Retain the existing repository and Vercel integration.

All development must take place on:

redesign/intelligent-architect

Preserve the portfolio-frontend/ application directory.

Do not modify main directly.

Do not change the Vercel production configuration without approval.

Use incremental Git commits as implementation checkpoints.

Use Vercel preview deployments for visual review and testing.

Merge into the configured production branch only after explicit approval.

## 22. Implementation Phases

### Phase 0 — Audit and Planning

- Inspect the existing repository.
- Establish baseline build status.
- Verify dependency compatibility.
- Review design reference.
- Review content sources.
- Produce implementation-plan.md.

### Phase 1 — Technical Modernization

- Upgrade framework and dependencies.
- Introduce TypeScript.
- Migrate to App Router.
- Establish target project structure.
- Preserve deployment compatibility.

### Phase 2 — Design Foundation

- Configure typography.
- Implement design tokens.
- Create reusable UI components.
- Build responsive single-page skeleton.
- Establish centralized content.

### Phase 3 — Navigation and Hero

- Floating navigation.
- Hero layout.
- Interactive computational core.
- Hero animations.
- Mobile and accessibility fallbacks.

### Phase 4 — Experience and Projects

- Animated experience timeline.
- Bento project grid.
- Project-specific visualizations.
- Project detail dialogs.
- Architecture diagrams.

### Phase 5 — Remaining Sections

- Professional highlights.
- Technical expertise.
- Education.
- Achievements.
- About.
- Contact and footer.
- Resume integration.

### Phase 6 — Visual Refinement

- Compare rendered website against design reference.
- Refine typography, spacing, lighting and layouts.
- Improve animation quality.
- Review desktop and mobile screenshots.

### Phase 7 — Production Readiness

- Run lint and type checks.
- Run production build.
- Test responsive behavior.
- Test navigation and dialogs.
- Verify resume and social links.
- Test accessibility.
- Measure performance.
- Validate Vercel preview deployment.

Implement phases incrementally.

Do not proceed to the next phase without approval.

## 23. Acceptance Criteria

The redesign is complete when:

- The website visually matches the Intelligent Architect design direction.
- The website remains a single-page portfolio.
- Professional information is accurate and current.
- The interactive 3D hero is functional.
- Project visualizations communicate actual engineering concepts.
- Project detail dialogs are fully functional.
- Animations are smooth and purposeful.
- Mobile layouts are polished.
- Reduced-motion and WebGL fallbacks work.
- Navigation and links work correctly.
- No material browser console errors remain.
- Lint, type checks and production build pass.
- Performance and accessibility have been measured.
- Existing production deployment remains unaffected until approval.

## 24. Final Design Principle

The website should feel like a premium technology product's landing page, where the product is the engineer's capabilities.

Visual effects must reinforce the professional identity rather than distract from it.

Prioritize visual quality, technical credibility, performance and maintainability equally.