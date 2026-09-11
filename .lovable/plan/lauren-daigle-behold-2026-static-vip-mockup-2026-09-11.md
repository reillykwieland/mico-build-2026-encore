# Lauren Daigle "Behold" 2026 — Static VIP Mockup

Two static pages, plain HTML + one CSS file, portable into a Shopify Horizon theme as Liquid sections. Layout follows the Mico ticketless build; art, fonts and copy are the Behold 2026 poster.

## Build constraints

- Plain HTML and CSS only — no Tailwind, no component libraries, no JS frameworks, no animation libraries.
- One stylesheet with named classes (`.ld-hero`, `.ld-package`, `.ld-date-row`), CSS variables for palette (`--cream`, `--red-orange`, `--deep-green`, `--gold`) and the two font families.
- Both fonts loaded with `@font-face`, referenced only by family name so paths can be swapped.
- Images as plain `<img>` tags or CSS `background-image` with simple relative paths.
- No routing, state, cart or checkout logic. Both pages fully static.
- Mobile first; single column under 768px, date rows keep the button below the venue on small screens.

## Artwork exported from the PSD

Title lockup ("Live in Concert / Lauren Daigle / Behold"), Lauren cut-out photo, cream paper texture, holly sprig, starburst accents — saved into `assets/` as PNG/JPEG.

Palette from the poster: cream, red-orange, deep green, gold.

## Page 1 — `/`

- Title lockup banner
- Lauren cut-out hero with holly and starburst accents
- "VIP Upgrades" heading
- One package box: **Lauren Daigle Pre-Show Experience Upgrade**
  - An Exclusive Pre-Show Acoustic Song Performance
  - An Intimate Q&A With Lauren Daigle
  - One (1) Specially Designed VIP Gift, Curated by Lauren Daigle
  - One (1) Commemorative VIP Keepsake Laminate
  - First Access To Merchandise Shopping
  - Venue First Entry
  - On Site VIP Host
- Ticketless disclaimer
- Four tour date rows, each with a "VIP Upgrades" link (`href="#"` placeholder):
  - Dec 2, 2026 — Nashville, TN — Ryman Auditorium
  - Dec 3, 2026 — Nashville, TN — Ryman Auditorium
  - Dec 5, 2026 — New Orleans, LA — Saenger Theatre
  - Dec 11, 2026 — Orlando, FL — Dr. Phillips Center, Walt Disney Theater

## Page 2 — `/vip-product`

- Hero image left, details right
- Package title, price `$75.00` with a separate line `+ 10% service fee` (plain text)
- Show-date `<select>` with the four tour dates (no package selector — one package only)
- Plain `<form>`: hidden `id` input (placeholder value), `quantity` number input, submit button
- INCLUDES bullet list
- Full terms in a native `<details>` / `<summary>` element

## Deliverable

`index.html`, `vip-product.html`, one stylesheet, and an `assets/` folder holding the fonts and exported images — ready to export as a zip. Both pages are also reachable in the live preview.
