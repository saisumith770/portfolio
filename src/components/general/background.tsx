import styled from 'styled-components'

interface Props {
    color?: string,
    display?: string
}

export default styled.div<Props>`
    background-color: ${({ color }) => color};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: ${({ display }) => display};
`