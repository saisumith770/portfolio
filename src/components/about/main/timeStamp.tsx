import styled from "styled-components"

export default styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  h1{
    color:silver;
    font-family: 'Segoe UI';
  }

  h2{
    color:teal;
    font-family:"Segoe UI";
    font-size:30px;
    margin-left:10px;
    margin-right:10px;
  }

  div{
      background-color: #212127;
      border-radius:5px;

      h1{
          color:lightseagreen;
          font-family: 'Segoe UI';
          font-size:15px;
          margin:5px;
      }
  }
`