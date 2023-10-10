import React from "react";
import "../style/footer.css";
import LogoFooter from "../assets/logo.png";

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
    <div className="footer-69">
      <div className="footer-container">
        <img
          className="logo-footer"
          src={LogoFooter}
          alt="dentist stomatolog Catalin Teodor"
        />
        <div className="menu-header">
          <p onClick={() => scrollToSection("home")}>Acasa</p>
          <p onClick={() => scrollToSection("services")}>Servicii</p>
          <p onClick={() => scrollToSection("about")}>Despre</p>
          <p onClick={() => scrollToSection("contact")}>Contact</p>
        </div>
        <div className="call-to-action">
         Pentru urgente! <button className="button-contact-footer">Contact  </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
