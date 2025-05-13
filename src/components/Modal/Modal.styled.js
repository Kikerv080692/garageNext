import styled from "styled-components";

export const WrapperModal = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
z-index: 20;
background-color: grey;
`

export const InnerWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
`

export const Close = styled.button`
position: absolute;
top: 10px;
right: 20px;
background: transparent;
border: none;
outline: none;
cursor: pointer;
`