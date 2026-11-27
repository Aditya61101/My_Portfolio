"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent, type PointerEvent, type ReactNode } from "react";
import type { Project } from "../../data/projects";
import { Icon } from "../ui/icon";
import { Button, TechTag } from "../ui/primitives";

function ProjectDetails({ project }: { project: Project }) {
  const { summary, details } = project;
  const blocks = [
    { title: "Problem", text: details.problem },
    { title: "Engineering approach", text: details.approach },
    { title: "Technical challenge", text: details.challenge },
    { title: "Outcome", text: details.outcome },
  ];

  return (
    <div className="project-dialog__body">
      <p id="project-dialog-overview">{summary}</p>
      {blocks.map(({ title, text }) => text ? (
        <section className="project-detail-block" key={title}><h3>{title}</h3><p>{text}</p></section>
      ) : null)}
      {details.features?.length ? (
        <section className="project-detail-block">
          <h3>Verified features</h3>
          <ul className="accent-list">{details.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </section>
      ) : null}
      {details.architecture ? (
        <figure className="project-detail-flow">
          <figcaption>{details.architecture.caption}</figcaption>
          <ol>{details.architecture.stages.map((stage) => <li key={stage}>{stage}</li>)}</ol>
        </figure>
      ) : null}
      {project.stack?.length ? (
        <section className="project-detail-block">
          <h3>Technology stack</h3>
          <ul className="tag-list">{project.stack.map((technology) => <li key={technology}><TechTag>{technology}</TechTag></li>)}</ul>
        </section>
      ) : null}
      {details.screenshots?.length ? (
        <section className="project-detail-block">
          <h3>Project screenshots</h3>
          <div className="project-detail-media">
            {details.screenshots.map((screenshot) => <Image key={screenshot.src} {...screenshot} />)}
          </div>
        </section>
      ) : null}
      {project.repository || project.live ? (
        <div className="project-card__actions">
          {project.repository ? <Button href={project.repository}><Icon name="github" /> Repository <Icon name="external" /></Button> : null}
          {project.live ? <Button href={project.live}>Live app <Icon name="external" /></Button> : null}
        </div>
      ) : null}
    </div>
  );
}

export function ProjectGallery({ children, projects }: { children: ReactNode; projects: readonly Project[] }) {
  const gallery = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const closingTimer = useRef<number | undefined>(undefined);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const element = gallery.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const updateVisibility = () => element.toggleAttribute("data-page-visible", !document.hidden);
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) entry.target.toggleAttribute("data-playing", entry.isIntersecting);
    }, { threshold: 0.14 });
    element.querySelectorAll(".project-card").forEach((card) => observer.observe(card));
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    const element = dialog.current;
    if (selected && element && !element.open) {
      element.showModal();
      element.scrollTop = 0;
      closeButton.current?.focus({ preventScroll: true });
    }
  }, [selected]);

  useEffect(() => () => window.clearTimeout(closingTimer.current), []);

  function openFromCard(event: MouseEvent<HTMLDivElement>) {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest<HTMLButtonElement>("button[data-project-trigger]");
    if (!button) return;
    const project = projects.find(({ id }) => id === button.dataset.projectTrigger);
    if (!project) return;
    trigger.current = button;
    setSelected(project);
  }

  function positionSpotlight(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || !(event.target instanceof Element)) return;
    const card = event.target.closest<HTMLElement>(".project-card");
    if (!card) return;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
  }

  function dismiss() {
    const element = dialog.current;
    if (!element?.open || element.hasAttribute("data-closing")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      closeProject();
      return;
    }
    element.setAttribute("data-closing", "");
    closingTimer.current = window.setTimeout(closeProject, 185);
  }

  function closeProject() {
    window.clearTimeout(closingTimer.current);
    const element = dialog.current;
    const opener = trigger.current;
    trigger.current = null;
    element?.removeAttribute("data-closing");
    element?.close();
    setSelected(null);
    opener?.focus({ preventScroll: true });
  }

  function dismissBackdrop(event: MouseEvent<HTMLDialogElement>) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) dismiss();
  }

  return (
    <div ref={gallery} className="project-gallery" onClick={openFromCard} onPointerMove={positionSpotlight}>
      {children}
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        aria-describedby="project-dialog-overview"
        onCancel={(event) => { event.preventDefault(); dismiss(); }}
        onClick={dismissBackdrop}
      >
        {selected ? (
          <>
            <header className="project-dialog__header">
              <div>
                {selected.status ? <p className="eyebrow">{selected.status}</p> : null}
                <h2 id="project-dialog-title">{selected.name}</h2>
              </div>
              <button ref={closeButton} type="button" className="button button--outline icon-button project-dialog__close"
                onClick={dismiss} aria-label="Close project details">
                <span aria-hidden="true">×</span>
              </button>
            </header>
            <ProjectDetails project={selected} />
          </>
        ) : null}
      </dialog>
    </div>
  );
}
