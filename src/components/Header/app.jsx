import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
import { FaAlignJustify } from "react-icons/fa";
import platForm from "platform";
import {
  About,
  Section,
  Footer,
  Projects,
  Contact,
  ColorChanger,
} from "../index.js";
import "./style.css";
import useLogActivity from "@hooks/useLogActivity/app.js";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const navRef = useRef(null);
  const logActivity = useLogActivity();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    localStorage.setItem("userDetails", JSON.stringify(platForm.os));
    logActivity("User Enter");
  }, [isOpen, logActivity]);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
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
  const globalTextColor = "text-gray-900";
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: navRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      const logo = navRef.current.querySelector(".logo");
      const navLinks = navRef.current.querySelectorAll(".nav-link");

      tl.from(logo, {
        x: -80,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      });
      // tl.from(navLinks, {
      //   // x: 80,
      //   opacity: 0,
      //   stagger: 0.1,
      //   duration: 1,
      //   ease: "power3.out",
      // });
    },
    { scope: navRef }
  );
  return (
    <>
      <div
        className={`navbar ${isDark ? "bg-gray-900 text-white" : ""}`}
        ref={navRef}
      >
        <div className={`logo`}>Uzair Ahmed</div>
        <button className="responsive-bar" onClick={toggleMenu}>
          <FaAlignJustify className="FaAlignJustify" />
        </button>
        <div className="desktop-links">
          {navBarData.map(({ text, event }) => (
            <button
              key={text}
              onClick={event}
              className="hover:bg-amber-100 nav-link"
            >
              {text}
            </button>
          ))}
          <a
            href="https://www.linkedin.com/in/uzair-ahmed-13230a250/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/uzairahmed2126"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Github
          </a>
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
          <a
            href="https://www.linkedin.com/in/uzair-ahmed-13230a250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/uzairahmed2126"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      )}
      {/* Content Sections */}
      <div ref={homeRef}>
        <Section
          sectionClr={isDark ? "bg-gray-900 text-white" : "bg-white text-black"}
          positionClr={isDark ? "text-blue-300" : "text-gray-800"}
          firstName={isDark ? "text-blue-300" : globalTextColor}
          lastName={isDark ? "text-gray-500" : "text-gray-800"}
          experience={isDark ? "text-gray-500" : "text-gray-700"}
        />
      </div>
      <div ref={aboutRef}>
        <About
          aboutSection={`${
            isDark ? "bg-gray-900 text-white" : globalTextColor
          }`}
        />
      </div>
      <div ref={projectRef}>
        <Projects
          projectSection={`${
            isDark ? "bg-gray-900 text-white" : globalTextColor
          }`}
          projectDiv={`${isDark ? "bg-gray-900 text-black" : globalTextColor}`}
        />
      </div>
      <div ref={contactRef}>
        <Contact
          contactSection={`${
            isDark ? "bg-gray-900 text-white" : globalTextColor
          }`}
          contactSubText={`${
            isDark ? "bg-gray-900 text-white" : globalTextColor
          }`}
        />
      </div>
      <Footer
        footerSection={`${isDark ? "bg-gray-900 text-white" : "bg-gray-100"}`}
      />
      <ColorChanger
        setIsDark={setIsDark}
        checkedColor={isDark ? "after:bg-gray-900" : "after:bg-white"}
      />
    </>
  );
}

export default Header;
