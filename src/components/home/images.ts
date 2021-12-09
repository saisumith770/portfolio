import styled from 'styled-components'

interface MockupProps {
    top?: string,
    bottom?: string,
    right?: string,
    left?: string
}

export const Mockup = styled.img<MockupProps>` 
    position: absolute;
    transform: rotateY(-20deg) rotateX(20deg);
    top: ${({ top }) => top || ""};
    right: ${({ right }) => right || ""};
    bottom:${({ bottom }) => bottom || ""};
    left:${({ left }) => left || ""};
    backdrop-filter: blur(10px);
    background: rgba(23, 12, 61, 0.3);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 25%) 0px 20px 40px, rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
`

export const Waves = styled.img`
    width: 100%;
`