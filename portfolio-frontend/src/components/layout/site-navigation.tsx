import { sections } from "../../data/sections";

export function SiteNavigation() {
  return (
    <nav aria-label="Portfolio">
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        <li>
          <a className="underline" href="#home">
            Home
          </a>
        </li>
        {sections.map(({ id, title }) => (
          <li key={id}>
            <a className="underline" href={`#${id}`}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
