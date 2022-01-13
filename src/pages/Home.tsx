import Typewriter from 'typewriter-effect'

import waves from '../images/waves.svg'
import mockupContent from '../images/mockup-content.svg'
import mockup2 from '../images/mockup2-bg.svg'
import mockup3 from '../images/mockup3-bg.svg'
import mockupCard2 from '../images/mockup-card2.svg'

import Home from '../components/home'
import { Mockup, Waves } from '../components/home/images'
import { AnimationDiv, TextAnimation, ExperienceSection } from '../components/home/text'
import Socials from '../components/home/socials'

import {
    ProfileSection,
} from '../components/about/introduction/profile'

import { useWindowSize } from '../hooks/useWindowSize'

function LeftSideContent() {
    return (
        <ExperienceSection>
            <div style={{ marginLeft: "20px", position: "relative", bottom: "40px" }}>
                <ProfileSection>
                    <img src="https://avatars.githubusercontent.com/u/67259068?v=4"
                        style={{
                            width: "80px",
                            height: "80px"
                        }}
                    />
                    <div>
                        <h4 style={{ fontSize: "30px", color: "white" }}>Sai Sumith</h4>
                        <h5 style={{ fontSize: "20px", color: "silver" }}>saisumith812@gmail.com</h5>
                    </div>
                </ProfileSection>
            </div>
            <AnimationDiv>
                <h1 style={{ margin: "0 15px 0 20px" }}>Self-taught</h1>
                <TextAnimation>
                    <Typewriter
                        options={{
                            strings: [
                                "Javascript",
                                "Typescript",
                                "Python",
                                "Web",
                                "React",
                                "React Native"
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </TextAnimation>
            </AnimationDiv>
            <h1 style={{ marginLeft: "20px", position: "relative", bottom: "5px", marginBottom: "10px" }}>Developer</h1>
            <Socials />
        </ExperienceSection>
    )
}

export default function Index() {
    const { width } = useWindowSize()
    return (
        <Home>
            <Waves src={waves} alt="waves" />
            <div style={{
                width: "100px",
                height: "100px",
                position: "relative",
                top: "50%",
                left: width < 1290 ? "774px" : "60%",
                transform: "translate(0,-50%)",
            }}>
                <Mockup src={mockupCard2} alt="Mockup" top="-210px" left="-100px" />
                <Mockup src={mockupCard2} alt="Mockup" top="-210px" left="-300px" />
                <Mockup src={mockupContent} alt="Mockup" top="-180px" left="-280px" />
                <Mockup src={mockup2} alt="Mockup" top="10px" left="-220px" />
                <Mockup src={mockup3} alt="Mockup" top="50px" left="60px" />
            </div>

            <LeftSideContent />
        </Home>
    )
}