# Mukul's Portfolio

Personal portfolio showcasing my work in NLP, retrieval-augmented generation, agent workflows, and Python automation.

Built with React and Vite, featuring responsive layouts, interactive SVG architecture diagrams, project details, and a downloadable resume.

**Live website:** [View portfolio](https://portfolio-r6c8-seven.vercel.app)  
**GitHub:** [vishwakarmamukul8791-code](https://github.com/vishwakarmamukul8791-code)

## Featured Projects

### ResolveIQ — AI-Powered Incident Resolution Platform

A full-stack RAG application for investigating IT incidents against a knowledge base.

- Hybrid retrieval using BM25 and FAISS or pgvector
- Reciprocal Rank Fusion and optional cross-encoder reranking
- Confidence-gated Gemini answers with source citations
- Role-based access and investigation history

**Stack:** Python, FastAPI, React, Gemini, SentenceTransformers, BM25, FAISS, PostgreSQL, pgvector, Supabase, Docker.

[Repository](https://github.com/vishwakarmamukul8791-code/resolveiq-platform) · [Architecture](https://github.com/vishwakarmamukul8791-code/resolveiq-platform#rag-pipeline) · [Demo](https://resolveiq-five.vercel.app)

### PayPilot AI — Agentic Payment Orchestration Sandbox

A fake-money payment simulation demonstrating natural-language intent handling with deterministic backend controls.

- LangGraph workflow orchestration
- Human-in-the-loop approval
- Execution-time validation of balances, limits, and destinations
- Idempotent payment execution and transactional ledger updates
- Session-isolated data and visible agent decision traces

**Stack:** Python, FastAPI, React, LangGraph, optional Gemini integration, SQLAlchemy, SQLite, PostgreSQL, Pytest.

[Repository](https://github.com/vishwakarmamukul8791-code/paypilot-ai) · [Architecture](https://github.com/vishwakarmamukul8791-code/paypilot-ai/blob/main/docs/ARCHITECTURE.md)

### ReportFlow — Scheduled Report Automation

An application that fetches public JSON API data, transforms it, and generates Excel or PDF reports.

- Cron-based scheduling with APScheduler
- Data transformation using pandas
- Report downloads, optional email delivery, and Slack notifications
- JWT authentication and per-user job and report isolation
- Input validation, request limits, and run history

**Stack:** Python, FastAPI, React, pandas, APScheduler, PostgreSQL, Alembic, Docker.

[Repository](https://github.com/vishwakarmamukul8791-code/reportflow) · [Architecture](https://github.com/vishwakarmamukul8791-code/reportflow#architecture)

## Portfolio Features

- Professional experience and personal project sections
- Interactive architecture selector for all three projects
- Custom SVG project icons and diagrams
- Technology stacks and repository links
- Downloadable resume
- Responsive desktop and mobile layouts
- Keyboard navigation, visible focus indicators, and a skip link
- Reduced-motion support
- Email and professional profile links

The architecture diagrams are simplified project overviews, not live system-status displays.

## Website Stack

- React
- Vite
- JavaScript
- CSS
- Inline SVG
- Oxlint
- Vercel hosting

The portfolio itself is a frontend application. It does not require a backend, API key, or environment file. The featured projects run separately.

## Project Structure

```text
portfolio/
├── README.md
└── portfolio/
    ├── public/
    │   ├── favicon.svg
    │   └── resume.pdf
    ├── src/
    │   ├── components/
    │   ├── data/
    │   │   └── projects.js
    │   ├── hooks/
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── package-lock.json
    └── vite.config.js
```

The application source lives in the repository's inner `portfolio/` directory.

## Run Locally

### Requirements

- Node.js 22.12+ within the 22.x release line, or Node.js 24+
- npm

### Installation

```bash
git clone https://github.com/vishwakarmamukul8791-code/portfolio.git
cd portfolio/portfolio
npm ci
npm run dev
```

Open the URL printed by Vite, normally:

```text
http://localhost:5173
```

Stop the development server with `Ctrl+C`.

If PowerShell blocks `npm.ps1`, use `npm.cmd` instead:

```powershell
npm.cmd ci
npm.cmd run dev
```

## Lint and Production Build

Run these commands from the inner `portfolio/` directory:

```bash
npm run lint
npm run build
npm run preview
```

- `lint` checks the source with Oxlint.
- `build` creates the production website in `dist/`.
- `preview` serves the production build locally, normally at `http://localhost:4173`.

## Update Content

| Content                                 | File                                         |
| --------------------------------------- | -------------------------------------------- |
| Project descriptions, stacks, and links | `portfolio/src/data/projects.js`             |
| Professional experience                 | `portfolio/src/components/Experience.jsx`    |
| Homepage introduction                   | `portfolio/src/components/Hero.jsx`          |
| Technical skills                        | `portfolio/src/components/Skills.jsx`        |
| About section                           | `portfolio/src/components/About.jsx`         |
| Contact details                         | `portfolio/src/components/Contact.jsx`       |
| Navigation and resume button            | `portfolio/src/components/Navbar.jsx`        |
| SVG architecture diagrams               | `portfolio/src/components/SystemDiagram.jsx` |
| Global colours and typography           | `portfolio/src/index.css`                    |
| Page title and metadata                 | `portfolio/index.html`                       |

## Resume

The **Download resume** button serves:

```text
portfolio/public/resume.pdf
```

To update the resume, replace that file with the latest PDF while keeping the filename unchanged.

The navigation link is:

```jsx
<a href="/resume.pdf" download className="navbar__resume">
  Download resume
</a>
```

## Deployment

The portfolio is configured for Vercel with these project settings:

| Setting          | Value           |
| ---------------- | --------------- |
| Root directory   | `portfolio`     |
| Build command    | `npm run build` |
| Output directory | `dist`          |

When automatic deployments are enabled for the connected GitHub branch, pushing changes triggers a new deployment.

## Contact

- [Email](mailto:mmukul8791@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/mukul-s-8s677)
- [GitHub](https://github.com/vishwakarmamukul8791-code)
- [LeetCode](https://leetcode.com/u/Mukul863024/)
