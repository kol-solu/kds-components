# PROJECT PLAN

Review entire code base to refactor as follow:

1. enforce kds_specifications to code base appropriately.
2. migrate code base from monolithic to reusable components based modular structure.
3. use favicon.svg as site favicon and src/assets/site-logo.svg is site logo.
4. replace site logo appropriately.
5. site-logo.svg is unstyle. make sure it is reactive to theme color light and dark automatically.

## recommended project structure:

```text
workspace/
├── docs/
│   └── KDS_SPECS.md          # KOLINN DESIGN SYSTEM SPECIFICATIONS
├── src/
│   ├── assets/
│   │   └── site-logo.svg     # Unstyled svg for site logo
│   ├── styles/
│   │   ├── tokens.css        # Core design tokens (Primitives, Semantics, Overlays)
│   │   ├── utilities.css     # Layout containers, typography, motion utils
│   │   └── components/       # Component-specific CSS modules
│   └── scripts/
│       ├── kds-core.js       # Core initialization & runtime state
│       └── components/       # Vanilla JavaScript behaviors
├── index.html                # Main entry page
├── favicon.svg               # site favicon
├── AGENTS.md                 # Directives & guidelines for AI autonomous agents
└── README.md
```

## RULES

1. KEEP ORIGINAL DESIGN PHILOSOPHY
2. DO NOT BREAK SITE LAYOUT
3. DO NOT BREAK FUNCTIONALITIES
