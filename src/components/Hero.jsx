import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Code2, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-scroll';
import { profile } from '../data/profile';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-slate-50 pt-28 dark:bg-slate-950"
    >
      <div className="absolute inset-0 -z-20 bg-hero-grid bg-[length:44px_44px] opacity-70 dark:opacity-40" />
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-brand-100/70 to-transparent dark:from-brand-900/35" />
      <div className="absolute right-0 top-32 -z-10 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl" />
      <div className="absolute bottom-20 left-0 -z-10 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl" />

      <div className="section-shell grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-sm font-bold text-brand-800 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-sky-200"
          >
            <Sparkles size={16} />
            Available for frontend freelance projects
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-7 max-w-4xl text-4xl font-black leading-tight tracking-normal text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I am {profile.name}. I build polished React interfaces.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link to="projects" smooth duration={600} offset={-84} className="primary-button cursor-pointer">
              View Projects
              <ArrowRight size={18} />
            </Link>
            <Link to="contact" smooth duration={600} offset={-84} className="secondary-button cursor-pointer">
              Contact Me
              <ExternalLink size={18} />
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              ['10+', 'Practice Builds'],
              ['5+', 'Portfolio Projects'],
              ['100%', 'Responsive Focus'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-slate-200 bg-white/75 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <p className="text-2xl font-black text-slate-950 dark:text-white">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-card rounded-[2rem] p-5"
          >
            <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white shadow-2xl dark:bg-slate-900">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-auto text-xs font-semibold text-slate-400">portfolio.jsx</span>
              </div>

              <div className="space-y-4 py-7 font-mono text-sm leading-7 text-slate-300">
                <p>
                  <span className="text-sky-300">const</span> developer = {'{'}
                </p>
                <p className="pl-5">
                  name: <span className="text-emerald-300">"{profile.name}"</span>,
                </p>
                <p className="pl-5">
                  role: <span className="text-emerald-300">"{profile.role}"</span>,
                </p>
                <p className="pl-5">
                  stack: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Tailwind"</span>],
                </p>
                <p className="pl-5">
                  focus: <span className="text-emerald-300">"Client-ready UI"</span>
                </p>
                <p>{'};'}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 text-white">
                    <Code2 size={22} />
                  </span>
                  <div>
                    <p className="font-bold">Modern React Portfolio</p>
                    <p className="text-sm text-slate-400">Responsive, animated, deployable</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Link
        to="about"
        smooth
        duration={600}
        offset={-84}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 cursor-pointer rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:text-brand-700 dark:border-white/10 dark:bg-white/10 dark:text-white md:inline-flex"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} />
      </Link>
    </section>
  );
}

export default Hero;
