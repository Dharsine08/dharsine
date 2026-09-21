# Balaji — Personal Portfolio

A modern, responsive personal portfolio website for **Balaji**, a B.Sc.
Computer Science graduate focused on computer applications, IT support,
business software, and digital skills. Built with React, Vite,
TypeScript, Tailwind CSS, and Lucide icons, in a dark charcoal/golden
yellow design inspired by a split-screen portfolio reference (hero with
text on the left and a yellow photo block on the right, colorful accent
skill cards, alternating charcoal sections).

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Lucide React icons

(Framer Motion was considered per the brief but not added — the
`prefers-reduced-motion`-aware CSS fade-ups and scroll reveals already
deliver the requested "subtle" animation without an extra dependency.)

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
  assets/photo/profile.jpg      # profile photo (extracted from the uploaded resume PDF)
  components/
    Navbar.tsx                   # fixed nav bar with "B" monogram logo, scroll-spy aware, mobile menu
    Footer.tsx                    # name/title, nav links, LinkedIn/email icons (disabled until real details are set), dynamic copyright year, back-to-top
    sections/
      Hero.tsx                     # split-screen: text column (left) + yellow photo block (right)
      About.tsx                     # framed photo + intro + Contact Me / Download Resume buttons
      Skills.tsx                     # categorized skill cards
      Services.tsx                    # "What I Can Contribute" — 4 colorful accent cards
      EducationStrengths.tsx           # Education card + Personal Strengths grid
      Contact.tsx                       # "Let's Connect" — placeholder contact cards + validated demo form
  data/
    resume.ts                    # ALL editable content: bio, skills, services, education, contact placeholders
    sections.ts                  # nav items (id, label)
  hooks/
    useActiveSection.ts          # IntersectionObserver-based scroll-spy for nav highlighting
    useFadeIn.ts                  # IntersectionObserver-based fade-in-on-scroll (respects prefers-reduced-motion)
  App.tsx
  index.css                      # Tailwind import + charcoal/yellow design tokens, Poppins font
public/
  favicon.svg                    # "B" monogram favicon/logo
  resume/
    Balaji_Resume.pdf            # the actual uploaded resume — the Download Resume button already works
```

## Content accuracy note

`src/data/resume.ts` is the single source of truth for all content.
Every field — the professional profile, skills, personal strengths, and
education status — comes directly from Balaji's actual resume PDF.
Nothing was invented:

- **No institution name, graduation year, or academic scores** were in
  the resume, so the Education section shows only "B.Sc. Computer
  Science — Completed", nothing more.
- **No contact details** (email, phone, LinkedIn, location) were in the
  resume. The `contact` object in `resume.ts` uses explicit placeholder
  values with `isPlaceholder: true` flags, which drive the "Add yours"
  badges in the Contact section and keep those cards as plain text
  (not real `mailto:`/`tel:` links) and the footer's LinkedIn/email
  icons visually disabled — until you fill in real details.
- **Date of birth** (28 September 2005, present in the resume) is
  intentionally **not shown anywhere on the public site**, per the
  brief's own recommendation to keep it private.
- The contact form is explicitly labelled "Frontend demo — not
  connected to a backend" and never claims a message was sent.

## Replacing the profile photo

Swap `src/assets/photo/profile.jpg` with your own image (same filename,
or update the `import profilePhoto from "../assets/photo/profile.jpg"`
lines in `Hero.tsx` and `About.tsx` if you rename it).

## The resume download button

It already works — `public/resume/Balaji_Resume.pdf` is the actual
resume you uploaded, and the "Download Resume" button in `About.tsx`
links to `/resume/Balaji_Resume.pdf`. To update it later, replace that
file (keep the same filename, or update the link).

## Adding real contact details

Open `src/data/resume.ts` and edit the `contact` object:

```ts
export const contact = {
  email: "you@example.com",
  emailIsPlaceholder: false, // set false once real
  phone: "+91 98765 43210",
  phoneIsPlaceholder: false,
  linkedin: "linkedin.com/in/your-actual-profile",
  linkedinIsPlaceholder: false,
  location: "Your City, State",
  locationIsPlaceholder: false,
};
```

Once `isPlaceholder` is `false`, the Contact section's cards become
real clickable `mailto:`/`tel:` links and the "Add yours" badges
disappear; the footer's LinkedIn/email icons become active too.

## Connecting the contact form

The contact form validates input client-side but does **not** send
anything anywhere — there's no backend configured. To make it functional,
wire the `handleSubmit` function in `src/components/sections/Contact.tsx`
to a real service, for example:

- [Formspree](https://formspree.io/) — POST the form data to your Formspree endpoint.
- [EmailJS](https://www.emailjs.com/) — send email directly from the client.
- Your own API route / serverless function that emails or stores submissions.

## Previewing in VS Code

1. Open this folder in VS Code.
2. Run `npm install` then `npm run dev` in the integrated terminal.
3. Cmd/Ctrl-click the `http://localhost:5173` link in the terminal
   output, or open it in your browser — Vite's dev server hot-reloads
   as you edit files.

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
