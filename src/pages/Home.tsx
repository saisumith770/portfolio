import Typewriter from 'typewriter-effect'

import waves from '../images/waves.svg'
import mockupContent from '../images/mockup-content.svg'
import mockup2 from '../images/mockup2-bg.svg'
import mockup3 from '../images/mockup3-bg.svg'
import mockupCard2 from '../images/mockup-card2.svg'

import Home from '../components/home'
import { Mockup, Waves } from '../components/home/images'
import { AnimationDiv, TextAnimation } from '../components/home/text'

export default function () {
    return (
        <Home>
            <Mockup src={mockupCard2} alt="Mockup" top="30px" right="600px" />
            <Mockup src={mockupCard2} alt="Mockup" top="30px" right="400px" />
            <Mockup src={mockupContent} alt="Mockup" top="50px" right="50px" />
            <Mockup src={mockup2} alt="Mockup" bottom="80px" right="300px" />
            <Mockup src={mockup3} alt="Mockup" bottom="50px" right="20px" />
            <Waves src={waves} alt="waves" />

            <div>
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
                <h1 style={{ marginLeft: "20px", position: "relative", bottom: "20px" }}>Developer</h1>
            </div>
        </Home>
    )
}