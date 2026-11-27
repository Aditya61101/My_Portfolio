import type { IconName } from "../components/ui/icon";

type Technology = {
  name: string;
  mark?: string;
  color?: string;
  icon?: IconName;
};

type SkillGroup = {
  title: string;
  icon: IconName;
  tools: readonly Technology[];
};

export const skills: readonly SkillGroup[] = [
  { title: "Programming languages", icon: "code", tools: [
    { name: "Python", mark: "python", color: "#79baff" },
    { name: "Java", icon: "coffee" },
    { name: "C++", mark: "cplusplus", color: "#8bcaff" },
    { name: "TypeScript", mark: "typescript", color: "#86bdff" },
    { name: "SQL", icon: "database" },
  ] },
  { title: "Backend & data", icon: "database", tools: [
    { name: "Flask", mark: "flask" },
    { name: "FastAPI", mark: "fastapi", color: "#6ce5c8" },
    { name: "Node.js", mark: "nodedotjs", color: "#94df8b" },
    { name: "PostgreSQL", mark: "postgresql", color: "#87bef2" },
    { name: "Neo4j", mark: "neo4j", color: "#87ccf2" },
    { name: "MongoDB", mark: "mongodb", color: "#7fe1a0" },
  ] },
  { title: "AI & agentic systems", icon: "spark", tools: [
    { name: "LangGraph", mark: "langgraph", color: "#a5e8bc" },
    { name: "LangChain", mark: "langchain", color: "#a5e8bc" },
    { name: "RAG", icon: "file" },
    { name: "GraphRAG", icon: "network" },
  ] },
  { title: "Frontend development", icon: "layout", tools: [
    { name: "React", mark: "react", color: "#7eddf6" },
    { name: "Angular", mark: "angular", color: "#f2a0cd" },
    { name: "React Native", mark: "react", color: "#7eddf6" },
  ] },
  { title: "Cloud & infrastructure", icon: "cloud", tools: [
    { name: "Docker", mark: "docker", color: "#7fc3ff" },
    { name: "AWS", icon: "cloud" },
    { name: "Google Cloud", mark: "googlecloud", color: "#8ac1ff" },
    { name: "Git", mark: "git", color: "#f19c84" },
  ] },
];

const showcaseNames = ["Python", "Java", "LangGraph", "Docker", "PostgreSQL", "React", "AWS", "Node.js", "MongoDB"];

export const showcasedSkills = showcaseNames.flatMap((name) =>
  skills.flatMap(({ tools }) => tools.filter((tool) => tool.name === name)),
);
