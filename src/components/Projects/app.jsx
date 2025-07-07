import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
import "./style.css";
import decor from "@assets/decor.png";
import sanitary from "@assets/sanitary.png";
import knaider from "@assets/knaider.png";
import survey from "@assets/survey.png";
import recipe from "@assets/recipe.png";
import crud from "@assets/crud.png";
import Quiz from "@assets/Quiz.png";
import to_do from "@assets/to-do.png";
import joke from "@assets/joke.png";
import bubble from "@assets/bubble.png";
import scroll from "@assets/scroll.png";
import calculator from "@assets/calculator.png";
// import decor from "@assets/decor.png";
function Projects({ projectSection, projectDiv }) {
  const projectData = [
    {
      id: "project 1",
      workType: "freelancing",
      languages: "html,css,javascript,jquery,animations.",
      description:
        "this porject is based on FrontEnd with Animations and the art gallery!",
      link: "https://decoresystem.netlify.app/",
      src: decor,
      alt: "Decor System image",
    },
    {
      id: "project 2",
      workType: "freelancing",
      languages: "html,css,javascript,express,node.",
      description:
        "this porject is based on Fullstack Sanitary management system with Animations and the art gallery!",
      link: "https://github.com/Learners121/project--sanitary",
      src: sanitary,
      alt: "Sanitary Management System image",
    },
    {
      id: "project 3",
      workType: "freelancing",
      languages: "html,css,javascript.",
      description: "this porject is Purely based on Html css and js!",
      link: "https://github.com/uzairahmed2126/responsive-design",
      src: knaider,
      alt: "Knaider image",
    },
    {
      id: "project 4",
      workType: "Personal",
      languages: "react,tailwind,express.",
      description:
        "In this project, We have a calculator that is calculate all the equations.",
      link: "https://github.com/uzairahmed2126/Dynamic-Survey-Builder",
      src: survey,
      alt: "calculator image",
    },
    {
      id: "project 5",
      workType: "Personal",
      languages: "html,css,javascript,API.",
      description: "this porject is Purely based on Html css and js!",
      link: "https://github.com/uzairahmed2126/Project--Recipe--App",
      src: recipe,
      alt: "Project-Recipe-App image",
    },
    {
      id: "project 6",
      workType: "Personal",
      languages: "html,css,javascript.",
      description:
        "this porject is Purely based on Html css and js and operation with (DOM)!",
      link: "https://github.com/uzairahmed2126/Project--Recipe--App",
      src: crud,
      alt: "CRUD Project image",
    },
    {
      id: "project 7",
      workType: "Personal",
      languages: "React,Tailwind,API.",
      description:
        "In this project, We have two buttons first one is for add question that user can easily add question with the answer and the question is comes to quiz dashboard after finishing the quiz user will get score.",
      link: "https://github.com/uzairahmed2126/react-Quiz-App",
      src: Quiz,
      alt: "Project-Quiz-App image",
    },
    {
      id: "project 8",
      workType: "Personal",
      languages: "html,css,js.",
      description:
        "In this project, We have to enter any kind of to-do it will add them while click on add button and each to-do have complete and delete button also dropdown added for filter.",
      link: "https://github.com/uzairahmed2126/project--to-do-app",
      src: to_do,
      alt: "To-Do-App image",
    },
    {
      id: "project 9",
      workType: "Personal",
      languages: "html,css,js,api.",
      description:
        "In this project, We have to click on button then the random joke is generate.",
      link: "https://github.com/uzairahmed2126/project--to-do-app",
      src: joke,
      alt: "joke-generator image",
    },
    {
      id: "project 10",
      workType: "Personal",
      languages: "html,css,js.",
      description:
        "In this project, We have to click on number who's showing  in Hit box,After time completion the score will show.",
      link: "https://github.com/uzairahmed2126/project--to-do-app",
      src: bubble,
      alt: "bubble image",
    },
    {
      id: "project 11",
      workType: "Personal",
      languages: "html,css,js.",
      description:
        "In this project, We have to scroll to X-axis then the image will auto generate.",
      link: "https://github.com/uzairahmed2126/project--infinite-scroll",
      src: scroll,
      alt: "scroll image",
    },
    {
      id: "project 12",
      workType: "Personal",
      languages: "html,css,js.",
      description:
        "In this project, We have a calculator that is calculate all the equations.",
      link: "https://github.com/uzairahmed2126/project--calculator",
      src: calculator,
      alt: "calculator image",
    },
  ];
  const galleryRef = useRef(null);
  useGSAP(
    () => {
      const cards = galleryRef.current.querySelectorAll(".project");
      gsap.from(
        cards,
        {
          y: -50,
          opacity: 0,
          duration: 2,
          stagger: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
          },
        },
        { cards, y: 0 }
      );
    },
    { scope: galleryRef }
  );
  return (
    <section className={`project-gallery ${projectSection}`}>
      <h2 className="gallery-heading">Projects Gallery</h2>
      <div className="gallery-grid" ref={galleryRef}>
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
