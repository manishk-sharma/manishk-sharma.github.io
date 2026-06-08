import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGithub,
  FaGitAlt,
  FaGoogle,
  FaBootstrap
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb
} from "react-icons/si";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Skills() {
  const [filter, setFilter] = useState("frontend");
  const ref = useScrollReveal();

  const skills = [
    {
      name: "HTML5",
      type: "frontend",
      icon: <FaHtml5 className="text-orange-500" />,
      bg: "bg-orange-500/10 text-orange-500",
    },
    {
      name: "CSS3",
      type: "frontend",
      icon: <FaCss3Alt className="text-blue-500" />,
      bg: "bg-blue-500/10 text-blue-500",
    },
    {
      name: "JavaScript",
      type: "frontend",
      icon: <FaJs className="text-yellow-500" />,
      bg: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    },
    {
      name: "NextJS",
      type: "frontend",
      icon: <SiNextdotjs className="text-slate-900 dark:text-white" />,
      bg: "bg-slate-500/10 text-slate-800 dark:text-slate-200",
    },
    {
      name: "ReactJS",
      type: "frontend",
      icon: <FaReact className="text-cyan-400" />,
      bg: "bg-cyan-500/10 text-cyan-500",
    },
    {
      name: "Tailwind",
      type: "frontend",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
      bg: "bg-sky-500/10 text-sky-500",
    },
    {
      name: "Bootstrap",
      type: "frontend",
      icon: <FaBootstrap className="text-[#7952B3]" />,
      bg: "bg-purple-500/10 text-purple-500",
    },
    {
      name: "NodeJS",
      type: "backend",
      icon: <FaNodeJs className="text-green-500" />,
      bg: "bg-green-500/10 text-green-500",
    },
    {
      name: "ExpressJS",
      type: "backend",
      icon: <SiExpress className="text-slate-800 dark:text-white" />,
      bg: "bg-slate-500/10 text-slate-800 dark:text-slate-200",
    },
    {
      name: "MongoDB",
      type: "backend",
      icon: <SiMongodb className="text-green-600" />,
      bg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
      name: "PHP",
      type: "backend",
      icon: <FaPhp className="text-indigo-500" />,
      bg: "bg-indigo-500/10 text-indigo-500",
    },
    {
      name: "GitHub",
      type: "others",
      icon: <FaGithub className="text-slate-800 dark:text-white" />,
      bg: "bg-slate-500/10 text-slate-800 dark:text-slate-200",
    },
    {
      name: "Git",
      type: "others",
      icon: <FaGitAlt className="text-[#F05032]" />,
      bg: "bg-red-500/10 text-red-500",
    },
    {
      name: "Googling",
      type: "others",
      icon: <FaGoogle className="text-[#4285F4]" />,
      bg: "bg-blue-500/10 text-blue-500",
    },
  ];

  // stagger delays for up to 8 skill items
  const delays = [0, 100, 150, 200, 250, 300, 350, 400];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50/30 dark:bg-slate-950/10" ref={ref}>
      <div className="text-center mb-16">
        <h2
          data-reveal="fade-up"
          className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-slate-900 dark:text-white leading-[1.1]"
        >
          Technical <span className="text-brand">Skills</span>
        </h2>
        <p
          data-reveal="fade-up"
          data-delay="100"
          className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
        >
          Technologies and tools I work with
        </p>
      </div>

      <div data-reveal="fade-up" data-delay="150" className="flex justify-center mb-12">
        <div className="bg-slate-100 dark:bg-slate-900/60 p-1.5 rounded-2xl inline-flex border border-slate-200 dark:border-slate-800/50">
          <button
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${filter === "frontend"
                ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-md"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </button>
          <button
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${filter === "backend"
                ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-md"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            onClick={() => setFilter("backend")}
          >
            Backend
          </button>
          <button
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${filter === "others"
                ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-md"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            onClick={() => setFilter("others")}
          >
            Others
          </button>
        </div>
      </div>

      <div
        id="skills-grid"
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-4 justify-items-center mt-12"
      >
        {skills
          .filter((s) => s.type === filter)
          .map((s, i) => (
            <div
              key={s.name}
              className="flex flex-col items-center gap-4 group"
              data-reveal="scale"
              data-delay={delays[i] ?? 400}
            >
              <div className={`skill-circle-pulse w-24 h-24 rounded-full bg-white dark:bg-[#09090b] border border-slate-200 dark:border-zinc-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-lg dark:hover:shadow-none transition-all duration-300 flex items-center justify-center text-4xl ${s.bg}`}>
                {s.icon}
              </div>
              <p className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {s.name}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}
