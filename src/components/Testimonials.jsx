import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import SectionHeader from './SectionHeader';

function Testimonials() {
  return (
    <section className="section-padding bg-white dark:bg-slate-950" aria-labelledby="testimonials-title">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trust signals for client-facing work."
          titleId="testimonials-title"
          description="Short client-style reviews communicate reliability, attention to detail, and the practical value of polished frontend delivery."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.52, delay: index * 0.08 }}
              className="glass-card rounded-[2rem] p-6"
            >
              <div className="flex items-center gap-1 text-amber-400" aria-label={`${testimonial.rating} star rating`}>
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={`${testimonial.name}-${starIndex}`} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-6 leading-8 text-slate-700 dark:text-slate-200">"{testimonial.quote}"</p>
              <div className="mt-7 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  loading="lazy"
                  className="h-14 w-14 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="font-extrabold text-slate-950 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
