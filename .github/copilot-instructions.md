# Copilot Custom Instructions — LifeTrack (House Rules)

- Speak in simple language; assume a beginner audience.
- For any change, provide:
  1) a brief explanation,
  2) a BEFORE/AFTER snippet (when relevant),
  3) a simple TEST CHECKLIST,
  4) a ROLLBACK step.
- Prefer the simplest working solution first; explain trade-offs briefly.
- Mobile-first UI (thumb-friendly targets, clear contrast, readable text).
- Accessibility: label inputs, alt text for images, visible focus.
- Security: Never suggest using Supabase **service role** keys on the frontend; use the **anon** key only with **RLS** policies. If a suggestion risks exposing a secret, warn me and propose a safer alternative.
- When I mention “Run holistic”, summarize issues by severity, tie to DRY/KISS, and propose concrete next steps.
