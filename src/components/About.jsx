import { useEffect, useRef, useState } from "react";
import { FiCompass } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

// ─── Count-Up Component ───────────────────────────────────────────────────────
// Counts from 0 → target when the element enters the viewport.
// `suffix` is appended after the number (e.g. "+").
function CountUp({ target, suffix = "", duration = 1200 }) {
  const [count, setCount] = useState(0);
  const elRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();

          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out quad
            const eased = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target); // ensure exact final value
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={elRef}>
      {count}
      {suffix}
    </span>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────
export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-20 px-4 bg-gray-50/30 dark:bg-slate-950/10" ref={ref}>
      <h2
        data-reveal="fade-up"
        className="text-4xl md:text-5xl font-black tracking-tighter mb-12 text-center text-slate-900 dark:text-white leading-[1.1]"
      >
        About <span className="text-brand">Me</span>
      </h2>

      {/* Summary */}
      <div className="max-w-3xl mx-auto space-y-6 mb-16">
        <p
          data-reveal="fade-up"
          data-delay="100"
          className="text-slate-600 dark:text-slate-300 text-center text-lg leading-relaxed font-medium"
        >
          Full Stack Web Developer with hands-on experience in MERN stack development.
          Skilled in building responsive, user-focused applications with clean code.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300 font-semibold max-w-xl mx-auto pl-4">
          <li data-reveal="fade-left" data-delay="150" className="flex items-center gap-2">
            <span>👨‍💻</span> <span><strong>Role:</strong> MERN Stack Learner - GeeksforGeeks</span>
          </li>
          <li data-reveal="fade-right" data-delay="200" className="flex items-center gap-2">
            <span>📫</span> <span><strong>Email:</strong> manish1182003@gmail.com</span>
          </li>
          <li data-reveal="fade-left" data-delay="250" className="flex items-center gap-2">
            <span>💼</span> <span><strong>Project:</strong> E-commerce (React)</span>
          </li>
          <li data-reveal="fade-right" data-delay="300" className="flex items-center gap-2">
            <span>🌱</span> <span><strong>Learning:</strong> Advanced MERN</span>
          </li>
        </ul>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* My Journey Card */}
        <div
          data-reveal="fade-up"
          data-delay="200"
          className="bg-white dark:bg-[#09090b] rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 border border-slate-200 dark:border-zinc-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-none mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-all duration-300">
              <FiCompass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">My Journey</h3>
          </div>

          <div className="space-y-4 text-slate-500 dark:text-slate-400 leading-relaxed text-base font-medium">
            <p>
              I am looking to join a company where I can learn, grow, and
              contribute to its success while improving my skills and knowledge.
              I enjoy taking on new challenges and believe in continuous learning.
            </p>
            <p>
              My goal is to add value to the organization while building a strong
              foundation for my career. I'm passionate about frontend
              development and creating user-friendly interfaces that make a
              difference.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            data-reveal="scale"
            data-delay="300"
            className="bg-white dark:bg-[#09090b] rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 border border-slate-200 dark:border-zinc-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-none"
          >
            <h4 className="text-5xl font-bold text-brand mb-2">
              <CountUp target={6} suffix="+" duration={1000} />
            </h4>
            <p className="text-slate-500 dark:text-slate-400 font-bold text-lg">Months Experience</p>
          </div>

          <div
            data-reveal="scale"
            data-delay="400"
            className="bg-white dark:bg-[#09090b] rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 border border-slate-200 dark:border-zinc-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-none"
          >
            <h4 className="text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
              <CountUp target={6} suffix="+" duration={1000} />
            </h4>
            <p className="text-slate-500 dark:text-slate-400 font-bold text-lg">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
