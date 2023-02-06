import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../images/basic_logo.png"

const LogoWrap = styled.div`
  flex: 0 0 110px;
  margin-top: 0px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 0 100px;
  }

  @media (max-width: 900px) {
    margin-top: 50px;
  }

  @media (max-width: 500px) {
    flex: 0 0 90px;
  }
`

const LogoImage = styled.img`
  margin-bottom: 0;
`

const Logo = () => {
  return (
    <LogoWrap as={Link} to="/">
      <LogoImage src={logo} alt="logo"/>
    </LogoWrap>
  )
}

export default Logo
