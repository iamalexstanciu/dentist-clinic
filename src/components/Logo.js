import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoHeader from "../assets/logo.png";
import { motion } from "framer-motion";

const Container = styled.div`
  img {
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 12%;
    z-index: 5;
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