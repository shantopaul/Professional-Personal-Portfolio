import { motion } from 'framer-motion';
import { services } from '../data/services';
import SectionHeader from './SectionHeader';

function Services() {
  return (
    <section id="services" className="section-padding bg-white dark:bg-slate-950">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Services"
          title="Frontend services for modern client projects."
          description="Clear, practical services focused on helping clients launch polished websites, improve existing interfaces, and create responsive user experiences."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-brand-200 hover:bg-white hover:shadow-glow dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-300/40 dark:hover:bg-white/[0.07]"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:scale-110 dark:bg-white dark:text-slate-950">
                  <Icon size={25} />
                </span>
                <h3 className="mt-7 text-xl font-extrabold text-slate-950 dark:text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
