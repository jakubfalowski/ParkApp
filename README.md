# ParkApp -- Recruitment Assignment

Test assignment application built with **React**, **TypeScript**,
**Vite** and **Tailwind CSS**.\
The goal of this project is to implement a small but production-like app
showcasing clean code, modern tooling, and good practices.

------------------------------------------------------------------------

## Tech stack

-   [React 19](https://react.dev/) +
    [TypeScript](https://www.typescriptlang.org/)\
-   [Vite](https://vitejs.dev/) -- fast bundler and dev server\
-   [Tailwind CSS 4](https://tailwindcss.com/) -- styling and
    responsive design\
-   [React Router](https://reactrouter.com/) -- routing (planned)\
-   [Apollo Client](https://www.apollographql.com/docs/react/) /
-   [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) --
    linting & formatting\
-   [Vitest](https://vitest.dev/) + [React Testing
    Library](https://testing-library.com/docs/react-testing-library/intro/)
    -- testing framework (planned)

------------------------------------------------------------------------

## Requirements

-   **Node.js**: \>= 20.x\
-   **npm** as package manager

------------------------------------------------------------------------

## Getting started

Clone the repository and install dependencies:

``` bash
git clone https://github.com/<your-username>/parkapp.git
cd parkapp

# install dependencies
npm install
```

Run the development server:

``` bash
npm run dev
```

Build the application:

``` bash
npm run build
```

Preview the production build:

``` bash
npm run preview
```

------------------------------------------------------------------------

## Project structure (initial draft)

    src/
     ├─ App.tsx          # Root component
     ├─ main.tsx         # Entry point
     ├─ assets/          # Static assets (temporary)
     └─ styles/          # Global styles (Tailwind base)

This structure will evolve as features are implemented
(e.g. `components/`, `features/`, `graphql/`, `lib/`).

------------------------------------------------------------------------

## Environment variables

Planned usage of `.env` for configuration (e.g. API endpoints).\
A `.env.example` file will be added later for reference.

------------------------------------------------------------------------

## Git workflow

-   Work is done on the `develop` branch.\
-   Commit messages in English, imperative style, e.g. *Add the
    application skeleton*.\
-   Small, focused commits to show progress in clear stages.

------------------------------------------------------------------------

## Next steps

-   Configure Tailwind CSS base styles\
-   Set up ESLint & Prettier rules\
-   Add Husky hooks (pre-commit & pre-push)\
-   Integrate GraphQL client and mock API \
-   Implement authentication flow and remote control screen\
-   Add unit tests with Vitest + React Testing Library
