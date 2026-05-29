import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiShield } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import ProjectModal from '../components/ProjectModal';
import { projectFilters, projects } from '../data/projects';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="scroll-mt-28 py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          description="Selected projects that demonstrate practical problem-solving, implementation skills, and technical learning."
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {projectFilters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`focus-ring rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? 'border-accent-cyan bg-accent-cyan/15 text-accent-cyan'
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
          className="grid gap-6 md:grid-cols-2"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeInUp}
              className="group rounded-xl border border-slate-700/80 bg-slate-900/55 p-6 transition hover:-translate-y-1 hover:border-accent-blue/60 hover:shadow-glow"
            >
              <div className="flex items-start justify-between gap-4">

                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring rounded border border-slate-700 bg-slate-950/20 px-3 py-2 text-xs text-slate-300 transition hover:border-accent-cyan/70 hover:text-accent-cyan"
                  >
                    GitHub
                  </a>
                  {project.category !== 'Cybersecurity' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring rounded border border-slate-700 bg-slate-950/20 px-3 py-2 text-xs text-slate-300 transition hover:border-accent-blue/70 hover:text-accent-blue"
                    >
                      Live
                    </a>
                  ) : null}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="focus-ring mt-7 block w-full text-left"
                aria-label={`Open details for ${project.title}`}
              >
                <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
              </button>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={`${project.id}-${tech}`}
                    className="rounded border border-accent-blue/70 bg-accent-blue/10 px-3 py-1 text-xs font-medium text-accent-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
