import styled from "styled-components";

export const WrapperServiceNavigationList = styled.ul`
margin: 0;
margin-top: 30px;
list-style: none;
padding: 0;
width: 250px;

@media (min-width: 768px) {
margin-top: 0;
position: absolute;
top: 60px;
right: -160px;
background: #404040;
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
padding-left: 20px;
 padding-right: 10px;
filter: brightness(0) invert(1);

`