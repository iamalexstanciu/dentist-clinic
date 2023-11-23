import React from "react";
import "../style/contact.css";
import Location from "../assets/location.png";
import Phone from "../assets/phone.png";
import Email from "../assets/email.png";
import { useParallax } from "react-scroll-parallax";

function Contact() {
  const { ref: firstMap } = useParallax({ speed: 30 });
  const { ref: secondMap } = useParallax({ speed: 35 });

  return (
    <div className="contact" id="contact">
      <div className="first-map" ref={firstMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8851576959833!2d26.10457427576353!3d44.43551790148379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff3900eb5723%3A0xf4b21adce0f1cc8!2sStrada%20Radu%20Cristian%204%2C%20Bucure%C8%99ti%20030167!5e0!3m2!1sen!2sro!4v1698065331235!5m2!1sen!2sro"
          width="600"
          height="450"
          style={{
            border: "2px solid #5e5e5e",
            borderRadius: "30px",
            width: "60%",
            height: "20rem",
            boxShadow:
              "rgba(46, 46, 46, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }}
          allowfullscreen=""
          loading="lazy"
          title="cabinet piata rosetti catalin teodor"
          referrerpolicy="no-referrer-when-downgrade"></iframe>

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
            Strada Radu Cristian, 1 Bucuresti
          </h3>
          <h5
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "5%",

              width: "fit-content",
            }}>
            <img
              src={Phone}
              alt="address cabinet piata rosetti"
              style={{ width: "5%" }}
            />
            Telefon: +40 742 352 390
          </h5>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "5%",
              width: "fit-content",
            }}>
            <img
              src={Email}
              alt="address cabinet piata rosetti"
              style={{ width: "5%" }}
            />
            <p onClick={() => (window.location = "mailto:yourmail@domain.com")}>
              Email: cabinet.rosetti@catalinteodor.ro
            </p>
          </p>
        </div>
      </div>
      <div className="second-map" ref={secondMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.056887264537!2d26.059936447150527!3d44.29194770931609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae041cce103c23%3A0xd625170d93c8df0a!2s%C8%98oseaua%20Giurgiului%20210%2C%201%20Decembrie%20077005!5e0!3m2!1sen!2sro!4v1698065745099!5m2!1sen!2sro"
          width="600"
          height="450"
          style={{
            border: "2px solid #5e5e5e",
            borderRadius: "30px",
            width: "60%",
            height: "20rem",
            boxShadow:
              "rgba(46, 46, 46, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }}
          allowfullscreen=""
          loading="lazy"
          title="cabinet catalin teodor dentist 1 decembrie"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="details-second-map">
          <h3
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",

              width: "fit-content",
              gap: "5%",
            }}>
            {" "}
            <img
              src={Location}
              alt="address cabinet 1 decembrie"
              style={{ width: "5%" }}
            />{" "}
            Sos. Giurgiului nr.P20, 1 Decembrie. Ilfov
          </h3>
          <h5
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",

              width: "fit-content",
              gap: "5%",
            }}>
            <img
              src={Phone}
              alt="address cabinet 1 decembrie"
              style={{ width: "5%" }}
            />
            Telefon: +40 742 352 390
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
            <p onClick={() => (window.location = "mailto:yourmail@domain.com")}>
              Email: cabinet.1decembrie@catalinteodor.ro
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
