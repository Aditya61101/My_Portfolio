# Portfolio V2 — Agent Development Instructions

## 1. Project Context

This repository contains Aditya Kumar's personal software engineering portfolio.

- Theme: Intelligent Architect
- Application directory: `portfolio-frontend/`
- Development branch: `redesign/intelligent-architect`
- Production website: https://aditya-folio.vercel.app/
- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS 4
- Runtime: Node.js 24 LTS
- Package manager: npm

The website is a premium, futuristic, animated single-page portfolio focused on backend engineering, agentic AI and software system design.

## 2. Sources of Truth

Read the following before implementing changes:

- `docs/redesign-spec.md` — product requirements and design specification.
- `docs/design-reference.png` — primary visual reference.
- `docs/implementation-plan.md` — technical architecture and implementation roadmap.
- `docs/resumes/` — local professional content references, when available.

The design reference establishes the visual direction, not factual professional information.

Explicitly approved user instructions take precedence over earlier planning documents.

Flag conflicting requirements or professional information instead of silently making assumptions.

## 3. Architecture Rules

- Retain the Next.js App Router architecture established during Phase 1.
- Use strict TypeScript.
- Keep the homepage statically prerendered.
- Use server components by default.
- Introduce client components only where interaction or browser-dependent functionality requires them.
- Keep professional content separate from presentation logic.
- Centralize design tokens, typography and reusable styling.
- Build reusable components without unnecessary abstraction.
- Preserve all existing section anchors.
- Maintain the single-page website architecture.
- Do not introduce a database, backend API, CMS or global state management library without explicit approval.

## 4. Visual Design Rules

- Follow the Intelligent Architect design specification.
- Use `docs/design-reference.png` as the primary visual reference.
- Maintain consistent typography, spacing, colors, lighting and card styles.
- Prioritize premium visual quality over generic UI templates.
- Use emerald and cyan accents purposefully.
- Avoid excessive glow, gradients and decorative clutter.
- Never use the entire design reference image as the actual website interface.
- Ensure desktop, tablet and mobile layouts are deliberately designed.
- Preserve visual consistency across implementation phases.
- Do not make substantial changes to the approved visual direction without approval.

A successful build does not establish visual quality. Inspect the rendered website.

## 5. Animation Rules

- Use CSS for simple transitions and lightweight animations.
- Use Motion for advanced UI animations when required.
- Use Three.js, React Three Fiber and Drei for the interactive computational core during the designated implementation phase.
- Prefer SVG and CSS for lightweight project visualizations.
- Introduce additional animation dependencies only when justified.
- Respect `prefers-reduced-motion`.
- Provide fallbacks for unsupported WebGL and low-powered devices.
- Pause expensive animations when outside the viewport or when the browser tab is inactive.
- Avoid scroll hijacking and unnecessary continuous animations.
- Never make important content dependent on an animation completing.

Animations should reinforce the Intelligent Architect theme rather than serve as unrelated decorative effects.

## 6. Dependency Management

- Preserve the working dependency configuration established during Phase 1.
- Preserve the supported Webpack build configuration unless a change is explicitly justified and validated.
- Verify package compatibility before adding dependencies.
- Use stable, compatible and patched package versions.
- Maintain a single npm lockfile.
- Do not use `--force` or `--legacy-peer-deps` to bypass dependency conflicts.
- Avoid unrelated dependency upgrades during feature implementation.
- Report all dependency additions, removals and upgrades.

## 7. Content Accuracy and Privacy

- Use verified professional information.
- Use the supplied resumes and reviewed project repositories as evidence.
- Do not invent achievements, metrics, employment dates, academic scores, technology stacks or project capabilities.
- Do not silently resolve contradictory professional information.
- Distinguish conceptual project illustrations from actual product screenshots.
- Do not expose confidential employer information or proprietary implementation details.
- Keep private resume drafts excluded from Git.
- Publish only explicitly approved public resume PDFs.
- Never commit secrets, credentials or unnecessary personal information.

The absence of a project from a resume does not automatically exclude it from the portfolio.

Unverified information should be flagged for confirmation rather than published as fact.

## 8. Accessibility and Performance

