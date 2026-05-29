import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/motionVariants';

export default function SectionHeading({ eyebrow, description }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="mb-10"
    >
      <h2 className="font-display text-3xl font-bold text-accent-cyan sm:text-4xl">{eyebrow}</h2>
      {description ? <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">{description}</p> : null}
    </motion.div>
  );
}
