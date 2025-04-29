import Navigation from "../Header/components/Navigation/Navigation";
import * as SC from './BurgerMenu.styled'

export default function BurgerMenu({handleShowMenu}) {
    return (
        <SC.Wrapper>
          <Navigation />
          <img onClick={handleShowMenu} src='/images/close-option.png' alt="close"/>
        </SC.Wrapper>
    )
}