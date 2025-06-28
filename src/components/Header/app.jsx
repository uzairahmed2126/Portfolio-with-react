import React from "react";
import "./style.css";
import { About, Section } from "../index.js";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div id="links">
        <header>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About Me</Link>
          <a
            href="https://www.linkedin.com/in/uzair-ahmed-13230a250/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/uzairahmed2126" target="_blank">
            Github
          </a>
        </header>
      </div>
      <Section />
      <About />
    </>
  );
}
export default Header;
