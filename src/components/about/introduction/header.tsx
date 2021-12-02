import styled from 'styled-components'

interface Props {
  widen: boolean
}

export default styled.div<Props>`
  width: ${({ widen }) => widen ? "calc(100% - 20px)" : `calc(40% - 80px)`};
  height: ${({ widen }) => widen ? "auto" : "100%"};
  position: relative;
  /* top:0; */
  margin-left:${({ widen }) => widen ? "10px" : "30px"};
  overflow-y: ${({ widen }) => widen ? "visible" : "scroll"};
  /* background-color: green; */
  
  h1 {
      color: white;
      font-family: 'Oswald';
      font-size: 80px;
      margin:70px 0 0 0;
      text-align: ${({ widen }) => widen ? "center" : ""};
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