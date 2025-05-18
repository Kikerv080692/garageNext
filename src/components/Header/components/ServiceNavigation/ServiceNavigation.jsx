"use client"
import ServiceNav from "src@/data/serviceNavigation.json"
import Link from "next/link"
import * as SC from './ServiceNavigation.styled'
import { useTranslation } from 'react-i18next'


export default function ServiceNavigation({ handleShow }) {
 const { t } = useTranslation()
    return (
        <>
            <SC.WrapperServiceNavigationList>
                {ServiceNav.map(({ id, href, text, icon }) => <SC.ListItem onClick={handleShow} key={id} >
                    <Link href={href}>
                        <div style={{ display: "flex", alignItems: "center" }}><SC.Img fill="white" src={icon} alt={text} />{t(text)}
                        </div>
                    </Link>
                </SC.ListItem>)}
            </SC.WrapperServiceNavigationList>
        </>
    )
}