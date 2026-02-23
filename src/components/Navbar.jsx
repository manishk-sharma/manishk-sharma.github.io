import { useState } from "react";
import msw from "../assets/msw.png";

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
    <header className="sticky top-0 navbar-header z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={scrollToTop} className="text-2xl font-bold hover:text-[var(--accent)] transition">
          <img
            src={msw}
            alt="Manish Sharma"
            className="w-10 h-10 inline-block mr-2 align-middle"
          />
          Manish Kumar Sharma
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="#home" onClick={scrollToTop} className="px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all">
            Home
          </a>
          <a href="#about" className="px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all">
            About
          </a>
          <a href="#projects" className="px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all">
            Projects
          </a>
          <a href="#skills" className="px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all">
            Skills
          </a>
          <a href="#contact" className="px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all">
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="text-xl p-2 hover:bg-gray-800 rounded-full transition"
          >
            {isDark ? "⏾" : "☀"}
          </button>
          <a
            id="hireMeBtn"
            className="btn-primary text-white inline-block"
            href="#get-in-touch"
          >
            Get In Touch
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${open ? "block" : "hidden"
          } md:hidden mobile-menu px-6 py-4 space-y-4`}
      >
        <a href="#home" className="block py-2" onClick={scrollToTop}>
          Home
        </a>
        <a href="#about" className="block py-2" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#projects" className="block py-2" onClick={() => setOpen(false)}>
          Projects
        </a>
        <a href="#skills" className="block py-2" onClick={() => setOpen(false)}>
          Skills
        </a>
        <a href="#contact" className="block py-2" onClick={() => setOpen(false)}>
          Contact
        </a>
        <div className="flex items-center gap-4 pt-4 mobile-menu-footer">
          <button onClick={() => { toggleTheme(); setOpen(false); }} className="text-xl">
            {isDark ? "⏾" : "☀"}
          </button>
          <a
            className="btn-primary w-full text-white inline-block text-center"
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
