---
name: VAULT High-Fashion Sneaker System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e4e2e1'
  on-surface-variant: '#c6c4d9'
  inverse-surface: '#e4e2e1'
  inverse-on-surface: '#303030'
  outline: '#908fa2'
  outline-variant: '#454556'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#0c00aa'
  primary-container: '#2f2fe4'
  on-primary-container: '#bdbfff'
  inverse-primary: '#3f42f1'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#ffb4a1'
  on-tertiary: '#611300'
  tertiary-container: '#9b2400'
  on-tertiary-container: '#ffb19d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#04006d'
  on-primary-fixed-variant: '#201cdb'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdbd2'
  tertiary-fixed-dim: '#ffb4a1'
  on-tertiary-fixed: '#3c0800'
  on-tertiary-fixed-variant: '#891f00'
  background: '#131313'
  on-background: '#e4e2e1'
  surface-variant: '#353535'
typography:
  headline-display:
    fontFamily: Bebas Neue
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 110px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
spacing:
  base: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 128px
---

## Brand & Style

The visual identity of the design system is rooted in **Neo-Brutalism** and **High-Fashion Editorial**. It aims to evoke the exclusivity of a luxury boutique and the raw energy of underground streetwear culture. The interface functions as a neutral, high-contrast gallery that recedes to prioritize oversized, high-fidelity product imagery.

The design narrative focuses on three pillars:
- **Exclusivity:** A dark-first interface that mimics the "lights-out" experience of a premium showroom.
- **Precision:** Mathematical grid layouts and sharp-edged components that echo architectural design.
- **Impact:** Dramatic typography and an aggressive electric accent color to drive user action and highlight scarcity.

## Colors

This design system uses a strictly dark-mode palette to maintain a premium feel.

- **Primary (Electric Blue):** Used exclusively for call-to-action buttons, high-priority notifications, and active states. It provides a sharp, neon contrast against the deep black.
- **Surface (Deep Black):** The primary background color. It creates a seamless canvas for high-fashion photography.
- **Typography (Off-White):** Used for all body text and secondary headings to ensure legibility without the harshness of pure white.
- **Borders (Charcoal):** A low-contrast neutral used for structural lines, dividers, and component strokes to maintain a "layered flat" aesthetic.

## Typography

Typography is used as a structural element. 

- **Display & Headlines:** Utilize **Bebas Neue** for an authoritative, editorial look. On desktop, large display text should often overlap imagery or bleed to the edges of the grid.
- **Body & Interface:** **Hanken Grotesk** provides a clean, modern contrast that ensures transactional data is easy to parse.
- **Data & Metadata:** **JetBrains Mono** is used for technical specs (SKU, price, size, release dates), reinforcing the "market" and "vault" aspect of the brand.

## Layout & Spacing

The layout is based on a **strict 12-column fixed grid** for desktop and a **4-column fluid grid** for mobile. 

- **Editorial Density:** Large gaps between sections (128px+) create an editorial rhythm, allowing the eye to rest between high-impact product showcases.
- **The "Vault" Aspect Ratio:** Imagery should prioritize 4:5 or 1:1 ratios. Product cards should use a 1px #333 border with generous internal padding (32px) to frame the items like museum artifacts.
- **Alignment:** Use hard-left alignment for all typography. Avoid centered text blocks to maintain the brutalist, structured aesthetic.

## Elevation & Depth

This design system rejects traditional soft shadows in favor of **Tonal Layering and Borders**.

- **Z-Index Strategy:** Surface depth is communicated by shifting background colors from #0A0A0A (Base) to #121212 (Elevated Surfaces like Modals or Menus).
- **Hard Borders:** All interactive containers are defined by 1px solid strokes (#333). 
- **Active States:** When an element is focused or active, the stroke color switches to the Primary Electric Blue (#2F2FE4).
- **Glassmorphism (Limited):** Use a high-intensity backdrop blur (20px) on the navigation bar only, keeping the background color at 80% opacity to allow product imagery to scroll underneath.

## Shapes

The shape language is **strictly geometric and sharp**. 

- **0px Radius:** All buttons, input fields, and product containers must have 90-degree corners. This reinforces the "architectural" and "industrial" tone of high-end streetwear.
- **Iconography:** Use stroke-based icons with a 1.5px or 2px weight. Avoid rounded terminals on icon paths; use miter joins for a sharper appearance.

## Components

### Buttons
- **Primary:** Solid Electric Blue (#2F2FE4) background, Off-White text, All-Caps Bebas Neue. No rounded corners.
- **Secondary:** Transparent background, 1px Off-White border. On hover, invert to solid Off-White with Black text.

### Input Fields
- Underline-only or 4-sided 1px #333 border. Labels use JetBrains Mono in All-Caps above the field. Active state triggers an Electric Blue border.

### Product Cards
- A strict "Frame" approach. A 1px #333 border surrounds the entire image and data area. No shadows. The price is always displayed in JetBrains Mono to emphasize the "market value."

### Chips/Tags
- Rectangular with 1px borders. Used for "In Stock," "Rare," or "Authenticated" badges.

### Lists
- Separated by 1px horizontal dividers (#333). Large padding (24px) between list items to maintain the premium feel.