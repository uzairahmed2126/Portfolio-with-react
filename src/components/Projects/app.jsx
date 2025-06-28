import React from "react";
import "./style.css";
function Projects() {
  return (
    <section className="project-gallery">
      <h2 className="gallery-heading">Projects Gallery</h2>
      <div className="gallery-grid">
        <a href="https://decoresystem.netlify.app/" target="_blank">
          <img src="./src/assets/decor.png" alt="Decor System" />
        </a>
        <img src="./src/assets/decor.png" alt="Decor System" />
        <img src="./src/assets/decor.png" alt="Decor System" />
        <img src="./src/assets/decor.png" alt="Decor System" />
        <img src="./src/assets/decor.png" alt="Decor System" />
        <img src="./src/assets/decor.png" alt="Decor System" />
        <img src="./src/assets/decor.png" alt="Decor System" />
        <img src="./src/assets/decor.png" alt="Decor System" />
      </div>
    </section>
  );
}

export default Projects;
