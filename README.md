# Jerin J. — Personal Portfolio

A premium, responsive personal portfolio website for **Jerin J.**, an
MBA candidate with a background in Defence & Strategic Studies and
CA Foundation-level learning. Built with React, Vite, TypeScript,
Tailwind CSS, and Lucide icons, in a creative editorial design inspired
by a torn-paper portfolio reference (white grid-patterned hero with
bold Playfair Display typography, a jagged torn-paper transition into a
dark charcoal content area, a Polaroid-style profile card, and blue/gold
accents).

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
  assets/photo/profile.jpg      # profile photo used in the About section's photo card
  components/
    Navbar.tsx                   # fixed nav bar, scroll-spy aware, mobile menu
    Footer.tsx                   # name/title, nav links, dynamic copyright year, back-to-top
    TornEdge.tsx                  # reusable jagged SVG divider between the light hero and dark content
    sections/
      Hero.tsx                    # white grid-pattern header: year badge, giant name, tagline, torn edge
      About.tsx                    # "Hello, I'm Jerin!" — Polaroid photo card + intro + contact
      Education.tsx                 # MBA / B.A. Defence & Strategic Studies / CA Foundation cards
      CareerProfile.tsx              # Career Profile cards + career objective statement
      Strengths.tsx                   # "My Strengths" cards
      LanguagesDetails.tsx             # Languages + compact Personal Details
      Contact.tsx                       # validated contact form + contact details
  data/
    resume.ts                    # ALL editable content: bio, education, strengths, languages, etc.
    sections.ts                  # nav items (id, label)
  hooks/
    useActiveSection.ts          # IntersectionObserver-based scroll-spy for nav highlighting
  App.tsx
  index.css                      # Tailwind import + charcoal/blue/gold design tokens, grid-pattern utility, Playfair Display + Inter fonts
public/
  resume/                        # optional: add a resume PDF here if you want a download link (see below)
```

## Content accuracy note

`src/data/resume.ts` is the single source of truth for all content.
Every field comes directly from the brief supplied for this build.
Nothing was invented:

- The B.A. Defence & Strategic Studies and CA Foundation entries show
  **"Institution not specified"** (styled in muted italics in
  `Education.tsx`) because no institution names were given for those two
  qualifications — only the MBA's institution (Gnanam School of
  Business) was provided.
- No graduation dates, academic scores, work experience, or social
  profile links are shown, since none were supplied.
- The "2026" badge in the hero is explicitly the **portfolio's design
  year**, not an education or employment date.

## Replacing the profile photo

Swap `src/assets/photo/profile.jpg` with your own image (same filename,
or update the `import profilePhoto from "../assets/photo/profile.jpg"`
line in `About.tsx` if you rename it). A 4:5 portrait works well for the
Polaroid-style photo card.

## Adding a resume PDF download

No download button was requested in the brief, so none is wired up. If
you'd like one, add your PDF to `public/resume/` as `Jerin_J_Resume.pdf`
(see `public/resume/README.md`) and add a link/button pointing to
`/resume/Jerin_J_Resume.pdf` wherever you'd like it — e.g. in
`CareerProfile.tsx` or `Navbar.tsx`.

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
