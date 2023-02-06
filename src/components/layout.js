import React from "react"
// import PropTypes from "prop-types"
import "./layout.css"
import styled from "styled-components"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

const Container = styled.div`
    min-height: 100%;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer/>
    </Container>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
