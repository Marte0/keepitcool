# KeepItCool

Landing page for the KeepItCool project.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
npm run lint
```

## Project structure

```
app/
├── components/   # UI sections (Navbar, Hero, …)
├── content/      # Copy, nav links, design handoff notes
├── globals.css   # Design tokens (@theme inline)
├── layout.js
└── page.js
```

Design tokens live in `app/globals.css`. Section copy and navigation order are in `app/content/`.
