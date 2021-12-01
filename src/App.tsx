import React from 'react';
import styled from "styled-components"

const Background = styled.div`
  background-color: ${({ color }) => color};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const Header = styled.div`
  width: calc(40% - 80px);
  height: 100%;
  /* background-color: grey; */
  position: fixed;
  top:0;
  left:80px;
  overflow-y: scroll;

  h1 {
    color: white;
    font-family: 'Oswald';
    font-size: 80px;
    margin:70px 0 0 0;
  };

  &::-webkit-scrollbar {
    width: 7px;
    background-color: transparent;
  };

  &::-webkit-scrollbar-button {
      display: none;
      width: 0;
      height: 0;
  };

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  };

  &::-webkit-scrollbar-thumb {
    background-color: #4a4d52;
    border: 2px solid #282a2d;
    border-radius: 10px;
    visibility:hidden;
  };

  &:hover::-webkit-scrollbar-thumb {
    visibility:visible;
  }

  `

const ProfileSection = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  /* background-color: green; */

  img{
    width:50px;
    height:50px;
    border-radius: 50%;
  };
  
  div{
    flex-direction: column;
    margin:0 0 0 10px;

    h4{
      color:silver;
      margin:0;
      font-family: 'Segoe UI';
    };
    h5{
      color: grey;
      margin:0;
      font-family: 'Segoe UI';
    };
  };
`

const ProfileDescription = styled.div`
  margin-top:10px;

  h4{
    color: silver;
    font-family: 'Segoe UI';
    font-size:13px;
  };
`

function App() {
  return (
    <Background color="black">
      {/* About 40% - 80px(social links in left side) of the page is occupied by header */}
      <Header>
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
    </Background>
  );
}

export default App;
