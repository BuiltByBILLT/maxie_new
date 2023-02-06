import React from "react"
import styled from "styled-components"
import tp from "../../images/home/tp-34.png"
import gif from "../../images/home/maxie_background-33.png"

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
  align-content: center;
`

const Container = styled.div`
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  flex-flow: column wrap;
  align-items: flex-start;
  position: absolute;
  bottom: 20%;
  left: 5%;
  right: 55%;
  transform: translate(5%, 5%);

  .item-0 { order: 0; }
  .item-1 { order: 1; }
  .item-2 { order: 2; }

  @media (max-width: 1400px) { bottom: 25%;}
  @media (max-width: 1300px) { top: 20%;}
  @media (max-width: 1000px) { bottom: 50%;}
  @media (max-width: 850px) { text-align:center; align-items:center; top: 20%; bottom: 0%; left: 0%; right: 10%; }
  @media (max-width: 700px) { top: 15%; }
  @media (max-width: 400px) { top: 10%; }
`

const Title = styled.h1`
  font-family: 'Karla';
  font-style: italic;
  font-weight: 700;
  font-size: 80px;
  color: #414042;
  -webkit-text-stroke: 1px #414042;
  letter-spacing: -0.9px;
  margin-left: -5px;

  @media (max-width: 1370px) { font-size: 75px; }
  @media (max-width: 1270px) { font-size: 70px; }
  @media (max-width: 850px) { font-size: 80px; }
  @media (max-width: 650px) { font-size: 70px; }
  @media (max-width: 550px) { font-size: 55px; }

  @media (max-width: 300px) { font-size: 35px; }
`

const Description = styled.h1`
  font-family: 'Karla';
  font-style: italic;
  font-weight: 500;
  font-size: 23px;
  line-height: 20px;
  color: #414042;
  letter-spacing: 0.4px;
  line-height: 26px;

  margin-top: 5px;

  @media (max-width: 1370px) {
    font-size: 21px;
    line-height: 24px;
  }

  @media (max-width: 1070px) {
    font-size: 19px;
    line-height: 22px;
  }

  @media (max-width: 850px) {
    font-size: 20px;
    line-height: 23px;
  }

  @media (max-width: 650px) {
    font-size: 18px;
    line-height: 21px;
  }

  @media (max-width: 300px) {
    font-size: 13px;
    line-height: 16px;
  }
`

const Gif = styled.img`
  z-index: 1;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Img = styled.img`
  z-index: 2;
  position: absolute;
  right: 10%;
  top: 20%;
  height: 800px;
  background-position: right;
  @media (max-width: 1400px) { height: 700px; }
  @media (max-width: 1300px) { height: 600px; }
  @media (max-width: 1100px) { height: 500px; }
  @media (max-width: 1000px) { height: 450px; }
  @media (max-width: 850px) { height: 0px; }
`
// const TPImage = styled(StaticImage)`

// `

const HomeBanner = () => (
  <>
    <OuterContainer>
      <Container>
        <Title className="item-0">roll with us.</Title>
        <Description className="item-1">
          MAXIE. The leading toilet paper brand that guarantees MAXimum value.
        </Description>
      </Container>
      <Gif src={gif} alt="gif"/>
    </OuterContainer>
    <Img src={tp} alt="tp"/>
  </>
)

export default HomeBanner
