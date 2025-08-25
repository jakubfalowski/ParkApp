# ParkApp — Recruitment Assignment

Test assignment application built with **React**, **TypeScript**, **Vite** and **Tailwind CSS**.  
The goal of this project is to implement a small but production-like app showcasing clean code, modern tooling, and good practices.

---

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — fast bundler and dev server
- [Tailwind CSS 4](https://tailwindcss.com/) — styling and responsive design
- [React Router](https://reactrouter.com/) — routing (planned)
- [Apollo Client](https://www.apollographql.com/docs/react/) — GraphQL client (planned, mocked for now)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — linting & formatting
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) — testing framework
- [GitHub Actions](https://docs.github.com/en/actions) — CI/CD pipeline (build, lint, tests)
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

---

## Project structure (current draft)

```
src/
 ├─ app/              # App entry (App.tsx, main.tsx, providers, routing)
 ├─ assets/           # Static assets (images, fonts, icons)
 ├─ components/       # Reusable UI components (generic UI)
 ├─ features/         # Feature-based modules (domain-specific)
 ├─ hooks/            # Reusable React hooks (cross-feature)
 ├─ services/         # API clients, GraphQL ops, integrations, msw mocks
 ├─ styles/           # Global styles (Tailwind base, tokens)
 ├─ tests/            # Test infra (e.g. setup/setupTests.ts, test utils)
 ├─ types/            # Global TypeScript types (incl. vite-env.d.ts)
 ├─ utils/            # Pure helpers (date, formatters, guards)
```

This structure will evolve as features are implemented (e.g. `graphql/`, `lib/`).

---

## Environment variables

Planned usage of `.env` for configuration (e.g. API endpoints).  
A `.env.example` file will be added later for reference.

---

## Git workflow

- Work is done on the `develop` branch.
- Commit messages in English, imperative style, e.g. _Add the application skeleton_.
- Small, focused commits to show progress in clear stages.

---

## CI/CD

- **CI** (continuous integration):  
  Runs on every push and pull request to `develop`.  
  Includes install, lint, type-check, tests, and build.

- **CD** (continuous deployment):  
  Every successful build on `develop` is deployed automatically to **GitHub Pages** at:  
  👉 [https://jakubfalowski.github.io/ParkApp/](https://jakubfalowski.github.io/ParkApp/)

---

## Next steps

- Configure Tailwind base theme (colors, fonts)
- Add Husky hooks (pre-commit lint + test, pre-push build)
- Integrate GraphQL client and mock API
- Implement authentication flow and remote control screen
- Expand test coverage with Vitest + React Testing Library + Cypress
