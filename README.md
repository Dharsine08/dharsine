# Dharsine S. — Personal Portfolio (Editorial variant)

A premium, responsive personal portfolio website for **Dharsine S.**, an
MBA student with a B.Tech IT background. Built with React, Vite,
TypeScript, Tailwind CSS, and Lucide icons, in a dark green / cream /
gold / coral editorial design inspired by a bold one-page portfolio
reference (giant stacked name in the hero, duotone-treated photo blocks,
pill-shaped section labels, a dark green resume block, warm cream content
sections).

> **Note:** this is a second design variant for Dharsine S. — a separate,
> blue/black/white sidebar-style version also exists on the
> `claude/dharsine-portfolio` branch of this repository, built from an
> earlier reference image. Both use the same real resume content; only
> the visual design differs.

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
  assets/photo/profile.jpg      # profile photo used in the hero and about section
  components/
    Navbar.tsx                  # reusable nav bar (dark variant in hero, light variant in About), scroll-spy aware
    Footer.tsx                  # name/title, dynamic copyright year, back-to-top
    sections/
      Hero.tsx                   # giant stacked name, duotone photo, focus tags, scroll-down button
      About.tsx                  # "Hello, I'm Dharsine!" + photo w/ contact card overlay
      ResumeBlock.tsx             # dark green block: Education timeline + Leadership + Technical Skills
      Projects.tsx                 # 3 project cards, Water Tracking System featured
      Certification.tsx            # certification cards + internship card
      Strengths.tsx                 # "My Strengths" tag cards
      LanguagesAchievements.tsx      # Language list + Achievements grid (two-column, like the reference)
      Contact.tsx                    # validated contact form + contact details
  data/
    resume.ts                    # ALL editable content: bio, education, projects, skills, etc.
    sections.ts                  # nav items (id, label)
  hooks/
    useActiveSection.ts          # IntersectionObserver-based scroll-spy for nav highlighting
  App.tsx
  index.css                      # Tailwind import + green/cream/gold/coral design tokens, Fraunces + Inter fonts
public/
  resume/                        # put your resume PDF here (see below)
```

## Content accuracy note

`src/data/resume.ts` is the single source of truth for all content.
Every field — contact details, education, projects, certifications, the
internship, skills, leadership experience, languages, and achievements —
comes directly from the brief supplied for this build. Nothing was
invented. In particular, unlike the visual reference this design is
based on, this site does **not** include a LinkedIn/social pill, a
birthdate tag, or language-proficiency labels ("Fluent"/"Native"), or a
Hobbies & Interests section — none of that was part of Dharsine's actual
resume content, so those decorative reference elements were either
dropped or replaced with resume-accurate equivalents (e.g. the "Language"
pill in the About photo uses one of her two actual languages, and the
reference's "Experience" block became "Leadership Experience" since no
paid work experience beyond the internship was listed).

## Replacing the profile photo

Swap `src/assets/photo/profile.jpg` with your own image (same filename,
or update the two `import profilePhoto from "../assets/photo/profile.jpg"`
lines in `Hero.tsx` and `About.tsx` if you rename it). A 3:4 portrait
works best for the color-block photo treatment.

## Connecting the resume PDF download

Add a "Download Resume" link wherever you'd like it (e.g. next to the
"Get in touch!" button in `Navbar.tsx`, or in `ResumeBlock.tsx`) pointing
to `/resume/Dharsine_S_Resume.pdf`, and add your actual resume PDF to
`public/resume/` with that exact filename. See `public/resume/README.md`
for details.

## Adding project screenshots and links

Each project in `Projects.tsx` currently shows an icon placeholder
instead of a screenshot, since none were supplied. To add real visuals or
links:

1. Add project images under `src/assets/` and import them in `Projects.tsx`,
   replacing the icon block with an `<img>`.
2. To link to a live demo or repo, add a `link` field to the `Project`
   type and `projects` array in `src/data/resume.ts`, then add a "View
   Project" button wrapped in an `<a href={project.link}>` — only once a
   real link exists.

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
