// Content for the BayHop marketing site sections.
// Transcribed verbatim from `BayHop Site.dc.html` -> renderVals().

export const C = {
  RED: "#ED1C24",
  YEL: "#FFC72C",
  ORG: "#F4922A",
  GRN: "#4DB848",
  BLU: "#0091D2",
  PUR: "#5A4BE0",
} as const;

export interface HeroStat {
  k: string;
  v: string;
}
export const heroStats: HeroStat[] = [
  { k: "15", v: "generative components" },
  { k: "3", v: "swappable LLM clients" },
  { k: "4", v: "platforms · iOS · Android · web · macOS" },
];

export interface PipelineStep {
  step: string;
  title: string;
  desc: string;
  file: string;
  tint: string;
}
export const pipeline: PipelineStep[] = [
  {
    step: "your message",
    title: "GenUiSession",
    desc: "Combines catalog + system prompt and adds per-turn context: time, location, itinerary.",
    file: "conversation.dart",
    tint: "#8E83F0",
  },
  {
    step: "→ prompt",
    title: "ModelClient",
    desc: "Default Inception Mercury 2 streams back A2UI JSON chunks, not prose.",
    file: "inception_model_client.dart",
    tint: "#4FB3E8",
  },
  {
    step: "→ A2UI",
    title: "Transport adapter",
    desc: "A2uiTransportAdapter feeds chunks into the SurfaceController as they arrive.",
    file: "genui · SurfaceController",
    tint: "#4DB848",
  },
  {
    step: "→ render",
    title: "genui Surface",
    desc: "Live Flutter widgets — only ever the widgets registered in the catalog.",
    file: "home_page.dart · Surface",
    tint: "#F4922A",
  },
];

export interface ModeFeat {
  h: string;
  t: string;
}
export interface Mode {
  name: string;
  icon: string;
  accent: string;
  file: string;
  blurb: string;
  feats: ModeFeat[];
}
export const modes: Mode[] = [
  {
    name: "Transit",
    icon: "🚆",
    accent: C.RED,
    file: "lib/home_page.dart",
    blurb:
      "A full-bleed OpenStreetMap map with a draggable, frosted bottom sheet that hosts the live generated UI.",
    feats: [
      {
        h: "Journey cards",
        t: "origin → destination options with a step-by-step timeline and a colored route drawn on the map.",
      },
      {
        h: "Live departure boards",
        t: "real-time BART + 511 SIRI data, 60s cache and 30s auto-refresh, with labeled fallback rows.",
      },
      {
        h: "Service alerts",
        t: "delays and disruptions surfaced as their own card type.",
      },
    ],
  },
  {
    name: "Explore",
    icon: "🧭",
    accent: C.PUR,
    file: "lib/explore/explore_page.dart",
    blurb:
      'A "Bay Area Explorer" that turns a vibe or neighborhood into a transit-friendly mini-adventure.',
    feats: [
      {
        h: "Place cards",
        t: "grounded in Google Places (New) — real venues with ratings, price, hours and photos.",
      },
      {
        h: "Exploration branches",
        t: "the model suggests directions to drill into ideas.",
      },
      {
        h: "Persistent itinerary",
        t: "saved locally, then handed off to the Transit tab to be routed in order.",
      },
    ],
  },
];

export interface DataSource {
  name: string;
  host: string;
  color: string;
  tint: string;
  desc: string;
  badge: string;
  badgeColor: string;
  badgeBg: string;
}
export const dataSources: DataSource[] = [
  {
    name: "BART real-time",
    host: "api.bart.gov",
    color: C.BLU,
    tint: "rgba(0,145,210,.12)",
    desc: "Live departures with a 60-second cache and 30-second auto-refresh.",
    badge: "Works out of the box",
    badgeColor: "#2E9E5B",
    badgeBg: "rgba(46,158,91,.12)",
  },
  {
    name: "511 SF Bay Open Data",
    host: "SIRI feed",
    color: C.ORG,
    tint: "rgba(244,146,42,.14)",
    desc: "Muni, Caltrain, AC Transit, ferries and other monitored operators beyond BART.",
    badge: "Optional · KEY_511",
    badgeColor: "#B07A12",
    badgeBg: "rgba(244,146,42,.13)",
  },
  {
    name: "Google Places (New)",
    host: "Places API v1",
    color: C.PUR,
    tint: "rgba(90,75,224,.12)",
    desc: "Real place cards in Explore and place search in Transit.",
    badge: "Optional · key",
    badgeColor: "#5A4BE0",
    badgeBg: "rgba(90,75,224,.12)",
  },
  {
    name: "OpenStreetMap",
    host: "flutter_map",
    color: C.GRN,
    tint: "rgba(77,184,72,.13)",
    desc: "Map background and route overlay via the public OSM tile server.",
    badge: "Built in",
    badgeColor: "#3C8A38",
    badgeBg: "rgba(77,184,72,.13)",
  },
];

