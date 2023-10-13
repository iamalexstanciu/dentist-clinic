import React from "react";
import styled from "styled-components";
import LogoHeader from "../assets/logo.png";
import { motion } from "framer-motion";

const Container = styled.div`
  img {
    position: absolute;
    top: 5%;
    left: 6rem;
    width: 12%;
    z-index: 5;
  }

  @media (max-width: 1400px) {
    img {
      width: 25%;
      top: 4rem;
      left: 3.6rem;
    }
  }
  @media (max-width: 480px) {
    img {
      width: 55%;
      top: 5rem;
      left: 7rem;
    }
  }
  @media (max-width: 360px) {
    img {
      width: 60%;
      top: 5rem;
      left: 4.5rem;
    }
  }
`;

const Logo = () => {
  return (
    <Container>
      <motion.path
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}>
        <img src={LogoHeader} alt="catalin teodor dentist" />
      </motion.path>
    </Container>
  );
};

export default Logo;
