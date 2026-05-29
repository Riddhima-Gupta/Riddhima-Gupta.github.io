import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { profile } from '../data/profile';

const socialItems = [
  { id: 'linkedin', icon: FaLinkedinIn, label: 'LinkedIn', href: "https://www.linkedin.com/in/riddhima-gupta-310766320/" },
  { id: 'github', icon: FaGithub, label: 'GitHub', href: "https://github.com/Riddhima-Gupta" },
  { id: 'email', icon: MdOutlineEmail, label: 'Email', href: "mailto:riddhimagupta045@gmail.com" },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialItems.map(({ id, icon: Icon, label, href }) => (
        <motion.a
          key={id}
          href={href}
          target={id === 'email' ? undefined : '_blank'}
          rel={id === 'email' ? undefined : 'noreferrer'}
          whileHover={{ y: -4 }}
          className="focus-ring rounded-full border border-slate-700/80 bg-slate-900/70 p-3 text-slate-200 transition hover:border-accent-cyan/70 hover:text-accent-cyan"
          aria-label={label}
        >
          <Icon className="h-4 w-4" />
        </motion.a>
      ))}
    </div>
  );
}
