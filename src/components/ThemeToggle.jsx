import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 dark:border-white/15 dark:bg-white/10 dark:text-slate-100 dark:hover:border-sky-300 ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}

export default ThemeToggle;
