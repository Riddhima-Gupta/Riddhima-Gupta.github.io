import { profile } from '../data/profile';

export default function FooterSection() {
  return (
    <footer id="footer" className="border-t border-slate-800/80 py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
          <span>{new Date().getFullYear()}</span>
          <span>{profile.name}</span>
          <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
