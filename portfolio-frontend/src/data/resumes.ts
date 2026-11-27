type Resume = {
  title: string;
  description: string;
  icon: "server" | "spark";
  url: `https://drive.google.com/file/d/${string}/view?usp=sharing`;
};

export const resumes: readonly Resume[] = [
  {
    title: "Backend Engineering",
    description: "Backend systems, APIs, and data workflows.",
    icon: "server",
    url: "https://drive.google.com/file/d/1F8LlbvZNKRhsvRojyVLbFSaE5eRXDLIq/view?usp=sharing",
  },
  {
    title: "Generative AI Engineering",
    description: "Applied AI and agentic workflows.",
    icon: "spark",
    url: "https://drive.google.com/file/d/1eIxLaSiMfQRUjWNkVqmqIUtkAuoIuPNZ/view?usp=sharing",
  },
];
