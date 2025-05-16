import { useState } from "react";
import BurgerMenu from "src@/components/BurgerMenu/BurgerMenu";
import * as SC from './BurgerButton.styled'




export default function BurgerButton() {
    const [isShowMenu, setIsShowMenu] = useState(false)

    const handleShowMenu = () => {
        setIsShowMenu(!isShowMenu)
    }

    const handleCloseMenu = () => {
        setIsShowMenu(false)
    }

    return (
        <SC.Wrapper>
        <SC.IconButton type='button' onClick={handleShowMenu}>
           {!isShowMenu ? <img src='/images/menu.png' alt="menu"/> : <img src='/images/close-option.png' alt="close"/>}
        </SC.IconButton>
         <BurgerMenu isShowMenu={isShowMenu} handleShowMenu={handleShowMenu} handleCloseMenu={handleCloseMenu}/>
        </SC.Wrapper>
    )
}

