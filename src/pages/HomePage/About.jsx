import React from "react";

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
      <ul className="mt-4 text-lg">
        <li>Accountable</li>
        <li>Seeking Improvement</li>
        <li>Fast-Learner</li>
        <li>Team-Member</li>
      </ul>
      <br />
      <div className="mx-auto max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">My Resume</h1>
        <iframe
          id="resume-frame"
          src="Master%20Resume.pdf"
          title="Resume"
          width="100%"
          height="800"
          className="border"
        ></iframe>
      </div>
      <br />
      <p>Add Widgets?</p>
    </section>
  );
}

export default About;
