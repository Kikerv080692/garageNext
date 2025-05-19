import styled from "styled-components";

export const List = styled.ul`
display: grid;
padding: 0;
box-sizing: border-box;
grid-template-columns: 1fr; 
background: #131619;
max-width: 400px;
width: 100%;  
align-items: start;

@media (min-width: 768px) {
grid-template-columns: repeat(2, 1fr); 
}

@media (min-width: 1024px) {
 grid-template-columns: repeat(3, 1fr);  
}

@media (min-width: 1700px) {
      grid-template-columns: repeat(5, 1fr); 
   
}
`;