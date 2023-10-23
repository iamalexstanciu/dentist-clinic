import React from "react";
import "../style/footer.css";
import LogoFooter from "../assets/logo.png";
import { Parallax } from "react-scroll-parallax";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
      });
    }
  };
  return (
    <>
      <div className="footer-69">
        <div className="footer-container">
          <Parallax
            className="parallax-logo"
            translateY={["-100px", "450px"]}
            style={{ background: "none" }}>
            <img
              className="logo-footer"
              src={LogoFooter}
              alt="dentist stomatolog Catalin Teodor"
            />
          </Parallax>
          <Parallax
            className="parallax-menu"
            translateY={["-100px", "450px"]}
            style={{ background: "none" }}>
            <div className="menu-header">
              <p onClick={() => scrollToSection("home")}>Acasa</p>
              <p onClick={() => scrollToSection("services")}>Servicii</p>
              <p onClick={() => scrollToSection("about")}>Despre</p>
              <p onClick={() => scrollToSection("contact")}>Contact</p>
            </div>
          </Parallax>
          <Parallax
            translateY={["-100px", "450px"]}
            style={{ background: "none" }}>
            <div className="call-to-action">
              Pentru urgente!{" "}
              <a
                style={{ textDecoration: "none" }}
                href="tel:+40742352390"
                className="button-contact-footer">
                Contact{" "}
              </a>
            </div>
          </Parallax>
        </div>
      </div>
      <Parallax translateY={["-100px", "850px"]} style={{ background: "none" }}>
        <p className="our-agency">
          {" "}
          builded by{" "}
          <a href="https://www.upvisionmedia.com">upvisionMedia.com</a>
        </p>
      </Parallax>
    </>
  );
};

export default Footer;
