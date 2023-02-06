import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
    display: flex;
    flex-wrap: row;
    align-items: center;
    width: 65%;
    background-color: #eff9fe;
    border: 40px solid #eff9fe;
    border-top: 55px solid #eff9fe;
    border-bottom: 55px solid #eff9fe;
    border-radius: 25px;
    margin: 0px 50px 50px 50px;

    @media (max-width: 1000px) {
        width: 85%;
    }

    @media (max-width: 800px) {
        justify-content: center;
        flex-flow: row wrap;
        width: 350px;
    }
`

const Icon = styled.img`
    height: 250px;

    :hover {
        transform: scale(1.05);
    }
`

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 500px;
    margin: 20px 20px 20px 40px;
    text-align: left;

    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 20px 20px 20px 20px;
        text-align: center;
    }
`

const Title = styled.h2`
    font-family: 'Karla';
    font-style: italic;
    font-weight: 700;
    -webkit-text-stroke: 0.5px #4d4d4f;
    font-size: 33px;
    color: #4d4d4f;
    letter-spacing: 0.4px;
    text-transform: uppercase;
`

const Description = styled.span`
    font-family: 'Karla';
    font-style: semi-bold;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #4d4d4f;
    letter-spacing: 0.4px;
`

const Button = styled.img`
    width: 120px;
    margin: 30px 0px 0px 0px;
    opacity: 1;

    @media (max-width: 500px) {
        margin: 30px 20px 0px 20px;
    }

    :hover {
        opacity: 0.9;
    }
`

const HomeCard = (props) => {
    return (
        <Container> 
            <Icon src={props.icon}/>
            <InnerContainer>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <Link to={props.buttonLink} style={{textDecoration: "none"}}>
                    <Button src={props.button}/>
                </Link>
            </InnerContainer>
        </Container>
    )
}

export default HomeCard