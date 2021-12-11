import styled from "styled-components";

interface ProjectCardProps {
    widen: boolean
}

export const ProjectCard = styled.div<ProjectCardProps>`
    width:${({ widen }) => widen ? "100%" : "60%"};
    /* min-height:120px; */
    height:200px;
    border-radius:10px;
    background-color:#0D1117;
    margin:10px;
    
    h4{
        color:#59A7FF;
        font-family:"Segoe UI";
        font-size: 20px;
        margin-left:10px;
    }
    
    h5{
        color:grey;
        font-family:"Segoe UI";
        font-size:15px;
        font-weight:normal;
        margin:0 0 0 10px;
    }
    
    h6{
        font-family:"Segoe UI";
        font-size:13px;
        font-weight:normal;
        margin:10px 0 0 10px;
        color:#454A59;
    }
`

export const Header = styled.div`
    display:flex;
    margin: 0;
    align-items:center;
    /* background-color:green; */
    height:50px;
    width:100%;
    
    div{
        height:20px;
        border-radius:10px;
        border:1px solid grey;
        margin-left:10px;
        
        h4{
            font-family:"Segoe UI";
            font-size:13px;
            color:grey;
            margin:0 5px 0 5px;
            /* font-weight:normal; */
        }
    }
`