import styled from "styled-components";

export const WrapperServiceNavigationList = styled.ul`
margin: 0;
margin-top: 30px;
list-style: none;
padding: 0;

@media (min-width: 768px) {
margin-top: 0;
position: absolute;
top: 60px;
right: -160px;
background: black;
}
`

export const ListItem = styled.li`
margin-bottom: 10px;
@media (min-width: 768px) {
    font-size: 28px;
    &:hover {
        color: green;
        transform: scale(1.1);
    }
}
`
export const Img = styled.img`
margin-right: 10px;
filter: brightness(0) invert(1);

`