# LifeTrack — Zero→One Starter

A beginner-friendly task tracker you can build with **VS Code + GitHub Copilot Chat**, deploy on **Netlify**, and secure with **Supabase Auth + Row Level Security (RLS)**.

## Quick start
1) Open this folder in **VS Code**.
2) Install recommended extensions when prompted.
3) Open `index.html` with Live Server (or VS Code's Live Preview) **or run `npm run dev` after installing Node.js**.
4) In `scripts.js`, set:
   - `SUPABASE_URL = "https://YOUR-PROJECT-id.supabase.co"`
   - `SUPABASE_ANON_KEY = "YOUR_PUBLIC_ANON_KEY"`
5) Create the `tasks` table and RLS policies in Supabase using `supabase.sql`.
6) Test locally: sign up, sign in, add tasks, mark done.
7) Push to GitHub and deploy with Netlify (connect repo).
8) Keep `CHANGELOG.md` and `LEARNING_LESSONS.md` updated after each change.

## What’s inside
- `index.html` — mobile-first UI scaffold
- `styles.css` — optional custom styles (Tailwind is via CDN)
- `scripts.js` — auth + tasks wiring
- `supabase.sql` — table + RLS policies (copy into Supabase SQL editor)
- `.github/copilot-instructions.md` — House Rules for Copilot Chat
- `prompts/*.md` — reusable prompts (shortcuts)
- `.vscode/` — settings, tasks, and extension recommendations
- `CHANGELOG.md` and `LEARNING_LESSONS.md` — learning artifacts
- `package.json` — optional Node helper scripts (`dev`, `build`)

