import { achievements } from "./achievements";
import { education } from "./education";

export const highlights = [
  { title: "Enterprise AI", description: "Systems engineering at TCS", icon: "server" },
  { title: education.shortName, description: "Engineering graduate", icon: "cap" },
  { title: achievements[0].shortLabel, description: achievements[0].event, icon: "trophy" },
] as const;
