import React from "react";
import "../style/about.css";
import { useParallax } from "react-scroll-parallax";

function About() {
  const { ref: ref } = useParallax({ speed: 30 });
  const { ref: ref2 } = useParallax({ speed: 20 });

  return (
    <div className="about" id="about">
      <div className="left-side-about">
        <img
          className="dentist-image"
          ref={ref2}
          alt="catalin teodor dentist bucharest"
          src="https://images.unsplash.com/photo-1667133295308-9ef24f71952e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1957&q=80"
        />
      </div>
      <div className="right-side-about" ref={ref}>
        <h1 className="title-about">
          Dr. Catalin Teodor și Echipa Sa de Experți Dentari
        </h1>
        <p className="description-about">
          Dr. Catalin este specialist stomatologic proeminent, care știe să
          trateze orice problemă. Peste 10 ani de experiență se traduce într-un
          tratament personalizat al fiecărui pacient.
        </p>
      </div>
    </div>
  );
}

export default About;
