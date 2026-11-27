import { profile } from "../../data/profile";
import { sections } from "../../data/sections";
import { Icon } from "../ui/icon";
import { Button, Container } from "../ui/primitives";

const navigation = [{ id: "home", title: "Home" }, ...sections].filter(
  ({ id }) => id !== "contact",
);

export function SiteNavigation() {
  return (
    <header className="site-header">
      <Container>
        <nav aria-label="Portfolio" className="site-nav">
          <a className="wordmark" href="#home" aria-label={`${profile.initials}. Home`}>
            {profile.initials}<span>.</span>
          </a>
          <ul className="site-nav__links">
            {navigation.map(({ id, title }) => (
              <li key={id}><a href={`#${id}`}>{title}</a></li>
            ))}
          </ul>
          <Button href="#contact" className="site-nav__contact">
            Contact <Icon name="external" />
          </Button>
        </nav>
      </Container>
    </header>
  );
}
