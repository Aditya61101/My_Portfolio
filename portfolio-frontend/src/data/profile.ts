type Profile = {
  name: string;
  description: string;
  links: readonly { label: string; href: string }[];
};

export const profile = {
  name: "Aditya Kumar",
  description: "Software engineer focused on backend systems and applied AI.",
  links: [
    { label: "Email", href: "mailto:adityakumarsanni.2001@gmail.com" },
    { label: "GitHub", href: "https://github.com/Aditya61101" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-kumar-337a08218/" },
  ],
} as const satisfies Profile;
