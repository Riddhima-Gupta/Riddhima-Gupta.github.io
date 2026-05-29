import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiLink2, FiX } from 'react-icons/fi';
import Badge from './Badge';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/80 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
            className="glass max-h-[85vh] w-full max-w-3xl overflow-auto rounded-2xl p-6 shadow-glow"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent-cyan">{project.category}</p>
                <h3 className="mt-1 font-display text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <button
                type="button"
                className="focus-ring rounded-lg border border-slate-700 p-2 text-slate-300 hover:text-white"
                onClick={onClose}
                aria-label="Close project details"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            

            <p className="text-slate-300">{project.details}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} label={tag} />
              ))}
            </div>

            <div className={`mt-7 grid gap-3 w-full ${project.category === 'Cybersecurity' ? 'sm:grid-cols-1' : 'sm:grid-cols-2'}`}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/65 px-4 py-2 text-sm text-slate-100 transition hover:border-accent-cyan/70"
              >
                <FiGithub /> Code
              </a>
              {project.category !== 'Cybersecurity' ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/65 px-4 py-2 text-sm text-slate-100 transition hover:border-accent-blue/70"
                >
                  <FiExternalLink /> Live Demo
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
