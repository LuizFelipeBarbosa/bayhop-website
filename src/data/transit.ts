// Transit / generative-card sample data shared by the phone mockup and the
// standalone card components. Transcribed from `BayHop.dc.html` _buildData()
// and the individual card `Component.SAMPLE` blocks.

export const RED = "#ED1C24";
export const YEL = "#FFC72C";
export const ORG = "#F4922A";
export const GRN = "#4DB848";
export const BLU = "#0091D2";

// ---------- shared types ----------
export interface Seg {
  color: string;
  weight?: number;
  transfer?: boolean;
  kind?: "walk";
  dashed?: boolean;
}
export type StepKind = "walk" | "board" | "ride" | "change";
export interface Step {
  kind: StepKind;
  time: string;
  title: string;
  detail: string;
  color?: string;
}
export interface Route {
  badge: string;
  total: string;
  depart: string;
  arrive: string;
  changes: string;
  fare: string;
  crowd: string;
  walkStart: string;
  walkEnd: string;
  startColor: string;
  endColor: string;
  segments: Seg[];
  steps: Step[];
}
export interface Departure {
  color: string;
  name: string;
  dest: string;
  plat: string;
  min: string;
}
export type Tone = "good" | "warn" | "severe";
export interface AllLine {
  name: string;
  color: string;
  tone?: Tone;
  status?: string;
}

// ---------- semantic itinerary step helpers ----------
const walk = (time: string, title: string, detail: string): Step => ({ kind: "walk", time, title, detail });
const board = (color: string, time: string, title: string, detail: string): Step => ({ kind: "board", time, title, detail, color });
const ride = (color: string, time: string, title: string, detail: string): Step => ({ kind: "ride", time, title, detail, color });
const change = (time: string, title: string, detail: string): Step => ({ kind: "change", time, title, detail });

// ---------- trip routes (Downtown Berkeley -> SFO) ----------
export const tripRoutes: Route[] = [
  {
    badge: "Fastest", total: "58", depart: "9:44", arrive: "10:42", changes: "Direct", fare: "$11.95", crowd: "Some seats",
    walkStart: "3", walkEnd: "4", startColor: RED, endColor: RED, segments: [{ color: RED, weight: 1 }],
    steps: [
      walk("9:44", "Walk to Downtown Berkeley", "3 min · 0.2 mi"),
      board(RED, "9:47", "Board Red Line", "toward SFO / Millbrae · Platform 2"),
      ride(RED, "35 min", "Ride 18 stops", "MacArthur · 12th St · Embarcadero · Powell · Daly City"),
      board(RED, "10:38", "Arrive SFO", "Platform 1"),
      walk("10:42", "Walk to terminal", "4 min"),
    ],
  },
  {
    badge: "1 change", total: "66", depart: "9:48", arrive: "10:54", changes: "1 change", fare: "$11.95", crowd: "Crowded",
    walkStart: "3", walkEnd: "4", startColor: RED, endColor: YEL, segments: [{ color: RED, weight: 0.5 }, { color: YEL, weight: 0.5, transfer: true }],
    steps: [
      walk("9:48", "Walk to Downtown Berkeley", "3 min"),
      board(RED, "9:51", "Board Red Line", "toward Daly City · Platform 2"),
      ride(RED, "4 min", "Ride 1 stop", "to MacArthur"),
      change("9:57", "Change at MacArthur", "cross-platform · 5 min wait"),
      board(YEL, "10:02", "Board Yellow Line", "toward SFO / Millbrae · Platform 1"),
      ride(YEL, "48 min", "Ride 16 stops", "Embarcadero · Powell · Daly City"),
      board(YEL, "10:50", "Arrive SFO", "Platform 1"),
      walk("10:54", "Walk to terminal", "4 min"),
    ],
  },
  {
    badge: "Fewer stairs", total: "71", depart: "9:40", arrive: "10:51", changes: "Direct", fare: "$11.95", crowd: "Quiet",
    walkStart: "6", walkEnd: "4", startColor: RED, endColor: RED, segments: [{ color: RED, weight: 1 }],
    steps: [
      walk("9:40", "Walk to Ashby", "6 min"),
      board(RED, "9:46", "Board Red Line", "toward SFO / Millbrae · Platform 2"),
      ride(RED, "41 min", "Ride 20 stops", "local · MacArthur · Embarcadero · Daly City"),
      board(RED, "10:47", "Arrive SFO", "Platform 1"),
      walk("10:51", "Walk to terminal", "4 min"),
    ],
  },
];

