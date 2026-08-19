# VAULT

VAULT is a high-end sneaker and streetwear marketplace concept — a static front-end storefront with product listings, product detail pages, a cart, and auth screens.

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

Plain HTML, CSS (Tailwind via CDN), and vanilla JavaScript — no build step required.

- [`store.js`](store.js) holds the product catalog and cart logic (backed by `localStorage`).
- [`DESIGN.md`](DESIGN.md) documents the design system (color tokens, type scale).

## Project structure

```
.
├── index.html, listings.html, product.html, cart.html, auth.html, about.html
├── store.js                 # product data + cart logic
├── DESIGN.md                 # design tokens
└── assets/
    ├── fonts/                 # custom typefaces
    └── images/
        ├── logo/
        └── products/          # one folder per product, images numbered by gallery order
```

## Running locally

This is a static site — no build tools needed. Serve the folder with any static server, e.g.:

```bash
npx serve .
```

Then open the printed local URL in your browser.

## Deployment

Configured to be served as-is via GitHub Pages from the repository root.
