import React from "react";
import { useEffect } from "react";
import About from "./About";
import Projects from "./Projects";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-80">
      <section
        id="home"
        className="scroll-mt-90 min-h-screen flex flex-col items-center text-center"
      >
        <div className="font-bold">
          <h1 className="text-5xl">Cong Chi Tran</h1>
          <p className="mt-4 text-2xl">Junior Software Developer, Veteran</p>
        </div>

        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <a
            href="https://www.linkedin.com/in/congchitran/"
            target="_blank"
            className="flex transform items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-indigo-700 hover:shadow-lg"
          >
            <FaLinkedinIn size={30} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Evres-sys"
            target="_blank"
            className="flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:shadow-lg"
          >
            <FaGithub size={30} />
            GitHub
          </a>
          <a
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:shadow-lg"
          >
            <HiOutlineMail size={30} />
            Contact Email
          </a>
        </div>
      </section>

      <section id="about" className="min-h-screen flex flex-col">
        <About />
      </section>

      <section id="projects" className="min-h-screen flex flex-col">
        <Projects />
      </section>
    </main>
  );
}

export default Home;
