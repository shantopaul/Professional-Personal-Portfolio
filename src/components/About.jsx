import { motion } from 'framer-motion';
import { BookOpen, BriefcaseBusiness, GraduationCap, Target } from 'lucide-react';
import SectionHeader from './SectionHeader';

const stats = [
  { value: '01+', label: 'Years Learning' },
  { value: '10+', label: 'Practice Projects' },
  { value: '05+', label: 'Core Skills' },
  { value: '100%', label: 'Client Focus' },
];

const aboutCards = [
  {
    title: 'Frontend Development',
    description: 'Focused on React, Tailwind CSS, responsive interfaces, reusable components, and smooth UI behavior.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Education',
    description: 'Continuing to build strong computer science and web development fundamentals through study and practice.',
    icon: GraduationCap,
  },
  {
    title: 'Learning Journey',
    description: 'Improving every project through better structure, accessibility, performance, and production readiness.',
    icon: BookOpen,
  },
  {
    title: 'Freelancing Goal',
    description: 'Helping real clients launch clean, mobile-friendly websites that build trust and support business goals.',
    icon: Target,
  },
];

function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-950">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About Me"
          title="A frontend developer focused on clean, client-ready web experiences."
          description="I enjoy turning ideas into modern interfaces that are easy to use, responsive on every device, and polished enough for real-world presentation."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[2rem] p-6"
          >
            <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-brand-900 to-slate-900 p-8 text-white">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white text-3xl font-black text-slate-950 shadow-glow">
                SP
              </div>
              <h3 className="mt-8 text-2xl font-extrabold">Shanto Paul</h3>
              <p className="mt-3 text-slate-300">
                Frontend developer building a professional portfolio around React, Tailwind CSS, responsive design, and smooth animated interfaces.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-2xl font-black">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {aboutCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-soft dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-300/50 dark:hover:bg-white/[0.07]"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-sky-300/10 dark:text-sky-200">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-slate-950 dark:text-white">{card.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{card.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
