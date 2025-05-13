import styled from "styled-components";

export const WrapperItem = styled.div`
border: 2px solid grey;
border-radius: 4px;
padding: 10px 15px;
width: 95%;
margin: 20px 10px;

`


export const Item = styled.li`
list-style: none;
cursor: pointer;
img{
width: 80px;
}

p {
font-size: 16px;
line-height: 1.4;
word-break: break-word;
width: 100%;
margin-top: 10px;
}
@media (min-width: 768px) {
flex-direction: row;
}
`
export const WrapperIMGTitle = styled.div`
display: flex;
align-items: flex-start;
align-items: center;
gap: 30px; 
padding-left: 30px;
`
