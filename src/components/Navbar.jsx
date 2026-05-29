import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks, profile } from '../data/profile';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-6">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-lg transition sm:px-6 ${
          isScrolled
            ? 'border-slate-700/80 bg-slate-950/80 shadow-soft'
            : 'border-slate-700/40 bg-slate-900/45'
        }`}
        aria-label="Main navigation"
      >
        <a href="#hero" className="focus-ring font-display text-sm font-semibold tracking-wide text-white sm:text-base">
          {'Riddhima Gupta'}
        </a>

        <ul className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="focus-ring text-sm text-slate-300 transition hover:text-accent-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="focus-ring rounded-lg border border-slate-700 p-2 text-slate-200 md:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </motion.nav>

      {isOpen ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-slate-700/80 bg-slate-900/95 p-4 backdrop-blur-xl md:hidden">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className="focus-ring block rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
