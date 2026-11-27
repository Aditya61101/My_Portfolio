type Achievement = {
  title: string;
  event: string;
  shortLabel?: string;
};

export const achievements = [
  { title: "Bronze medal", event: "Inter IIT Tech Meet 11.0", shortLabel: "Inter IIT bronze" },
  { title: "Regional finalist", event: "AI Fridays Hackathon 2025" },
] as const satisfies readonly Achievement[];
