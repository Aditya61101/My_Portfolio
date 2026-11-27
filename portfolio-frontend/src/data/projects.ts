type Project = {
  name: string;
  summary: string;
  stack?: readonly string[];
  status?: "Case study pending";
  icon: "layers" | "spark" | "terminal" | "bell" | "file";
  artwork?: "graph" | "documents";
};

export const projects: readonly Project[] = [
  {
    name: "DecisionGuard",
    summary:
      "A GitHub App that checks pull requests against architecture decisions using a repository knowledge graph.",
    stack: ["Python", "FastAPI", "Neo4j", "GraphRAG"],
    icon: "layers",
    artwork: "graph",
  },
  {
    name: "ClaimIQ",
    summary: "Planned coverage of insurance claims evaluation.",
    status: "Case study pending",
    icon: "spark",
    artwork: "documents",
  },
  {
    name: "DevAssistant",
    summary:
      "A repository-aware workflow that moves GitHub issues toward reviewed pull requests.",
    stack: ["LangGraph", "RAG", "FastAPI"],
    icon: "terminal",
  },
  {
    name: "Notification System",
    summary: "A Java notification service with asynchronous workers, retries, and rate limiting.",
    stack: ["Java", "Concurrency"],
    icon: "bell",
  },
  {
    name: "Askin Astrology",
    summary: "Planned overview of a numerology application.",
    status: "Case study pending",
    icon: "file",
  },
];
