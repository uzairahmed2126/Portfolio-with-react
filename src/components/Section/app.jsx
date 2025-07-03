import React from "react";
import "./style.css";
function Section({ sectionClr, positionClr, firstName, lastName, experience }) {
  return (
    <div>
      <section id="section-id" className={sectionClr}>
        <h3 id="position" className={positionClr}>
          I'm
          <div id="full-name">
            <h1 id="first-name" className={firstName}>
              Uzair
            </h1>
            <h2 id="last-name" className={lastName}>
              Ahmed,
            </h2>
          </div>
          A FullStack Developer,
        </h3>
        <p id="experience" className={experience}>
          And Experience in Freelancing.
        </p>
      </section>
    </div>
  );
}

export default Section;
