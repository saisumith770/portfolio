import styled from 'styled-components'

interface Props {
    color?: string,
    display?: string,
    flexDirection?: string,
}

export default styled.div<Props>`
    background-color: ${({ color }) => color};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: ${({ display }) => display};
    flex-direction: ${({ flexDirection }) => flexDirection};

    overflow-y: scroll;

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