import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (sectionId) => {
    if (location.pathname !== "/" || location.pathname !== "/#") {
      navigate("/"); //If not on homepage, go there first.
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 50);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 z-50 w-fit max-w-[90vw] -translate-x-1/2 transform rounded-full border border-gray-200 px-8 py-3 shadow-lg backdrop-blur-md">
      <ul className="flex justify-center gap-8">
        <li>
          <a
            href="#"
            style={{ color: "white" }}
            onClick={() => handleAnchorClick("home")}
            className="flex transform items-center underline hover:text-indigo-600 transition-all hover:scale-105 duration-200 cursor-pointer"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{ color: "white" }}
            onClick={() => handleAnchorClick("about")}
            className="flex transform items-center underline hover:text-indigo-600 transition-all hover:scale-105 duration-200 cursor-pointer"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{ color: "white" }}
            onClick={() => handleAnchorClick("projects")}
            className="flex transform items-center underline hover:text-indigo-600 transition-all hover:scale-105 duration-200 cursor-pointer"
          >
            Projects
          </a>
        </li>
        <li>
          <Link
            to="/contact"
            style={{ color: "white" }}
            className="flex transform items-center underline hover:text-indigo-600 transition-all hover:scale-105 duration-200 cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
