import styled from 'styled-components'

export const TextAnimation = styled.h1`
    font-family: "Segoe UI";
`

export const AnimationDiv = styled.div`
    display: flex;

    ${TextAnimation}{
        color: aquamarine;
        width:300px;
    }
`
