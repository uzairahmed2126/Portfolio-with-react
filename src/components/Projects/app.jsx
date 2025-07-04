import React from "react";
import "./style.css";
function Projects({ projectSection, projectDiv }) {
  const projectData = [
    {
      id: "project 1",
      workType: "freelancing",
      languages: "html,css,javascript,jquery,animations.",
      description:
        "this porject is based on FrontEnd with Animations and the art gallery!",
      link: "https://decoresystem.netlify.app/",
      src: "../public/decor.png",
      alt: "Decor System image",
    },
    {
      id: "project 2",
      workType: "freelancing",
      languages: "html,css,javascript,express,node.",
      description:
        "this porject is based on Fullstack Sanitary management system with Animations and the art gallery!",
      link: "https://github.com/Learners121/project--sanitary",
      src: "../public/sanitary.png",
      alt: "Sanitary Management System image",
    },
    {
      id: "project 3",
      workType: "freelancing",
      languages: "html,css,javascript.",
      description: "this porject is Purely based on Html css and js!",
      link: "https://github.com/uzairahmed2126/responsive-design",
      src: "../public/knaider.png",
      alt: "Knaider image",
    },
    {
      id: "project 4",
      workType: "Personal",
      languages: "react,tailwind,express.",
      description:
        "In this project, We have a calculator that is calculate all the equations.",
      link: "https://github.com/uzairahmed2126/Dynamic-Survey-Builder",
      src: "../public/survey.png",
      alt: "calculator image",
    },
    {
      id: "project 5",
      workType: "Personal",
      languages: "html,css,javascript,API.",
      description: "this porject is Purely based on Html css and js!",
      link: "https://github.com/uzairahmed2126/Project--Recipe--App",
      src: "../public/recipe.png",
      alt: "Project-Recipe-App image",
    },
    {
      id: "project 6",
      workType: "Personal",
      languages: "html,css,javascript.",
      description:
        "this porject is Purely based on Html css and js and operation with (DOM)!",
      link: "https://github.com/uzairahmed2126/Project--Recipe--App",
      src: "../public/crud.png",
      alt: "CRUD Project image",
    },
    {
      id: "project 7",
      workType: "Personal",
      languages: "React,Tailwind,API.",
      description:
        "In this project, We have two buttons first one is for add question that user can easily add question with the answer and the question is comes to quiz dashboard after finishing the quiz user will get score.",
      link: "https://github.com/uzairahmed2126/react-Quiz-App",
      src: "../public/Quiz.png",
      alt: "Project-Quiz-App image",
    },
    {
      id: "project 8",
      workType: "Personal",
      languages: "html,css,js.",
      description:
        "In this project, We have to enter any kind of to-do it will add them while click on add button and each to-do have complete and delete button also dropdown added for filter.",
      link: "https://github.com/uzairahmed2126/project--to-do-app",
      src: "../public/to-do.png",
      alt: "To-Do-App image",
    },
    {
      id: "project 9",
      workType: "Personal",
      languages: "html,css,js,api.",
      description:
        "In this project, We have to click on button then the random joke is generate.",
      link: "https://github.com/uzairahmed2126/project--to-do-app",
      src: "../public/joke.png",
      alt: "joke-generator image",
    },
    {
      id: "project 10",
      workType: "Personal",
      languages: "html,css,js.",
      description:
        "In this project, We have to click on number who's showing  in Hit box,After time completion the score will show.",
      link: "https://github.com/uzairahmed2126/project--to-do-app",
      src: "../public/bubble.png",
      alt: "bubble image",
    },
    {
      id: "project 11",
      workType: "Personal",
      languages: "html,css,js.",
      description:
        "In this project, We have to scroll to X-axis then the image will auto generate.",
      link: "https://github.com/uzairahmed2126/project--infinite-scroll",
      src: "../public/scroll.png",
      alt: "scroll image",
    },
    {
      id: "project 12",
      workType: "Personal",
      languages: "html,css,js.",
      description:
        "In this project, We have a calculator that is calculate all the equations.",
      link: "https://github.com/uzairahmed2126/project--calculator",
      src: "../public/calculator.png",
      alt: "calculator image",
    },
  ];
  return (
    <section className={`project-gallery ${projectSection}`}>
      <h2 className="gallery-heading">Projects Gallery</h2>
      <div className="gallery-grid">
        {projectData.map(
          ({ id, workType, languages, description, link, src, alt }) => (
            <div className={`project ${projectDiv}`} key={id}>
              <a href={link} target="_blank">
                <img src={src} alt={alt} />
              </a>
              <h4>
                Work Type : <strong>{workType}</strong>
              </h4>
              <h4>
                Languages Used In : <strong>{languages}</strong>
              </h4>
              <h3>{description}</h3>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Projects;
