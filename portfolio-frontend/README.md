# Portfolio frontend

The homepage at `/` is statically prerendered by the Next.js App Router. Its root layout and page live in `src/app/`, and its profile and section navigation are defined in `src/data/`.

## Local development

Use current patches of Node.js 24 LTS and npm 11. Run these commands from the repository root.

```sh
cd portfolio-frontend
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). The development server needs no environment variables.

Development and production scripts use Next.js's Webpack mode because Turbopack could not start its PostCSS worker on the Windows verification host.

## Verification

```sh
npm ls
npm run lint
npm run typecheck
npm run build
npm start
```

`npm run typecheck` generates Next.js route types before running the TypeScript compiler. After `npm start`, the production server serves the prerendered homepage at [localhost:3000](http://localhost:3000).

## Vercel

The existing portfolio uses Vercel. The app builds from `portfolio-frontend/` using the Next.js preset and `npm run build`. Deployment settings are managed in the existing Vercel project.
