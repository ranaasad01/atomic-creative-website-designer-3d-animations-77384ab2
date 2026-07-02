export type NavLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  tags: string[];
  featured?: boolean;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  number: string;
};

// ─── Brand constants ───────────────────────────────────────────────────────────
export const BRAND = {
  name: "Axiom Studio",
  tagline: "Design Beyond Boundaries",
  email: "hello@axiomstudio.co",
  location: "New York, NY",
  accentOrange: "#ff3c00",
  accentPurple: "#7b2fff",
} as const;

// ─── Navigation (single source of truth) ──────────────────────────────────────
// Only the homepage exists right now. All non-home entries point to
// on-page section anchors so they never 404.
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Primary CTA shown in the navbar
export const navCTA = {
  label: "Let's Talk",
  href: "#contact",
};