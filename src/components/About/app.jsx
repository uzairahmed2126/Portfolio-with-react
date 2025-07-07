import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
import "./about.css";

function About({ aboutSection }) {
  const aboutRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl.from(aboutRef.current, {
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      const elements = aboutRef.current.querySelectorAll(
        ".about-text, .about-list li"
      );

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
    { scope: aboutRef }
  );

  return (
    <section className={`about-section ${aboutSection}`} ref={aboutRef}>
      <div className="about-container">
        <h2 className="about-heading">
          About <span>Me</span>
        </h2>

        <p className="about-text">
          I’m <strong>Uzair Ahmed</strong>, a passionate Full-Stack Developer
          from <strong>Jodhpur, Rajasthan</strong>. I have over a year of
          freelance experience building responsive and functional web
          applications using
          <strong> JavaScript</strong>, <strong>React</strong>,{" "}
          <strong>Node.js</strong>, and <strong>Express</strong>.
        </p>

        <p className="about-text">I’ve worked on projects like:</p>

        <ul className="about-list">
          <li>
            <strong>Decor System (Italy)</strong> – A multi-page product site
            using jQuery and GSAP with smooth scrolling and restricted page
            access.
          </li>
          <li>
            <strong>Sanitary Management System</strong> – A single-page app
            built using Node.js, Express, MySQL, and APIs to show live data.
          </li>
          <li>
            <strong>Kanider Veneer Factory</strong> – A responsive business
            website using HTML, CSS, and JavaScript.
          </li>
        </ul>

        <p className="about-text">
          I enjoy both frontend and backend development. I'm confident with
          async JavaScript, REST APIs, Chrome extension development, and
          performance optimization. I also love solving challenges on{" "}
          <strong>LeetCode</strong> and <strong>Stack Overflow</strong>.
        </p>

        <p className="about-text">
          Outside of coding, I enjoy{" "}
          <strong>swimming, cycling, and reading</strong>. I'm always learning,
          always building.
        </p>
      </div>
    </section>
  );
}

export default About;
