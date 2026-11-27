type Experience = {
  employer: string;
  role: string;
  period?: string;
  overview: string;
  details: readonly string[];
  technicalDetails?: readonly string[];
};

export const experience: readonly Experience[] = [
  {
    employer: "Tata Consultancy Services",
    role: "Systems Engineer",
    period: "Sep 2024 – Present",
    overview: "Engineering enterprise software and generative AI workflows.",
    details: [
      "Develop backend APIs, streaming responses, and document processing workflows.",
      "Build conversational AI and multi-agent orchestration for enterprise use cases.",
    ],
    technicalDetails: [
      "Used bounded worker concurrency for document extraction and classification.",
      "Built incremental response delivery with Server-Sent Events.",
      "Developed stateful conversations with source attribution and history summarization.",
    ],
  },
  {
    employer: "Regalo.club",
    role: "Software Development Intern",
    period: "Apr 2023 – Jun 2023",
    overview:
      "Built a React travel itinerary app with AI recommendations, WebSocket updates, and API caching.",
    details: [],
  },
];
