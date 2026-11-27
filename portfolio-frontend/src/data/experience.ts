type Experience = {
  employer: string;
  role: string;
  period?: string;
  overview: string;
  details: readonly string[];
};

// Use the shared current-role evidence while the joining month is under review.
export const experience: readonly Experience[] = [
  {
    employer: "Tata Consultancy Services",
    role: "Systems Engineer",
    period: "Current role",
    overview: "Engineering enterprise software and generative AI workflows.",
    details: [
      "Develop backend APIs, streaming responses, and document processing workflows.",
      "Build conversational AI and multi-agent orchestration for enterprise use cases.",
    ],
  },
  {
    employer: "Regalo.club",
    role: "Software Development Intern",
    overview:
      "Built a React travel itinerary app with AI recommendations, WebSocket updates, and API caching.",
    details: [],
  },
];
