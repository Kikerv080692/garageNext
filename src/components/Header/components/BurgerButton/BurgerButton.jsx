import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import BurgerMenu from "src@/components/BurgerMenu/BurgerMenu";
import * as SC from './BurgerButton.styled'
export default function BurgerButton() {
    const [isShowMenu, setIsShowMenu] = useState(false)

    const handleShowMenu = () => {
        setIsShowMenu(!isShowMenu)
    }

    return (
        <SC.Wrapper>
        <button type='button' onClick={handleShowMenu}>
           {!isShowMenu ?  <GiHamburgerMenu size={24}/>:<ImCross size={24} />}
        </button>
        {isShowMenu && <BurgerMenu/>}
        </SC.Wrapper>
    )
}