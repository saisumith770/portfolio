import styled from 'styled-components'

export default styled.div` 
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    /* justify-content:center; */
    align-items:center;
    overflow-y:scroll;

    h1{
        font-family:"Segoe UI";
        color:white;
    }

    a{
        text-decoration:none;
    }

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