import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';

export default function Projects() {
  const projects = getAllProjects();

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
      <p className="font-mono text-sm uppercase tracking-wider text-berry-light">Projects</p>
      <h1 className="mt-3 font-display text-4xl text-paper">All projects</h1>

      <div className="mt-10 divide-y divide-panel">
        {projects.map((project) => {
          const href = project.link ?? `/projects/${project.slug}`;
          const external = Boolean(project.link);

          return (
            <Link
              key={project.slug}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <h2 className="font-display text-2xl text-paper group-hover:text-berry-light">
                  {project.title}
                </h2>
                <p className="mt-1 max-w-md text-muted">{project.summary}</p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2 font-mono text-xs uppercase tracking-wider text-muted">
                {project.stack.map((s) => (
                  <span key={s} className="rounded-full border border-panel px-3 py-1">
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>

      <Link href="/#projects" className="mt-10 inline-block text-sm text-berry-light underline underline-offset-4">
        ← Back to homepage
      </Link>
    </section>
  );
}
