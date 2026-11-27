import { experience } from "../../data/experience";
import { profile } from "../../data/profile";
import { projects } from "../../data/projects";
import { Icon } from "../ui/icon";
import { Button, GlassCard, Section, SectionHeading, TechTag } from "../ui/primitives";
import { ProjectArt } from "../visuals/project-art";
import { ProjectGallery } from "./project-gallery";
import { TimelineMotion } from "./timeline-motion";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading id="experience" label="Experience" title="Professional journey.">
        <p>Building software at the intersection of backend engineering and AI.</p>
      </SectionHeading>
      <TimelineMotion>
        {experience.map(({ employer, role, period, overview, details, technicalDetails }) => (
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
              {technicalDetails?.length ? (
                <details className="experience-details">
                  <summary>Technical details <Icon name="down" /></summary>
                  <ul className="accent-list">{technicalDetails.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </details>
              ) : null}
            </div>
          </GlassCard>
        ))}
      </TimelineMotion>
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
      <ProjectGallery projects={projects}>
        <ul className="project-grid">
          {projects.map(({ id, name, summary, stack, status, icon, featured, repository, live }) => (
            <GlassCard
              as="li"
              key={id}
              className={`project-card ${featured ? "project-card--featured" : "project-card--compact"} ${id === "decisionguard" ? "project-card--graph" : ""} ${id === "claim-iq" ? "project-card--documents" : ""}`}
            >
              <ProjectArt id={id} featured={featured} />
              <div className="project-card__content">
                <span className="icon-tile"><Icon name={icon} /></span>
                <h3>{name}</h3>
                <p>{summary}</p>
                <div className="project-card__stack">
                  {stack ? <ul className="tag-list">{stack.map((tool) => <li key={tool}><TechTag>{tool}</TechTag></li>)}</ul> : null}
                  {status ? <span className="project-status">{status}</span> : null}
                </div>
                <div className="project-card__actions">
                  <button type="button" className="button button--outline" data-project-trigger={id}
                    aria-label={`View details for ${name}`} aria-haspopup="dialog">
                    View details <Icon name="external" />
                  </button>
                  {repository ? <Button href={repository} variant="quiet"><Icon name="github" /> Repository</Button> : null}
                  {live ? <Button href={live} variant="quiet">Live app <Icon name="external" /></Button> : null}
                </div>
              </div>
            </GlassCard>
          ))}
        </ul>
      </ProjectGallery>
    </Section>
  );
}
