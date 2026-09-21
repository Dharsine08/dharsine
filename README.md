# Akash M. — Personal Portfolio

A premium, responsive personal portfolio website for **Akash M.**, an MBA
Finance & Marketing candidate with an interest in financial analysis,
business analytics, and data visualization. Built with React, Vite,
TypeScript, Tailwind CSS, and Lucide icons, in a warm cream/terracotta
editorial design inspired by a bold-typography portfolio reference
(oversized "PORTFOLIO" hero heading, portrait overlapping the type,
elegant serif accents, muted terracotta/rust palette).

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
  assets/photo/profile.jpg      # profile photo (extracted from the uploaded headshot, optimised as JPEG)
  components/
    Navbar.tsx                   # fixed nav bar (Home/About/Portfolio/Contact), scroll-spy aware, mobile menu
    Footer.tsx                   # name/title, LinkedIn + email icons, nav links, dynamic copyright year, back-to-top
    sections/
      Hero.tsx                    # oversized "Portfolio" heading, grayscale-blended portrait, intro, CTA
      WhoIAm.tsx                   # "Who I Am" — photo + professional summary + areas of interest
      SelectedProjects.tsx          # numbered project layout + illustrative Dashboard Preview mockup
      Skills.tsx                     # Skills & Expertise — 3 categories + Tools & Technology (segmented indicators)
      Education.tsx                   # MBA (current) + B.Com CA + Class XII
      Certifications.tsx               # 6 numbered certification/learning cards
      InterestsBring.tsx                # Areas of Interest + "What I Bring" statement + strength tags
      Contact.tsx                        # "Let's Connect" — validated form + contact details
  data/
    resume.ts                    # ALL editable content: bio, project, skills, education, certifications, etc.
    sections.ts                  # nav items (id, label)
  hooks/
    useActiveSection.ts          # IntersectionObserver-based scroll-spy for nav highlighting
    useFadeIn.ts                  # IntersectionObserver-based fade-in-on-scroll (respects prefers-reduced-motion)
  App.tsx
  index.css                      # Tailwind import + cream/charcoal/terracotta design tokens, Archivo Black (display) + Playfair Display (serif) + Inter fonts
public/
  resume/                        # optional: add a resume PDF here if you want a download link
```

## Content accuracy note

`src/data/resume.ts` is the single source of truth for all content.
Every field comes directly from the detailed brief supplied for this
build. Nothing was invented:

- The **Dashboard Preview** in Selected Projects is explicitly labelled
  "Illustrative sample data" — the KPI cards show "Illustrative" instead
  of fabricated numbers, and the trend/profitability charts use
  placeholder shapes, never presented as real project results.
- Tool proficiency (`tools` in `resume.ts`) is shown as a 3-segment
  indicator tied to the resume's own qualitative levels (Intermediate /
  Basics / Familiar) — deliberately not a smooth percentage bar, since no
  numeric proficiency was ever stated.
- The featured project's "View Project" state is replaced with an
  interactive **"Project Overview"** toggle (see `SelectedProjects.tsx`),
  since no real project file or link exists yet.

## Replacing the profile photo

Swap `src/assets/photo/profile.jpg` with your own image (same filename,
or update the `import profilePhoto from "../assets/photo/profile.jpg"`
lines in `Hero.tsx` and `WhoIAm.tsx` if you rename it). The current photo
has a plain studio background, so the hero applies a CSS radial-gradient
mask (see the `style` prop in `Hero.tsx`) to blend its edges into the
cream background — a true background-removed cutout would look even
better if you have one.

## Adding real dashboard screenshots

Once you have an actual screenshot of your Excel/Power BI dashboard,
replace the `DashboardPreview` component in `SelectedProjects.tsx` with
an `<img>` of the real screenshot (or keep both — a toggle between
"Preview" and "Screenshot" — if you'd like). Remove the "Illustrative
sample data" label once real data/figures are shown, and only add a
"View Project" link once you have a real file, repository, or hosted
link (set `featuredProject.hasRealLink: true` in `resume.ts` first).

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
