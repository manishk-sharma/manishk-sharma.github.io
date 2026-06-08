import { useState } from "react";
import msw from "../assets/msw.png";
import msb from "../assets/msb.png";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";


export default function Navbar({ toggleTheme, isDark }) {
  const [open, setOpen] = useState(false);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 navbar-header z-50 navbar-animate">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={scrollToTop} className="text-xl font-black tracking-tighter text-slate-900 dark:text-white inline-flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <img
            src={isDark ? msw : msb}
            alt="Manish Sharma"
            className="w-8 h-8 inline-block mr-2 align-middle object-contain"
          />
          Manish Sharma
        </a>

        <div className="hidden md:flex items-center gap-4">
          <a href="#home" onClick={scrollToTop} className="px-3.5 py-2 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-200 dark:hover:border-zinc-800/85 transition-all text-sm font-bold">
            Home
          </a>
          <a href="#about" className="px-3.5 py-2 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-200 dark:hover:border-zinc-800/85 transition-all text-sm font-bold">
            About
          </a>
          <a href="#experience" className="px-3.5 py-2 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-200 dark:hover:border-zinc-800/85 transition-all text-sm font-bold">
            Experience
          </a>
          <a href="#projects" className="px-3.5 py-2 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-200 dark:hover:border-zinc-800/85 transition-all text-sm font-bold">
            Projects
          </a>
          <a href="#skills" className="px-3.5 py-2 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-200 dark:hover:border-zinc-800/85 transition-all text-sm font-bold">
            Skills
          </a>
          <a href="#contact" className="px-3.5 py-2 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-200 dark:hover:border-zinc-800/85 transition-all text-sm font-bold">
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="text-lg p-2.5 hover:bg-slate-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-200 dark:hover:border-zinc-800/85 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-center"
            title="Toggle Theme"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <a
            id="hireMeBtn"
            className="btn-primary text-white inline-block text-sm font-bold"
            href="#get-in-touch"
          >
            Get In Touch
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl p-2 rounded-xl border border-transparent hover:bg-slate-100 dark:hover:bg-zinc-900/60 hover:border-slate-200 dark:hover:border-zinc-800/85 transition-all">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${open ? "block" : "hidden"
          } md:hidden mobile-menu px-6 py-4 space-y-2.5 bg-white/95 dark:bg-black/95 backdrop-blur-xl`}
      >
        <a href="#home" className="block px-4 py-2.5 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-200 dark:hover:border-zinc-800/85 transition-all font-bold text-sm" onClick={scrollToTop}>
          Home
        </a>
        <a href="#about" className="block px-4 py-2.5 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-200 dark:hover:border-zinc-800/85 transition-all font-bold text-sm" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#experience" className="block px-4 py-2.5 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-200 dark:hover:border-zinc-800/85 transition-all font-bold text-sm" onClick={() => setOpen(false)}>
          Experience
        </a>
        <a href="#projects" className="block px-4 py-2.5 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-200 dark:hover:border-zinc-800/85 transition-all font-bold text-sm" onClick={() => setOpen(false)}>
          Projects
        </a>
        <a href="#skills" className="block px-4 py-2.5 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-200 dark:hover:border-zinc-800/85 transition-all font-bold text-sm" onClick={() => setOpen(false)}>
          Skills
        </a>
        <a href="#contact" className="block px-4 py-2.5 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-200 dark:hover:border-zinc-800/85 transition-all font-bold text-sm" onClick={() => setOpen(false)}>
          Contact
        </a>
        <div className="flex items-center gap-4 pt-4 mobile-menu-footer">
          <button onClick={() => { toggleTheme(); setOpen(false); }} className="text-lg p-2.5 hover:bg-slate-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-200 dark:hover:border-zinc-800/85 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-center">
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <a
            className="btn-primary w-full text-white inline-block text-center text-sm font-bold"
            href="#get-in-touch"
            target="_blank"
            onClick={() => setOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
}
