import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
 background-color: rgba(112, 128, 144, 0.8); /* SlateGray with transparency */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  flex-wrap: wrap;
  margin: 0; /* Remove any margin */

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.div`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  flex-grow: 1;
  justify-content: center; /* Center navigation links in full-width view */

  @media (max-width: 768px) {
    display: ${props => (props.showMenu ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
     background-color: rgba(112, 128, 144, 0.8); /* SlateGray with transparency */

    padding: 1rem 0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 4rem;
    left: 0;
    z-index: 9999; /* Ensure it stays on top of other elements */
  }
`;

const NavLink = styled.a`
  color: #F1F1F2;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  position: relative;
  border-radius: 4px;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
  }

  &:hover {
    color: white;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLink = styled.a`
  color: #F1F1F2;
  font-size: 1.5rem;
  transition: color 0.3s ease;

 
`;

const MenuToggle = styled.div`
  display: none;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between; /* Ensure logo and social icons are on the sides */

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Navbar>
      <NavContainer>
        <Logo>LOGO</Logo>
        <MenuToggle onClick={toggleMenu} aria-label={showMenu ? "Close menu" : "Open menu"}>
          {showMenu ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </MenuToggle>
        <NavLinks showMenu={showMenu}>
          <NavLink href="/" aria-label="Title">Title</NavLink>
          <NavLink href="/Lawyer" aria-label="Title">Title</NavLink>
          <NavLink href="/Contact" aria-label="Title">Title</NavLink>
          <NavLink href="#" aria-label="Title">Title</NavLink>
        </NavLinks>
        <SocialLinks>
          <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </SocialLink>
          <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </SocialLink>
          <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </SocialLink>
        </SocialLinks>
      </NavContainer>
    </Navbar>
  );
};

export default Navigation;
