import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/profile';
import { fadeInUp } from '../animations/motionVariants';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          description="Ways to reach me for internship opportunities, collaborations, or technical conversations."
        />

        <div className="flex flex-wrap justify-center gap-6">
          <motion.article
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="glass rounded-2xl p-6"
          >
            <ul className="mt-5 space-y-3 text-sm text-slate-300" flex flex-wrap justify-center gap-6>
              <li>
                <a href={profile.social.email} className="focus-ring inline-flex rounded-md hover:text-accent-cyan flex items-center gap-2 rounded-xl px-4 py-3">
                  <FiMail /> {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center hover:text-accent-cyan flex items-center gap-2 rounded-xl px-4 py-3"
                >
                  <FiLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center hover:text-accent-cyan flex items-center gap-2 rounded-xl px-4 py-3"
                >
                  <FiGithub /> GitHub
                </a>
              </li>
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
