import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { roleTitles, profile, navLinks } from '../data/profile';
import SocialLinks from '../components/SocialLinks';

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const projectsNavId = navLinks.find((link) => link.label === 'Projects')?.id || 'projects';
  const scrollToProjects = (event) => {
    const target = document.getElementById(projectsNavId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${projectsNavId}`);
      return;
    }
    window.location.hash = projectsNavId;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roleTitles.length);
    }, 2200);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden pb-24 pt-36 sm:pt-40">
      <div className="section-shell relative">
        <div className="absolute -top-10 right-0 hidden h-56 w-56 rounded-full bg-accent-blue/20 blur-3xl sm:block" aria-hidden="true" />
        <div className="absolute bottom-8 left-0 hidden h-52 w-52 rounded-full bg-accent-cyan/20 blur-3xl sm:block" aria-hidden="true" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl font-bold leading-tight text-white sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          key={roleTitles[roleIndex]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42 }}
          className="mt-4 min-h-[2rem] text-lg text-slate-300 sm:text-2xl"
        >
          <span className="gradient-text font-semibold">{roleTitles[roleIndex]}</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          {profile.shortBio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="relative z-[9999] focus-ring rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="focus-ring rounded-xl border border-slate-600/90 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-accent-cyan/70"
          >
            Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-8"
        >
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
}
