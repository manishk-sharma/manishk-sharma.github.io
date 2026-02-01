import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/mani1183/repos?sort=updated&per_page=6")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.filter((r) => !r.fork).slice(0, 4));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/20">
      <h2 className="section-title text-center">Projects</h2>
      <div
        id="projects-container"
        className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12"
      >
        {loading && (
          <p className="col-span-full text-center text-gray-400">
            Loading GitHub projects...
          </p>
        )}

        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-bg rounded-2xl p-8 flex flex-col justify-between group transition-all hover:-translate-y-2"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <ion-icon
                  name="folder-open-outline"
                  class="text-3xl text-[var(--accent)]"
                ></ion-icon>
                <div className="flex gap-3">
                  <ion-icon
                    name="logo-github"
                    class="text-xl group-hover:text-white transition"
                  ></ion-icon>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition">
                {repo.name}
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                {repo.description || "Building something amazing with modern tech."}
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>{" "}
                {repo.language || "Code"}
              </span>
              <span>⭐ {repo.stargazers_count}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
