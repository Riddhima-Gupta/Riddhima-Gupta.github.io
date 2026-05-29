import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import { skills } from '../data/skills';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          description="A snapshot of the programming languages, tools, platforms, and technical areas I work with."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.article key={category} variants={fadeInUp} className="glass rounded-2xl p-5">
              <h3 className="font-display text-lg font-semibold text-white">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={`${category}-${item}`} label={item} />
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
