# Billy's Portfolio

Next.js + Tailwind portfolio. Content-as-code: adding a project is adding a
markdown file, no database or CMS involved.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add a project

Create a new file in `content/projects/your-slug.md`:

```markdown
---
title: "Project Name"
summary: "One-line summary."
stack: ["Tech", "Tech"]
status: "In progress"
---

Write the project story here in plain markdown.
```

It will automatically appear on `/projects` and get its own page at
`/projects/your-slug`.

## Deploy

Push to GitHub, then import the repo at https://vercel.com/new — no config
needed, Vercel auto-detects Next.js.

## Structure

```
app/
  page.tsx            → home
  about/page.tsx       → academic bio
  projects/page.tsx    → project grid (reads content/projects/*.md)
  projects/[slug]/     → individual project page
  music/page.tsx        → music page
content/projects/*.md  → project write-ups (add files here)
lib/projects.ts         → reads & parses the markdown files
components/             → Nav, Waveform (signature motif)
```

## Design notes

Palette: near-black ink background, brass/gold accent (nods to the flute),
muted teal as a secondary accent. Display face is Fraunces (serif, warm),
body is Inter, labels/data use IBM Plex Mono.

The waveform bars in the hero and on the Music page are the site's one
signature element — the same shape reads as an audio waveform or a tone
contour, tying together the two halves of the site (language AI + music).
