# Repository Guidelines

## Project Structure & Module Organization
- `app/` is the Next.js App Router surface. Route segments live here (e.g., `app/shop`, `app/product/[slug]`), plus `app/layout.tsx` and `app/globals.css`.
- `app/api/checkout/` contains the server route stub used by the checkout flow.
- `components/` holds reusable UI pieces (header/footer, product grid, cart UI).
- `lib/catalog.ts` is the demo data source for products and collections.

## Build, Test, and Development Commands
- `npm run dev` — start the local dev server at `http://localhost:3000`.
- `npm run build` — compile the production build.
- `npm run start` — run the production server from the build output.
- `npm run lint` — run Next.js/ESLint checks.

## Coding Style & Naming Conventions
- TypeScript + React with the App Router; prefer functional components.
- Indentation is 2 spaces; strings commonly use double quotes (match existing files).
- Component files are `PascalCase.tsx` (e.g., `ProductGrid.tsx`).
- Route folders and segments are lowercase (e.g., `app/checkout-success`).

## Testing Guidelines
- No automated test framework is configured yet. If you add tests, document the runner and add an npm script.
- Until tests exist, verify key flows manually (shop → cart → checkout, COA links, RUO acknowledgment copy).

## Commit & Pull Request Guidelines
- Git history is minimal (single “Initial” commit), so no enforced convention yet.
- Use concise, imperative commit messages (e.g., “Add COA badge to product cards”).
- PRs should include: summary of changes, testing notes, and screenshots for UI changes. Link related issues if applicable.

## Security & Configuration Tips
- Checkout is a stubbed API route returning a placeholder URL; replace with your payment provider before production.
- This demo positions products as Research Use Only (RUO); keep the disclaimers intact unless product policy changes.

## Agent-Specific Instructions
- Prefer minimal diffs; do not refactor unless requested.
- Do not change product copy, prices, or product list unless requested.
- Keep RUO language subtle (footer/checkout); do not add extra disclaimers above the fold.
- Never add dosing, injection, or medical/therapeutic claims.
- Use `next/image` for images and keep assets in `public/images/`.
- Before finalizing any implementation task, run `npm run build` and report results.
