import React from "react"
import styled from "styled-components"
import icon1 from "../../images/avatars/avatar-1.png"
import SectionTitle from "../SectionTitle"

const Container = styled.div`
    display: flex;
    flex-wrap: row;
    align-items: center;
    width: 900px;
    background-color: #eff9fe;
    border: 40px solid #eff9fe;
    border-top: 55px solid #eff9fe;
    border-bottom: 55px solid #eff9fe;
    border-radius: 25px;
    margin: 10px;

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
    width: 320px;

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

const Description = styled.span`
    font-family: 'Karla';
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    color: #4d4d4f;
    letter-spacing: 0px;
    margin: 10px;
`

const MissionSection = () => {
    return (
        <>
            <SectionTitle title="Our Mission"/>
            <Container> 
                <InnerContainer>
                    <Description><b><em>How do we show that we care?</em></b></Description>
                    <Description>Outside of our mission to keep you comfortable indoors, Maxie believes that product 
                        sustainability is the cornerstone for any company’s credibility. Maxie has adopted a <b>low-carbon, 
                        green supply chain</b> methodology.</Description>
                    <Description>We prioritize outsourcing our materials from suppliers certified by the Forest Stewardship 
                        Council Kingdom (FSC), Programme for the Endorsement of Forest Certification (PEFC), and the CFCC. 
                        With our <b>sustainability</b> approach in mind, Maxie takes pride in caring not only for our beloved customers, 
                        but also for our planet. 🌎</Description>
                </InnerContainer>
                <Icon src={icon1}/>
            </Container>
        </>
    )
}

export default MissionSection