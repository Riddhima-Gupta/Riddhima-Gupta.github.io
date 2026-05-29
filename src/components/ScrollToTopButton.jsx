import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 450);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="focus-ring fixed bottom-6 right-6 z-50 rounded-full border border-slate-700 bg-slate-900/80 p-3 text-slate-100 shadow-glow backdrop-blur transition hover:-translate-y-1 hover:border-accent-cyan/60 hover:text-accent-cyan"
      aria-label="Scroll back to top"
    >
      <FiArrowUp className="h-5 w-5" />
    </button>
  );
}
