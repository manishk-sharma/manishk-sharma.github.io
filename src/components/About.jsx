export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white/5">
      <h2 className="section-title text-center">About <span className="gradient-text">Me</span></h2>

      {/* Existing Summary Content */}
      <div className="max-w-3xl mx-auto space-y-6 mb-16">
        <p className="text-gray-300 text-center text-lg leading-relaxed">
          Full Stack Web Developer with hands-on experience in MERN stack development.
          Skilled in building responsive, user-focused applications with clean code.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          <li className="flex items-center gap-2"><span>👨‍💻</span> <strong>Role:</strong> MERN Stack Learner - GeeksforGeeks</li>
          <li className="flex items-center gap-2"><span>📫</span> <strong>Email:</strong> manish1182003@gmail.com</li>
          <li className="flex items-center gap-2"><span>💼</span> <strong>Project:</strong> E-commerce (React)</li>
          <li className="flex items-center gap-2"><span>🌱</span> <strong>Learning:</strong> Advanced MERN</li>
        </ul>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* My Journey Card */}
        <div className="card-bg p-8 hover:bg-opacity-80 transition-all rounded-3xl border border-white/5 hover:border-blue-500/30 group mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              <ion-icon name="disc-outline" style={{ fontSize: '24px' }}></ion-icon>
            </div>
            <h3 className="text-2xl font-bold">My Journey</h3>
          </div>

          <div className="space-y-4 text-gray-400 leading-relaxed text-base">
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
          <div className="card-bg p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform border border-white/5 hover:border-blue-500/30">
            <h4 className="text-5xl font-bold text-blue-500 mb-2">6+</h4>
            <p className="text-gray-400 font-medium text-lg">Months Experience</p>
          </div>

          <div className="card-bg p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform border border-white/5 hover:border-blue-500/30">
            <h4 className="text-5xl font-bold text-blue-500 mb-2">6+</h4>
            <p className="text-gray-400 font-medium text-lg">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
