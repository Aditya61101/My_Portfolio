import { experience } from "../../data/experience";
import { profile } from "../../data/profile";
import { projects } from "../../data/projects";
import { Icon } from "../ui/icon";
import { Button, GlassCard, Section, SectionHeading, TechTag } from "../ui/primitives";
import { ProjectArt } from "../visuals/project-art";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading id="experience" label="Experience" title="Professional journey.">
        <p>Building software at the intersection of backend engineering and AI.</p>
      </SectionHeading>
      <ol className="timeline">
        {experience.map(({ employer, role, period, overview, details }) => (
          <GlassCard as="li" className="timeline-card" key={employer}>
            <span className="icon-tile timeline-card__icon"><Icon name="briefcase" /></span>
            <div className="timeline-card__body">
              <div className="timeline-card__heading">
                <div><h3>{employer}</h3><p className="timeline-card__role">{role}</p></div>
                {period ? <span className="period">{period}</span> : null}
              </div>
              <p>{overview}</p>
              {details.length > 0 ? (
                <ul className="accent-list">{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              ) : null}
            </div>
          </GlassCard>
        ))}
      </ol>
    </Section>
  );
}

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeading id="projects" label="Projects" title="Selected work.">
        <p>Applied AI and backend systems, from architecture reviews to notification delivery.</p>
        <Button href={profile.links.github} variant="quiet" className="project-profile">
          <Icon name="github" /> View GitHub <Icon name="external" />
        </Button>
      </SectionHeading>
      <ul className="project-grid">
        {projects.map(({ name, summary, stack, status, icon, artwork }) => (
          <GlassCard
            as="li"
            key={name}
            className={artwork ? `project-card project-card--featured project-card--${artwork}` : "project-card"}
          >
            {artwork ? <ProjectArt kind={artwork} /> : null}
            <div className="project-card__content">
              <span className="icon-tile"><Icon name={icon} /></span>
              <h3>{name}</h3>
              <p>{summary}</p>
              {stack ? <ul className="tag-list">{stack.map((tool) => <li key={tool}><TechTag>{tool}</TechTag></li>)}</ul> : null}
              {status ? <span className="project-status">{status}</span> : null}
            </div>
          </GlassCard>
        ))}
      </ul>
    </Section>
  );
}
