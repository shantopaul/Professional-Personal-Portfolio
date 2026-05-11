# Professional Personal Portfolio

A modern, responsive frontend developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, EmailJS, React Icons, and Lucide React.

## Features

- Sticky responsive navbar with mobile hamburger menu
- Smooth scrolling and active section highlighting
- Dark and light mode with localStorage persistence
- Animated hero section with CTA buttons
- About, skills, services, projects, testimonials, contact, and footer sections
- EmailJS contact form with validation, loading, success, and error states
- Responsive SaaS-inspired UI with glassmorphism cards
- SEO metadata, favicon, and social preview asset
- Accessible labels, semantic sections, keyboard-friendly controls
- Production-ready Vercel structure

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS
- React Icons
- Lucide React

## Installation

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file from `.env.example`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Production Build

```bash
npm run build
```

## Project Structure

```text
src/
├── components/
├── data/
├── hooks/
├── App.jsx
├── main.jsx
└── index.css
```

## Deployment

Deploy the repository on Vercel and add the EmailJS environment variables in the Vercel project settings.

## Branch Workflow Used

The implementation was completed with professional feature branches:

- `feature-project-foundation`
- `feature-navigation-hero`
- `feature-content-sections`
- `feature-contact-polish`

Each branch was merged back into `main` after its feature work was completed.

## Contact

GitHub: https://github.com/shantopaul
