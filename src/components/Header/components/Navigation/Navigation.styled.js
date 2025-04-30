import styled from 'styled-components'

export const Nav = styled.nav `
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 80px;

@media (min-width: 768px) {
margin-top: 0;
}
`

export const NavList = styled.ul `

@media (min-width: 768px){
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
 }
list-style: none;
cursor: pointer;
`

export const NavListItem = styled.li`
margin-bottom: 20px;
@media (min-width: 768px) {
margin-bottom: 0;
}

`

export const ServiceItem = styled.li`
margin-top: 20px;
@media (min-width: 768px) {
margin-top: 0;
}
`