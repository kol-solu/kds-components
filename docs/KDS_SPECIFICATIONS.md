# KOLINN DESIGN SYSTEM: DESIGN SPECIFICATIONS

**This document defines the canonical design tokens, component specifications, and behavioral guidelines for proprietary interfaces, serving as the single source of truth across product engineering.**

```text
/. KOLINN DESIGN SYSTEM

A terminal-interface inspired design system engineered for rich interactivity, 
high-density legibility, strict accessibility, and deterministic state transitions.
```

---

## 1. Global Design Tokens

### Colors

#### Color Philosophy & Theme Parity

KDS relies on a terminal-native Nord palette split into two co-equal themes (Light Mode and Dark Mode). Semantic aliases map primitive color scales to intentional interface roles, guaranteeing proper contrast ratios and automatic theme parity.

#### Primitives (Light Mode)

| Token | Value | Description |
| :--- | :--- | :--- |
| `--kds-polar-0` | `#eceff4` | Base canvas background |
| `--kds-polar-1` | `#e5e9f0` | Raised surface background |
| `--kds-polar-2` | `#d8dee9` | Interactive surface hover |
| `--kds-polar-3` | `#c5cbd3` | Border default |
| `--kds-snow-0` | `#4c566a` | Low emphasis text / Muted |
| `--kds-snow-1` | `#3b4252` | Medium emphasis text / Body |
| `--kds-snow-2` | `#2e3440` | High emphasis text / Headings |
| `--kds-frost-0` | `#3f7a78` | Subtitle accent / Secondary brand |
| `--kds-frost-1` | `#1c647d` | Primary action / Primary accent |
| `--kds-frost-2` | `#2c5178` | Action hover / Focus ring |
| `--kds-frost-3` | `#2e436e` | Action active |
| `--kds-aurora-red` | `#a2333d` | Semantic Error |
| `--kds-aurora-orange` | `#a04d2b` | Semantic Warning (High) |
| `--kds-aurora-yellow` | `#8f6e00` | Semantic Warning (Standard) |
| `--kds-aurora-green` | `#4f7e44` | Semantic Success |
| `--kds-aurora-purple` | `#7a4d8a` | Semantic Special / Highlight |

#### Primitives (Dark Mode)

| Token | Value | Description |
| :--- | :--- | :--- |
| `--kds-polar-0` | `#2e3440` | Base canvas background |
| `--kds-polar-1` | `#3b4252` | Raised surface background |
| `--kds-polar-2` | `#434c5e` | Interactive surface hover |
| `--kds-polar-3` | `#4c566a` | Border default |
| `--kds-snow-0` | `#d8dee9` | Low emphasis text / Muted |
| `--kds-snow-1` | `#e5e9f0` | Medium emphasis text / Body |
| `--kds-snow-2` | `#eceff4` | High emphasis text / Headings |
| `--kds-frost-0` | `#8fbcbb` | Subtitle accent / Secondary brand |
| `--kds-frost-1` | `#8fc5d4` | Primary action / Primary accent |
| `--kds-frost-2` | `#81a1c1` | Action hover / Focus ring |
| `--kds-frost-3` | `#5e81ac` | Action active |
| `--kds-aurora-red` | `#bf616a` | Semantic Error |
| `--kds-aurora-orange` | `#d08770` | Semantic Warning (High) |
| `--kds-aurora-yellow` | `#ebcb8b` | Semantic Warning (Standard) |
| `--kds-aurora-green` | `#a3be8c` | Semantic Success |
| `--kds-aurora-purple` | `#b48ead` | Semantic Special / Highlight |

#### Semantic Aliases

| Token | Value (Light) | Value (Dark) | Description |
| :--- | :--- | :--- | :--- |
| `--kds-surface-canvas` | `var(--kds-polar-0)` | `var(--kds-polar-0)` | Base page background |
| `--kds-surface-raised` | `var(--kds-polar-1)` | `var(--kds-polar-1)` | Cards, inputs, floating panels |
| `--kds-surface-hover` | `var(--kds-polar-2)` | `var(--kds-polar-2)` | Surface hover state |
| `--kds-border-default` | `var(--kds-polar-3)` | `var(--kds-polar-3)` | Component borders |
| `--kds-text-primary` | `var(--kds-snow-2)` | `var(--kds-snow-2)` | High-emphasis headings |
| `--kds-text-body` | `var(--kds-snow-1)` | `var(--kds-snow-1)` | Standard body prose |
| `--kds-text-muted` | `var(--kds-snow-0)` | `var(--kds-snow-0)` | Low-emphasis secondary text |
| `--kds-accent-subtitle` | `var(--kds-frost-0)` | `var(--kds-frost-0)` | Mono headers & categories |
| `--kds-action-primary` | `var(--kds-frost-1)` | `var(--kds-frost-1)` | Primary interactive buttons & prompts |
| `--kds-action-hover` | `var(--kds-frost-2)` | `var(--kds-frost-2)` | Interaction hover |
| `--kds-action-active` | `var(--kds-frost-3)` | `var(--kds-frost-3)` | Interaction active / press state |
| `--kds-focus-ring` | `var(--kds-frost-2)` | `var(--kds-frost-2)` | Focus visible outline/ring color |
| `--kds-on-action` | `#eceff4` | `#2e3440` | Text color overlaid on primary action |
| `--kds-status-error` | `var(--kds-aurora-red)` | `var(--kds-aurora-red)` | Error state indicator |
| `--kds-status-warning` | `var(--kds-aurora-yellow)` | `var(--kds-aurora-yellow)` | Warning state indicator |
| `--kds-status-success` | `var(--kds-aurora-green)` | `var(--kds-aurora-green)` | Success state / online badge |
| `--kds-status-special` | `var(--kds-aurora-purple)` | `var(--kds-aurora-purple)` | Special tag / feature highlight |