- Use semantic HTML.
- Ensure keyboard-accessible navigation and controls.
- Provide visible focus indicators.
- Maintain sufficient text contrast.
- Implement accessible dialogs with correct focus management.
- Provide meaningful image alternative text.
- Prevent horizontal overflow and layout shifts.
- Lazy-load expensive visual components.
- Optimize fonts, images and JavaScript bundles.
- Keep important professional content available as regular HTML.
- Preserve usability when animations are disabled.
- Do not rely exclusively on hover interactions.
- Keep mobile performance and touch interactions in mind.

## 9. Implementation Workflow

Work incrementally according to `docs/implementation-plan.md`.

Implementation phases:

- Phase 0 — Audit and planning.
- Phase 1 — Technical modernization.
- Phase 2 — Design foundation.
- Phase 3 — Navigation and interactive hero.
- Phase 4 — Experience and projects.
- Phase 5 — Remaining sections.
- Phase 6 — Visual refinement.
- Phase 7 — Production readiness.

Phases 0 and 1 have been completed and approved. Phase 2 is currently in progress.

The latest explicit user instruction determines the active implementation phase.

### Workflow Rules

- Implement only the explicitly requested phase.
- Do not proceed to the next phase without approval.
- Do not modify unrelated functionality.
- Preserve existing user changes.
- Report unexpected working tree modifications.
- Review existing implementations before creating replacement components.
- Reuse established design tokens and components.
- Avoid unnecessary rewrites of previously approved functionality.
- If a requirement cannot be implemented as specified, report the blocker and proposed alternative.
- Update the implementation plan only when an approved architectural or implementation decision changes.

## 10. Validation Requirements

Run relevant validation commands from `portfolio-frontend/`:

```bash
npm run lint
npm run typecheck
npm run build
```

Use the actual package scripts if their names differ.

Also verify where applicable:

- Static homepage prerendering.
- Browser console errors.
- Responsive layouts.
- Section navigation.
- Keyboard accessibility.
- Animation fallbacks.
- Links and downloads.
- Dependency compatibility.
- Absence of horizontal overflow.

### Visual Validation

For visual implementation phases, capture and inspect screenshots at:

- 1920 × 1080
- 1440 × 900
- 1366 × 768
- 768 × 1024
- 390 × 844
- 360 × 800

Compare rendered screenshots against the approved design reference.

Inspect:

- Visual hierarchy.
- Typography.
- Spacing.
- Alignment.
- Color consistency.
- Card proportions.
- Background effects.
- Animation quality.
- Mobile responsiveness.
- Accessibility.

Fix obvious visual defects before reporting completion.

Do not claim that a test passed unless it was actually executed successfully.

Report environment and tooling limitations explicitly.

## 11. Git and Deployment Rules

- Work exclusively on `redesign/intelligent-architect`.
- Verify the active branch before making changes.
- Never modify `main` directly.
- Do not commit unless explicitly requested.
- Do not push unless explicitly requested.
- Do not merge branches or pull requests without approval.
- Never force-push.
- Do not modify Vercel production settings without approval.
- Preserve the existing `portfolio-frontend/` application directory.
- Preserve the existing production domain and deployment integration.
- Exclude private documents, generated build files, caches and `node_modules` from commits.
- Review staged changes before committing.
- Avoid indiscriminate staging of files containing private information.

Use incremental commits as checkpoints when authorized.

The existing production website must remain unaffected until the redesign is explicitly approved for release.

## 12. Completion Report

After each implementation phase, provide:

1. Summary of implemented changes.
2. Files created, modified and removed.
3. Dependencies added, removed or upgraded.
4. Architectural and design decisions.
5. Screenshots for visual implementation phases.
6. Comparison against the design reference where applicable.
7. Tests executed and actual results.
8. Known limitations and unresolved issues.
9. Deviations from the approved specification.
10. Recommended Git commit message.

Clearly distinguish completed functionality from planned functionality.

Do not conceal failed tests, incomplete implementations or deviations.

Wait for approval before implementing the next phase.

## 13. Core Engineering Principles

Prioritize:

- Visual quality.
- Technical credibility.
- Maintainability.
- Performance.
- Accessibility.
- Accurate professional representation.

The finished website should feel like a custom-designed premium technology product, not an assembled collection of generic UI components.

Keep the implementation as simple as possible without compromising the approved design or functionality.