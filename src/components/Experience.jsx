import { useState } from "react";

export default function Experience() {
  const [view, setView] = useState("exp");

  return (
    <section id="experience" className="py-20 px-4 experience-section">
      <h2 className="section-title text-center">Experience</h2>

      <div className="flex justify-center mb-12">
        <div className="toggle-container p-1 rounded-xl inline-flex border border-gray-700">
          <button
            onClick={() => setView("exp")}
            className={`toggle-btn ${view === "exp" ? "active" : ""}`}
            data-target="exp-content"
          >
            Experience
          </button>
          <button
            onClick={() => setView("edu")}
            className={`toggle-btn ${view === "edu" ? "active" : ""}`}
            data-target="edu-content"
          >
            Education
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative timeline-container">
        <div className="timeline-line"></div>

        {view === "exp" && (
          <div id="exp-content" className="timeline-group">
            <div className="timeline-item left">
              <div className="timeline-dot">
                <ion-icon name="briefcase"></ion-icon>
              </div>
              <div className="timeline-card">
                <h3>Full Stack Developer intern</h3>
                <p className="text-[var(--accent)]">
                  Unlink Technologies Private limited
                </p>
                <span className="text-sm text-gray-500">Sep 2025 - Dec 2025</span>
                <ul className="mt-2 text-gray-400 text-sm list-disc ml-4">
                  <li>Noida, Uttar Pradesh, India · On-site.</li>
                  <li>Contributed to Web Development upgrades.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {view === "edu" && (
          <div id="edu-content" className="timeline-group">
            <div className="timeline-item left">
              <div className="timeline-dot">
                <ion-icon name="school"></ion-icon>
              </div>
              <div className="timeline-card">
                <h3>Bachelor of Technology - Computer Science and Engineering</h3>
                <p className="text-[var(--accent)]">
                  Guru Gobind Singh Indraprastha University
                </p>
                <span className="text-sm text-gray-500">2022 – 2025</span>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-dot">
                <ion-icon name="school"></ion-icon>
              </div>
              <div className="timeline-card">
                <h3>Diploma in Information Technology</h3>
                <p className="text-blue-400">
                  Integrated Institute of Technology, Delhi
                </p>
                <span className="text-sm text-gray-500">2019 – 2022</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
