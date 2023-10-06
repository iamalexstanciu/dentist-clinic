import React from "react";
import "../style/home.css";
import Tooth from "../assets/tooth.png";
import Tooth1 from "../assets/tooth2.png";
import Tooth2 from "../assets/tooth3.png";
import preventive from "../assets/preventive.png"

import Logo from "../components/Logo";
import { motion } from "framer-motion";
import styled from "styled-components";

const Widget = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  gap: 5%;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
`;

function Home() {
  return (
    <div className="section" id="home">
      <Logo />
      <div className="visual">
        <div className="top-right-background"></div>
        <motion.path
          initial={{
            opacity: 0.2,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}>
          <img
            className="image-right"
            src={Tooth}
            alt="catalin teodor dentist"
          />
          <img
            className="image-right2"
            src={Tooth1}
            alt="catalin teodor dentist"
          />
          <img
            className="image-right3"
            src={Tooth2}
            alt="catalin teodor dentist"
          />
        </motion.path>
      </div>
      <motion.path
        initial={{
          opacity: 0.2,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 3,
          ease: "linear",
        }}>
        <div className="text-homepage">
          <span>
            <span>
              Zâmbiți cu Încredere:
              <br />
              Expertiza Noastră,
              <br />
            </span>
            <span className="span2">Zâmbetul </span>
            <span>Dumneavoastră.</span>
          </span>
        </div>
      </motion.path>
      <div className="subsection">
        <Widget className="widget widget-1">
          <h2 className="preventive-care">Grijă Preventivă</h2>
          <a href="#0" className="learn-more">
            Descoperă
          </a>
        </Widget>
        <Widget className="widget widget-2">
          <h2 className="preventive-care">Îngrijire Restaurativă</h2>
          <a href="#0" className="learn-more">
            Descoperă
          </a>
        </Widget>
        <Widget className="widget widget-3">
          <h2 className="preventive-care">Estetica Stomatologica</h2>
          <a href="#0" className="learn-more">
            Descoperă
          </a>
        </Widget>
      </div>
    </div>
  );
}

export default Home;
