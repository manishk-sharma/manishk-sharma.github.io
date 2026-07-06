import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

// ─── Typewriter Component ─────────────────────────────────────────────────────
function Typewriter({ texts = [], typingSpeed = 75, deletingSpeed = 40, pauseMs = 2000 }) {
  const [displayed, setDisplayed] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [cursor, setCursor] = useState(true);

  // Typing / deleting logic
  useEffect(() => {
    const current = texts[textIdx] ?? "";

    if (!deleting && charIdx < current.length) {
      // Type next character
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(t);
    }

    if (!deleting && charIdx === current.length) {
      // Pause at end before deleting
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    if (deleting && charIdx > 0) {
      // Delete one character
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, deletingSpeed);
      return () => clearTimeout(t);
    }

    if (deleting && charIdx === 0) {
      // Move to next text
      setDeleting(false);
      setTextIdx((i) => (i + 1) % texts.length);
    }
  }, [charIdx, deleting, textIdx, texts, typingSpeed, deletingSpeed, pauseMs]);

  // Blinking cursor
  useEffect(() => {
    const t = setInterval(() => setCursor((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <span>
      {displayed}
      <span
        aria-hidden="true"
        style={{
          opacity: cursor ? 1 : 0,
          color: "var(--accent)",
          fontWeight: 400,
          transition: "opacity 0.1s",
        }}
      >
        |
      </span>
    </span>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="home"
      className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12 min-h-[70vh]"
    >
      {/* LEFT — Text & Actions */}
      <div className="md:w-1/2 text-center md:text-left">

        {/* "Open to Work" badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-blue-700 dark:text-blue-400 text-sm font-semibold mb-6 animate-fade-in-up animate-delay-100 overflow-hidden relative">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          <span>Open to Work</span>
          <span className="pointer-events-none absolute inset-0 hero-shimmer rounded-full"></span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-black tracking-tighter text-slate-900 dark:text-white leading-[1.05] mb-4 animate-fade-in-up animate-delay-200">
          Hi, I'm <br />
          <span className="gradient-text">Manish Sharma</span>
        </h1>

        {/* Typewriter subtitle */}
        <p className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 animate-fade-in-up animate-delay-300 min-h-[2rem]">
          <Typewriter
            texts={[
              "Web Developer",
              "Tech Enthusiast",
              "Full Stack Developer",
              "UI / UX Focused Builder",
            ]}
            typingSpeed={70}
            deletingSpeed={38}
            pauseMs={2200}
          />
        </p>

        {/* Description */}
        <p className="text-slate-500 dark:text-slate-400 text-base max-w-lg leading-relaxed font-medium mb-8 animate-fade-in-up animate-delay-400">
          I create modern, responsive web applications with React.js and
          JavaScript. Passionate about building user-friendly interfaces and
          contributing to meaningful projects.
        </p>

        {/* Action buttons */}
        <div
          className="flex flex-row gap-4 justify-center md:justify-start animate-fade-in-up"
          style={{ animationDelay: "500ms", opacity: 0, animationFillMode: "forwards" }}
        >
          <a
            href="https://github.com/manishk-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800/80 hover:bg-slate-200 dark:hover:bg-zinc-900/80 text-slate-900 dark:text-zinc-200 font-bold flex items-center gap-2.5 transition-all hover:-translate-y-1 shadow-sm"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/manishk-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center gap-2.5 transition-all hover:-translate-y-1 shadow-lg shadow-blue-600/20"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
            <FiArrowRight className="text-sm opacity-80" />
          </a>
        </div>
      </div>

      {/* RIGHT — Profile image */}
      <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-up animate-delay-200">
        <div className="relative">
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl scale-110"></div>
          <img
            src="https://github.com/manishk-sharma.png"
            className="relative rounded-full border-[8px] border-white dark:border-[#0c111d]
                       w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96
                       object-cover shadow-2xl"
            id="profilepic"
            alt="Manish Sharma"
          />
        </div>
      </div>
    </section>
  );
}
