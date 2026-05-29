import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import { certificationFilters, certifications } from '../data/certifications';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';

export default function CertificationsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return certifications;
    return certifications.filter((cert) => cert.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="certifications" className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certifications"
          description="Relevant certifications and credentials that reflect continued learning across core technical areas."
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {certificationFilters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`focus-ring rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? 'border-accent-blue bg-accent-blue/15 text-accent-blue'
                    : 'border-slate-700 bg-slate-900/50 text-slate-300 hover:border-slate-500'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((cert) => (
            <motion.article key={cert.id} variants={fadeInUp} className="glass rounded-2xl p-4">
              <div className="mt-4">
                <p className="text-xs uppercase tracking-[0.18em] text-accent-cyan">{cert.category}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-slate-300">{cert.issuer}</p>
                <p className="text-xs text-slate-400">{cert.date}</p>
              </div>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/65 px-3 py-2 text-xs text-slate-100 transition hover:border-accent-cyan/70"
              >
                <FiExternalLink /> View Credential
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
