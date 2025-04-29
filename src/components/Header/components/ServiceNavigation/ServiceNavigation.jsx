import ServiceNav from "src@/data/serviceNavigation.json"
import Link from "next/link"
import * as SC from './ServiceNavigation.styled'

export default function ServiceNavigation({handleShow}) {
    return (
        <>
         <div>
            <SC.WrapperServiceNavigationList>
               { ServiceNav.map(({id,href,text,icon}) => <li onClick={handleShow} key={id} ><Link href={href}><img src={icon} alt={text} />{text}</Link></li>)}
            </SC.WrapperServiceNavigationList>
        </div>
        </>
    )
}