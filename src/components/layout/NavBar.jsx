import React, { useState } from "react";
import {
  Nav,
  Logo,
  MenuIcon,
  LineOne,
  LineTwo,
  LineThree,
  NavList,
  NavItemStyled,
  NavLink,
  Profile,
  SocialIcons,
} from "../styles/layout/Nav.styled";
import { NavItems } from "../../data/NavItems";
import { FaPinterest, FaYoutube, FaTwitter } from "react-icons/fa";
import { CTAButton } from "../styles/common/CTAButton.styled";
import useScrollDirection from "../../hooks/useScrollDirection";
import Modal from "../Portal/Modal";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection("down");

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <>
      <Nav scrollDirection={scrollDirection}>
        <div>
          <a href="#hero-section">
            <Logo src="./images/15.jpg" />
          </a>
        </div>
        <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItemStyled
                key={index}
                index={index}
                menuOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                {navItem.isProfile ? (
                  <NavLink href="#hero-section">
                    <Profile>
                      <img src="./images/1.svg" alt="..." />
                      <span>ChłopI w czasach odrodzenia</span>
                    </Profile>
                  </NavLink>
                ) : null}
                {navItem.text ? (
                  <NavLink href={navItem.href}>{navItem.text}</NavLink>
                ) : null}
                {navItem.hasSocialIcons ? (
                  <SocialIcons>
                    <NavLink hre="#" target="_blank" rel="noopener noreferrer">
                      <FaYoutube />
                    </NavLink>
                    <NavLink hre="#" target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                    </NavLink>
                    <NavLink hre="#" target="_blank" rel="noopener noreferrer">
                      <FaPinterest />
                    </NavLink>
                  </SocialIcons>
                ) : null}
                {navItem.hasCTA ? (
                  <CTAButton onClick={() => Toggle()}>CIEKAWOSTKA</CTAButton>
                ) : null}
              </NavItemStyled>
            ))}
        </NavList>
        <Modal show={modal} close={Toggle} title="Luźni ludzie">
          <p>
            Luźni ludzie, hultaje, ludzie swawolni, wagabundzi, wałęsy,
            włóczęgi, w późnym średniowieczu i czasach nowożytnych do schyłku
            XVIII w. kategoria ludności nieposiadająca majątku, stałego miejsca
            zamieszkania i stałego zajęcia, a w rezultacie niepozostająca w
            zależności osobistej i nieobciążona powinnościami na rzecz klasy
            feudalnej.
          </p>
          <br />
          <p>
            <em>encyklopedia.pwn.pl/haslo/luzni-ludzie;3934666.html</em>
          </p>
        </Modal>
      </Nav>
    </>
  );
};
