import styled from "styled-components";

export const WrapperBrakePage = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
margin-top: 50px;
margin-left: 20px;
margin-right: 20px;
  word-break: break-word;
  h1, h2, h3, p, li {
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-word;
  }
ul{
    list-style: disc;
    padding-left: 20px;
    margin: 0;

}
  img {
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 380px;
    height: auto;
    border-radius: 8px;
  }
   
`