# Jhonatan Quihuiri — Portfolio

Personal portfolio of **Jhonatan Quihuiri**, Backend Developer and Data Scientist based in the Galápagos Islands, Ecuador.

Live site: https://jhonatan-quihuiri.vercel.app

## Sections

- **Hero:** introduction with links to GitHub and LinkedIn.
- **About:** profile overview and services.
- **My Stack:** skills grouped the same way as in the CV.
- **Projects:** Zero and Wego featured first, then the rest of the projects with demo and code links.
- **Work:** timeline of professional experience.
- **Contact:** contact form that sends an automatic reply by email.

## Editing the content

All the portfolio content lives in `src/constants/index.ts`, typed in `src/types/portfolio.ts`:

- `skillGroups`: the My Stack cards.
- `featuredProjects` and `projects`: the project cards. Each project lists its buttons in `links`
  (`kind: "live"` for a demo, `kind: "code"` for a repository); leave `links` empty to show no buttons.
- `jobs`: the Work timeline, newest first.

Colors and fonts are defined in `tailwind.config.js` (`night`, `lilac`, `brand` and `tag` palettes) and
`src/app/layout.tsx` (Poppins, loaded with `next/font`).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The project's `.npmrc` enables `legacy-peer-deps`, which the current dependency
set needs to install cleanly.

The contact form needs the `GMAIL_USER` and `GMAIL_PASS` environment variables.

## Stack

Next.js 13 (App Router), React, TypeScript, Tailwind CSS, Framer Motion and Nodemailer.
