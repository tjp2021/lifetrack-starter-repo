# Anatomy of `index.html`

Below is a condensed view of our actual file with comments explaining each section.

```html
<!doctype html> <!-- tells browser we’re in HTML5 mode -->
<html lang="en">
<head>
  <meta charset="utf-8"> <!-- character encoding -->
  <title>LifeTrack — Tasks that stick</title> <!-- tab title -->
  <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- responsive scaling -->

  <!-- Tailwind CSS via CDN for quick styling; no build step needed -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Color-scheme hint so OS can pick light/dark palette correctly -->
  <meta name="color-scheme" content="light dark">
</head>
<body class="bg-gray-50 text-gray-900">
```
... *body trimmed for brevity* ...
```html
  <!-- Supabase SDK (connects to backend) -->
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <!-- Your application logic -->
  <script src="scripts.js"></script>
</body>
</html>
```

Keep this sheet open while reading Lesson 2 so you can map code to purpose.
