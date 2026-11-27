import { SiteNavigation } from "../components/layout/site-navigation";
import { profile } from "../data/profile";
import { sections } from "../data/sections";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-5">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:underline">
        Skip to content
      </a>
      <header className="border-b py-5">
        <SiteNavigation />
      </header>

      <main id="main-content" tabIndex={-1}>
        <section id="home" aria-labelledby="home-heading" className="py-12">
          <h1 id="home-heading" className="text-4xl font-bold">
            {profile.name}
          </h1>
          <p className="mt-3">{profile.description}</p>
        </section>

        {sections.map(({ id, title }) => (
          <section
            key={id}
            id={id}
            aria-labelledby={`${id}-heading`}
            className="border-t py-8"
          >
            <h2 id={`${id}-heading`} className="text-2xl font-semibold">
              {title}
            </h2>
            {id === "contact" ? (
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {profile.links.map(({ label, href }) => (
                  <li key={label}>
                    <a className="underline" href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </main>
    </div>
  );
}
