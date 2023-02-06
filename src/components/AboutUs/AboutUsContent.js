import React from "react"
import styled from "styled-components"
import MissionSection from "./MissionSection"
import StorySection from "./StorySection"

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const AboutUsContent = () => {
    return (
        <Container>
            <MissionSection/>
            <StorySection/>
        </Container>
    )
}

export default AboutUsContent