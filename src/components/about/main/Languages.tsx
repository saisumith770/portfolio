import React from "react";
import styled from "styled-components";

export default styled.div`
    width:100%;

    h1{
        color:silver;
        font-family:'Segoe UI';
    }

    div{
        width:100%;
        background-color:#172331;
        border-radius:5px;
        display:flex;
    }
`

type IconType = { name: string, icon: JSX.Element }

export const Icon = styled.div<IconType>`
    
`