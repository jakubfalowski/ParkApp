# ParkApp — Recruitment Assignment

Test assignment application built with **React**, **TypeScript**, **Vite** and **Tailwind CSS**.  
The goal of this project is to implement a small but production-like app showcasing clean code, modern tooling, and good practices.

---

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — fast bundler and dev server
- [Tailwind CSS 4](https://tailwindcss.com/) — styling and responsive design
- [React Router](https://reactrouter.com/) — routing
- [Apollo Client](https://www.apollographql.com/docs/react/) — GraphQL client with error handling, retry, and auth link
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — linting & formatting
- [Husky](https://typicode.github.io/husky) + [lint-staged](https://github.com/okonet/lint-staged) + [commitlint](https://commitlint.js.org/) — git hooks & commit conventions
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) — unit & integration tests
- [Cypress](https://www.cypress.io/) — end-to-end tests (auth flow)
- [GitHub Actions](https://docs.github.com/en/actions) — CI/CD pipeline (lint, type-check, test, build, deploy)
- [GitHub Pages](https://pages.github.com/) — automated deployment

---

## Requirements

- **Node.js**: >= 22.x (aligned with CI/CD pipeline)
- **npm** as package manager

---

## Getting started

Clone the repository and install dependencies:

```bash
git clone git@github.com:jakubfalowski/ParkApp.git
cd parkapp

npm install
```

Run the development server:

```bash
npm run dev
```

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linter:

```bash
npm run lint
```

Run tests:

```bash
npm run test
```

Run e2e tests with Cypress:

```bash
npm run cypress:open
# or
npm run cypress:run
```

---

## Project structure

```
src/
 ├─ app/              # App entry (App.tsx, main.tsx, providers, routing)
 ├─ assets/           # Static assets (images, icons)
 ├─ components/       # Reusable UI components (generic UI)
 ├─ features/         # Feature-based modules (auth/, remote-control/, etc.)
 ├─ services/         # API clients, GraphQL client, MSW mocks
 ├─ styles/           # Global styles (Tailwind base)
 ├─ tests/            # Test infra (setupTests.ts, test utils)
 ├─ types/            # Global TypeScript types (e.g. vite-env.d.ts)
 ├─ utils/            # Pure helpers (date, formatters, constants)
```

---

## Environment variables

- `VITE_API_URL` — GraphQL endpoint (proxied in dev through Vite config)
- `VITE_MAIL` / `VITE_PASSWORD` — test credentials for Cypress

👉 See `.env.example` for reference.

---

## Git workflow

- Work is done on the `develop` branch.
- Conventional Commits enforced via **commitlint**.  
  Example:

  ```
  feat(PA-7): Implement the login page
  test(PA-9): Add basic e2e login tests with Cypress
  ```

- Small, focused commits to show progress in clear stages.

---

## CI/CD

- **CI** runs on every push and pull request to `develop`.  
  Includes install, lint, type-check, tests, and build.

- **CD** deploys every successful build on `develop` to **GitHub Pages**:  
  👉 [https://jakubfalowski.github.io/ParkApp/](https://jakubfalowski.github.io/ParkApp/)

---

## Current progress

- ✅ Tailwind theme configuration
- ✅ Husky hooks (pre-commit lint + test, pre-push build)
- ✅ Apollo Client integration with auth & error handling
- ✅ Login page with form validation (React Hook Form + Zod)
- ✅ Unit tests for form controls (Vitest + RTL)
- ✅ Basic Cypress e2e tests for login flow
- ✅ Remote control screen finished with static pagination + simple tests

---

## Notes on Figma design

- Only the **iPhone 14 view** of the remote screen was provided in Figma.
- Responsive variants (tablet, desktop) were designed and implemented based on my own ideas, keeping consistency with the provided design.

---

## Trello board

👉 [Project board](https://trello.com/b/pOuD9WpH/parkapp)
