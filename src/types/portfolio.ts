export type NavLink = {
  id: string;
  title: string;
};

export type SocialLink = {
  label: string;
  url: string;
};

export type Service = {
  title: string;
  icon: string;
  tools: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
  /** "live" renders the filled button; "code" renders the outlined one. */
  kind: "live" | "code";
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  image: string;
  links: ProjectLink[];
};

export type FeaturedProject = Project & {
  role: string;
  status: { label: string; tone: "teal" | "orange" };
  qr?: { href: string; image: string; alt: string };
};

export type GeoLocation = {
  name: string;
  region: string;
  /** Decimal degrees; south and west are negative. */
  lat: number;
  lon: number;
};

export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  description: string;
  skills: string[];
};