// ---------- departures (Embarcadero) ----------
export const departuresSample: Departure[] = [
  { color: RED, name: "Red", dest: "SFO / Millbrae", plat: "1", min: "4" },
  { color: YEL, name: "Yellow", dest: "Antioch", plat: "2", min: "6" },
  { color: BLU, name: "Blue", dest: "Dublin / Plsntn", plat: "1", min: "9" },
  { color: RED, name: "Red", dest: "Richmond", plat: "2", min: "12" },
  { color: GRN, name: "Green", dest: "Berryessa", plat: "1", min: "17" },
  { color: YEL, name: "Yellow", dest: "Millbrae", plat: "2", min: "19" },
];

// ---------- service alert (Yellow Line) ----------
export const alertDefaults = {
  line: "Yellow",
  color: YEL,
  status: "Minor Delays",
  tone: "warn" as Tone,
  updated: "9:42",
  note: "Trains are running about 8–12 minutes apart between Pittsburg/Bay Point and SFO after an earlier equipment problem. Allow a little extra time this morning.",
};
export const alertAllLines: AllLine[] = [
  { name: "Red", color: RED, tone: "good", status: "Good service" },
  { name: "Blue", color: BLU, tone: "good", status: "Good service" },
  { name: "Green", color: GRN, tone: "good", status: "Good service" },
  { name: "Orange", color: ORG, tone: "good", status: "Good service" },
  { name: "Muni Metro", color: "#2E9E5B", tone: "good", status: "Good service" },
  { name: "Caltrain", color: "#9B2D3A", tone: "warn", status: "Minor Delays" },
];

// ---------- design-system section journey-strip demos ----------
export const directSeg: Seg[] = [{ color: RED, weight: 1 }];
export const changeSeg: Seg[] = [
  { color: RED, weight: 0.5 },
  { color: YEL, weight: 0.5, transfer: true },
];

// ============================================================
//  PHONE MOCKUP MAP DATA
// ============================================================
export interface PolyLine {
  c: string;
  p: string;
}
export const bartLines: PolyLine[] = [
  // Yellow (offset, under)
  { c: YEL, p: "303,98 319,160 337,240 356,302 316,358 242,391 216,423 191,454 169,489 161,548 159,576 163,602 175,634 197,664" },
  { c: YEL, p: "197,664 243,690" },
  { c: YEL, p: "197,664 203,708" },
  // East Bay fan into the Oakland junction
  { c: ORG, p: "402,360 374,336 351,304" },
  { c: GRN, p: "402,398 380,366 356,320" },
  { c: BLU, p: "402,438 386,398 360,330" },
  // Red (over)
  { c: RED, p: "296,96 312,158 330,238 349,300 309,356 235,389 209,421 184,452 162,487 154,546 152,574 156,600 168,632 190,662" },
  { c: RED, p: "190,662 236,688" },
  { c: RED, p: "190,662 196,706" },
];

export const muniLines: PolyLine[] = [
  { c: "#C99700", p: "241,393 168,491 150,556" },
  { c: "#4FA6D9", p: "238,391 165,489 120,600" },
  { c: "#8E44AD", p: "236,390 163,488 92,648" },
  { c: "#2E9E5B", p: "233,388 160,486 108,712" },
  { c: "#2D5BD0", p: "231,386 158,484 60,560" },
  { c: "#E0383E", p: "235,389 244,470 252,560 258,648" },
];

export const caltrain = "120,500 106,548 98,600 92,660";

