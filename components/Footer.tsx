import { GitHubIcon, LinkedInIcon, InstagramIcon, YouTubeIcon, MailIcon } from './Icons';

const SOCIALS = [
  { href: 'https://github.com/bchakairu', label: 'GitHub', Icon: GitHubIcon },
  { href: 'https://www.linkedin.com/in/bill-chakairu-a9a797368/', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: 'https://instagram.com/cha_kairu', label: 'Instagram', Icon: InstagramIcon },
  { href: 'https://youtube.com/@BillChakairu', label: 'YouTube', Icon: YouTubeIcon },
  { href: 'mailto:bill.chakairu@strathmore.edu', label: 'Email', Icon: MailIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-panel px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Bill Chakairu. Built with Next.js.
        </p>
        <div className="flex gap-4">
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
    </footer>
  );
}
