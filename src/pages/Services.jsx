import React from "react";
import "../style/services.css";
import Preventive from "../assets/services/preventive.svg";
import Restorative from "../assets/services/restorative.svg";
import Orthodontic from "../assets/services/orthodontic.svg";
import Surgery from "../assets/services/surgery.svg";
import Cosmetic from "../assets/services/cosmetic.svg";
import Implant from "../assets/services/implant.svg";
import { useParallax } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

function Services() {
  const { ref: ref } = useParallax({ speed: 30 });

  return (
    <div className="services" id="services">
      <div className="services-title-container" ref={ref}>
        <title className="services-title">
          Soluții complete pentru sănătatea orală.
        </title>
      </div>
      <Parallax translateX={["-100px", "200px"]}>
        <div className="right-side-services">
          <div className="widget-services widget-1">
            <h3 className="widget-title">
              Grijă preventivă{" "}
              <img
                className="icon"
                src={Preventive}
                alt="service presentation widget catalin teodor dentist"
              />
            </h3>
            Controale regulate și tratamente cu fluor pentru a preveni cariile
            dentare și bolile gingiilor.
          </div>
          <div className="widget-services widget-2">
            <h3 className="widget-title">
              Îngrijire restaurativă{" "}
              <img
                className="icon"
                src={Restorative}
                alt="service presentation widget catalin teodor dentist"
              />
            </h3>
            Obturații, coroane, punți și proteze dentare pentru a reface dinții
            deteriorați sau lipsă.
          </div>
          <div className="widget-services widget-3">
            <h3 className="widget-title">
              Îngrijire ortodontică{" "}
              <img
                className="icon"
                src={Orthodontic}
                alt="service presentation widget catalin teodor dentist"
              />
            </h3>
            Aparatele dentare și aliniere clare pentru a îndrepta dinții și a
            corecta problemele de mușcătură.
          </div>
          <div className="widget-services widget-4">
            <h3 className="widget-title">
              Chirurgie orala{" "}
              <img
                className="icon"
                src={Surgery}
                alt="service presentation widget catalin teodor dentist"
              />
            </h3>
            Extracții, îndepărtarea molari de minte și alte proceduri
            chirurgicale.
          </div>
          <div className="widget-services widget-5">
            <h3 className="widget-title">
              Estetica Stomatologica{" "}
              <img
                className="icon"
                src={Cosmetic}
                alt="service presentation widget catalin teodor dentist"
              />
            </h3>
            Albirea dinților, fațetele și alte proceduri pentru îmbunătățirea
            aspectul dintilor.
          </div>
          <div className="widget-services widget-6">
            <h3 className="widget-title">
              Implanturi dentare{" "}
              <img
                className="icon"
                src={Implant}
                alt="service presentation widget catalin teodor dentist"
              />
            </h3>
            Implanturile dentare sunt o modalitate populară și eficientă de a
            înlocui lipsurile dintii.
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Services;
