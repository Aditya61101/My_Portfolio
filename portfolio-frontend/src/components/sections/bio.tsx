import { achievements } from "../../data/achievements";
import { education } from "../../data/education";
import { profile } from "../../data/profile";
import { skills } from "../../data/skills";
import { Icon } from "../ui/icon";
import { Button, Container, GlassCard, Section, SectionHeading, TechTag } from "../ui/primitives";
import { DigitalLandscape } from "../visuals/digital-landscape";

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading id="skills" label="Technical expertise" title="My toolkit." />
      <ul className="skills-grid">
        {skills.map(({ title, icon, tools }) => (
          <GlassCard as="li" className="skill-card" key={title}>
            <div className="skill-card__heading">
              <span className="icon-tile"><Icon name={icon} /></span><h3>{title}</h3>
            </div>
            <ul className="tag-list">
              {tools.map((tool) => <li key={tool}><TechTag>{tool}</TechTag></li>)}
            </ul>
          </GlassCard>
        ))}
      </ul>
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section id="education">
      <SectionHeading id="education" label="Education" title="Education & achievements." />
      <div className="education-grid">
        <GlassCard as="article" className="education-card">
          <span className="icon-tile"><Icon name="cap" /></span>
          <div>
            <h3>{education.institution}</h3>
            <p>{education.degree}</p>
            <div className="education-card__details">
              <span className="period">{education.period}</span>
              <span className="period period--accent">{education.score}</span>
            </div>
          </div>
        </GlassCard>
        <GlassCard as="article" className="education-card">
          <span className="icon-tile"><Icon name="trophy" /></span>
          <div>
            <h3>Achievements</h3>
            <ul className="accent-list achievements">
              {achievements.map(({ title, event }) => (
                <li key={event}><strong>{title}</strong><span>{event}</span></li>
              ))}
            </ul>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}

export function AboutSection() {
  return (
    <Section id="about" className="about">
      <SectionHeading id="about" label="About" title="How I work." />
      <GlassCard className="about-card">
        <span className="icon-tile"><Icon name="brackets" /></span>
        <p>{profile.about}</p>
      </GlassCard>
    </Section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="contact">
      <DigitalLandscape />
      <Container className="contact__content">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-heading">Let’s build something <span>impactful.</span></h2>
        <p>Get in touch about backend engineering, applied AI, or a product you’re building.</p>
        <div className="contact__actions">
          <Button href={profile.links.email} className="contact__email"><Icon name="mail" /> Email me</Button>
          <Button href={profile.links.linkedin}><Icon name="linkedin" /> LinkedIn <Icon name="external" /></Button>
          <Button href={profile.links.github}><Icon name="github" /> GitHub <Icon name="external" /></Button>
        </div>
      </Container>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <a className="wordmark" href="#home" aria-label={`${profile.initials}. Back to top`}>
          {profile.initials}<span>.</span>
        </a>
        <p>Designed and built by {profile.name}.</p>
        <span className="site-footer__year">© {new Date().getUTCFullYear()}</span>
      </Container>
    </footer>
  );
}