export interface ModelClient {
  name: string;
  file: string;
  model: string;
  env: string;
  status: string;
  statusColor: string;
  statusBg: string;
}
export const clients: ModelClient[] = [
  {
    name: "InceptionModelClient",
    file: "inception_model_client.dart",
    model: "mercury-2",
    env: "INCEPTION_API_KEY",
    status: "Default · wired in",
    statusColor: "#9DEFC0",
    statusBg: "rgba(46,158,91,.16)",
  },
  {
    name: "GeminiModelClient",
    file: "gemini_model_client.dart",
    model: "gemini-3.5-flash",
    env: "GEMINI_API_KEY",
    status: "Opt in",
    statusColor: "#A3ABB2",
    statusBg: "rgba(255,255,255,.07)",
  },
  {
    name: "FeatherlessModelClient",
    file: "featherless_model_client.dart",
    model: "Qwen2.5-72B-Instruct",
    env: "FEATHERLESS_API_KEY",
    status: "Opt in",
    statusColor: "#A3ABB2",
    statusBg: "rgba(255,255,255,.07)",
  },
];

export interface ExploreFlowStep {
  n: string;
  h: string;
  t: string;
}
export const exploreFlow: ExploreFlowStep[] = [
  {
    n: "1",
    h: "A vibe becomes a surface",
    t: "The Explore prompt steers the model to emit a hero, a summary and a place mosaic — not a paragraph.",
  },
  {
    n: "2",
    h: "Places are real",
    t: "Every card is grounded in Google Places (New): ratings, price, hours and photos for actual venues.",
  },
  {
    n: "3",
    h: "Build, then route",
    t: "Add stops to a persistent itinerary saved with shared_preferences, then hand it off to Transit to route in order.",
  },
];

export const exploreCatalog: string[] = [
  "hero",
  "summary",
  "mosaic",
  "plan",
  "option",
  "place_search",
  "note",
];

export const exploreBranches: string[] = [
  "More like this",
  "Nightlife nearby",
  "Cheap eats",
  "Make it rainy-day",
];

export interface ExplorePlace {
  name: string;
  rating: string;
  price: string;
  hours: string;
  img: string;
}
export const explorePlaces: ExplorePlace[] = [
  { name: "Snail Bar", rating: "4.6", price: "$$", hours: "Open · til 11pm", img: "/img/explore/snail-bar.jpg" },
  { name: "Kingston 11", rating: "4.5", price: "$$", hours: "Open · til 10pm", img: "/img/explore/kingston-11.jpg" },
  { name: "Tara’s Organic", rating: "4.7", price: "$", hours: "Closes 9pm", img: "/img/explore/taras-organic.jpg" },
];

// hero image for the generated Explore surface
export const exploreHeroImg = "/img/explore/oakland-hero.jpg";

export interface StackItem {
  h: string;
  t: string;
  c: string;
}
export const stack: StackItem[] = [
  { h: "Flutter + Dart 3.12", t: "single codebase across mobile, web and desktop.", c: C.BLU },
  { h: "genui package", t: "A2UI rendering, surfaces, transport and catalog API.", c: C.PUR },
  { h: "flutter_map + geolocator", t: "OSM map, route overlay and nearest-stop lookup.", c: C.GRN },
  { h: "shared_preferences", t: "local persistence for the Explore itinerary.", c: C.ORG },
  { h: "very_good_analysis", t: "zero-issue static analysis and a green test run.", c: C.RED },
];

// nav links
export interface NavLink {
  href: string;
  label: string;
}
export const navLinks: NavLink[] = [
  { href: "#engine", label: "Engine" },
  { href: "#modes", label: "Modes" },
  { href: "#explore", label: "Explore" },
  { href: "#data", label: "Live data" },
  { href: "#models", label: "Models" },
];

export const GITHUB_URL = "https://github.com/LuizFelipeBarbosa/flutter-gen-ui";
