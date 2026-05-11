import { motion } from 'framer-motion';

function SectionHeader({ eyebrow, title, description, align = 'left', titleId }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 id={titleId} className="section-title">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </motion.div>
  );
}

export default SectionHeader;