#### Translucent & Overlay Chrome Tokens

| Token | Light Value | Dark Value | Description |
| :--- | :--- | :--- | :--- |
| `--kds-nav-bg` | `rgba(236, 239, 244, 0.72)` | `rgba(46, 52, 64, 0.72)` | Fixed header glass background |
| `--kds-dropdown-bg` | `rgba(229, 233, 240, 0.85)` | `rgba(59, 66, 82, 0.85)` | Mega menu & flyout background |
| `--kds-curtain-bg` | `rgba(236, 239, 244, 0.45)` | `rgba(46, 52, 64, 0.55)` | Backdrop drape overlay |
| `--kds-focus-alpha` | `rgba(44, 81, 120, 0.22)` | `rgba(129, 161, 193, 0.22)` | Fallback translucent focus halo |
| `--kds-error-alpha` | `rgba(162, 51, 61, 0.18)` | `rgba(191, 97, 106, 0.18)` | Fallback translucent error halo |

---

### Typography

#### Font Families

- **`--kds-font-mono`**: `"Fira Code", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`
- **`--kds-font-sans`**: `"Fira Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`

#### Type Scale & Line Heights

| Token | Size | Line Height Token | Line Height Value | Primary Usage |
| :--- | :--- | :--- | :--- | :--- |
| `--kds-caption-12` | `0.75rem` (`12px`) | `--kds-lh-caption-12` | `1.0625rem` (`17px`) | Category labels, badges, helpers |
| `--kds-small-14` | `0.875rem` (`14px`) | `--kds-lh-small-14` | `1.3125rem` (`21px`) | Sub-navigation, table data, buttons |
| `--kds-body-16` | `1rem` (`16px`) | `--kds-lh-body-16` | `1.5625rem` (`25px`) | Standard body copy, inputs |
| `--kds-title-20` | `1.25rem` (`20px`) | `--kds-lh-title-20` | `1.625rem` (`26px`) | Card titles, accordion triggers |
| `--kds-heading-24` | `1.5rem` (`24px`) | `--kds-lh-heading-24` | `1.875rem` (`30px`) | Section headers (mobile/tablet) |
| `--kds-heading-32` | `2rem` (`32px`) | `--kds-lh-heading-32` | `2.375rem` (`38px`) | Primary section headers (desktop) |
| `--kds-heading-48` | `3rem` (`48px`) | `--kds-lh-heading-48` | `3.3125rem` (`53px`) | Display titles |
| `--kds-display-64` | `4rem` (`64px`) | `--kds-lh-display-64` | `4.1875rem` (`67px`) | Hero headers |

---

### Iconography

#### Iconpacks

CoreUI Free and CoreUI Brand iconpacks are used to keep things minimal, high compatability and availability for various types of icons.

- **CoreUI Free:**

  - reference link: <https://icones.js.org/collection/cil>
  - icon prefix: cil
  
- **CoreUI Brand:**

  - reference link: <https://icones.js.org/collection/cib>
  - icon prefix: cib

#### Standard Sizing

Icons must maintain crisp alignment on an 8px rhythm grid.

| Token | Value | Usage |
| :--- | :--- | :--- |
| `--kds-icon-sm` | `16px` | Inline links, compact action triggers |
| `--kds-icon-md` | `24px` | Standard UI actions, global navigation items |
| `--kds-icon-lg` | `32px` | Section callouts, modal headers |
| `--kds-icon-xl` | `40px` | Hero features, status hero icons |

---

### Spacing & Grid Rhythm

All component dimensions, margins, and paddings derive strictly from an 8px vertical rhythm.

