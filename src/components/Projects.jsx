import { useEffect, useRef, useState } from "react";
import { FiFolder, FiExternalLink, FiStar, FiGitBranch, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

// ─── Reusable project card ────────────────────────────────────────────────────
function ProjectCard({ repo, revealAttr, delay }) {
  return (
    <div
      {...(revealAttr ? { "data-reveal": revealAttr } : {})}
      {...(delay !== undefined ? { "data-delay": delay } : {})}
      onClick={() =>
        window.open(repo.homepage || repo.html_url, "_blank", "noopener,noreferrer")
      }
      className="cursor-pointer bg-white dark:bg-[#09090b] rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 border border-slate-200 dark:border-zinc-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-none hover:-translate-y-1"
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-all duration-300">
            <FiFolder className="w-6 h-6" />
          </div>
          <div className="flex gap-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-200"
              title="View Source Code"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="w-5 h-5" />
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-200"
                title="View Live Site"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {repo.name}
        </h3>

        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
          {repo.description ||
            "Building something amazing with modern tech. Check out the code to learn more about the implementation details."}
        </p>
      </div>

      <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/50 pt-5 mt-auto">
        <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100/30 dark:border-blue-950/30">
          {repo.language || "Code"}
        </span>
        <span className="flex items-center gap-1 hover:text-yellow-500 transition-colors">
          <FiStar className="w-4 h-4" />
          <span>{repo.stargazers_count}</span>
        </span>
        <span className="flex items-center gap-1 ml-auto">
          <FiGitBranch className="w-4 h-4" />
          <span>{repo.forks_count || 0}</span>
        </span>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const extraRef = useRef(null);          // ref for the expandable wrapper
  const [extraHeight, setExtraHeight] = useState(0); // measured scroll height
  const sectionRef = useScrollReveal();

  useEffect(() => {
    fetch("https://api.github.com/users/manishk-sharma/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data.filter((r) => !r.fork));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Measure the real scroll height of the extra panel whenever repos change
  useEffect(() => {
    if (extraRef.current) {
      setExtraHeight(extraRef.current.scrollHeight);
    }
  }, [repos]);

  const initialRepos = repos.slice(0, 4);
  const extraRepos = repos.slice(4);
  const hasExtra = extraRepos.length > 0;

  const initialDelays = [0, 150, 300, 450];
  const extraDelays   = [0, 100, 200, 300, 400, 450];

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gray-50/50 dark:bg-slate-950/20"
      ref={sectionRef}
    >
      {/* ── Heading ── */}
      <div className="text-center mb-16">
        <h2
          data-reveal="fade-up"
          className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-slate-900 dark:text-white leading-[1.1]"
        >
          Featured <span className="text-brand">Projects</span>
        </h2>
        <p
          data-reveal="fade-up"
          data-delay="100"
          className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed font-medium"
        >
          Here are some of the projects I've worked on, showcasing my skills in
          React.js, JavaScript, and modern web development
        </p>
      </div>

      {/* ── Loading ── */}
      {loading && (
        <p className="text-center text-slate-500 dark:text-slate-400 mb-8">
          Loading GitHub projects...
        </p>
      )}

      {/* ── Always-visible first 4 cards ── */}
      <div
        id="projects-container"
        className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8"
      >
        {initialRepos.map((repo, i) => (
          <ProjectCard
            key={repo.id}
            repo={repo}
            revealAttr="fade-up"
            delay={initialDelays[i] ?? 300}
          />
        ))}
      </div>

      {/* ── Expandable extra cards ──────────────────────────────────────────────
           Key technique: the inner grid is measured once (extraHeight) and the
           outer wrapper transitions between max-height 0 and the real pixel
           value. overflow-hidden means zero layout space when collapsed.
      ─────────────────────────────────────────────────────────────────────── */}
      {hasExtra && (
        <div
          style={{
            maxHeight: expanded ? `${extraHeight + 64}px` : "0px",
            overflow: "hidden",
            transition: "max-height 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* inner ref so we can measure the true height */}
          <div ref={extraRef} className="pt-8">
            <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              {extraRepos.map((repo, i) => (
                <ProjectCard
                  key={repo.id}
                  repo={repo}
                  // No data-reveal on extra cards — they're inside the
                  // max-height wrapper which handles the reveal itself
                  delay={extraDelays[i] ?? 400}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Button row ── */}
      {hasExtra && (
        <div
          data-reveal="fade-up"
          data-delay="200"
          className="flex flex-col sm:flex-row justify-center items-center mt-12 gap-4"
        >
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="px-6 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2 min-w-[180px]"
          >
            <span>{expanded ? "View Less" : "View More Projects"}</span>
            {expanded ? (
              <FiChevronUp className="w-4 h-4" />
            ) : (
              <FiChevronDown className="w-4 h-4" />
            )}
          </button>

          <a
            href="https://github.com/manishk-sharma?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/10 hover:-translate-y-0.5 min-w-[180px]"
          >
            <span>View all on GitHub</span>
            <FiExternalLink />
          </a>
        </div>
      )}
    </section>
  );
}
