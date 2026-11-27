"use client";

import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { profile } from "../../data/profile";
import { sections } from "../../data/sections";
import { Icon } from "../ui/icon";
import { Button, Container } from "../ui/primitives";

const navigation = [{ id: "home", title: "Home" }, ...sections].filter(
  ({ id }) => id !== "contact",
);
const sectionIds = [...navigation.map(({ id }) => id), "contact"];

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const elements = sectionIds.flatMap((id) => {
      const element = document.getElementById(id);
      return element ? [element] : [];
    });
    let atEnd = false;
    const update = () => {
      const marker = window.innerHeight * 0.28 + 1;
      const current = elements.findLast((element) => element.getBoundingClientRect().top <= marker);
      setActive(atEnd ? "contact" : current?.id ?? "home");
    };
    let sectionsObserver: IntersectionObserver | undefined;
    const observeSections = () => {
      sectionsObserver?.disconnect();
      const top = Math.round(window.innerHeight * 0.28);
      const bottom = Math.round(window.innerHeight * 0.42);
      sectionsObserver = new IntersectionObserver(update, { rootMargin: `-${top}px 0px -${bottom}px 0px` });
      elements.forEach((element) => sectionsObserver?.observe(element));
    };
    const endObserver = new IntersectionObserver(([entry]) => {
      atEnd = entry.intersectionRatio >= 0.85;
      update();
    }, { threshold: 0.85 });
    const footer = document.querySelector(".site-footer");
    if (footer) endObserver.observe(footer);
    observeSections();
    window.addEventListener("resize", observeSections);
    window.addEventListener("hashchange", update);
    return () => {
      sectionsObserver?.disconnect();
      endObserver.disconnect();
      window.removeEventListener("resize", observeSections);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  return active;
}

export function SiteNavigation() {
  const active = useActiveSection();
  const { scrollYProgress } = useScroll();

  return (
    <header className="site-header">
      <Container>
        <nav aria-label="Portfolio" className="site-nav">
          <a className="wordmark" href="#home" aria-label={`${profile.initials}. Home`}>
            {profile.initials}<span>.</span>
          </a>
          <ul className="site-nav__links">
            {navigation.map(({ id, title }) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={active === id ? "location" : undefined}>{title}</a>
              </li>
            ))}
          </ul>
          <Button href="#contact" className="site-nav__contact" aria-current={active === "contact" ? "location" : undefined}>
            Contact <Icon name="external" />
          </Button>
          <motion.div className="site-nav__progress" aria-hidden="true" style={{ scaleX: scrollYProgress }} />
        </nav>
      </Container>
    </header>
  );
}
