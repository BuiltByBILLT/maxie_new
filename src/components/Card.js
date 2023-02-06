import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 400px;
    background-color: #eff9fe;
    border: 30px solid #eff9fe;
    border-top: 55px solid #eff9fe;
    border-bottom: 55px solid #eff9fe;
    border-radius: 25px;
    text-align: center;
    margin: 0px 10px 50px 10px;

    @media (max-width: 500px) {
        margin: 0px 0px 50px 0px;
        border: 30px solid #eff9fe;
        border-top: 45px solid #eff9fe;
        border-bottom: 45px solid #eff9fe;
    }
`

const Icon = styled.img`
    height: 200px;
    margin: 15px;

    :hover {
        transform: scale(1.05);
    }
`

const Title = styled.h2`
    font-family: 'Karla';
    font-style: bold;
    font-size: 20px;
    font-weight: 700;
    color: #4d4d4f;
    letter-spacing: 0.2px;
    text-decoration: underline; 
    text-decoration-color: #eff9fe;
    -webkit-text-stroke: 0.4px #4d4d4f;

    @media (max-width: 500px) {
        font-size: 15px;
    }

    @media (max-width: 350px) {
        font-size: 13px;
    }
`

const Description = styled.span`
    font-family: 'Karla';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #4d4d4f;
    letter-spacing: 0.4px;
    text-decoration: underline; 
    text-decoration-color: #eff9fe;
    margin-bottom: 10px;

    @media (max-width: 500px) {
        font-size: 11px;
        line-height: 13px;
    }

    @media (max-width: 350px) {
        font-size: 10px;
        line-height: 12px;
    }
`

const CardWithoutLink = (props) => {
    return (
        <Container>
            <Icon src={props.icon}/>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </Container>
    )
}

export default CardWithoutLink