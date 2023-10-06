import { motion } from "framer-motion";
import React, { useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

const NavContainer = styled(motion.div)`
  position: fixed;
  top: ${(props) => (props.click ? "0" : `-3rem`)};
  transition: all 0.3s ease;
  background-color: #f6f4eb;
  color: #4682a9;
  z-index: 6;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    top: ${(props) => (props.click ? "0" : `calc(-50vh - 4rem)`)};
  }
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 100%;
  padding: 0 5rem;

  text-decoration: none;

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
  }
`;

const Item = styled(motion.li)`
  text-transform: uppercase;

  text-decoration: none;

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 0.5rem 0;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    setIsOpen(!isOpen);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  const MenuBtn = styled.li`
    width: 20rem;
    height: 3rem;
    border: none;
    outline: none;

    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

    background-color: #f6f4eb;
    color: #4682a9;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    font-weight: 600;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.3s ease;

    @media (max-width: 40em) {
      width: 10rem;
      height: 2rem;
    }
  `;

  return (
    <NavContainer
      click={+isOpen}
      initial={{ y: `-100%` }}
      animate={{ y: 0 }}
      transition={{ duration: 2, delay: 5 }}>
      <MenuItems
        drag="y"
        dragConstraints={{ top: 0, bottom: 70 }}
        dragElastic={0.05}
        dragSnapToOrigin>
        <MenuBtn
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "#4682a9",
          }}
          onClick={() => setIsOpen(!isOpen)}>
          Menu
        </MenuBtn>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll("#home")}>
          {" "}
          <a
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#4682a9",
            }}
            href="/home">
            Home
          </a>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll("#services")}>
          {" "}
          <a
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#4682a9",
            }}
            href="/services">
            Services
          </a>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll("#about")}>
          {" "}
          <a
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#4682a9",
            }}
            href="/about">
            About
          </a>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll("#contact")}>
          {" "}
          <a
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#4682a9",
            }}
            href="/contact">
            Contact
          </a>
        </Item>
      </MenuItems>
    </NavContainer>
  );
}

export default Navbar;
