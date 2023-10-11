import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const NavContainer = styled(motion.div)`
  position: fixed;
  top: ${(props) => (props.click ? "0" : `-3.4rem`)};
  transition: all 0.3s ease;
  background-color: #f6f4eb;
  color: #4682a9;
  z-index: 100;
  width: 100vw;
  display: flex;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  justify-content: center;
  align-items: center;
  object-position: center;

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
      });
    }
    setIsOpen(false); // Close the menu after clicking on a navigation item
  };

  const MenuBtn = styled.li`
    width: 20rem;
    height: 3.2rem;
    border: none;
    outline: none;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;

    background-color: #f6f4eb;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    font-weight: 700;

    cursor: pointer;

    display: flex;
    padding: 0.2%;
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
            marginTop: "4px",
          }}
          onClick={() => setIsOpen(!isOpen)}>
          Menu
        </MenuBtn>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => scrollToSection("home")}>
          {" "}
          Acasa
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => scrollToSection("services")}>
          {" "}
          Servicii
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => scrollToSection("about")}>
          {" "}
          Despre
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => scrollToSection("contact")}>
          {" "}
          Contact
        </Item>
      </MenuItems>
    </NavContainer>
  );
}

export default Navbar;
