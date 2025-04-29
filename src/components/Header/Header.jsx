'use client'
import BurgerButton from "./components/BurgerButton/BurgerButton";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import SocialComponents from "./components/SocialComponents/SocialComponents";
import Translate from "./components/Translate/Translate";
import * as SC from './Header.styled'

const width = window.innerWidth < 768

export default function Header() {
    return (
        <SC.HeaderWrapper>
            <SC.LogoWrapper>
                <Logo />
            </SC.LogoWrapper>
            {!width &&
                <SC.NavigationWrapper>
                    <Navigation />
                </SC.NavigationWrapper>
            }

            <SC.SocialWrapper>
                <SocialComponents />
                <Translate />
            </SC.SocialWrapper>
            {
                width && <BurgerButton />
            }

        </SC.HeaderWrapper>
    )
}
