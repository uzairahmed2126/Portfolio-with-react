import React, { useRef } from "react";
import "./style.css";
import { About, Section, Footer, Projects, Contact } from "../index.js";
function Header() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const topRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log(window.screenY);
  };
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // window.addEventListener("scroll", (e) => {
  //   console.log(e.clientY);
  // });
  return (
    <>
      <div id="links">
        <header>
          <button onClick={scrollToHome}>Home</button>
          <button onClick={scrollToAbout}>About Me</button>
          <button onClick={scrollToProject}>Projects</button>
          <button onClick={scrollToContact}>Contact</button>
          <a href="https://www.linkedin.com/in/uzair-ahmed-13230a250/">
            LinkedIn
          </a>
          <a href="https://github.com/uzairahmed2126">Github</a>
        </header>
      </div>
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
      <div ref={topRef}>
        <Footer handleClick={scrollToTop} />
      </div>
    </>
  );
}
export default Header;
