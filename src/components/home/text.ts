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

export const ExperienceSection = styled.div`
    width:550px; 
    /* background-color: green; */

    h1{
        font-family: 'Segoe UI';
        color:white;
        font-size: 40px;
        margin:0;
    }
`
