import styled from "styled-components";
import { AiFillGithub } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'

const SocialLink = styled.a`
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

interface SocialSectionProps {
  display: boolean
}

const SocialSection = styled.div<SocialSectionProps>`
  background-color: #212127;
  width: 40px;
  height: 180px;
  display: ${({ display }) => display ? "flex" : "none"};
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

export default function ({ width }: { width: number }) {
  return (
    <SocialSection display={width > 850}>
      <SocialLink children={<AiFillYoutube />} href="https://www.youtube.com/channel/UCfbDVrWZ6pBDc1gf3_qQU6g" target="_blank" />
      <SocialLink children={<AiFillGithub />} href="https://github.com/saisumith770" target="_blank" />
      <SocialLink children={<FaDiscord />} href="https://www.discord.gg/invite/yu4RtV5dYa" target="_blank" />
      <SocialLink children={<AiOutlineTwitter />} href="https://twitter.com/saisumith15" target="_blank" />
    </SocialSection>
  )
}