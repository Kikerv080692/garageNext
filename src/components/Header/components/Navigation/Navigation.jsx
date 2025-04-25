import MainNavigation from "src@/data/navigation.json"
import Link from "next/link"
import { FaViber } from "react-icons/fa";
<FaViber />

export default function Navigation() {
    return (
        <nav>
            <ul>
               { MainNavigation.map(({id,href,text}) => <li key={id} ><Link href={href}>{text}</Link></li>)}
            </ul>
        </nav>
    )
}