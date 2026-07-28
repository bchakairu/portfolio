import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const PROJECTS_DIR = path.join(process.cwd(), 'content/projects');

export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  status: string;
  link?: string;
};

export type Project = ProjectMeta & { contentHtml: string };

export function getAllProjects(): ProjectMeta[] {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith('.md'));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), 'utf-8');
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.md$/, ''),
      title: data.title,
      summary: data.summary,
      stack: data.stack ?? [],
      status: data.status ?? '',
      link: data.link,
    };
  });
}

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  if (!slug) {
    throw new Error('getProjectBySlug called with no slug');
  }

  const filePath = path.join(PROJECTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`No project file found for slug "${slug}" at ${filePath}`);
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title,
    summary: data.summary,
    stack: data.stack ?? [],
    status: data.status ?? '',
    link: data.link,
    contentHtml: processed.toString(),
  };
}
