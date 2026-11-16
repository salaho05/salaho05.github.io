import Reveal from "./components/Reveal";
import RouteAnimation from "./components/RouteAnimation";
import ScrollProgress from "./components/ScrollProgress";
import { education, experience, projects, site, stack } from "./data";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <header className="container nav">
        <a href="#top" className="logo">
          {site.shortName}
        </a>
        <nav aria-label="Main" className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#contact" className="nav-cta lift">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section id="top" className="container hero">
          <div className="hero-text">
            <p className="badge enter">{site.school}</p>
            <h1 className="enter enter-1">
              Data into <span className="accent">decisions</span>, one model at
              a time.
            </h1>
            <p className="lead enter enter-2">
              {site.name}. {site.intro}
            </p>
            <div className="buttons enter enter-3">
              <a href="#projects" className="button button-accent lift">
                See the projects
              </a>
              <a href={site.github} className="button button-light lift">
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-card enter enter-2">
            <div className="hero-card-head">
              <span>Vehicle routing · VRPTW</span>
              <span className="muted">illustrative animation</span>
            </div>
            <RouteAnimation />
          </div>
        </section>

        <section id="experience" className="container section">
          <Reveal>
            <h2>Experience</h2>
          </Reveal>
          <div className="grid">
            {experience.map((job, index) => (
              <Reveal key={job.title} delay={index * 100}>
                <article className="tile">
                  <span className="tile-tag">
                    {job.date} · {job.place}
                  </span>
                  <h3>{job.title}</h3>
                  <ul className="points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <article className="tile tile-dashed">
                <span className="tile-tag">Education</span>
                {education.map((step) => (
                  <div key={step.title} className="school">
                    <strong>{step.title}</strong>
                    <span>
                      {step.place} · {step.date}
                    </span>
                  </div>
                ))}
              </article>
            </Reveal>
          </div>
        </section>

        <section id="projects" className="container section">
          <Reveal>
            <h2>Projects</h2>
          </Reveal>
          <div className="grid">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={(index % 3) * 100}>
                <a href={project.url} className={`tile tile-${project.style}`}>
                  <span className="tile-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </a>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <div id="stack" className="tile tile-dashed">
                <span className="tile-tag">Stack</span>
                <ul className="chips">
                  {stack.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer id="contact" className="container footer">
        <Reveal>
          <div className="contact-card">
            <div className="contact-text">
              <h2>Get in touch</h2>
              <p>Quantitative finance, optimization and machine learning.</p>
            </div>
            <div className="buttons">
              <a href={`mailto:${site.email}`} className="button button-dark lift">
                {site.email}
              </a>
              <a href={site.linkedin} className="button button-light lift">
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </footer>
    </>
  );
}
