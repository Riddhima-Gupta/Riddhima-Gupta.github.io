import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import { fadeInUp } from '../animations/motionVariants';
import { profile } from '../data/profile';

export default function AboutSection() {
  const domains = Array.isArray(profile?.domains) ? profile.domains : [];
  const coursework = Array.isArray(profile?.education?.coursework)
    ? profile.education.coursework
    : [];

  return (
    <section id="about" className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          description="A concise overview of my academic background, technical focus, and current areas of interest."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-xl font-semibold text-white">Professional Summary</h3>
            <p className="mt-3 text-slate-300">{profile.longSummary}</p>
          </motion.article>

          <motion.article
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-xl font-semibold text-white">Education</h3>
            <p className="mt-3 text-slate-200">{profile.education.degree}</p>
            <p className="text-slate-300">{profile.education.institution}</p>
            <p className="text-sm text-slate-400">{profile.education.timeline}</p>
            <p className="mt-1 text-sm text-slate-400">CGPA/Score: {profile.education.cgpa}</p>

            <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent-cyan">Relevant Coursework</h4>
            <ul className="mt-3 space-y-2 text-slate-300">
              {coursework.length > 0 ? (
                coursework.map((course) => <li key={course}>- {course}</li>)
              ) : (
                <li className="text-sm text-slate-400">Add coursework items in <code>src/data/profile.js</code>.</li>
              )}
            </ul>

            <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent-cyan">Tech Domains</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {domains.length > 0 ? (
                domains.map((domain) => <Badge key={domain} label={domain} />)
              ) : (
                <p className="text-sm text-slate-400">Add domains in <code>src/data/profile.js</code>.</p>
              )}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
