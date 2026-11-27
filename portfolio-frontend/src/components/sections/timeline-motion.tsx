"use client";

import { motion, useInView, useReducedMotion, useScroll } from "motion/react";
import { useRef, type ReactNode } from "react";

export function TimelineMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const entered = useInView(ref, { amount: 0.2, once: true });
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 82%", "end 57%"] });

  return (
    <div ref={ref} className="timeline-motion" data-entered={entered ? "" : undefined}>
      <motion.span
        className="timeline-motion__light"
        style={{ scaleY: reduced ? 1 : scrollYProgress }}
        aria-hidden="true"
      />
      <ol className="timeline">{children}</ol>
    </div>
  );
}