export interface Station {
  x: number;
  y: number;
  r: number;
  stroke: string;
  sw: number;
  label?: string;
  lx?: number;
  ly?: number;
  anchor?: string;
}
const IC = "#2A3036";
const MIN = "#9AA4AB";
const inter = (x: number, y: number, label?: string, lx?: number, ly?: number, anchor?: string): Station =>
  ({ x, y, r: 6.4, stroke: IC, sw: 3, label, lx, ly, anchor });
const mn = (x: number, y: number): Station => ({ x, y, r: 3.6, stroke: MIN, sw: 2 });
export const stations: Station[] = [
  mn(296, 96),
  inter(312, 158),
  inter(330, 238, "MACARTHUR", 343, 241, "start"),
  inter(349, 300, "12TH ST", 362, 303, "start"),
  mn(309, 356),
  inter(235, 389, "EMBARCADERO", 222, 386, "end"),
  mn(209, 421), mn(184, 452),
  inter(162, 487, "CIVIC CENTER", 149, 490, "end"),
  mn(154, 546), mn(152, 574),
  inter(156, 600, "DALY CITY", 143, 603, "end"),
  mn(168, 632), mn(190, 662),
  inter(236, 688),
  mn(196, 706), mn(106, 548), mn(98, 600),
];

export const routePoints =
  "312,158 330,238 349,300 309,356 235,389 209,421 184,452 162,487 154,546 152,574 156,600 168,632 190,662 236,688";

// ============================================================
//  PHONE GENERATIVE SPECS (a query resolves to one of these)
// ============================================================
export type CardKind = "trip" | "departures" | "alert";

export interface TripSpec {
  type: "trip"; query: string; origin: string; destination: string; meta: string; routes: Route[];
}
export interface DeparturesSpec {
  type: "departures"; query: string; station: string; updated: string; departures: Departure[];
}
export interface AlertSpec {
  type: "alert"; query: string; line: string; color: string; status: string; tone: Tone; updated: string; note: string; allLines: AllLine[];
}
export type Spec = TripSpec | DeparturesSpec | AlertSpec;

export const phoneSpecs: Record<CardKind, Spec> = {
  trip: {
    type: "trip", query: "Downtown Berkeley to SFO", origin: "Downtown Berkeley",
    destination: "SFO", meta: "3 routes · leave now · BART", routes: tripRoutes,
  },
  departures: {
    type: "departures", query: "Next trains from Embarcadero", station: "Embarcadero",
    updated: "9:42", departures: departuresSample,
  },
  alert: {
    type: "alert", query: "Is the Yellow Line delayed?", line: "Yellow", color: YEL,
    status: "Minor Delays", tone: "warn", updated: "9:42", note: alertDefaults.note, allLines: alertAllLines,
  },
};

export const cardLabels: Record<CardKind, string> = {
  trip: "Downtown Berkeley → SFO",
  departures: "Embarcadero · next trains",
  alert: "Yellow Line · status",
};
export const genSubs: Record<CardKind, string> = {
  trip: "Planning routes across BART",
  departures: "Reading live arrivals",
  alert: "Checking service status",
};

export interface Suggestion {
  type: CardKind; title: string; sub: string; tint: string; icon: "trip" | "dep" | "alert";
}
export const suggestions: Suggestion[] = [
  { type: "trip", title: "Downtown Berkeley → SFO", sub: "Trip · fastest 58 min", tint: "rgba(237,28,36,.12)", icon: "trip" },
  { type: "departures", title: "Next trains from Embarcadero", sub: "Live departures", tint: "rgba(0,145,210,.12)", icon: "dep" },
  { type: "alert", title: "Is the Yellow Line delayed?", sub: "Service status", tint: "rgba(232,146,11,.14)", icon: "alert" },
];

export const chips = [{ label: "Nearby" }, { label: "Home" }, { label: "Work" }];
export const nearby = { station: "Powell St", name: "Red", dest: "SFO", min: "4" };
