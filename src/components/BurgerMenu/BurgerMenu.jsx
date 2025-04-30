import Navigation from "../Header/components/Navigation/Navigation";
import * as SC from './BurgerMenu.styled'

export default function BurgerMenu({handleShowMenu, isShowMenu}) {
  console.log(isShowMenu)
    return (
        <SC.Wrapper className={isShowMenu ? 'enter' : 'out'}>
          <Navigation />
          <SC.Img onClick={handleShowMenu} src='/images/close-option.png' alt="close"/>
        </SC.Wrapper>
    )
}