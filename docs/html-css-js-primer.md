# HTML / CSS / JavaScript — 5-Minute Primer

New to the web stack? Start here.

## What is HTML?
"HyperText Markup Language" — the **structure** of the page. Think of it as the skeleton.
- Tags like `<h1>` and `<p>` become headings and paragraphs.
- Our project’s entry point is `index.html`.
- MDN crash-course: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started

## What is CSS?
"Cascading Style Sheets" — the **paint & layout**.
- Decides colors, spacing, fonts.
- We mostly use **Tailwind CSS** (utility classes) plus a tiny `styles.css`.
- MDN 5-min intro: https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started

## What is JavaScript?
The language that **runs in the browser** and makes things move.
- Handles clicks, saves tasks to Supabase, toggles dark mode, etc.
- Lives in `scripts.js` in this starter.
- MDN 5-min intro: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript

## How they work together
```
index.html  ←  skeleton
   | references
styles.css   ←  paint (via Tailwind utilities)
   | references
scripts.js   ←  interactivity + data
```

That’s it! Once you understand those three layers, every lesson will make sense.
