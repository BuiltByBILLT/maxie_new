import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 50px 20px 50px 50px;

  .item-0 { order: 0; margin: 50px 40px 50px 0px;; }
  .item-1 { order: 1; }
  .item-2 { order: 2; }

  @media (max-width: 1015px) {
    margin: 50px 60px 50px 50px;
  }

  @media (max-width: 950px) {
    flex-wrap: wrap;
  }

  @media (max-width: 900px) {
    margin: 10px 60px 10px 50px;
  }

  @media (max-width: 800px) {
    justify-content: flex-start;
  }
`

const FooterTitle = styled.a`
  font-family: 'Karla', sans-serif;
  font-style: Medium;
  font-weight: 500;
  font-size : 22px;
  color: #d1d3d4;
  display: inline-block;
  white-space: nowrap;
  margin-bottom: 25px;

  @media (max-width: 1115px) {
    margin: 3px 20px 25px 20px;
  }
  @media (max-width: 1015px) {
    margin: 3px 7px 25px 7px;
  }
`

const FooterItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px 50px 0px;
`

const FooterItem = styled(Link)`
  font-family: 'Karla';
  font-style: Regular;
  font-weight: 400;
  font-size : 16px;
  text-decoration: none;
  color: #d1d3d4;
  display: inline-block;
  white-space: nowrap;
  margin: 3px 90px 0px 0px;
  transition: all 200ms ease-in;
  position: relative;
  opacity: 1;

  :hover {
    opacity: .5;
  }

  @media (max-width: 1115px) {
    margin: 3px 20px 0px 20px;
  }
  
  @media (max-width: 1015px) {
    margin: 3px 7px 0px 7px;
  }
`

const FooterLinks = () => {
  return (
    <FooterContainer>
      <FooterItemContainer className="item-0">
        <FooterTitle>General</FooterTitle>
        <FooterItem to="/aboutus/">About Us</FooterItem>
        <FooterItem to="/products/">Products</FooterItem>
        <FooterItem to="/wheretobuy/">Where to Buy</FooterItem>
        <FooterItem to="/contactus/">Contact Us</FooterItem>
      </FooterItemContainer>

      <FooterItemContainer className="item-1">
        <FooterTitle>Products</FooterTitle>
        <FooterItem to="/products">Toilet Paper</FooterItem>
        <FooterItem to='/products'>Paper Towel Rolls</FooterItem>
      </FooterItemContainer>
   
      <FooterItemContainer className="item-2">
        <FooterTitle>Contact</FooterTitle>
        <FooterItem to='https://www.facebook.com/Maxiepaper' target="_blank">Facebook</FooterItem>
        <FooterItem to='https://www.instagram.com/maxiepaper/' target="_blank">Instagram</FooterItem>
      </FooterItemContainer>
    </FooterContainer>
  )
}

export default FooterLinks
