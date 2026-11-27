import Image from "next/image";
import { achievements } from "../../data/achievements";
import { education } from "../../data/education";
import { profile } from "../../data/profile";
import { AmbientMotion } from "../ui/ambient-motion";
import { CopyEmail } from "../ui/copy-email";
import { Icon } from "../ui/icon";
import { Button, Container, GlassCard, IconButton, Section, SectionHeading } from "../ui/primitives";
import { ResumeMenu } from "../ui/resume-menu";
import { ViewEntrance } from "../ui/view-entrance";
import { DigitalLandscape } from "../visuals/digital-landscape";

export function EducationSection() {
  return (
    <Section id="education">
      <SectionHeading id="education" label="Education" title="Education & achievements." />
      <ViewEntrance><div className="education-grid">
        <GlassCard as="article" className="education-card">
          <span className="education-card__mark"><Image src="/iitp.png" alt="" width={48} height={48} /></span>
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
      </div></ViewEntrance>
    </Section>
  );
}

export function AboutSection() {
  return (
    <Section id="about" className="about">
      <SectionHeading id="about" label="About" title="How I work." />
      <div className="about-card"><p>{profile.about}</p></div>
    </Section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="contact">
      <AmbientMotion className="contact-landscape"><DigitalLandscape /></AmbientMotion>
      <Container className="contact__content">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-heading">Let’s build something <span>impactful.</span></h2>
        <p>Get in touch about backend engineering, applied AI, or a product you’re building.</p>
        <div className="contact__actions">
          <Button href={profile.links.email} className="contact__email"><Icon name="mail" /> Email me</Button>
          <CopyEmail address={profile.links.email.slice("mailto:".length)} />
          <Button href={profile.links.linkedin}><Icon name="linkedin" /> LinkedIn <Icon name="external" /></Button>
          <Button href={profile.links.github}><Icon name="github" /> GitHub <Icon name="external" /></Button>
          <ResumeMenu />
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
        <div className="site-footer__links">
          <IconButton href={profile.links.github} icon="github" label="GitHub" />
          <IconButton href={profile.links.linkedin} icon="linkedin" label="LinkedIn" />
          <span className="site-footer__year">© {new Date().getUTCFullYear()}</span>
        </div>
      </Container>
    </footer>
  );
}
