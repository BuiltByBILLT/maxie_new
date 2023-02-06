import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 80px 50px 20px 50px;
`

const Title = styled.h1`
  font-family: 'Karla';
  font-style: italic;
  font-weight: 700;
  font-size: 60px;
  color: #414142;
  letter-spacing: -0.5px;
  -webkit-text-stroke: 0.5px #414142;
  text-transform: lowercase;

  @media (max-width: 700px) { font-size: 50px; }
`

const Decoration = styled.div`
  border-top: 8px solid #589bd4;
  width: 45px;
  margin-top: 20px;

  @media (max-width: 700px) { width: 40px; }
`

const SectionTitle = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Decoration/>
    </Container>
  )
}

export default SectionTitle