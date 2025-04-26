'use client'
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import SocialComponents from "./components/SocialComponents/SocialComponents";
import * as SC from './Header.styled'

export default function Header() {
    return (
        <SC.HeaderWrapper>
        <Logo/>
        <Navigation/>
        <SocialComponents/>
        </SC.HeaderWrapper>
    )
}