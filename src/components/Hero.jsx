export default function Hero() {
  return (
    <section
      id="home"
      className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12"
    >
      {/* LEFT SIDE */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://github.com/manishk-sharma.png"
          className="rounded-full border-4 border-transparent 
                     w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 
                     object-cover shadow-2xl"
          id="profilepic"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold typewriter">
          Hi, I'm <span className="gradient-text">Manish Kumar Sharma</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-400">
          Full Stack Web Developer
        </p>

        <p className="text-gray-400 text-lg">
          I create modern, responsive web applications with React.js and JavaScript. Passionate about building user-friendly interfaces and contributing to meaningful projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-sm mx-auto md:mx-0">
          <a
            href="https://github.com/manishk-sharma"
            target="_blank"
            className="btn-primary btn-github px-5 py-3 rounded-lg flex items-center justify-center gap-3 transition"
          >
            <ion-icon name="logo-github" className="text-2xl"></ion-icon>
            <span id="github-stats">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/sharmanish11"
            target="_blank"
            className="btn-primary px-5 py-3 rounded-lg flex items-center justify-center gap-3 transition"
          >
            <ion-icon name="logo-linkedin" className="text-2xl"></ion-icon>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
