import React from "react";

function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <h1 className="text-center text-2xl font-bold">Projects</h1>

      <div className="space-y-20">
        <div className="mt-10 flex flex-col md:flex-row gap-6 items-start">
          <div className="max-w-prose mx-auto">
            <h2 className="font-bold text-xl mb-2">Hackathon</h2>
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
          </div>
          <iframe
            src="https://hackathon-imdb-project.vercel.app/"
            width="100%"
            height="600"
            className="md:w-1/2 w-full border border-gray-300 rounded-lg"
            title="Hackathon Project"
          ></iframe>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-6 items-start">
          <iframe
            src="https://react-js-change-calculator.vercel.app/"
            width="100%"
            height="600"
            className="md:w-1/2 w-full border border-gray-300 rounded-lg"
            title="Change Calculator"
          ></iframe>
          <div className="max-w-prose mx-auto">
            <h2 className="font-bold text-xl mb-2">Change Calculator</h2>
            <p className="mb-4 text-xl">
              Originally a basic JavaScript application, this website has been
              modified using React to include a polished user-friendly interface
              for a better viewer experience. This website respondes with the
              exact change required in US Currency using the amount due for a
              transaction and the amount received to pay for it.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-6 items-start">
          <div className="max-w-prose mx-auto">
            <h2 className="font-bold text-xl mb-2">Budget Tracker</h2>
            <p className="mb-4 text-xl">A simple application designed for easier management of one's income and expenses, the tool summarizes the total earnings and costs of every entry and returns the amount of money remaining.</p>
          </div>
          <iframe
            src="https://react200-budget-tracker-beige.vercel.app/"
            width="100%"
            height="600"
            className="md:w-1/2 w-full border border-gray-300 rounded-lg"
            title="Budget Tracker"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Projects;
