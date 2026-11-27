export const moduleIds = ["agent", "backend", "system", "product"] as const;
export type ModuleId = (typeof moduleIds)[number];

export type CoreSceneProps = {
  running: boolean;
  selected: ModuleId | null;
  onHover: (id: ModuleId | null) => void;
  onSelect: (id: ModuleId) => void;
  onReady: () => void;
  onFailure: () => void;
};
