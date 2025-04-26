import ServiceNav from "src@/data/serviceNavigation.json"
import Link from "next/link"


export default function ServiceNavigation({handleShow}) {
    return (
        <>
         <div>
            <ul>
               { ServiceNav.map(({id,href,text}) => <li onClick={handleShow} key={id} ><Link href={href}>{text}</Link></li>)}
            </ul>
        </div>
        </>
    )
}