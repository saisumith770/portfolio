import Header from './components/about/header'
import {
  ProfileSection,
  ProfileDescription
} from './components/about/profile'
import Background from './components/general/background';
import { useWindowSize } from './hooks/useWindowSize';

import styled from 'styled-components';

import { AiFillGithub } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'

const SocialLink = styled.div`
  color: white;
  font-size: 20px;
  cursor: pointer;

  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    background-color: #2C2C31;
  }
`

const SocialSection = styled.div`
  background-color: #212127;
  width: 40px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  position: relative;
  top:50%;
  transform: translate(0,-50%);

  z-index:1;
`

function Socials() {
  return (
    <SocialSection>
      <SocialLink children={<AiFillYoutube />} />
      <SocialLink children={<AiFillGithub />} />
      <SocialLink children={<FaDiscord />} />
      <SocialLink children={<AiOutlineTwitter />} />
    </SocialSection>
  )
}

function UserIntroduction() {
  const { width } = useWindowSize()
  return (
    <Header widen={width < 850}>
      <h1>ABOUT</h1>
      <ProfileSection>
        <img src="https://avatars.githubusercontent.com/u/67259068?v=4"
          alt="user-image"
        />
        <div>
          <h4>Sai Sumith</h4>
          <h5>saisumith812@gmail.com</h5>
        </div>
      </ProfileSection>
      <ProfileDescription>
        <h4>
          &emsp;&emsp;I'm currently pursuing my under graduation in the National Institute of Technology Durgapur, West Bengal, India.
          Back in 2017 at the age of 13 I had my first exposure to programming through python. Over the next year I
          had learnt to build basic website's along with html and css.<br />
          &emsp;&emsp;2019 was the year I started taking software development seriously and wanted to pursue it as a career. This year
          I got myself familiarised with developing web servers in Flask and Django. I got to understand how the HTTP requests
          work and how the underlying payload is communicated through the protocol.<br />
          &emsp;&emsp;Mid-way through 2020 I realised that focusing on my school and academics would be a total waste of time and decided
          to teach myself other languages like javascript, typescript, go, elixir.
        </h4>
      </ProfileDescription>
    </Header>
  )
}

function App() {
  return (
    <Background color="black" display="flex">
      <Socials />
      <UserIntroduction />
    </Background>
  );
}

export default App;
