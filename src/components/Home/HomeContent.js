import React from "react"
import styled from "styled-components"
import Card from "./HomeCard"
import icon1 from "../../images/avatars/avatar-1.png"
import icon2 from "../../images/avatars/avatar-2.png"
import icon3 from "../../images/avatars/avatar-3.png"
import button1 from "../../images/buttons/learn-more-button.png"
import button2 from "../../images/buttons/explore-now-button.png"
import button3 from "../../images/buttons/find-store-button.png"

const Container = styled.div`
    margin: 70px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .item-0 { 
        order: 0; 

        :hover {
            background-color: #ededee;
            border: 40px solid #ededee;
            border-top: 55px solid #ededee;
            border-bottom: 55px solid #ededee;
        }
    }
    .item-1 { order: 1; }
    .item-2 { order: 2; }
`
const HomeContent = () => {
    return (
        <>
            <Container>
                <Card className="item-0"
                    title="What is Maxie?"
                    icon={icon1}
                    description={<>Read about our mission to provide sustainable, quality products at the best prices!</>}
                    button={button1}
                    buttonLink="/aboutus"
                />
                <Card className="item-1"
                    title="Explore Our Products"
                    icon={icon2}
                    description={<>Browse our collection of soft and absorbent toilet paper and cost-saving, handy paper towel products.</>}
                    button={button2}
                    buttonLink="/products"
                />
                <Card className="item-2"
                    title="Find Maxie Near You"
                    icon={icon3}
                    description={<>Trying to figure out where to buy Maxie for your household? We’ll help you find a store close to you!</>}
                    button={button3}
                    buttonLink="/wheretobuy"
                />
            </Container>
        </>
    )
}

export default HomeContent
