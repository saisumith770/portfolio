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
    color: lightseagreen;
  }
`

const SocialSection = styled.div`
    height:40px;
    width:130px;
    border-radius: 20px;
    border:1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left:20px;
`

export default function Socials() {
  return (
    <SocialSection>
      <SocialLink children={<AiFillYoutube />} href="https://www.youtube.com/channel/UCfbDVrWZ6pBDc1gf3_qQU6g" target="_blank" />
      <SocialLink children={<AiFillGithub />} href="https://github.com/saisumith770" target="_blank" />
      <SocialLink children={<FaDiscord />} href="https://www.discord.gg/invite/yu4RtV5dYa" target="_blank" />
      <SocialLink children={<AiOutlineTwitter />} href="https://twitter.com/saisumith15" target="_blank" />
    </SocialSection>
  )
}