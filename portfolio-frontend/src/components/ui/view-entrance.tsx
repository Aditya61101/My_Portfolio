"use client";

import { useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

export function ViewEntrance({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.24 });

  return <div ref={ref} data-entered={visible ? "" : undefined}>{children}</div>;
}
