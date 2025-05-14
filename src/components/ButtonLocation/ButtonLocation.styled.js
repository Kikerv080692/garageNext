import styled from "styled-components";

export const WrapperLocationButton = styled.div`
position: fixed;
bottom: 380px;
right: 30px;
width: 60px;
height: 60px;
border-radius: 50%;
background: green;
cursor: pointer;
  overflow: hidden;
   border: 2px solid green;
`

export const Button = styled.button`
position: absolute;
top: 8px;
right: 8px;
border: none;
width: 40px;
height: 40px;
cursor: pointer;
img {
    background: green;
    border: none;
    display: block;
    width: 100%;
    height: 100%;

}
`