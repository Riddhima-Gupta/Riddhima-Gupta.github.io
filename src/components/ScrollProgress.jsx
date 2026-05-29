import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(value);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[70] h-1 w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
