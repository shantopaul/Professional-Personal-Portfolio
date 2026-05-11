# Shanto Paul - Professional Personal Portfolio

Modern, responsive, and production-ready personal portfolio website for a frontend developer. Built to showcase professional UI design, React development skills, responsive layouts, smooth animations, real project cards, downloadable resume, and a working EmailJS contact form.

**Live Website:** [personal-portfolio.shantopaul.com](https://personal-portfolio.shantopaul.com/)

**Repository:** [github.com/shantopaul/Professional-Personal-Portfolio](https://github.com/shantopaul/Professional-Personal-Portfolio)

## Preview

### Desktop - Light Theme

![Desktop light theme](assets/screenshots/desktop-light.jpg)

### Desktop - Dark Theme

![Desktop dark theme](assets/screenshots/desktop-dark.jpg)

### Mobile - Light Theme

![Mobile light theme](assets/screenshots/mobile-light.jpg)

### Mobile - Dark Theme

![Mobile dark theme](assets/screenshots/mobile-dark.jpg)

## Project Highlights

- Professional frontend developer portfolio
- Fully responsive layout for desktop, tablet, and mobile
- Light and dark theme support
- Theme preference saved in `localStorage`
- Sticky navigation with smooth scrolling
- Mobile hamburger navigation
- Animated hero section with Framer Motion
- About, Skills, Services, Projects, Testimonials, Contact, and Footer sections
- Project cards with tech stack, live demo, and GitHub buttons
- Functional EmailJS contact form
- Form validation, loading state, success message, and API error feedback
- Downloadable one-page resume PDF
- SEO metadata, favicon, and Open Graph preview
- Vercel-ready production configuration
- Clean reusable React component structure

## Tech Stack

| Category | Technology |
| --- | --- |
| Frontend | React.js, Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React, React Icons |
| Contact Form | EmailJS |
| Deployment | Vercel |
| Version Control | Git, GitHub |

## Main Sections

- **Navbar:** Sticky responsive navigation, active section highlighting, resume button, theme toggle, and mobile menu.
- **Hero:** Professional introduction, strong CTA buttons, animated visual card, and responsive layout.
- **About:** Personal introduction, development focus, learning journey, education, and freelancing goals.
- **Skills:** Frontend skills, tools, currently learning technologies, progress indicators, and icons.
- **Services:** Frontend development, React development, landing pages, responsive design, bug fixing, and redesign services.
- **Projects:** Responsive project grid with preview images, descriptions, tech stacks, demo links, and GitHub links.
- **Testimonials:** Client-style trust cards with avatars and star ratings.
- **Contact:** EmailJS-powered form with validation and delivery status feedback.
- **Footer:** Brand name, navigation links, social links, and copyright.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shantopaul/Professional-Personal-Portfolio.git
cd Professional-Personal-Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The `.env` file is ignored by Git and should not be committed.

### 4. Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Start the local development server.

```bash
npm run build
```

Create a production build in the `dist` folder.

```bash
npm run lint
```

Run ESLint checks.

```bash
npm run preview
```

Preview the production build locally.

## Project Structure

```text
Professional-Personal-Portfolio/
├── assets/
│   └── screenshots/
├── public/
│   ├── Shanto Paul Resume.pdf
│   ├── favicon.svg
│   └── og-preview.svg
├── scripts/
│   └── create-resume-pdf.mjs
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── package.json
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## EmailJS Setup

The contact form uses EmailJS for frontend-only email delivery.

Required EmailJS values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=public_key_xxxxx
```

Recommended template variables:

```text
{{from_name}}
{{from_email}}
{{subject}}
{{message}}
```

Recommended template settings:

- **To Email:** portfolio owner email
- **Reply To:** `{{from_email}}`
- **Subject:** `New portfolio message from {{from_name}} - {{subject}}`

## Deployment

This project is configured for Vercel.

### Vercel Settings

| Setting | Value |
| --- | --- |
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

Add the EmailJS environment variables in Vercel Project Settings before deploying.

Live production URL:

[https://personal-portfolio.shantopaul.com/](https://personal-portfolio.shantopaul.com/)

## Quality Checks

Before deployment, run:

```bash
npm run build
npm run lint
```

Current project status:

- Production build passing
- ESLint passing
- Deployed on Vercel
- Contact form connected with EmailJS
- Responsive light and dark themes available

## Security Notes

- `.env` and `.env.local` are ignored by Git.
- EmailJS private key is not used in the frontend.
- Only EmailJS public browser configuration is used in the deployed app.
- Resume PDF is stored as a public static asset.
- Vercel deployment headers are configured in `vercel.json`.

## Branch Workflow

This project was implemented with a professional feature-branch workflow. Major branches included:

- `feature-project-foundation`
- `feature-navigation-hero`
- `feature-content-sections`
- `feature-contact-polish`
- `feature-resume-pdf-download`
- `feature-emailjs-browser-sdk-fix`
- `feature-professional-readme`

Each feature branch was merged into `main` after implementation and verification.

## Contact

**Shanto Paul**  
Frontend Developer  
Email: [shanto@shantopaul.com](mailto:shanto@shantopaul.com)  
GitHub: [github.com/shantopaul](https://github.com/shantopaul)
