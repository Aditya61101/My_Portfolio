"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function AmbientMotion({
  children,
  className,
  pauseControl = false,
}: {
  children: ReactNode;
  className: string;
  pauseControl?: boolean;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = root.current;
    if (!element || !("IntersectionObserver" in window)) return;

    const updateVisibility = () => element.toggleAttribute("data-page-visible", !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      element.toggleAttribute("data-in-view", entry.isIntersecting);
    });
    observer.observe(element);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  return (
    <div ref={root} className={className} data-motion-paused={paused || undefined}>
      {children}
      {pauseControl ? (
        <button
          className="skill-showcase__pause"
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          Pause showcase
        </button>
      ) : null}
    </div>
  );
}
