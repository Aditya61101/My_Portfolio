import { showcasedSkills, skills } from "../../data/skills";
import { AmbientMotion } from "../ui/ambient-motion";
import { Icon } from "../ui/icon";
import { GlassCard, Section, SectionHeading } from "../ui/primitives";

function TechnologyTile({ name, icon, mark, color }: (typeof showcasedSkills)[number]) {
  return (
    <li className="technology-tile">
      {mark ? (
        <span
          aria-hidden="true"
          className="technology-tile__mark"
          style={{ maskImage: `url("/technology/${mark}.svg")`, color }}
        />
      ) : <Icon name={icon ?? "code"} />}
      <span>{name}</span>
    </li>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills" className="expertise">
      <SectionHeading id="skills" label="Technical expertise" title="My toolkit." />
      <div className="expertise__content">
        <AmbientMotion className="skill-showcase" pauseControl>
          <div className="skill-showcase__window" aria-hidden="true">
            <div className="skill-showcase__track">
              {[0, 1].map((copy) => (
                <ul className="skill-showcase__row" key={copy}>
                  {showcasedSkills.map((technology) => <TechnologyTile key={technology.name} {...technology} />)}
                </ul>
              ))}
            </div>
          </div>
        </AmbientMotion>
        <ul className="skills-grid">
          {skills.map(({ title, icon, tools }) => (
            <GlassCard as="li" className="skill-card" key={title}>
              <div className="skill-card__heading">
                <span className="icon-tile"><Icon name={icon} /></span><h3>{title}</h3>
              </div>
              <ul className="technology-grid">
                {tools.map((technology) => <TechnologyTile key={technology.name} {...technology} />)}
              </ul>
            </GlassCard>
          ))}
        </ul>
      </div>
    </Section>
  );
}
