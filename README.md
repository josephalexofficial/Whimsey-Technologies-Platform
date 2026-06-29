<div align="center">

# Whimsey Technologies

### Light Up Your Vision With Precision-Crafted Tech

Official agency platform for **Whimsey Technologies** — a modern, production-ready web application showcasing full-stack engineering capabilities, shipped projects, and client engagement.

<br />

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## Overview

Whimsey Technologies is a high-performance, mobile-first agency website engineered with clean architecture, intentional design, and absolute technical precision. The platform presents the company's services, portfolio, and contact pipeline through a polished five-page experience with dual-theme support, fluid micro-interactions, and real email delivery via EmailJS.

Built for clarity, scalability, and conversion — without generic agency clichés.

---

## Features

| Category | Highlights |
|----------|------------|
| **Pages** | Home, About, Services, Projects, Contact — plus dynamic service & project detail routes |
| **Services** | 9 capability areas with custom SVG illustrations, expertise pillars, and tech stack logos |
| **Portfolio** | 6 production case studies with browser-frame previews, lightbox viewing, and client testimonials |
| **Contact** | Live form delivery to `whimseytech@gmail.com` powered by EmailJS |
| **Theming** | Light & ultra-dark mode with smooth 0.3s transitions |
| **Navigation** | Desktop top nav · mobile bottom tab bar · scroll-to-top on route change |
| **UX** | Hover micro-interactions, FAQ accordion, back-to-top button, responsive grids |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 |
| Language | TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM 6 |
| Icons | Lucide React |
| Email | EmailJS (`@emailjs/browser`) |
| Typography | [Jost](https://fonts.google.com/specimen/Jost) (Google Fonts) |

---

## Project Structure

```
Whimsey Technologies/
├── public/
│   └── projects/          # Portfolio screenshots & brand logo
├── src/
│   ├── components/        # Reusable UI (Navbar, Footer, illustrations, etc.)
│   ├── context/           # Theme provider
│   ├── data/              # Services, projects, FAQ, social links
│   ├── lib/               # EmailJS integration
│   ├── pages/             # Route-level page components
│   ├── App.tsx            # Root layout & routing
│   ├── main.tsx           # Application entry
│   └── index.css          # Global styles & design tokens
├── .env.example           # Environment variable template
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** 9 or higher

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd "Whimsey Technologies"

# Install dependencies
npm install

# Configure environment variables (see below)
cp .env.example .env

# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

---

## Environment Variables

Create a `.env` file in the project root (never commit this file):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS email service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public API key |

> **Note:** Restart the dev server after creating or updating `.env`.

### EmailJS Template Variables

Ensure your EmailJS template includes these fields:

| Variable | Description |
|----------|-------------|
| `{{from_name}}` | Sender's full name |
| `{{from_email}}` | Sender's email address |
| `{{reply_to}}` | Reply-to address (set as template Reply To) |
| `{{message}}` | Project inquiry message |
| `{{service_interest}}` | Service selected from URL (or "General Inquiry") |

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |

---

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services overview |
| `/services/:slug` | Service detail |
| `/projects` | Portfolio |
| `/projects/:slug` | Project case study |
| `/contact` | Contact & FAQ |

---

## Design System

| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| Canvas | `#FFFFFF` | `#0B0F19` |
| Text | `#0F172A` | `#FFFFFF` |
| Accent | `#0056D2` | `#0056D2` |
| Font | Jost (400–700) | Jost (400–700) |

The layout follows a **mobile-first** workflow with progressive enhancement at the `768px` breakpoint. All containers use fluid widths — no fixed pixel containment.

---

## Deployment

1. Set the three `VITE_EMAILJS_*` environment variables in your hosting provider.
2. Run the production build:

```bash
npm run build
```

3. Deploy the `dist/` folder to your static host (Vercel, Netlify, GitHub Pages, etc.).

For SPA routing, configure your host to redirect all paths to `index.html`.

---

## Contact & Social

| Channel | Link |
|---------|------|
| Email | whimseytech@gmail.com |
| Phone | 0769591223 |
| LinkedIn | [whimseytech](https://www.linkedin.com/company/whimseytech/) |
| X (Twitter) | [@whimseytech](https://x.com/whimseytech) |
| Instagram | [@whimseytech](https://www.instagram.com/whimseytech/) |
| YouTube | [@whimseytech](https://www.youtube.com/@whimseytech) |
| Facebook | [whimseytech](https://www.facebook.com/whimseytech) |
| TikTok | [@whimseyofficialke](https://www.tiktok.com/@whimseyofficialke) |

**Business Hours:** Monday – Friday, 8:00 AM – 5:00 PM EAT

---

<div align="center">

**© 2026 Whimsey Technologies. All rights reserved.**

*Engineered with precision. Delivered with discipline.*

</div>
