import styled from "styled-components";

export const List = styled.ul`
display: grid;
padding: 0;
margin: 0;
grid-template-columns: 1fr; 
background: #131619;

@media (min-width: 768px) {
 grid-template-columns: repeat(3, 1fr); 
}

@media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr); 
}
`