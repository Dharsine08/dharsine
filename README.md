# Dharsine S. — Personal Portfolio

A professional, responsive personal portfolio website for **Dharsine S.**,
an MBA student with a B.Tech IT background. Built with React, Vite,
TypeScript, Tailwind CSS, and Lucide icons, in a blue/black/white design
inspired by a dark-sidebar resume layout reference (dark left sidebar
with contact/skills/languages/leadership, bold blue hero banner, circular
profile photo overlapping the banner, blue pill section headings).

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Lucide React icons

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically http://localhost:5173).

Other scripts:

```bash
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
npm run lint      # run oxlint
```

## Project structure

```
src/
  assets/photo/profile.jpg      # profile photo used in sidebar
  components/
    Sidebar.tsx                  # dark sidebar (desktop, ~32% width) / compact top bar + drawer (mobile)
    Footer.tsx                   # name/title, dynamic copyright year, back-to-top
    sections/
      Hero.tsx                   # blue banner w/ name, title, intro, resume download
      About.tsx                  # About Me + focus-area tags
      Projects.tsx                # 3 project cards, Water Tracking System featured
      Education.tsx               # education timeline
      Certification.tsx          # certification cards + internship card
      Achievements.tsx            # achievement grid
      Strengths.tsx                # "My Strengths" tag cards
      Contact.tsx                  # validated contact form + contact details
  data/
    resume.ts                    # ALL editable content: bio, skills, projects, education, etc.
    sections.ts                  # nav items (id, label)
  hooks/
    useActiveSection.ts          # IntersectionObserver-based scroll-spy for nav highlighting
  App.tsx
  index.css                      # Tailwind import + blue/black/white design tokens
public/
  resume/                        # put your resume PDF here (see below)
```

## Content accuracy note

`src/data/resume.ts` is the single source of truth for all content.
Every field — contact details, education, projects, certifications, the
internship, skills, leadership experience, and achievements — comes
directly from the brief supplied for this build. Nothing was invented:
where information wasn't given (an MBA institution/graduation date,
project technology stacks, project links/screenshots, certificate
dates/IDs), it's simply left out rather than guessed.

## Replacing the profile photo

Swap `src/assets/photo/profile.jpg` with your own image (same filename,
or update the `import profilePhoto from "../assets/photo/profile.jpg"`
line in `Sidebar.tsx` if you rename it). A square portrait works best for
the circular photo that overlaps the sidebar's blue header block.

## Connecting the resume PDF download

The "Download Resume" button links to `/resume/Dharsine_S_Resume.pdf`.
Add your actual resume PDF to `public/resume/` with that exact filename
and the button will start serving it — no code changes needed. See
`public/resume/README.md` for details.

## Adding project screenshots and links

Each project in `Projects.tsx` currently shows an icon placeholder
instead of a screenshot, since none were supplied. To add real visuals or
links:

1. Add project images under `src/assets/` and import them in `Projects.tsx`,
   replacing the icon block with an `<img>`.
2. To link to a live demo or repo, add a `link` field to the `Project`
   type and `projects` array in `src/data/resume.ts`, then wrap the card
   (or add a "View Project" button) with an `<a href={project.link}>` in
   `Projects.tsx` — only do this once a real link exists.

## Connecting the contact form

The contact form validates input client-side but does **not** send
anything anywhere — there's no backend configured. To make it functional,
wire the `handleSubmit` function in `src/components/sections/Contact.tsx`
to a real service, for example:

- [Formspree](https://formspree.io/) — POST the form data to your Formspree endpoint.
- [EmailJS](https://www.emailjs.com/) — send email directly from the client.
- Your own API route / serverless function that emails or stores submissions.

## Deployment

### Vercel

1. Push this repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
4. Deploy.

### GitHub Pages

1. Install the Pages helper: `npm install -D gh-pages`.
2. In `vite.config.ts`, set `base: "/<your-repo-name>/"`.
3. Add to `package.json` scripts: `"deploy": "npm run build && gh-pages -d dist"`.
4. Run `npm run deploy`.
