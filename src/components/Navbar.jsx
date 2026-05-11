import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { profile } from '../data/profile';
import { useTheme } from '../hooks/useTheme';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Services', to: 'services' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 dark:border-white/15 dark:bg-white/10 dark:text-slate-100 dark:hover:border-sky-300"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}

function NavItem({ link, onClick }) {
  return (
    <Link
      to={link.to}
      spy
      smooth
      offset={-84}
      duration={550}
      onClick={onClick}
      className="group relative cursor-pointer text-sm font-semibold text-slate-700 transition hover:text-brand-700 dark:text-slate-200 dark:hover:text-sky-200"
      activeClass="!text-brand-700 dark:!text-sky-200"
    >
      {link.label}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-brand-600 transition-all duration-300 group-hover:w-full dark:bg-sky-300" />
    </Link>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-200/70 bg-white/80 py-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75'
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <nav className="section-shell flex items-center justify-between" aria-label="Primary navigation">
        <Link
          to="home"
          smooth
          duration={550}
          offset={-90}
          className="flex cursor-pointer items-center gap-3"
          aria-label="Go to home section"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-base font-black text-white shadow-glow dark:bg-white dark:text-slate-950">
            SP
          </span>
          <span className="hidden text-sm font-extrabold uppercase tracking-[0.18em] text-slate-900 dark:text-white sm:block">
            {profile.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavItem key={link.to} link={link} />
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a href={profile.resumeUrl} download={profile.resumeFileName} className="primary-button px-5 py-2.5">
            <Download size={17} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 dark:border-white/15 dark:bg-white/10 dark:text-white"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="section-shell lg:hidden"
          >
            <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft dark:border-white/10 dark:bg-slate-900">
              <div className="grid gap-3">
                {navLinks.map((link) => (
                  <NavItem key={link.to} link={link} onClick={() => setIsOpen(false)} />
                ))}
              </div>
              <a href={profile.resumeUrl} download={profile.resumeFileName} className="primary-button mt-5 w-full">
                <Download size={17} />
                Download Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
