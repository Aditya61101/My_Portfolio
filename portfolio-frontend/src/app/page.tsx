import { SiteNavigation } from "../components/layout/site-navigation";
import { AboutSection, ContactSection, EducationSection, SiteFooter, SkillsSection } from "../components/sections/bio";
import { Hero, Highlights } from "../components/sections/overview";
import { ExperienceSection, ProjectsSection } from "../components/sections/work";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SiteNavigation />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Highlights />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
