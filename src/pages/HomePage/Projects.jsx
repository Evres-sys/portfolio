import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [showLiveIMDB, setShowLiveIMDB] = useState(false);
  const [showLiveChangeCalc, setShowLiveChangeCalc] = useState(false);
  const [showLiveBudget, setShowLiveBudget] = useState(false);

  return (
    <section id="projects" className="px-6 py-20">
      <h1 className="text-center text-2xl font-bold">Projects</h1>

      <div className="space-y-20">
        <div className="mt-10 flex flex-col md:flex-row gap-6 items-start">
          <div className="max-w-prose mx-auto">
            <h2 className="font-bold text-xl mb-2">
              IMDB Streaming Show Search
            </h2>
            <p className="mb-4 text-xl">
              A simple React-based application that uses the Streaming
              Availability and Real-Time Image Search APIs from Rapid Api
              Catalog. Entering a code matching with a movie's or show's IMDB ID
              develops an image and streaming services currently hosting the
              media.
              <br />
              <br />
              This was one of my first self-led projects that pushed me to
              become a better software developer by integrating React into my
              coding structure.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="https://hackathon-imdb-project.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:shadow-lg"
              >
                <FaExternalLinkAlt size={14} />
                Open Project in New Tab
              </a>
              <a
                onClick={() => setShowLiveIMDB((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:shadow-lg"
              >
                Use in Web Browser!
              </a>
            </div>
          </div>
          {showLiveIMDB ? (
            <iframe
              src="https://hackathon-imdb-project.vercel.app/"
              width="100%"
              height="600"
              className="md:w-1/2 w-full border border-gray-300 rounded-lg"
              title="Hackathon Project"
            ></iframe>
          ) : (
            <img
              src="/screencapture-hackathon-imdb-project-vercel-app-2025-08-06-14_46_38.png"
              alt="Hackathon project screenshot"
              className="md:w-1/2 w-full rounded-lg border border-gray-300 shadow-md"
            />
          )}
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-6 items-start">
          {showLiveChangeCalc ? (
            <iframe
              src="https://react-js-change-calculator.vercel.app/"
              width="100%"
              height="600"
              className="md:w-1/2 w-full border border-gray-300 rounded-lg"
              title="Change Calculator"
            ></iframe>
          ) : (
            <img
              src="/screencapture-react-js-change-calculator-vercel-app-2025-08-06-15_00_39.png"
              alt="Hackathon project screenshot"
              className="md:w-1/2 w-full rounded-lg border border-gray-300 shadow-md"
            />
          )}
          <div className="max-w-prose mx-auto">
            <h2 className="font-bold text-xl mb-2">Change Calculator</h2>
            <p className="mb-4 text-xl">
              Originally a basic JavaScript application, this website has been
              modified using React to include a polished user-friendly interface
              for a better viewer experience. This website respondes with the
              exact change required in US Currency using the amount due for a
              transaction and the amount received to pay for it.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="https://react-js-change-calculator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:shadow-lg"
              >
                <FaExternalLinkAlt size={14} />
                Open Project in New Tab
              </a>
              <a
                onClick={() => setShowLiveChangeCalc((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:shadow-lg"
              >
                Use in Web Browser!
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-6 items-start">
          <div className="max-w-prose mx-auto">
            <h2 className="font-bold text-xl mb-2">Budget Tracker</h2>
            <p className="mb-4 text-xl">
              A simple application designed for easier management of one's
              income and expenses, the tool summarizes the total earnings and
              costs of every entry and returns the amount of money remaining.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="https://react200-budget-tracker-beige.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:shadow-lg"
              >
                <FaExternalLinkAlt size={14} />
                Open Project in New Tab
              </a>
              <a
                onClick={() => setShowLiveBudget((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:shadow-lg"
              >
                Use in Web Browser!
              </a>
            </div>
          </div>
          {showLiveBudget ? (
            <iframe
              src="https://react200-budget-tracker-beige.vercel.app/"
              width="100%"
              height="600"
              className="md:w-1/2 w-full border border-gray-300 rounded-lg"
              title="Budget Tracker"
            ></iframe>
          ) : (
            <img
              src="/screencapture-react200-budget-tracker-beige-vercel-app-2025-08-06-15_01_00.png"
              alt="Hackathon project screenshot"
              className="md:w-1/2 w-full rounded-lg border border-gray-300 shadow-md"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
