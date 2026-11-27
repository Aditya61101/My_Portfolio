import { highlights } from "../../data/highlights";
import { profile } from "../../data/profile";
import { Icon } from "../ui/icon";
import { Button, Container, GlassCard, IconButton } from "../ui/primitives";
import { ComputationalCore } from "../visuals/computational-core";

export function Hero() {
  return (
    <section id="home" aria-labelledby="home-heading" className="hero">
      <Container className="hero__layout">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">{profile.role} <span>·</span> {profile.location}</p>
          <h1 id="home-heading">
            <span className="hero__greeting">Hey, I’m</span>
            <span className="hero__name">{profile.name}<span>.</span></span>
          </h1>
          <p className="hero__identity">{profile.positioning}</p>
          <p className="hero__description">{profile.introduction}</p>
          <div className="hero__actions">
            <Button href="#projects" variant="primary">Explore my work <Icon name="down" /></Button>
            <Button href={profile.links.github}><Icon name="github" /> GitHub</Button>
            <IconButton href={profile.links.linkedin} icon="linkedin" label="LinkedIn" />
            <IconButton href={profile.links.email} icon="mail" label="Email Aditya" />
          </div>
        </div>
        <ComputationalCore />
      </Container>
    </section>
  );
}

export function Highlights() {
  return (
    <section className="highlights" aria-label="Professional highlights">
      <Container>
        <GlassCard className="highlight-panel">
          <ul className="highlight-list">
            {highlights.map(({ title, description, icon }) => (
              <li key={title} className="highlight">
                <span className="icon-tile"><Icon name={icon} /></span>
                <div><strong>{title}</strong><span>{description}</span></div>
              </li>
            ))}
          </ul>
        </GlassCard>
      </Container>
    </section>
  );
}