| Token | Value | Pixel Equivalent |
| :--- | :--- | :--- |
| `--kds-space-half` | `0.25rem` | `4px` |
| `--kds-space-1` | `0.5rem` | `8px` |
| `--kds-space-2` | `1rem` | `16px` |
| `--kds-space-3` | `1.5rem` | `24px` |
| `--kds-space-4` | `2rem` | `32px` |
| `--kds-space-6` | `3rem` | `48px` |
| `--kds-space-8` | `4rem` | `64px` |
| `--kds-space-10` | `5rem` | `80px` |

---

### Radii

Corner radii are standardized to maintain precise geometry across terminal containers.

| Token | Value | Usage |
| :--- | :--- | :--- |
| `--kds-radius-sm` | `4px` | Buttons, badges, code snippets, input fields |
| `--kds-radius-md` | `8px` | Cards, flyout containers, command bars |
| `--kds-radius-lg` | `12px` | Large modals, floating dialogs |
| `--kds-radius-full` | `9999px` | Circular icon buttons, status pills |

---

### Motion & Staggering

#### Timing & Easing Curves

Animations rely on GPU-accelerated properties (`transform`, `opacity`, `grid-template-rows`) to ensure a stable 60fps frame rate.

| Token | Value | Description |
| :--- | :--- | :--- |
| `--kds-transition-fast` | `0.15s` | Micro-interactions (hover, active focus) |
| `--kds-transition-base` | `0.25s` | Standard UI state changes |
| `--kds-transition-slow` | `0.38s` | Expand/collapse transitions (mega panel height) |
| `--kds-transition-mega` | `0.40s` | Complex multi-element orchestration |
| `--kds-transition-timing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Smooth entrance curve |
| `--kds-stagger-base` | `0.04s` | Delay step per staggered list item |

#### Stagger Sequence Specification

When opening flyout panels or expanding accordions, child list items receive progressive delays:

- Item 1: `calc(var(--kds-stagger-base) * 1)` (`0.04s`)
- Item 2: `calc(var(--kds-stagger-base) * 2)` (`0.08s`)
- Item 3: `calc(var(--kds-stagger-base) * 3)` (`0.12s`)
- Item $N$: `calc(var(--kds-stagger-base) * N)`

---

### Layout, Layering & Elevation

#### Layout Structure

| Token | Value | Description |
| :--- | :--- | :--- |
| `--kds-container-max` | `90rem` (`1440px`) | Maximum container width |
| `--kds-gutter` | `clamp(8px, 2.5vw, 32px)` | Responsive page margin padding |
| `--kds-nav-height` | `48px` | Global structural header height |
| `--kds-panel-cols` | `3` (default) | Mega menu column count |

#### Z-Index Layering Order

| Token | Value | Layer Application |
| :--- | :--- | :--- |
| `--kds-z-curtain` | `9990` | Backdrop curtain for active flyouts |
| `--kds-z-mobile-menu` | `9998` | Mobile navigation drawer |
| `--kds-z-header` | `9999` | Global structural header container |
| `--kds-z-hamburger` | `10001` | Mobile menu hamburger toggle |
| `--kds-z-skip-link` | `10002` | Accessibility skip link |

#### Elevation Shadows

| Token | Value (Light) | Value (Dark) | Description |
| :--- | :--- | :--- | :--- |
| `--kds-shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | `0 1px 2px rgba(0,0,0,0.3)` | Subtle separation |
| `--kds-shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | `0 4px 6px rgba(0,0,0,0.35)` | Cards, standard dropdowns |
| `--kds-shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | `0 10px 15px rgba(0,0,0,0.4)` | Floating dialogs |
| `--kds-shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | `0 20px 25px rgba(0,0,0,0.5)` | High elevation / Mega menus |
| `--kds-dropdown-shadow` | `0 20px 40px rgba(46,52,64,0.14)` | `0 20px 40px rgba(0,0,0,0.4)` | Mega menu container shadow |

---

## 2. Component Specifications

### 1. Buttons & Triggers

- **Typography**:

  - Font: `var(--kds-font-mono)`
  - Size: `var(--kds-small-14)`
  - Weight: `600`, Line-height: `1`

- **Dimensions**:

  - Padding: `11px var(--kds-space-2)`
  - Radius: `var(--kds-radius-sm)`
  
- **Primary Variant**:

  - BG: `var(--kds-action-primary)`.
  - Text: `var(--kds-on-action)`.
  - Hover: `var(--kds-action-hover)`.
  - Active: `var(--kds-action-active)`.
  
- **Icon Button Variant**:

  - Border-radius: `var(--kds-radius-full)`.
  - Minimum Touch Target: `44px x 44px`.
  - Hover BG: `var(--kds-surface-hover)`.

### 2. Search Command Bar & Inputs

- **Container BG**: `var(--kds-surface-raised)` (standardized across desktop and mobile contexts).
- **Border**: `1px solid var(--kds-border-default)`, Radius: `var(--kds-radius-md)`.
- **Typography**: Input Font: `var(--kds-font-mono)`, Size: `max(1rem, 16px)` to avoid auto-zoom on iOS browsers.
- **Prompt Indicator**: Terminal symbol `$`, Font: `var(--kds-font-mono)`, Color: `var(--kds-action-primary)`.
- **Focus State**:

  - `border-color: var(--kds-focus-ring)`
  - `box-shadow: 0 0 0 4px var(--kds-focus-alpha)` (Fallback for legacy engines)
  - `box-shadow: 0 0 0 4px color-mix(in srgb, var(--kds-focus-ring) 22%, transparent)`
  
- **Error State**:

  - `border-color: var(--kds-status-error)`
  - `box-shadow: 0 0 0 4px var(--kds-error-alpha)` (Fallback for legacy engines)
  - `box-shadow: 0 0 0 4px color-mix(in srgb, var(--kds-status-error) 18%, transparent)`

### 3. Navigation Header & Mega Menu Flyout

- **Header Height**: `var(--kds-nav-height)`, BG: `var(--kds-nav-bg)` with `backdrop-filter: blur(20px)`.
- **Mega Flyout Container (Pure CSS Grid Expansion Pattern)**:

```css
.kds-mega-flyout {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows var(--kds-transition-slow) var(--kds-transition-timing);
    background: var(--kds-dropdown-bg);
    backdrop-filter: blur(20px);
    box-shadow: var(--kds-dropdown-shadow);
}
.kds-mega-flyout.is-open {
    grid-template-rows: 1fr;
}
.kds-mega-flyout-inner {
    overflow: hidden;
}
```

- **Curtain Overlay**:

  - BG: `var(--kds-curtain-bg)` with `backdrop-filter: blur(14px)`.
  - Visibility controlled via `.is-visible` class and synced with `inert` backdrop state.
  
- **Mega Menu Headers**:

  - Font: `var(--kds-font-mono)`, Size: `var(--kds-caption-12)`, Weight: `500`, Transform: Uppercase, Color: `var(--kds-accent-subtitle)`.

### 4. Mobile Navigation Accordion

- **Drawer Height Calculation**: `calc(100dvh - var(--kds-nav-height) - env(safe-area-inset-bottom, 0px))`, BG: `var(--kds-surface-canvas)`.
- **Accordion Triggers**:

  - Min-height: `48px` for reliable touch targets.
  - Font: `var(--kds-font-mono)`, Size: `var(--kds-title-20)`, Weight: `600`.
  
- **Accordion Links**:

  - Min-height: `44px` padding block.
  - Font: `var(--kds-font-sans)`, Size: `var(--kds-body-16)`, Color: `var(--kds-text-muted)`.
  - Hover Color: `var(--kds-action-primary)`.

---

## 3. Engineering & Behavioral Rules

### Accessibility Guidelines (`a11y`)

1. **Focus Rings**: All focusable elements MUST expose a visible focus ring using `var(--kds-focus-ring)` during `:focus-visible`.
2. **Focus Containment (`inert`)**: Non-visible overlays (such as closed mega menus or closed mobile menus) MUST have the HTML `inert` attribute applied alongside `aria-hidden="true"`.
3. **Contrast Standard**: Text-to-background combinations MUST maintain a contrast ratio of $\ge 4.5:1$ (WCAG AA).
4. **Touch Target Dimensions**: Interactive triggers on touch devices MUST satisfy a minimum hit area of `44px x 44px`.
5. **No Auto-Focus on Activation**: Navigation drawers and search flyouts MUST NOT auto-focus input fields upon opening to allow clean screen-reader announcements and prevent accidental virtual keyboard expansion on mobile devices.

### Theme Switching Mechanism

Themes are toggled at runtime using the `data-theme` attribute on the `<html>` root element:

```html
<!-- Forced Dark -->
<html data-theme="dark">

<!-- Forced Light -->
<html data-theme="light">

<!-- System Automatic -->
<html data-theme="auto">
```

When `data-theme="auto"` is set, CSS media query `@media (prefers-color-scheme: dark)` determines token resolution.

### Motion Comfort (`prefers-reduced-motion`)

When `prefers-reduced-motion: reduce` is detected:

- All transition durations and animation durations MUST collapse to `0.01ms`.
- Text shimmers, cursor blinks, and pulse animations MUST pause or resolve to static fallback states.

```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

```text
/. DOCUMENT INFO

Author: Kolinn
Author URL: https://kolinn.dev/
Version: kds_v1.2
Status: ready
```

-- end --
