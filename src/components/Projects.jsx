import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/manishk-sharma/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.filter((r) => !r.fork).slice(0, 4));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/20">
      <div className="text-center mb-16">
        <h2 className="section-title mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Here are some of the projects I've worked on, showcasing my skills in React.js,
          JavaScript, and modern web development
        </p>
      </div>

      <div
        id="projects-container"
        className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
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
            className="card-bg rounded-2xl p-8 flex flex-col justify-between group transition-all hover:-translate-y-2 border border-white/5 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <ion-icon name="folder-open-outline" style={{ fontSize: '24px' }}></ion-icon>
                </div>
                <div className="flex gap-3">
                  <span className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition">
                    <ion-icon name="arrow-forward-outline" style={{ fontSize: '20px' }}></ion-icon>
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {repo.name}
              </h3>

              <p className="text-gray-400 text-base mb-6 leading-relaxed line-clamp-3">
                {repo.description || "Building something amazing with modern tech. Check out the code to learn more about the implementation details."}
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm font-medium text-gray-500 border-t border-white/5 pt-4 mt-auto">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                {repo.language || "Code"}
              </span>
              <span className="flex items-center gap-1 group-hover:text-yellow-400 transition-colors">
                <ion-icon name="star"></ion-icon>
                {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1 ml-auto">
                <ion-icon name="git-network-outline"></ion-icon>
                {repo.forks_count || 0}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
