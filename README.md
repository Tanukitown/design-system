# Tanukitown Design System

[![CI](https://github.com/Tanukitown/design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/Tanukitown/design-system/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/codecov/c/gh/Tanukitown/design-system.svg)](https://codecov.io/gh/Tanukitown/design-system)

A React component library built with TypeScript, TailwindCSS, and Vite. Organized by atomic design principles.

## Getting started

```bash
pnpm install
pnpm dev         # run playground or library in dev
pnpm storybook   # start Storybook
pnpm build       # build library for publication
pnpm test        # run unit tests
```

## Publishing

Add an `NPM_TOKEN` secret to your GitHub repository and push to `main`. A GitHub Action will build and publish the package.

## Structure

- `src/atoms`, `molecules`, `organisms`, `templates`, `pages`
- `src/index.ts` exports components for consumers

## Adding a component

1. Create component under appropriate folder
2. Add a `.stories.tsx` story
3. Add a `.test.tsx` unit test
4. Export from `src/index.ts`

---

Component examples: `Button` (atom) and `Layout` (template).
