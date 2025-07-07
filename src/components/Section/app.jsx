import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "./style.css";
function Section({ sectionClr, positionClr, firstName, lastName, experience }) {
  const sectionRef = useRef(null);
  useGSAP(() => {
    const fullName = sectionRef.current.querySelector(".full-name");
    const experience = sectionRef.current.querySelector(".experience");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false,
        x: -40,
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      },
    });

    tl.fromTo(
      sectionRef.current,
      { y: -100, opacity: 0.4 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
    tl.fromTo(
      [fullName, experience],
      { x: -1500, opacity: 0.4 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  });

  return (
    <div>
      <section
        id="section-id"
        className={`anim-class ${sectionClr}`}
        ref={sectionRef}
      >
        <h3 id="position" className={`anim-class ${positionClr}`}>
          I'm
          <div id="full-name" className="full-name">
            <h1 id="first-name" className={`anim-class ${firstName}`}>
              Uzair
            </h1>
            <h2 id="last-name" className={`anim-class ${lastName}`}>
              Ahmed,
            </h2>
          </div>
          A FullStack Developer,
        </h3>
        <p id="experience" className={`experience ${experience}`}>
          And Experience in Freelancing.
        </p>
      </section>
    </div>
  );
}

export default Section;
