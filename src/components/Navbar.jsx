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
          Manish Sharma
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="#home" onClick={scrollToTop} className="hover:text-[var(--accent)] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[var(--accent)] transition">
            About
          </a>
          <a href="#skills" className="hover:text-[var(--accent)] transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-[var(--accent)] transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-[var(--accent)] transition">
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
            href="https://linkedin.com/in/sharmanish11"
            target="_blank"
          >
            Hire Me
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
        <a href="#skills" className="block py-2" onClick={() => setOpen(false)}>
          Skills
        </a>
        <a href="#projects" className="block py-2" onClick={() => setOpen(false)}>
          Projects
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
            href="https://linkedin.com/in/sharmanish11"
            target="_blank"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
