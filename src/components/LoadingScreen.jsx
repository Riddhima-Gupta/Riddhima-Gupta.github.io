import { useEffect } from 'react';

export default function LoadingScreen({ isVisible }) {
  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-base"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="flex items-center gap-3">
        <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-accent-cyan" />
        <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-accent-blue [animation-delay:150ms]" />
        <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-accent-violet [animation-delay:300ms]" />
      </div>
    </div>
  );
}
