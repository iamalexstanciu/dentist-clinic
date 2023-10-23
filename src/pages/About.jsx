import React from "react";
import "../style/about.css";
import { useParallax } from "react-scroll-parallax";
import Catalin from "../assets/catalin.png";

function About() {
  const { ref: rightSide } = useParallax({ speed: 20 });
  const { ref: dentistImage } = useParallax({ speed: 10 });

  return (
    <div className="about" id="about">
      <div className="left-side-about">
        <img
          className="dentist-image automatic-hover-effect"
          ref={dentistImage}
          alt="catalin teodor dentist bucharest"
          src={Catalin}
        />
      </div>
      <div className="right-side-about" ref={rightSide}>
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
