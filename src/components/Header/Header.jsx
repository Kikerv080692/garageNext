'use client'
import { useEffect, useState } from "react";
import BurgerButton from "./components/BurgerButton/BurgerButton";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import SocialComponents from "./components/SocialComponents/SocialComponents";
import Translate from "./components/Translate/Translate";
import * as SC from './Header.styled'

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <SC.HeaderWrapper>
            <SC.LogoWrapper>
                <Logo />
            </SC.LogoWrapper>

            {!isMobile &&
                <SC.NavigationWrapper>
                    <Navigation />
                </SC.NavigationWrapper>
            }

            <SC.SocialWrapper>
                <SocialComponents />
                <Translate />
            </SC.SocialWrapper>

            {isMobile && <BurgerButton />}
        </SC.HeaderWrapper>
    );
}
