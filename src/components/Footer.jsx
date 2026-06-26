import msw from "../assets/msw.png";
import msb from "../assets/msb.png";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFileDownload, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer({ isDark }) {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-white/10 py-16 px-6 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 mb-12">
          {/* Logo & Brand Info Column */}
          <div className="col-span-2 space-y-6">
            <a
              href="#home"
              onClick={scrollToTop}
              className="inline-flex items-center text-xl font-black tracking-tighter text-slate-900 dark:text-white"
            >
              <img
                src={isDark ? msw : msb}
                alt="Manish Sharma Logo"
                className="w-8 h-8 mr-2 object-contain"
              />
              <span>Manish Sharma</span>
            </a>

            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              Full Stack Web Developer specializing in building clean, modern, and high-performance web applications.
            </p>

            {/* Social Icons (monochrome style, hovering to color/white) */}
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/manishk-sharma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/30 transition-all hover:-translate-y-0.5"
                title="GitHub"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href="https://linkedin.com/in/manishk-sharma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/30 transition-all hover:-translate-y-0.5"
                title="LinkedIn"
              >
                <FaLinkedin className="text-base" />
              </a>
              <a
                href="mailto:manish1182003@gmail.com"
                className="w-9 h-9 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/30 transition-all hover:-translate-y-0.5"
                title="Email"
              >
                <FaEnvelope className="text-base" />
              </a>
            </div>

            {/* Status Indicator (pulsing dot) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for full-time roles</span>
            </div>
          </div>

          {/* Sitemap Links Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white">
              Sitemap
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#home" onClick={scrollToTop} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li className="text-slate-500 dark:text-slate-400">Frontend Dev</li>
              <li className="text-slate-500 dark:text-slate-400">Backend APIs</li>
              <li className="text-slate-500 dark:text-slate-400">MERN Stack Apps</li>
              <li className="text-slate-500 dark:text-slate-400">UI/UX Design</li>
              <li className="text-slate-500 dark:text-slate-400">Custom Tooling</li>
            </ul>
          </div>

          {/* Main Stack Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white">
              Tech Stack
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li className="text-slate-500 dark:text-slate-400">React.js</li>
              <li className="text-slate-500 dark:text-slate-400">Node.js</li>
              <li className="text-slate-500 dark:text-slate-400">Express.js</li>
              <li className="text-slate-500 dark:text-slate-400">MongoDB</li>
              <li className="text-slate-500 dark:text-slate-400">Tailwind CSS</li>
              <li className="text-slate-500 dark:text-slate-400">JavaScript</li>
            </ul>
          </div>

          {/* Documents/Downloads Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white">
              Documents
            </h4>
            <div className="space-y-3">
              <a
                href="https://drive.google.com/file/d/1q1zHvW4TPPn-ET75y_NRJdlKqQWwje-B"
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-all group"
              >
                <span className="flex items-center gap-2">
                  <FaFileDownload className="text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />
                  <span>Resume (PDF)</span>
                </span>
                <FiArrowUpRight className="text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400 dark:text-slate-500">
          <div className="flex items-center gap-2">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} Manish Sharma. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
