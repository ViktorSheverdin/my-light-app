# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Start the app

Run type checking separately to better performance

`pnpm tsc --noEmit --watch`

Start server with

`pnpm dev`

## Optimization notes

Lazy-load root app: Defer heavy React load until needed
Prebundle react/react-dom: One-time memory load, near-instant rebuild
esnext target (in `vite.config.ts`): Skips legacy transpilation
Skip type checks - there is a separate command running locally for the type checks. This keeps hot reaload instant
Minify disabled in dev: fast rebuild
