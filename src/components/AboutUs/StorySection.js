import React from "react"
import styled from "styled-components"
import Card from "../Card"
import SectionTitle from "../SectionTitle"
import icon1 from "../../images/avatars/avatar-2.png"
import icon2 from "../../images/avatars/avatar-1.png"
import icon3 from "../../images/avatars/avatar-4.png"

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .item-0 { order: 0; }
    .item-1 { order: 1; }
    .item-2 { order: 2; }
`

const ClubValuesSection = () => (
    <>
        <SectionTitle title="Our Story"></SectionTitle>
        <CardContainer>
            <Card className="item-0"
                title="ultra soft comfort."
                icon={icon1}
                description={<>Premium virgin pulp that offers support and comfortability from all angles. Our sheets 
                are cut to square perfection giving it an unmatched softness and consistency full of gentle protection.</>}
            />
            <Card className="item-1"
                title="utmost durability."
                icon={icon2}
                description={<>Relentless flexibility with each sheet to ensure quality performance. Our fortified 
                strength guarantees you will never need to worry about rips and tears in places where it’s most crucial.</>}
            />
            <Card className="item-2"
                title="feel value."
                icon={icon3}
                description={<>Less is More. Thicker 2 ply sheets to cover all areas you need at a fraction of what you 
                typically use. At Maxie, we strive to bridge the gap between superior quality and everyday affordability.</>}
            />
        </CardContainer>
    </>
)

export default ClubValuesSection