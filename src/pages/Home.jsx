import React from "react";
import "../style/home.css";
import Tooth from "../assets/tooth.png";
import Tooth1 from "../assets/tooth2.png";
import Tooth2 from "../assets/tooth3.png";


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
  background-color: white;
  border-radius: 10px;

`;

function Home() {
  return (
    <div className="section" id="home">
      <Logo />
      <div class="visual">
        <div class="top-right-background"></div>
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
        <div class="text-homepage">
          <span>
            <span>
              Zâmbiți cu Încredere:
              <br />
              Expertiza Noastră,
              <br />
            </span>
            <span class="span2">Zâmbetul </span>
            <span>Dumneavoastră.</span>
          </span>
        </div>
      </motion.path>
      <div class="subsection">
        <Widget class="widget">
          <h2 class="preventive-care">Grijă Preventivă</h2>
          <h4 class="learn-more">Descoperă</h4>
        </Widget>
        <Widget class="widget">
          <h2 class="preventive-care">Îngrijire Restaurativă</h2>
          <h4 class="learn-more">Descoperă</h4>
        </Widget>
        <Widget class="widget">
          <h2 class="preventive-care">Estetica Stomatologica</h2>
          <h4 class="learn-more">Descoperă</h4>
        </Widget>
      </div>
    </div>
  );
}

export default Home;
