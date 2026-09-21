# Franklin S. — Personal Portfolio

A premium, responsive personal portfolio website for **Franklin S.**, an
MBA student and B.Com graduate with a completed Digital Marketing course.
Built with React, Vite, TypeScript, Tailwind CSS, and Lucide icons, in a
dark charcoal design with neon-green accents and yellow CTA buttons,
inspired by a modern creative-portfolio layout reference (sticky top nav,
circular glowing profile visual, card-based sections).

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
  assets/photo/profile.jpg      # profile photo used in hero
  components/
    Navbar.tsx                  # sticky top nav w/ active-section indicator + mobile menu
    Footer.tsx                  # nav links, dynamic copyright year, back-to-top
    sections/
      Hero.tsx                  # circular glow ring + floating labels
      About.tsx                 # highlight cards + "Why Work With Me"
      Resume.tsx                # education timeline, career focus, strengths
      Skills.tsx                # categorized skills dashboard
      FeaturedProject.tsx       # academic project editorial layout
      Portfolio.tsx             # filterable placeholder project gallery
      Certification.tsx         # certification highlight card
      WhatIBring.tsx            # personal-strength cards
      Contact.tsx                # validated contact form + contact details
  data/
    resume.ts                   # ALL editable content: bio, skills, project, portfolio items, contact
    sections.ts                 # nav items (id, label)
  hooks/
    useActiveSection.ts         # IntersectionObserver-based scroll-spy for nav highlighting
  App.tsx
  index.css                     # Tailwind import + dark theme design tokens
public/
  resume/                       # put your resume PDF here (see below)
```

## Content accuracy note

`src/data/resume.ts` is the single source of truth for all content. Most
fields (education, certification, career focus, skills, strengths,
academic project details) come directly from the brief supplied for this
build. Two things are explicit, clearly-labelled placeholders because no
resume PDF text, email, phone, or LinkedIn URL was actually accessible
while building this project — only a design reference image and a
profile photo were available:

- `personal.email`, `personal.phone`, `personal.linkedin` — replace with
  your real contact details (`emailIsPlaceholder` / `phoneIsPlaceholder`
  flags drive the "Add yours" badges on the Contact section; set them to
  `false` once you fill in real values).
- `whyWorkWithMe` — drafted from the bullet points in the brief; check it
  against your actual resume wording and adjust as needed.

Nothing else (institutions, degree status, certification, skills,
strengths, the academic project's scope) was invented.

## Replacing the profile photo

Swap `src/assets/photo/profile.jpg` with your own image (same filename,
or update the `import profilePhoto from "../assets/photo/profile.jpg"`
line in `Hero.tsx` if you rename it). A square or near-square portrait
works best for the circular glow ring in the hero.

## Connecting the resume PDF download

The "Download Resume" button links to `/resume/Franklin_S_Resume.pdf`.
Add your actual resume PDF to `public/resume/` with that exact filename
and the button will start serving it — no code changes needed. See
`public/resume/README.md` for details.

## Updating portfolio projects

Edit the `portfolioItems` array in `src/data/resume.ts`. Each entry needs:

```ts
{
  id: "unique-id",
  title: "Project Title",
  description: "Short description.",
  category: "Academic" | "Marketing" | "Business",
  isPlaceholder: false, // set false once it's a real project
}
```

To link a real project, extend the `Portfolio.tsx` card to wrap the
"View Project" button in an `<a href="...">`, or add a `link` field to
the data type and item. The same applies to `featuredProject` in
`resume.ts` — set `hasViewableDocument: true` and wire the button in
`FeaturedProject.tsx` once you have an actual document/presentation to
link to.

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
