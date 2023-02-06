import React, { useState } from "react"
import styled from "styled-components"
import FooterLinks from "./FooterLinks"
import Logo from "./Logo"

const FooterNavigation = styled.div`
  min-height: 35vh;
  display: flex;
  background-color: #589bd4;
  background-attachment: fixed;
  background-position: top right;
  justify-content: space-evenly;
  align-items: center;
  position:absolute;
  left:0;
  right:0;
  overflow-y:hidden;

  .item-0 { order: 0; }
  .item-1 { order: 1; }
  .active { flex: 0 0 0%; }

  @media (max-width: 900px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    .active { flex: 1 0 100%; }
  }
`

const OuterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column wrap;
  width: 300px;
  text-align: center;
`

const Description = styled.span`
    // width: 300px;
    font-family: 'Karla';
    font-style: semi-bold;
    font-weight: 500;
    font-size: 12px;
    line-height: 13px;
    color: #eff9fe;
    letter-spacing: 0.4px;
    opacity: 0.8;
    // margin: 10px;
`

const Footer = () => {
  return (
    <>
      <FooterNavigation>
        <OuterContainer>
          <Logo className="item-0"/>
          <Description>Copyright © 2021 Maxie Paper.</Description>
        </OuterContainer>
        <div className="active"><a href="#"></a></div>
        <FooterLinks className="item-1"/>
      </FooterNavigation>
    </>
  )
}

export default Footer
