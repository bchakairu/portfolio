import { getProjectBySlug, getProjectSlugs } from '@/lib/projects';

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  return (
    <article className="mx-auto max-w-2xl px-6 py-16 sm:px-10">
      <p className="font-mono text-sm uppercase tracking-wider text-berry-light">{project.status}</p>
      <h1 className="mt-3 font-display text-4xl text-paper">{project.title}</h1>
      <p className="mt-4 text-lg text-muted">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wider text-muted">
        {project.stack.map((s) => (
          <span key={s} className="rounded-full border border-panel px-3 py-1">
            {s}
          </span>
        ))}
      </div>

      <div
        className="prose prose-invert prose-headings:font-display prose-a:text-berry-light prose-p:text-muted mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: project.contentHtml }}
      />
    </article>
  );
}