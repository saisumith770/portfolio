import styled from "styled-components";

export const ProfileSection = styled.div`
display: flex;
width: 100%;
height: 50px;
/* background-color: green; */

img{
  width:50px;
  height:50px;
  border-radius: 50%;
};

div{
  flex-direction: column;
  margin:0 0 0 10px;

  h4{
    color:silver;
    margin:0;
    font-family: 'Segoe UI';
  };
  h5{
    color: grey;
    margin:0;
    font-family: 'Segoe UI';
  };
};
`

export const ProfileDescription = styled.div`
margin-top:10px;

h4{
  color: silver;
  font-family: 'Segoe UI';
  font-size:13px;
};
`