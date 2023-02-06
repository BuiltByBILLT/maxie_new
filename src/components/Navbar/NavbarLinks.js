import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  font-family: 'Karla';
  font-weight: 600;
  font-size: 19px;
  text-decoration: none;
  color: #eff9fe;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  letter-spacing: -0.02rem;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #d1d3d4;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #d1d3d4;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 18px 0;
    font-size: 1.5rem;
  }

  @media (max-height: 500px) {
    font-size: 1.3rem;
  }

  @media (max-width: 600px) {
    color: #d1d3d4;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/aboutus/">About Us</NavItem>
      <NavItem to="/products/">Products</NavItem>
      <NavItem to="/wheretobuy/">Where to Buy</NavItem>
      <NavItem to="/contactus/">Contact Us</NavItem>
    </>
  )
}

export default NavbarLinks
