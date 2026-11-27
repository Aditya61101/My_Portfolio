import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Icon, type IconName } from "./icon";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container-shell ${className}`}>{children}</div>;
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`section-block ${className}`}>
      <Container className="section-layout">{children}</Container>
    </section>
  );
}

export function SectionHeading({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2 id={`${id}-heading`}>{title}</h2>
      {children}
    </header>
  );
}

export function Button({
  variant = "outline",
  className = "",
  children,
  ...props
}: ComponentPropsWithoutRef<"a"> & { href: string; variant?: "primary" | "outline" | "quiet" }) {
  return (
    <a className={`button button--${variant} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function IconButton({ href, label, icon }: { href: string; label: string; icon: IconName }) {
  return (
    <Button href={href} aria-label={label} className="icon-button">
      <Icon name={icon} />
    </Button>
  );
}

export function GlassCard({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: "article" | "div" | "li";
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={`glass-card ${className}`}>{children}</Tag>;
}

export function TechTag({ children }: { children: ReactNode }) {
  return <span className="tech-tag">{children}</span>;
}
