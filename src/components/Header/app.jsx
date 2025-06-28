import React, { useRef } from "react";
import "./style.css";
import { About, Section } from "../index.js";
function Header() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div id="links">
        <header>
          <button onClick={scrollToHome}>Home</button>
          <button onClick={scrollToAbout}>About Me</button>
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
    </>
  );
}
export default Header;
