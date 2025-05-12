import MainNavigation from "src@/data/navigation.json"
import Link from "next/link"
import { FaViber } from "react-icons/fa";
import {  useState } from "react";
<FaViber />
import ServiceNavigation from "../ServiceNavigation/ServiceNavigation";
import * as SC from './Navigation.styled'

export default function Navigation({handleCloseMenu}) {
    const [isShowService, setIsShowService] = useState(false)
    

    const  handleShow = () => {
       setIsShowService(!isShowService) 
    }

    const handleCloseClick = () => {
        handleCloseMenu()
        setIsShowService(false)
    }

    return (
        <SC.Nav >
            <SC.NavList>
                {MainNavigation.map(({ id, href, text }) => <SC.NavListItem onClick={handleCloseClick} key={id} ><Link href={href}>{text}</Link></SC.NavListItem>)}
                <SC.ServiceItem onClick={handleShow}>Service</SC.ServiceItem>
            </SC.NavList>
            {isShowService && <ServiceNavigation handleShow={handleCloseClick} /> }
        </SC.Nav>
    )
}

