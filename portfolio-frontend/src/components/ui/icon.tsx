import type { ReactNode } from "react";

const lineIcons = {
  down: <path d="M12 4v15m-5-5 5 5 5-5" />,
  external: <path d="M6 18 18 6M8 6h10v10" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-14-2 16" />,
  spark: <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM20 2v5m-2.5-2.5h5M5 18v4m-2-2h4" />,
  layers: <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  cube: <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm-8 4.5 8 4.5 8-4.5M12 12v9" />,
  server: <><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /><path d="M7 7h.1m-.1 10h.1M11 7h6m-6 10h6" /></>,
  cap: <path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v5c4 3 8 3 12 0v-5m4-2v7" />,
  trophy: <><path d="M7 4h10v4a5 5 0 0 1-10 0V4Zm5 9v6m-4 1h8M7 6H3v2a4 4 0 0 0 4 4m10-6h4v2a4 4 0 0 1-4 4" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3M3 13h18m-11-1v3h4v-3" /></>,
  terminal: <path d="m5 6 6 6-6 6m8 0h7" />,
  bell: <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Zm-8 12a2 2 0 0 0 4 0" />,
  file: <><path d="M6 3h8l4 4v14H6V3Zm8 0v5h4m-9 4h6m-6 4h6" /></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>,
  layout: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18m-12 0v11" /></>,
  cloud: <path d="M6 18h12a4 4 0 0 0 .3-8A6 6 0 0 0 7 9a4.5 4.5 0 0 0-1 9Z" />,
  brackets: <path d="M9 4H7a2 2 0 0 0-2 2v4l-2 2 2 2v4a2 2 0 0 0 2 2h2m6-16h2a2 2 0 0 1 2 2v4l2 2-2 2v4a2 2 0 0 1-2 2h-2" />,
} satisfies Record<string, ReactNode>;

type BrandIcon = "github" | "linkedin";
export type IconName = keyof typeof lineIcons | BrandIcon;

const brandPaths: Record<BrandIcon, string> = {
  github: "M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.09.67-3.74-1.32-3.74-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.67.08-.67 1.12.08 1.7 1.14 1.7 1.14.99 1.7 2.6 1.2 3.23.91.1-.72.39-1.2.7-1.48-2.47-.28-5.06-1.24-5.06-5.49 0-1.21.43-2.21 1.14-2.99-.11-.28-.5-1.42.11-2.95 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.22 2.67.11 2.95.71.78 1.14 1.78 1.14 2.99 0 4.26-2.6 5.2-5.08 5.48.4.35.75 1.02.75 2.06V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z",
  linkedin: "M19.8 3H4.2A1.2 1.2 0 0 0 3 4.2v15.6A1.2 1.2 0 0 0 4.2 21h15.6a1.2 1.2 0 0 0 1.2-1.2V4.2A1.2 1.2 0 0 0 19.8 3ZM8.3 18.3H5.7V9.8h2.6v8.5ZM7 8.7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm11.3 9.6h-2.6v-4.1c0-1 0-2.2-1.35-2.2s-1.56 1-1.56 2.13v4.17h-2.6V9.8h2.5V11h.04a2.75 2.75 0 0 1 2.47-1.36c2.64 0 3.1 1.73 3.1 3.98v4.68Z",
};

export function Icon({ name }: { name: IconName }) {
  const isBrand = name === "github" || name === "linkedin";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill={isBrand ? "currentColor" : "none"}
      stroke={isBrand ? undefined : "currentColor"}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {isBrand ? <path d={brandPaths[name]} /> : lineIcons[name]}
    </svg>
  );
}
