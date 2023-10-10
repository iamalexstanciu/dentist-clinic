import React from "react";
import "../style/contact.css";
import Location from "../assets/location.png";
import Phone from "../assets/phone.png";
import Email from "../assets/email.png";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="first-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.84701126186!2d26.103876475763567!3d44.43630035143247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff385abb854d%3A0x2a6407f54fa64636!2sPia%C8%9Ba%20Rosetti%2C%20Bucure%C8%99ti%20030167!5e0!3m2!1sen!2sro!4v1696942352341!5m2!1sen!2sro"
          style={{
            border: "2px solid #5e5e5e",
            borderRadius: "30px",
            width: "60%",
            height: "20rem",
            boxShadow:
              "rgba(46, 46, 46, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }}
          allowFullScreen=""
          loading="lazy"
          title="Cabinet Piata Rosetti  stomatolog Catalin Teodor"
          referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className="details-first-map">
          <h3
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "5%",
            }}>
            {" "}
            <img
              src={Location}
              alt="address cabinet piata rosetti"
              style={{ width: "5%" }}
            />{" "}
            Piata Rosetti, 30 Sector 3
          </h3>
          <h5
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "5%",
            }}>
            <img
              src={Phone}
              alt="address cabinet piata rosetti"
              style={{ width: "5%" }}
            />
            Telefon: +40 725 999 888
          </h5>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "5%",
            }}>
            <img
              src={Email}
              alt="address cabinet piata rosetti"
              style={{ width: "5%" }}
            />
            <a onClick={() => (window.location = "mailto:yourmail@domain.com")}>
              Email: cabinet.rosetti@catalinteodor.ro
            </a>
          </p>
        </div>
      </div>
      <div className="second-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.483145532915!2d26.17405367576289!3d44.42325070228799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1feaf27b1e2d9%3A0x1a75a1c7583d513c!2sBulevardul%201%20Decembrie%201918%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1696942422025!5m2!1sen!2sro"
          style={{
            border: "2px solid #5e5e5e",
            borderRadius: "30px",
            width: "60%",
            height: "20rem",
            boxShadow:
              "rgba(46, 46, 46, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }}
          allowFullScreen=""
          loading="lazy"
          title="Cabinet 1 decembrie stomatolog Catalin Teodor"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className="details-second-map">
          <h3
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "5%",
            }}>
            {" "}
            <img
              src={Location}
              alt="address cabinet 1 decembrie"
              style={{ width: "5%" }}
            />{" "}
            Bvd. 1 Decembrie 1918, 15 Sector 3
          </h3>
          <h5
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "5%",
            }}>
            <img
              src={Phone}
              alt="address cabinet 1 decembrie"
              style={{ width: "5%" }}
            />
            Telefon: +40 725 785 123
          </h5>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "5%",
            }}>
            <img
              src={Email}
              alt="address cabinet 1 decembrie"
              style={{ width: "5%" }}
            />
            <a onClick={() => (window.location = "mailto:yourmail@domain.com")}>
              Email: cabinet.1decembrie@catalinteodor.ro
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
