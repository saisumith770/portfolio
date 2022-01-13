import styled from "styled-components";

export const Icon = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    img{
        width:50px;
        height:50px;
        border-radius:5px;
    }
`

export const ExperienceTab = styled.div<{ exp: string }>`
    display:flex;
    align-items: center;
    position:relative;

    h1{
        color: lightgrey;
        font-family: 'Segoe UI';
        font-size:15px;
        position:relative;
        left:10px;
    }

    .progress-bar{
        width:calc(100% - 200px);
        height:10px;
        background-color: #1F1E22;
        position:absolute;
        right:0;
    }

    .inner-bar{
        width:${({ exp }) => exp};
        height:"100%";
        float:left;
        background-color: teal;
    }
`

export default styled.div`
    width:100%;
    margin-bottom:20px;

    h1{
        color:silver;
        font-family:'Segoe UI';
    }

    h2{
        color:gray;
        font-family:'Segoe UI';
    }

    div{
        width:100%;
        background-color:#0F0F10;
        border-radius:5px;
        display:flex;
        flex-wrap:wrap;

        ${Icon}{
            width: 70px;
            height: 70px;
            background-color: #1F1E22;
            margin: 10px;
            border: 1px solid black;
            box-shadow: 0 0 10px black;
            border-radius: 20px;
        }
    }

    ${ExperienceTab}{
        background: none;
    }
`