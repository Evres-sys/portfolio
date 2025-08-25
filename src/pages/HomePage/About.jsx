import React from "react";
import { motion } from "framer-motion";

function About() {
  const handlePrint = () => {
    const iframe = document.getElementById("resume-frame");
    iframe.focus();
    iframe.contentWindow.print();
  };

  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-center text-2xl font-bold">About</h1>
      <p className="mt-4 text-xl leading-snug">
        I am a junior website developer intent on pursuing Computer Sciences
        after gaining interest during my time within the United States Air
        Force. Through the highly-credited Skillbridge Military Program, I was
        able to get my hands dirty within the tech industry and begin my coding
        journey.
        <br />
        <br />
        With four years of data collection and inventorying supplies for my
        squadron, I've become an expert at effective and efficient work
        management in high-stress environments.
        <br />
        <br />I am and will continue to be eager for my next step on my path to
        becoming an experienced developer!
      </p>
      <ul className="mt-4 text-lg list-disc list-inside">
        <li>Accountable</li>
        <li>Seeking Improvement</li>
        <li>Fast-Learner</li>
        <li>Team-Member</li>
      </ul>
      <br />
      <h2 className="text-center text-2xl font-bold mb-6">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node.js",
          "Git",
          "Tailwind CSS",
          "MongoDB",
          "Vite",
        ].map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }} // small stagger effect
            className="rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-gray-600 transition"
          >
            {skill}
          </motion.span>
        ))}
      </div>
      <br />
      <div className="mx-auto max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">My Resume</h1>
        <iframe
          id="resume-frame"
          src="/Master%20Resume.pdf"
          title="Resume"
          width="100%"
          height="800"
          className="border-none rounded-md shadow-md"
        />
      </div>
      <br />
    </section>
  );
}

export default About;
