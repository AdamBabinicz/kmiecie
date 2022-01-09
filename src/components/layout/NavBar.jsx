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

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection("down");

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
                      <span>Kondycja chłopów w czasach odrodzenia</span>
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
                  <CTAButton href="#" target="_blank" rel="noopener noreferrer">
                    Więcej
                  </CTAButton>
                ) : null}
              </NavItemStyled>
            ))}
        </NavList>
      </Nav>
    </>
  );
};
