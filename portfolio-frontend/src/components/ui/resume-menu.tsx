"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { resumes } from "../../data/resumes";
import { Icon } from "./icon";

export function ResumeMenu() {
  const details = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function dismissOutside(event: PointerEvent) {
      const menu = details.current;
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) {
        menu.open = false;
      }
    }

    document.addEventListener("pointerdown", dismissOutside);
    return () => document.removeEventListener("pointerdown", dismissOutside);
  }, [open]);

  function closeAndRestoreFocus() {
    if (!details.current?.open) return;
    details.current.open = false;
    trigger.current?.focus();
  }

  function handleKeys(event: KeyboardEvent<HTMLDetailsElement>) {
    if (event.key === "Escape" && event.currentTarget.open) {
      event.preventDefault();
      closeAndRestoreFocus();
    }
  }

  return (
    <details
      className="resume-menu"
      ref={details}
      onToggle={(event) => setOpen(event.currentTarget.open)}
      onKeyDown={handleKeys}
      onBlur={(event) => {
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
          event.currentTarget.open = false;
        }
      }}
    >
      <summary ref={trigger} className="button button--outline resume-menu__trigger">
        Resume <Icon name="chevron" />
      </summary>
      <ul className="resume-menu__panel">
        {resumes.map(({ title, description, icon, url }) => (
          <li key={url}>
            <a className="resume-menu__option" href={url} target="_blank" rel="noopener noreferrer" onClick={closeAndRestoreFocus}>
              <span className="icon-tile"><Icon name={icon} /></span>
              <span>
                <strong>{title}</strong>
                <span className="resume-menu__description">{description}</span>
                <span className="sr-only">Opens PDF in a new tab.</span>
              </span>
              <Icon name="external" />
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
