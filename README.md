# Jhonatan Quihuiri — Portfolio

Personal portfolio of **Jhonatan Quihuiri**, Backend Developer and Data Scientist based in the Galápagos Islands, Ecuador.

Live site: https://jhonatan-quihuiri.vercel.app

## Sections

- **About:** profile overview and services.
- **My Stack:** languages and tools.
- **Projects:** project cards with live links and QR codes.
- **Work:** timeline of professional experience.
- **Contact:** contact form that sends an automatic reply by email.

## Editing the content

All the portfolio content (stack icons, projects and the work timeline) lives in `src/constants/index.tsx`.
In a project card, leave `url` and `qr` empty to hide the "Launch or Scan" button, and leave `source_code_link`
empty to hide the GitHub button (for private repositories).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The project's `.npmrc` enables `legacy-peer-deps`, which the current dependency
set needs to install cleanly.

The contact form needs the `GMAIL_USER` and `GMAIL_PASS` environment variables.

## Stack

Next.js 13 (App Router), React, TypeScript, Tailwind CSS, Framer Motion, Three.js / Vanta and Nodemailer.
