import ServiceNav from "src@/data/serviceNavigation.json"
import Link from "next/link"
import * as SC from './ServiceNavigation.styled'

export default function ServiceNavigation({handleShow}) {
    return (
        <>
            <SC.WrapperServiceNavigationList>
               { ServiceNav.map(({id,href,text,icon}) => <SC.ListItem onClick={handleShow} key={id} ><Link href={href}><SC.Img fill="white" src={icon} alt={text} />{text}</Link></SC.ListItem>)}
            </SC.WrapperServiceNavigationList>
        </>
    )
}