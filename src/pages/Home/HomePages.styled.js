import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;     
text-align: center; 
padding: 20px;
@media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`
export const Title = styled.h1`
font-size: 24px;
font-weight: 700;
word-break: break-word;
margin-bottom: 10px;
@media (min-width: 768px){
  font-size: 24px;
}
`
export const SubTitle = styled.h2`
font-size: 18px;
word-break: break-word;
margin-bottom: 10px;
@media (min-width: 768px){
  font-size: 20px;
}
`

export const WrapperImage = styled.div`
margin: 20px 20px;

`
export const Image = styled.img`
  max-width: 400px;
  border-radius: 16px;
  padding: 10px;

  @media (min-width: 768px) {
    max-width: 800px; 
  }

  @media (min-width: 1024px) {
    max-width: 1000px; 
  }

`;

export const WrapperServiceList = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: 2px solid black;
border-radius: 6px;
margin: 0 8px;
margin-bottom: 30px;

@media (min-width: 768px){
  margin: 50px;
}
`