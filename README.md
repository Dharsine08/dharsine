# Nithish R. — Personal Portfolio

A premium, responsive personal portfolio website for **Nithish R.**, an
MBA student aspiring to build a career in financial analysis, business,
and financial technology. Built with React, Vite, TypeScript, Tailwind
CSS, and Lucide icons, in a bold editorial design inspired by an
oversized-typography portfolio reference (huge condensed "PORTFOLIO"
hero heading, grayscale cutout-style profile photography, dark
charcoal/forest-green/cream palette, asymmetric layouts).

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
  assets/photo/profile.png      # profile photo used in the hero and "Who I Am" section
  components/
    Navbar.tsx                   # fixed nav bar (Home/About/Portfolio/Contact), scroll-spy aware, mobile menu
    Footer.tsx                   # name/title, nav links, dynamic copyright year, back-to-top
    sections/
      Hero.tsx                    # oversized "Portfolio" heading, grayscale photo, contact details
      WhoIAm.tsx                   # forest-green "Who I Am" — oversized heading + photo + intro
      SkillsTable.tsx               # "What I Bring To The Table" — 3 skill cards
      Education.tsx                  # MBA (current) + BBA (completed) cards
      AcademicProject.tsx             # "Selected Work" — FinTech Project feature block
      CareerInterests.tsx              # "Where I'm Headed" — 3 career-interest blocks
      ApproachJourney.tsx               # "My Approach" strengths + "Professional Journey" note
      Contact.tsx                        # "Let's Connect" — validated form + contact details
  data/
    resume.ts                    # ALL editable content: bio, education, skills, project, etc.
    sections.ts                  # nav items (id, label)
  hooks/
    useActiveSection.ts          # IntersectionObserver-based scroll-spy for nav highlighting
    useFadeIn.ts                  # IntersectionObserver-based fade-in-on-scroll (respects prefers-reduced-motion)
  App.tsx
  index.css                      # Tailwind import + charcoal/green/cream design tokens, Anton (display) + Inter fonts
public/
  resume/                        # optional: add a resume PDF here if you want a download link
```

## Content accuracy note

`src/data/resume.ts` is the single source of truth for all content.
Every field comes directly from the brief supplied for this build.
Nothing was invented:

- No LinkedIn profile URL was supplied, so the Contact section shows
  "Nithish R." with an explicit **"No URL provided"** badge instead of a
  fabricated link.
- The academic project only lists what was given (title, category, one
  description line) plus a note that further details can be added later
  — no invented objectives, technologies, or outcomes. Its "View
  Project" state is disabled since no real project URL/document exists
  yet (see `academicProject.hasRealLink` in `resume.ts`).
- The Professional Journey section presents the "no formal work
  experience yet" note positively, exactly as supplied, rather than
  inventing an internship or job history.

## Replacing the profile photo

Swap `src/assets/photo/profile.png` with your own image (same filename,
or update the two `import profilePhoto from "../assets/photo/profile.png"`
lines in `Hero.tsx` and `WhoIAm.tsx` if you rename it). The current photo
has a plain light background, so the hero applies a CSS radial-gradient
mask (see the `style` prop in `Hero.tsx`) to fade its edges into the dark
background for an editorial cutout-style effect — a true background-removed
cutout photo would look even better if you have one.

## Adding a resume PDF download

No download button was requested in the brief, so none is wired up. If
you'd like one, add your PDF to `public/resume/` as
`Nithish_R_Resume.pdf` (see `public/resume/README.md`) and add a
link/button pointing to `/resume/Nithish_R_Resume.pdf` wherever you'd
like it.

## Adding real project details

Once you have more information about the FinTech Project (or a real
link/document), update `academicProject` in `src/data/resume.ts`:
add the details, set `hasRealLink: true`, and wire the "View Project"
button in `AcademicProject.tsx` to the real URL.

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
