export type Project = {
  id: "decisionguard" | "claim-iq" | "dev-assistant" | "notifications" | "askin";
  name: string;
  summary: string;
  stack?: readonly string[];
  status?: string;
  icon: "layers" | "spark" | "terminal" | "bell" | "file";
  featured?: boolean;
  repository?: string;
  live?: string;
  details: {
    problem?: string;
    approach?: string;
    features?: readonly string[];
    architecture?: { caption: string; stages: readonly string[] };
    challenge?: string;
    outcome?: string;
    screenshots?: readonly { src: string; alt: string; width: number; height: number }[];
  };
};

export const projects: readonly Project[] = [
  {
    id: "decisionguard",
    name: "DecisionGuard",
    summary: "A GitHub App that checks pull requests against architecture decisions using a repository knowledge graph.",
    stack: ["Python", "FastAPI", "Neo4j", "GraphRAG"],
    icon: "layers",
    featured: true,
    details: {
      problem: "Architecture decisions can be hard to trace during review when the relevant code and decisions are spread across a repository.",
      approach: "Index repository relationships in Neo4j and retrieve architectural decisions and related code when a pull request is opened.",
      features: [
        "Repository dependency mapping and incremental indexing.",
        "Hybrid retrieval across graph relationships, keywords, and semantic matches.",
        "Evidence-backed findings delivered through GitHub Checks.",
      ],
      architecture: { caption: "Conceptual architecture review flow", stages: ["Pull request", "Repository graph + ADRs", "Evidence validation", "GitHub Checks"] },
      challenge: "Retrieve enough repository context to explain each finding and verify that it is backed by concrete evidence.",
    },
  },
  {
    id: "claim-iq",
    name: "ClaimIQ",
    summary: "An insurance claims backend that validates uploaded documents and routes claims through policy and consistency checks.",
    stack: ["Python", "FastAPI", "LangGraph", "SQLAlchemy"],
    status: "Backend prototype",
    icon: "spark",
    featured: true,
    repository: "https://github.com/Aditya61101/claimIQ",
    details: {
      problem: "Claims arrive with multiple document types and must be checked against the applicable policy before a decision can be assembled.",
      approach: "Separate the document validation and verification graph from the claim evaluation graph. Process uploads in the background so the upload response can return independently.",
      features: [
        "Claims and document upload endpoints in FastAPI.",
        "Document extraction paths for PDFs, images, and structured bills or reports.",
        "Conditional graph routing for consistency checks, policy checks, deeper extraction, and decision aggregation.",
      ],
      architecture: { caption: "Conceptual overview of selected backend stages", stages: ["Document intake", "Validate + verify", "Claim + policy checks", "Decision aggregation"] },
    },
  },
  {
    id: "dev-assistant",
    name: "DevAssistant",
    summary: "A repository-aware workflow that moves GitHub issues toward reviewed pull requests.",
    stack: ["LangGraph", "RAG", "FastAPI"],
    icon: "terminal",
    details: {
      problem: "Moving from an issue to a reviewable change requires relevant repository context and checkpoints between implementation stages.",
      approach: "Use a stateful LangGraph workflow to retrieve repository context, generate changes, and keep the stages reviewable.",
      features: ["Repository-aware code generation.", "Staged execution with review checkpoints.", "SSE-based progress updates."],
      architecture: { caption: "Conceptual issue-to-pull-request workflow", stages: ["GitHub issue", "Retrieve context", "Generate changes", "Review checkpoint", "Pull request"] },
    },
  },
  {
    id: "notifications",
    name: "Notification System",
    summary: "A Java notification service with asynchronous workers, retries, and rate limiting.",
    stack: ["Java", "Concurrency"],
    icon: "bell",
    repository: "https://github.com/Aditya61101/notification-system",
    details: {
      problem: "Notification submission should stay responsive when delivery is slow or needs to be retried.",
      approach: "Queue events for concurrent workers, then process validation, preferences, rate limits, and delivery as separate steps.",
      features: ["Asynchronous queue and worker threads.", "Exponential backoff with DelayQueue and a dead-letter queue.", "Per-user rate limiting using a thread-safe token bucket."],
      architecture: { caption: "Conceptual delivery flow based on the repository", stages: ["Submission", "Queue", "Worker", "Delivery attempt", "Retry or dead-letter handling"] },
      challenge: "Keep retries and per-user rate limits predictable while worker threads process submissions concurrently.",
    },
  },
  {
    id: "askin",
    name: "Askin Astrology",
    summary: "Planned overview of a numerology application.",
    status: "Case study pending",
    icon: "file",
    details: {
      approach: "The concept explores a digital report and a conversation around its findings. Product scope and implementation details are pending verification.",
      architecture: { caption: "Concept exploration", stages: ["Digital report", "Read selected findings", "Conversation"] },
    },
  },
];
