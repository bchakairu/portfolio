'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ProjectMeta } from '@/lib/projects';

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  const href = project.link ?? `/projects/${project.slug}`;
  const external = Boolean(project.link);

  return (
    <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="group block rounded-2xl border border-panel bg-panel/40 p-6 transition-colors hover:border-berry/50"
      >
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl text-paper group-hover:text-berry-light">{project.title}</h3>
          <span className="font-mono text-xs text-muted">{project.status}</span>
        </div>
        <p className="mt-2 text-sm text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="rounded-full border border-panel px-3 py-1 font-mono text-xs text-muted">
              {s}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
