<div align="center">

# Farazfolio

**A personal portfolio for a full-stack developer and AI engineer building fair, explainable, real-time systems.**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-%233178c6)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-%2361dafb)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-%23646cff)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-%2306b6d4)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A520-%23339933)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.1-%23000)](https://expressjs.com/)
[![Lucide](https://img.shields.io/badge/Lucide-0.468-%239333ea)](https://lucide.dev/)
[![Docker](https://img.shields.io/badge/Docker-%28optional%29-%232496ed)](https://docker.com)

</div>

---

## What It Is

Farazfolio is Faraz Iqbal's personal portfolio site — a single-page application that showcases projects, technical skills, certifications, and writing. It's built to be fast, accessible, and easy to deploy.

## Why It Exists

I needed a place to present the work I've done — FairScore, FraudGuard, DocQA Chatbot, and others — in one clean space that recruiters and collaborators can explore without digging through separate repositories. It's a living document of who I am and what I've built.

## What You'll Find

- **Selected work** — five projects spanning explainable AI, fraud detection, RAG chatbots, conversational AI, and full-stack marketplaces.
- **Skills & tools** — proficiency panels organized by domain (languages, AI/ML, web/backend, tools).
- **Recognition** — Top 12 AI Chatbot Innovation (650+ projects), IBM SkillsBuild certifications, and workshop participation.
- **Writing** — three technical article concepts in progress (explainable credit scoring, RAG pipelines, real-time ML).
- **Contact form** — a working `/api/contact` endpoint with rate limiting, honeypot spam protection, and Elastic Email delivery.
- **Resume download** — click-to-download PDF, with graceful fallback when the file isn't present.

## How It Works

The frontend is a React + TypeScript application built with Vite and styled with Tailwind CSS v4. The Express server serves the production build, handles the contact API, and provides a health check. During development, Vite runs in middleware mode with hot module replacement.

## Quick Start

```bash
# Install dependencies
npm install

# Start the development server on port 3000
npm run dev

# Build the frontend into dist/
npm run build

# Serve the production build
npm run start
```

Visit `http://localhost:3000` to preview the portfolio.

## Prerequisites

- **Node.js** ≥ 20
- **npm** (comes with Node)

No other services are required to run the site locally. The contact form requires `ELASTIC_EMAIL_API_KEY` and `ELASTIC_EMAIL_FROM_EMAIL` — see `.env.example` for details.

## Docker

```bash
docker build -t farazfolio .
docker run -p 3000:3000 farazfolio
```

## Before Publishing

Replace the placeholder links in `src/App.tsx` (GitHub, LinkedIn, demo URLs) with your actual profiles. Update the skill proficiency bars in `src/data.ts` to reflect your current assessment. Add your final resume as `public/resume.pdf`.

## License

This is a personal portfolio. No formal license is declared — all rights reserved.