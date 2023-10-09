import React from "react";
import "../style/services.css";
import Preventive from "../assets/services/preventive.svg";
import Restorative from "../assets/services/restorative.svg";

function Services() {
  return (
    <div className="services" id="services">
      <div className="services-title">Everything you need in one place.</div>
      <div className="right-side-services">
        <div className="widget-services widget-1">
          <h3 className="widget-title">
            Preventive Care{" "}
            <img
              className="icon"
              src={Preventive}
              alt="service presentation widget catalin teodor dentist"
            />
          </h3>
          Regular check-ups and fluoride treatments to prevent tooth decay and
          gum disease.
        </div>
        <div className="widget-services widget-2">
          <h3 className="widget-title">
            Restorative Care{" "}
            <img
              className="icon"
              src={Restorative}
              alt="service presentation widget catalin teodor dentist"
            />
          </h3>
          Fillings, crowns, bridges, and dentures to restore damaged or missing
          teeth.
        </div>
        <div className="widget-services widget-3">
          <h3 className="widget-title">
            Orthodontic Care{" "}
            <img
              className="icon"
              src="icon3.png"
              alt="service presentation widget catalin teodor dentist"
            />
          </h3>
          Braces and clear aligners to straighten teeth and correct bite issues.
        </div>
        <div className="widget-services widget-4">
          <h3 className="widget-title">
            Oral Surgery{" "}
            <img
              className="icon"
              src="icon4.png"
              alt="service presentation widget catalin teodor dentist"
            />
          </h3>
          Extractions, wisdom teeth removal, and other surgical procedures.
        </div>
        <div className="widget-services widget-5">
          <h3 className="widget-title">
            Cosmetic Dentistry{" "}
            <img
              className="icon"
              src="icon5.png"
              alt="service presentation widget catalin teodor dentist"
            />
          </h3>
          Teeth whitening, veneers, and other procedures to improve the
          appearance of teeth.
        </div>
        <div className="widget-services widget-6">
          <h3 className="widget-title">Dental Implants</h3>
          Dental implants are a popular and effective way to replace missing
          teeth.
          <img
            className="_4-1"
            src="_4-1.png"
            alt="service presentation widget catalin teodor dentist"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
