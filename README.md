# Aguilar IT Solutions Website

## Getting Started

Install dependencies, then run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Montserrat (headings) and Open Sans (body), with Arial as a system fallback.

## Dependencies

- pnpm@11.17.0
- Node@24 (Active LTS) — see `.nvmrc` / `.node-version`

## Commits

Commits follow [Conventional Commits](https://www.conventionalcommits.org/). Use the guided prompt instead of writing the message by hand:

```bash
pnpm commit
```

A `commit-msg` git hook (via Husky + commitlint) rejects non-conforming messages. Releases and `CHANGELOG.md` are generated automatically by [release-please](https://github.com/googleapis/release-please) from these commits when they land on `main`.

## Scripts

| Script                                 | Description                                       |
| -------------------------------------- | ------------------------------------------------- |
| `pnpm dev`                             | Start the dev server                              |
| `pnpm build`                           | Production build                                  |
| `pnpm serve`                           | Start the production server (after `build`)       |
| `pnpm analyze`                         | Production build with the bundle analyzer enabled |
| `pnpm lint`                            | Lint and auto-fix                                 |
| `pnpm format-check` / `pnpm format-it` | Check / apply Prettier formatting                 |
| `pnpm commit`                          | Guided Conventional Commit prompt                 |

## Troubleshooting

### 1. Cannot find '_package_' module or its corresponding type declarations.ts (2307)

![Screenshot 2024-02-06 at 10 29 24 PM](https://github.com/AguilarITSolutions/aits-nextjs-template/assets/25190540/a80ab38d-7990-4359-8ae9-5722318b4da9)

- Read the Stackoverlow answer: https://stackoverflow.com/a/69238902
