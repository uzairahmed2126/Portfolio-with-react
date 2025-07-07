import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
import "./Footer.css";
import { useRef } from "react";

const Footer = ({ footerSection }) => {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl.from(footerRef.current, {
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      const elements = footerRef.current.querySelectorAll(".footer-links");

      tl.from(
        elements,
        {
          x: -100,
          opacity: 0,
          stagger: 0.15,
          ease: "power2.out",
          duration: 0.8,
        },
        "-=0.5"
      );
    },
    { scope: footerRef }
  );
  return (
    <footer className={`footer ${footerSection}`} ref={footerRef}>
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
