"use client";

import dynamic from "next/dynamic";
import { useInView } from "motion/react";
import { Component, useCallback, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { Icon, type IconName } from "../ui/icon";
import type { ModuleId } from "./core-types";

const CoreScene = dynamic(() => import("./core-scene"), { ssr: false });
const desktopMotion = "(min-width: 51.01rem) and (prefers-reduced-motion: no-preference)";
const serverFalse = () => false;
const subscribeMedia = (notify: () => void) => {
  const media = window.matchMedia(desktopMotion);
  media.addEventListener("change", notify);
  return () => media.removeEventListener("change", notify);
};
const subscribeVisibility = (notify: () => void) => {
  document.addEventListener("visibilitychange", notify);
  return () => document.removeEventListener("visibilitychange", notify);
};

export const coreModules = [
  { name: "Agentic AI", icon: "spark", position: "agent" },
  { name: "Backend systems", icon: "server", position: "backend" },
  { name: "System design", icon: "layers", position: "system" },
  { name: "Product development", icon: "cube", position: "product" },
] as const satisfies readonly { name: string; icon: IconName; position: ModuleId }[];

class SceneBoundary extends Component<{ children: ReactNode; onFailure: () => void }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onFailure();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export function CoreExperience({ fallback }: { fallback: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const approach = useInView(ref, { margin: "128px", once: true });
  const visible = useInView(ref, { amount: 0.1 });
  const [ready, setReady] = useState(false);
  const subscribeEligibility = useCallback((notify: () => void) => subscribeMedia(() => {
    setReady(false);
    notify();
  }), []);
  const eligible = useSyncExternalStore(subscribeEligibility, () => window.matchMedia(desktopMotion).matches, serverFalse);
  const pageVisible = useSyncExternalStore(subscribeVisibility, () => !document.hidden, serverFalse);
  const hydrated = useSyncExternalStore(() => () => {}, () => true, serverFalse);
  const [supported, setSupported] = useState(false);
  const [failed, setFailed] = useState(false);
  const [hovered, setHovered] = useState<ModuleId | null>(null);
  const [focused, setFocused] = useState<ModuleId | null>(null);
  const [pinned, setPinned] = useState<ModuleId | null>(null);

  useEffect(() => {
    if (!eligible || !approach || !pageVisible || supported || failed) return;
    const probe = () => {
      try {
        const gl = document.createElement("canvas").getContext("webgl2", { antialias: false });
        if (!gl) {
          setFailed(true);
          return;
        }
        gl.getExtension("WEBGL_lose_context")?.loseContext();
        setSupported(true);
      } catch {
        setFailed(true);
      }
    };
    if (typeof window.requestIdleCallback === "function") {
      const idle = window.requestIdleCallback(probe, { timeout: 700 });
      return () => window.cancelIdleCallback(idle);
    }
    const frame = requestAnimationFrame(probe);
    return () => cancelAnimationFrame(frame);
  }, [eligible, approach, pageVisible, supported, failed]);

  const onReady = useCallback(() => setReady(true), []);
  const onFailure = useCallback(() => setFailed(true), []);
  const onSelect = useCallback((id: ModuleId) => setPinned((current) => current === id ? null : id), []);
  const selected = hovered ?? focused ?? pinned;
  const mounted = eligible && supported && !failed;
  const running = visible && pageVisible;

  return (
    <div
      className="core-visual"
      ref={ref}
      data-module={selected ?? undefined}
      data-scene={mounted && ready ? (running ? "running" : "paused") : "fallback"}
    >
      <div className="core-visual__fallback" aria-hidden="true">{fallback}</div>
      {mounted ? (
        <div className="core-visual__canvas" aria-hidden="true">
          <SceneBoundary onFailure={onFailure}>
            <CoreScene
              running={running}
              selected={selected}
              onHover={setHovered}
              onSelect={onSelect}
              onReady={onReady}
              onFailure={onFailure}
            />
          </SceneBoundary>
        </div>
      ) : null}
      <ul className="core-visual__labels" aria-label="Areas of focus">
        {coreModules.map(({ name, icon, position }) => (
          <li key={position} className={`core-label-position core-label--${position}`} data-active={selected === position || undefined}>
            {hydrated ? (
              <button
                type="button"
                className="core-label"
                aria-pressed={pinned === position}
                onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(position); }}
                onPointerLeave={() => setHovered(null)}
                onFocus={() => setFocused(position)}
                onBlur={() => setFocused(null)}
                onClick={() => onSelect(position)}
              >
                <Icon name={icon} /><span>{name}</span>
              </button>
            ) : <span className="core-label"><Icon name={icon} /><span>{name}</span></span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
