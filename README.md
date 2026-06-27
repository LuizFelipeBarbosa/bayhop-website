# BayHop — site

The BayHop product landing page, built with **Astro 5** and **Tailwind CSS v4**.

BayHop is a generative-UI app for Bay Area transit: you ask in plain language and
a language model streams back real interface — trip plans, live departure boards,
place lists, service alerts — rendered on top of an interactive map. This repo is
the marketing site for it, a faithful implementation of the `BayHop Site` design.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # static output -> dist/
npm run preview  # serve the production build
```

## How it's organized

```
src/
  pages/index.astro          # composes the page from the sections below
  layouts/Layout.astro       # <head>, fonts, imports the global stylesheet
  styles/global.css          # Tailwind v4 @theme tokens, keyframes, helpers
  data/
    site.ts                  # marketing-section content (hero, pipeline, modes, …)
    transit.ts               # map geometry + generative card sample data
  components/
    LineBullet.astro         # transit line bullet (auto-contrast text)
    JourneyStrip.astro       # journey timeline (walk / ride / transfer legs)
    TripPlanCard.astro       # interactive: expand steps, pick alternative routes
    DeparturesCard.astro     # live departure board
    ServiceAlertCard.astro   # service status + all-lines list
    BayHopResult.astro       # dispatcher -> the matching generative card
    PhoneMockup.astro         # iOS-framed map + draggable bottom sheet + animation
    sections/                # Nav, Hero, Thesis, Engine, Modes, LiveData,
                             #   ExploreShowcase, ModelClients, DesignSystem,
                             #   GetStarted, Footer
```

### Design tokens

The palette, fonts and animations live in `src/styles/global.css` as Tailwind v4
`@theme` tokens (`font-display`/`font-sans`/`font-mono`, the transit `line-*`
colors, the `brand-*` gradient endpoints, and the `bh-*` keyframe animations),
plus a few helpers (`.text-gradient`, `.ai-gradient`, `.bh-skeleton`).

Interactivity (the phone's draggable sheet + card switching, the trip card's
expand/select) is implemented with scoped vanilla `<script>` islands — no
client-side framework.
