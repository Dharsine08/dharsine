# Pius Ronaldo A. — Personal Portfolio

A modern, responsive personal portfolio website for **Pius Ronaldo A.**,
B.Com graduate and aspiring MBA professional. Built with React, Vite,
TypeScript, Tailwind CSS, and Lucide icons, in a yellow/charcoal design
inspired by a business-portfolio layout reference (fixed sidebar nav,
bold uppercase headings, monochrome profile photo, card-based sections).

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
  assets/photo/profile.jpg      # profile photo used in sidebar + hero
  components/
    Sidebar.tsx                 # fixed yellow sidebar (desktop) / hamburger menu (mobile)
    sections/
      Hero.tsx
      About.tsx
      Resume.tsx
      Skills.tsx
      Portfolio.tsx
      Achievements.tsx
      Interests.tsx
      Contact.tsx
  data/
    resume.ts                   # ALL editable content: name, skills, strengths, portfolio items, etc.
    sections.ts                 # sidebar nav items (id, label, icon)
  hooks/
    useActiveSection.ts         # IntersectionObserver-based scroll-spy for nav highlighting
  App.tsx
  index.css                     # Tailwind import + design tokens (colors, fonts, shadows)
public/
  resume/                       # put your resume PDF here (see below)
```

## Content accuracy note

`src/data/resume.ts` is the single source of truth for all content, and
every field — including `careerObjective` and `professionalSummary` — is
taken verbatim from the actual uploaded resume PDF. Nothing was invented.
The resume didn't list an institution name, graduation year, or academic
scores for the B.Com, so those are simply not shown. Date of birth and
nationality are present in the resume but intentionally left off this
public-facing site.

## Replacing the profile photo

Swap `src/assets/photo/profile.jpg` with your own image (same filename,
or update the `import profilePhoto from "../assets/photo/profile.jpg"`
lines in `Sidebar.tsx` and `Hero.tsx` if you rename it). A 4:5 or square
portrait photo works best — it's automatically rendered in grayscale via
the `.photo-mono` CSS class in `src/index.css`.

## The resume download button

It already works — `public/resume/Pius_Ronaldo_A_Resume.pdf` is the
actual resume you uploaded, and the "Download Resume" button in
`Resume.tsx` links to `/resume/Pius_Ronaldo_A_Resume.pdf`. To update it
later, replace that file (keep the same filename, or update the link).

## Updating portfolio projects

Edit the `portfolioItems` array in `src/data/resume.ts`. Each entry needs:

```ts
{
  id: "unique-id",
  title: "Project Title",
  description: "Short description.",
  category: "ACADEMIC" | "BUSINESS" | "PERSONAL DEVELOPMENT",
  isPlaceholder: false, // set false once it's a real project
}
```

To link a real project, extend the `Portfolio.tsx` card to wrap the
"View Project" button in an `<a href="...">`, or add a `link` field to
the data type and item.

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
