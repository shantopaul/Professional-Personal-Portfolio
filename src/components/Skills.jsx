import { motion } from 'framer-motion';
import { skillGroups, skillHighlights } from '../data/skills';
import SectionHeader from './SectionHeader';

function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900/60">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Frontend skills, tools, and learning path."
          description="The stack is focused on creating professional interfaces today while growing toward full-stack application delivery."
          align="center"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {skillHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
              >
                <Icon size={16} />
                {item.label}
              </span>
            );
          })}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: groupIndex * 0.08 }}
              className="glass-card rounded-[2rem] p-6"
            >
              <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white">{group.title}</h3>
              <p className="mt-3 min-h-20 leading-7 text-slate-600 dark:text-slate-300">{group.description}</p>

              <div className="mt-7 space-y-5">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div key={skill.name} className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-xl text-brand-700 dark:bg-sky-300/10 dark:text-sky-200">
                            <Icon />
                          </span>
                          <p className="font-bold text-slate-950 dark:text-white">{skill.name}</p>
                        </div>
                        <span className="text-sm font-extrabold text-brand-700 dark:text-sky-200">{skill.level}%</span>
                      </div>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-brand-600 to-accent-400"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
