import { Github, Linkedin, Mail } from 'lucide-react';
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { profile } from '../data/profile';

const footerLinks = ['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'];

const socials = [
  { label: 'GitHub', href: profile.socials.github, icon: Github },
  { label: 'LinkedIn', href: profile.socials.linkedin, icon: Linkedin },
  { label: 'Facebook', href: profile.socials.facebook, icon: FaFacebook },
  { label: 'Twitter X', href: profile.socials.twitter, icon: FaXTwitter },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white dark:border-white/10">
      <div className="h-1 bg-gradient-to-r from-brand-600 via-accent-400 to-sky-300" />
      <div className="section-shell py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-black text-slate-950">
                SP
              </span>
              <div>
                <p className="font-extrabold">{profile.name}</p>
                <p className="text-sm text-slate-400">{profile.role}</p>
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm font-semibold text-slate-300" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth
                offset={-84}
                duration={550}
                className="cursor-pointer transition hover:text-white"
              >
                {link}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-sky-300 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
