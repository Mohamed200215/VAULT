# VAULT

VAULT is a high-end sneaker and streetwear marketplace concept — a storefront with product listings, product detail pages, a cart, and auth screens.

## Pages

| Page | Description |
| --- | --- |
| [`index.html`](index.html) | Home page — hero, featured drops, and category highlights |
| [`listings.html`](listings.html) | Browsable product grid with search, filtering, and sorting |
| [`product.html`](product.html) | Product detail page with image gallery, sizing, and add-to-cart |
| [`cart.html`](cart.html) | Shopping cart with quantity management and order summary |
| [`auth.html`](auth.html) | Sign in / sign up screens |
| [`about.html`](about.html) | How VAULT works |

## Tech

HTML pages styled with Tailwind CSS (via CDN), built and bundled with **Vite**. The data layer and two of the interactive controls are **TypeScript** and **React**; everything else is the original vanilla JS, unchanged.

- [`src/store.ts`](src/store.ts) — the typed product catalog and cart logic (backed by `localStorage`), with interfaces in [`src/types.ts`](src/types.ts).
- [`src/client.ts`](src/client.ts) — a typed async client (`getProducts`, `getProduct`, `getCart`, `addToCart`, `updateCartQuantity`, `removeFromCart`, `getCartTotal`) wrapping the store behind Promises, the way a real API client would be shaped.
- [`src/components/CartList.tsx`](src/components/CartList.tsx) — the cart's line items, quantity input, and remove button (`cart.html`).
- [`src/components/ProductOptions.tsx`](src/components/ProductOptions.tsx) — the size picker, color picker, and Add to Cart button (`product.html`).
- [`src/entries/legacy.ts`](src/entries/legacy.ts) — attaches `window.vaultStore`/`formatPrice`/`updateCartBadge`, so the rest of each page's original inline `<script>` (checkout, buy-now, filtering/sorting, the image gallery, etc.) keeps working exactly as it did before.
- [`DESIGN.md`](DESIGN.md) documents the design system (color tokens, type scale).
- [`tests/store.test.ts`](tests/store.test.ts) — Vitest unit tests for cart math and product filtering/sorting.

## Project structure

```
.
├── index.html, listings.html, product.html, cart.html, auth.html, about.html
├── src/
│   ├── types.ts               # Product, CartEntry, ProductFilterOptions, SortKey, ...
│   ├── store.ts                # product data + cart logic (typed)
│   ├── client.ts                 # typed async wrapper around store.ts
│   ├── global.d.ts                # window.vaultStore/formatPrice/updateCartBadge typings
│   ├── components/
│   │   ├── CartList.tsx             # cart.html's line items + qty/remove controls
│   │   └── ProductOptions.tsx        # product.html's size/color/add-to-cart controls
│   └── entries/                       # per-page Vite entry points
│       ├── legacy.ts, cart.tsx, product.tsx
├── tests/
│   └── store.test.ts                   # Vitest: cart math + filter/sort
├── DESIGN.md                             # design tokens
├── vite.config.ts                         # multi-page build config
└── assets/
    ├── fonts/                              # custom typefaces
    └── images/
        ├── logo/
        └── products/                        # one folder per product, images numbered by gallery order
```

## Running locally

```bash
npm install
npm run dev       # start the Vite dev server
npm run build     # typecheck + production build to dist/
npm run preview   # serve the production build locally
npm test          # run the Vitest suite
```

## Deployment

A GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) builds the site with Vite and deploys `dist/` to GitHub Pages on every push to `master`.
