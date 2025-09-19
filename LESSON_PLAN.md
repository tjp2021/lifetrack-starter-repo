# LifeTrack – Step-by-Step Curriculum

> Goal: Take someone who has **never shipped code** to a live, secure task-tracking web app – and leave them with next-step ideas.

WHEN IN DOUBT PROMPT THE AI. YOUR TOOLSETS ARE COPY & PASTE OR SCREENSHOT AND DRAG AND DROP INTO VSCODE TO PROVIDE CONTEXT TO THE AI FOR HELP. THIS APPLIES TO EVERYTHING ( DEBUG OR LEARNING LESSONS )
>
> • 🔹 Goal  • 📁 Files touched  • 🛠️ Actions  • ✅ Test checklist  • ⏪ Rollback tip

---
## Learning Objectives & Resources
| Lesson | Concepts & Skills | Why It Matters | Quick Resources |
|---|---|---|---|
| 0 – Tools | VS Code basics, Git install, Supabase signup | Sets up the foundation for all future coding and deployment | • VS Code Get Started guide<br>• GitHub: Set up Git<br>• Supabase Quickstart |
| 0.5 – PRD | Product thinking, scoping, success metrics | Clear goals avoid scope-creep; you’ll know when you’re "done" | • "Write a PRD" (Google lightning talk)<br>• Basecamp’s Shape Up (chap 4) |
| 1 – Clone & Run | `git clone`, Live Server, local dev loop | See immediate feedback; reinforces Git basics | • Git book chap 2 "Git Basics" |
| 2 – File Tour | HTML skeleton, CSS vs Tailwind, vanilla JS modules | Mental model of where code lives so editing feels safe | • MDN: HTML elements guide<br>• Tailwind Cheat Sheet |
| 3 – Git Commit | DOM edits, Git add/commit, semantic messages | Version control is your safety net | • Conventional Commits 1.0 |
| 4 – Supabase Setup | SQL table creation, Row-Level Security | Back-end data modelling + security | • Supabase Docs: Auth & RLS |
| 5 – Environment Wiring | Public keys, SDK init, environment constants | Connecting front & back ends; concept of env vars | • Supabase JS Quickstart |
| 6 – Auth Flow | Sign up, email confirmation, sessions | Core pattern for nearly every SaaS app | • Supabase Docs: Email Auth |
| 7 – CRUD | Insert/select/update/delete, async/await, re-rendering | Data mutations & UI sync | • MDN: fetch & async JS |
| 8 – Deploy | Static site hosting, DNS, HTTPS | Shipping to "prod" users | • Netlify Docs: Deploy a site |
| 9 – UI Polish | Tailwind modifiers, accessibility (`aria-*`), Lighthouse | UX & a11y best practices | • WebAIM Contrast Checker |
| 10 – Release Notes | SemVer tagging, CHANGELOG, reflection | Maintains project history & learning mindset | • Keep a Changelog guide |
| 11 – Stretch | OAuth, Edge Functions, offline storage | Real-world extensions & advanced Supabase features | • Supabase Edge Functions guide |

