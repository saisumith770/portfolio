import styled from 'styled-components'

interface NavProps {
    horizontal: boolean
}

export default styled.div<NavProps>`
    width:${({ horizontal }) => horizontal ? "100%" : "50px"};
    height:${({ horizontal }) => horizontal ? "50px" : "100%"};
    background-color: ${({ horizontal }) => horizontal ? "black" : "none"};
    position:fixed;
    right:0;
    top:0;
    display: flex;
    flex-direction: ${({ horizontal }) => horizontal ? "row" : "column"};
    /* justify-content: center; */

    h4{
        color:grey;
        font-family:"Segoe UI";
        transform: ${({ horizontal }) => horizontal ? "" : "rotate(90deg)"};
        cursor: pointer;
        font-size:13px;
        font-weight: normal;
        /* /* margin-top: 20px; */
        margin-bottom: ${({ horizontal }) => horizontal ? "0" : "20px"}; 
        margin-left: ${({ horizontal }) => horizontal ? "20px" : "0px"}; 

        &:hover{
            color:white
        }
    }
`