import ServiceNav from "src@/data/serviceNavigation.json"
import Link from "next/link"
import * as SC from './ServiceNavigation.styled'

export default function ServiceNavigation({handleShow}) {
    return (
        <>
         <div>
            <SC.WrapperServiceNavigationList>
               { ServiceNav.map(({id,href,text}) => <li onClick={handleShow} key={id} ><Link href={href}><img src="/images/diagnostic.png" alt="diagnostic" />{text}</Link></li>)}
            </SC.WrapperServiceNavigationList>
        </div>
        </>
    )
}