> After each lesson, **log one insight** in `LEARNING_LESSONS.md` (Lesson # → Insight) and link to at least one resource you found helpful.
>
> **Bug wins count too!** If you spend more than 10 minutes chasing a bug or confusion, write a quick note:
> `- #BUG — <what broke> → <how you fixed it> (DATE)`
> That running log will become your searchable knowledge base.

---
## Lesson 0 – Gather Your Tools
🔹 Install prerequisites
📁 *(none yet)*
🛠️ VS Code, Live Server, Git + GitHub account, Supabase account, optional Node.js.
✅ VS Code "Help > About" shows version numbers.
⏪ Re-install if something fails.

**Learning goals & resources**
• Understand why each tool (VS Code, Git, Supabase) is needed.
• Practice installing software on your OS.
• Verify installations via command-line.

Resources:
- VS Code Get Started: https://code.visualstudio.com/docs/getstarted/learn
- GitHub: Set up Git: https://docs.github.com/get-started/quickstart/set-up-git
- Supabase Quickstart: https://supabase.com/docs/guides/getting-started

---
## Lesson 0.5 – Write a Mini-PRD (Product Requirements Doc)
🔹 Define what "success" looks like *before* coding.
📁 `docs/PRD.md` (create)
🛠️ Use the template below; fill in bullets **in your own words**.
```md
# LifeTrack PRD (Your Name)
## Problem
> e.g. "I lose track of daily todos on paper notes."
## Users & Use-Cases
> e.g. Students tracking homework; parents grocery lists.
## Scope (v0.1)
- Email/password sign-up & sign-in
- Add/view/toggle/delete tasks
- Mobile-first UI
## Nice-to-Have (later)
- Social login
- Due-dates & reminders
## Success Metrics
- I can add 5 tasks in < 1 min on phone
- Page Lighthouse score ≥ 90 mobile
```
✅ Commit the PRD (`git add docs/PRD.md`).
⏪ Edit or rewrite; it's just Markdown.

**Learning goals & resources**
• Define problem, users, scope, success metrics.
• Practice writing concise PRDs.
• Understand MVP vs nice-to-have.

Resources:
- "Write a PRD" lightning talk: https://youtu.be/6y8x0JXZseg
- Shape Up (Chap 4 – Appetite & Pitch): https://basecamp.com/shapeup/4.2-chapter-02

---
## Lesson 1 – Clone & Run Locally
🔹 See the app on your own computer for the first time
📁 *(creates project folder)*
🛠️ Step-by-step
1. **Fork** this repo on GitHub so you have your own copy. Click “Fork → Create fork”.
2. In **VS Code** open a new terminal (`Terminal → New Terminal`).
3. Type `git clone https://github.com/YOURNAME/LifeTrack_starter.git` then press **Enter**.
4. Type `cd LifeTrack_starter` to move into the folder.
5. Open the folder in VS Code: `code .` (or just open the folder manually).
6. Right-click `index.html` in the file explorer → **Open with Live Server** (or use the Live Preview tab if you installed that extension).
✅ A browser tab appears showing the **LifeTrack** heading and two empty sections.
⏪ Something blank? Close the Live Server window, fix any typo in the steps, and relaunch.

**Learning goals & resources**
• Run git commands (`clone`, `cd`).
• Use Live Server / hot-reload workflow.
• Verify local dev environment.

Resources:
- Git Basics (book chap 2): https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository
- Live Server extension docs: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

---
## Lesson 2 – Tour the Files
🔹 Learn what every file does so nothing feels like a black box
📁 All top-level files
🛠️
1. Click `README.md` and read the “What’s inside” section slowly.
2. Open `index.html`; notice the `<script src="https://cdn.tailwindcss.com"></script>` line that gives you Tailwind without installing anything.
3. Open `scripts.js`; scroll through—see comments that group code into **Auth**, **Tasks**, **Helpers**.
4. Open `supabase.sql`; you don’t need to read SQL fluently yet—just note each `policy` for security.
5. Skim `.github/copilot-instructions.md`—these are “house rules” telling AI tools how to answer.
6. Add this line at the bottom of `LEARNING_LESSONS.md`:
   `- #002 — File tour finished (DATE)`
✅ You can point at any file in VS Code and describe why it exists.
⏪ Undo extra edits with **Ctrl+Z** or `git checkout -- <file>`.

---
## Lesson 3 – Personalize & First Commit
🔹 Make the code *yours* and record the change in Git
📁 `index.html`, `README.md`
🛠️
1. In `index.html` line 5 change the `<title>` to include your name.
2. In `<header>` (`<h1>` tag) also add your name so it shows on the page.
3. Open a terminal:
   ```bash
   git add index.html README.md
   git commit -m "chore: personalize title & heading"
   ```
4. Refresh the browser – the tab title and page heading now show your name.
✅ `git log -1` shows your commit with the message above.
⏪ `git restore index.html` if you want to revert.

---
## Lesson 3.5 – Organize Your Project Like a Pro
🔹 Set up a clean folder scheme before the codebase grows
📁 create `public/`, `src/`, `assets/`
🛠️
1. **Create folders**: `public`, `src`, `assets` at the project root.
2. Move `index.html` → `public/index.html`.
   Update Live Server setting: right-click the moved file and choose **Open with Live Server**.
3. Move `scripts.js` → `src/scripts.js`.
   In `public/index.html`, change the script tag to `src="../src/scripts.js"`.
4. Move `styles.css` → `src/styles.css`. If you later eject from Tailwind CDN, you’ll compile CSS into `dist/`.
5. Update `.gitignore` – `dist/` is already ignored; verify.
6. Commit: `git add -A && git commit -m "chore: initial project restructure"`.

**Naming conventions**
| Kind | Rule | Example |
|---|---|---|
| Entry HTML | keep single `index.html` in `public/` | `public/index.html` |
| Component JS | kebab-case | `src/components/task-item.js` |
| Feature CSS | same name as component | `src/components/task-item.css` |
| Static assets | under `assets/` | `assets/logo.png` |

✅ Browser still loads; DevTools 404s = 0.
⏪ `git reset --hard HEAD~1` to undo restructure if broken.

**Learning goals & resources**
• Understand separation of concerns (public vs src vs assets).
• Practice updating paths after moving files.
• Learn naming conventions that scale.

Resources:
- MDN: File structure for front-end projects https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Project_organization
- Video "Stop throwing everything in app.js" https://youtu.be/3g4Efw62E6Q

✏️ Now add a learning-lesson entry describing *why* good structure helps future you.

---
## Lesson 4 – Create Your Supabase Project
🔹 Spin up a free backend database & auth service
📁 `supabase.sql`
🛠️
1. Go to **app.supabase.com** → “New project”.
2. Choose a strong database password (store it in a safe place).
3. Wait ~2 min until the project is ready. Copy **Project URL** and **anon key** (Settings → API).
4. In the Supabase dashboard click “SQL Editor” → new query → paste `supabase.sql` contents → **RUN**.
5. Click “Table Editor → tasks” to confirm the table exists.
✅ The `tasks` table displays columns `id`, `user_id`, `title`, `done`, `inserted_at`.
⏪ You can “Reset All” inside SQL Editor then rerun the script if mistakes happen.

---
## Lesson 5 – Wire the Frontend to Supabase
🔹 Tell the page how to reach your backend
📁 `scripts.js`
🛠️
1. At the very top replace the placeholders:
   ```js
   const SUPABASE_URL = "https://xyzcompany.supabase.co"; // paste yours
   const SUPABASE_ANON_KEY = "eyJhbGciOi...";             // paste anon key
   ```
2. **Save** the file – Live Server auto-reloads.
3. Open browser **DevTools → Console**: no red errors = good.
✅ In **Network → Fetch/XHR** you should see calls to `/auth/v1/token`.
⏪ Put the placeholders back if you accidentally leaked the wrong key and regenerate the key in Supabase.

---
## Lesson 6 – Sign Up & Sign In
🔹 Verify authentication works end-to-end
📁 *(runtime only)*
🛠️
1. In the app fill email + password (use a real address). Click **Sign up**.
2. Check your email inbox; click the confirmation link.
3. Return to the app; click **Sign in** with the same credentials.
4. The “Account” card now shows your email plus a **Sign out** button, and the “Tasks” card becomes visible.
✅ In Supabase dashboard → Authentication → Users you see one confirmed user.
⏪ Delete the user in Supabase and start again if confirmation email was lost.

---
## Lesson 7 – CRUD Your Tasks
🔹 Create, read, update, and delete data like a real app
📁 *(none changed)*
🛠️
1. Type “Buy milk” into the input → click **Add**.
2. Tick the checkbox to mark it done – text becomes grey with a line-through.
3. Refresh the page; the state persists (proof of database storage).
4. Click **Delete** → item disappears.
5. Add two more tasks, then toggle **Show completed** to hide finished work.
✅ Supabase Table Editor shows the rows reflecting your actions in real-time.
⏪ Delete rows in Table Editor or use **Delete** buttons to start fresh.

---
## Lesson 8 – Deploy to Production
🔹 Put your “prod” site on the public internet
📁 *(repository hosting settings)*
🛠️ Choose ONE of the free options below.

### Option A — GitHub Pages (100 % free, static, no build step)
1. In your repo on GitHub go to **Settings → Pages**.
2. Source = **Deploy from a branch**. Select **main** and folder `/public` (or root if you didn’t restructure).
3. Click **Save**; wait ~30 s. GitHub gives you `https://YOURNAME.github.io/lifetrack-starter/`.
4. Update your Supabase project’s *Auth → URL Configuration → Additional Redirect URLs* to include the new origin.

### Option B — Netlify (free tier, auto-build on push)
1. Visit netlify.com → **Add new site → Import from GitHub**.
2. Pick the repo; for build command leave blank (static) or `npm run build` if you later add Vite.
3. Publish directory = `public` or `/`.
4. Click **Deploy site**. Netlify gives `https://fancy-name.netlify.app`.

### Option C — Vercel (similar steps)

✅ Open the live URL on mobile; sign-up works with Supabase.
⏪ For GitHub Pages: switch branch dropdown back to **None** to unpublish. For Netlify/Vercel: rollback to previous deploy in the dashboard.

**Learning goals & resources**
• Understand static hosting vs build hosting.
• Configure Supabase redirect origins.
• Verify HTTPS and mobile accessibility.

Resources:
- GitHub Pages docs: https://docs.github.com/pages
- Netlify Site Deploy docs: https://docs.netlify.com/site-deploys/
- Vercel Quickstart: https://vercel.com/docs/concepts/deployments/quickstart

✏️ Add a learning-lesson entry describing which host you chose and why.

---
## Lesson 9 – Polish the UI
🔹 Practice small CSS/Tailwind tweaks & accessibility
📁 `index.html`, `styles.css`
🛠️
1. Change `bg-green-600` on the **Add** button to `bg-emerald-500 hover:bg-emerald-600`.
2. Add `aria-label="Add task"` to the **Add** button for screen-reader users.
3. In `styles.css` add:
   ```css
   body { scroll-behavior: smooth; }
   ```
4. Commit: `git add . && git commit -m "style: emerald buttons + smooth scroll"` and push – Netlify deploys automatically.
✅ Page still passes contrast checks (use DevTools → Lighthouse).
⏪ Revert commit with `git revert <commit-sha>` or edit classes back.

---
## Lesson 10 – Reflect & Version Bump
🔹 Capture lessons and tag your release
📁 `LEARNING_LESSONS.md`, `CHANGELOG.md`
🛠️
1. In `LEARNING_LESSONS.md` add **#003 — First production deploy (DATE)** with bullet-point reflections.
2. In `CHANGELOG.md` add a new header:
   ```md
   ## v0.2.0 — First public deploy (DATE)
   - Personalized branding
   - Connected to Supabase
   - Deployed to Netlify
   ```
3. Create a Git tag: `git tag v0.2.0 && git push --tags`.
✅ GitHub Releases now shows **v0.2.0**.
⏪ Edit the Markdown or delete the tag (`git tag -d v0.2.0`).

---
## Lesson 11 – Stretch Goals (Choose One)
🔹 Apply new knowledge by extending the app yourself
📁 varies
🛠️ Pick one of these mini-projects and follow its sub-steps:
### A. Add Google OAuth
1. In Supabase → Authentication → Providers → enable **Google**.
2. In `scripts.js` add a new button `btn-google` and call `client.auth.signInWithOAuth({ provider: "google" })`.
3. Update UI to hide email/password when user signs in with Google.
### B. Due-date Reminders
1. In Supabase SQL run: `alter table tasks add column due_at timestamptz;`.
2. Add `<input type="date">` next to task title field.
3. Create an Edge Function that emails the user 24 h before `due_at`.
### C. Offline Cache
1. When `loadTasks()` succeeds, also write data to `localStorage`.
2. On page load, render tasks from localStorage first, then sync.
3. Add a toast “⚠️ Offline – changes will sync later” based on `navigator.onLine`.
✅ Demo your chosen feature to a friend.
⏪ Use `git checkout -b feature-X` before experimenting; you can always delete the branch.

---
## Lesson 12 – Create & Customize AI Macros
🔹 Speed up repetitive AI requests with prompt “macros”
📁 `prompts/*.md`, *optional* `.vscode/lifetrack-ai.code-snippets`
🛠️ Step-by-step
1. Open the `prompts/` folder; notice **check-my-work.md**, **make-it-clearer.md**, **run-holistic.md**.
2. In VS Code press **F1 → Preferences: Configure User Snippets → New Global Snippets file**. Name it `lifetrack-ai.code-snippets`.
3. Paste the JSON below (adjust paths/prefixes as you like):
```json
{
  "AI – Check My Work": {
    "prefix": "ai-check",
    "body": [
      "# Prompt — Check my work",
      "",
      "Review my most recent changes in this repo (@workspace) and provide:",
      "",
      "1) Three clear improvements in plain English.",
      "2) A simple verification checklist for each improvement.",
      "3) Any accessibility concerns (labels, contrast, focus).",
      "4) One rollback step if I don't like the change."
    ]
  },
  "AI – Make It Clearer": {
    "prefix": "ai-clear",
    "body": [
      "# Prompt — Make it clearer",
      "",
      "Improve headings, spacing, and button clarity in this site. Keep it mobile-first and accessible. Provide:",
      "",
      "- BEFORE/AFTER snippets,",
      "- a one-paragraph explanation,",
      "- a quick test list (what to click, what to see),",
      "- and a rollback step."
    ]
  },
  "AI – Run Holistic": {
    "prefix": "ai-holistic",
    "body": [
      "# Prompt — Run holistic",
      "",
      "Act as a helpful reviewer. Using @workspace, return:",
      "",
      "- A quick health check (readability, accessibility, mobile).",
      "- Any obvious JS issues (null checks, event handlers, errors).",
      "- For Supabase integration: confirm auth calls, CRUD paths, and note that RLS requires anon key only.",
      "- A 5-step prioritized fix list with copy-pastable changes.",
      "- A verification checklist and a rollback step."
    ]
  }
}
```
4. Save the snippet file. Now in any Copilot Chat window type `ai-check` and press **Tab** → the full prompt appears.
5. Create your *own* macro: duplicate one block, change `prefix` to something memorable, and edit the `body` lines.
6. (Optional) Map a keyboard shortcut: **Preferences → Keyboard Shortcuts**, search `Insert Snippet`, bind e.g. **Ctrl+Alt+C**.
✅ Typing `ai-clear` expands to the clarity prompt; shortcut works too.
*(See `docs/prompt-engineering-card.md` for more prompt-craft tips.)*
⏪ Disable by renaming `lifetrack-ai.code-snippets` to end with `.disabled` or deleting unwanted blocks.

**Learning goals & resources**
• Understand the concept of editor snippets/macros.
• Convert repetitive markdown prompts into time-saving shortcuts.
• Customize snippets to fit personal workflows.

Resources:
- VS Code User Snippets docs: https://code.visualstudio.com/docs/editor/userdefinedsnippets
- Quick demo video: https://youtu.be/Ql3EF6HCPZI

---
### Beyond v0.1 – More Ideas
1. 🔔 **Reminders** – add `due_at` column …

---
### Next-Level Stretch: Full-Stack Variant
Want to graduate from static site + Supabase to a “real” front-end + back-end server, but still stay beginner-friendly? Try this path:

1. **Swap frontend to Vite + React**
   - Run `npm create vite@latest lifetrack-react -- --template react` inside a new folder.
   - Copy `public/`, `assets/`, and your Supabase calls (`auth.js`, `tasks.js`) into React components.
   - Keep Supabase client logic identical.
2. **Add a tiny Node/Express API**
   - `npm i express cors`
   - Create `server/index.js`:
     ```js
     import express from 'express';
     const app = express();
     app.get('/health', (_, res) => res.send('ok'));
     app.listen(4000);
     ```
   - Purpose: prepares you for routes that might proxy or add server-side secrets later.
3. **Run both with one command**
   - Install concurrently: `npm i -D concurrently`
   - Add scripts:
     ```json
     "scripts": {
       "dev": "concurrently \"npm:start:server\" \"npm:start:client\"",
       "start:server": "node server/index.js",
       "start:client": "vite"
     }
     ```
4. **Deploy**
   - Push to GitHub; deploy backend to **Render.com free web service** (Dockerfile optional).
   - Deploy frontend via Netlify build step (`npm run build`).
5. **Keep Supabase** for database/auth—no need to roll your own.

If this feels doable, create a *new* repo called `lifetrack-fullstack` and follow the same lesson flow, marking new learning lessons as you go.