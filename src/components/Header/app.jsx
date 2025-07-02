import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import { About, Section, Footer, Projects, Contact } from "../index.js";
import { FaAlignJustify } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  // useEffect(() => {
  //   document.body.style.overflow = isOpen ? "hidden" : "auto";
  // }, [isOpen]);

  const scrollToHome = () => {
    if (!isOpen) homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  // const scrollToTop = () =>
  //   topRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToProject = () =>
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth" });

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">Uzair Ahmed</div>
        <button className="responsive-bar" onClick={toggleMenu}>
          <FaAlignJustify className="FaAlignJustify" />
        </button>
        <div className="desktop-links">
          <button onClick={scrollToHome}>Home</button>
          <button onClick={scrollToAbout}>About Me</button>
          <button onClick={scrollToProject}>Projects</button>
          <button onClick={scrollToContact}>Contact</button>
          <a href="https://www.linkedin.com/in/uzair-ahmed-13230a250/">
            LinkedIn
          </a>
          <a href="https://github.com/uzairahmed2126">Github</a>
        </div>
      </div>

      {/* Responsive Dropdown Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <button
            onClick={() => {
              toggleMenu();
              scrollToHome();
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              toggleMenu();
              scrollToAbout();
            }}
          >
            About Me
          </button>
          <button
            onClick={() => {
              toggleMenu();
              scrollToProject();
            }}
          >
            Projects
          </button>
          <button
            onClick={() => {
              toggleMenu();
              scrollToContact();
            }}
          >
            Contact
          </button>
          <a href="https://www.linkedin.com/in/uzair-ahmed-13230a250/">
            LinkedIn
          </a>
          <a href="https://github.com/uzairahmed2126">Github</a>
        </div>
      )}

      {/* Content Sections */}
      <div ref={homeRef}>
        <Section />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Header;
