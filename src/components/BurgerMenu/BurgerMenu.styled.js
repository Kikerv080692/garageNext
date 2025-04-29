import styled from "styled-components";

export const Wrapper = styled.div`
position: fixed;
background-color: grey;
top: 0;
left: 100px;
width: 100vw;
height: 100vh ;
color: black;
transform: translateX(-100%);
  transition: transform 0.3s ease;

  &.show {
    transform: translateX(0);
  }
`