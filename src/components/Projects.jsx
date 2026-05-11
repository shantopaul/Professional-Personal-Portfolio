import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import SectionHeader from './SectionHeader';

function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/60">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Selected frontend projects that prove practical skill."
          description="Each project card includes a visual preview, short value-focused description, tech stack, live demo link, and GitHub repository link."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.52, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow dark:border-white/10 dark:bg-white/[0.05] dark:hover:border-sky-300/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-slate-900 backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-bold text-brand-800 dark:border-white/10 dark:bg-white/[0.06] dark:text-sky-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="primary-button flex-1 px-4 py-2.5">
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="secondary-button flex-1 px-4 py-2.5">
                    <Github size={17} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
