import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import { FaAlignJustify } from "react-icons/fa";
import {
  About,
  Section,
  Footer,
  Projects,
  Contact,
  ColorChanger,
} from "../index.js";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const scrollToHome = () => {
    if (!isOpen) homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToProject = () =>
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth" });

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  const navBarData = [
    { text: "Home", event: scrollToHome },
    { text: "About Me", event: scrollToAbout },
    { text: "Projects", event: scrollToProject },
    { text: "Contact", event: scrollToContact },
  ];

  return (
    <>
      <div className={`navbar ${isDark ? "bg-gray-900 text-white" : ""}`}>
        <div className={`logo`}>Uzair Ahmed</div>
        <button className="responsive-bar" onClick={toggleMenu}>
          <FaAlignJustify className="FaAlignJustify" />
        </button>
        <div className="desktop-links">
          {navBarData.map(({ text, event }) => (
            <button key={text} onClick={event} className="hover:bg-amber-100">
              {text}
            </button>
          ))}
          <a href="https://www.linkedin.com/in/uzair-ahmed-13230a250/">
            LinkedIn
          </a>
          <a href="https://github.com/uzairahmed2126">Github</a>
        </div>
      </div>

      {/* Responsive Dropdown Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {navBarData.map(({ text, event }) => (
            <button
              key={event}
              onClick={() => {
                toggleMenu();
                event();
              }}
            >
              {text}
            </button>
          ))}
          {/* <button
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
          </button> */}
          <a href="https://www.linkedin.com/in/uzair-ahmed-13230a250/">
            LinkedIn
          </a>
          <a href="https://github.com/uzairahmed2126">Github</a>
        </div>
      )}
      {/* Content Sections */}
      <div ref={homeRef}>
        <Section
          sectionClr={isDark ? "bg-gray-900 text-white" : "bg-white text-black"}
          positionClr={isDark ? "text-blue-300" : "text-gray-800"}
          firstName={isDark ? "text-blue-300" : "text-gray-900"}
          lastName={isDark ? "text-gray-700" : "text-gray-800"}
          experience={isDark ? "text-gray-500" : "text-gray-700"}
        />
      </div>
      <div ref={aboutRef}>
        <About
          aboutSection={`${
            isDark ? "bg-gray-900 text-white" : "text-gray-900"
          }`}
        />
      </div>
      <div ref={projectRef}>
        <Projects
          projectSection={`${
            isDark ? "bg-gray-900 text-white" : "text-gray-900"
          }`}
          projectDiv={`${isDark ? "bg-gray-900 text-black" : "text-gray-900"}`}
        />
      </div>
      <div ref={contactRef}>
        <Contact
          contactSection={`${
            isDark ? "bg-gray-900 text-white" : "text-gray-900"
          }`}
          contactSubText={`${
            isDark ? "bg-gray-900 text-white" : "text-gray-900"
          }`}
        />
      </div>
      <Footer
        footerSection={`${isDark ? "bg-gray-900 text-white" : "bg-gray-100"}`}
      />
      <ColorChanger
        setIsDark={setIsDark}
        checkedColor={isDark ? "after:bg-black" : "after:bg-white"}
      />
    </>
  );
}

export default Header;
