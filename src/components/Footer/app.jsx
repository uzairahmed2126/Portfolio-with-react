import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-logo">Uzair.dev</h3>

        <div className="footer-links">
          <a
            href="https://github.com/uzairahmed2126"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://linkedin.com/in/uzair-ahmed-13230a250"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="mailto:uzairahmed21261@gmail.com">
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Uzair Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
