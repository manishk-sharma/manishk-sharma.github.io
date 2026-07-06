import { useState } from "react";
import { FiBriefcase, FiCode } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

const experiences = [
  {
    id: "freelance-web-developer",
    role: "Freelance Web Developer",
    company: "AST Digitally",
    location: "Remote",
    duration: "May 2026 – Present",
    responsibilities: [
      "Developed and delivered two complete business websites.",
      "Built responsive landing pages and custom admin panels.",
      "Managed the complete development lifecycle from requirement gathering to deployment.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "PHP",
      "MySQL",
    ],
    icon: FiBriefcase,
  },
  {
    id: "mern-stack-developer-intern",
    role: "MERN Stack Developer Intern",
    company: "Geeks for Geeks",
    location: "Noida, Uttar Pradesh, India (On-site)",
    duration: "Dec 2025 – Feb 2026",
    responsibilities: [
      "Completed intensive MERN Stack training.",
      "Built full-stack applications using React.js, Node.js, Express.js, and MongoDB.",
      "Implemented authentication, REST APIs, reusable components, and database integration.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    icon: FiBriefcase,
  },
  {
    id: "web-developer-intern",
    role: "Web Developer Intern",
    company: "Unlink Technologies Private Limited",
    location: "Noida, Uttar Pradesh, India (On-site)",
    duration: "Sept 2025 – Dec 2025",
    responsibilities: [
      "Developed responsive web application features.",
      "Collaborated with developers to identify and resolve UI/UX issues.",
      "Ensured responsive behaviour across multiple devices.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    icon: FiBriefcase,
  },
];

function ExperienceTimelineItem({ experience, index }) {
  const Icon = experience.icon;
  const alignment = index % 2 === 0 ? "left" : "right";
  const inlineAlignment =
    alignment === "left" ? "justify-start md:justify-end" : "justify-start";
  const isPresent = experience.duration.includes("Present");

  return (
    <div className={`timeline-item ${alignment}`}>
      <div className="timeline-dot timeline-dot-pulse bg-white dark:bg-slate-950 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 shadow-md dark:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
        <Icon className="w-5 h-5" />
      </div>
      <div
        data-reveal={alignment === "left" ? "fade-left" : "fade-right"}
        data-delay={String(200 + index * 150)}
        className="bg-white dark:bg-[#09090b] border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-8 shadow-sm hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-none hover:-translate-y-2 transition-all duration-300"
      >
        <div className={`flex flex-wrap items-center gap-2 mb-1 ${inlineAlignment}`}>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {experience.role}
          </h3>
          {isPresent && (
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs font-bold text-blue-600 dark:text-blue-400">
              Present
            </span>
          )}
        </div>
        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
          {experience.company}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-2">
          {experience.location}
        </p>
        <span className="text-sm text-slate-400 dark:text-slate-500 font-semibold">
          {experience.duration}
        </span>
        <ul className="mt-4 text-slate-500 dark:text-slate-400 text-sm font-medium list-disc ml-4 space-y-1">
          {experience.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
        <div className={`mt-5 flex flex-wrap gap-2 ${inlineAlignment}`}>
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-slate-900/60 px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [view, setView] = useState("exp");
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50/30 dark:bg-slate-950/10" ref={ref}>
      <div className="text-center mb-16">
        <h2
          data-reveal="fade-up"
          className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-center text-slate-900 dark:text-white leading-[1.1]"
        >
          Experience &amp; <span className="text-brand">Education</span>
        </h2>
        <p
          data-reveal="fade-up"
          data-delay="100"
          className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
        >
          My journey in frontend development and programming
        </p>
      </div>

      <div data-reveal="fade-up" data-delay="150" className="flex justify-center mb-12">
        <div className="bg-slate-100 dark:bg-slate-900/60 p-1.5 rounded-2xl inline-flex border border-slate-200 dark:border-slate-800/50">
          <button
            onClick={() => setView("exp")}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${view === "exp"
              ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-md"
              : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
          >
            Experience
          </button>
          <button
            onClick={() => setView("edu")}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${view === "edu"
              ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-md"
              : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
          >
            Education
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative timeline-container">
        <div className="timeline-line"></div>

        {view === "exp" && (
          <div id="exp-content" className="timeline-group">
            {experiences.map((experience, index) => (
              <ExperienceTimelineItem
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        )}

        {view === "edu" && (
          <div id="edu-content" className="timeline-group">
            <div className="timeline-item left">
              <div className="timeline-dot timeline-dot-pulse bg-white dark:bg-slate-950 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 shadow-md dark:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <FaGraduationCap className="w-5 h-5" />
              </div>
              <div
                data-reveal="fade-left"
                data-delay="200"
                className="bg-white dark:bg-[#09090b] border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-8 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-none transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Bachelor of Technology - Computer Science</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  Guru Gobind Singh Indraprastha University
                </p>
                <span className="text-sm text-slate-400 dark:text-slate-500 font-semibold">2022 – 2025</span>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-dot timeline-dot-pulse bg-white dark:bg-slate-950 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 shadow-md dark:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <FaGraduationCap className="w-5 h-5" />
              </div>
              <div
                data-reveal="fade-right"
                data-delay="350"
                className="bg-white dark:bg-[#09090b] border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-8 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-none transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Diploma in Information Technology</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  Integrated Institute of Technology, Delhi
                </p>
                <span className="text-sm text-slate-400 dark:text-slate-500 font-semibold">2019 – 2022</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
