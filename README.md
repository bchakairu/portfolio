# My Portfolio

Next.js + Tailwind portfolio. Content-as-code: adding a project is adding a
markdown file, no database or CMS involved.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add a project

Create a new file in `content/projects/your-project.md`:

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
`/projects/your-project`.

## Deploy

Push to GitHub, then import the repo at https://vercel.com/new - no config
needed, Vercel auto-detects Next.js.

## Structure

```
app/
  page.tsx            - home
  about/page.tsx      - academic bio
  projects/page.tsx   - project grid (reads content/projects/*.md)
  projects/[slug]/    - individual project page
  music/page.tsx      - music page
content/projects/*.md - project write-ups (add files here)
lib/projects.ts       - reads & parses the markdown files
components/           - Nav, Waveform (signature motif)
```
