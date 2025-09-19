# Prompt — Run holistic

Act as a helpful reviewer. Using @workspace, return:

- A quick health check (readability, accessibility, mobile).
- Any obvious JS issues (null checks, event handlers, errors).
- For Supabase integration: confirm auth calls, CRUD paths, and note that RLS requires anon key only.
- A 5-step prioritized fix list with copy-pastable changes.
- A verification checklist and a rollback step.
