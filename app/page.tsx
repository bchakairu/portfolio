import Link from 'next/link';
import Blob from '@/components/Blob';
import Portrait from '@/components/Portrait';
import Reveal from '@/components/Reveal';
import Magnetic from '@/components/Magnetic';
import ProjectCard from '@/components/ProjectCard';
import Waveform from '@/components/Waveform';
import { GitHubIcon, LinkedInIcon, InstagramIcon, YouTubeIcon, MailIcon } from '@/components/Icons';
import { getAllProjects } from '@/lib/projects';

const SOCIALS = [
  { href: 'https://github.com/bchakairu', label: 'GitHub', Icon: GitHubIcon },
  { href: 'https://www.linkedin.com/in/bill-chakairu-a9a797368/', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: 'https://instagram.com/cha_kairu', label: 'Instagram', Icon: InstagramIcon },
  { href: 'https://youtube.com/@BillChakairu', label: 'YouTube', Icon: YouTubeIcon },
];

const SKILLS = [
  { group: 'Languages', items: ['C++', 'Java', 'Kotlin', 'PHP', 'JavaScript', 'HTML/CSS'] },
  { group: 'Frameworks', items: ['Django', 'Laravel', 'React.js', 'Vue.js'] },
  { group: 'Data', items: ['MySQL', 'System Analysis & Design'] },
  { group: 'Other', items: ['Wireframing & Poster Design', 'Event Marketing'] },
];

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      {/* ==================== HOME ==================== */}
      <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:px-10 sm:pt-28">
        <Blob />
        <div className="mx-auto flex max-w-4xl flex-col-reverse items-center gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="max-w-xl text-center sm:text-left">
            <p className="font-mono text-sm uppercase tracking-wider text-berry-light">Hello, I'm</p>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-paper sm:text-7xl">
              Bill Chakairu
            </h1>
            <p className="mt-6 text-lg text-muted">
              I research, design, and develop sustainable Tech solutions to solve
              real-world challenges. 
            </p>
            <p className="mt-6 text-lg text-muted">
              Currently, I'm a Research Assistant at Strathmore University's
              School of Computing & Engineering Sciences. 
              Additionally, I play the flute and saxophone.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
              <Magnetic>
                <a
                  href="#projects"
                  className="rounded-full bg-berry px-6 py-3 font-medium text-ink transition-colors hover:bg-berry-light"
                >
                  View Projects
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="/resume.pdf"
                  download
                  className="rounded-full border border-berry/40 px-6 py-3 font-medium text-berry-light transition-colors hover:bg-berry/10"
                >
                  Download CV
                </a>
              </Magnetic>
            </div>

            <div className="mt-10 flex justify-center gap-5 sm:justify-start">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted transition-colors hover:text-berry-light"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <Portrait />
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section id="about" className="scroll-mt-20 border-t border-panel px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-wider text-berry-light">About</p>
            <h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">
              Research, teaching, and building
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I'm a BSc. Informatics and Computer Science finalist at
              Strathmore University.
            </p>
            <p>
              Since February 2026 I've been a Research Assistant at the
              School of Computing & Engineering Sciences, collaborating
              with Dr. Joseph Orero on the AI-Economy Project, researching the
              future of education with AI in Africa.
            </p>
            <p>
              Outside coursework, I chaired the Strathmore University Chapel
              Choir committee, play chess with the university chess club, and
              placed 2nd at the UNIV Forum on AI and the Human Factor.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div id="skills" className="mt-10 scroll-mt-20 grid grid-cols-2 gap-6 border-t border-panel pt-8 sm:grid-cols-4">
              {SKILLS.map(({ group, items }) => (
                <div key={group}>
                  <p className="font-mono text-xs uppercase tracking-wider text-berry-light">{group}</p>
                  <ul className="mt-3 space-y-1 text-sm text-muted">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== PROJECTS ==================== */}
      <section id="projects" className="scroll-mt-20 border-t border-panel px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-wider text-berry-light">Projects</p>
            <h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">Things I've built</h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MUSIC ==================== */}
      <section id="music" className="scroll-mt-20 border-t border-panel px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-wider text-berry-light">Music</p>
            <h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">The other practice</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <Waveform className="my-10 h-10" />
          </Reveal>

          <Reveal delay={0.15} className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              7 years playing the flute, 6 years writing music scores, and
              more recently the saxophone too.
            </p>
            <p>
              I've started taking on solo performance gigs. My first was
              a friend's birthday event with an African music
              emphasis. I'm open to doing more.
            </p>
            <p>
              Follow along on{' '}
              <a
                href="https://instagram.com/cha_kairu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-berry-light underline underline-offset-4"
              >
                Instagram
              </a>{' '}
              or{' '}
              <a
                href="https://youtube.com/@BillChakairu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-berry-light underline underline-offset-4"
              >
                YouTube
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="scroll-mt-20 border-t border-panel px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm uppercase tracking-wider text-berry-light">Contact</p>
          <h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">Let's talk</h2>
          <p className="mt-4 text-lg text-muted">
            Open to research collaborations, gigs, and interesting projects.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a
                href="mailto:bill.chakairu@strathmore.edu"
                className="flex items-center gap-2 rounded-full bg-berry px-6 py-3 font-medium text-ink transition-colors hover:bg-berry-light"
              >
                <MailIcon className="h-4 w-4" />
                Email me
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/resume.pdf"
                download
                className="rounded-full border border-berry/40 px-6 py-3 font-medium text-berry-light transition-colors hover:bg-berry/10"
              >
                Download CV
              </a>
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  );
}
