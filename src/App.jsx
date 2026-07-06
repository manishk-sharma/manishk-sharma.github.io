import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Sync theme class
  useEffect(() => {
    if (!isDark) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, [isDark]);

  // Theme Toggle Logic
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const handleLoad = () => setLoaded(true);
    if (document.readyState === "complete") {
      setTimeout(() => setLoaded(true), 0);
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Scroll Reveal Observer
  useEffect(() => {
    if (!loaded) return;

    const revealCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [loaded]);

  return (
    <div
      className={`${isDark
        ? "text-gray-100"
        : "text-gray-900"
        } transition-colors duration-300 antialiased font-sans min-h-screen`}
    >
      <div id="page-loader" className={`${loaded ? "hidden" : ""}`}>
        <div className="loader-ring"></div>
      </div>

      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer isDark={isDark} />
    </div>
  );
}
