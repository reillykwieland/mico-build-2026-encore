# Lauren Daigle VIP Product Page — Implement Selected Direction

Implement the "Ornate gold heritage" product-page direction chosen by the user, adapted to the existing Behold 2026 assets, palette, and Shopify-portable constraints.

## Goals

- Give the product page the same warm, premium holiday feel as the splash page.
- Use the existing cream paper texture background and brand assets (Lauren photo, Lauren Daigle wordmark, Christmas Tour 2026 wordmark, holly, starburst).
- Keep the palette locked to the existing CSS variables: `--cream`, `--red-orange`, `--deep-green`, `--gold`.
- Keep the existing fonts (`Nickson Four` display, `Bourbon` text).
- Make the package price less prominent than in the prototype.

## Layout changes

```text
Desktop (>= 768px):
┌─────────────────────┬─────────────────────────────────────┐
│                     │                                     │
│   Lauren photo      │   Pre-Show Experience Upgrade       │
│   + wordmarks       │   Date / Location                   │
│   on cream paper    │   ───────── red rule ─────────      │
│                     │   $75.00   [– 1 +]   Add to cart   │
│                     │   ───────── gold rule ─────────     │
│                     │   Includes                          │
│                     │   • • • •                           │
│                     │   product description note          │
│                     │   ┌─────────────────────────┐       │
│                     │   │ Disclaimer              │       │
│                     │   └─────────────────────────┘       │
└─────────────────────┴─────────────────────────────────────┘

Mobile (< 768px):
Stacked single column:
1. Lauren photo + wordmarks
2. Title / date / location
3. Price (subdued) + qty + Add to cart
4. Includes
5. Product description
6. Disclaimer
```

## Specific changes

1. **Media column**
   - Keep Lauren photo and both wordmarks.
   - Place them directly on the cream paper texture, no dark background.
   - Optional: add a subtle holly or starburst accent, reused from the splash page assets.

2. **Info column**
   - Title: "Pre-Show Experience Upgrade" in Nickson Four, deep green, large but not oversized.
   - Date/location metafield placeholders in deep green, uppercase tracking, modest size.
   - Red rule below the date/location block.

3. **Purchase row**
   - Price displayed in a smaller, lighter style than the prototype (e.g. 22–26px, not bold, deep green or red-orange).
   - Quantity stepper (`– 1 +`) kept, deep-green bordered.
   - "Add to cart" button as the primary visual weight in the row.
   - Gold rule below the purchase row.

4. **Includes**
   - Left-aligned "Includes" label with a consistent gold/red line extending to the right.
   - Bulleted list with gold starburst or holly bullets.

5. **Product description**
   - Plain paragraph, left-aligned.
   - Marked as `{{ product.description }}` placeholder for Shopify.

6. **Disclaimer**
   - Native `<details>` / `<summary>` element.
   - Bordered box, styled to match the info panel.

## Shopify placeholders to preserve

- Price: `{{ product.price | money }}`
- Date/location: product metafields (keep placeholder comments)
- Description: `{{ product.description }}`
- Add-to-cart form: hidden `id` input, `quantity` input, submit button.

## Mobile behavior

- Stack to a single column below 768px.
- Reduce title and price sizes.
- Keep purchase controls usable on narrow screens.

## Files to edit

- `public/behold/vip-product.html`
- `public/behold/styles.css`

## Verification

- Capture desktop and mobile screenshots of `/behold/vip-product.html`.
- Confirm no black or near-black text/backgrounds are introduced.
- Confirm the price is visually subordinate to the title and Add to Cart button.
