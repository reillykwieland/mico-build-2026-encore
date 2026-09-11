# Lauren Daigle "Behold" 2026 — VIP Upgrade Pages

Rebuild the Mico Ticketless layout with the Lauren Daigle Behold Christmas Tour 2026 artwork, colors, and fonts. Same two-page structure, same components, new art and content.

## Artwork

From the attached Photoshop file I'll export:
- The "Lauren Daigle / Behold" title lockup as the top banner logo
- The cut-out photo of Lauren as the hero image
- The cream paper-texture background
- The holly sprig and starburst accents as small decorative marks

Palette pulled straight from the poster: cream paper, red-orange, deep green, gold. The two uploaded fonts are used throughout — the bold condensed one for all headlines and buttons, the other for supporting text.

## Page 1 — Splash / tour page (`/`)

- Title lockup banner across the top
- Lauren cut-out hero with soft color-block shapes behind it, holly and stars as accents
- "VIP Upgrades" heading in an offset color block
- One package box (centered): **Lauren Daigle Pre-Show Experience Upgrade**
  - An Exclusive Pre-Show Acoustic Song Performance
  - An Intimate Q&A With Lauren Daigle
  - One (1) Specially Designed VIP Gift, Curated by Lauren Daigle
  - One (1) Commemorative VIP Keepsake Laminate
  - First Access To Merchandise Shopping
  - Venue First Entry
  - On Site VIP Host
- Ticketless disclaimer block
- Tour date rows with a "VIP Upgrades" button on each:
  - Dec 2, 2026 — Nashville, TN — Ryman Auditorium
  - Dec 3, 2026 — Nashville, TN — Ryman Auditorium
  - Dec 5, 2026 — New Orleans, LA — Saenger Theatre
  - Dec 12, 2026 — Orlando, FL — Dr. Phillips Center, Walt Disney Theater

## Page 2 — VIP product page (`/vip-product`)

Same as Mico's: hero image on the left, package title, event date/venue, price, package selector, quantity, add-to-cart button, INCLUDES bullet list, and the collapsible full terms block. Ticket links and cart action stay as placeholders until the Shopify products exist.

## Notes / open items

- No price was given, so the product page will show a placeholder price to swap in later.
- Only one package was provided; if a second tier exists, I can add it as a side-by-side box like Mico.
- This is built as a standalone page set ready to drop into the Shopify store; wiring it to real Shopify products and checkout is a follow-up step.

## Technical

- TanStack Start, two routes: `src/routes/index.tsx` and `src/routes/vip-product.tsx`, both with their own head metadata.
- Fonts registered via `@font-face` in `src/styles.css`; brand colors added as CSS variables (`--accent-red`, `--accent-green`, `--accent-gold`, cream background) and exposed through `@theme inline`, no hardcoded color utilities.
- PSD layers exported with ImageMagick to PNG/JPEG and referenced as image assets in `src/assets`.
- Shared package/tour data kept as typed arrays at the top of the route files so copy edits are one place.
