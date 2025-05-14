import styled from "styled-components";

export const Form = styled.form`
background: #343434;
border-radius: 6px;
width: 350px;
height: 200px;
color: white;
font-size: 24px;
font-weight: 500;
display: flex;
flex-direction: column;
align-items: center;
padding: 30px 0;
`
export const Label = styled.label`
margin-bottom: 10px;
`

export const ButtonSend = styled.button`
background: green;
padding: 10px;
color: white;
font-size: 18px;
font-weight: 500;
border-radius: 6px;
margin-top: 10px;

:hover{
    opacity: 1;
}
`