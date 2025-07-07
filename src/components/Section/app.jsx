import React, { useEffect, useRef } from "react";
import "./style.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
function Section({ sectionClr, positionClr, firstName, lastName, experience }) {
  const sectionRef = useRef(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    const fullName = sectionRef.current.querySelector(".full-name");
    const experience = sectionRef.current.querySelector(".experience");
    gsap.fromTo(
      sectionRef.current,
      { y: -100, opacity: 0.4 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
    );
    gsap.fromTo(
      [fullName, experience],
      { x: -1500, opacity: 0.4 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        // scrollTrigger: fullName,
      }
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
