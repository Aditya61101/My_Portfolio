type SkillGroup = {
  title: string;
  icon: "code" | "database" | "spark" | "layout" | "cloud";
  tools: readonly string[];
};

export const skills: readonly SkillGroup[] = [
  { title: "Languages", icon: "code", tools: ["Python", "Java", "TypeScript", "SQL"] },
  {
    title: "Backend & data",
    icon: "database",
    tools: ["Flask", "FastAPI", "PostgreSQL", "Neo4j", "SQLAlchemy"],
  },
  {
    title: "AI systems",
    icon: "spark",
    tools: ["LangGraph", "LangChain", "RAG", "GraphRAG"],
  },
  { title: "Frontend", icon: "layout", tools: ["React", "Angular", "React Native"] },
  { title: "Cloud & tools", icon: "cloud", tools: ["Docker", "AWS", "Google Cloud", "Git"] },
];
